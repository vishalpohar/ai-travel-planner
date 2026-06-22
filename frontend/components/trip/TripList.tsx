import type { Trip } from "@/types/trip";

import TripCard from "./TripCard";

interface Props {
  trips: Trip[];
}

export default function TripList({ trips }: Props) {
  return (
    <div className="grid gap-5">
      {trips.map((trip) => (
        <TripCard key={trip._id} trip={trip} />
      ))}
    </div>
  );
}
