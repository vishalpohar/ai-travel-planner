"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import ConfirmDialog from "@/components/ui/ConfirmDialog";

import { useTripStore } from "@/store/tripStore";

interface Props {
  tripId: string;
}

export default function DeleteTripButton({ tripId }: Props) {
  const router = useRouter();

  const deleteTrip = useTripStore((state) => state.deleteTrip);

  const [isOpen, setIsOpen] = useState(false);

  const handleDelete = async () => {
    await deleteTrip(tripId);

    router.push("/trips");
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="rounded-xl border border-red-500 px-6 py-3 font-medium text-red-500 transition hover:bg-red-50 cursor-pointer">
        Delete Trip
      </button>

      <ConfirmDialog
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Delete Trip"
        message="This action cannot be undone."
        onConfirm={handleDelete}
      />
    </>
  );
}
