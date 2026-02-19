"use client";

import Link from "next/link";
import { ArrowRight, FileText, Layers, Layout } from "lucide-react";
import { linkMap, InternalLink } from "@/lib/internalLinks";
import { SectionWrapper } from "@/components/layout/SectionWrapper";

interface RelatedLinksProps {
    currentPage: string;
    className?: string;
    title?: string;
}

export function RelatedLinks({ currentPage, className = "", title = "Recommended Reading" }: RelatedLinksProps) {
    const links = linkMap[currentPage];

    if (!links || links.length === 0) {
        return null;
    }

    const getIcon = (type: InternalLink['type']) => {
        switch (type) {
            case 'service': return Layers;
            case 'case-study': return FileText;
            case 'page': return Layout;
            default: return ArrowRight;
        }
    };

    return (
        <SectionWrapper className={`py-12 ${className}`}>
            <div className="border-t border-white/10 pt-12">
                <h3 className="text-xl font-heading font-bold mb-6 text-white">{title}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {links.map((link, index) => {
                        const Icon = getIcon(link.type);
                        return (
                            <Link
                                key={index}
                                href={link.href}
                                className="group flex items-center gap-3 p-4 rounded-lg bg-white/5 border border-white/10 hover:border-primary/50 hover:bg-white/10 transition-all"
                            >
                                <div className="p-2 rounded-md bg-secondary/10 text-secondary group-hover:text-primary transition-colors">
                                    <Icon className="w-5 h-5" />
                                </div>
                                <span className="text-sm font-medium text-gray-300 group-hover:text-white capitalize">
                                    {link.anchorText}
                                </span>
                                <ArrowRight className="w-4 h-4 text-muted-foreground ml-auto group-hover:translate-x-1 transition-transform" />
                            </Link>
                        );
                    })}
                </div>
            </div>
        </SectionWrapper>
    );
}
