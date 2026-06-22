"use client";

import { useState } from "react";

import { useRouter } from "next/navigation";

import { useAuthStore } from "@/store/authStore";
import { showError } from "@/lib/toast";
import { getErrorMessage } from "@/lib/getErrorMessage";

export default function LoginPage() {
  const router = useRouter();

  const loading = useAuthStore((state) => state.loading);

  const login = useAuthStore((state) => state.login);

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await login(email, password);

      router.push("/dashboard");
    } catch (error) {
      showError(getErrorMessage(error));
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-lg rounded-xl border bg-white p-6 shadow mx-auto">
      <h1 className="mb-6 text-black text-2xl font-bold">Login</h1>

      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        className="mb-4 w-full text-gray-700 rounded border p-3"
      />

      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        className="mb-4 w-full text-gray-700 rounded border p-3"
      />

      <button
        disabled={loading}
        className="w-full rounded text-white bg-black p-3 cursor-pointer">
        {loading ? "Logging..." : "Login"}
      </button>
    </form>
  );
}
