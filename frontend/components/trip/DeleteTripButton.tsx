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
        className="rounded-lg px-4 py-2 text-red-600 border border-red-600 hover:bg-red-600/10 cursor-pointer">
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
