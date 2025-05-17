import type { Metadata, Viewport } from "next";
import "./globals.css";
import { structuredData } from "../lib/structuredData";

export const metadata: Metadata = {
  title: "Shopify Store Design & Social Media Marketing | Social Bubble",
  description: "Boost your business with Social Bubble: Shopify store design, eCommerce solutions, and expert social media marketing. Grow your online presence and sales with our proven strategies.",
  keywords: [
    "Shopify store design",
    "eCommerce development",
    "social media marketing",
    "digital marketing",
    "conversion optimization",
    "Shopify expert",
    "business growth",
    "online sales",
    "SEO",
    "branding",
    "web design",
    "content marketing",
    "automation solutions"
  ],
  authors: [{ name: "Social Bubble Team", url: "https://socialbubble.com/about" }],
  creator: "Social Bubble",
  publisher: "Social Bubble",
  metadataBase: new URL("https://socialbubble.com"),
  alternates: {
    canonical: "https://socialbubble.com/",
  },
  openGraph: {
    title: "Shopify Store Design & Social Media Marketing | Social Bubble",
    description: "Boost your business with Social Bubble: Shopify store design, eCommerce solutions, and expert social media marketing.",
    url: "https://socialbubble.com/",
    siteName: "Social Bubble",
    images: [
      {
        url: "/logo.webp",
        width: 400,
        height: 120,
        alt: "Social Bubble Logo"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Shopify Store Design & Social Media Marketing | Social Bubble",
    description: "Boost your business with Social Bubble: Shopify store design, eCommerce solutions, and expert social media marketing.",
    site: "@socialbubble",
    creator: "@socialbubble",
    images: [
      {
        url: "/logo.webp",
        alt: "Social Bubble Logo"
      }
    ]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1
    }
  },
  other: {
    'theme-color': '#ffffff',
    'application-name': 'Social Bubble',
    'apple-mobile-web-app-title': 'Social Bubble',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
    'format-detection': 'telephone=no,address=no,email=no',
    'viewport': 'width=device-width, initial-scale=1, maximum-scale=5',
    'google-site-verification': 'YOUR_GOOGLE_SITE_VERIFICATION_CODE',
    'yandex-verification': 'YOUR_YANDEX_VERIFICATION_CODE',
    'referrer': 'strict-origin-when-cross-origin'
  }
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

// Add JSON-LD structured data for Organization and Website
// structuredData moved to src/lib/structuredData.ts

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body
        className="bg-gray-100 text-gray-900 antialiased dark:bg-gray-900 dark:text-gray-100 min-h-screen"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}