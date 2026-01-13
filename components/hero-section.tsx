"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"

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
    const phoneNumber = "+5521967763070"
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
    <section
      id="inicio"
      ref={sectionRef}
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
      style={{ backgroundColor: "oklch(0.6899 0.313214 264.052)" }}
    >
      <div className="absolute top-20 left-10 w-72 h-72 border border-white/20 rounded-full" />
      <div className="absolute top-32 left-20 w-48 h-48 border border-white/10 rounded-full" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-black/10 rounded-full blur-2xl" />

      <div className="absolute top-40 left-0 w-40 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
      <div className="absolute top-60 left-10 w-60 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      <div className="absolute bottom-40 right-0 w-52 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

      <div className="absolute top-32 right-1/3 w-2 h-2 bg-white/40 rounded-full" />
      <div className="absolute top-48 left-1/3 w-3 h-3 bg-white/30 rounded-full" />
      <div className="absolute bottom-32 left-1/4 w-2 h-2 bg-white/50 rounded-full" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <Sparkles className="w-4 h-4 text-white" />
              <span className="text-sm text-white font-medium">Soluções Digitais Inovadoras</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-balance text-white">
              Transformamos suas ideias em{" "}
              <span className="relative">
                <span className="text-white">realidade</span>
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-white/50 rounded-full" />
              </span>
            </h1>

            <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-xl">
              Somos uma empresa de tecnologia especializada em criar sites, sistemas e automações que impulsionam o
              crescimento do seu negócio.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={handleWhatsAppClick}
                size="lg"
                className="bg-white text-[#2341e1] hover:bg-white/90 font-semibold px-8 py-6 text-lg"
              >
                Começar Projeto
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                onClick={handlePortfolioClick}
                size="lg"
                variant="outline"
                className="border-white/50 text-white hover:bg-white/10 bg-transparent px-8 py-6 text-lg"
              >
                Ver Portfólio
              </Button>
            </div>

            <div className="flex gap-8 pt-4">
              <div>
                <p className="text-3xl font-bold text-white">50+</p>
                <p className="text-white/60 text-sm">Projetos Entregues</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-white">30+</p>
                <p className="text-white/60 text-sm">Clientes Satisfeitos</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-white">3+</p>
                <p className="text-white/60 text-sm">Anos de Experiência</p>
              </div>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="relative">
              <img
                src="/images/chatgpt-20image-2013-20de-20jan.png"
                alt="MacBook com código CodeliumCompany"
                className="w-full h-auto drop-shadow-2xl"
              />
            </div>

            {/* Floating decorative elements */}
            <div className="absolute -top-8 -right-8 w-20 h-20 border-2 border-white/20 rounded-full" />
            <div className="absolute -bottom-4 -left-8 w-16 h-16 bg-white/10 rounded-lg rotate-12" />
            <div className="absolute top-1/2 -right-12 w-4 h-4 bg-white/40 rounded-full" />
          </div>
        </div>
      </div>
    </section>
  )
}
