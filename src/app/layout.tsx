import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import StructuredData from "@/components/StructuredData";

export const metadata: Metadata = {
  title: {
    default: "Rambo The Electrician | Professional Electrical & Solar Services in South Africa",
    template: "%s | Rambo The Electrician"
  },
  description: "Professional electrician services in South Africa. Expert circuit design, solar installations, electrical repairs & maintenance. 24/7 emergency service. Licensed & certified electrical contractors.",
  keywords: [
    "electrician South Africa",
    "solar solutions",
    "circuit design",
    "electrical repairs",
    "solar panel installation",
    "Cape Town electrician",
    "emergency electrical service",
    "electrical maintenance",
    "solar energy systems",
    "electrical contractor",
    "residential electrician",
    "commercial electrical services"
  ],
  authors: [{ name: "Rambo The Electrician" }],
  creator: "Rambo The Electrician",
  publisher: "Rambo The Electrician",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_ZA',
    url: 'https://rambo-electrician.netlify.app', // Update this with your actual Netlify domain
    siteName: 'Rambo The Electrician',
    title: 'Professional Electrical & Solar Services in South Africa',
    description: 'Expert electrician services including circuit design, solar installations, repairs & maintenance. 24/7 emergency service across South Africa.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Rambo The Electrician - Professional Electrical Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rambo The Electrician | Professional Electrical Services',
    description: 'Expert electrician services in South Africa. Solar installations, circuit design, repairs & maintenance.',
    images: ['/og-image.jpg'],
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-gray-50">
        <StructuredData />
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
