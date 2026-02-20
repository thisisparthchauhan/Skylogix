"use client";

import { useState, useEffect } from "react";
import { AdminSidebar } from "./AdminSidebar";
import { AdminTopbar } from "./AdminTopbar";

export function AdminLayout({ children }: { children: React.ReactNode }) {
    const [isMobileOpen, setIsMobileOpen] = useState(false);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) return null;

    return (
        <div className="flex h-screen overflow-hidden bg-[#060818] text-white">
            {/* Sidebar */}
            <AdminSidebar isMobileOpen={isMobileOpen} setIsMobileOpen={setIsMobileOpen} />

            {/* Main Content Area */}
            <div
                style={{ marginLeft: "240px", width: "calc(100% - 240px)" }}
                className="flex flex-col min-h-screen transition-all duration-300 md:ml-[240px] md:w-[calc(100%-240px)] ml-0 w-full"
            >
                {/* Topbar */}
                <AdminTopbar setIsMobileOpen={setIsMobileOpen} />

                {/* Page Content */}
                <main className="mt-14 p-6 overflow-y-auto flex-1 custom-scrollbar relative z-0">
                    {/* Background Texture for Space Theme Depth */}
                    <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-10 mix-blend-overlay pointer-events-none z-[-1]" />
                    {children}
                </main>
            </div>
        </div>
    );
}
