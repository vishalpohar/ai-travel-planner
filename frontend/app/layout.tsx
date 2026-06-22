import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from "react-hot-toast";
import AuthProvider from "@/components/providers/AuthProvider";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "AI Travel Planner",
    template: "%s | AI Travel Planner",
  },
  description:
    "Create personalized travel itineraries, budget plans, hotel recommendations, and smart packing lists powered by AI.",
  keywords: [
    "AI Travel Planner",
    "Travel Itinerary Generator",
    "AI Trip Planner",
    "Travel Planning App",
    "Vacation Planner",
    "AI Travel Assistant",
    "Trip Budget Calculator",
    "Packing List Generator",
    "Hotel Recommendations",
    "Travel AI",
  ],
  authors: [
    {
      name: "Vishal Pohar",
    },
  ],

  creator: "Vishal Pohar",

  metadataBase: new URL("https://ai-travel-planner-alpha-dusky.vercel.app"),

  openGraph: {
    title: "AI Travel Planner",
    description:
      "Generate personalized travel itineraries, hotel recommendations, trip budgets, and packing lists using AI.",

    url: "https://ai-travel-planner-alpha-dusky.vercel.app",

    siteName: "AI Travel Planner",

    locale: "en_US",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "AI Travel Planner",

    description:
      "Plan smarter trips with AI-powered itineraries, budgets, hotels, and packing lists.",
  },

  robots: {
    index: true,
    follow: true,
  },

  category: "travel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-background text-foreground antialiased`}>
        <AuthProvider>{children}</AuthProvider>
        <Toaster position="top-right" reverseOrder={false} />
      </body>
    </html>
  );
}
