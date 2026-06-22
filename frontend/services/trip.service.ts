import api from "@/lib/axios";

import type {
  CreateTripPayload,
  AddActivityPayload,
  RegenerateDayPayload,
} from "@/types/trip.dto";

export const tripService = {
  createTrip: async (payload: CreateTripPayload) => {
    const response = await api.post("/trips", payload);

    return response.data;
  },

  getTrips: async () => {
    const response = await api.get("/trips");

    return response.data;
  },

  getTrip: async (tripId: string) => {
    const response = await api.get(`/trips/${tripId}`);

    return response.data;
  },

  deleteTrip: async (tripId: string) => {
    const response = await api.delete(`/trips/${tripId}`);

    return response.data;
  },

  generateTrip: async (tripId: string) => {
    const response = await api.post(`/ai/generate-trip/${tripId}`);

    return response.data;
  },

  generatePackingList: async (tripId: string) => {
    const response = await api.post(`/trips/${tripId}/generate-packing-list`);

    return response.data;
  },

  addActivity: async (
    tripId: string,
    dayNumber: number,
    payload: AddActivityPayload,
  ) => {
    const response = await api.patch(
      `/trips/${tripId}/day/${dayNumber}/activity`,
      payload,
    );

    return response.data;
  },

  removeActivity: async (tripId: string, activityId: string) => {
    const response = await api.delete(
      `/trips/${tripId}/activity/${activityId}`,
    );

    return response.data;
  },

  regenerateDay: async (payload: RegenerateDayPayload) => {
    const response = await api.post("/ai/regenerate-day", payload);

    return response.data;
  },

  togglePackingItem: async (tripId: string, itemId: string) => {
    const response = await api.patch(`/trips/${tripId}/packing/${itemId}`);

    return response.data;
  },
};
