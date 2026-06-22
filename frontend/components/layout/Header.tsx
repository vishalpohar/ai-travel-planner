"use client";

import { useState } from "react";
import Link from "next/link";

import {
  Menu,
  X,
  User,
  LogOut,
  LayoutDashboard,
  Map,
  PlusCircle,
} from "lucide-react";

import { useAuthStore } from "@/store/authStore";
import { capitalize } from "@/utils/capitalize";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const user = useAuthStore((state) => state.user);
  const logout = useAuthStore((state) => state.logout);

  const closeMenu = () => setIsOpen(false);

  const navLinks = [
    {
      href: "/dashboard",
      label: "Dashboard",
      icon: LayoutDashboard,
    },
    {
      href: "/trips",
      label: "My Trips",
      icon: Map,
    },
    {
      href: "/create-trip",
      label: "Create Trip",
      icon: PlusCircle,
    },
  ];

  return (
    <header className="sticky top-0 z-50 border-b bg-white backdrop-blur">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link
          href="/dashboard"
          className="text-lg font-bold text-sky-600 sm:text-xl">
          AI Travel Planner
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-gray-600 transition hover:text-sky-600">
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop User Section */}
        <div className="hidden md:flex items-center gap-4">
          <div className="flex items-center gap-2">
            <User size={18} />
            <span className="text-sm text-gray-600">
              {user?.name ? capitalize(user.name) : ""}
            </span>
          </div>

          <button
            onClick={logout}
            className="flex cursor-pointer items-center gap-2 rounded-lg bg-red-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-red-600">
            <LogOut size={16} />
            Logout
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="md:hidden text-gray-700 cursor-pointer"
          aria-label="Toggle Menu">
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="border-t bg-white/90 backdrop-blur md:hidden">
          <div className="px-4 py-4">
            <div className="mb-4 flex items-center gap-2 text-gray-700 border-b pb-4">
              <User size={18} />

              <span className="font-medium">
                {user?.name ? capitalize(user.name) : ""}
              </span>
            </div>

            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => {
                const Icon = link.icon;

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={closeMenu}
                    className="flex items-center gap-3 rounded-lg px-3 py-3 text-gray-700 transition hover:bg-zinc-100">
                    <Icon size={18} />
                    {link.label}
                  </Link>
                );
              })}

              <button
                onClick={() => {
                  logout();
                  closeMenu();
                }}
                className="mt-2 flex items-center gap-3 rounded-lg px-3 py-3 text-red-600 transition hover:bg-red-50">
                <LogOut size={18} />
                Logout
              </button>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
