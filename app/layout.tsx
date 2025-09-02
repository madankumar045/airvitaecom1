import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "../styles/globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { CartProvider } from "@/components/cart-provider"
import { Toaster } from "@/components/ui/toaster"
import { GoogleAnalytics } from "@/components/google-analytics"
import { Suspense } from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "AirVita - Advanced Air Purification Solutions",
    template: "%s | AirVita",
  },
  description:
    "Discover AirVita's advanced air purification solutions. Combat air pollution with our innovative technology for cleaner, healthier air.",
  keywords: ["air purifiers", "air pollution", "clean air", "HEPA filters", "air quality", "AirVita"],
  authors: [{ name: "AirVita" }],
  creator: "AirVita",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://airvita.vercel.app",
    title: "AirVita - Advanced Air Purification Solutions",
    description:
      "Discover AirVita's advanced air purification solutions. Combat air pollution with our innovative technology for cleaner, healthier air.",
    siteName: "AirVita",
  },
  twitter: {
    card: "summary_large_image",
    title: "AirVita - Advanced Air Purification Solutions",
    description:
      "Discover AirVita's advanced air purification solutions. Combat air pollution with our innovative technology for cleaner, healthier air.",
    creator: "@airvita",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
    generator: 'v0.app'
}

function LayoutContent({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
      <CartProvider>
        {children}
        <Toaster />
      </CartProvider>
    </ThemeProvider>
  )
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Suspense fallback={<div className="min-h-screen bg-background" />}>
          <LayoutContent>{children}</LayoutContent>
        </Suspense>
        <GoogleAnalytics />
      </body>
    </html>
  )
}
