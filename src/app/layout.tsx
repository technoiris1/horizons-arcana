import type { Metadata } from "next";
import { Geist, Geist_Mono, Gorditas, Damion, Fredoka, Shrikhand, Shantell_Sans } from "next/font/google";
import "./globals.css";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const gorditas = Gorditas({
  variable: "--font-gorditas",
  subsets: ["latin"],
  weight: "400",
});
const damion = Damion({
  variable: "--font-damion",
  subsets: ["latin"],
  weight: "400",
});
const fredoka = Fredoka({
  variable: "--font-fredoka",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const shrikhand = Shrikhand({
  variable: "--font-shrikhand",
  subsets: ["latin"],
  weight: "400",
});
const shantellSans = Shantell_Sans({
  variable: "--font-shantell-sans",
  subsets: ["latin"],
  weight: "700",
});

export const metadata: Metadata = {
  title: "Horizons Arcana | Teen Hackathon in Singapore 2026",
  description: "Horizons Arcana is a 3-day hackathon for 100+ teen hackers in Singapore. Organized by Hack Club. Free event with travel stipends. July 2026.",
  keywords: ["horizons", "arcana", "hackathon", "Singapore", "teen hackers", "Hack Club", "coding event"],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Horizons Arcana - Teen Hackathon in Singapore",
    description: "Join 100+ teen hackers for a 3-day hackathon in Singapore. Organized by Hack Club. Free attendance with travel stipends available.",
    url: "https://horizons-arcana.vercel.app",
    siteName: "Horizons Arcana",
    images: [
      {
        url: "/arcana-hero.avif",
        width: 1200,
        height: 630,
        alt: "Horizons Arcana hackathon banner",
      },
      {
        url: "/arcana-logo.avif",
        width: 400,
        height: 400,
        alt: "Horizons Arcana logo",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Horizons Arcana - Teen Hackathon in Singapore",
    description: "Join 100+ teen hackers for Horizons Arcana. Free event with travel stipends.",
    images: ["/arcana-hero.avif"],
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },
  alternates: {
    canonical: "https://horizons-arcana.vercel.app/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const eventSchema = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: "Horizons Arcana",
    description: "A 3-day hackathon for 100+ teen hackers in Singapore organized by Hack Club",
    startDate: "2026-07",
    endDate: "2026-07",
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    location: {
      "@type": "Place",
      name: "Singapore",
      address: {
        "@type": "PostalAddress",
        addressCountry: "SG",
      },
    },
    organizer: {
      "@type": "Organization",
      name: "Hack Club",
      url: "https://hackclub.com",
      logo: "/arcana-logo.avif",
    },
    image: "/arcana-hero.avif",
    offers: {
      "@type": "Offer",
      url: "https://horizons-arcana.vercel.app/",
      price: "0",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      validFrom: "2026-01-01",
    },
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${gorditas.variable} ${damion.variable} ${fredoka.variable} ${shrikhand.variable} ${shantellSans.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(eventSchema) }}
          suppressHydrationWarning
        />
      </head>
      <body className="min-h-full overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
