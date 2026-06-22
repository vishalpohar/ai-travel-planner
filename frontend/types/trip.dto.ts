import { BudgetTier } from "./trip";

export interface CreateTripPayload {
  destination: string;

  durationDays: number;

  budgetTier: BudgetTier;

  interests: string[];
}

export interface RegenerateDayPayload {
  tripId: string;

  dayNumber: number;

  instruction: string;
}

export interface AddActivityPayload {
  title: string;

  description: string;

  estimatedCost: number;

  timeOfDay: "Morning" | "Afternoon" | "Evening";
}
