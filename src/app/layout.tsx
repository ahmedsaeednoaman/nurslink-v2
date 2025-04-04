import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'NursLink',
  description: 'منصة التمريض الذكية في مصر',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className="font-sans bg-background text-text-primary">
        {children}
      </body>
    </html>
  )
}
