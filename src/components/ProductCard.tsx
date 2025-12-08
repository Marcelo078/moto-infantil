import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, Info, Zap, Battery, Weight } from "lucide-react";
import { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
  index?: number;
}

const ProductCard = ({ product, index = 0 }: ProductCardProps) => {
  return (
    <Card 
      className="group overflow-hidden border-border/50 bg-card hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <CardContent className="p-0">
        {/* Image Placeholder */}
        <div className="relative aspect-[4/3] bg-gradient-to-br from-muted to-muted/50 overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center space-y-2">
              <span className="text-5xl">🏍️</span>
              <p className="text-xs text-muted-foreground px-4 font-medium">
                {product.name.split(' ').slice(0, 3).join(' ')}
              </p>
            </div>
          </div>
          
          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-2">
            <Badge className="bg-primary text-primary-foreground">
              <Zap className="h-3 w-3 mr-1" />
              {product.voltage}
            </Badge>
            {product.voltage === "12V" && (
              <Badge className="bg-energy-orange text-secondary-foreground">
                Alta Potência
              </Badge>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="p-4 space-y-3">
          <h3 className="font-heading font-bold text-foreground line-clamp-2 group-hover:text-primary transition-colors">
            {product.name}
          </h3>

          <p className="text-sm text-muted-foreground line-clamp-2">
            {product.shortDescription}
          </p>

          {/* Specs */}
          <div className="flex flex-wrap gap-2 text-xs">
            <span className="inline-flex items-center gap-1 bg-muted px-2 py-1 rounded-md">
              <Battery className="h-3 w-3 text-primary" />
              {product.voltage}
            </span>
            <span className="inline-flex items-center gap-1 bg-muted px-2 py-1 rounded-md">
              <Weight className="h-3 w-3 text-primary" />
              {product.maxWeight}
            </span>
            <span className="inline-flex items-center gap-1 bg-muted px-2 py-1 rounded-md">
              👶 {product.ageRange}
            </span>
          </div>

          {/* Keywords */}
          <div className="flex flex-wrap gap-1">
            {product.keywords.slice(0, 2).map((keyword, i) => (
              <span key={i} className="text-xs text-muted-foreground bg-muted/50 px-2 py-0.5 rounded">
                <strong>{keyword}</strong>
              </span>
            ))}
          </div>

          {/* Actions */}
          <div className="flex gap-2 pt-2">
            <Button variant="outline" size="sm" className="flex-1" asChild>
              <Link to={`/produto/${product.slug}`}>
                <Info className="h-4 w-4 mr-1" />
                Saiba Mais
              </Link>
            </Button>
            <Button variant="mercadolivre" size="sm" className="flex-1" asChild>
              <a href={product.affiliateLink} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4 mr-1" />
                Comprar
              </a>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
