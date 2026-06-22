"use client";

import { useTripStore } from "@/store/tripStore";

interface Props {
  tripId: string;
}

export default function CompleteTripButton({ tripId }: Props) {
  const completeTrip = useTripStore((state) => state.completeTrip);

  return (
    <button
      onClick={() => completeTrip(tripId)}
      className="rounded-xl border border-green-600 px-5 py-3 font-medium text-green-600 transition hover:bg-green-600/5 cursor-pointer">
      Mark Trip Completed
    </button>
  );
}
