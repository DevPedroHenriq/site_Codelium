"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"
import Image from "next/image"

export function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const handleWhatsAppClick = () => {
    const phoneNumber = "+5522999067522"
    const message = "Olá! Gostaria de saber mais sobre os serviços."
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(url, "_blank")
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-lg border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image src="/images/codelium-logo.jpeg" alt="Codelium Company" width={50} height={50} className="rounded" />
            <div className="text-2xl font-bold">
              Codelium<span className="text-accent">Company</span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("inicio")}
              className="text-foreground hover:text-accent transition-colors"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection("servicos")}
              className="text-foreground hover:text-accent transition-colors"
            >
              Serviços
            </button>
            <button
              onClick={() => scrollToSection("projetos")}
              className="text-foreground hover:text-accent transition-colors"
            >
              Projetos
            </button>
            <button
              onClick={() => scrollToSection("clientes")}
              className="text-foreground hover:text-accent transition-colors"
            >
              Clientes
            </button>
            <button
              onClick={() => scrollToSection("contato")}
              className="text-foreground hover:text-accent transition-colors"
            >
              Contato
            </button>
          </nav>

          <Button onClick={handleWhatsAppClick} className="bg-green-600 hover:bg-green-700 text-white">
            <MessageCircle className="mr-2 h-4 w-4" />
            Chame Aqui
          </Button>
        </div>
      </div>
    </header>
  )
}
