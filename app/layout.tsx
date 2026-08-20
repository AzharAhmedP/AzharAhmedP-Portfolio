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
  metadataBase: new URL('https://azharahmed.dev'),
  title: "Azhar Ahmed | AI & Data Science Portfolio",
  description: "Aspiring Data Scientist | AI, Machine Learning & Deep Learning Enthusiast",
  openGraph: {
    title: "Azhar Ahmed | AI & Data Science Portfolio",
    description: "Aspiring Data Scientist | AI, Machine Learning & Deep Learning Enthusiast",
    type: "website",
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Azhar Ahmed — AI & Data Science Portfolio' }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Azhar Ahmed | AI & Data Science Portfolio",
    description: "Aspiring Data Scientist | AI, Machine Learning & Deep Learning Enthusiast",
    images: ['/og.png'],
  },
  robots: { index: true, follow: true },
  icons: { icon: '/favicon.svg' },
  other: { 'theme-color': '#000000' },
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
      <body className="min-h-screen antialiased film-grain">
        <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[200] focus:bg-white focus:text-black focus:px-4 focus:py-2 focus:rounded focus:text-sm focus:font-mono">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
