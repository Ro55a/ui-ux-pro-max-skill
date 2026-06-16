import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Catalyst & Co. | Elite Business Advisory",
  description:
    "Catalyst & Co. delivers institutional-grade intelligence to ambitious startups and SMEs — financial precision, market research, and operational transformation.",
  openGraph: {
    title: "Catalyst & Co. | Elite Business Advisory",
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
