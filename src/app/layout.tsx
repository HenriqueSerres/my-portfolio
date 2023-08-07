import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Henrique Serres',
  description: 'Henrique Serres personal website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-zinc-900">{children}</body>
    </html>
  )
}
