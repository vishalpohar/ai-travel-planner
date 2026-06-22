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
        className="flex items-center justify-between flex-wrap rounded-xl border bg-transparent p-5 hover:bg-white/10">
        <h3 className="font-semibold">{trip.destination}</h3>

        <p className="text-sm text-zinc-400">
          {trip.durationDays} Days • {trip.budgetTier}
        </p>
      </motion.div>
    </Link>
  );
}
