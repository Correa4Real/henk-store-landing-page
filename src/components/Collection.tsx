import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import collection1 from "@/assets/collection-1.jpg";
import collection2 from "@/assets/collection-2.jpg";
import collection3 from "@/assets/collection-3.jpg";

const collections = [
  {
    title: "Elegância",
    subtitle: "Para Noites Especiais",
    image: collection1,
    description: "Vestidos e looks sofisticados para ocasiões memoráveis.",
  },
  {
    title: "Casual Chic",
    subtitle: "Estilo no Dia a Dia",
    image: collection2,
    description: "Peças versáteis que combinam conforto e elegância.",
  },
  {
    title: "Power Dress",
    subtitle: "Conquiste o Mundo",
    image: collection3,
    description: "Looks que transmitem confiança e profissionalismo.",
  },
];

const Collection = () => {
  return (
    <section id="colecao" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary font-medium tracking-widest uppercase text-sm mb-4 block">
            Nova Coleção
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Descubra Seu <span className="text-gradient-gold">Estilo</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Peças exclusivas selecionadas para mulheres e homens que valorizam qualidade e autenticidade.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {collections.map((item, index) => (
            <div
              key={item.title}
              className="group relative overflow-hidden rounded-xl hover-lift"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <span className="text-primary text-sm font-medium tracking-wider uppercase">
                  {item.subtitle}
                </span>
                <h3 className="font-display text-2xl font-bold mt-2 mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {item.description}
                </p>
                <Button variant="gold" size="sm" asChild>
                  <a href="https://www.instagram.com/henk_store/" target="_blank" rel="noopener noreferrer">
                    Ver Mais <ArrowRight className="w-4 h-4" />
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collection;
