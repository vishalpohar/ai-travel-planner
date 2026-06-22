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
        className="rounded-lg bg-transparent border border-white/20 p-4">
        <div className="flex flex-col sm:flex-row items-start sm:justify-between gap-5">
          <div className="flex-1">
            <div className="flex justify-between items-center">
              <h4 className="font-medium">{activity.title}</h4>

              <span className="text-sm text-zinc-400">
                {activity.timeOfDay}
              </span>
            </div>

            <p className="mt-2 text-sm text-zinc-500">{activity.description}</p>

            <p className="mt-2 text-sm font-medium text-sky-600">
              {currenyFormatter(activity.estimatedCost)}
            </p>
          </div>
          <button
            onClick={() => setIsDeleteOpen(true)}
            className="rounded-lg bg-red-100 px-3 py-1 text-sm text-red-700 cursor-pointer">
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
