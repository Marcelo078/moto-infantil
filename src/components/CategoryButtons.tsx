import { Button } from "@/components/ui/button";
import { affiliateCategories } from "@/data/products";
import { ExternalLink } from "lucide-react";

const CategoryButtons = () => {
  return (
    <section className="py-12 bg-muted/50">
      <div className="container">
        <div className="text-center mb-8">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
            Explore Outras Categorias
          </h2>
          <p className="text-muted-foreground mt-2">
            Encontre os <strong>melhores produtos</strong> em diversas categorias no Mercado Livre
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          {affiliateCategories.map((category) => (
            <Button
              key={category.name}
              variant="outline"
              className="group hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
              asChild
            >
              <a href={category.link} target="_blank" rel="noopener noreferrer">
                {category.name}
                <ExternalLink className="h-3 w-3 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryButtons;
