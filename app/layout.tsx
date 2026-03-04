import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Codelium Health - Automação e Captação para Clínicas",
  description:
    "Automação de atendimento, agendamentos e captação de pacientes para clínicas odontológicas e da saúde.",
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
     
      </body>
    </html>
  )
}
