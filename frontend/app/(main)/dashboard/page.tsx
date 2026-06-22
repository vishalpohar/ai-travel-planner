"use client";

import { useEffect } from "react";

import { useTripStore } from "@/store/tripStore";
import { useAuthStore } from "@/store/authStore";

import DashboardStats from "@/components/dashboard/DashboardStats";
import RecentTrips from "@/components/dashboard/RecentTrips";
import DashboardSkeleton from "@/components/skeletons/DashboardSkeleton";
import { capitalize } from "@/utils/capitalize";
import Link from "next/link";

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
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">
            Welcome back,
            <span className="ml-2 text-zinc-700">
              {user?.name ? capitalize(user.name) : ""}
            </span>
          </h1>

          <p className="mt-2 text-zinc-500">
            Manage your trips, generate itineraries and explore new destinations
            with AI.
          </p>
        </div>
      </div>

      <DashboardStats trips={trips} />

      <div className="mt-8 flex flex-wrap gap-4">
        <Link
          href="/create-trip"
          className="rounded-xl bg-black px-5 py-3 text-sm font-medium text-white hover:bg-zinc-900">
          Create New Trip
        </Link>

        <Link
          href="/trips"
          className="rounded-xl border border-zinc-300 px-5 py-3 text-sm font-medium hover:bg-zinc-100/10">
          View Trips
        </Link>
      </div>

      <RecentTrips trips={trips} />
    </section>
  );
}
