import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Apex Advisory | Elite Business Consulting",
  description: "Apex Advisory delivers Fortune-500 grade intelligence to startups and SMEs — financial precision, market research, and operational transformation.",
  openGraph: {
    title: "Apex Advisory | Elite Business Consulting",
    description: "Financial analysis, market research, and growth strategy for startups and SMEs.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased">{children}</body>
    </html>
  );
}
