import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'Skylogix Technologies - Engineering Your Digital Future'
export const size = {
    width: 1200,
    height: 630,
}

export const contentType = 'image/png'

export default async function Image() {
    return new ImageResponse(
        (
            <div
                style={{
                    height: '100%',
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#060818',
                    backgroundImage: 'linear-gradient(to bottom right, #060818, #0A0F2C)',
                    color: 'white',
                    fontFamily: 'sans-serif',
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '20px',
                        marginBottom: '20px',
                    }}
                >
                    {/* Logo Placeholder - Simplified for OG Image */}
                    <div
                        style={{
                            width: '60px',
                            height: '60px',
                            backgroundColor: '#4F8EF7',
                            borderRadius: '12px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '32px',
                            fontWeight: 'bold',
                        }}
                    >
                        S
                    </div>
                    <div style={{ fontSize: '64px', fontWeight: 'bold', letterSpacing: '-0.02em' }}>
                        Skylogix
                    </div>
                </div>

                <div
                    style={{
                        fontSize: '32px',
                        color: '#94a3b8',
                        maxWidth: '800px',
                        textAlign: 'center',
                        lineHeight: 1.4,
                    }}
                >
                    Global Technology Partner
                </div>

                <div
                    style={{
                        position: 'absolute',
                        bottom: '40px',
                        fontSize: '20px',
                        color: '#4F8EF7',
                        opacity: 0.8,
                    }}
                >
                    skylogix.tech
                </div>

                {/* Glow Effects */}
                <div
                    style={{
                        position: 'absolute',
                        top: '-100px',
                        left: '-100px',
                        width: '400px',
                        height: '400px',
                        background: '#4F8EF7',
                        filter: 'blur(200px)',
                        opacity: 0.2,
                    }}
                />
                <div
                    style={{
                        position: 'absolute',
                        bottom: '-100px',
                        right: '-100px',
                        width: '400px',
                        height: '400px',
                        background: '#7B5EA7',
                        filter: 'blur(200px)',
                        opacity: 0.2,
                    }}
                />
            </div>
        ),
        {
            ...size,
        }
    )
}
