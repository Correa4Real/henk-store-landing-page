import { Instagram, Heart } from "lucide-react";
import henkLogo from "@/assets/henk-logo.jpg";

const Footer = () => {
  return (
    <footer className="bg-secondary border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-3">
            <img
              src={henkLogo}
              alt="Henk Store"
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <span className="font-display text-xl font-semibold block">HENK</span>
              <span className="text-muted-foreground text-sm">Loja Feminina e Masculina</span>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://www.instagram.com/henk_store/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground text-sm flex items-center justify-center gap-1">
            Feito Por Gabriel Coradini e Gabriel Machado
          </p>
          <p className="text-muted-foreground text-xs mt-2">
            © {new Date().getFullYear()} Henk Store. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
