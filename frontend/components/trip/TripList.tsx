import type { Trip } from "@/types/trip";

import TripCard from "./TripCard";

interface Props {
  trips: Trip[];
}

export default function TripList({ trips }: Props) {
  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      {trips.map((trip) => (
        <TripCard key={trip._id} trip={trip} />
      ))}
    </div>
  );
}
