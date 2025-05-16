import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Social Bubble - Your Social Media Marketing Partner",
  description: "Social Bubble is a social media marketing agency that helps businesses grow their online presence and reach their target audience through effective social media strategies.",
  keywords: [
    "social media marketing",
    "social media agency",
    "digital marketing",
    "online presence",
    "target audience",
    "social media strategies",
    "business growth",
    "content creation",
    "social media management",
    "social media advertising",
    "social media analytics",
    "social media campaigns",
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="bg-gray-100 text-gray-900 antialiased dark:bg-gray-900 dark:text-gray-100"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
