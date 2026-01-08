"use client"

import { useEffect, useRef } from "react"
import { ServiceCard } from "@/components/service-card"
import { Globe, Code, Workflow } from "lucide-react"

const services = [
  {
    icon: Globe,
    title: "Sites em Geral",
    description:
      "Desenvolvemos sites institucionais, landing pages e e-commerce para todo tipo de cliente. Design moderno, responsivo e otimizado para conversão.",
  },
  {
    icon: Code,
    title: "Sistemas Personalizados",
    description:
      "Criamos sistemas de todos os tipos para ajudar e facilitar sua empresa. Soluções sob medida que automatizam processos e aumentam a produtividade.",
  },
  {
    icon: Workflow,
    title: "Automação com n8n",
    description:
      "Automatizamos processos repetitivos da sua empresa utilizando n8n e agentes de IA. Conecte suas ferramentas, elimine tarefas manuais e ganhe eficiência operacional com inteligência artificial.",
  },
]

export function ServicesSection() {
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

  return (
    <section id="servicos" ref={sectionRef} className="relative py-24 bg-white overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-[#2341e1]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-black/5 rounded-full blur-3xl" />
      <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-[#2341e1]/10 rotate-12 rounded-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black">O Que Fazemos</h2>
          <p className="text-xl text-black/70 max-w-2xl mx-auto">
            Oferecemos soluções completas em tecnologia para transformar e otimizar seu negócio
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
