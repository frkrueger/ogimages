import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'OG Image Generator',
  description: 'Generate OG images for prediction markets',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
} 