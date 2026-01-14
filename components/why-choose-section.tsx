import { Clock, Target, TrendingUp, Code2, MessageSquare, CheckCircle, HeartHandshake } from "lucide-react"

const reasons = [
  {
    icon: Clock,
    title: "Eficiência e entrega em tempo recorde",
    description:
      "Trabalhamos com processos otimizados, metodologias ágeis e uma equipe altamente capacitada, o que nos permite entregar soluções em prazos significativamente menores, sem comprometer a qualidade.",
    color: "#2341e1", // azul
  },
  {
    icon: Target,
    title: "Soluções sob medida, não pacotes genéricos",
    description:
      "Cada projeto é desenvolvido de forma personalizada, alinhado às necessidades reais do cliente. Não adaptamos o cliente à solução — adaptamos a solução ao negócio.",
    color: "#b85450", // vermelho/marrom
  },
  {
    icon: TrendingUp,
    title: "Foco total em resultado e performance",
    description:
      "Nossos sistemas, sites e automações são pensados para gerar ganho de produtividade, redução de custos e escalabilidade, indo além da simples entrega técnica.",
    color: "#2e7d32", // verde
  },
  {
    icon: Code2,
    title: "Domínio completo de tecnologia moderna",
    description:
      "Atuamos com tecnologias atuais e consolidadas no mercado, garantindo segurança, estabilidade e fácil evolução do projeto ao longo do tempo.",
    color: "#5e35b1", // roxo
  },
  {
    icon: MessageSquare,
    title: "Comunicação clara e acompanhamento constante",
    description:
      "O cliente acompanha cada etapa do projeto com transparência, relatórios e feedbacks contínuos. Isso elimina retrabalho, desalinhamentos e atrasos.",
    color: "#c2185b", // rosa/magenta
  },
  {
    icon: CheckCircle,
    title: "Compromisso real com prazos e qualidade",
    description:
      "Não prometemos o que não podemos cumprir. Nosso diferencial está em cumprir exatamente o que foi acordado, dentro do prazo e com alto padrão técnico.",
    color: "#6a1b9a", // roxo escuro
  },
  {
    icon: HeartHandshake,
    title: "Suporte e parceria de longo prazo",
    description:
      "Não entregamos e desaparecemos. Atuamos como parceiros estratégicos, oferecendo suporte contínuo, melhorias evolutivas e acompanhamento após a entrega.",
    color: "#2341e1", // azul
  },
]

export function WhyChooseSection() {
  return (
    <section id="por-que-codelium" className="relative py-24 bg-white overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#2341e1]/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#2341e1]/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />

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

        <div className="relative max-w-5xl mx-auto">
          {/* SVG for dotted curved lines */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none hidden lg:block"
            viewBox="0 0 1000 1400"
            preserveAspectRatio="none"
            fill="none"
          >
            {/* Dotted path connecting all boxes in zigzag */}
            <path
              d="M250 80 C350 80, 400 160, 500 180 
                 C600 200, 650 180, 750 180
                 M750 180 C650 220, 600 280, 500 320
                 C400 360, 350 340, 250 380
                 M250 380 C350 420, 400 480, 500 520
                 C600 560, 650 540, 750 580
                 M750 580 C650 620, 600 680, 500 720
                 C400 760, 350 740, 250 780
                 M250 780 C350 820, 400 880, 500 920
                 C600 960, 650 940, 750 980
                 M750 980 C650 1020, 600 1080, 500 1120
                 C400 1160, 350 1140, 250 1180
                 M250 1180 C350 1220, 400 1280, 500 1320"
              stroke="#1a1a1a"
              strokeWidth="3"
              strokeDasharray="8 8"
              strokeLinecap="round"
            />
          </svg>

          {/* Zigzag layout of cards */}
          <div className="relative space-y-8">
            {reasons.map((reason, index) => {
              const isLeft = index % 2 === 0
              return (
                <div key={index} className={`flex ${isLeft ? "justify-start" : "justify-end"}`}>
                  <div
                    className="relative bg-white rounded-xl p-6 max-w-md border-2 transition-all duration-300 hover:shadow-lg group"
                    style={{ borderColor: reason.color }}
                  >
                    {/* Number inside box */}
                    <div className="flex items-start gap-4">
                      <span className="text-2xl font-bold shrink-0" style={{ color: reason.color }}>
                        {index + 1}.
                      </span>
                      <div>
                        <h3
                          className="text-lg font-bold mb-2 transition-colors duration-300"
                          style={{ color: reason.color }}
                        >
                          {reason.title}
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed">{reason.description}</p>
                      </div>
                    </div>

                    {/* Icon in corner */}
                    <div
                      className="absolute -top-3 -right-3 w-10 h-10 rounded-full flex items-center justify-center bg-white border-2"
                      style={{ borderColor: reason.color }}
                    >
                      <reason.icon className="w-5 h-5" style={{ color: reason.color }} />
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
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
