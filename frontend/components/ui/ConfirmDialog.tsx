"use client";

import Modal from "./Modal";

interface Props {
  isOpen: boolean;

  title: string;

  message: string;

  onClose: () => void;

  onConfirm: () => Promise<void>;
}

export default function ConfirmDialog({
  isOpen,
  title,
  message,
  onClose,
  onConfirm,
}: Props) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title={title}>
      <div className="space-y-5">
        <p className="text-gray-700">{message}</p>

        <div className="flex justify-end gap-3">
          <button onClick={onClose} className="rounded-lg border px-4 py-2 text-gray-700 cursor-pointer">
            Cancel
          </button>

          <button
            onClick={async () => {
              await onConfirm();
            }}
            className="rounded-lg bg-red-600 px-4 py-2 text-white cursor-pointer">
            Delete
          </button>
        </div>
      </div>
    </Modal>
  );
}
