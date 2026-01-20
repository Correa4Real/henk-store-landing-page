import { Award, Heart, Store, Users } from "lucide-react";

const features = [
  {
    icon: Store,
    title: "Loja Exclusiva",
    description: "Ambiente sofisticado e moderno para uma experiência de compra única.",
  },
  {
    icon: Award,
    title: "Marcas Premium",
    description: "Apenas peças originais das melhores marcas nacionais e internacionais.",
  },
  {
    icon: Heart,
    title: "Atendimento VIP",
    description: "Equipe especializada para ajudar você a encontrar o look perfeito.",
  },
  {
    icon: Users,
    title: "+10 Mil Clientes",
    description: "Uma comunidade que confia na Henk Store para seu estilo.",
  },
];

const About = () => {
  return (
    <section id="sobre" className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-primary font-medium tracking-widest uppercase text-sm mb-4 block">
              Sobre Nós
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              A Maior Loja <span className="text-gradient-gold">Multimarcas</span> do Centro do Estado
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              A Henk Store nasceu com a missão de trazer as melhores marcas de moda para Santa Maria. 
              Com um ambiente moderno e atendimento personalizado, oferecemos uma experiência de compra 
              incomparável para quem busca qualidade, estilo e exclusividade.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Trabalhamos com peças originais de marcas como Tommy Hilfiger, Lacoste, Calvin Klein, 
              Diesel e muitas outras, sempre trazendo as últimas tendências da moda.
            </p>
            <div className="flex items-center gap-4">
              <div className="h-px flex-1 bg-border" />
              <span className="text-primary font-display text-2xl font-semibold">HENK</span>
              <div className="h-px flex-1 bg-border" />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="bg-card border border-border rounded-xl p-6 hover-lift hover:border-primary/50 transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-lg font-semibold mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
