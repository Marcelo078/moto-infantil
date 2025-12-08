import { Button } from "@/components/ui/button";
import { ArrowRight, Gift, Shield, Star } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-hero relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 right-0 w-96 h-96 bg-energy-yellow rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-fun-pink rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 bg-energy-yellow/20 border border-energy-yellow/30 rounded-full px-4 py-2 text-sm text-primary-foreground">
            <Gift className="h-4 w-4 text-energy-yellow" />
            <span>Ofertas Especiais no Mercado Livre</span>
          </div>

          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-black text-primary-foreground leading-tight">
            Encontre a <span className="text-energy-yellow">Moto Elétrica</span> Perfeita
            para Seu Filho
          </h2>

          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Confira nossa seleção das <strong>melhores motos elétricas infantis</strong> com 
            os <strong>melhores preços</strong> e <strong>entrega garantida</strong> pelo Mercado Livre.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button variant="cta" size="xl" asChild>
              <a href="https://mercadolivre.com/sec/18DzYmU" target="_blank" rel="noopener noreferrer">
                Ver Melhores Ofertas
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>

          {/* Trust Elements */}
          <div className="flex flex-wrap justify-center gap-8 pt-8">
            <div className="flex items-center gap-2 text-primary-foreground/80">
              <Shield className="h-6 w-6 text-energy-yellow" />
              <div className="text-left">
                <span className="block text-sm font-bold">Compra Segura</span>
                <span className="block text-xs opacity-70">Garantia Mercado Livre</span>
              </div>
            </div>
            <div className="flex items-center gap-2 text-primary-foreground/80">
              <Star className="h-6 w-6 text-energy-yellow fill-energy-yellow" />
              <div className="text-left">
                <span className="block text-sm font-bold">Produtos Avaliados</span>
                <span className="block text-xs opacity-70">Análises Detalhadas</span>
              </div>
            </div>
            <div className="flex items-center gap-2 text-primary-foreground/80">
              <Gift className="h-6 w-6 text-energy-yellow" />
              <div className="text-left">
                <span className="block text-sm font-bold">Melhores Preços</span>
                <span className="block text-xs opacity-70">Ofertas Exclusivas</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
