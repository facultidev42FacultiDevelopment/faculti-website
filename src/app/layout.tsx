import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import { Sidebar } from "@/components/layout/sidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Faculti - Academic Video Interviews",
  description: "Stream thousands of video interviews with leading academics and researchers",
  keywords: 'academic videos, university research, expert interviews, online learning',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} antialiased`}>
        <div className="flex min-h-screen">

          <Sidebar />

          <div className="flex-1 ml-0 md:ml-64 lg:ml-72">
            <main className="container mx-auto py-6 px-4 md:px-6">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}