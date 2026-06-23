import { BriefcaseBusiness, CheckCircle2, FileText, MapPinned } from "lucide-react";

import StatCard from "./StatCard";

export default function DashboardStats({ trips }: any) {
  const totalTrips = trips.length;

  const completedTrips = trips.filter(
    (trip: any) => trip.status === "completed",
  ).length;

  const plannedTrips = trips.filter(
    (trip: any) => trip.status === "planned",
  ).length;

  const draftTrips = trips.filter(
    (trip: any) => trip.status === "draft",
  ).length;

  return (
    <div className="mt-8 grid gap-4 md:grid-cols-3">
      <StatCard
        title="Total Trips"
        value={totalTrips}
        icon={BriefcaseBusiness}
      />

      <StatCard title="Draft Trips" value={draftTrips} icon={FileText} />

      <StatCard title="Planned Trips" value={plannedTrips} icon={MapPinned} />

      <StatCard title="Completed" value={completedTrips} icon={CheckCircle2} />
    </div>
  );
}
