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

export default function RegenerateDayModal({
  isOpen,
  onClose,
  tripId,
  dayNumber,
}: Props) {
  const regenerateDay = useTripStore((state) => state.regenerateDay);

  const [instruction, setInstruction] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    await regenerateDay(tripId, dayNumber, instruction);

    setInstruction("");

    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={`Regenerate Day ${dayNumber}`}>
      <form onSubmit={handleSubmit} className="space-y-4">
        <textarea
          rows={4}
          value={instruction}
          onChange={(e) => setInstruction(e.target.value)}
          placeholder="Example: More outdoor activities"
          className="w-full text-gray-700 rounded-lg border p-3"
          required
        />

        <button
          type="submit"
          className="w-full rounded-lg bg-sky-600 py-3 text-white cursor-pointer">
          Regenerate Day
        </button>
      </form>
    </Modal>
  );
}
