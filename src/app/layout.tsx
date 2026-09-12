import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://catalyst26.vercel.app/"),
  title: "CATALYST '26 — National 24-Hour Hackathon | DSS",
  description:
    "CATALYST '26 is a national 24-hour hackathon by Data Science Society (DSS), happening October 9–10, 2026 at CMRIT, Hyderabad. Build solutions for real-world problems across AI, Healthcare, FinTech, Education and Open Innovation.",
  alternates: {
    canonical: "https://catalyst26.vercel.app/",
  },
  keywords: [
    "Catalyst 26 hackathon",
    "Catalyst 2026 hackathon",
    "DSS Catalyst",
    "Data Science Society hackathon",
    "hackathon Hyderabad 2026",
    "24 hour hackathon Hyderabad",
    "student hackathon Hyderabad",
    "CMRIT hackathon",
    "AI hackathon Hyderabad",
    "FinTech hackathon Hyderabad",
    "Healthcare hackathon",
    "Education hackathon",
    "Open Innovation hackathon",
  ],
  authors: [{ name: "Data Science Society" }],
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
    title: "CATALYST '26 — National 24-Hour Hackathon | DSS",
    description:
      "A national 24-hour hackathon by DSS where builders turn real-world problems into working solutions.",
    url: "https://catalyst26.vercel.app/",
    type: "website",
    siteName: "CATALYST '26",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "CATALYST '26 — National 24-Hour Hackathon | DSS",
    description:
      "A national 24-hour hackathon by DSS where builders turn real-world problems into working solutions.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://catalyst26.vercel.app/#website",
      "url": "https://catalyst26.vercel.app/",
      "name": "CATALYST '26",
      "description":
        "CATALYST '26 is a national 24-hour hackathon by Data Science Society (DSS), happening October 9–10, 2026 at CMRIT, Hyderabad. Build solutions for real-world problems across AI, Healthcare, FinTech, Education and Open Innovation.",
      "publisher": {
        "@id": "https://catalyst26.vercel.app/#organization",
      },
      "inLanguage": "en-IN",
    },
    {
      "@type": "Organization",
      "@id": "https://catalyst26.vercel.app/#organization",
      "name": "Data Science Society",
      "alternateName": "DSS",
      "url": "https://catalyst26.vercel.app/",
      "email": "cmritdatasciencesociety@gmail.com",
    },
    {
      "@type": "Event",
      "@id": "https://catalyst26.vercel.app/#event",
      "name": "CATALYST '26",
      "description":
        "A national 24-hour hackathon by Data Science Society (DSS) where builders turn real-world problems into working solutions.",
      "startDate": "2026-10-09",
      "endDate": "2026-10-10",
      "eventStatus": "https://schema.org/EventScheduled",
      "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
      "location": {
        "@type": "Place",
        "name": "CMR Institute of Technology (CMRIT)",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Hyderabad",
          "addressRegion": "Telangana",
          "addressCountry": "IN",
        },
      },
      "organizer": {
        "@id": "https://catalyst26.vercel.app/#organization",
      },
      "url": "https://catalyst26.vercel.app/",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-paper selection:bg-brand-blue selection:text-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
