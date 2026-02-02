import React from "react"
import type { Metadata } from 'next'
import { Inter, Outfit } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from "@vercel/speed-insights/next"
import './globals.css'

const _inter = Inter({ subsets: ["latin"] });
const _outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Aaditri Collection - Bedsheet & Nighty Wholesale',
  description: "Kolkata's trusted wholesaler of Cotton Nighties and Bedsheet Sets.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
