export type BudgetTier = "Low" | "Medium" | "High";

export type TripStatus = "draft" | "completed";

export interface Activity {
  _id: string;
  title: string;
  description: string;
  estimatedCost: number;
  timeOfDay: "Morning" | "Afternoon" | "Evening";
}

export interface DayPlan {
  _id: string;
  dayNumber: number;
  activities: Activity[];
}

export interface Hotel {
  _id: string;
  name: string;
  rating: string;
  pricePerNight: number;
}

export interface PackingItem {
  _id: string;
  item: string;
  category:
    | "Documents"
    | "Clothing"
    | "Electronics"
    | "Weather"
    | "Activities"
    | "Other";

  isPacked: boolean;
}

export interface EstimatedBudget {
  transport: number;
  accommodation: number;
  food: number;
  activities: number;
  total: number;
}

export interface Trip {
  _id: string;

  destination: string;

  durationDays: number;

  budgetTier: BudgetTier;

  interests: string[];

  itinerary: DayPlan[];

  hotels: Hotel[];

  packingList: PackingItem[];

  estimatedBudget: EstimatedBudget;

  status: TripStatus;

  createdAt: string;

  updatedAt: string;
}
