import { ImageResponse } from "next/og";

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

// Function to format slug to title case
function formatSlug(slug: string) {
    return slug
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
}

export default async function Image({ params }: Props) {
    const { slug } = await params;

    // In a real app, you would fetch blog post data here.
    // existing blogData.ts is missing as per user check, so we fallback to slug formatting.
    const title = formatSlug(slug);

    return new ImageResponse(
        (
            <div
                style={{
                    height: "100%",
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start", // Left align for blog posts
                    justifyContent: "space-between",
                    backgroundColor: "#060818",
                    padding: "80px",
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

                {/* Corner Gradient */}
                <div
                    style={{
                        position: "absolute",
                        top: -100,
                        right: -100,
                        width: "600px",
                        height: "600px",
                        background:
                            "radial-gradient(circle, rgba(79, 142, 247, 0.25) 0%, rgba(6, 8, 24, 0) 70%)",
                        filter: "blur(50px)",
                    }}
                />

                <div style={{ display: "flex", flexDirection: "column", zIndex: 10 }}>
                    <div
                        style={{
                            fontSize: 24,
                            fontWeight: 700,
                            color: "#4F8EF7",
                            marginBottom: 20,
                            textTransform: "uppercase",
                            letterSpacing: "0.1em",
                        }}
                    >
                        Blog · Skylogix Technologies
                    </div>

                    <div
                        style={{
                            fontSize: 72,
                            fontWeight: 800,
                            color: "white",
                            lineHeight: 1.1,
                            maxWidth: "1000px",
                            textShadow: "0 0 30px rgba(0,0,0,0.5)",
                        }}
                    >
                        {title}
                    </div>
                </div>

                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "20px",
                        borderTop: "1px solid rgba(255,255,255,0.1)",
                        width: "100%",
                        paddingTop: "30px",
                    }}
                >
                    <div
                        style={{
                            width: 60,
                            height: 60,
                            borderRadius: "50%",
                            background: "#1e293b",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: "#4F8EF7",
                            fontSize: 30,
                            fontWeight: "bold",
                        }}
                    >
                        ST
                    </div>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <div style={{ color: "white", fontSize: 24, fontWeight: 600 }}>
                            Skylogix Team
                        </div>
                        <div style={{ color: "#8A9BB5", fontSize: 20 }}>
                            {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                        </div>
                    </div>
                </div>
            </div>
        ),
        {
            ...size,
        }
    );
}
