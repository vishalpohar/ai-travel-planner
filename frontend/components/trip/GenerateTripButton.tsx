"use client";

import { useTripStore } from "@/store/tripStore";

interface Props {
  tripId: string;
}

export default function GenerateTripButton({ tripId }: Props) {
  const generateTrip = useTripStore((state) => state.generateTrip);

  return (
    <button
      onClick={() => generateTrip(tripId)}
      className="rounded-lg bg-sky-600 px-5 py-3 text-white hover:bg-sky-500 cursor-pointer">
      Generate AI Itinerary
    </button>
  );
}
