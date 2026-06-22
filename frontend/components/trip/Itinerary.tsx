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
      <h2 className="mb-4 text-2xl font-semibold">Itinerary</h2>

      <ul className="flex flex-wrap gap-2 mb-4">
        {itinerary.map((day) => (
          <li key={day._id}>
            <button
              type="button"
              className={`rounded-md px-5 py-2 transition border cursor-pointer ${
                activeDay === day.dayNumber
                  ? "text-sky-600 border-sky-600 hover:bg-sky-600/10 font-bold"
                  : "text-zinc-300 border-zinc-400 hover:bg-white/10"
              }`}
              onClick={() => setActiveDay(day.dayNumber)}>
              Day {day.dayNumber}
            </button>
          </li>
        ))}
      </ul>
      <DayCard day={currentDay} tripId={tripId} />
    </section>
  );
}
