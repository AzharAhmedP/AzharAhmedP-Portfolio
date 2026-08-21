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
  title: "Azhar Ahmed | Data Scientist & AI/ML Developer",
  description: "AI/ML Developer building end-to-end machine learning systems — from data to deployment. Specializing in Computer Vision, NLP, and Deep Learning.",
  openGraph: {
    title: "Azhar Ahmed | Data Scientist & AI/ML Developer",
    description: "AI/ML Developer building end-to-end machine learning systems — from data to deployment. Specializing in Computer Vision, NLP, and Deep Learning.",
    type: "website",
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Azhar Ahmed — Data Scientist & AI/ML Developer' }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Azhar Ahmed | Data Scientist & AI/ML Developer",
    description: "AI/ML Developer building end-to-end machine learning systems — from data to deployment. Specializing in Computer Vision, NLP, and Deep Learning.",
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
