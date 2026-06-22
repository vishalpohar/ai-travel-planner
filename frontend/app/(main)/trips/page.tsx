"use client";

import { useEffect } from "react";

import { MapPinned } from "lucide-react";

import { useTripStore } from "@/store/tripStore";

import TripList from "@/components/trip/TripList";
import TripListSkeleton from "@/components/skeletons/TripListSkeleton";
import EmptyState from "@/components/ui/EmptyState";

export default function TripsPage() {
  const trips = useTripStore((state) => state.trips);

  const loading = useTripStore((state) => state.loading);

  const fetchTrips = useTripStore((state) => state.fetchTrips);

  useEffect(() => {
    fetchTrips();
  }, [fetchTrips]);

  if (loading) {
    return <TripListSkeleton />;
  }

  return (
    <section className="container py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">My Trips</h1>

        <p className="mt-2 text-zinc-500">Manage all your travel plans.</p>
      </div>

      {trips.length === 0 ? (
        <EmptyState
          icon={MapPinned}
          title="No Trips Yet"
          description="Create your first AI-generated travel itinerary and start exploring the world smarter."
          actionLabel="Create Trip"
          href="/create-trip"
        />
      ) : (
        <TripList trips={trips} />
      )}
    </section>
  );
}
