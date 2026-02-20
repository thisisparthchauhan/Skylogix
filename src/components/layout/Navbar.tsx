"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, LogOut, User, Settings, FolderKanban, ShieldCheck } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Magnet from "@/components/ui/Magnet";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { useAuthModal } from "@/hooks/useAuthModal";
const navLinks = [
    { name: "Services", href: "/services" },
    { name: "Solutions", href: "/solutions" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "About", href: "/about" },
];

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const pathname = usePathname();
    const { openLogin, openSignup, isLoggedIn, user, logout } = useAuthModal();

    // Do not render Navbar on admin routes
    if (pathname?.startsWith("/admin")) {
        return null;
    }

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <nav
                className={cn(
                    "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                    isScrolled
                        ? "bg-background/80 backdrop-blur-md border-b border-border/50 py-4 shadow-lg"
                        : "bg-transparent py-6"
                )}
            >
                <div className="container mx-auto px-4 flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 group relative z-50">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center border border-primary/50 group-hover:border-primary transition-colors backdrop-blur-sm">
                            <div className="w-5 h-5 bg-primary rounded-md shadow-[0_0_15px_rgba(99,102,241,0.6)] group-hover:shadow-[0_0_25px_rgba(99,102,241,0.8)] transition-shadow" />
                        </div>
                        <span className="font-heading font-bold text-xl tracking-tight text-foreground group-hover:text-primary transition-colors">
                            Skylogix
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-6">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={cn(
                                    "text-sm font-medium transition-colors hover:text-primary",
                                    pathname === link.href ? "text-primary" : "text-muted-foreground"
                                )}
                            >
                                {link.name}
                            </Link>
                        ))}

                        {/* Theme Toggle */}
                        <ThemeToggle />

                        {isLoggedIn ? (
                            <div
                                className="relative"
                                onMouseEnter={() => setIsDropdownOpen(true)}
                                onMouseLeave={() => setIsDropdownOpen(false)}
                            >
                                <button className="w-9 h-9 rounded-full bg-gradient-to-br from-[#4F8EF7] to-[#00C2FF] flex items-center justify-center text-white font-medium shadow-[0_0_15px_rgba(79,142,247,0.3)] hover:shadow-[0_0_25px_rgba(79,142,247,0.5)] transition-all">
                                    {user?.firstName?.[0]}{user?.lastName?.[0]}
                                </button>

                                <AnimatePresence>
                                    {isDropdownOpen && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: 10 }}
                                            transition={{ duration: 0.2 }}
                                            className="absolute right-0 top-full pt-2 min-w-[220px]"
                                        >
                                            <div className="bg-[#0A0F2C]/95 border border-white/10 rounded-xl p-2 shadow-2xl backdrop-blur-xl">
                                                <div className="px-3 py-2 border-b border-white/10 mb-1">
                                                    <p className="font-medium text-white">{user?.firstName} {user?.lastName}</p>
                                                    <p className="text-xs text-[#8A9BB5]">{user?.email}</p>
                                                </div>
                                                {(user?.email === "admin@skylogix.com" || user?.email === "chauhanparth165@gmail.com" || user?.email === "vaibhavatios@gmail.com") && (
                                                    <Link href="/admin" className="w-full flex items-center gap-2 px-3 h-9 text-sm text-[#4F8EF7] hover:bg-[#4F8EF7]/10 rounded-lg transition-colors font-medium">
                                                        <ShieldCheck size={14} /> Admin Panel
                                                    </Link>
                                                )}
                                                <button className="w-full flex items-center gap-2 px-3 h-9 text-sm text-[#C8D5E8] hover:bg-white/5 rounded-lg transition-colors mt-1">
                                                    <User size={14} /> My Profile
                                                </button>
                                                <button className="w-full flex items-center gap-2 px-3 h-9 text-sm text-[#C8D5E8] hover:bg-white/5 rounded-lg transition-colors">
                                                    <FolderKanban size={14} /> My Projects
                                                </button>
                                                <button className="w-full flex items-center gap-2 px-3 h-9 text-sm text-[#C8D5E8] hover:bg-white/5 rounded-lg transition-colors mb-1">
                                                    <Settings size={14} /> Settings
                                                </button>
                                                <div className="border-t border-white/10 pt-1">
                                                    <button
                                                        onClick={logout}
                                                        className="w-full flex items-center gap-2 px-3 h-9 text-sm text-red-400 hover:bg-red-400/10 rounded-lg transition-colors"
                                                    >
                                                        <LogOut size={14} /> Logout
                                                    </button>
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ) : (
                            <div className="flex items-center gap-2">
                                <Button
                                    onClick={openLogin}
                                    variant="ghost"
                                    className="h-9 px-5 border border-white/15 text-white bg-transparent hover:bg-transparent hover:border-[#4F8EF7] hover:text-[#4F8EF7] rounded-lg text-sm font-medium transition-all"
                                >
                                    Login
                                </Button>
                                <Button
                                    onClick={openSignup}
                                    className="h-9 px-5 bg-gradient-to-br from-[#4F8EF7] to-[#00C2FF] text-white rounded-lg text-sm font-semibold shadow-[0_0_20px_rgba(0,194,255,0.25)] hover:shadow-[0_0_25px_rgba(0,194,255,0.4)] hover:scale-[1.02] transition-all"
                                >
                                    Sign Up
                                </Button>
                            </div>
                        )}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-foreground relative z-50 p-2"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {isMobileMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </nav>

            {/* Mobile Navigation Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl md:hidden pt-24 px-6 flex flex-col gap-6"
                    >
                        {navLinks.map((link, index) => (
                            <motion.div
                                key={link.name}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <Link
                                    href={link.href}
                                    className="text-2xl font-heading font-bold text-foreground hover:text-primary transition-colors block py-2 border-b border-white/5"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            </motion.div>
                        ))}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="mt-4"
                        >
                            {isLoggedIn ? (
                                <div className="flex flex-col gap-2 mt-4 pt-4 border-t border-white/10">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#4F8EF7] to-[#00C2FF] flex items-center justify-center text-white font-medium">
                                            {user?.firstName?.[0]}{user?.lastName?.[0]}
                                        </div>
                                        <div>
                                            <p className="font-medium text-white">{user?.firstName} {user?.lastName}</p>
                                            <p className="text-xs text-[#8A9BB5]">{user?.email}</p>
                                        </div>
                                    </div>
                                    {(user?.email === "admin@skylogix.com" || user?.email === "chauhanparth165@gmail.com" || user?.email === "vaibhavatios@gmail.com") && (
                                        <Link href="/admin" onClick={() => setIsMobileMenuOpen(false)} className="w-full flex items-center gap-3 px-4 h-11 text-base text-[#4F8EF7] hover:bg-[#4F8EF7]/10 rounded-lg transition-colors text-left font-medium">
                                            <ShieldCheck size={16} /> Admin Panel
                                        </Link>
                                    )}
                                    <button className="w-full flex items-center gap-3 px-4 h-11 text-base text-[#C8D5E8] hover:bg-white/5 rounded-lg transition-colors text-left" onClick={() => setIsMobileMenuOpen(false)}>
                                        <User size={16} /> My Profile
                                    </button>
                                    <button className="w-full flex items-center gap-3 px-4 h-11 text-base text-[#C8D5E8] hover:bg-white/5 rounded-lg transition-colors text-left" onClick={() => setIsMobileMenuOpen(false)}>
                                        <FolderKanban size={16} /> My Projects
                                    </button>
                                    <button className="w-full flex items-center gap-3 px-4 h-11 text-base text-[#C8D5E8] hover:bg-white/5 rounded-lg transition-colors text-left" onClick={() => setIsMobileMenuOpen(false)}>
                                        <Settings size={16} /> Settings
                                    </button>
                                    <button
                                        onClick={() => { logout(); setIsMobileMenuOpen(false); }}
                                        className="w-full flex items-center gap-3 px-4 h-11 text-base text-red-400 hover:bg-red-400/10 rounded-lg transition-colors text-left"
                                    >
                                        <LogOut size={16} /> Logout
                                    </button>
                                </div>
                            ) : (
                                <div className="mt-4 flex flex-col gap-3 border-t border-white/10 pt-6">
                                    <Button
                                        onClick={() => { openLogin(); setIsMobileMenuOpen(false); }}
                                        variant="ghost"
                                        className="w-full h-12 border border-white/15 text-white bg-transparent hover:bg-transparent hover:border-[#4F8EF7] hover:text-[#4F8EF7] rounded-lg text-base font-medium transition-all"
                                    >
                                        Login
                                    </Button>
                                    <Button
                                        onClick={() => { openSignup(); setIsMobileMenuOpen(false); }}
                                        className="w-full h-12 bg-gradient-to-br from-[#4F8EF7] to-[#00C2FF] text-white rounded-lg text-base font-semibold shadow-[0_0_20px_rgba(0,194,255,0.25)] hover:shadow-[0_0_25px_rgba(0,194,255,0.4)] transition-all"
                                    >
                                        Sign Up
                                    </Button>
                                </div>
                            )}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
