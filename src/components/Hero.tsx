import { ArrowDown, Sparkles } from "lucide-react";
import { Button } from "./ui/button";
import heroImage from "@/assets/hero-fashion.jpg";

const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Henk Store Fashion"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-overlay" />
        <div className="absolute inset-0 bg-background/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Sparkles className="w-5 h-5 text-primary" />
            <span className="text-primary font-medium tracking-widest uppercase text-sm">
              A Maior Loja Multimarcas do Centro do Estado
            </span>
            <Sparkles className="w-5 h-5 text-primary" />
          </div>

          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            Estilo que{" "}
            <span className="text-gradient-gold">Transforma</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            Marcas exclusivas e peças originais femininas & masculinas para todas as ocasiões. 
            Descubra a elegância que você merece.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="hero" asChild>
              <a href="https://www.instagram.com/henk_store/" target="_blank" rel="noopener noreferrer">
                Explorar Coleção
              </a>
            </Button>
            <Button variant="hero-outline" asChild>
              <a href="#sobre">
                Conheça Nossa Loja
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#marcas" className="text-muted-foreground hover:text-foreground transition-colors">
          <ArrowDown className="w-6 h-6" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
