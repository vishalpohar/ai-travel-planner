import Link from "next/link";

import { MapPinned } from "lucide-react";

import TripCard from "../trip/TripCard";

interface Props {
  trips: any[];
}

export default function RecentTrips({ trips }: Props) {
  return (
    <section className="mt-10">
      <div className="mb-5 flex items-center justify-between">
        <h2 className="text-xl font-semibold">Recent Trips</h2>

        {trips.length > 0 && (
          <Link
            href="/trips"
            className="text-sm font-medium text-black hover:underline">
            View All
          </Link>
        )}
      </div>

      {trips.length === 0 ? (
        <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-zinc-300 bg-white p-10 text-center">
          <MapPinned size={48} className="mb-4 text-zinc-400" />

          <h3 className="text-lg font-semibold text-black">No Trips Yet</h3>

          <p className="mt-2 max-w-sm text-sm text-zinc-500">
            Start planning your first trip with AI. Create an itinerary,
            estimate your budget, and generate a smart packing list.
          </p>

          <Link
            href="/create-trip"
            className="mt-6 rounded-xl bg-black px-5 py-3 text-sm font-medium text-white transition hover:bg-zinc-900">
            Create Your First Trip
          </Link>
        </div>
      ) : (
        <div className="grid gap-4">
          {trips.slice(0, 5).map((trip) => (
            <TripCard key={trip._id} trip={trip} />
          ))}
        </div>
      )}
    </section>
  );
}
