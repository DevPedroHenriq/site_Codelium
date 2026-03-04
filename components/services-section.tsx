"use client"

import { useEffect, useRef } from "react"
import {
  Bot,
  CalendarCheck2,
  LineChart,
  MessageSquare,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  LayoutTemplate,
  ArrowRight,
  Zap,
  PhoneCall,
  BadgeCheck,
} from "lucide-react"

const solutions = [
  {
    icon: PhoneCall,
    title: "Atendimento imediato e inteligente",
    description:
      "Respondemos seus pacientes no WhatsApp/Instagram em segundos, qualificamos a intenção e levamos a conversa até o próximo passo (agendar ou captar).",
    bullets: ["Respostas 24/7", "Qualificação automática", "Roteiros por especialidade"],
    metric: "24/7",
    tag: "Captação & Atendimento",
  },
  {
    icon: CalendarCheck2,
    title: "Agenda cheia com menos faltas",
    description:
      "Automatizamos confirmação, lembretes e reagendamentos. Sua clínica reduz no-show e aumenta comparecimento sem esforço manual.",
    bullets: ["Confirmação automática", "Lembretes inteligentes", "Recuperação de faltas"],
    metric: "- no-show",
    tag: "Agenda",
  },
  {
    icon: LineChart,
    title: "Gestão e financeiro com visão de dono",
    description:
      "Tenha controle do faturamento, despesas, metas e indicadores. Dashboards claros para decisões rápidas e crescimento previsível.",
    bullets: ["Fluxo de caixa", "Relatórios", "Indicadores da clínica"],
    metric: "+ controle",
    tag: "Gestão",
  },
  {
    icon: LayoutTemplate,
    title: "Landing page pronta para conversão",
    description:
      "Criamos uma LP personalizada para sua especialidade, com CTA forte e integração direta com WhatsApp e formulário (funil completo).",
    bullets: ["Design premium", "SEO local", "Integração com funil"],
    metric: "+ leads",
    tag: "Marketing",
  },
  {
    icon: Bot,
    title: "Automações com IA (n8n) para economizar tempo",
    description:
      "Integramos sistemas e automatizamos processos repetitivos: triagem, confirmação, pós-consulta, retorno e muito mais.",
    bullets: ["Integrações", "Rotinas automáticas", "Menos trabalho manual"],
    metric: "n8n",
    tag: "Automação",
  },
  {
    icon: ShieldCheck,
    title: "Processos padronizados e operação segura",
    description:
      "Organização e previsibilidade: atendimento padronizado, histórico e rotinas consistentes para reduzir erros e retrabalho.",
    bullets: ["Padronização", "Histórico", "Menos retrabalho"],
    metric: "seguro",
    tag: "Operação",
  },
]

function SolutionCard({
  icon: Icon,
  title,
  description,
  bullets,
  tag,
  metric,
  delay,
}: {
  icon: any
  title: string
  description: string
  bullets: string[]
  tag: string
  metric: string
  delay: number
}) {
  return (
    <div
      className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* gradient corner */}
      <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-gradient-to-br from-[#2341e1]/25 via-emerald-300/10 to-transparent blur-2xl opacity-0 transition-opacity group-hover:opacity-100" />

      {/* header */}
      <div className="relative flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#2341e1]/10">
            <Icon className="h-6 w-6 text-[#2341e1]" />
          </div>

          <div className="flex flex-col">
            <span className="text-xs font-semibold text-slate-500">{tag}</span>
            <span className="text-sm font-extrabold text-slate-900">{metric}</span>
          </div>
        </div>

        <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-700">
          Resultado
        </span>
      </div>

      <h3 className="mt-4 text-lg font-extrabold text-slate-900">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-600">{description}</p>

      <div className="mt-5 space-y-2">
        {bullets.map((b, i) => (
          <div key={i} className="flex items-center gap-2 text-sm text-slate-700">
            <BadgeCheck className="h-4 w-4 text-emerald-600" />
            <span>{b}</span>
          </div>
        ))}
      </div>

      {/* bottom accent */}
      <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-emerald-400/70 via-[#2341e1]/40 to-transparent opacity-80" />
    </div>
  )
}

export function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null)

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

  return (
    <section
      id="servicos"
      ref={sectionRef}
      className="relative overflow-hidden py-24"
      style={{
        background:
          "radial-gradient(1000px 520px at 15% 0%, rgba(35,65,225,0.10), transparent 60%), radial-gradient(900px 520px at 90% 15%, rgba(16,185,129,0.08), transparent 55%), linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)",
      }}
    >
      {/* Background decor */}
      <div className="pointer-events-none absolute -top-24 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[#2341e1]/8 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-28 right-10 h-[420px] w-[420px] rounded-full bg-emerald-500/8 blur-3xl" />
      <div className="pointer-events-none absolute top-24 left-10 h-40 w-40 rotate-12 rounded-3xl bg-[#2341e1]/10" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-sm text-slate-700 backdrop-blur">
            <Sparkles className="h-4 w-4 text-[#2341e1]" />
            <span>Codelium Health • Para clínicas odontológicas e saúde</span>
          </div>

          <h2 className="mt-5 text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
            O que a Codelium faz para sua empresa
          </h2>

          <p className="mt-4 text-lg text-slate-600">
            Nós cuidamos do funil completo: captação → atendimento → agendamento → gestão.
            Você ganha tempo, previsibilidade e mais consultas na agenda.
          </p>

          {/* mini highlights */}
          <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
            <div className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700">
              <MessageSquare className="h-4 w-4 text-[#2341e1]" />
              Atendimento automático
            </div>
            <div className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700">
              <Zap className="h-4 w-4 text-emerald-600" />
              Menos trabalho manual
            </div>
            <div className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700">
              <Stethoscope className="h-4 w-4 text-[#2341e1]" />
              Foco em clínicas
            </div>
          </div>
        </div>

        {/* Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {solutions.map((s, index) => (
            <SolutionCard
              key={index}
              icon={s.icon}
              title={s.title}
              description={s.description}
              bullets={s.bullets}
              tag={s.tag}
              metric={s.metric}
              delay={index * 80}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-white/70 p-6 backdrop-blur md:flex-row">
          <div>
            <p className="text-sm font-semibold text-slate-900">
              Quer ver isso aplicado na sua clínica?
            </p>
            <p className="text-sm text-slate-600">
              Fazemos um diagnóstico rápido e mostramos o que automatizar primeiro para gerar resultados.
            </p>
          </div>

          <a
            href="#hero-lead-form"
            className="inline-flex items-center justify-center rounded-lg bg-[#2341e1] px-5 py-3 text-sm font-semibold text-white hover:bg-[#1f38c8] transition-colors"
          >
            Solicitar diagnóstico
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  )
}