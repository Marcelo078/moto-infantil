import { HelmetProvider } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Heart, Shield, Star, Users } from "lucide-react";

const Sobre = () => {
  return (
    <HelmetProvider>
      <SEOHead
        title="Sobre Nós"
        description="Conheça o Melhores Motos Infantil Elétrica, o maior portal de análises e comparativos de motos elétricas infantis do Brasil."
        keywords="sobre melhores motos infantil elétrica, quem somos, portal motos infantis"
      />
      
      <div className="min-h-screen bg-background">
        <Header />
        
        <main>
          {/* Hero */}
          <section className="bg-gradient-hero py-16 md:py-24">
            <div className="container">
              <div className="max-w-3xl mx-auto text-center">
                <h1 className="font-heading text-4xl md:text-5xl font-black text-primary-foreground mb-6">
                  Sobre o <span className="text-energy-yellow">Melhores Motos</span> Infantil Elétrica
                </h1>
                <p className="text-lg text-primary-foreground/80">
                  Somos o principal portal brasileiro dedicado a ajudar pais a encontrarem 
                  a <strong>moto elétrica infantil</strong> perfeita para seus filhos.
                </p>
              </div>
            </div>
          </section>

          {/* Mission, Vision, Values */}
          <section className="py-16 container">
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center border-border/50">
                <CardContent className="pt-8 pb-6">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <Target className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-foreground mb-3">
                    Nossa Missão
                  </h3>
                  <p className="text-muted-foreground">
                    Facilitar a escolha da <strong>melhor moto elétrica infantil</strong> através 
                    de análises detalhadas, comparativos justos e informações confiáveis.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center border-border/50">
                <CardContent className="pt-8 pb-6">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-energy-yellow/10 flex items-center justify-center">
                    <Eye className="h-8 w-8 text-energy-orange" />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-foreground mb-3">
                    Nossa Visão
                  </h3>
                  <p className="text-muted-foreground">
                    Ser a referência número um em análises de <strong>veículos elétricos infantis</strong> 
                    no Brasil, ajudando milhares de famílias.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center border-border/50">
                <CardContent className="pt-8 pb-6">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-fun-pink/10 flex items-center justify-center">
                    <Heart className="h-8 w-8 text-fun-pink" />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-foreground mb-3">
                    Nossos Valores
                  </h3>
                  <p className="text-muted-foreground">
                    Transparência, honestidade e compromisso com a qualidade. 
                    Nossas análises são imparciais e focadas no melhor para seu filho.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* What We Do */}
          <section className="py-16 bg-muted/30">
            <div className="container">
              <div className="max-w-3xl mx-auto">
                <h2 className="font-heading text-3xl font-bold text-foreground text-center mb-8">
                  O Que Fazemos
                </h2>
                
                <div className="space-y-6 text-foreground/80">
                  <p>
                    No <strong>Melhores Motos Infantil Elétrica</strong>, analisamos dezenas de 
                    modelos de motos elétricas infantis disponíveis no mercado brasileiro, 
                    incluindo marcas renomadas como <strong>BMW</strong>, <strong>Triumph</strong>, 
                    <strong>Aprilia</strong> e <strong>Importway</strong>.
                  </p>

                  <p>
                    Nossa equipe pesquisa especificações técnicas, avalia comentários de 
                    consumidores e compara preços para trazer a você as informações mais 
                    completas e atualizadas sobre cada produto.
                  </p>

                  <h3 className="font-heading text-xl font-bold text-foreground pt-4">
                    Nosso Conteúdo Inclui:
                  </h3>
                  
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>Análises Detalhadas:</strong> Reviews completos de cada modelo 
                      com prós, contras e recomendações
                    </li>
                    <li>
                      <strong>Comparativos:</strong> Tabelas comparativas para facilitar sua decisão
                    </li>
                    <li>
                      <strong>Guias de Compra:</strong> Dicas para escolher a moto ideal por idade, 
                      voltagem e orçamento
                    </li>
                    <li>
                      <strong>Rankings:</strong> Listas das melhores opções em cada categoria
                    </li>
                    <li>
                      <strong>Ofertas:</strong> Links para as melhores promoções no Mercado Livre
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Trust Indicators */}
          <section className="py-16 container">
            <h2 className="font-heading text-3xl font-bold text-foreground text-center mb-12">
              Por Que Confiar em Nós
            </h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-14 h-14 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center">
                  <Shield className="h-7 w-7 text-primary" />
                </div>
                <h4 className="font-heading font-bold text-foreground mb-1">Análises Imparciais</h4>
                <p className="text-sm text-muted-foreground">
                  Avaliações honestas sem favorecimento de marcas
                </p>
              </div>

              <div className="text-center">
                <div className="w-14 h-14 mx-auto mb-3 rounded-full bg-energy-yellow/10 flex items-center justify-center">
                  <Star className="h-7 w-7 text-energy-orange" />
                </div>
                <h4 className="font-heading font-bold text-foreground mb-1">+29 Produtos</h4>
                <p className="text-sm text-muted-foreground">
                  Ampla cobertura dos principais modelos do mercado
                </p>
              </div>

              <div className="text-center">
                <div className="w-14 h-14 mx-auto mb-3 rounded-full bg-success/10 flex items-center justify-center">
                  <Users className="h-7 w-7 text-success" />
                </div>
                <h4 className="font-heading font-bold text-foreground mb-1">Milhares de Leitores</h4>
                <p className="text-sm text-muted-foreground">
                  Ajudamos famílias em todo o Brasil
                </p>
              </div>

              <div className="text-center">
                <div className="w-14 h-14 mx-auto mb-3 rounded-full bg-fun-pink/10 flex items-center justify-center">
                  <Heart className="h-7 w-7 text-fun-pink" />
                </div>
                <h4 className="font-heading font-bold text-foreground mb-1">Foco na Segurança</h4>
                <p className="text-sm text-muted-foreground">
                  Priorizamos produtos seguros para crianças
                </p>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="py-16 bg-gradient-hero">
            <div className="container text-center">
              <h2 className="font-heading text-3xl font-bold text-primary-foreground mb-4">
                Encontre a Moto Perfeita
              </h2>
              <p className="text-primary-foreground/80 mb-6 max-w-xl mx-auto">
                Explore nossa seleção completa de motos elétricas infantis e encontre 
                a opção ideal para seu filho.
              </p>
              <Button variant="cta" size="lg" asChild>
                <a href="https://mercadolivre.com/sec/18DzYmU" target="_blank" rel="noopener noreferrer">
                  Ver Produtos
                </a>
              </Button>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </HelmetProvider>
  );
};

export default Sobre;
