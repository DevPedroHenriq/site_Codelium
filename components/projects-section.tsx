"use client"

import { useEffect, useRef } from "react"
import { ProjectCarousel } from "@/components/project-carousel"

const projects = [
  {
    title: "Site Institucional - Empresa de Cadarços",
    description: "Website institucional com catálogo de produtos e integração com WhatsApp para vendas.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mercoT-MNazDH0sWdOIziPYEfJuUQiKekxrwr.jpeg",
    category: "Website",
  },
  {
    title: "Sistema de Gestão - Empresa de Cadarços",
    description: "Sistema completo para controle de estoque, vendas e produção de cadarços personalizados.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sisMercoT-lKdITmIlYvVRaN3dqx899qT8gskeXV.jpeg",
    category: "Sistema",
  },
  {
    title: "Sistema de Gestão - Barbearia",
    description: "Sistema completo para agendamento, controle financeiro e gestão de clientes para barbearias.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/loading-vcnNQFgVbgWZeC6ys4LzjtItVEvjhh.jpg",
    category: "Sistema",
  },
  {
    title: "Site Institucional - Clínica Odontológica",
    description: "Website profissional com sistema de agendamento online e apresentação de serviços odontológicos.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/scanod-fNV9Wn1QleteRgLRAaamAvlAs3VbjD.jpeg",
    category: "Website",
  },
  {
    title: "Site Institucional - Empresa de GNV",
    description: "Site moderno e responsivo para empresa de instalação de GNV, com sistema de agendamento integrado.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/petrotest-dAYRvB8h9ZIDoiUYPQIW4FCTDDNbBW.jpeg",
    category: "Website",
  },
  {
    title: "Plataforma de Estudos",
    description: "Plataforma educacional com sistema de cursos, videoaulas e acompanhamento de progresso.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/study-mq4hG7uRUyz4XELq5Mn04xLWY4L6yP.jpeg",
    category: "Plataforma",
  },
    {
    title: "sistema de contagem de fluxo de veiculos",
    description: "IA responsável pelo controle do fluxo de veículos que passam por determinado local.",
    image: "/sistema.jpeg",
    category: "Plataforma",
  },
]

export function ProjectsSection() {
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
    <section id="projetos" ref={sectionRef} className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Nossos Projetos</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Conheça alguns dos projetos que já desenvolvemos para nossos clientes
          </p>
        </div>

        <ProjectCarousel projects={projects} />
      </div>
    </section>
  )
}
