export const calculateTripBudget = (trip) => {
    const activities = trip.itinerary.reduce((total, day) => total +
        day.activities.reduce((dayTotal, activity) => dayTotal + (activity.estimatedCost || 0), 0), 0);
    const accommodation = trip.hotels[1]?.pricePerNight * trip.durationDays;
    const food = trip.durationDays * 40;
    const transport = trip.durationDays * 15;
    return {
        transport,
        accommodation,
        food,
        activities,
        total: transport + accommodation + food + activities,
    };
};
//# sourceMappingURL=calculateTripBudget.js.map