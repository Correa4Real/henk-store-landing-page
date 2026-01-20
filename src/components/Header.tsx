import { useState, useEffect } from "react";
import { Menu, X, Instagram, MapPin } from "lucide-react";
import { Button } from "./ui/button";
import henkLogo from "@/assets/henk-logo.jpg";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#inicio", label: "Início" },
    { href: "#marcas", label: "Marcas" },
    { href: "#colecao", label: "Coleção" },
    { href: "#sobre", label: "Sobre" },
    { href: "#contato", label: "Contato" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "glass-effect py-3" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <a href="#inicio" className="flex items-center gap-3">
          <img
            src={henkLogo}
            alt="Henk Store"
            className="w-12 h-12 rounded-full object-cover"
          />
          <span className="font-display text-xl font-semibold tracking-wide">
            HENK
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-300 uppercase tracking-wider"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <a
            href="https://www.instagram.com/henk_store/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors duration-300"
          >
            <Instagram className="w-5 h-5" />
          </a>
          <Button variant="gold-outline" size="sm">
            <MapPin className="w-4 h-4" />
            Visite-nos
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-foreground"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 glass-effect py-6 animate-slide-up">
          <nav className="flex flex-col items-center gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-300 uppercase tracking-wider"
              >
                {link.label}
              </a>
            ))}
            <div className="flex items-center gap-4 mt-4">
              <a
                href="https://www.instagram.com/henk_store/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <Button variant="gold-outline" size="sm">
                <MapPin className="w-4 h-4" />
                Visite-nos
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
