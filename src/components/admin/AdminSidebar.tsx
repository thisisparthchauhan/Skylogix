"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    LayoutDashboard,
    Users,
    KeyRound,
    Calendar,
    PhoneCall,
    Briefcase,
    ClipboardList,
    Calculator,
    Mail,
    Wallet,
    TrendingUp,
    Receipt,
    Home,
    Settings,
    Star,
    MessageCircleQuestion,
    PenTool,
    FileText,
    Bell,
    Shield,
    Image as ImageIcon,
    LogOut,
    AlignLeft
} from "lucide-react";
import { motion } from "framer-motion";

const NAV_GROUPS = [
    {
        label: "MAIN",
        items: [
            { name: "Dashboard", href: "/admin", icon: LayoutDashboard }
        ]
    },
    {
        label: "USERS",
        items: [
            { name: "All Users", href: "/admin/users", icon: Users },
            { name: "User Sessions", href: "/admin/users/sessions", icon: KeyRound }
        ]
    },
    {
        label: "BOOKINGS",
        items: [
            { name: "All Bookings", href: "/admin/bookings", icon: Calendar },
            { name: "Consultations", href: "/admin/bookings/consultations", icon: PhoneCall },
            { name: "Project Requests", href: "/admin/bookings/projects", icon: Briefcase }
        ]
    },
    {
        label: "LEADS",
        items: [
            { name: "Contact Forms", href: "/admin/leads", icon: ClipboardList },
            { name: "Estimator Leads", href: "/admin/leads/estimator", icon: Calculator },
            { name: "Newsletter Subs", href: "/admin/leads/newsletter", icon: Mail }
        ]
    },
    {
        label: "FINANCIALS",
        items: [
            { name: "P&L Overview", href: "/admin/finance", icon: Wallet },
            { name: "Revenue", href: "/admin/finance/revenue", icon: TrendingUp },
            { name: "Expenses", href: "/admin/finance/expenses", icon: Receipt },
            { name: "Invoices", href: "/admin/finance/invoices", icon: FileText }
        ]
    },
    {
        label: "CONTENT",
        items: [
            { name: "Home Page", href: "/admin/content/home", icon: Home },
            { name: "Services", href: "/admin/content/services", icon: Settings },
            { name: "Case Studies", href: "/admin/content/case-studies", icon: Briefcase },
            { name: "Team Members", href: "/admin/content/team", icon: Users },
            { name: "Testimonials", href: "/admin/content/testimonials", icon: Star },
            { name: "FAQs", href: "/admin/content/faqs", icon: MessageCircleQuestion },
            { name: "Blog Posts", href: "/admin/content/blog", icon: PenTool }
        ]
    },
    {
        label: "SITE SETTINGS",
        items: [
            { name: "Appearance", href: "/admin/settings/appearance", icon: ImageIcon },
            { name: "Email Templates", href: "/admin/settings/emails", icon: Mail },
            { name: "Notifications", href: "/admin/settings/notifications", icon: Bell },
            { name: "Security", href: "/admin/settings/security", icon: Shield },
            { name: "General", href: "/admin/settings/general", icon: Settings }
        ]
    }
];

export function AdminSidebar({ isMobileOpen, setIsMobileOpen }: { isMobileOpen: boolean, setIsMobileOpen: (v: boolean) => void }) {
    const pathname = usePathname();

    return (
        <>
            {/* Mobile Overlay */}
            {isMobileOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-40 md:hidden"
                    onClick={() => setIsMobileOpen(false)}
                />
            )}

            <aside
                style={{ width: "240px", minWidth: "240px" }}
                className={`fixed left-0 top-0 h-full z-40 bg-[#080D1E] border-r border-white/[0.08] flex-shrink-0 flex flex-col transition-transform duration-300 ${isMobileOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
                    }`}
            >
                {/* Header */}
                <div className="h-14 flex items-center px-4 border-b border-white/[0.08] flex-shrink-0 justify-between">
                    <Link href="/" className="flex items-center group relative z-50">
                        <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#4F8EF7]/20 to-[#00C2FF]/20 flex flex-shrink-0 items-center justify-center border border-[#4F8EF7]/50 group-hover:border-[#4F8EF7] transition-colors backdrop-blur-sm">
                            <div className="w-4 h-4 bg-[#4F8EF7] rounded-md shadow-[0_0_15px_rgba(79,142,247,0.6)] group-hover:shadow-[0_0_25px_rgba(79,142,247,0.8)] transition-shadow" />
                        </div>
                        <div className="flex flex-col ml-3 justify-center">
                            <span className="font-bold text-lg tracking-tight text-white group-hover:text-[#4F8EF7] transition-colors leading-none">
                                Skylogix
                            </span>
                        </div>
                    </Link>
                    <button className="md:hidden text-white/70 hover:text-white p-1" onClick={() => setIsMobileOpen(false)}>
                        <AlignLeft size={18} />
                    </button>
                </div>

                {/* Navigation Links */}
                <nav className="flex-1 overflow-y-auto py-4 px-3 custom-scrollbar">
                    {NAV_GROUPS.map((group, i) => (
                        <div key={i} className="mb-4">
                            <p className={`text-white/30 text-[10px] font-semibold tracking-widest uppercase px-3 mb-2 ${i === 0 ? "mt-0" : "mt-4"}`}>
                                {group.label}
                            </p>
                            <div className="space-y-0.5">
                                {group.items.map((item) => {
                                    const isActive = pathname === item.href || (pathname.startsWith(item.href) && item.href !== "/admin");
                                    return (
                                        <Link
                                            key={item.name}
                                            href={item.href}
                                            className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-all duration-200 ${isActive
                                                ? "text-white bg-[#4F8EF7]/10 border-l-2 border-[#4F8EF7]"
                                                : "text-white/60 hover:text-white hover:bg-white/[0.05] border-l-2 border-transparent"
                                                }`}
                                        >
                                            <item.icon className="w-4 h-4 flex-shrink-0" />
                                            <span className="truncate">{item.name}</span>
                                        </Link>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                </nav>

                {/* Footer Profile */}
                <div className="border-t border-white/[0.08] p-3 flex-shrink-0 bg-[#080D1E]">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#4F8EF7] to-[#7B5EA7] flex items-center justify-center text-xs text-white font-bold flex-shrink-0 shadow-lg">
                            JD
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="text-white text-xs font-medium truncate">John Doe</p>
                            <p className="text-white/40 text-[11px] truncate">Super Admin</p>
                        </div>
                        <button className="p-1.5 rounded-lg hover:bg-white/[0.05] text-white/40 hover:text-white transition-colors">
                            <LogOut className="w-3.5 h-3.5" />
                        </button>
                    </div>
                </div>
            </aside>
        </>
    );
}
