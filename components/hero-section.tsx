"use client"

import { useEffect, useMemo, useRef, useState } from "react"
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

  // Anti-double submit + feedback rápido
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMsg, setSubmitMsg] = useState<string | null>(null)

  // Cooldown simples (evita spam manual)
  const [cooldownUntil, setCooldownUntil] = useState<number>(0)
  const isCooldown = useMemo(() => Date.now() < cooldownUntil, [cooldownUntil])

  /* ============================
     FADE-IN OBSERVER
  ============================ */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("animate-fade-in")
        })
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  /* ============================
     FUNDO ANIMADO
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
     HANDLERS
  ============================ */
  const handleWhatsAppClick = () => {
    const phoneNumber = "+5522999067522"
    const message =
      "Olá! Tenho uma clínica e quero automatizar atendimento/agendamentos e captar mais pacientes."
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(url, "_blank")
  }

  const handleScrollToForm = () => {
    const formEl = document.getElementById("hero-lead-form")
    if (formEl) formEl.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  const handleSolutionsClick = () => {
    const servicesSection = document.getElementById("servicos")
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" })
    } else {
      window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
    }
  }

  /* ============================
     SUBMIT MAIS SEGURO (FRONT)
     - NÃO expõe URL/ID do Google Sheets
     - Anti-bot: honeypot + cooldown
     - Anti-double click: lock + botão disabled
  ============================ */
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // trava reenvio
    if (isSubmitting || isCooldown) return

    setIsSubmitting(true)
    setSubmitMsg("Enviando…")

    const form = e.currentTarget
    const fd = new FormData(form)

    // Honeypot: bots costumam preencher campos "escondidos"
    const hp = String(fd.get("website") || "").trim()
    if (hp.length > 0) {
      // finge sucesso pra bot não insistir
      setSubmitMsg("Enviado com sucesso! ✅")
      form.reset()
      setCooldownUntil(Date.now() + 15_000)
      setTimeout(() => setSubmitMsg(null), 1500)
      setIsSubmitting(false)
      return
    }

    // Termos
    if (!fd.get("terms")) {
      setSubmitMsg(null)
      setIsSubmitting(false)
      alert("Você precisa aceitar os Termos para continuar.")
      return
    }

    const payload = {
      name: String(fd.get("name") || "").trim(),
      email: String(fd.get("email") || "").trim(),
      phone: String(fd.get("phone") || "").trim(),
      source: String(fd.get("source") || "").trim(),
      message: String(fd.get("message") || "").trim(),

      // Opcional: ajuda o backend a decidir bloqueio/risco
      clientTime: new Date().toISOString(),
    }

    // validações simples (front)
    if (!payload.name || !payload.email || !payload.phone) {
      setSubmitMsg(null)
      setIsSubmitting(false)
      alert("Preencha Nome, Email e Telefone para continuar.")
      return
    }

    try {
      // ✅ envio somente para sua API (server-side)
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })

      const json = await res.json().catch(() => null)

      if (!res.ok || !json?.ok) {
        setSubmitMsg(null)
        alert("Não foi possível enviar. Tente novamente.")
        return
      }

      setSubmitMsg("Enviado com sucesso! ✅")
      form.reset()

      // cooldown: evita spam manual
      setCooldownUntil(Date.now() + 15_000)

      setTimeout(() => setSubmitMsg(null), 2000)
    } catch {
      setSubmitMsg(null)
      alert("Erro de conexão ao enviar os dados.")
    } finally {
      setIsSubmitting(false)
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

      {/* CONTEÚDO */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* LEFT */}
          <div className="space-y-8">
        
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-balance text-white">
              Encha sua agenda e{" "}
              <span className="relative">
                <span className="text-white">reduza faltas</span>
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-white/50 rounded-full" />
              </span>{" "}
              com automações para clínicas
            </h1>

            <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-xl">
              Capte pacientes pelo WhatsApp e Instagram, automatize agendamentos,
              confirmações e follow-up — e transforme mensagens em consultas sem
              depender de atendente o dia todo.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={handleScrollToForm}
                size="lg"
                className="bg-white text-[#2341e1] hover:bg-white/90 font-semibold px-8 py-6 text-lg"
              >
                Comece agora
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>

              <Button
                onClick={handleWhatsAppClick}
                size="lg"
                variant="outline"
                className="border-white/50 text-white hover:bg-white/10 bg-transparent px-8 py-6 text-lg"
              >
                Falar no WhatsApp
              </Button>
            </div>

            <div className="flex gap-8 pt-4">
              <div>
                <p className="text-3xl font-bold text-white">24/7</p>
                <p className="text-white/60 text-sm">Atendimento automatizado</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-white">- No-show</p>
                <p className="text-white/60 text-sm">Confirmação inteligente</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-white">+ Agenda</p>
                <p className="text-white/60 text-sm">Mais conversões</p>
              </div>
            </div>
          </div>

          {/* RIGHT: FORM */}
          <div className="relative">
            <div
              id="hero-lead-form"
              className="w-full max-w-xl ml-auto rounded-2xl bg-white/95 backdrop-blur-md border border-white/30 shadow-2xl p-6 md:p-7"
            >
              <div className="mb-4">
                <h2 className="text-lg md:text-xl font-bold text-slate-900">
                  Diagnóstico rápido para sua clínica
                </h2>
                <p className="text-sm text-slate-600">
                  Responda em 1 minuto e receba um plano para lotar sua agenda.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-3">
                {/* Honeypot invisível (não remover) */}
                <div className="hidden">
                  <label className="text-xs">Website</label>
                  <input
                    name="website"
                    tabIndex={-1}
                    autoComplete="off"
                    className="hidden"
                    aria-hidden="true"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-slate-800">Nome</label>
                  <input
                    name="name"
                    required
                    placeholder="Seu nome completo"
                    className="mt-1 w-full rounded-lg border border-slate-200 bg-slate-100/70 px-3 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 outline-none focus:border-[#2341e1] focus:ring-2 focus:ring-[#2341e1]/20"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-slate-800">Email</label>
                  <input
                    name="email"
                    type="email"
                    required
                    placeholder="seu@email.com"
                    className="mt-1 w-full rounded-lg border border-slate-200 bg-slate-100/70 px-3 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 outline-none focus:border-[#2341e1] focus:ring-2 focus:ring-[#2341e1]/20"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-slate-800">Telefone</label>
                  <input
                    name="phone"
                    required
                    placeholder="(00) 00000-0000"
                    className="mt-1 w-full rounded-lg border border-slate-200 bg-slate-100/70 px-3 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 outline-none focus:border-[#2341e1] focus:ring-2 focus:ring-[#2341e1]/20"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-slate-800">
                    Como chegou até nós
                  </label>
                  <input
                    name="source"
                    placeholder="Google, Instagram, Indicação..."
                    className="mt-1 w-full rounded-lg border border-slate-200 bg-slate-100/70 px-3 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 outline-none focus:border-[#2341e1] focus:ring-2 focus:ring-[#2341e1]/20"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-slate-800">
                    Nos conte o motivo do contato
                  </label>
                  <textarea
                    name="message"
                    placeholder="Conte sobre sua clínica e o que quer melhorar (agenda, faltas, atendimento, captação...)"
                    className="mt-1 min-h-[110px] w-full rounded-lg border border-slate-200 bg-slate-100/70 px-3 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 outline-none focus:border-[#2341e1] focus:ring-2 focus:ring-[#2341e1]/20"
                  />
                </div>

                <label className="flex items-start gap-2 text-xs text-slate-600">
                  <input type="checkbox" name="terms" className="mt-1" required />
                  Declaro que li e concordo com os Termos e Condições de Uso.
                </label>

                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting || isCooldown}
                  className="w-full bg-[#2341e1] hover:bg-[#1f38c8] disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold py-6 text-base"
                >
                  {isSubmitting
                    ? "Enviando…"
                    : isCooldown
                      ? "Aguarde alguns segundos…"
                      : "Comece já e pare de perder tempo"}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>

                {submitMsg && (
                  <p className="text-center text-sm text-slate-600">{submitMsg}</p>
                )}

                <div className="pt-2 flex justify-center">
                  <button
                    type="button"
                    onClick={handleSolutionsClick}
                    className="text-xs text-slate-500 hover:text-slate-700 underline underline-offset-4"
                  >
                    Ver soluções para clínicas
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}