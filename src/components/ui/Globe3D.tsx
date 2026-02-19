"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";

// Dynamic import for react-globe.gl to avoid SSR issues
const Globe = dynamic(() => import("react-globe.gl"), {
    ssr: false,
    loading: () => (
        <div className="flex items-center justify-center h-[400px] w-full bg-[#060818] text-primary/50 animate-pulse">
            Loading Globe...
        </div>
    ),
});

// Location Data
// India (HQ): 20.5937, 78.9629
const LOCATIONS = [
    { name: "India (HQ)", lat: 20.5937, lng: 78.9629, size: 0.5, color: "#00C2FF" },
    { name: "USA", lat: 37.0902, lng: -95.7129, size: 0.3, color: "#00C2FF" },
    { name: "UK", lat: 55.3781, lng: -3.4360, size: 0.3, color: "#00C2FF" },
    { name: "Germany", lat: 51.1657, lng: 10.4515, size: 0.3, color: "#00C2FF" },
    { name: "France", lat: 46.2276, lng: 2.2137, size: 0.3, color: "#00C2FF" },
    { name: "Dubai", lat: 25.2048, lng: 55.2708, size: 0.3, color: "#00C2FF" },
    { name: "Australia", lat: -25.2744, lng: 133.7751, size: 0.3, color: "#00C2FF" },
];

// Create Arcs from HQ to all other locations
const ARCS = LOCATIONS.filter((loc) => loc.name !== "India (HQ)").map((loc) => ({
    startLat: 20.5937,
    startLng: 78.9629,
    endLat: loc.lat,
    endLng: loc.lng,
    color: ["rgba(0, 194, 255, 0.5)", "rgba(0, 194, 255, 0.1)"], // Gradient
}));

export default function Globe3D() {
    const globeEl = useRef<any>(null);
    const [dimensions, setDimensions] = useState({ width: 800, height: 600 });
    const containerRef = useRef<HTMLDivElement>(null);

    // Responsive Sizing
    useEffect(() => {
        const handleResize = () => {
            if (containerRef.current) {
                setDimensions({
                    width: containerRef.current.clientWidth,
                    height: containerRef.current.clientHeight,
                });
            }
        };

        window.addEventListener("resize", handleResize);
        handleResize(); // Initial size

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Auto-rotation
    useEffect(() => {
        if (globeEl.current) {
            globeEl.current.controls().autoRotate = true;
            globeEl.current.controls().autoRotateSpeed = 0.5;
            globeEl.current.pointOfView({ lat: 20.5937, lng: 78.9629, altitude: 2.5 });
        }
    }, []);

    return (
        <div
            ref={containerRef}
            className="w-full h-[400px] md:h-[600px] relative overflow-hidden rounded-2xl bg-[#060818] border border-white/10 shadow-[0_0_50px_rgba(0,194,255,0.1)]"
        >
            <div className="absolute inset-0 bg-gradient-to-t from-[#060818] via-transparent to-transparent z-10 pointer-events-none" />

            <Globe
                ref={globeEl}
                width={dimensions.width}
                height={dimensions.height}
                backgroundColor="#060818"
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                atmosphereColor="#3a228a"
                atmosphereAltitude={0.15}

                // Points (Locations)
                pointsData={LOCATIONS}
                pointAltitude={0.01}
                pointColor="color"
                pointRadius="size"
                pointResolution={24}
                pointsMerge={true}
                pointLabel={(d: any) => `
                    <div style="background: rgba(6, 8, 24, 0.9); padding: 8px 12px; border: 1px solid rgba(0, 194, 255, 0.3); border-radius: 4px; color: white; font-family: sans-serif;">
                        <span style="font-weight: bold; color: #00C2FF;">${d.name}</span><br/>
                        <span style="font-size: 10px; opacity: 0.8;">Client Region</span>
                    </div>
                `}

                // Arcs (Connections)
                arcsData={ARCS}
                arcColor="color"
                arcDashLength={0.4}
                arcDashGap={0.2}
                arcDashAnimateTime={2000}
                arcStroke={0.5}

                // Rings (Pulse Effect)
                ringsData={LOCATIONS}
                ringColor={() => (t: number) => `rgba(0, 194, 255, ${1 - t})`}
                ringMaxRadius={5}
                ringPropagationSpeed={2}
                ringRepeatPeriod={1000}
            />
        </div>
    );
}
