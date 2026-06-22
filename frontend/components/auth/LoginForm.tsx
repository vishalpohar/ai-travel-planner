"use client";

import { useState } from "react";

import Link from "next/link";
import { useRouter } from "next/navigation";

import { useAuthStore } from "@/store/authStore";
import { showError } from "@/lib/toast";
import { getErrorMessage } from "@/lib/getErrorMessage";

import AuthCard from "./AuthCard";

export default function LoginForm() {
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
    <AuthCard
      title="Welcome Back"
      subtitle="Sign in to continue planning your trips">
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="mb-2 block text-sm font-medium text-zinc-700">
            Email
          </label>

          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="john@example.com"
            className="w-full rounded-xl border border-zinc-300 px-4 py-3 text-black outline-none transition focus:border-black"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-zinc-700">
            Password
          </label>

          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            className="w-full rounded-xl border border-zinc-300 px-4 py-3 text-black outline-none transition focus:border-black"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-xl bg-black py-3 font-medium text-white transition hover:bg-zinc-900 disabled:cursor-not-allowed disabled:opacity-60">
          {loading ? "Signing In..." : "Sign In"}
        </button>
      </form>

      <div className="mt-8 text-center">
        <p className="text-zinc-500">
          Don't have an account?{" "}
          <Link
            href="/register"
            className="font-semibold text-black hover:underline">
            Create Account
          </Link>
        </p>
      </div>
    </AuthCard>
  );
}
