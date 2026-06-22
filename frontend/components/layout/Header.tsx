"use client";

import { useState } from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  Menu,
  X,
  LogOut,
  LayoutDashboard,
  Map,
  PlusCircle,
  Plane,
} from "lucide-react";

import { useAuthStore } from "@/store/authStore";
import { capitalize } from "@/utils/capitalize";

export default function Header() {
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);

  const user = useAuthStore((state) => state.user);

  const logout = useAuthStore((state) => state.logout);

  const navLinks = [
    {
      href: "/dashboard",
      label: "Dashboard",
      icon: LayoutDashboard,
    },
    {
      href: "/trips",
      label: "Trips",
      icon: Map,
    },
    {
      href: "/create-trip",
      label: "Create Trip",
      icon: PlusCircle,
    },
  ];

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/90 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/dashboard" className="flex items-center gap-2">
          <div className="rounded-lg bg-black p-2 text-white">
            <Plane size={18} />
          </div>

          <div>
            <h1 className="font-bold text-black">AI Travel Planner</h1>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-2 md:flex">
          {navLinks.map((link) => {
            const Icon = link.icon;

            const active = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition ${
                  active
                    ? "bg-black text-white"
                    : "text-zinc-600 hover:bg-zinc-100"
                }`}>
                <Icon size={16} />

                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Desktop Profile */}
        <div className="hidden items-center gap-4 md:flex">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-black text-sm font-semibold text-white">
              {user?.name?.charAt(0).toUpperCase()}
            </div>

            <div>
              <p className="text-sm font-medium text-black">
                {capitalize(user?.name || "")}
              </p>
            </div>
          </div>

          <button
            onClick={logout}
            className="flex cursor-pointer items-center gap-2 rounded-lg border border-zinc-300 px-4 py-2 text-sm font-medium text-zinc-700 transition hover:bg-zinc-100">
            <LogOut size={16} />
            Logout
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="md:hidden cursor-pointer">
          {isOpen ? <X size={24} color="black" /> : <Menu size={24} color="black" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="border-t bg-white md:hidden">
          <div className="container mx-auto px-4 py-5">
            {/* User */}
            <div className="mb-5 flex items-center gap-3 border-b pb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-white">
                {user?.name?.charAt(0).toUpperCase()}
              </div>

              <div>
                <p className="text-black font-medium">{capitalize(user?.name || "")}</p>

                <p className="text-sm text-zinc-500">Travel Planner User</p>
              </div>
            </div>

            {/* Links */}
            <nav className="space-y-2">
              {navLinks.map((link) => {
                const Icon = link.icon;

                const active = pathname === link.href;

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={closeMenu}
                    className={`flex items-center gap-3 rounded-lg px-4 py-3 transition ${
                      active ? "bg-black text-white" : "hover:bg-zinc-100 text-black"
                    }`}>
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
                className="mt-4 flex w-full items-center gap-3 rounded-lg border border-zinc-300 px-4 py-3 text-red-600 hover:bg-red-50">
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
