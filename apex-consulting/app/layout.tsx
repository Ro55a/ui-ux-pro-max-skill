import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Catalyst & Co. | Business Advisory",
  description: "Catalyst & Co. delivers senior-level advisory to founders and management teams — financial precision, market research, and operational transformation.",
  openGraph: {
    title: "Catalyst & Co. | Business Advisory",
    description: "Growth strategy, financial analysis, and market intelligence for startups and SMEs.",
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
