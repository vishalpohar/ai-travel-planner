"use client";

import { ReactNode } from "react";

interface ModalProps {
  isOpen: boolean;
  title: string;
  onClose: () => void;
  children: ReactNode;
}

export default function Modal({
  isOpen,
  title,
  onClose,
  children,
}: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur">
      <div className="w-full max-w-lg rounded-xl bg-white shadow-xl">
        <div className="flex items-center justify-between border-b p-5">
          <h2 className="text-lg text-gray-700 font-semibold">{title}</h2>

          <button
            onClick={onClose}
            className="text-xl text-zinc-500 hover:text-zinc-800 cursor-pointer">
            ×
          </button>
        </div>

        <div className="p-5">{children}</div>
      </div>
    </div>
  );
}
