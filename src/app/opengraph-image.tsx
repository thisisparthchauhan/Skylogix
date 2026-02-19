import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Skylogix Technologies - Global IT Services & Consulting";
export const size = {
    width: 1200,
    height: 630,
};

export const contentType = "image/png";

export default async function Image() {
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
                    backgroundColor: "#060818", // Deep space black
                    position: "relative",
                }}
            >
                {/* Background Pattern - Dot Grid */}
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

                {/* Top-Right Glow */}
                <div
                    style={{
                        position: "absolute",
                        top: -200,
                        right: -200,
                        width: "800px",
                        height: "800px",
                        background:
                            "radial-gradient(circle, rgba(79, 142, 247, 0.3) 0%, rgba(6, 8, 24, 0) 70%)",
                        filter: "blur(40px)",
                    }}
                />

                {/* Content Container */}
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        zIndex: 10,
                        textAlign: "center",
                    }}
                >
                    {/* Logo Section */}
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            marginBottom: "20px",
                        }}
                    >
                        <div
                            style={{
                                fontSize: 80,
                                fontWeight: 900,
                                color: "#4F8EF7", // Electric Blue
                                lineHeight: 1,
                                letterSpacing: "-0.02em",
                            }}
                        >
                            SKYLOGIX
                        </div>
                        <div
                            style={{
                                fontSize: 32,
                                fontWeight: 700,
                                color: "#8A9BB5", // Gray
                                letterSpacing: "0.2em",
                                marginTop: "10px",
                            }}
                        >
                            TECHNOLOGIES
                        </div>
                    </div>

                    {/* Main Headline */}
                    <div
                        style={{
                            fontSize: 72,
                            fontWeight: 800,
                            color: "white",
                            textAlign: "center",
                            marginBottom: "20px",
                            lineHeight: 1.1,
                            maxWidth: "900px",
                            padding: "0 20px",
                            textShadow: "0 0 40px rgba(79, 142, 247, 0.3)",
                        }}
                    >
                        Global IT Services & Consulting
                    </div>

                    {/* Tagline */}
                    <div
                        style={{
                            fontSize: 36,
                            color: "#8A9BB5",
                            marginBottom: "60px",
                        }}
                    >
                        Mobile Apps · Web Platforms · AI Solutions
                    </div>
                </div>

                {/* Bottom Bar */}
                <div
                    style={{
                        position: "absolute",
                        bottom: 40,
                        left: 60,
                        right: 60,
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        borderTop: "1px solid rgba(255, 255, 255, 0.1)",
                        paddingTop: "30px",
                    }}
                >
                    <div
                        style={{
                            fontSize: 28,
                            color: "#8A9BB5",
                            fontWeight: 600,
                        }}
                    >
                        skylogix.tech
                    </div>
                    <div
                        style={{
                            fontSize: 28,
                            color: "#8A9BB5",
                            fontWeight: 500,
                        }}
                    >
                        US · UK · Europe · Australia · Middle East
                    </div>
                </div>
            </div>
        ),
        {
            ...size,
        }
    );
}
