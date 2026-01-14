import { Clock, Target, TrendingUp, Code2, MessageSquare, CheckCircle, HeartHandshake } from "lucide-react"

const reasons = [
  {
    icon: Clock,
    title: "Eficiência e entrega em tempo recorde",
    description:
      "Trabalhamos com processos otimizados, metodologias ágeis e uma equipe altamente capacitada, o que nos permite entregar soluções em prazos significativamente menores, sem comprometer a qualidade.",
  },
  {
    icon: Target,
    title: "Soluções sob medida, não pacotes genéricos",
    description:
      "Cada projeto é desenvolvido de forma personalizada, alinhado às necessidades reais do cliente. Não adaptamos o cliente à solução — adaptamos a solução ao negócio.",
  },
  {
    icon: TrendingUp,
    title: "Foco total em resultado e performance",
    description:
      "Nossos sistemas, sites e automações são pensados para gerar ganho de produtividade, redução de custos e escalabilidade, indo além da simples entrega técnica.",
  },
  {
    icon: Code2,
    title: "Domínio completo de tecnologia moderna",
    description:
      "Atuamos com tecnologias atuais e consolidadas no mercado, garantindo segurança, estabilidade e fácil evolução do projeto ao longo do tempo.",
  },
  {
    icon: MessageSquare,
    title: "Comunicação clara e acompanhamento constante",
    description:
      "O cliente acompanha cada etapa do projeto com transparência, relatórios e feedbacks contínuos. Isso elimina retrabalho, desalinhamentos e atrasos.",
  },
  {
    icon: CheckCircle,
    title: "Compromisso real com prazos e qualidade",
    description:
      "Não prometemos o que não podemos cumprir. Nosso diferencial está em cumprir exatamente o que foi acordado, dentro do prazo e com alto padrão técnico.",
  },
  {
    icon: HeartHandshake,
    title: "Suporte e parceria de longo prazo",
    description:
      "Não entregamos e desaparecemos. Atuamos como parceiros estratégicos, oferecendo suporte contínuo, melhorias evolutivas e acompanhamento após a entrega.",
  },
]

export function WhyChooseSection() {
  return (
    <section id="por-que-codelium" className="relative py-24 bg-white overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#2341e1]/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#2341e1]/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />
      <div className="absolute top-1/2 left-1/4 w-4 h-4 bg-[#2341e1] rounded-full opacity-20" />
      <div className="absolute top-1/3 right-1/4 w-6 h-6 bg-black rounded-full opacity-10" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-[#2341e1]/10 text-[#2341e1] rounded-full text-sm font-semibold mb-4">
            Nossos Diferenciais
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Por que escolher a <span className="text-[#2341e1]">Codelium</span>?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Descubra o que nos torna a escolha certa para transformar suas ideias em soluções digitais de sucesso.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="group relative bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-xl hover:shadow-[#2341e1]/10 hover:border-[#2341e1]/30 transition-all duration-300"
            >
              {/* Number badge */}
              <div className="absolute -top-3 -right-3 w-8 h-8 bg-[#2341e1] text-white rounded-full flex items-center justify-center text-sm font-bold">
                {index + 1}
              </div>

              <div className="w-14 h-14 bg-[#2341e1]/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#2341e1] group-hover:scale-110 transition-all duration-300">
                <reason.icon className="w-7 h-7 text-[#2341e1] group-hover:text-white transition-colors duration-300" />
              </div>

              <h3 className="text-xl font-bold text-black mb-3 group-hover:text-[#2341e1] transition-colors duration-300">
                {reason.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <a
            href="https://wa.me/5522999067522"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#2341e1] text-white font-semibold rounded-full hover:bg-[#1a31b0] transition-colors shadow-lg shadow-[#2341e1]/30"
          >
            Fale com um especialista
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
