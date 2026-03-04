import { Mail, Phone, MapPin, Instagram, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">
              Codelium<span className="text-accent">Health</span>
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Automação e captação de pacientes para clínicas odontológicas e da saúde.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-lg">Serviços</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a href="#servicos" className="hover:text-accent transition-colors">
                  Desenvolvimento Web
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-accent transition-colors">
                  Sistemas Personalizados
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-accent transition-colors">
                  Automação n8n
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-accent transition-colors">
                  Consultoria Tech
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-lg">Empresa</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a href="#inicio" className="hover:text-accent transition-colors">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#projetos" className="hover:text-accent transition-colors">
                  Portfólio
                </a>
              </li>
              <li>
                <a href="#avaliacoes" className="hover:text-accent transition-colors">
                  Depoimentos
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-lg">Contato</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-accent" />
                <a href="mailto:codeliumcompany@gmail.com" className="hover:text-accent transition-colors">
                  codeliumcompany@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-accent" />
                <a href="tel:+5522999067522" className="hover:text-accent transition-colors">
                  +55 22 99906-7522
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-accent" />
                <span>Brasil</span>
              </li>
            </ul>

            <div className="flex gap-4 mt-6">
              <a
                href="https://www.instagram.com/codeliumcompany/"
                className="text-muted-foreground hover:text-accent transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="linkedin.com/company/codeliumcompany"
                className="text-muted-foreground hover:text-accent transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Codelium Health. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
