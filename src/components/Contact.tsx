import { Clock, Instagram, MapPin, Phone } from "lucide-react";
import { Button } from "./ui/button";

const Contact = () => {
  return (
    <section id="contato" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary font-medium tracking-widest uppercase text-sm mb-4 block">
            Contato
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Visite Nossa <span className="text-gradient-gold">Loja</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Estamos em novo endereço! Venha nos visitar e descubra as melhores peças da temporada.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-card border border-border rounded-xl p-8 text-center hover-lift hover:border-primary/50 transition-all duration-300">
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <MapPin className="w-7 h-7 text-primary" />
            </div>
            <h3 className="font-display text-xl font-semibold mb-3">Endereço</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Avenida Nossa Senhora das Dores, 8<br />
              Santa Maria - RS<br />
              CEP: 97050530
            </p>
          </div>

          <div className="bg-card border border-border rounded-xl p-8 text-center hover-lift hover:border-primary/50 transition-all duration-300">
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <Clock className="w-7 h-7 text-primary" />
            </div>
            <h3 className="font-display text-xl font-semibold mb-3">Horário</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Segunda a Sexta<br />
              9h às 19h<br />
              Sábado: 9h às 13h
            </p>
          </div>

          <div className="bg-card border border-border rounded-xl p-8 text-center hover-lift hover:border-primary/50 transition-all duration-300">
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <Instagram className="w-7 h-7 text-primary" />
            </div>
            <h3 className="font-display text-xl font-semibold mb-3">Redes Sociais</h3>
            <p className="text-muted-foreground text-sm mb-4">
              Siga-nos no Instagram
            </p>
            <a
              href="https://www.instagram.com/henk_store/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 font-medium transition-colors"
            >
              @henk_store
            </a>
          </div>
        </div>

        <div className="mt-16 text-center">
          <Button variant="hero" size="xl" asChild>
            <a
              href="https://www.instagram.com/henk_store/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3"
            >
              <Instagram className="w-5 h-5" />
              Siga no Instagram
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
