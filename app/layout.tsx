import React from "react"
import type { Metadata } from 'next'
import { Inter, Outfit } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from "@vercel/speed-insights/next" // নতুন যোগ করা হলো
import './globals.css'

const _inter = Inter({ subsets: ["latin"] });
const _outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Aaditri Collection - Bedsheet & Nighty Wholesale',
  description: "Kolkata's trusted wholesaler of Cotton Nighties and Bedsheet Sets. Premium quality, bulk quantity available at wholesale rates.",
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
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
        <SpeedInsights /> {/* আপনার Vercel ড্যাশবোর্ডের ইনস্ট্রাকশন অনুযায়ী */}
      </body>
    </html>
  )
}
