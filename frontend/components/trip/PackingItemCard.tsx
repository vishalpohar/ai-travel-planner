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
      className="flex items-center justify-between gap-3 rounded-lg border border-white/30 p-4">
      <div>
        <p className={item.isPacked ? "line-through text-zinc-400" : ""}>
          {item.item}
        </p>

        <p className="text-xs text-zinc-500">{item.category}</p>
      </div>
      <button
        className="cursor-pointer"
        type="button"
        aria-label={item.isPacked ? "Uncheck" : "Check"}
        onClick={() => togglePackingItem(tripId, item._id)}>
        {item.isPacked ? <X color="red" /> : <Check color="green" />}
      </button>
    </motion.div>
  );
}
