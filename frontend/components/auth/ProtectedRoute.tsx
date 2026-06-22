"use client";

import { useRouter } from "next/navigation";

import { useEffect } from "react";

import { useAuthStore } from "@/store/authStore";

export default function ProtectedRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  const { token, initialized } = useAuthStore();

  useEffect(() => {
    if (initialized && !token) {
      router.replace("/login");
    }
  }, [token, initialized, router]);

  if (!initialized) {
    return null;
  }

  return children;
}
