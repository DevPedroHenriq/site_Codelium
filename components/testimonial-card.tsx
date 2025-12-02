/* "use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

interface TestimonialCardProps {
  name: string
  company: string
  role: string
  content: string
  rating: number
  avatar: string
  delay?: number
}

export function TestimonialCard({ name, company, role, content, rating, avatar, delay = 0 }: TestimonialCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => setIsVisible(true), delay)
          }
        })
      },
      { threshold: 0.1 },
    )

    if (cardRef.current) {
      observer.observe(cardRef.current)
    }

    return () => observer.disconnect()
  }, [delay])

  return (
    <Card
      ref={cardRef}
      className={`transition-all duration-500 hover:shadow-xl hover:-translate-y-2 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <CardContent className="p-8">
        <div className="flex gap-1 mb-4">
          {Array.from({ length: rating }).map((_, i) => (
            <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
          ))}
        </div>

        <p className="text-muted-foreground mb-6 leading-relaxed italic">"{content}"</p>

        <div className="flex items-center gap-4">
          <img src={avatar || "/placeholder.svg"} alt={name} className="w-12 h-12 rounded-full object-cover" />
          <div>
            <p className="font-semibold">{name}</p>
            <p className="text-sm text-muted-foreground">
              {role} - {company}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
