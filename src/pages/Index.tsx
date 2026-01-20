import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Brands from "@/components/Brands";
import Collection from "@/components/Collection";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Brands />
        <Collection />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
