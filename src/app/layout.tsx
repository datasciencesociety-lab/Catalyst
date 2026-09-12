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
  title: "CATALYST '26 — Data Science Society",
  description:
    "CATALYST '26 is a national 24-hour student hackathon organized by Data Science Society (DSS) on October 9–10, 2026 at CMR Institute of Technology (CMRIT), Hyderabad. Where ideas meet action.",
  keywords: [
    "Catalyst 2026",
    "Catalyst Hackathon",
    "Data Science Society",
    "DSS",
    "Hackathon India",
    "Premium Hackathon",
    "Student Hackathon",
    "CMRIT Hyderabad",
    "AI Hackathon",
    "National Hackathon",
    "Design Hackathon",
  ],
  authors: [{ name: "Data Science Society" }],
  openGraph: {
    title: "CATALYST '26 — Data Science Society",
    description:
      "A national 24-hour student hackathon organized by Data Science Society (DSS) on October 9–10, 2026 at CMRIT, Hyderabad. Build what matters.",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "CATALYST '26 — Data Science Society",
    description:
      "A national 24-hour student hackathon organized by Data Science Society (DSS) on October 9–10, 2026 at CMRIT, Hyderabad.",
  },
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
        {children}
      </body>
    </html>
  );
}
