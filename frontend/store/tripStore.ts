import { create } from "zustand";

import { tripService } from "@/services/trip.service";

import type { Trip } from "@/types/trip";
import { AddActivityPayload } from "@/types/trip.dto";

import toast from "react-hot-toast";

interface TripStore {
  trips: Trip[];

  selectedTrip: Trip | null;

  loading: boolean;

  fetchTrips: () => Promise<void>;

  fetchTrip: (tripId: string) => Promise<void>;

  createTrip: (payload: any) => Promise<Trip>;

  generateTrip: (tripId: string) => Promise<void>;

  addActivity: (
    tripId: string,
    dayNumber: number,
    payload: AddActivityPayload,
  ) => Promise<void>;

  regenerateDay: (
    tripId: string,
    dayNumber: number,
    instruction: string,
  ) => Promise<void>;

  removeActivity: (tripId: string, activityId: string) => Promise<void>;

  togglePackingItem: (tripId: string, itemId: string) => Promise<void>;

  deleteTrip: (tripId: string) => Promise<void>;

  completeTrip: (tripId: string) => Promise<void>;
}

export const useTripStore = create<TripStore>((set) => ({
  trips: [],

  selectedTrip: null,

  loading: false,

  fetchTrips: async () => {
    set({
      loading: true,
    });

    try {
      const response = await tripService.getTrips();

      set({
        trips: response.trips,
      });
    } finally {
      set({
        loading: false,
      });
    }
  },

  fetchTrip: async (tripId) => {
    set({
      loading: true,
    });

    try {
      const response = await tripService.getTrip(tripId);

      set({
        selectedTrip: response.trip,
      });
    } finally {
      set({
        loading: false,
      });
    }
  },

  createTrip: async (payload) => {
    const response = await tripService.createTrip(payload);

    toast.success("Trip created");

    return response.trip;
  },

  generateTrip: async (tripId) => {
    const toastId = toast.loading("Generating itinerary...");

    try {
      const response = await tripService.generateTrip(tripId);

      set({
        selectedTrip: response.trip,
      });

      toast.success("Itinerary generated", {
        id: toastId,
      });
    } catch {
      toast.error("Generation failed", {
        id: toastId,
      });
    }
  },

  addActivity: async (tripId, dayNumber, payload) => {
    try {
      const response = await tripService.addActivity(
        tripId,
        dayNumber,
        payload,
      );

      set({
        selectedTrip: response.trip,
      });

      toast.success("Activity added");
    } catch {
      toast.error("Failed to add activity");
    }
  },

  regenerateDay: async (tripId, dayNumber, instruction) => {
    const toastId = toast.loading("Regenerating day...");

    try {
      const response = await tripService.regenerateDay({
        tripId,
        dayNumber,
        instruction,
      });

      set({
        selectedTrip: response.trip,
      });

      toast.success("Day regenerated", {
        id: toastId,
      });
    } catch {
      toast.error("Failed to regenerate", {
        id: toastId,
      });
    }
  },

  removeActivity: async (tripId, activityId) => {
    try {
      const response = await tripService.removeActivity(tripId, activityId);

      set({
        selectedTrip: response.trip,
      });

      toast.success("Activity removed");
    } catch {
      toast.error("Failed to remove activity");
    }
  },

  togglePackingItem: async (tripId, itemId) => {
    try {
      const response = await tripService.togglePackingItem(tripId, itemId);

      set({
        selectedTrip: response.trip,
      });
    } catch {
      toast.error("Failed to update item");
    }
  },

  deleteTrip: async (tripId) => {
    try {
      await tripService.deleteTrip(tripId);

      set((state) => ({
        trips: state.trips.filter((trip) => trip._id !== tripId),
        selectedTrip: null,
      }));

      toast.success("Trip deleted");
    } catch {
      toast.error("Failed to delete trip");
    }
  },

  completeTrip: async (tripId: string) => {
    try {
      const trip = await tripService.completeTrip(tripId);

      set({
        selectedTrip: trip,
      });

      toast.success("Trip Completed");
    } catch {
      toast.error("Something went wrong");
    }
  },
}));
