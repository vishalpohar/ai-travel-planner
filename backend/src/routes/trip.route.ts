import express from "express";

import {
  createTrip,
  getTrips,
  getTrip,
  updateTrip,
  deleteTrip,
  addActivity,
  removeActivity,
  togglePackingItem,
  completeTrip,
} from "../controllers/trip.controller.js";

import { protect } from "../middleware/auth.js";

const router = express.Router();

router.use(protect);

router.post("/", createTrip);

router.get("/", getTrips);

router.get("/:id", getTrip);

router.put("/:id", updateTrip);

router.delete("/:id", deleteTrip);

router.patch("/:tripId/day/:dayNumber/activity", protect, addActivity);

router.delete("/:tripId/activity/:activityId", protect, removeActivity);

router.patch("/:tripId/packing/:packingItemId", protect, togglePackingItem);

router.patch("/:tripId/complete", protect, completeTrip);

export default router;
