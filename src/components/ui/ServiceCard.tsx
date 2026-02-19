import { useRef, useState } from "react";
import dynamic from "next/dynamic";
import { LucideIcon } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Player as PlayerType } from "@lottiefiles/react-lottie-player";

const Player = dynamic(() => import("@lottiefiles/react-lottie-player").then((mod) => mod.Player), {
    ssr: false,
    loading: () => <div className="w-16 h-16 bg-white/5 rounded-full animate-pulse" />,
}) as any;

interface ServiceCardProps {
    title: string;
    description: string;
    icon: LucideIcon;
    lottieUrl?: string;
    slug: string;
}

export default function ServiceCard({ title, description, icon: Icon, lottieUrl, slug }: ServiceCardProps) {
    const [isHovered, setIsHovered] = useState(false);
    const playerRef = useRef<PlayerType>(null);

    const handleMouseEnter = () => {
        setIsHovered(true);
        playerRef.current?.play();
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        playerRef.current?.stop();
    };

    return (
        <Link href={`/services/${slug}`} className="block h-full">
            <GlassCard
                className={`
                    h-full p-8 transition-all duration-300 relative overflow-hidden group
                    hover:border-primary/50 hover:shadow-[0_0_30px_rgba(79,142,247,0.15)]
                `}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                {/* Glow Effect */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-[50px] rounded-full translate-x-10 -translate-y-10 group-hover:bg-primary/20 transition-colors" />

                <div className="relative z-10">
                    <div className="mb-6 w-16 h-16 flex items-center justify-center rounded-2xl bg-white/5 border border-white/10 group-hover:border-primary/30 transition-colors">
                        {lottieUrl ? (
                            <div className="w-16 h-16">
                                <Player
                                    ref={playerRef as any}
                                    src={lottieUrl}
                                    style={{ height: '64px', width: '64px' }}
                                    loop
                                    autoplay={false}
                                />
                            </div>
                        ) : (
                            <Icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                        )}
                    </div>

                    <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                        {title}
                    </h3>

                    <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                        {description}
                    </p>

                    <div className="flex items-center gap-2 text-sm font-medium text-primary opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                        Learn More <ArrowRight className="w-4 h-4" />
                    </div>
                </div>
            </GlassCard>
        </Link>
    );
}
