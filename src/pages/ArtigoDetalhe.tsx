import { HelmetProvider } from "react-helmet-async";
import { useParams, Link, Navigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import JsonLd from "@/components/JsonLd";
import CategoryButtons from "@/components/CategoryButtons";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, Calendar, ArrowRight, ArrowLeft, Share2, Bookmark, CheckCircle2, AlertCircle, Zap, Shield, Star } from "lucide-react";
import { articles } from "./Artigos";

// Conteúdo completo dos artigos
const articleContent: Record<string, {
  content: React.ReactNode;
  metaDescription: string;
  keywords: string[];
}> = {
  "guia-como-escolher-moto-eletrica-infantil": {
    metaDescription: "Guia completo 2025: Como escolher a melhor moto elétrica infantil. Voltagem, idade, segurança, marcas e onde comprar. Dicas de especialistas!",
    keywords: ["como escolher moto elétrica infantil", "guia moto elétrica criança", "moto elétrica infantil 2025", "dicas comprar moto infantil"],
    content: (
      <>
        <p className="text-lg text-muted-foreground mb-6">
          Escolher a <strong>moto elétrica infantil</strong> ideal para seu filho pode parecer uma tarefa complicada com tantas opções disponíveis no mercado. 
          Neste guia completo, vamos abordar todos os critérios essenciais para você fazer a melhor escolha em 2025, garantindo segurança, diversão e 
          um excelente custo-benefício.
        </p>

        <div className="bg-muted/30 border border-border rounded-lg p-6 mb-8">
          <h2 className="font-heading text-xl font-bold text-foreground mb-4 flex items-center gap-2">
            <Zap className="h-5 w-5 text-primary" />
            O Que Você Vai Aprender Neste Guia
          </h2>
          <ul className="grid md:grid-cols-2 gap-2">
            <li className="flex items-center gap-2 text-muted-foreground">
              <CheckCircle2 className="h-4 w-4 text-primary" />
              Diferenças entre voltagens (6V vs 12V)
            </li>
            <li className="flex items-center gap-2 text-muted-foreground">
              <CheckCircle2 className="h-4 w-4 text-primary" />
              Como escolher pela idade da criança
            </li>
            <li className="flex items-center gap-2 text-muted-foreground">
              <CheckCircle2 className="h-4 w-4 text-primary" />
              Critérios de segurança essenciais
            </li>
            <li className="flex items-center gap-2 text-muted-foreground">
              <CheckCircle2 className="h-4 w-4 text-primary" />
              Melhores marcas do mercado
            </li>
            <li className="flex items-center gap-2 text-muted-foreground">
              <CheckCircle2 className="h-4 w-4 text-primary" />
              Onde comprar com segurança
            </li>
            <li className="flex items-center gap-2 text-muted-foreground">
              <CheckCircle2 className="h-4 w-4 text-primary" />
              Dicas de manutenção e cuidados
            </li>
          </ul>
        </div>

        <h2 className="font-heading text-2xl font-bold text-foreground mb-4" id="voltagem">
          1. Entendendo as Voltagens: 6V vs 12V
        </h2>
        
        <p className="text-muted-foreground mb-4">
          A <strong>voltagem da bateria</strong> é um dos fatores mais importantes na escolha de uma <strong>moto elétrica infantil</strong>. 
          Ela determina diretamente a potência, velocidade e para qual faixa etária o veículo é mais adequado.
        </p>

        <div className="grid md:grid-cols-2 gap-4 mb-8">
          <Card className="border-primary/20">
            <CardContent className="p-5">
              <h3 className="font-heading font-bold text-lg text-foreground mb-3 flex items-center gap-2">
                <Badge variant="secondary">6V</Badge>
                Motos Elétricas 6 Volts
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span><strong>Idade recomendada:</strong> 2 a 4 anos</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span><strong>Velocidade:</strong> 2 a 3 km/h</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span><strong>Peso suportado:</strong> Até 25kg</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span><strong>Ideal para:</strong> Primeiros passeios, ambientes internos</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-primary/20">
            <CardContent className="p-5">
              <h3 className="font-heading font-bold text-lg text-foreground mb-3 flex items-center gap-2">
                <Badge className="bg-primary">12V</Badge>
                Motos Elétricas 12 Volts
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span><strong>Idade recomendada:</strong> 3 a 8 anos</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span><strong>Velocidade:</strong> 4 a 8 km/h</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span><strong>Peso suportado:</strong> Até 35kg</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span><strong>Ideal para:</strong> Áreas externas, gramados, calçadas</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="bg-energy-yellow/10 border border-energy-yellow/30 rounded-lg p-5 mb-8">
          <h4 className="font-bold text-foreground mb-2 flex items-center gap-2">
            <AlertCircle className="h-5 w-5 text-energy-yellow" />
            Dica de Especialista
          </h4>
          <p className="text-muted-foreground text-sm">
            Se você está em dúvida entre 6V e 12V, considere que muitas <strong>motos elétricas 12V</strong> possuem controle de velocidade, 
            permitindo começar em velocidades mais baixas e aumentar conforme a criança ganha confiança. Isso torna a moto mais durável e 
            adaptável ao crescimento do seu filho.
          </p>
        </div>

        <h2 className="font-heading text-2xl font-bold text-foreground mb-4" id="idade">
          2. Como Escolher pela Idade da Criança
        </h2>

        <p className="text-muted-foreground mb-4">
          A idade é um fator crucial, mas não deve ser o único critério. Considere também o peso, altura e habilidade motora da criança.
        </p>

        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-border text-sm">
            <thead>
              <tr className="bg-muted">
                <th className="border border-border p-3 text-left font-bold">Idade</th>
                <th className="border border-border p-3 text-left font-bold">Voltagem Ideal</th>
                <th className="border border-border p-3 text-left font-bold">Tipo Recomendado</th>
                <th className="border border-border p-3 text-left font-bold">Características</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-border p-3"><strong>1-2 anos</strong></td>
                <td className="border border-border p-3">6V com empurrador</td>
                <td className="border border-border p-3">Triciclo ou quadriciclo</td>
                <td className="border border-border p-3">Controle parental, proteção solar</td>
              </tr>
              <tr className="bg-muted/30">
                <td className="border border-border p-3"><strong>2-4 anos</strong></td>
                <td className="border border-border p-3">6V</td>
                <td className="border border-border p-3">Triciclo ou moto simples</td>
                <td className="border border-border p-3">Velocidade baixa, fácil operação</td>
              </tr>
              <tr>
                <td className="border border-border p-3"><strong>4-6 anos</strong></td>
                <td className="border border-border p-3">6V ou 12V inicial</td>
                <td className="border border-border p-3">Moto elétrica padrão</td>
                <td className="border border-border p-3">Mais recursos, design atrativo</td>
              </tr>
              <tr className="bg-muted/30">
                <td className="border border-border p-3"><strong>6-8 anos</strong></td>
                <td className="border border-border p-3">12V</td>
                <td className="border border-border p-3">Moto esportiva ou licenciada</td>
                <td className="border border-border p-3">Maior velocidade, autonomia</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="font-heading text-2xl font-bold text-foreground mb-4" id="seguranca">
          3. Critérios de Segurança Essenciais
        </h2>

        <p className="text-muted-foreground mb-4">
          A segurança deve ser sempre a prioridade número um. Confira os pontos essenciais:
        </p>

        <div className="grid md:grid-cols-2 gap-4 mb-8">
          {[
            { icon: Shield, title: "Estabilidade", desc: "Prefira modelos com rodas de apoio laterais ou quadriciclos para iniciantes" },
            { icon: Zap, title: "Velocidade Controlada", desc: "Busque modelos com controle de velocidade ou velocidades ajustáveis" },
            { icon: CheckCircle2, title: "Materiais de Qualidade", desc: "Verifique se os materiais são atóxicos e resistentes a impactos" },
            { icon: Star, title: "Certificações", desc: "Procure por produtos com certificação INMETRO" },
          ].map((item, index) => (
            <div key={index} className="flex gap-3 p-4 bg-muted/30 rounded-lg">
              <item.icon className="h-6 w-6 text-primary flex-shrink-0" />
              <div>
                <h4 className="font-bold text-foreground">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <h2 className="font-heading text-2xl font-bold text-foreground mb-4" id="marcas">
          4. Melhores Marcas de Motos Elétricas Infantis
        </h2>

        <p className="text-muted-foreground mb-4">
          Algumas marcas se destacam pela qualidade, durabilidade e suporte ao cliente:
        </p>

        <div className="space-y-4 mb-8">
          <div className="p-4 border border-border rounded-lg">
            <h4 className="font-bold text-foreground mb-2">🏆 Importway</h4>
            <p className="text-sm text-muted-foreground">
              Líder no mercado brasileiro, oferece ampla variedade de modelos com excelente custo-benefício. 
              Destaque para as linhas BW002, BW044 e BW129.
            </p>
          </div>
          <div className="p-4 border border-border rounded-lg">
            <h4 className="font-bold text-foreground mb-2">🏍️ Motos Licenciadas (BMW, Triumph, Aprilia)</h4>
            <p className="text-sm text-muted-foreground">
              Réplicas oficiais de marcas famosas com acabamento premium e detalhes autênticos. 
              Ideais para quem busca qualidade superior.
            </p>
          </div>
          <div className="p-4 border border-border rounded-lg">
            <h4 className="font-bold text-foreground mb-2">🎯 Brinqway e Zippy Toys</h4>
            <p className="text-sm text-muted-foreground">
              Opções mais acessíveis com boa qualidade. Perfeitas para primeiros passeios e crianças menores.
            </p>
          </div>
        </div>

        <h2 className="font-heading text-2xl font-bold text-foreground mb-4" id="onde-comprar">
          5. Onde Comprar com Segurança
        </h2>

        <p className="text-muted-foreground mb-4">
          Recomendamos sempre comprar em plataformas confiáveis que ofereçam garantia e proteção ao consumidor. 
          O <strong>Mercado Livre</strong> é nossa principal recomendação por oferecer:
        </p>

        <ul className="space-y-2 mb-8">
          <li className="flex items-center gap-2 text-muted-foreground">
            <CheckCircle2 className="h-5 w-5 text-primary" />
            <span>Proteção de compra garantida</span>
          </li>
          <li className="flex items-center gap-2 text-muted-foreground">
            <CheckCircle2 className="h-5 w-5 text-primary" />
            <span>Frete grátis em muitos produtos</span>
          </li>
          <li className="flex items-center gap-2 text-muted-foreground">
            <CheckCircle2 className="h-5 w-5 text-primary" />
            <span>Avaliações reais de compradores</span>
          </li>
          <li className="flex items-center gap-2 text-muted-foreground">
            <CheckCircle2 className="h-5 w-5 text-primary" />
            <span>Parcelamento facilitado</span>
          </li>
        </ul>

        <div className="bg-gradient-hero rounded-xl p-6 text-center mb-8">
          <h3 className="font-heading text-xl font-bold text-primary-foreground mb-3">
            Pronto para Escolher a Moto Perfeita?
          </h3>
          <p className="text-primary-foreground/80 mb-4">
            Confira nossa seleção com os <strong>melhores preços</strong> e <strong>melhores ofertas</strong>!
          </p>
          <Button variant="secondary" size="lg" asChild>
            <a href="https://mercadolivre.com/sec/18DzYmU" target="_blank" rel="noopener noreferrer">
              Ver Ofertas no Mercado Livre
              <ArrowRight className="h-5 w-5 ml-2" />
            </a>
          </Button>
        </div>

        <h2 className="font-heading text-2xl font-bold text-foreground mb-4" id="conclusao">
          Conclusão
        </h2>

        <p className="text-muted-foreground mb-4">
          Escolher a <strong>melhor moto elétrica infantil</strong> envolve considerar a idade, peso e habilidades da criança, 
          além de fatores como voltagem, segurança e qualidade do produto. Com as informações deste guia, você está preparado 
          para fazer uma escolha inteligente que proporcionará muita diversão e alegria para seu filho.
        </p>

        <p className="text-muted-foreground">
          Lembre-se: a segurança sempre vem em primeiro lugar. Invista em equipamentos de proteção como capacete, joelheiras e 
          cotoveleiras, e sempre supervisione as brincadeiras, especialmente em áreas externas.
        </p>
      </>
    ),
  },
  "top-10-melhores-motos-eletricas-infantis-12v": {
    metaDescription: "Top 10 melhores motos elétricas infantis 12V em 2025. Comparativo completo com BMW, Triumph, Aprilia. Melhores preços e ofertas!",
    keywords: ["melhores motos elétricas 12v", "ranking motos infantis", "comparativo motos elétricas", "moto infantil 12v melhor"],
    content: (
      <>
        <p className="text-lg text-muted-foreground mb-6">
          As <strong>motos elétricas infantis 12V</strong> são as mais procuradas por pais que desejam oferecer uma experiência de pilotagem 
          mais realista para seus filhos. Com maior potência, velocidade e autonomia, essas motos são ideais para crianças de 3 a 8 anos.
          Confira nosso <strong>ranking atualizado de 2025</strong> com as 10 melhores opções do mercado!
        </p>

        <div className="bg-muted/30 border border-border rounded-lg p-6 mb-8">
          <h2 className="font-heading text-xl font-bold text-foreground mb-4">
            📊 Critérios de Avaliação
          </h2>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div className="flex items-center gap-2">
              <Star className="h-4 w-4 text-energy-yellow" />
              <span>Qualidade e Durabilidade</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="h-4 w-4 text-energy-yellow" />
              <span>Custo-Benefício</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="h-4 w-4 text-energy-yellow" />
              <span>Avaliações de Compradores</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="h-4 w-4 text-energy-yellow" />
              <span>Recursos e Funcionalidades</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="h-4 w-4 text-energy-yellow" />
              <span>Segurança</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="h-4 w-4 text-energy-yellow" />
              <span>Design e Acabamento</span>
            </div>
          </div>
        </div>

        {/* Top 10 List */}
        <div className="space-y-6 mb-8">
          {[
            { pos: 1, name: "BMW S1000RR 12V 3 Velocidades", badge: "Melhor Geral", desc: "Réplica oficial da superbike BMW com 3 velocidades ajustáveis. Acabamento premium, rodas emborrachadas e design autêntico. Perfeita para crianças que amam velocidade com segurança." },
            { pos: 2, name: "Triumph Rocket 3GT 12V Licenciada", badge: "Premium", desc: "Moto icônica britânica em versão infantil. Carregador bivolt, acabamento de alta qualidade e design exclusivo. Ideal para pequenos pilotos exigentes." },
            { pos: 3, name: "Mini Motinha Esportiva 12V com Som e LED", badge: "Mais Vendida", desc: "Design esportivo arrojado com sistema de som realista e iluminação LED impressionante. Excelente custo-benefício e muito popular entre os pais." },
            { pos: 4, name: "BMW F850 GS 12V Licenciada", badge: "Adventure", desc: "Réplica da famosa trail da BMW. Perfeita para quem busca estilo off-road com qualidade de marca licenciada." },
            { pos: 5, name: "Aprilia RSV4 12V Importway", badge: "Esportiva", desc: "Superbike italiana em miniatura. Design esportivo azul com alta qualidade Importway e potência de 12V." },
            { pos: 6, name: "Aprilia Dorsoduro 900 12V", badge: "Supermoto", desc: "Réplica da famosa supermoto com luz e som. Experiência premium de pilotagem para pequenos aventureiros." },
            { pos: 7, name: "Triumph Rocket 3GT Azul 12V", badge: "Exclusiva", desc: "Versão azul exclusiva da icônica Triumph. Licenciamento oficial garante detalhes autênticos." },
            { pos: 8, name: "Caminhonete Importway BW006 12V", badge: "4 Rodas", desc: "Para quem prefere 4 rodas! Design robusto de picape com acabamento premium." },
            { pos: 9, name: "Mini Moto Cross 12V", badge: "Off-Road", desc: "Visual de moto de trilha para aventuras no jardim. Estilo off-road com estabilidade." },
            { pos: 10, name: "Quadriciclo Elétrico 12V", badge: "Seguro", desc: "Máxima estabilidade com 4 rodas. Perfeito para iniciantes que precisam de mais segurança." },
          ].map((item) => (
            <div key={item.pos} className="border border-border rounded-lg p-5 hover:border-primary/50 transition-colors">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center">
                  <span className="font-heading font-black text-primary-foreground text-xl">
                    {item.pos}
                  </span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-heading font-bold text-foreground">{item.name}</h3>
                    <Badge variant="secondary" className="text-xs">{item.badge}</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
          Por Que Escolher uma Moto 12V?
        </h2>

        <p className="text-muted-foreground mb-4">
          As <strong>motos elétricas 12V</strong> oferecem diversas vantagens em relação às versões 6V:
        </p>

        <ul className="space-y-2 mb-8">
          <li className="flex items-start gap-2 text-muted-foreground">
            <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
            <span><strong>Maior velocidade:</strong> Podem atingir de 4 a 8 km/h, proporcionando mais emoção</span>
          </li>
          <li className="flex items-start gap-2 text-muted-foreground">
            <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
            <span><strong>Mais autonomia:</strong> Bateria maior significa mais tempo de diversão</span>
          </li>
          <li className="flex items-start gap-2 text-muted-foreground">
            <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
            <span><strong>Suportam mais peso:</strong> Geralmente até 35kg, acompanhando o crescimento da criança</span>
          </li>
          <li className="flex items-start gap-2 text-muted-foreground">
            <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
            <span><strong>Melhores terrenos:</strong> Funcionam bem em grama, calçadas e pisos irregulares</span>
          </li>
        </ul>

        <div className="bg-gradient-hero rounded-xl p-6 text-center">
          <h3 className="font-heading text-xl font-bold text-primary-foreground mb-3">
            Encontre as Melhores Ofertas!
          </h3>
          <p className="text-primary-foreground/80 mb-4">
            Todos os modelos deste ranking com <strong>melhores preços</strong> no Mercado Livre
          </p>
          <Button variant="secondary" size="lg" asChild>
            <a href="https://mercadolivre.com/sec/18DzYmU" target="_blank" rel="noopener noreferrer">
              Ver Ofertas Agora
              <ArrowRight className="h-5 w-5 ml-2" />
            </a>
          </Button>
        </div>
      </>
    ),
  },
  "moto-eletrica-6v-vs-12v-diferenca": {
    metaDescription: "Moto elétrica 6V vs 12V: qual a diferença? Comparativo completo para ajudar você a escolher a melhor opção para seu filho. Guia 2025!",
    keywords: ["moto elétrica 6v vs 12v", "diferença voltagem moto infantil", "qual moto elétrica escolher", "6v ou 12v criança"],
    content: (
      <>
        <p className="text-lg text-muted-foreground mb-6">
          Uma das dúvidas mais comuns entre pais que buscam uma <strong>moto elétrica infantil</strong> é: 
          devo escolher um modelo <strong>6V ou 12V</strong>? Neste artigo, vamos explicar todas as diferenças 
          para você fazer a escolha certa para seu filho.
        </p>

        <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
          Entendendo a Voltagem
        </h2>

        <p className="text-muted-foreground mb-6">
          A voltagem da bateria está diretamente relacionada à <strong>potência do motor</strong>. Quanto maior 
          a voltagem, mais potente é o veículo e, consequentemente, maior sua velocidade e capacidade de subir 
          pequenas inclinações.
        </p>

        <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
          Comparativo Completo: 6V vs 12V
        </h2>

        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-border text-sm">
            <thead>
              <tr className="bg-muted">
                <th className="border border-border p-3 text-left font-bold">Característica</th>
                <th className="border border-border p-3 text-center font-bold bg-secondary/20">6 Volts</th>
                <th className="border border-border p-3 text-center font-bold bg-primary/20">12 Volts</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-border p-3 font-medium">Velocidade Máxima</td>
                <td className="border border-border p-3 text-center">2-3 km/h</td>
                <td className="border border-border p-3 text-center">4-8 km/h</td>
              </tr>
              <tr className="bg-muted/30">
                <td className="border border-border p-3 font-medium">Idade Recomendada</td>
                <td className="border border-border p-3 text-center">2-4 anos</td>
                <td className="border border-border p-3 text-center">3-8 anos</td>
              </tr>
              <tr>
                <td className="border border-border p-3 font-medium">Peso Suportado</td>
                <td className="border border-border p-3 text-center">Até 25kg</td>
                <td className="border border-border p-3 text-center">Até 35kg</td>
              </tr>
              <tr className="bg-muted/30">
                <td className="border border-border p-3 font-medium">Autonomia Média</td>
                <td className="border border-border p-3 text-center">45-60 min</td>
                <td className="border border-border p-3 text-center">60-90 min</td>
              </tr>
              <tr>
                <td className="border border-border p-3 font-medium">Terreno</td>
                <td className="border border-border p-3 text-center">Pisos lisos</td>
                <td className="border border-border p-3 text-center">Grama, calçada</td>
              </tr>
              <tr className="bg-muted/30">
                <td className="border border-border p-3 font-medium">Tempo de Carga</td>
                <td className="border border-border p-3 text-center">6-8 horas</td>
                <td className="border border-border p-3 text-center">8-12 horas</td>
              </tr>
              <tr>
                <td className="border border-border p-3 font-medium">Faixa de Preço</td>
                <td className="border border-border p-3 text-center">R$ 300 - R$ 800</td>
                <td className="border border-border p-3 text-center">R$ 600 - R$ 2.500</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
          Quando Escolher 6V?
        </h2>

        <div className="bg-secondary/10 border border-secondary/30 rounded-lg p-5 mb-6">
          <ul className="space-y-2">
            <li className="flex items-start gap-2 text-muted-foreground">
              <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <span>Crianças de 2 a 4 anos (iniciantes)</span>
            </li>
            <li className="flex items-start gap-2 text-muted-foreground">
              <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <span>Uso predominante em ambientes internos</span>
            </li>
            <li className="flex items-start gap-2 text-muted-foreground">
              <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <span>Primeira moto elétrica da criança</span>
            </li>
            <li className="flex items-start gap-2 text-muted-foreground">
              <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <span>Orçamento mais limitado</span>
            </li>
          </ul>
        </div>

        <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
          Quando Escolher 12V?
        </h2>

        <div className="bg-primary/10 border border-primary/30 rounded-lg p-5 mb-8">
          <ul className="space-y-2">
            <li className="flex items-start gap-2 text-muted-foreground">
              <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <span>Crianças de 3 a 8 anos (mais experientes)</span>
            </li>
            <li className="flex items-start gap-2 text-muted-foreground">
              <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <span>Uso em áreas externas (jardim, parque)</span>
            </li>
            <li className="flex items-start gap-2 text-muted-foreground">
              <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <span>Deseja um produto mais durável que acompanhe o crescimento</span>
            </li>
            <li className="flex items-start gap-2 text-muted-foreground">
              <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <span>Busca modelos licenciados e com mais recursos</span>
            </li>
          </ul>
        </div>

        <div className="bg-energy-yellow/10 border border-energy-yellow/30 rounded-lg p-5 mb-8">
          <h4 className="font-bold text-foreground mb-2 flex items-center gap-2">
            <AlertCircle className="h-5 w-5 text-energy-yellow" />
            Nossa Recomendação
          </h4>
          <p className="text-muted-foreground text-sm">
            Se você está em dúvida e a criança tem 3 anos ou mais, recomendamos optar pela <strong>moto 12V</strong>. 
            Muitos modelos possuem controle de velocidade, permitindo começar devagar e aumentar conforme a criança 
            ganha confiança. Assim, a moto acompanha o crescimento por mais tempo.
          </p>
        </div>

        <div className="bg-gradient-hero rounded-xl p-6 text-center">
          <h3 className="font-heading text-xl font-bold text-primary-foreground mb-3">
            Confira Nossa Seleção Completa
          </h3>
          <p className="text-primary-foreground/80 mb-4">
            Modelos 6V e 12V com os <strong>melhores preços</strong> do mercado
          </p>
          <Button variant="secondary" size="lg" asChild>
            <a href="https://mercadolivre.com/sec/18DzYmU" target="_blank" rel="noopener noreferrer">
              Ver Ofertas
              <ArrowRight className="h-5 w-5 ml-2" />
            </a>
          </Button>
        </div>
      </>
    ),
  },
  "melhores-marcas-moto-eletrica-infantil": {
    metaDescription: "Conheça as melhores marcas de motos elétricas infantis: BMW, Triumph, Aprilia, Importway. Análise completa de qualidade e procedência!",
    keywords: ["melhores marcas moto elétrica infantil", "moto BMW infantil", "moto Triumph criança", "Importway motos"],
    content: (
      <>
        <p className="text-lg text-muted-foreground mb-6">
          Conhecer as <strong>melhores marcas de motos elétricas infantis</strong> é fundamental para fazer uma compra segura e satisfatória. 
          Neste artigo, analisamos as principais marcas do mercado brasileiro, avaliando qualidade, procedência, durabilidade e custo-benefício.
        </p>

        <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
          🏆 Marcas Licenciadas Premium
        </h2>

        <p className="text-muted-foreground mb-6">
          As marcas licenciadas são réplicas oficiais de motocicletas famosas, com autorização das montadoras originais. 
          Isso garante design autêntico, materiais de qualidade e acabamento superior.
        </p>

        <div className="space-y-6 mb-8">
          <Card className="border-primary/20">
            <CardContent className="p-5">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-gradient-hero rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-3xl">🏍️</span>
                </div>
                <div>
                  <h3 className="font-heading font-bold text-lg text-foreground mb-2">BMW Motorrad</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    A BMW é sinônimo de qualidade alemã. As réplicas infantis mantêm o padrão premium da marca, 
                    com modelos como a <strong>S1000RR</strong> e <strong>F850 GS</strong> sendo as mais procuradas.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Qualidade Premium</Badge>
                    <Badge variant="secondary">Design Autêntico</Badge>
                    <Badge variant="secondary">12V</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-primary/20">
            <CardContent className="p-5">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-gradient-hero rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-3xl">🇬🇧</span>
                </div>
                <div>
                  <h3 className="font-heading font-bold text-lg text-foreground mb-2">Triumph</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Marca britânica tradicional com mais de 100 anos de história. A <strong>Rocket 3GT</strong> 
                    é o modelo mais popular, disponível em diferentes cores e com acabamento excepcional.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Tradição Britânica</Badge>
                    <Badge variant="secondary">Exclusividade</Badge>
                    <Badge variant="secondary">12V</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-primary/20">
            <CardContent className="p-5">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-gradient-hero rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-3xl">🇮🇹</span>
                </div>
                <div>
                  <h3 className="font-heading font-bold text-lg text-foreground mb-2">Aprilia</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Marca italiana conhecida pelas supermotos esportivas. Os modelos <strong>RSV4</strong> e 
                    <strong>Dorsoduro 900</strong> trazem o DNA italiano de performance para as crianças.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Design Italiano</Badge>
                    <Badge variant="secondary">Esportivas</Badge>
                    <Badge variant="secondary">12V</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
          🏭 Marcas Nacionais de Qualidade
        </h2>

        <div className="space-y-6 mb-8">
          <Card>
            <CardContent className="p-5">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-muted rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-3xl">⭐</span>
                </div>
                <div>
                  <h3 className="font-heading font-bold text-lg text-foreground mb-2">Importway</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    <strong>Líder no mercado brasileiro</strong> de veículos elétricos infantis. Oferece ampla 
                    variedade de modelos com excelente custo-benefício. Destaque para as linhas BW002, BW044 e BW129.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Melhor Custo-Benefício</Badge>
                    <Badge variant="outline">Variedade</Badge>
                    <Badge variant="outline">6V e 12V</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-5">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-muted rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-3xl">🎯</span>
                </div>
                <div>
                  <h3 className="font-heading font-bold text-lg text-foreground mb-2">Brinqway / Zippy Toys</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Opções mais acessíveis com boa qualidade. Perfeitas para primeiros passeios e crianças menores. 
                    Modelos simples mas funcionais e seguros.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Acessível</Badge>
                    <Badge variant="outline">Iniciantes</Badge>
                    <Badge variant="outline">6V</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
          📊 Comparativo de Marcas
        </h2>

        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-border text-sm">
            <thead>
              <tr className="bg-muted">
                <th className="border border-border p-3 text-left font-bold">Marca</th>
                <th className="border border-border p-3 text-center font-bold">Qualidade</th>
                <th className="border border-border p-3 text-center font-bold">Preço</th>
                <th className="border border-border p-3 text-center font-bold">Durabilidade</th>
                <th className="border border-border p-3 text-center font-bold">Design</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-border p-3 font-medium">BMW</td>
                <td className="border border-border p-3 text-center">⭐⭐⭐⭐⭐</td>
                <td className="border border-border p-3 text-center">$$$$</td>
                <td className="border border-border p-3 text-center">⭐⭐⭐⭐⭐</td>
                <td className="border border-border p-3 text-center">⭐⭐⭐⭐⭐</td>
              </tr>
              <tr className="bg-muted/30">
                <td className="border border-border p-3 font-medium">Triumph</td>
                <td className="border border-border p-3 text-center">⭐⭐⭐⭐⭐</td>
                <td className="border border-border p-3 text-center">$$$$</td>
                <td className="border border-border p-3 text-center">⭐⭐⭐⭐⭐</td>
                <td className="border border-border p-3 text-center">⭐⭐⭐⭐⭐</td>
              </tr>
              <tr>
                <td className="border border-border p-3 font-medium">Aprilia</td>
                <td className="border border-border p-3 text-center">⭐⭐⭐⭐⭐</td>
                <td className="border border-border p-3 text-center">$$$</td>
                <td className="border border-border p-3 text-center">⭐⭐⭐⭐</td>
                <td className="border border-border p-3 text-center">⭐⭐⭐⭐⭐</td>
              </tr>
              <tr className="bg-muted/30">
                <td className="border border-border p-3 font-medium">Importway</td>
                <td className="border border-border p-3 text-center">⭐⭐⭐⭐</td>
                <td className="border border-border p-3 text-center">$$</td>
                <td className="border border-border p-3 text-center">⭐⭐⭐⭐</td>
                <td className="border border-border p-3 text-center">⭐⭐⭐</td>
              </tr>
              <tr>
                <td className="border border-border p-3 font-medium">Brinqway</td>
                <td className="border border-border p-3 text-center">⭐⭐⭐</td>
                <td className="border border-border p-3 text-center">$</td>
                <td className="border border-border p-3 text-center">⭐⭐⭐</td>
                <td className="border border-border p-3 text-center">⭐⭐⭐</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-gradient-hero rounded-xl p-6 text-center">
          <h3 className="font-heading text-xl font-bold text-primary-foreground mb-3">
            Encontre Todas as Marcas
          </h3>
          <p className="text-primary-foreground/80 mb-4">
            BMW, Triumph, Aprilia, Importway e muito mais com os <strong>melhores preços</strong>
          </p>
          <Button variant="secondary" size="lg" asChild>
            <a href="https://mercadolivre.com/sec/18DzYmU" target="_blank" rel="noopener noreferrer">
              Ver Ofertas no Mercado Livre
              <ArrowRight className="h-5 w-5 ml-2" />
            </a>
          </Button>
        </div>
      </>
    ),
  },
};

const ArtigoDetalhe = () => {
  const { slug } = useParams<{ slug: string }>();
  
  const article = articles.find(a => a.slug === slug);
  const content = slug ? articleContent[slug] : null;

  if (!article || !content) {
    return <Navigate to="/artigos" replace />;
  }

  // Artigos relacionados (excluindo o atual)
  const relatedArticles = articles.filter(a => a.slug !== slug).slice(0, 2);

  return (
    <HelmetProvider>
      <SEOHead
        title={`${article.title} | Melhores Motos Infantil Elétrica`}
        description={content.metaDescription}
        keywords={content.keywords.join(", ")}
      />
      <JsonLd
        type="article"
        title={article.title}
        description={content.metaDescription}
        datePublished={article.date}
        dateModified={article.date}
        author="Equipe Melhores Motos Infantil Elétrica"
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
                <Link to="/artigos" className="hover:text-primary transition-colors">Artigos</Link>
                <span>/</span>
                <span className="text-foreground truncate">{article.title}</span>
              </nav>
            </div>
          </div>

          {/* Article Header */}
          <header className="py-8 md:py-12 border-b border-border">
            <div className="container max-w-4xl">
              <div className="flex items-center gap-2 mb-4">
                <Badge variant="secondary">{article.category}</Badge>
                {article.trending && (
                  <Badge className="bg-fun-pink text-accent-foreground">Em Alta</Badge>
                )}
              </div>
              
              <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-4">
                {article.title}
              </h1>
              
              <p className="text-lg text-muted-foreground mb-6">
                {article.excerpt}
              </p>

              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  {new Date(article.date).toLocaleDateString('pt-BR', { 
                    day: 'numeric', 
                    month: 'long', 
                    year: 'numeric' 
                  })}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {article.readTime} de leitura
                </span>
              </div>

              <div className="flex gap-2 mt-6">
                <Button variant="outline" size="sm">
                  <Share2 className="h-4 w-4 mr-2" />
                  Compartilhar
                </Button>
                <Button variant="outline" size="sm">
                  <Bookmark className="h-4 w-4 mr-2" />
                  Salvar
                </Button>
              </div>
            </div>
          </header>

          {/* Article Content */}
          <article className="py-8 md:py-12">
            <div className="container max-w-4xl">
              <div className="prose prose-lg max-w-none">
                {content.content}
              </div>
            </div>
          </article>

          {/* Related Articles */}
          <section className="py-12 bg-muted/30 border-t border-border">
            <div className="container max-w-4xl">
              <h2 className="font-heading text-2xl font-bold text-foreground mb-6">
                Artigos Relacionados
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {relatedArticles.map((relArticle) => (
                  <Link
                    key={relArticle.id}
                    to={`/artigo/${relArticle.slug}`}
                    className="block p-4 bg-card border border-border rounded-lg hover:border-primary/50 transition-colors"
                  >
                    <Badge variant="secondary" className="mb-2 text-xs">
                      {relArticle.category}
                    </Badge>
                    <h3 className="font-heading font-bold text-foreground line-clamp-2 mb-2">
                      {relArticle.title}
                    </h3>
                    <span className="text-sm text-primary flex items-center gap-1">
                      Ler artigo <ArrowRight className="h-3 w-3" />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </section>

          {/* Back to Articles */}
          <div className="container max-w-4xl py-8">
            <Button variant="ghost" asChild>
              <Link to="/artigos">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Voltar para Artigos
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

export default ArtigoDetalhe;
