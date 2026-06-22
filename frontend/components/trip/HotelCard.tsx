"use client";

import { motion } from "motion/react";

import type { Hotel } from "@/types/trip";
import { currenyFormatter } from "@/utils/currencyFormatter";

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
      className="rounded-xl border border-white/30 bg-transparent p-5">
      <h3 className="font-semibold">{hotel.name}</h3>

      <p className="mt-2 text-zinc-400">⭐ {hotel.rating}</p>

      <p className="mt-2 text-sky-600 font-medium">
        {currenyFormatter(hotel.pricePerNight)}/night
      </p>
    </motion.div>
  );
}
