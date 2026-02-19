import { ImageResponse } from "next/og";
import { SERVICES_SEO } from "@/lib/seoConstants";

export const runtime = "edge";

export const size = {
    width: 1200,
    height: 630,
};

export const contentType = "image/png";

interface Props {
    params: {
        slug: string;
    };
}

export default async function Image({ params }: Props) {
    const { slug } = await params;
    const service = SERVICES_SEO.find((s) => s.slug === slug);

    const title = service ? service.title : "Service Not Found";

    return new ImageResponse(
        (
            <div
                style={{
                    height: "100%",
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#060818",
                    position: "relative",
                }}
            >
                {/* Background Pattern */}
                <div
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundImage:
                            "radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.05) 1px, transparent 0)",
                        backgroundSize: "40px 40px",
                    }}
                />

                {/* Glow Effect */}
                <div
                    style={{
                        position: "absolute",
                        bottom: -200,
                        left: -200,
                        width: "800px",
                        height: "800px",
                        background:
                            "radial-gradient(circle, rgba(79, 142, 247, 0.2) 0%, rgba(6, 8, 24, 0) 70%)",
                        filter: "blur(40px)",
                    }}
                />

                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        zIndex: 10,
                        textAlign: "center",
                        padding: "0 60px",
                    }}
                >
                    {/* Icon / Emoji Placeholder (Since we can't easily import lucide icons in edge) */}
                    <div
                        style={{
                            fontSize: 80,
                            marginBottom: 40,
                            background: "rgba(79, 142, 247, 0.1)",
                            width: 140,
                            height: 140,
                            borderRadius: "50%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            border: "2px solid rgba(79, 142, 247, 0.3)",
                            color: "#4F8EF7",
                        }}
                    >
                        🚀
                    </div>

                    <div
                        style={{
                            fontSize: 70,
                            fontWeight: 800,
                            color: "white",
                            marginBottom: 20,
                            lineHeight: 1.1,
                            textShadow: "0 0 40px rgba(79, 142, 247, 0.3)",
                        }}
                    >
                        {title}
                    </div>

                    <div
                        style={{
                            fontSize: 32,
                            color: "#8A9BB5",
                            maxWidth: "800px",
                        }}
                    >
                        Premium IT & Software Engineering Services
                    </div>
                </div>

                <div
                    style={{
                        position: "absolute",
                        bottom: 50,
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                    }}
                >
                    <div
                        style={{
                            fontSize: 24,
                            fontWeight: 700,
                            color: "#4F8EF7",
                        }}
                    >
                        SKYLOGIX
                    </div>
                    <div
                        style={{
                            fontSize: 24,
                            color: "#8A9BB5",
                        }}
                    >
                        TECHNOLOGIES
                    </div>
                </div>
            </div>
        ),
        {
            ...size,
        }
    );
}
