"use client";

import Link from "next/link";
import { Github, Twitter, Linkedin, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const footerLinks = {
    solutions: [
        { name: "AI & Machine Learning", href: "/services/ai-ml" },
        { name: "Web Development", href: "/services/web-development" },
        { name: "Cloud Services", href: "/services/cloud-devops" },
        { name: "Cybersecurity", href: "/services/cybersecurity" },
    ],
    company: [
        { name: "About Us", href: "/about" },
        { name: "Careers", href: "/careers" },
        { name: "Blog", href: "/blog" },
        { name: "Contact", href: "/contact" },
    ],
    legal: [
        { name: "Privacy Policy", href: "/privacy-policy" },
        { name: "Terms of Service", href: "/terms" },
        { name: "Cookie Policy", href: "/cookie-policy" },
        { name: "NDA", href: "/nda" },
    ],
};

export function Footer() {
    return (
        <footer className="border-t border-white/10 bg-background-secondary pt-16 pb-8">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
                    {/* Brand Column */}
                    <div className="space-y-4">
                        <Link href="/" className="flex items-center gap-2 group">
                            <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center border border-primary/50 group-hover:border-primary transition-colors">
                                <div className="w-4 h-4 bg-primary rounded-sm shadow-[0_0_10px_rgba(99,102,241,0.5)]" />
                            </div>
                            <span className="font-heading font-bold text-xl tracking-tight text-foreground">
                                Skylogix
                            </span>
                        </Link>
                        <p className="text-muted-foreground leading-relaxed">
                            Empowering enterprises with next-generation digital solutions.
                            Building the future, today.
                        </p>
                        <div className="flex items-center gap-4">
                            <a href="#" className="p-2 rounded-full bg-white/5 hover:bg-primary/20 hover:text-primary transition-colors">
                                <Twitter className="w-5 h-5" />
                            </a>
                            <a href="#" className="p-2 rounded-full bg-white/5 hover:bg-primary/20 hover:text-primary transition-colors">
                                <Github className="w-5 h-5" />
                            </a>
                            <a href="#" className="p-2 rounded-full bg-white/5 hover:bg-primary/20 hover:text-primary transition-colors">
                                <Linkedin className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Links Columns */}
                    <div>
                        <h3 className="font-heading font-semibold text-foreground mb-6">Solutions</h3>
                        <ul className="space-y-3">
                            {footerLinks.solutions.map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-muted-foreground hover:text-primary transition-colors text-sm">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-heading font-semibold text-foreground mb-6">Company</h3>
                        <ul className="space-y-3">
                            {footerLinks.company.map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-muted-foreground hover:text-primary transition-colors text-sm">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-heading font-semibold text-foreground mb-6">Legal</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/privacy-policy" className="text-muted-foreground hover:text-primary transition-colors text-sm">Privacy Policy</Link>
                            </li>
                            <li>
                                <Link href="/terms" className="text-muted-foreground hover:text-primary transition-colors text-sm">Terms & Conditions</Link>
                            </li>
                            <li>
                                <Link href="/cookie-policy" className="text-muted-foreground hover:text-primary transition-colors text-sm">Cookie Policy</Link>
                            </li>
                            <li>
                                <Link href="/nda" className="text-muted-foreground hover:text-primary transition-colors text-sm">NDA & Compliance</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter Column */}
                    <div>
                        <h3 className="font-heading font-semibold text-foreground mb-6">Stay Updated</h3>
                        <p className="text-muted-foreground text-sm mb-4">
                            Subscribe to our newsletter for the latest tech insights.
                        </p>
                        <div className="flex flex-col gap-3">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="bg-white/5 border border-white/10 rounded-md px-4 py-2 text-sm focus:outline-none focus:border-primary transition-colors"
                            />
                            <Button>Subscribe</Button>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-xs text-muted-foreground text-center md:text-left">
                        &copy; {new Date().getFullYear()} Skylogix Technologies. All rights reserved.
                    </p>
                    <div className="flex items-center gap-6">
                        {footerLinks.legal.map((link) => (
                            <Link key={link.name} href={link.href} className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                                {link.name}
                            </Link>
                        ))}
                    </div>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <span>Made with</span>
                        <Heart className="w-3 h-3 text-red-500 fill-red-500" />
                        <span>by XRayNO</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
