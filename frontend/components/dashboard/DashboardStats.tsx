import StatCard from "./StatCard";

export default function DashboardStats({ trips }: any) {
  const totalTrips = trips.length;

  const completedTrips = trips.filter(
    (trip: any) => trip.status === "completed",
  ).length;

  const draftTrips = trips.filter(
    (trip: any) => trip.status === "draft",
  ).length;

  return (
    <div className="mt-8 flex flex-wrap gap-4">
      <StatCard title="Total Trips" value={totalTrips} />

      <StatCard title="Completed" value={completedTrips} />

      <StatCard title="Draft" value={draftTrips} />
    </div>
  );
}
