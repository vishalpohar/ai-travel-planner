export const recalculateBudget = (trip: any) => {
  const activityTotal = trip.itinerary.reduce(
    (tripTotal: number, day: any) =>
      tripTotal +
      day.activities.reduce(
        (dayTotal: number, activity: any) =>
          dayTotal + (activity.estimatedCost || 0),
        0,
      ),
    0,
  );

  trip.estimatedBudget.activities = activityTotal;

  trip.estimatedBudget.total =
    trip.estimatedBudget.transport +
    trip.estimatedBudget.accommodation +
    trip.estimatedBudget.food +
    activityTotal;
};
