import { HelmetProvider } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import ProductCarousel from "@/components/ProductCarousel";
import CategoryButtons from "@/components/CategoryButtons";
import FeaturedArticles from "@/components/FeaturedArticles";
import CTASection from "@/components/CTASection";
import SEOHead from "@/components/SEOHead";
import JsonLd from "@/components/JsonLd";

const Index = () => {
  return (
    <HelmetProvider>
      <SEOHead
        title="Melhores Motos Elétricas Infantis 2025 - Análises e Comparativos"
        description="Descubra as melhores motos elétricas infantis do Brasil. Análises detalhadas, comparativos de preços e avaliações de marcas como BMW, Triumph e Aprilia. Melhores ofertas!"
        keywords="moto elétrica infantil, moto infantil elétrica, melhor moto elétrica criança, moto elétrica 12v, moto elétrica 6v, moto elétrica infantil feminina, quadriciclo elétrico infantil"
        canonicalUrl={window.location.origin}
      />
      <JsonLd type="website" />
      
      <div className="min-h-screen bg-background">
        <Header />
        
        <main>
          {/* Hero Section */}
          <HeroSection />

          {/* Featured Products - 12V */}
          <ProductCarousel
            title="Motos Elétricas 12V - Alta Potência"
            subtitle="Melhores modelos para crianças de 3 a 8 anos"
            filterFn={(product) => product.voltage === "12V"}
            limit={8}
          />

          {/* Featured Products - 6V */}
          <div className="bg-muted/30">
            <ProductCarousel
              title="Motos Elétricas 6V - Iniciantes"
              subtitle="Perfeitas para os primeiros passeios dos pequenos"
              filterFn={(product) => product.voltage === "6V"}
              limit={8}
            />
          </div>

          {/* Category Buttons */}
          <CategoryButtons />

          {/* Featured Articles */}
          <FeaturedArticles />

          {/* CTA Section */}
          <CTASection />
        </main>

        <Footer />
      </div>
    </HelmetProvider>
  );
};

export default Index;
