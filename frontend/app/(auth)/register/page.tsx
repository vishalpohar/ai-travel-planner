"use client";

import { useState } from "react";

import { useRouter } from "next/navigation";

import { useAuthStore } from "@/store/authStore";
import { getErrorMessage } from "@/lib/getErrorMessage";
import { showError } from "@/lib/toast";

export default function RegisterPage() {
  const router = useRouter();

  const loading = useAuthStore((state) => state.loading);

  const register = useAuthStore((state) => state.register);

  const [name, setName] = useState("");

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await register(name, email, password);

      router.push("/login");
    } catch (error) {
      showError(getErrorMessage(error));
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-lg rounded-xl border bg-white p-6 shadow mx-auto">
      <h1 className="mb-6 text-2xl text-black font-bold">Register</h1>

      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
        className="mb-4 w-full text-gray-700 rounded border p-3"
      />

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
        className="w-full rounded bg-black p-3 text-white">
        {loading ? "Registering..." : "Register"}
      </button>
    </form>
  );
}
