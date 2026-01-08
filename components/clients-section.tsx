"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"

const clientLogos = [
  {
    name: "Mercotêxtil",
    logo: "/images/mercot.jpeg",
  },
  {
    name: "Scanferla Odontologia",
    logo: "/images/scanod.jpeg",
  },
  {
    name: "CodeliumStudy",
    logo: "/images/study.jpeg",
  },
  {
    name: "Petrotest",
    logo: "/images/petrotest.jpeg",
  },
]

export function ClientsSection() {
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

  const duplicatedLogos = [...clientLogos, ...clientLogos]

  return (
    <section id="clientes" ref={sectionRef} className="relative py-24 bg-[#2341e1] overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-10 left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-black/20 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-white/5 rotate-45 rounded-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Nossos Clientes</h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">Empresas que confiaram em nosso trabalho</p>
        </div>

        <div className="relative overflow-hidden">
          <div className="flex gap-8 animate-scroll">
            {duplicatedLogos.map((client, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-64 h-40 flex items-center justify-center p-6 bg-white rounded-lg border border-white/20"
              >
                <div className="relative w-full h-full">
                  <Image
                    src={client.logo || "/placeholder.svg"}
                    alt={client.name}
                    fill
                    className="object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
