import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { JsonLd, organizationSchema, websiteSchema } from "@/components/seo/JsonLd";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || "https://skylogix.tech"),
  title: {
    default: "Skylogix Technologies | Global IT Services & AI Solutions",
    template: "%s | Skylogix Technologies",
  },
  description: "Global technology partner delivering secure, scalable, AI-driven digital solutions. Expert mobile app development, web development, and IT consulting services.",
  keywords: ["IT services company", "mobile app development company", "AI software development", "web development agency", "IT consulting services", "software engineering", "digital transformation", "enterprise software"],
  authors: [{ name: "Skylogix Technologies" }],
  creator: "Skylogix Technologies",
  publisher: "Skylogix Technologies",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: "Skylogix Technologies | Global IT Services & AI Solutions",
    description: "Partner with Skylogix for world-class mobile app development, AI integration, and scalable web solutions. Serving global enterprises with precision engineering.",
    siteName: "Skylogix Technologies",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Skylogix Technologies - Engineering Your Digital Future",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Skylogix Technologies | Global IT Services & AI Solutions",
    description: "Global technology partner delivering secure, scalable, AI-driven digital solutions. Expert mobile app development, web development, and IT consulting services.",
    images: ["/opengraph-image"],
    creator: "@skylogixtech",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
};

import MagneticCursor from "@/components/ui/MagneticCursor";
import TransitionProvider from "@/components/layout/TransitionProvider";
import { ThemeProvider } from "@/components/theme-provider";
import ScrollProgress from "@/components/ui/ScrollProgress";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import TawkToChat from "@/components/ui/TawkToChat";
import ExitIntentPopup from "@/components/ui/ExitIntentPopup";
import SlideInBanner from "@/components/ui/SlideInBanner";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${spaceGrotesk.variable} antialiased cursor-none`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <JsonLd data={[organizationSchema, websiteSchema]} />
          <MagneticCursor />
          <ScrollProgress />
          <WhatsAppButton />
          <TawkToChat />
          <ExitIntentPopup />
          <SlideInBanner />
          <TransitionProvider>
            {children}
          </TransitionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
