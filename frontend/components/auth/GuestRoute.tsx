"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

import { useAuthStore } from "@/store/authStore";

export default function GuestRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  const { token, initialized } = useAuthStore();

  useEffect(() => {
    if (initialized && token) {
      router.replace("/dashboard");
    }
  }, [initialized, token, router]);

  if (!initialized) {
    return null;
  }

  if (token) {
    return null;
  }

  return children;
}
