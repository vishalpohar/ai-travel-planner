import mongoose from "mongoose";
import {
  BUDGET_TIERS,
  PACKING_CATEGORIES,
  TIME_OF_DAY,
  TRIP_STATUS,
} from "../constants/trip.constants.js";

const activitySchema = new mongoose.Schema({
  title: { type: String, required: true },

  description: String,

  estimatedCost: { type: Number, default: 0 },

  timeOfDay: { type: String, enum: TIME_OF_DAY },
});

const daySchema = new mongoose.Schema(
  {
    dayNumber: { type: Number, required: true },

    activities: [activitySchema],
  },
  {
    _id: false,
  },
);

const budgetSchema = new mongoose.Schema(
  {
    transport: {
      type: Number,
      default: 0,
    },

    accommodation: {
      type: Number,
      default: 0,
    },

    food: {
      type: Number,
      default: 0,
    },

    activities: {
      type: Number,
      default: 0,
    },

    total: {
      type: Number,
      default: 0,
    },
  },
  {
    _id: false,
  },
);

const hotelSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    rating: {
      type: Number,
      min: 0,
      max: 5,
    },

    pricePerNight: {
      type: Number,
      default: 0,
    },
  },
  {
    _id: false,
  },
);

const packingItemSchema = new mongoose.Schema({
  item: { type: String, required: true, trim: true },
  category: {
    type: String,
    enum: PACKING_CATEGORIES,
  },
  isPacked: {
    type: Boolean,
    default: false,
  },
});

const tripSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    destination: {
      type: String,
      required: true,
      trim: true,
    },

    durationDays: {
      type: Number,
      required: true,
      min: 1,
      max: 30,
    },

    budgetTier: {
      type: String,
      enum: BUDGET_TIERS,
      required: true,
    },

    interests: { type: [String], default: [] },

    itinerary: { type: [daySchema], default: [] },

    currency: {
      type: String,
      uppercase: true,
      default: "USD",
    },

    estimatedBudget: {
      type: budgetSchema,
      default: () => ({
        transport: 0,
        accommodation: 0,
        food: 0,
        activities: 0,
        total: 0,
      }),
    },

    hotels: { type: [hotelSchema], default: [] },

    packingList: {
      type: [packingItemSchema],
      default: [],
    },

    status: {
      type: String,
      enum: TRIP_STATUS,
      default: "draft",
    },
  },
  {
    timestamps: true,
  },
);

tripSchema.index({
  userId: 1,
  createdAt: -1,
});

export default mongoose.model("Trip", tripSchema);
