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
  title: "CATALYST '26 | National 24-Hour Student Hackathon by DSS",
  description: "Organized by Data Science Society. A national 24-hour premium hackathon bringing developers, designers, and builders together to solve real-world problems with AI, Healthcare, and Data Science.",
  keywords: [
    "Catalyst 2026",
    "Catalyst Hackathon",
    "Data Science Society",
    "DSS",
    "Hackathon India",
    "Premium Hackathon",
    "Student Hackathon",
    "AI Hackathon",
    "India Hackathon",
    "Design Hackathon"
  ],
  authors: [{ name: "Data Science Society" }],
  openGraph: {
    title: "CATALYST '26 | National 24-Hour Student Hackathon by DSS",
    description: "Where Ideas Meet Action. Join India's most premium student hackathon organized by Data Science Society.",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "CATALYST '26 | National 24-Hour Student Hackathon by DSS",
    description: "Join India's most premium student hackathon organized by Data Science Society.",
  }
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
