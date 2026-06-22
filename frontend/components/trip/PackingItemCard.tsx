"use client";

import { motion } from "motion/react";
import { PackingItem } from "@/types/trip";

import { useTripStore } from "@/store/tripStore";
import { Check, X } from "lucide-react";

interface Props {
  item: PackingItem;
  tripId: string;
}

export default function PackingItemCard({ item, tripId }: Props) {
  const togglePackingItem = useTripStore((state) => state.togglePackingItem);
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
      className="flex items-center justify-between gap-4 rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
      <div>
        <p
          className={`font-medium ${
            item.isPacked ? "text-zinc-400 line-through" : "text-black"
          }`}>
          {item.item}
        </p>

        <p className="mt-1 inline-flex rounded-full bg-zinc-100 px-3 py-1 text-xs text-zinc-600">
          {item.category}
        </p>
      </div>
      <button
        type="button"
        aria-label={item.isPacked ? "Unpack" : "Pack"}
        onClick={() => togglePackingItem(tripId, item._id)}
        className={`flex h-10 w-10 items-center justify-center rounded-full transition cursor-pointer ${
          item.isPacked
            ? "bg-red-50 text-red-500"
            : "bg-green-50 text-green-500"
        }`}>
        {item.isPacked ? <X size={18} /> : <Check size={18} />}
      </button>
    </motion.div>
  );
}
