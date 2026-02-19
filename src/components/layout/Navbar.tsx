"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Rocket } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Magnet from "@/components/ui/Magnet";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

const navLinks = [
    { name: "Services", href: "/services" },
    { name: "Solutions", href: "/solutions" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "About", href: "/about" },
];

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();

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

                        <Magnet>
                            <Link
                                href="/book-a-call"
                                onClick={() => {
                                    if (typeof window !== "undefined" && (window as any).gtag) {
                                        (window as any).gtag("event", "book_call_click", {
                                            event_category: "Navigation",
                                            event_label: "Navbar CTA"
                                        });
                                    }
                                }}
                            >
                                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 rounded-full shadow-[0_0_20px_rgba(79,142,247,0.3)] hover:shadow-[0_0_30px_rgba(79,142,247,0.5)] transition-all duration-300 group overflow-hidden relative">
                                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                                    <span className="relative flex items-center gap-2">
                                        Book a Free Call <Rocket className="w-4 h-4 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform duration-300" />
                                    </span>
                                </Button>
                            </Link>
                        </Magnet>
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
                            <Link href="/book-a-call" onClick={() => setIsMobileMenuOpen(false)}>
                                <Button className="w-full h-12 text-lg" variant="glow">
                                    Book a Free Call
                                </Button>
                            </Link>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
