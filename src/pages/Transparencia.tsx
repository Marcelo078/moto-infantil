import { HelmetProvider } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { AlertTriangle, DollarSign, FileText, Scale, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Transparencia = () => {
  return (
    <HelmetProvider>
      <SEOHead
        title="Transparência e Isenção de Responsabilidade"
        description="Saiba como o Melhores Motos Infantil Elétrica é monetizado e conheça nossa política de transparência e isenção de responsabilidade."
        noIndex={true}
      />
      
      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="container py-12 md:py-16">
          <article className="max-w-4xl mx-auto">
            <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
              Transparência e Isenção de Responsabilidade
            </h1>

            <p className="text-muted-foreground text-center mb-12">
              Última atualização: {new Date().toLocaleDateString('pt-BR')}
            </p>

            {/* Key Points */}
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <Card className="border-energy-yellow/30 bg-energy-yellow/5">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-energy-yellow/20">
                      <DollarSign className="h-6 w-6 text-energy-orange" />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-foreground mb-2">
                        Somos Afiliados
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Este site contém links de afiliados e pode receber comissões 
                        por compras realizadas através deles.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-primary/30 bg-primary/5">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-primary/20">
                      <Shield className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-foreground mb-2">
                        Análises Imparciais
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        As comissões não influenciam nossas análises ou recomendações. 
                        Nosso compromisso é com você.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Detailed Sections */}
            <div className="space-y-10">
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <DollarSign className="h-6 w-6 text-energy-orange" />
                  <h2 className="font-heading text-2xl font-bold text-foreground">
                    Como Somos Remunerados
                  </h2>
                </div>
                <div className="pl-9 space-y-4 text-foreground/80">
                  <p>
                    O <strong>Melhores Motos Infantil Elétrica</strong> é um site de conteúdo 
                    que participa de <strong>programas de afiliados</strong>. Isso significa que:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      Incluímos links para produtos em plataformas como <strong>Mercado Livre</strong>
                    </li>
                    <li>
                      Quando você clica nesses links e realiza uma compra, podemos receber uma 
                      pequena comissão
                    </li>
                    <li>
                      Essa comissão é paga pela plataforma (não por você) e <strong>não aumenta 
                      o preço</strong> do produto
                    </li>
                    <li>
                      Essa é a única forma de monetização do site
                    </li>
                  </ul>
                </div>
              </section>

              <section>
                <div className="flex items-center gap-3 mb-4">
                  <Scale className="h-6 w-6 text-primary" />
                  <h2 className="font-heading text-2xl font-bold text-foreground">
                    Nossa Política Editorial
                  </h2>
                </div>
                <div className="pl-9 space-y-4 text-foreground/80">
                  <p>
                    Nosso compromisso principal é com a qualidade e honestidade das informações:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      As análises são baseadas em <strong>pesquisas objetivas</strong>, 
                      especificações técnicas e avaliações de consumidores
                    </li>
                    <li>
                      <strong>Não recebemos produtos</strong> de fabricantes ou vendedores 
                      em troca de avaliações positivas
                    </li>
                    <li>
                      Indicamos <strong>pontos positivos e negativos</strong> de cada produto
                    </li>
                    <li>
                      As comissões de afiliados <strong>não influenciam</strong> nossas 
                      recomendações ou rankings
                    </li>
                  </ul>
                </div>
              </section>

              <section>
                <div className="flex items-center gap-3 mb-4">
                  <AlertTriangle className="h-6 w-6 text-destructive" />
                  <h2 className="font-heading text-2xl font-bold text-foreground">
                    Isenção de Responsabilidade
                  </h2>
                </div>
                <div className="pl-9 space-y-4 text-foreground/80">
                  <p>
                    É importante que você saiba:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>Não vendemos produtos</strong> - apenas indicamos links para 
                      compra em lojas parceiras
                    </li>
                    <li>
                      <strong>Não temos controle</strong> sobre preços, disponibilidade, 
                      qualidade ou entrega dos produtos
                    </li>
                    <li>
                      As informações podem <strong>estar desatualizadas</strong> - sempre 
                      verifique com o vendedor antes de comprar
                    </li>
                    <li>
                      <strong>Não nos responsabilizamos</strong> por problemas com produtos 
                      adquiridos através dos nossos links
                    </li>
                    <li>
                      <strong>Não garantimos</strong> a precisão de todas as especificações 
                      técnicas listadas
                    </li>
                  </ul>
                  <p className="mt-4 p-4 bg-destructive/10 rounded-lg border border-destructive/20">
                    <strong>Importante:</strong> Antes de qualquer compra, verifique as 
                    especificações do produto, leia avaliações de outros compradores e 
                    certifique-se de que o produto atende às suas necessidades.
                  </p>
                </div>
              </section>

              <section>
                <div className="flex items-center gap-3 mb-4">
                  <FileText className="h-6 w-6 text-success" />
                  <h2 className="font-heading text-2xl font-bold text-foreground">
                    Fontes das Informações
                  </h2>
                </div>
                <div className="pl-9 space-y-4 text-foreground/80">
                  <p>
                    As informações presentes neste site são obtidas através de:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Especificações técnicas fornecidas pelos fabricantes</li>
                    <li>Descrições de produtos em lojas online</li>
                    <li>Avaliações e comentários de consumidores</li>
                    <li>Pesquisas em sites especializados</li>
                    <li>Experiência e conhecimento da nossa equipe</li>
                  </ul>
                </div>
              </section>

              <section>
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="h-6 w-6 text-primary" />
                  <h2 className="font-heading text-2xl font-bold text-foreground">
                    Segurança das Crianças
                  </h2>
                </div>
                <div className="pl-9 space-y-4 text-foreground/80">
                  <p>
                    A segurança dos pequenos é prioridade. Recomendamos sempre:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      Supervisionar crianças durante o uso de motos elétricas
                    </li>
                    <li>
                      Usar equipamentos de proteção como capacete
                    </li>
                    <li>
                      Respeitar as faixas etárias e de peso indicadas pelo fabricante
                    </li>
                    <li>
                      Verificar se o produto possui certificações de segurança
                    </li>
                    <li>
                      Usar as motos apenas em áreas seguras e planas
                    </li>
                  </ul>
                </div>
              </section>
            </div>

            {/* Final Note */}
            <div className="mt-12 p-6 bg-muted rounded-lg text-center">
              <p className="text-muted-foreground">
                Agradecemos sua confiança! Se tiver dúvidas sobre nossa política de 
                transparência, entre em contato conosco.
              </p>
            </div>
          </article>
        </main>

        <Footer />
      </div>
    </HelmetProvider>
  );
};

export default Transparencia;
