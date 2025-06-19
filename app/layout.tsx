import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Alex Johnson - Engineering Student Portfolio",
  description:
    "Personal portfolio of Alex Johnson, a first-year Computer Engineering student passionate about technology and innovation.",
  keywords: "engineering student, portfolio, computer engineering, programming, projects",
  authors: [{ name: "Alex Johnson" }],
  openGraph: {
    title: "Alex Johnson - Engineering Student Portfolio",
    description: "Personal portfolio showcasing projects and skills of a first-year Computer Engineering student.",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
