"use client";

import Modal from "@/components/ui/Modal";

interface Props {
  isOpen: boolean;

  onClose: () => void;

  onConfirm: () => Promise<void>;
}

export default function DeleteActivityModal({
  isOpen,
  onClose,
  onConfirm,
}: Props) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Remove Activity">
      <div className="space-y-4">
        <p className="text-gray-700">
          Are you sure you want to remove this activity?
        </p>

        <div className="flex justify-end gap-3">
          <button
            type="button"
            aria-label="Cancel"
            onClick={onClose}
            className="rounded-lg border px-4 py-2 text-gray-700 cursor-pointer">
            Cancel
          </button>

          <button
            onClick={async () => {
              await onConfirm();
              onClose();
            }}
            className="rounded-lg bg-red-600 px-4 py-2 text-white cursor-pointer">
            Remove
          </button>
        </div>
      </div>
    </Modal>
  );
}
