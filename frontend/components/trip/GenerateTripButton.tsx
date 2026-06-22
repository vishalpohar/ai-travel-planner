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
      className="rounded-xl bg-black px-6 py-3 font-medium text-white transition hover:bg-zinc-900 cursor-pointer">
      Generate AI Trip
    </button>
  );
}
