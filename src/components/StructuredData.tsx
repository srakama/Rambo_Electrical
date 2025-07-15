export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Rambo The Electrician",
    "description": "Professional electrical and solar services in South Africa. Expert circuit design, installations, maintenance, and repairs.",
    "url": "https://ramboelectrician.co.za",
    "telephone": "+27730352691",
    "email": "roynyasango@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "ZA",
      "addressRegion": "Western Cape",
      "addressLocality": "Cape Town"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "-33.9249",
      "longitude": "18.4241"
    },
    "openingHours": [
      "Mo-Fr 08:00-18:00",
      "Sa 08:00-16:00"
    ],
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "-33.9249",
        "longitude": "18.4241"
      },
      "geoRadius": "50000"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Electrical Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Circuit Design",
            "description": "Custom electrical circuit design for residential and commercial properties"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Solar Panel Installation",
            "description": "Professional solar panel installation and solar energy systems"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Electrical Maintenance",
            "description": "Regular electrical system maintenance and inspections"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Emergency Electrical Repairs",
            "description": "24/7 emergency electrical repair services"
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "500"
    },
    "priceRange": "$$",
    "paymentAccepted": "Cash, Credit Card, Bank Transfer",
    "currenciesAccepted": "ZAR"
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
