"use client";

import { useState } from "react";

import { useRouter } from "next/navigation";

import { MapPinned, CalendarDays, Wallet, Sparkles } from "lucide-react";

import { useTripStore } from "@/store/tripStore";

export default function CreateTripPage() {
  const router = useRouter();

  const createTrip = useTripStore((state) => state.createTrip);

  const loading = useTripStore((state) => state.loading);

  const [destination, setDestination] = useState("");

  const [durationDays, setDurationDays] = useState(3);

  const [budgetTier, setBudgetTier] = useState("Medium");

  const [interests, setInterests] = useState<string[]>([]);

  const interestOptions = [
    "Food",
    "Culture",
    "Adventure",
    "Shopping",
    "Nature",
    "Nightlife",
  ];

  const handleInterestChange = (interest: string) => {
    setInterests((prev) =>
      prev.includes(interest)
        ? prev.filter((item) => item !== interest)
        : [...prev, interest],
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const trip = await createTrip({
      destination,
      durationDays,
      budgetTier,
      interests,
    });

    router.push(`/trips/${trip._id}`);
  };

  return (
    <section className="container py-10">
      {/* Hero */}
      <div className="mb-10">
        <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-zinc-300 px-4 py-2 text-sm text-zinc-600">
          <Sparkles size={16} />
          AI Powered Travel Planning
        </p>

        <h1 className="max-w-3xl text-4xl font-bold tracking-tight md:text-5xl">
          Plan your next trip in seconds.
        </h1>

        <p className="mt-4 max-w-2xl text-zinc-500">
          Tell us where you want to go and our AI will create a personalized
          itinerary, estimate your budget, recommend hotels and generate a smart
          packing list.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1fr_380px]">
        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm">
          {/* Destination */}
          <div className="mb-6">
            <label className="mb-3 flex items-center gap-2 text-black font-medium">
              <MapPinned size={18} />
              Destination
            </label>

            <input
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              placeholder="Tokyo, Japan"
              className="w-full rounded-xl border border-zinc-300 px-4 py-3 text-black outline-none transition focus:border-black"
              required
            />
          </div>

          {/* Duration */}
          <div className="mb-6">
            <label className="mb-3 flex items-center gap-2 text-black font-medium">
              <CalendarDays size={18} />
              Duration (Days)
            </label>

            <input
              type="number"
              min={1}
              max={30}
              value={durationDays}
              onChange={(e) => setDurationDays(Number(e.target.value))}
              className="w-full rounded-xl border border-zinc-300 px-4 py-3 text-black outline-none transition focus:border-black"
            />
          </div>

          {/* Budget */}
          <div className="mb-6">
            <label className="mb-3 flex items-center gap-2 text-black font-medium">
              <Wallet size={18} />
              Budget Tier
            </label>

            <select
              value={budgetTier}
              onChange={(e) => setBudgetTier(e.target.value)}
              className="w-full rounded-xl border border-zinc-300 px-4 py-3 text-black outline-none transition focus:border-black">
              <option>Low</option>
              <option>Medium</option>
              <option>High</option>
            </select>
          </div>

          {/* Interests */}
          <div className="mb-8">
            <label className="mb-3 block text-black font-medium">
              Interests
            </label>

            <div className="flex flex-wrap gap-3">
              {interestOptions.map((interest) => {
                const selected = interests.includes(interest);

                return (
                  <button
                    key={interest}
                    type="button"
                    onClick={() => handleInterestChange(interest)}
                    className={`rounded-full border px-4 py-2 text-black text-sm transition ${
                      selected
                        ? "border-black bg-black text-white"
                        : "border-zinc-300 hover:border-black"
                    }`}>
                    {interest}
                  </button>
                );
              })}
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-black py-4 font-medium text-white transition hover:bg-zinc-900 disabled:cursor-not-allowed disabled:opacity-60">
            {loading ? "Creating Trip..." : "Generate AI Trip Plan"}
          </button>
        </form>

        {/* Side Panel */}
        <div className="rounded-3xl border border-zinc-200 bg-black p-8 text-white">
          <h2 className="mb-6 text-2xl font-bold">What you'll get</h2>

          <div className="space-y-5">
            <div>
              <h3 className="font-semibold">Personalized Itinerary</h3>

              <p className="mt-1 text-sm text-zinc-400">
                Day-by-day activities tailored to your interests.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">Hotel Recommendations</h3>

              <p className="mt-1 text-sm text-zinc-400">
                AI-selected hotels matching your budget.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">Budget Breakdown</h3>

              <p className="mt-1 text-sm text-zinc-400">
                Estimated costs for accommodation, transport, food and
                activities.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">Smart Packing List</h3>

              <p className="mt-1 text-sm text-zinc-400">
                Generated using destination weather and trip activities.
              </p>
            </div>
          </div>

          <div className="mt-8 rounded-2xl bg-white/10 p-4">
            <p className="text-sm text-zinc-300">
              AI typically generates a complete trip plan in less than 10
              seconds.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
