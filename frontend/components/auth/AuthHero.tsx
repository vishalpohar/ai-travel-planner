import { Plane } from "lucide-react";

interface Props {
  title: string;
  description: string;
}

export default function AuthHero({ title, description }: Props) {
  return (
    <div className="hidden lg:flex flex-col justify-center bg-black px-16 text-white">
      <div className="max-w-lg">
        <div className="mb-8 flex items-center gap-3">
          <Plane size={32} />

          <h1 className="text-3xl font-bold">AI Travel Planner</h1>
        </div>

        <h2 className="mb-6 text-5xl font-bold leading-tight">{title}</h2>

        <p className="text-lg leading-relaxed text-zinc-400">{description}</p>

        <div className="mt-10 space-y-4">
          <div className="rounded-lg border border-zinc-800 p-4">
            AI Powered Trip Planning
          </div>

          <div className="rounded-lg border border-zinc-800 p-4">
            Intelligent Budget Tracking
          </div>

          <div className="rounded-lg border border-zinc-800 p-4">
            Smart Packing Recommendations
          </div>
        </div>
      </div>
    </div>
  );
}
