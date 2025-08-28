"use client";

import { Bell, Search, ChevronDown, Menu } from "lucide-react";
import { useState } from "react";
import Sidebar from "./sidebar";

export default function Topbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Topbar */}
      <header className="sticky top-0 z-20 flex items-center justify-between border-b bg-white px-4 py-3">
        {/* Left: Brand + Search */}
        <div className="flex items-center gap-4">
          {/* Hamburger for mobile */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
            onClick={() => setMobileOpen(true)}
          >
            <Menu size={20} />
          </button>

          <div className="font-semibold text-lg">Social Media Manager</div>

          {/* Search (hidden on mobile) */}
          <div className="hidden md:flex items-center rounded-xl border px-2 py-1.5 bg-gray-50">
            <Search size={16} className="text-gray-400 mr-2" />
            <input
              type="text"
              placeholder="Search posts, messages..."
              className="bg-transparent text-sm outline-none w-48"
            />
          </div>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-3">
          {/* Notifications */}
          <button className="relative rounded-full p-2 hover:bg-gray-100">
            <Bell size={18} />
            <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-red-500"></span>
          </button>

          {/* Feedback button (hidden on mobile) */}
          <button className="hidden md:block rounded-xl border px-3 py-1.5 text-sm hover:bg-gray-50">
            Feedback
          </button>

          {/* Connect Account */}
          <button className="rounded-xl bg-black px-3 py-1.5 text-sm text-white hover:opacity-90">
            Connect
          </button>

          {/* Profile Dropdown */}
          <div className="flex items-center gap-2 cursor-pointer rounded-xl px-2 py-1 hover:bg-gray-50">
            <img
              src="https://ui-avatars.com/api/?name=User&background=random"
              alt="user"
              className="h-7 w-7 rounded-full"
            />
            <ChevronDown size={16} className="text-gray-500" />
          </div>
        </div>
      </header>

      {/* Mobile Sidebar */}
      {mobileOpen && (
        <div className="fixed inset-0 z-30 flex">
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black/40"
            onClick={() => setMobileOpen(false)}
          />

          {/* Sidebar Drawer */}
          <div className="relative w-64 bg-white h-full shadow-lg">
            <Sidebar />
            <button
              onClick={() => setMobileOpen(false)}
              className="absolute top-3 right-3 text-gray-600 hover:text-black"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
}
