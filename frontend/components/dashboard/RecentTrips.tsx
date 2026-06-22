import Link from "next/link";

import TripCard from "../trip/TripCard";

export default function RecentTrips({ trips }: any) {
  return (
    <section className="mt-10">
      <div className="mb-5 flex items-center justify-between">
        <h2 className="text-xl font-semibold">Recent Trips</h2>

        <Link href="/trips" className="text-sky-600">
          View All
        </Link>
      </div>

      <div className="grid gap-4">
        {trips.slice(0, 5).map((trip: any) => (
          <TripCard key={trip._id} trip={trip} />
        ))}
      </div>
    </section>
  );
}
