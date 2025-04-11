import type { Metadata } from "next";
import { Sidebar } from "@/components/layout/sidebar";
import Header from "@/components/layout/header";


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
        <div>
            <Sidebar />

            <div className="flex min-h-screen">

                <div className="hidden md:block md:w-64 lg:w-72" />


                <div className="flex-1 ml-0">

                    <Header />

                    {children}
                </div>
            </div>
        </div>
    );
}