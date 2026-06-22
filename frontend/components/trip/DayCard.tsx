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
    <div className="rounded-xl border border-white/30 bg-transparent p-5">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-xl font-semibold">Day {day.dayNumber}</h3>

        <div className="flex flex-col sm:flex-row gap-2">
          <button
            onClick={() => setIsModalOpen(true)}
            className="rounded-lg px-4 py-2 text-sm text-sky-600 font-bold border border-sky-600 hover:bg-sky-600/10 cursor-pointer">
            Add Activity
          </button>

          <button
            onClick={() => setIsRegenerateOpen(true)}
            className="rounded-lg px-4 py-2 text-sm text-amber-500 font-bold border border-amber-600 hover:bg-amber-600/10 cursor-pointer">
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
