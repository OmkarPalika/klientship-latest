import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Preload critical assets using local path */}
        <link rel="preload" href="/logo.webp" as="image" type="image/webp" />
        {/* Add meta description for SEO */}
        <meta name="description" content="Social Bubble is a social media marketing agency that helps businesses grow their online presence and reach their target audience through effective social media strategies. We offer Shopify design, 3D animation, automation, and more." />
        {/* Add meta tags for better SEO */}
        <meta name="theme-color" content="#000000" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        {/* Add security headers */}
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="X-Frame-Options" content="DENY" />
        <meta httpEquiv="Referrer-Policy" content="strict-origin-when-cross-origin" />
        {/* Strong CSP header for XSS protection */}
        <meta httpEquiv="Content-Security-Policy" content="default-src 'self'; script-src 'self' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; font-src 'self'; object-src 'none'; base-uri 'self'; form-action 'self'; frame-ancestors 'none';" />
        {/* Cross-Origin-Resource-Policy for external logo preload removed as not needed for local asset */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
