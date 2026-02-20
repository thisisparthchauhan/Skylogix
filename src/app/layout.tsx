import type { Metadata } from "next";
import { Suspense } from "react";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import OrganizationSchema from "@/components/seo/schemas/OrganizationSchema";
import ProfessionalServiceSchema from "@/components/seo/schemas/ProfessionalServiceSchema";

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

import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: siteConfig.authors,
  creator: siteConfig.creator,
  publisher: siteConfig.publisher,
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@skylogixtech",
  },
  icons: {
    icon: "/favicon.ico",
  },
  alternates: {
    canonical: siteConfig.url,
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
    other: {
      "msvalidate.01": process.env.NEXT_PUBLIC_BING_VERIFICATION || "",
    },
  },
  category: "technology",
};

import MagneticCursor from "@/components/ui/MagneticCursor";
import TransitionProvider from "@/components/layout/TransitionProvider";
import { ThemeProvider } from "@/components/theme-provider";
import ScrollProgress from "@/components/ui/ScrollProgress";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import TawkToChat from "@/components/ui/TawkToChat";
import ExitIntentPopup from "@/components/ui/ExitIntentPopup";
import SlideInBanner from "@/components/ui/SlideInBanner";
import { CookieConsent } from "@/components/legal/CookieConsent";
import GoogleAnalytics from "@/components/analytics/GoogleAnalytics";
import { AuthModalProvider } from "@/contexts/AuthModalContext";
import { AuthModal } from "@/components/auth/AuthModal";

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
          <OrganizationSchema />
          <ProfessionalServiceSchema />
          <MagneticCursor />
          <ScrollProgress />
          <WhatsAppButton />
          <TawkToChat />
          <ExitIntentPopup />
          <SlideInBanner />
          <CookieConsent />
          <Suspense fallback={null}>
            <GoogleAnalytics />
          </Suspense>
          <AuthModalProvider>
            <TransitionProvider>
              {children}
            </TransitionProvider>
            <AuthModal />
          </AuthModalProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
