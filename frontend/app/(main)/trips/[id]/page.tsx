"use client";

import { useEffect } from "react";
import { useParams } from "next/navigation";

import { useTripStore } from "@/store/tripStore";

import CompleteTripButton from "@/components/trip/CompleteTripButton";
import BudgetSummary from "@/components/trip/BudgetSummary";
import HotelList from "@/components/trip/HotelList";
import Itinerary from "@/components/trip/Itinerary";
import GenerateTripButton from "@/components/trip/GenerateTripButton";
import PackingList from "@/components/trip/PackingList";
import DeleteTripButton from "@/components/trip/DeleteTripButton";
import TripDetailsSkeleton from "@/components/skeletons/TripDetailsSkeleton";

export default function TripDetailsPage() {
  const params = useParams();

  const tripId = params.id as string;

  const trip = useTripStore((state) => state.selectedTrip);

  const fetchTrip = useTripStore((state) => state.fetchTrip);

  useEffect(() => {
    fetchTrip(tripId);
  }, [tripId, fetchTrip]);

  if (!trip) {
    return <TripDetailsSkeleton />;
  }

  return (
    <section className="container py-10">
      <div className="mb-10 rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <span className="inline-flex rounded-full bg-zinc-100 px-3 py-1 text-sm font-medium text-zinc-600">
              {trip.status}
            </span>

            <h1 className="mt-4 text-4xl text-black font-bold">
              {trip.destination}
            </h1>

            <p className="mt-2 text-zinc-500">
              {trip.durationDays} Days • {trip.budgetTier} Budget
            </p>
          </div>

          <div className="flex gap-3">
            {trip.status === "draft" && (
              <GenerateTripButton tripId={trip._id} />
            )}

            {trip.status === "planned" && (
              <CompleteTripButton tripId={trip._id} />
            )}

            <DeleteTripButton tripId={trip._id} />
          </div>
        </div>
      </div>

      {trip.status !== "draft" && (
        <div className="space-y-10">
          <BudgetSummary budget={trip.estimatedBudget} />

          <HotelList hotels={trip.hotels} />

          <Itinerary itinerary={trip.itinerary} tripId={trip._id} />

          <PackingList packingList={trip.packingList} tripId={trip._id} />
        </div>
      )}
    </section>
  );
}
