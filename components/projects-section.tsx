"use client"

import { useEffect, useRef } from "react"
import { ProjectCarousel } from "@/components/project-carousel"

const projects = [
  {
    title: "Site Institucional - Empresa de Cadarços",
    description: "Website institucional com catálogo de produtos e integração com WhatsApp para vendas.",
    image: "/images/mercot.jpeg",
    category: "Website",
  },
  {
    title: "Sistema de Gestão - Empresa de Cadarços",
    description: "Sistema completo para controle de estoque, vendas e produção de cadarços personalizados.",
    image: "/images/sismercot.jpeg",
    category: "Sistema",
  },
  {
    title: "Sistema de Gestão - Barbearia",
    description: "Sistema completo para agendamento, controle financeiro e gestão de clientes para barbearias.",
    image: "/images/loading.jpg",
    category: "Sistema",
  },
  {
    title: "Site Institucional - Clínica Odontológica",
    description: "Website profissional com sistema de agendamento online e apresentação de serviços odontológicos.",
    image: "/images/scanod.jpeg",
    category: "Website",
  },
  {
    title: "Site Institucional - Empresa de GNV",
    description: "Site moderno e responsivo para empresa de instalação de GNV, com sistema de agendamento integrado.",
    image: "/images/petrotest.jpeg",
    category: "Website",
  },
  {
    title: "Plataforma de Estudos",
    description: "Plataforma educacional com sistema de cursos, videoaulas e acompanhamento de progresso.",
    image: "/images/study.jpeg",
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
    <section id="projetos" ref={sectionRef} className="relative py-24 bg-black overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#2341e1]/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
      <div className="absolute top-1/2 right-1/3 w-56 h-56 bg-[#2341e1]/10 -rotate-12 rounded-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Nossos Projetos</h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Conheça alguns dos projetos que já desenvolvemos para nossos clientes
          </p>
        </div>

        <ProjectCarousel projects={projects} />
      </div>
    </section>
  )
}
