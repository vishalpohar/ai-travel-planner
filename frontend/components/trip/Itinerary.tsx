"use client";

import { useState } from "react";

import type { DayPlan } from "@/types/trip";

import DayCard from "./DayCard";

interface Props {
  itinerary: DayPlan[];
  tripId: string;
}

export default function Itinerary({ itinerary, tripId }: Props) {
  const [activeDay, setActiveDay] = useState(itinerary[0]?.dayNumber ?? 1);

  if (itinerary.length === 0) {
    return (
      <div className="rounded-xl border bg-white p-6 text-center">
        No itinerary generated yet.
      </div>
    );
  }

  const currentDay = itinerary.find((day) => day.dayNumber === activeDay);

  if (!currentDay) {
    return null;
  }

  return (
    <section>
      <div className="mb-6">
        <h2 className="text-2xl font-bold">Itinerary</h2>

        <p className="text-zinc-500">Explore your day-by-day travel plan.</p>
      </div>

      <ul className="mb-6 flex flex-wrap gap-3">
        {itinerary.map((day) => (
          <li key={day.dayNumber}>
            <button
              type="button"
              onClick={() => setActiveDay(day.dayNumber)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition cursor-pointer ${
                activeDay === day.dayNumber
                  ? "bg-black text-white"
                  : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200"
              }`}>
              Day {day.dayNumber}
            </button>
          </li>
        ))}
      </ul>

      <DayCard day={currentDay} tripId={tripId} />
    </section>
  );
}
