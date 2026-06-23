import { Request, Response } from "express";
import Trip from "../models/Trip.js";

import { getWeather } from "../services/weather.service.js";
import { recalculateBudget } from "../utils/recalculateBudget.js";
import { calculateTripBudget } from "../utils/calculateTripBudget.js";
import {
  generateTripAIData,
  regenerateDayData,
} from "../services/trip-ai-service.js";

export const generateTrip = async (req: Request, res: Response) => {
  try {
    const trip = await Trip.findOne({
      _id: req.params.tripId,
      userId: req.user.id,
    });

    if (!trip) {
      return res.status(404).json({
        success: false,
        message: "Trip not found",
      });
    }

    const weather = await getWeather(trip.destination);

    if (!weather?.main) {
      return res.status(400).json({
        success: false,
        message: "Destination must be a valid city, country, or location.",
      });
    }

    const parsed = await generateTripAIData(trip, weather);

    trip.currency = parsed.currency || "USD";

    trip.itinerary = parsed.itinerary;

    trip.hotels = parsed.hotels;

    trip.packingList = parsed.packingList.map((item: any) => ({
      ...item,
      isPacked: false,
    }));

    trip.estimatedBudget = calculateTripBudget(trip);

    trip.status = "planned";

    await trip.save();

    res.json({ success: true, trip });
  } catch (error: any) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message || "Failed to generate itinerary",
    });
  }
};

export const regenerateDay = async (req: Request, res: Response) => {
  try {
    const { tripId, dayNumber, instruction } = req.body;

    const trip = await Trip.findOne({
      _id: tripId,
      userId: req.user.id,
    });

    if (!trip) {
      return res.status(404).json({
        success: false,
        message: "Trip not found",
      });
    }

    const parsed = await regenerateDayData(trip, dayNumber, instruction);

    const dayToUpdate = trip.itinerary.find(
      (day) => day.dayNumber === Number(dayNumber),
    );

    if (!dayToUpdate) {
      return res.status(404).json({ success: false, message: "Day not found" });
    }

    dayToUpdate.activities = parsed.activities;

    recalculateBudget(trip);

    await trip.save();

    res.json({
      success: true,
      trip,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to regenerate day",
    });
  }
};
