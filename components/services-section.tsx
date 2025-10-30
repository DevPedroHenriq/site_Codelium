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
      "Implementamos sistemas de automação inteligentes com n8n. Conecte suas ferramentas e automatize tarefas repetitivas, economizando tempo e recursos.",
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
    <section id="servicos" ref={sectionRef} className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">O Que Fazemos</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
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
