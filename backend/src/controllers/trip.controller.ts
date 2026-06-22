import { Request, Response } from "express";

import Trip from "../models/Trip.js";
import { recalculateBudget } from "../utils/recalculateBudget.js";
import mongoose from "mongoose";

export const createTrip = async (req: Request, res: Response) => {
  try {
    const trip = await Trip.create({
      ...req.body,
      userId: req.user.id,
    });

    return res.status(201).json({ success: true, trip });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to create trip",
    });
  }
};

export const getTrips = async (req: Request, res: Response) => {
  try {
    const trips = await Trip.find(
      {
        userId: req.user.id,
      },
      { _id: 1, destination: 1, durationDays: 1, budgetTier: 1, status: 1 },
    )
      .sort({
        createdAt: -1,
      })
      .lean();

    return res.json({ success: true, trips });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to fetch trips",
    });
  }
};

export const getTrip = async (req: Request, res: Response) => {
  try {
    const trip = await Trip.findOne({
      _id: req.params.id,
      userId: req.user.id,
    }).lean();

    if (!trip) {
      return res.status(404).json({
        success: false,
        message: "Trip not found",
      });
    }

    return res.json({ success: true, trip });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed",
    });
  }
};

export const updateTrip = async (req: Request, res: Response) => {
  try {
    const trip = await Trip.findOneAndUpdate(
      {
        _id: req.params.id,
        userId: req.user.id,
      },
      req.body,
      {
        returnDocument: "after",
        runValidators: true,
      },
    );

    if (!trip) {
      return res.status(404).json({
        message: "Trip not found",
      });
    }

    return res.json(trip);
  } catch (error) {
    return res.status(500).json({
      message: "Update failed",
    });
  }
};

export const deleteTrip = async (req: Request, res: Response) => {
  try {
    const trip = await Trip.findOneAndDelete({
      _id: req.params.id,
      userId: req.user.id,
    });

    if (!trip) {
      return res.status(404).json({
        message: "Trip not found",
      });
    }

    return res.json({
      success: true,
      message: "Trip deleted",
    });
  } catch (error) {
    return res.status(500).json({
      message: "Delete failed",
    });
  }
};

export const addActivity = async (req: Request, res: Response) => {
  try {
    const { tripId, dayNumber } = req.params;

    const { title, description, estimatedCost, timeOfDay } = req.body;

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

    const day = trip.itinerary.find(
      (day: any) => day.dayNumber === Number(dayNumber),
    );

    if (!day) {
      return res.status(404).json({
        success: false,
        message: "Day not found",
      });
    }

    day.activities.push({
      title,
      description,
      estimatedCost,
      timeOfDay,
    });

    recalculateBudget(trip);

    await trip.save();

    return res.status(200).json({
      success: true,
      trip,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to add activity",
    });
  }
};

export const removeActivity = async (req: Request, res: Response) => {
  try {
    const { tripId, activityId } = req.params;

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

    trip.itinerary.forEach((day: any) => {
      day.activities = day.activities.filter(
        (activity: any) => activity._id.toString() !== activityId,
      );
    });

    recalculateBudget(trip);

    await trip.save();

    return res.status(200).json({
      success: true,
      trip,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to remove activity",
    });
  }
};

export const togglePackingItem = async (req: Request, res: Response) => {
  try {
    const tripId = req.params.tripId as string;

    const packingItemId = req.params.packingItemId as string;

    if (
      !mongoose.Types.ObjectId.isValid(tripId) ||
      !mongoose.Types.ObjectId.isValid(packingItemId)
    ) {
      return res.status(400).json({
        success: false,
        message: "Invalid id provided",
      });
    }

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

    const item = trip.packingList.id(packingItemId);

    if (!item) {
      return res
        .status(404)
        .json({ success: false, message: "Packing item not found" });
    }

    item.isPacked = !item.isPacked;

    await trip.save();

    return res.json({
      success: true,
      message: "Packing item updated successfully",
      trip,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to update packing item",
    });
  }
};

export const completeTrip = async (req: Request, res: Response) => {
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

    trip.status = "completed";

    await trip.save();

    res.json({
      success: true,
      trip,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to complete trip",
    });
  }
};