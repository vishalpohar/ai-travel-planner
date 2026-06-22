"use client";

import { motion } from "motion/react";
import Link from "next/link";

export default function TripCard({ trip }: any) {
  return (
    <Link href={`/trips/${trip._id}`}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3 }}
        className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
        <div className="flex items-center justify-between">
          <h3 className="text-lg text-black font-semibold">
            {trip.destination}
          </h3>

          <span
            className={`rounded-full px-3 py-1 text-xs font-medium ${
              trip.status === "completed"
                ? "bg-green-50 text-green-700"
                : trip.status === "planned"
                  ? "bg-blue-50 text-blue-700"
                  : "bg-zinc-100 text-zinc-700"
            }`}>
            {trip.status}
          </span>
        </div>

        <div className="mt-5 space-y-2 text-sm text-zinc-500">
          <p>{trip.durationDays} Days</p>

          <p>{trip.budgetTier} Budget</p>
        </div>
        <div className="mt-6 border-t pt-4">
          <span className="text-sm font-medium text-black">View Details →</span>
        </div>
      </motion.div>
    </Link>
  );
}
