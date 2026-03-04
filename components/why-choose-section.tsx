import {
  Bot,
  CalendarCheck2,
  LineChart,
  LayoutTemplate,
  ShieldCheck,
  HeartHandshake,
  Sparkles,
  ArrowRight,
} from "lucide-react"

const reasons = [
  {
    icon: Bot,
    title: "Pré-atendimento 24/7 com IA",
    benefit: "Respostas instantâneas",
    description:
      "Atenda no WhatsApp e Instagram automaticamente: qualifique pacientes, colete informações e encaminhe para agendamento sem depender da recepção o dia todo.",
  },
  {
    icon: CalendarCheck2,
    title: "Agenda cheia com menos faltas",
    benefit: "Redução de no-show",
    description:
      "Confirmações e lembretes inteligentes, reagendamento facilitado e follow-up automático para aumentar comparecimento e recorrência.",
  },
  {
    icon: LineChart,
    title: "Gestão + financeiro com dashboards",
    benefit: "Decisão com dados",
    description:
      "Controle faturamento, despesas e indicadores em um painel claro. Acompanhe performance e cresça com previsibilidade.",
  },
  {
    icon: LayoutTemplate,
    title: "Landing Page de alta conversão",
    benefit: "Captação de pacientes",
    description:
      "LP personalizada para sua especialidade, pronta para tráfego pago e SEO local, integrada ao WhatsApp e ao funil de atendimento.",
  },
  {
    icon: ShieldCheck,
    title: "Processos padronizados e seguros",
    benefit: "Menos erros",
    description:
      "Padronize atendimento e fluxos internos com automações e registros. Mais organização, menos retrabalho e maior consistência na operação.",
  },
  {
    icon: HeartHandshake,
    title: "Suporte e evolução contínua",
    benefit: "Parceria real",
    description:
      "Acompanhamento após entrega: melhorias evolutivas, ajustes estratégicos e otimizações conforme sua clínica cresce.",
  },
]

function ReasonCard({
  icon: Icon,
  title,
  benefit,
  description,
}: {
  icon: any
  title: string
  benefit: string
  description: string
}) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/25 bg-white/10 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-all hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(0,0,0,0.14)]">
      {/* Accent top line (diferente da outra seção) */}
      <div className="h-1 w-full bg-gradient-to-r from-emerald-400/80 via-sky-400/70 to-indigo-500/60" />

      {/* Soft glow */}
      <div className="pointer-events-none absolute -top-24 -right-24 h-52 w-52 rounded-full bg-emerald-400/15 blur-3xl opacity-0 transition-opacity group-hover:opacity-100" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-52 w-52 rounded-full bg-sky-400/15 blur-3xl opacity-0 transition-opacity group-hover:opacity-100" />

      <div className="p-6">
        <div className="flex items-start justify-between gap-4">
          {/* Icon container diferente */}
          <div className="relative">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15 ring-1 ring-white/25">
              <Icon className="h-6 w-6 text-white" />
            </div>
            <div className="pointer-events-none absolute -inset-1 rounded-2xl bg-gradient-to-br from-emerald-400/30 via-transparent to-sky-400/25 blur opacity-70" />
          </div>

          {/* Benefit tag */}
          <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-semibold text-white ring-1 ring-white/25">
            {benefit}
          </span>
        </div>

        <h3 className="mt-4 text-lg font-extrabold text-white">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-white/80">{description}</p>

        <div className="mt-5 flex items-center gap-2 text-xs text-white/70">
          <span className="h-2 w-2 rounded-full bg-emerald-300" />
          Focado em clínicas odontológicas e saúde
        </div>
      </div>
    </div>
  )
}

export function WhyChooseSection() {
  return (
    <section
      id="por-que-codelium"
      className="relative overflow-hidden py-24"
      style={{
        background:
          "radial-gradient(900px 520px at 15% 5%, rgba(16,185,129,0.22), transparent 60%), radial-gradient(900px 520px at 90% 10%, rgba(56,189,248,0.18), transparent 55%), linear-gradient(180deg, #0b1220 0%, #0b1630 55%, #0b1220 100%)",
      }}
    >
      {/* Decorative shapes */}
      <div className="pointer-events-none absolute -top-24 left-10 h-96 w-96 rounded-full bg-emerald-400/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 right-10 h-[460px] w-[460px] rounded-full bg-sky-400/10 blur-3xl" />

      {/* Subtle noise-ish grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.10]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.10) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.10) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white ring-1 ring-white/20">
            <Sparkles className="h-4 w-4 text-emerald-300" />
            Por que a Codelium Health
          </span>

          <h2 className="mt-5 text-4xl md:text-5xl font-extrabold tracking-tight text-white">
            Benefícios reais para sua clínica
          </h2>

          <p className="mt-4 text-lg text-white/75">
            Mais pacientes, menos faltas e operação organizada — com automações de IA, gestão e captação integradas.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r, i) => (
            <ReasonCard
              key={i}
              icon={r.icon}
              title={r.title}
              benefit={r.benefit}
              description={r.description}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 rounded-2xl bg-white/10 p-6 ring-1 ring-white/20 backdrop-blur md:flex-row">
          <div>
            <p className="text-sm font-extrabold text-white">
              Quer um diagnóstico rápido para sua clínica?
            </p>
            <p className="text-sm text-white/75">
              Em poucos minutos mostramos o que automatizar primeiro para aumentar consultas e reduzir trabalho manual.
            </p>
          </div>

          <a
            href="#hero-lead-form"
            className="inline-flex items-center justify-center rounded-xl bg-emerald-400 px-5 py-3 text-sm font-semibold text-[#0b1220] hover:bg-emerald-300 transition-colors"
          >
            Solicitar diagnóstico
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  )
}