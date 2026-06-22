import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://azhar-portfolio.vercel.app'),
  title: "Azhar Ahmed | AI & Data Science Portfolio",
  description: "Aspiring Data Scientist | AI, Machine Learning & Deep Learning Enthusiast",
  openGraph: {
    title: "Azhar Ahmed | AI & Data Science Portfolio",
    description: "Aspiring Data Scientist | AI, Machine Learning & Deep Learning Enthusiast",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Azhar Ahmed | AI & Data Science Portfolio",
    description: "Aspiring Data Scientist | AI, Machine Learning & Deep Learning Enthusiast",
  },
  robots: { index: true, follow: true },
  icons: { icon: '/favicon.svg' },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} bg-black text-white`}
    >
      <body className="min-h-screen antialiased">
        {children}
      </body>
    </html>
  );
}
