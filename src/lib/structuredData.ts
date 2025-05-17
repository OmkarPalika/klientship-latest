// JSON-LD structured data for Organization and Website
export const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Social Bubble",
    "url": "https://socialbubble.com/",
    "logo": "/logo.webp",
    "sameAs": [
      "https://www.facebook.com/socialbubble",
      "https://www.instagram.com/socialbubble",
      "https://www.linkedin.com/company/socialbubble",
      "https://twitter.com/socialbubble"
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "url": "https://socialbubble.com/",
    "name": "Social Bubble",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://socialbubble.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  }
];
