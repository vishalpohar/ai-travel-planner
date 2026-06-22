"use client";

import { useState } from "react";

import type { DayPlan } from "@/types/trip";

import ActivityCard from "./ActivityCard";
import AddActivityModal from "./AddActivityModal";
import RegenerateDayModal from "./RegenerateDayModal";

interface Props {
  day: DayPlan;
  tripId: string;
}

export default function DayCard({ day, tripId }: Props) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isRegenerateOpen, setIsRegenerateOpen] = useState(false);
  return (
    <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
      <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <h3 className="text-xl text-black font-semibold">Day {day.dayNumber}</h3>

        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <button
            onClick={() => setIsModalOpen(true)}
            className="rounded-xl border border-black px-4 py-2 text-sm text-black font-medium transition hover:bg-zinc-100 cursor-pointer">
            Add Activity
          </button>

          <button
            onClick={() => setIsRegenerateOpen(true)}
            className="rounded-xl bg-black px-4 py-2 text-sm font-medium text-white transition hover:bg-zinc-900 cursor-pointer">
            Regenerate Day
          </button>
        </div>
      </div>

      <div className="space-y-3">
        {day.activities.map((activity) => (
          <ActivityCard
            key={activity._id}
            activity={activity}
            tripId={tripId}
          />
        ))}
      </div>

      <AddActivityModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        tripId={tripId}
        dayNumber={day.dayNumber}
      />

      <RegenerateDayModal
        isOpen={isRegenerateOpen}
        onClose={() => setIsRegenerateOpen(false)}
        tripId={tripId}
        dayNumber={day.dayNumber}
      />
    </div>
  );
}
