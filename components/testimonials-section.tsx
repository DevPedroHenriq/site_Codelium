"use client"

import { useEffect, useRef } from "react"
import { TestimonialCard } from "@/components/testimonial-card"

const testimonials = [
   {
    name: "Mercotextil",
    company: "Mercotextil",
    role: "",
    content:
      "Excelente trabalho! ",
    rating: 5,
    avatar: "",
  },
]

export function TestimonialsSection() {
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
    <section id="avaliacoes" ref={sectionRef} className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">O Que Dizem Nossos Clientes</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Veja a avaliação de quem já confiou em nosso trabalho
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} delay={index * 100} />
          ))}
        </div>
      </div>
    </section>
  )
}
