import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
//import { ThemeProvider } from "@/components/theme-provider";
import { ThemeProvider } from "next-themes"

import { Toaster } from 'sonner';
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Blockchain Revolution Community",
  description: "Building the Future of Blockchain Together",
  keywords: [
    "Blockchain",
    "Community",
    "Learning",
    "Web3",
    "Education",
    "Decentralization",
    "Innovation",
    "Technology",
    "Networking",
    "Opportunities",
    "Developers",
    "Builders",
    "Courses",
    "Resources",
    "Projects",
    "Events",
    "Webinars",
    "Talent",],
    openGraph: { 
      images: 
        {
          url: "/logo.png",
          width: 1200,
          height: 630,
          alt: "BrightSoftLabs - Innovative Web Solutions",
        },

      },
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
       <head>

        <link rel="icon" href="/logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/logo.png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
         <ThemeProvider 
          attribute="class" 
          defaultTheme="system" 
          enableSystem
          disableTransitionOnChange
        >
             <Toaster />
{children}

          </ThemeProvider>
        
      </body>
    </html>
  );
}
