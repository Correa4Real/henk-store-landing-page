const brands = [
  { name: "Tommy Hilfiger", logo: "TOMMY HILFIGER" },
  { name: "Shoulder", logo: "SHOULDER" },
  { name: "Zinco", logo: "ZINCO" },
  { name: "Lacoste", logo: "LACOSTE" },
  { name: "Diesel", logo: "DIESEL" },
  { name: "Calvin Klein", logo: "CALVIN KLEIN" },
  { name: "Lança Perfume", logo: "LANÇA PERFUME" },
  { name: "Colcci", logo: "COLCCI" },
];

const Brands = () => {
  return (
    <section id="marcas" className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary font-medium tracking-widest uppercase text-sm mb-4 block">
            Marcas Exclusivas
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            As Melhores <span className="text-gradient-gold">Marcas</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Reunimos as marcas mais desejadas em um único lugar para você encontrar o estilo perfeito.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {brands.map((brand, index) => (
            <div
              key={brand.name}
              className="group bg-card border border-border rounded-lg p-8 flex items-center justify-center hover-lift hover:border-primary/50 transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <span className="font-body text-sm md:text-base font-semibold tracking-wider text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                {brand.logo}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;
