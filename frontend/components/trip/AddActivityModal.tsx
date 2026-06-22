"use client";

import { useState } from "react";

import Modal from "@/components/ui/Modal";

import { useTripStore } from "@/store/tripStore";

interface Props {
  isOpen: boolean;

  onClose: () => void;

  tripId: string;

  dayNumber: number;
}

export default function AddActivityModal({
  isOpen,
  onClose,
  tripId,
  dayNumber,
}: Props) {
  const addActivity = useTripStore((state) => state.addActivity);

  const [title, setTitle] = useState("");

  const [description, setDescription] = useState("");

  const [estimatedCost, setEstimatedCost] = useState(0);

  const [timeOfDay, setTimeOfDay] = useState<
    "Morning" | "Afternoon" | "Evening"
  >("Morning");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    await addActivity(tripId, dayNumber, {
      title,
      description,
      estimatedCost,
      timeOfDay,
    });

    onClose();

    setTitle("");
    setDescription("");
    setEstimatedCost(0);
    setTimeOfDay("Morning");
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={`Add Activity - Day ${dayNumber}`}>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Activity Title"
          className="w-full rounded-xl border border-zinc-300 px-4 py-3 text-black outline-none focus:border-black"
          required
        />

        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
          className="w-full rounded-xl border border-zinc-300 px-4 py-3 text-black outline-none focus:border-black"
          rows={3}
          required
        />

        <input
          type="number"
          value={estimatedCost}
          onChange={(e) => setEstimatedCost(Number(e.target.value))}
          placeholder="Cost"
          className="w-full rounded-xl border border-zinc-300 px-4 py-3 text-black outline-none focus:border-black"
        />

        <select
          value={timeOfDay}
          onChange={(e) =>
            setTimeOfDay(e.target.value as "Morning" | "Afternoon" | "Evening")
          }
          className="w-full rounded-xl border border-zinc-300 px-4 py-3 text-black outline-none focus:border-black">
          <option>Morning</option>

          <option>Afternoon</option>

          <option>Evening</option>
        </select>

        <button
          type="submit"
          className="w-full rounded-xl bg-black py-3 font-medium text-white transition hover:bg-zinc-900 cursor-pointer">
          Add Activity
        </button>
      </form>
    </Modal>
  );
}
