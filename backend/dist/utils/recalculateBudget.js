export const recalculateBudget = (trip) => {
    const activityTotal = trip.itinerary.reduce((tripTotal, day) => tripTotal +
        day.activities.reduce((dayTotal, activity) => dayTotal + (activity.estimatedCost || 0), 0), 0);
    trip.estimatedBudget.activities = activityTotal;
    trip.estimatedBudget.total =
        trip.estimatedBudget.transport +
            trip.estimatedBudget.accommodation +
            trip.estimatedBudget.food +
            activityTotal;
};
//# sourceMappingURL=recalculateBudget.js.map