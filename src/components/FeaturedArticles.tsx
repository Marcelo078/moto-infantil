import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, ArrowRight, TrendingUp } from "lucide-react";

const articles = [
  {
    id: 1,
    title: "Guia Completo: Como Escolher a Melhor Moto Elétrica Infantil em 2025",
    excerpt: "Descubra todos os critérios importantes para escolher a moto elétrica perfeita para seu filho, desde voltagem até segurança.",
    slug: "guia-como-escolher-moto-eletrica-infantil",
    category: "Guias",
    readTime: "8 min",
    trending: true,
  },
  {
    id: 2,
    title: "Top 10 Melhores Motos Elétricas Infantis 12V: Comparativo Atualizado",
    excerpt: "Análise detalhada das melhores motos elétricas 12V do mercado brasileiro com comparativos de preço e qualidade.",
    slug: "top-10-melhores-motos-eletricas-infantis-12v",
    category: "Rankings",
    readTime: "12 min",
    trending: true,
  },
  {
    id: 3,
    title: "Moto Elétrica Infantil 6V vs 12V: Qual a Diferença e Qual Escolher?",
    excerpt: "Entenda as diferenças entre motos 6V e 12V e saiba qual é a melhor opção para a idade do seu filho.",
    slug: "moto-eletrica-6v-vs-12v-diferenca",
    category: "Comparativos",
    readTime: "6 min",
    trending: false,
  },
  {
    id: 4,
    title: "Melhores Marcas de Moto Elétrica Infantil: BMW, Triumph, Aprilia e Mais",
    excerpt: "Conheça as melhores marcas licenciadas e suas réplicas de motos elétricas para crianças.",
    slug: "melhores-marcas-moto-eletrica-infantil",
    category: "Marcas",
    readTime: "10 min",
    trending: false,
  },
];

const FeaturedArticles = () => {
  return (
    <section className="py-12 md:py-16">
      <div className="container">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
              Artigos e Guias
            </h2>
            <p className="text-muted-foreground mt-1">
              Conteúdo exclusivo para ajudar na sua decisão
            </p>
          </div>
          <Button variant="ghost" asChild className="hidden md:flex">
            <Link to="/artigos">
              Ver Todos
              <ArrowRight className="h-4 w-4 ml-2" />
            </Link>
          </Button>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {articles.map((article, index) => (
            <Card
              key={article.id}
              className="group overflow-hidden border-border/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300"
            >
              <CardContent className="p-0">
                <div className="flex flex-col sm:flex-row">
                  {/* Image */}
                  <div className="sm:w-1/3 aspect-video sm:aspect-square bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                    <span className="text-4xl">📝</span>
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
                      
                      <h3 className="font-heading font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2 mb-2">
                        {article.title}
                      </h3>
                      
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

        <div className="mt-6 text-center md:hidden">
          <Button variant="outline" asChild>
            <Link to="/artigos">
              Ver Todos os Artigos
              <ArrowRight className="h-4 w-4 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedArticles;
