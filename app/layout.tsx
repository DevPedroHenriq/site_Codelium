import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
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


<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-KGR6KHKW');</script>


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (

<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KGR6KHKW"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>

  
    <html lang="pt-BR" className="dark">
      <body className={`font-sans antialiased`}>
        {children}
     
      </body>
    </html>
  )
}
