"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { useTripStore } from "@/store/tripStore";

export default function CreateTripPage() {
  const router = useRouter();

  const createTrip = useTripStore((state) => state.createTrip);

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
      <h1 className="mb-8 text-3xl font-bold">Create New Trip</h1>

      <form
        onSubmit={handleSubmit}
        className="space-y-6 rounded-xl border border-white/30 bg-transparent p-6">
        <div>
          <label className="mb-2 block font-medium">Destination</label>

          <input
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            className="w-full rounded-lg border p-3"
            placeholder="Tokyo"
            required
          />
        </div>

        <div>
          <label className="mb-2 block font-medium">Duration (Days)</label>

          <input
            type="number"
            min={1}
            value={durationDays}
            onChange={(e) => setDurationDays(Number(e.target.value))}
            className="w-full rounded-lg border p-3"
          />
        </div>

        <div>
          <label className="mb-2 block font-medium">Budget</label>

          <select
            value={budgetTier}
            onChange={(e) => setBudgetTier(e.target.value)}
            className="w-full rounded-lg border p-3">
            <option className="text-gray-700">Low</option>
            <option className="text-gray-700">Medium</option>
            <option className="text-gray-700">High</option>
          </select>
        </div>

        <div>
          <label className="mb-3 block font-medium">Interests</label>

          <div className="flex flex-wrap gap-3">
            {interestOptions.map((interest) => (
              <label key={interest} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={interests.includes(interest)}
                  onChange={() => handleInterestChange(interest)}
                />

                {interest}
              </label>
            ))}
          </div>
        </div>

        <button
          className="rounded-lg px-5 py-3 text-sky-600 border border-sky-600 hover:bg-sky-600/10 cursor-pointer"
          type="submit">
          Create Trip
        </button>
      </form>
    </section>
  );
}
