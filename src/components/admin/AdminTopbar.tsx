"use client";

import { Bell, Search, Menu } from "lucide-react";

export function AdminTopbar({ setIsMobileOpen }: { setIsMobileOpen: (v: boolean) => void }) {
    return (
        <header
            style={{ left: "240px", width: "calc(100% - 240px)" }}
            className="fixed top-0 right-0 h-14 z-30 bg-[#080D1E]/95 backdrop-blur-sm border-b border-white/[0.08] flex items-center px-6 gap-4 md:w-[calc(100%-240px)] w-full md:left-[240px] left-0 transition-all duration-300"
        >
            {/* Left: Page title */}
            <div className="flex items-center gap-4 flex-shrink-0">
                <button
                    onClick={() => setIsMobileOpen(true)}
                    className="p-2 -ml-2 text-white/70 hover:text-white md:hidden"
                >
                    <Menu size={20} />
                </button>
                <h1 className="text-white font-semibold text-base hidden sm:block">Dashboard</h1>
            </div>

            {/* Center: Search bar */}
            <div className="flex-1 max-w-md mx-auto">
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30 w-4 h-4" />
                    <input
                        placeholder="Search users, bookings, leads... (Cmd+K)"
                        className="w-full h-9 bg-white/[0.05] border border-white/[0.08] rounded-lg pl-9 pr-4 text-sm text-white placeholder:text-white/30 outline-none focus:border-[#4F8EF7]/50 transition-all"
                    />
                </div>
            </div>

            {/* Right: Notifications + Avatar */}
            <div className="flex items-center gap-3 flex-shrink-0">
                <button className="relative p-2 rounded-lg hover:bg-white/[0.05] transition-colors">
                    <Bell className="w-5 h-5 text-white/60" />
                    <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-[#4F8EF7] rounded-full" />
                </button>
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#4F8EF7] to-[#7B5EA7] flex items-center justify-center text-white text-xs font-bold cursor-pointer">
                    JD
                </div>
            </div>
        </header>
    );
}
