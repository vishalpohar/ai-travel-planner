"use client";

import { useEffect } from "react";

import { useTripStore } from "@/store/tripStore";
import { useAuthStore } from "@/store/authStore";

import DashboardStats from "@/components/dashboard/DashboardStats";
import RecentTrips from "@/components/dashboard/RecentTrips";
import DashboardSkeleton from "@/components/skeletons/DashboardSkeleton";
import { capitalize } from "@/utils/capitalize";

export default function DashboardPage() {
  const user = useAuthStore((state) => state.user);

  const trips = useTripStore((state) => state.trips);

  const loading = useTripStore((state) => state.loading);

  const fetchTrips = useTripStore((state) => state.fetchTrips);

  useEffect(() => {
    fetchTrips();
  }, [fetchTrips]);

  if (loading) {
    return <DashboardSkeleton />;
  }

  return (
    <section className="container py-10">
      <h1 className="text-3xl font-bold">
        Welcome, {user?.name ? capitalize(user.name) : ""}
        👋
      </h1>

      <p className="mt-2 text-zinc-500">Plan your next adventure.</p>

      <DashboardStats trips={trips} />

      <RecentTrips trips={trips} />
    </section>
  );
}
