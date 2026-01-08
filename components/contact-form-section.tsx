"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Send } from "lucide-react"

export function ContactFormSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    comoChegou: "",
    nicho: "",
    mensagem: "",
    aceitaTermos: false,
  })

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.aceitaTermos) {
      alert("Por favor, aceite os Termos e Condições de Uso.")
      return
    }

    setIsSubmitting(true)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        alert("Mensagem enviada com sucesso!")
        setFormData({
          nome: "",
          email: "",
          telefone: "",
          comoChegou: "",
          nicho: "",
          mensagem: "",
          aceitaTermos: false,
        })
      } else {
        alert("Erro ao enviar mensagem. Tente novamente.")
      }
    } catch (error) {
      console.error("Erro:", error)
      alert("Erro ao enviar mensagem. Tente novamente.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contato" ref={sectionRef} className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Fale conosco, agora mesmo!</h2>
            <p className="text-xl text-muted-foreground">Preencha o formulário e entraremos em contato</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 bg-card p-8 rounded-lg border border-border">
            <div>
              <Label htmlFor="nome">Nome</Label>
              <Input
                id="nome"
                type="text"
                placeholder="Seu nome completo"
                value={formData.nome}
                onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                required
              />
            </div>

            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="seu@email.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>

            <div>
              <Label htmlFor="telefone">Telefone</Label>
              <Input
                id="telefone"
                type="tel"
                placeholder="(00) 00000-0000"
                value={formData.telefone}
                onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
                required
              />
            </div>

            <div>
              <Label htmlFor="comoChegou">Como chegou até nós</Label>
              <Input
                id="comoChegou"
                type="text"
                placeholder="Google, Instagram, Indicação..."
                value={formData.comoChegou}
                onChange={(e) => setFormData({ ...formData, comoChegou: e.target.value })}
                required
              />
            </div>

            <div>
              <Label htmlFor="nicho">Nicho específico</Label>
              <Input
                id="nicho"
                type="text"
                placeholder="Seu segmento de atuação"
                value={formData.nicho}
                onChange={(e) => setFormData({ ...formData, nicho: e.target.value })}
                required
              />
            </div>

            <div>
              <Label htmlFor="mensagem">Digite sua mensagem</Label>
              <Textarea
                id="mensagem"
                placeholder="Conte-nos sobre seu projeto..."
                rows={5}
                value={formData.mensagem}
                onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
                required
              />
            </div>

            <div className="flex items-start gap-2">
              <Checkbox
                id="termos"
                checked={formData.aceitaTermos}
                onCheckedChange={(checked) => setFormData({ ...formData, aceitaTermos: checked as boolean })}
              />
              <Label htmlFor="termos" className="text-sm leading-relaxed cursor-pointer">
                Declaro que li e concordo com os Termos e Condições de Uso.
              </Label>
            </div>

            <Button type="submit" className="w-full" disabled={isSubmitting}>
              <Send className="mr-2 h-4 w-4" />
              {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}
