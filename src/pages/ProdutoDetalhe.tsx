import { HelmetProvider } from "react-helmet-async";
import { useParams, Link, Navigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import JsonLd from "@/components/JsonLd";
import CategoryButtons from "@/components/CategoryButtons";
import ProductCard from "@/components/ProductCard";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { products } from "@/data/products";
import { 
  ArrowLeft, 
  ArrowRight, 
  ExternalLink, 
  CheckCircle2, 
  Zap, 
  Shield, 
  Star,
  Clock,
  Package,
  Truck
} from "lucide-react";

const ProdutoDetalhe = () => {
  const { slug } = useParams<{ slug: string }>();
  
  const product = products.find(p => p.slug === slug);

  if (!product) {
    return <Navigate to="/produtos" replace />;
  }

  // Produtos relacionados (mesma voltagem, excluindo o atual)
  const relatedProducts = products
    .filter(p => p.voltage === product.voltage && p.id !== product.id)
    .slice(0, 4);

  const jsonLdData = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.longDescription,
    brand: {
      "@type": "Brand",
      name: product.name.includes("BMW") ? "BMW" : 
            product.name.includes("Triumph") ? "Triumph" : 
            product.name.includes("Aprilia") ? "Aprilia" : 
            product.name.includes("Importway") ? "Importway" : "Generic"
    },
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      url: product.affiliateLink,
      priceCurrency: "BRL"
    }
  };

  return (
    <HelmetProvider>
      <SEOHead
        title={`${product.name} | Melhores Preços e Ofertas`}
        description={`${product.shortDescription}. Confira as melhores ofertas de ${product.name}. ${product.keywords.slice(0, 3).join(", ")}.`}
        keywords={product.keywords.join(", ")}
      />
      <JsonLd 
        type="product" 
        name={product.name}
        description={product.shortDescription}
        brand={product.name.includes("BMW") ? "BMW" : product.name.includes("Triumph") ? "Triumph" : "Importway"}
      />
      
      <div className="min-h-screen bg-background">
        <Header />
        
        <main>
          {/* Breadcrumb */}
          <div className="bg-muted/30 border-b border-border">
            <div className="container py-3">
              <nav className="flex items-center gap-2 text-sm text-muted-foreground">
                <Link to="/" className="hover:text-primary transition-colors">Início</Link>
                <span>/</span>
                <Link to="/produtos" className="hover:text-primary transition-colors">Produtos</Link>
                <span>/</span>
                <span className="text-foreground truncate">{product.name}</span>
              </nav>
            </div>
          </div>

          {/* Product Hero */}
          <section className="py-8 md:py-12">
            <div className="container">
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
                {/* Product Image */}
                <div className="relative">
                  <div className="aspect-square bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl flex items-center justify-center border border-border">
                    <div className="text-center p-8">
                      <span className="text-8xl mb-4 block">🏍️</span>
                      <Badge className="bg-primary text-primary-foreground">
                        {product.voltage}
                      </Badge>
                    </div>
                  </div>
                  
                  {/* Badges */}
                  <div className="absolute top-4 left-4 flex flex-col gap-2">
                    <Badge className="bg-energy-yellow text-primary-foreground shadow-lg">
                      <Zap className="h-3 w-3 mr-1" />
                      {product.voltage}
                    </Badge>
                    {product.name.toLowerCase().includes("licenciad") && (
                      <Badge className="bg-fun-pink text-accent-foreground shadow-lg">
                        <Star className="h-3 w-3 mr-1" />
                        Licenciada
                      </Badge>
                    )}
                  </div>
                </div>

                {/* Product Info */}
                <div>
                  <div className="mb-4">
                    <Badge variant="outline" className="mb-3">
                      {product.ageRange}
                    </Badge>
                    <h1 className="font-heading text-2xl md:text-3xl lg:text-4xl font-black text-foreground mb-4">
                      {product.name}
                    </h1>
                    <p className="text-lg text-muted-foreground">
                      {product.shortDescription}
                    </p>
                  </div>

                  {/* Quick Info */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center p-3 bg-muted/30 rounded-lg">
                      <Zap className="h-5 w-5 text-primary mx-auto mb-1" />
                      <span className="text-xs text-muted-foreground block">Voltagem</span>
                      <span className="font-bold text-foreground">{product.voltage}</span>
                    </div>
                    <div className="text-center p-3 bg-muted/30 rounded-lg">
                      <Package className="h-5 w-5 text-primary mx-auto mb-1" />
                      <span className="text-xs text-muted-foreground block">Peso Máx.</span>
                      <span className="font-bold text-foreground">{product.maxWeight}</span>
                    </div>
                    <div className="text-center p-3 bg-muted/30 rounded-lg">
                      <Clock className="h-5 w-5 text-primary mx-auto mb-1" />
                      <span className="text-xs text-muted-foreground block">Idade</span>
                      <span className="font-bold text-foreground">{product.ageRange}</span>
                    </div>
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 mb-8">
                    <Button variant="cta" size="lg" className="flex-1" asChild>
                      <a href={product.affiliateLink} target="_blank" rel="noopener noreferrer">
                        Comprar no Mercado Livre
                        <ExternalLink className="h-5 w-5 ml-2" />
                      </a>
                    </Button>
                    <Button variant="outline" size="lg" asChild>
                      <Link to="/produtos">
                        Ver Mais Produtos
                      </Link>
                    </Button>
                  </div>

                  {/* Trust Badges */}
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Shield className="h-4 w-4 text-primary" />
                      Compra Protegida
                    </span>
                    <span className="flex items-center gap-1">
                      <Truck className="h-4 w-4 text-primary" />
                      Frete Grátis*
                    </span>
                    <span className="flex items-center gap-1">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      Garantia de Fábrica
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Product Description */}
          <section className="py-8 md:py-12 bg-muted/30 border-y border-border">
            <div className="container">
              <div className="max-w-4xl">
                <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                  Sobre o Produto
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                  {product.longDescription}
                </p>

                <h3 className="font-heading text-xl font-bold text-foreground mb-4">
                  Principais Características
                </h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {product.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2 text-muted-foreground">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Keywords Section */}
          <section className="py-8">
            <div className="container">
              <h3 className="font-heading text-lg font-bold text-foreground mb-4">
                Palavras-chave Relacionadas
              </h3>
              <div className="flex flex-wrap gap-2">
                {product.keywords.map((keyword, index) => (
                  <Badge key={index} variant="secondary" className="py-1.5 px-3">
                    <strong>{keyword}</strong>
                  </Badge>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-12">
            <div className="container">
              <Card className="bg-gradient-hero border-none overflow-hidden">
                <CardContent className="p-8 md:p-12 text-center">
                  <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
                    Garanta a Diversão do Seu Filho!
                  </h2>
                  <p className="text-primary-foreground/80 mb-6 max-w-2xl mx-auto">
                    <strong>{product.name}</strong> com os <strong>melhores preços</strong> e 
                    <strong> melhores ofertas</strong> do Mercado Livre. Compra segura e entrega rápida!
                  </p>
                  <Button variant="secondary" size="lg" asChild>
                    <a href={product.affiliateLink} target="_blank" rel="noopener noreferrer">
                      Ver Oferta Agora
                      <ArrowRight className="h-5 w-5 ml-2" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <section className="py-12 bg-muted/30 border-t border-border">
              <div className="container">
                <h2 className="font-heading text-2xl font-bold text-foreground mb-6">
                  Produtos Relacionados
                </h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {relatedProducts.map((relProduct, index) => (
                    <ProductCard key={relProduct.id} product={relProduct} index={index} />
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* Back Button */}
          <div className="container py-8">
            <Button variant="ghost" asChild>
              <Link to="/produtos">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Voltar para Produtos
              </Link>
            </Button>
          </div>

          {/* Category Buttons */}
          <CategoryButtons />
        </main>

        <Footer />
      </div>
    </HelmetProvider>
  );
};

export default ProdutoDetalhe;
