"use client";

import { cn } from "@/lib/utils";

interface GradientTextProps {
    children: React.ReactNode;
    className?: string;
    from?: string;
    via?: string;
    to?: string;
    animate?: boolean;
}

export function GradientText({
    children,
    className,
    from = "from-primary",
    via = "via-purple-500",
    to = "to-secondary",
    animate = true,
}: GradientTextProps) {
    return (
        <span
            className={cn(
                "bg-clip-text text-transparent bg-gradient-to-r",
                from,
                via,
                to,
                animate && "animate-gradient-x bg-[length:200%_auto]",
                className
            )}
        >
            {children}
        </span>
    );
}
