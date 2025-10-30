"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in")
          }
        })
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const handleWhatsAppClick = () => {
    const phoneNumber = "5511999999999" // Altere para seu número
    const message = "Olá! Gostaria de começar um projeto."
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(url, "_blank")
  }

  const handlePortfolioClick = () => {
    const projectsSection = document.getElementById("projetos")
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="inicio" ref={sectionRef} className="min-h-screen flex items-center pt-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight text-balance">
              Transformamos suas ideias em <span className="text-accent">soluções digitais</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Somos uma empresa de tecnologia especializada em criar sites, sistemas e automações que impulsionam o
              crescimento do seu negócio. Com expertise em desenvolvimento web e automação de processos, entregamos
              soluções sob medida para cada cliente.
            </p>
            <div className="flex gap-4">
              <Button onClick={handleWhatsAppClick} size="lg" className="bg-accent hover:bg-accent/90">
                Começar Projeto
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button onClick={handlePortfolioClick} size="lg" variant="outline">
                Ver Portfólio
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center">
              <img
                src="/modern-technology-workspace-with-computers-and-cod.jpg"
                alt="Workspace de tecnologia"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/10 rounded-full blur-3xl" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-accent/10 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  )
}
