import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "CodeliumCompany - Transformando Ideias em Soluções Digitais",
  description:
    "Empresa de tecnologia especializada em desenvolvimento web, sistemas personalizados e automação com n8n.",
  generator: "Site_Codelium_",
  icons: {
    icon: "/codelium-logo.jpg",
    shortcut: "/codelium-logo.jpg",
    apple: "/codelium-logo.jpg",
  },
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="dark">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
