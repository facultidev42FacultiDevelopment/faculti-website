import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Poppins } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://faculti.net'), 
  title: "Faculti: Academic Streaming Platform",
  description: "Explore expert interviews and research insights across various academic disciplines. Faculti makes research accessible to academics, students, and the public.",
  keywords: ["faculti", "academic streaming", "research", "interviews", "education", "experts", "higher education", "video", "learning"],
  authors: [{ name: "Faculti.net" }],
  openGraph: {
    title: "Faculti: Academic Streaming Platform",
    description: "Explore expert interviews and research insights across various academic disciplines. Faculti makes research accessible to academics, students, and the public.",
    url: "https://faculti.net",
    siteName: "Faculti.net",
    images: [
      {
        url: "/faculti_logo.png", 
        width: 1200,
        height: 630,
        alt: "Faculti Logo",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} antialiased font-poppins`}
      >
     
        {children}
     
      </body>
    </html>
  );
}