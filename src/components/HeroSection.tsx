import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Shield, Truck } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-hero py-16 md:py-24">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-72 h-72 bg-energy-yellow rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-fun-pink rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left space-y-6 animate-slide-up">
            <div className="inline-flex items-center gap-2 bg-energy-yellow/20 border border-energy-yellow/30 rounded-full px-4 py-2 text-sm text-primary-foreground">
              <Star className="h-4 w-4 fill-energy-yellow text-energy-yellow" />
              <span>Melhores Análises de 2025</span>
            </div>

            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-black text-primary-foreground leading-tight">
              As <span className="text-energy-yellow">Melhores Motos</span>{" "}
              <span className="text-fun-pink">Infantil Elétrica</span> do Brasil
            </h1>

            <p className="text-lg md:text-xl text-primary-foreground/80 max-w-xl mx-auto lg:mx-0">
              Descubra as <strong>melhores motos elétricas infantis</strong> com análises detalhadas, 
              comparativos de preços e avaliações de <strong>marcas premium</strong> como BMW, Triumph e Aprilia.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="cta" size="xl" asChild>
                <a href="https://mercadolivre.com/sec/18DzYmU" target="_blank" rel="noopener noreferrer">
                  Ver Melhores Ofertas
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button variant="outline" size="xl" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
                Guia de Compra
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-6 justify-center lg:justify-start pt-4">
              <div className="flex items-center gap-2 text-primary-foreground/80">
                <Shield className="h-5 w-5 text-energy-yellow" />
                <span className="text-sm">Produtos Verificados</span>
              </div>
              <div className="flex items-center gap-2 text-primary-foreground/80">
                <Truck className="h-5 w-5 text-energy-yellow" />
                <span className="text-sm">Entrega Rápida</span>
              </div>
              <div className="flex items-center gap-2 text-primary-foreground/80">
                <Star className="h-5 w-5 text-energy-yellow fill-energy-yellow" />
                <span className="text-sm">+1000 Avaliações</span>
              </div>
            </div>
          </div>

          {/* Hero Image Placeholder */}
          <div className="relative hidden lg:block">
            <div className="relative animate-float">
              <div className="absolute inset-0 bg-gradient-cta rounded-3xl blur-2xl opacity-30 scale-95" />
              <div className="relative bg-gradient-to-br from-card to-muted rounded-3xl p-8 shadow-2xl">
                <div className="aspect-square flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="w-32 h-32 mx-auto bg-gradient-hero rounded-full flex items-center justify-center">
                      <span className="text-6xl">🏍️</span>
                    </div>
                    <h3 className="font-heading text-xl font-bold text-foreground">
                      +29 Modelos Analisados
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Comparativos detalhados das melhores marcas
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
