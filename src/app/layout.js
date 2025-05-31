"use client"; // Layout now needs to be a client component for loading state

import React, { useState, useEffect } from 'react';
import "./globals.css";
import LoadingScreen from '@/components/LoadingScreen'; // Import the loading screen
import ThreeBackground from '@/components/ThreeBackground'; // Import the Three.js background
import { myNameFont, contentFont } from './fonts'; // Import custom fonts
import { Analytics } from "@vercel/analytics/next"; // Import Vercel Analytics component

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// Metadata needs to be handled differently for client components if dynamic,
// but static metadata can still be exported. For simplicity, keeping as is.
// For dynamic metadata in client components, you'd use the `useMetadata` hook if available or set document.title.
// export const metadata = { // Moved to page.js
//   title: "Md Sharjil Khan - Resume", 
//   description: "Full Stack Development Professional Resume",
// };

export default function RootLayout({ children }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Show loading screen for 3 seconds

    return () => clearTimeout(timer); // Cleanup timer
  }, []);

  // Using Tailwind's font-sans (Arial) defined in globals.css and tailwind.config.js
  // Removed Geist font classes: `${geistSans.variable} ${geistMono.variable} antialiased`
  // antialiased is a Tailwind utility, can be added if desired.
  return (
    <html lang="en" className={`${myNameFont.variable} ${contentFont.variable}`}>
      <body className="font-sans antialiased">
        <ThreeBackground />
        {isLoading ? <LoadingScreen /> : children}
        {/* Vercel Analytics component for performance monitoring */}
        <Analytics />
      </body>
    </html>
  );
}
