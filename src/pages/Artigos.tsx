import { HelmetProvider } from "react-helmet-async";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, ArrowRight, TrendingUp, BookOpen } from "lucide-react";

export const articles = [
  {
    id: 1,
    title: "Guia Completo: Como Escolher a Melhor Moto Elétrica Infantil em 2025",
    excerpt: "Descubra todos os critérios importantes para escolher a moto elétrica perfeita para seu filho, desde voltagem até segurança.",
    slug: "guia-como-escolher-moto-eletrica-infantil",
    category: "Guias",
    readTime: "8 min",
    trending: true,
    date: "2025-12-08",
  },
  {
    id: 2,
    title: "Top 10 Melhores Motos Elétricas Infantis 12V: Comparativo Atualizado",
    excerpt: "Análise detalhada das melhores motos elétricas 12V do mercado brasileiro com comparativos de preço e qualidade.",
    slug: "top-10-melhores-motos-eletricas-infantis-12v",
    category: "Rankings",
    readTime: "12 min",
    trending: true,
    date: "2025-12-07",
  },
  {
    id: 3,
    title: "Moto Elétrica Infantil 6V vs 12V: Qual a Diferença e Qual Escolher?",
    excerpt: "Entenda as diferenças entre motos 6V e 12V e saiba qual é a melhor opção para a idade do seu filho.",
    slug: "moto-eletrica-6v-vs-12v-diferenca",
    category: "Comparativos",
    readTime: "6 min",
    trending: false,
    date: "2025-12-06",
  },
  {
    id: 4,
    title: "Melhores Marcas de Moto Elétrica Infantil: BMW, Triumph, Aprilia e Mais",
    excerpt: "Conheça as melhores marcas licenciadas e suas réplicas de motos elétricas para crianças.",
    slug: "melhores-marcas-moto-eletrica-infantil",
    category: "Marcas",
    readTime: "10 min",
    trending: false,
    date: "2025-12-05",
  },
];

const Artigos = () => {
  return (
    <HelmetProvider>
      <SEOHead
        title="Artigos e Guias - Motos Elétricas Infantis | Melhores Motos"
        description="Confira nossos artigos e guias completos sobre motos elétricas infantis. Dicas de compra, comparativos, melhores marcas e muito mais para ajudar na sua decisão."
        keywords="artigos motos elétricas infantis, guia compra moto infantil, comparativo motos 6v 12v, melhores marcas motos infantis"
      />
      
      <div className="min-h-screen bg-background">
        <Header />
        
        <main>
          {/* Hero Section */}
          <section className="bg-gradient-hero py-12 md:py-16">
            <div className="container">
              <div className="max-w-3xl">
                <div className="flex items-center gap-2 mb-4">
                  <BookOpen className="h-8 w-8 text-energy-yellow" />
                  <Badge className="bg-energy-yellow text-primary-foreground">
                    Conteúdo Exclusivo
                  </Badge>
                </div>
                <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-black text-primary-foreground mb-4">
                  Artigos e <span className="text-energy-yellow">Guias Completos</span>
                </h1>
                <p className="text-lg text-primary-foreground/80">
                  Conteúdo especializado para ajudar você a escolher a <strong>melhor moto elétrica infantil</strong>. 
                  Guias de compra, comparativos detalhados e análises de <strong>melhores marcas</strong>.
                </p>
              </div>
            </div>
          </section>

          {/* Articles Grid */}
          <section className="py-12 md:py-16">
            <div className="container">
              <div className="grid md:grid-cols-2 gap-6">
                {articles.map((article) => (
                  <Card
                    key={article.id}
                    className="group overflow-hidden border-border/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300"
                  >
                    <CardContent className="p-0">
                      <div className="flex flex-col sm:flex-row">
                        {/* Image */}
                        <div className="sm:w-1/3 aspect-video sm:aspect-square bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                          <span className="text-5xl">📝</span>
                        </div>

                        {/* Content */}
                        <div className="sm:w-2/3 p-4 sm:p-5 flex flex-col justify-between">
                          <div>
                            <div className="flex items-center gap-2 mb-2">
                              <Badge variant="secondary" className="text-xs">
                                {article.category}
                              </Badge>
                              {article.trending && (
                                <Badge className="bg-fun-pink text-accent-foreground text-xs">
                                  <TrendingUp className="h-3 w-3 mr-1" />
                                  Em Alta
                                </Badge>
                              )}
                            </div>
                            
                            <h2 className="font-heading font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2 mb-2">
                              {article.title}
                            </h2>
                            
                            <p className="text-sm text-muted-foreground line-clamp-2">
                              {article.excerpt}
                            </p>
                          </div>

                          <div className="flex items-center justify-between mt-4">
                            <span className="text-xs text-muted-foreground flex items-center gap-1">
                              <Clock className="h-3 w-3" />
                              {article.readTime} de leitura
                            </span>
                            <Button variant="link" size="sm" className="p-0 h-auto" asChild>
                              <Link to={`/artigo/${article.slug}`}>
                                Ler Artigo
                                <ArrowRight className="h-3 w-3 ml-1" />
                              </Link>
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-12 bg-gradient-hero">
            <div className="container text-center">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
                Pronto para Escolher a Moto Perfeita?
              </h2>
              <p className="text-primary-foreground/80 mb-6 max-w-2xl mx-auto">
                Confira nossa seleção completa de <strong>motos elétricas infantis</strong> com os <strong>melhores preços</strong> e <strong>melhores ofertas</strong> do Mercado Livre.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button variant="secondary" size="lg" asChild>
                  <Link to="/produtos">
                    Ver Todos os Produtos
                  </Link>
                </Button>
                <Button variant="cta" size="lg" asChild>
                  <a href="https://mercadolivre.com/sec/18DzYmU" target="_blank" rel="noopener noreferrer">
                    Comprar no Mercado Livre
                    <ArrowRight className="h-5 w-5 ml-2" />
                  </a>
                </Button>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </HelmetProvider>
  );
};

export default Artigos;
