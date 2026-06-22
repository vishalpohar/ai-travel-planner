import Link from "next/link";

import { Plane } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-zinc-200 bg-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="mb-4 flex items-center gap-2">
              <div className="rounded-lg bg-black p-2 text-white">
                <Plane size={16} />
              </div>

              <h3 className="text-lg font-bold text-black">
                AI Travel Planner
              </h3>
            </div>

            <p className="max-w-sm text-sm leading-relaxed text-zinc-500">
              Plan smarter journeys with AI-generated itineraries, intelligent
              budget estimates, hotel recommendations, and weather-aware packing
              lists.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="mb-4 font-semibold text-black">Navigation</h4>

            <ul className="space-y-3 text-sm text-zinc-500">
              <li>
                <Link href="/dashboard" className="transition hover:text-black">
                  Dashboard
                </Link>
              </li>

              <li>
                <Link href="/trips" className="transition hover:text-black">
                  My Trips
                </Link>
              </li>

              <li>
                <Link
                  href="/create-trip"
                  className="transition hover:text-black">
                  Create Trip
                </Link>
              </li>
            </ul>
          </div>

          {/* Features */}
          <div>
            <h4 className="mb-4 font-semibold text-black">Features</h4>

            <ul className="space-y-3 text-sm text-zinc-500">
              <li>AI Trip Planning</li>
              <li>Budget Tracking</li>
              <li>Hotel Discovery</li>
              <li>Smart Packing Lists</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-zinc-200 pt-6 text-sm text-zinc-500 md:flex-row">
          <p>
            © {new Date().getFullYear()} AI Travel Planner. All rights reserved.
          </p>

          <p>Built with Next.js, Express.js, MongoDB & Gemini AI</p>
        </div>
      </div>
    </footer>
  );
}
