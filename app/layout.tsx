import type { Metadata, Viewport } from "next"
import { Inter, Poppins } from "next/font/google"

import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "Dental Solutions | Premium Dental Care in Mumbai",
  description:
    "Advanced dental care with modern technology, gentle treatment, and trusted results. Root canal, implants, braces, cosmetic dentistry and more.",
  keywords:
    "dental clinic, dentist, Mumbai, root canal, dental implants, teeth cleaning, braces, cosmetic dentistry, smile design",
  openGraph: {
    title: "Dental Solutions | Premium Dental Care in Mumbai",
    description:
      "Advanced dental care with modern technology, gentle treatment, and trusted results.",
    type: "website",
  },
}

export const viewport: Viewport = {
  themeColor: "#1e88e5",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
