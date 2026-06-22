"use client";

import { motion } from "motion/react";

import type { Hotel } from "@/types/trip";
import { currenyFormatter } from "@/utils/currencyFormatter";
import { Star } from "lucide-react";

interface Props {
  hotel: Hotel;
}

export default function HotelCard({ hotel }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
      className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
      <div className="flex items-start justify-between">
        <h3 className="text-lg font-semibold text-black">{hotel.name}</h3>

        <span className="flex items-center gap-2 rounded-full bg-yellow-50 px-3 py-1 text-sm font-medium text-yellow-700">
          <Star size={20} color="gold" fill="gold" />
          <p>{hotel.rating}</p>
        </span>
      </div>

      <div className="mt-6">
        <p className="text-sm text-zinc-500">Price Per Night</p>

        <p className="mt-1 text-2xl font-bold text-black">
          {currenyFormatter(hotel.pricePerNight)}
        </p>
      </div>
    </motion.div>
  );
}
