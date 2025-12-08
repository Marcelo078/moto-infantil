import { HelmetProvider } from "react-helmet-async";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import ProductCard from "@/components/ProductCard";
import CategoryButtons from "@/components/CategoryButtons";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { products } from "@/data/products";
import { Filter, SortAsc } from "lucide-react";

const Produtos = () => {
  const [voltageFilter, setVoltageFilter] = useState<string | null>(null);

  const filteredProducts = voltageFilter
    ? products.filter(p => p.voltage === voltageFilter)
    : products;

  return (
    <HelmetProvider>
      <SEOHead
        title="Todos os Produtos - Motos Elétricas Infantis"
        description="Confira nossa seleção completa de motos elétricas infantis. Modelos 6V e 12V das melhores marcas. Encontre a moto perfeita para seu filho!"
        keywords="motos elétricas infantis, catálogo motos infantis, moto elétrica 6v, moto elétrica 12v, quadriciclo elétrico"
      />
      
      <div className="min-h-screen bg-background">
        <Header />
        
        <main>
          {/* Hero */}
          <section className="bg-gradient-hero py-12 md:py-16">
            <div className="container">
              <div className="max-w-3xl">
                <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-black text-primary-foreground mb-4">
                  Catálogo Completo de <span className="text-energy-yellow">Motos Elétricas Infantis</span>
                </h1>
                <p className="text-lg text-primary-foreground/80">
                  Explore nossa seleção de +29 modelos com as <strong>melhores marcas</strong>, 
                  <strong>melhores preços</strong> e <strong>melhores ofertas</strong> do mercado.
                </p>
              </div>
            </div>
          </section>

          {/* Filters */}
          <section className="py-6 border-b border-border bg-card sticky top-16 z-40">
            <div className="container">
              <div className="flex flex-wrap items-center gap-4">
                <div className="flex items-center gap-2">
                  <Filter className="h-5 w-5 text-muted-foreground" />
                  <span className="text-sm font-medium text-foreground">Filtrar:</span>
                </div>

                <div className="flex gap-2">
                  <Button
                    variant={voltageFilter === null ? "default" : "outline"}
                    size="sm"
                    onClick={() => setVoltageFilter(null)}
                  >
                    Todos ({products.length})
                  </Button>
                  <Button
                    variant={voltageFilter === "12V" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setVoltageFilter("12V")}
                  >
                    12V ({products.filter(p => p.voltage === "12V").length})
                  </Button>
                  <Button
                    variant={voltageFilter === "6V" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setVoltageFilter("6V")}
                  >
                    6V ({products.filter(p => p.voltage === "6V").length})
                  </Button>
                </div>

                <div className="ml-auto hidden sm:flex items-center gap-2 text-sm text-muted-foreground">
                  <SortAsc className="h-4 w-4" />
                  <span>{filteredProducts.length} produtos encontrados</span>
                </div>
              </div>
            </div>
          </section>

          {/* Products Grid */}
          <section className="py-12 container">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))}
            </div>
          </section>

          {/* Keywords Section */}
          <section className="py-12 bg-muted/30">
            <div className="container">
              <h2 className="font-heading text-2xl font-bold text-foreground mb-6 text-center">
                Palavras-chave Populares
              </h2>
              <div className="flex flex-wrap justify-center gap-2">
                {[
                  "Moto Elétrica 5 a 7 anos",
                  "Moto elétrica infantil grande",
                  "Moto Elétrica infantil feminina",
                  "Moto elétrica infantil 3 anos",
                  "Moto elétrica infantil 12v",
                  "Moto Elétrica infantil 10 anos",
                  "Melhores Preços",
                  "Melhores Ofertas",
                  "Melhores Marcas",
                  "Quadriciclo elétrico infantil",
                  "Triciclo elétrico infantil",
                  "BMW infantil elétrica",
                  "Triumph infantil",
                  "Aprilia infantil"
                ].map((keyword) => (
                  <Badge 
                    key={keyword} 
                    variant="secondary" 
                    className="text-sm py-2 px-4"
                  >
                    <strong>{keyword}</strong>
                  </Badge>
                ))}
              </div>
            </div>
          </section>

          {/* Category Buttons */}
          <CategoryButtons />
        </main>

        <Footer />
      </div>
    </HelmetProvider>
  );
};

export default Produtos;
