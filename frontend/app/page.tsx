"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

import { useAuthStore } from "@/store/authStore";

export default function Home() {
  const router = useRouter();

  const token = useAuthStore((state) => state.token);

  const initialized = useAuthStore((state) => state.initialized);

  useEffect(() => {
    if (!initialized) return;

    if (token) {
      router.replace("/dashboard");
    } else {
      router.replace("/login");
    }
  }, [token, initialized, router]);

  return (
    <div className="flex min-h-screen items-center justify-center">
      <p>Loading...</p>
    </div>
  );
}
