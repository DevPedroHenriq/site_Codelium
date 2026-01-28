"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"

type Dot = {
  x: number
  y: number
  vx: number
  vy: number
  r: number
}

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const rafRef = useRef<number | null>(null)

  /* ============================
     FADE-IN OBSERVER (SEU)
  ============================ */
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

  /* ============================
     FUNDO ANIMADO (NOVO)
  ============================ */
  useEffect(() => {
    const canvas = canvasRef.current
    const section = sectionRef.current
    if (!canvas || !section) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resize = () => {
      const rect = section.getBoundingClientRect()
      const dpr = window.devicePixelRatio || 1

      canvas.width = rect.width * dpr
      canvas.height = rect.height * dpr
      canvas.style.width = `${rect.width}px`
      canvas.style.height = `${rect.height}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    resize()
    window.addEventListener("resize", resize)

    const DOTS = 55
    const MAX_DIST = 160
    const SPEED = 0.25

    let dots: Dot[] = Array.from({ length: DOTS }).map(() => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * SPEED,
      vy: (Math.random() - 0.5) * SPEED,
      r: 1.2 + Math.random() * 1.6,
    }))

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (const d of dots) {
        d.x += d.vx
        d.y += d.vy

        if (d.x <= 0 || d.x >= canvas.width) d.vx *= -1
        if (d.y <= 0 || d.y >= canvas.height) d.vy *= -1

        ctx.beginPath()
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2)
        ctx.fillStyle = "rgba(255,255,255,0.55)"
        ctx.fill()
      }

      for (let i = 0; i < dots.length; i++) {
        for (let j = i + 1; j < dots.length; j++) {
          const a = dots[i]
          const b = dots[j]
          const dx = a.x - b.x
          const dy = a.y - b.y
          const dist = Math.sqrt(dx * dx + dy * dy)

          if (dist < MAX_DIST) {
            const alpha = 1 - dist / MAX_DIST
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.strokeStyle = `rgba(255,255,255,${0.12 * alpha})`
            ctx.lineWidth = 1
            ctx.stroke()
          }
        }
      }

      rafRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resize)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [])

  /* ============================
     HANDLERS (SEUS)
  ============================ */
  const handleWhatsAppClick = () => {
    const phoneNumber = "+5522999067522"
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
      {/* FUNDO ANIMADO */}
      <canvas ref={canvasRef} className="absolute inset-0" />

      {/* CONTEÚDO (INALTERADO) */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <Sparkles className="w-4 h-4 text-white" />
              <span className="text-sm text-white font-medium">
                Soluções Digitais Inovadoras
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-balance text-white">
              Transformamos suas ideias em{" "}
              <span className="relative">
                <span className="text-white">realidade</span>
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-white/50 rounded-full" />
              </span>
            </h1>

            <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-xl">
              Somos uma empresa de tecnologia especializada em criar sites,
              sistemas e automações que impulsionam o crescimento do seu negócio.
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
            <img
              src="/images/chatgpt-20image-2013-20de-20jan.png"
              alt="MacBook com código CodeliumCompany"
              className="w-[120%] h-auto drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
