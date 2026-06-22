"use client";

import { useEffect } from "react";
import { useParams } from "next/navigation";

import { useTripStore } from "@/store/tripStore";

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
      <div className="mb-10">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-4xl font-bold">{trip.destination}</h1>

            <p className="mt-2 text-zinc-500">
              {trip.durationDays} Days • {trip.budgetTier}
            </p>
          </div>

          <DeleteTripButton tripId={trip._id} />
        </div>

        {trip.status === "draft" && (
          <div className="mt-6">
            <GenerateTripButton tripId={trip._id} />
          </div>
        )}
      </div>

      {trip.status === "completed" && (
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
