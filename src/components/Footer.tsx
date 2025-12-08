import { Link } from "react-router-dom";
import { Zap, Facebook, Instagram, Youtube, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      {/* Main Footer */}
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-cta">
                <Zap className="h-6 w-6 text-secondary-foreground" />
              </div>
              <div>
                <span className="font-heading text-lg font-bold text-background">
                  Melhores Motos
                </span>
                <span className="block text-xs text-background/70 -mt-1">
                  Infantil Elétrica
                </span>
              </div>
            </Link>
            <p className="text-sm text-background/70 leading-relaxed">
              O melhor portal de análises e comparativos de <strong>motos elétricas infantis</strong>. 
              Encontre a moto perfeita para seu filho com nossas avaliações detalhadas.
            </p>
            <div className="flex gap-3">
              <a href="#" className="p-2 rounded-lg bg-background/10 hover:bg-background/20 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-background/10 hover:bg-background/20 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-background/10 hover:bg-background/20 transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-heading font-bold text-background">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/produtos" className="text-sm text-background/70 hover:text-energy-yellow transition-colors">
                  Todos os Produtos
                </Link>
              </li>
              <li>
                <Link to="/artigos" className="text-sm text-background/70 hover:text-energy-yellow transition-colors">
                  Artigos e Reviews
                </Link>
              </li>
              <li>
                <a href="https://mercadolivre.com/sec/18DzYmU" target="_blank" rel="noopener noreferrer" className="text-sm text-background/70 hover:text-energy-yellow transition-colors">
                  Melhores Ofertas
                </a>
              </li>
              <li>
                <Link to="/guia-compra" className="text-sm text-background/70 hover:text-energy-yellow transition-colors">
                  Guia de Compra
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h4 className="font-heading font-bold text-background">Categorias</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/categoria/moto-eletrica-12v" className="text-sm text-background/70 hover:text-energy-yellow transition-colors">
                  Motos Elétricas 12V
                </Link>
              </li>
              <li>
                <Link to="/categoria/moto-eletrica-6v" className="text-sm text-background/70 hover:text-energy-yellow transition-colors">
                  Motos Elétricas 6V
                </Link>
              </li>
              <li>
                <Link to="/categoria/quadriciclo" className="text-sm text-background/70 hover:text-energy-yellow transition-colors">
                  Quadriciclos
                </Link>
              </li>
              <li>
                <Link to="/categoria/triciclo" className="text-sm text-background/70 hover:text-energy-yellow transition-colors">
                  Triciclos
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h4 className="font-heading font-bold text-background">Institucional</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/sobre" className="text-sm text-background/70 hover:text-energy-yellow transition-colors">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link to="/politica-privacidade" className="text-sm text-background/70 hover:text-energy-yellow transition-colors">
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <Link to="/termos-uso" className="text-sm text-background/70 hover:text-energy-yellow transition-colors">
                  Termos de Uso
                </Link>
              </li>
              <li>
                <Link to="/transparencia" className="text-sm text-background/70 hover:text-energy-yellow transition-colors">
                  Transparência
                </Link>
              </li>
              <li>
                <Link to="/contato" className="text-sm text-background/70 hover:text-energy-yellow transition-colors flex items-center gap-1">
                  <Mail className="h-4 w-4" /> Contato
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/10">
        <div className="container py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-background/60 text-center md:text-left">
            © {new Date().getFullYear()} Melhores Motos Infantil Elétrica. Todos os direitos reservados.
          </p>
          <p className="text-xs text-background/50 text-center md:text-right max-w-md">
            Este site contém links de afiliados. Podemos receber comissões por compras realizadas através dos links.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
