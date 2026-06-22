"use client";

import { motion } from "motion/react";

import { useState } from "react";

import type { Activity } from "@/types/trip";
import { useTripStore } from "@/store/tripStore";

import DeleteActivityModal from "./DeleteActivityModal";
import { currenyFormatter } from "@/utils/currencyFormatter";

interface Props {
  activity: Activity;
  tripId: string;
}

export default function ActivityCard({ activity, tripId }: Props) {
  const removeActivity = useTripStore((state) => state.removeActivity);

  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3 }}
        className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
        <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <h4 className="font-semibold text-black">{activity.title}</h4>

              <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-600">
                {activity.timeOfDay}
              </span>
            </div>

            <p className="mt-2 text-sm text-zinc-500">{activity.description}</p>

            <p className="mt-3 text-sm font-semibold text-black">
              {currenyFormatter(activity.estimatedCost)}
            </p>
          </div>
          <button
            onClick={() => setIsDeleteOpen(true)}
            className="rounded-lg border border-red-500 px-3 py-2 text-sm font-medium text-red-500 transition hover:bg-red-50 cursor-pointer">
            Remove
          </button>
        </div>
      </motion.div>

      <DeleteActivityModal
        isOpen={isDeleteOpen}
        onClose={() => setIsDeleteOpen(false)}
        onConfirm={() => removeActivity(tripId, activity._id)}
      />
    </>
  );
}
