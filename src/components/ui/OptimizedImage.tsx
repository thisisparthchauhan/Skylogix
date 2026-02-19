"use client";

import Image, { ImageProps } from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface OptimizedImageProps extends Omit<ImageProps, "alt"> {
    alt: string; // Make alt required and stricter than standard ImageProps
    fallbackSrc?: string;
}

export function OptimizedImage({
    src,
    alt,
    className,
    priority = false,
    fill = false,
    width,
    height,
    sizes,
    quality = 85,
    fallbackSrc = "/images/placeholder.jpg",
    ...props
}: OptimizedImageProps) {
    const [error, setError] = useState(false);
    const [loaded, setLoaded] = useState(false);

    // Enforce alt text requirement in development
    if (process.env.NODE_ENV === "development" && (!alt || alt.trim() === "")) {
        console.warn(`OptimizedImage: Missing or empty alt text for image: ${src}`);
    }

    // Default sizes if using fill and not provided
    const defaultSizes = fill && !sizes
        ? "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        : sizes;

    return (
        <div
            className={cn(
                "relative overflow-hidden",
                !fill && "inline-block",
                className
            )}
            style={!fill && width && height ? { width, height } : undefined}
        >
            <Image
                src={error && fallbackSrc ? fallbackSrc : src}
                alt={alt}
                fill={fill}
                width={!fill ? width : undefined}
                height={!fill ? height : undefined}
                priority={priority}
                quality={quality}
                sizes={defaultSizes}
                onLoad={() => setLoaded(true)}
                onError={() => setError(true)}
                className={cn(
                    "duration-700 ease-in-out",
                    loaded ? "scale-100 blur-0 grayscale-0" : "scale-110 blur-2xl grayscale",
                    fill ? "object-cover" : "",
                )}
                {...props}
            />
        </div>
    );
}
