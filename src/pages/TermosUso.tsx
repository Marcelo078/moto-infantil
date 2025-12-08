import { HelmetProvider } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

const TermosUso = () => {
  return (
    <HelmetProvider>
      <SEOHead
        title="Termos de Uso"
        description="Termos de Uso do site Melhores Motos Infantil Elétrica. Conheça as regras e condições de uso do nosso site."
        noIndex={true}
      />
      
      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="container py-12 md:py-16">
          <article className="max-w-4xl mx-auto prose prose-lg">
            <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-8">
              Termos de Uso
            </h1>

            <p className="text-muted-foreground">
              Última atualização: {new Date().toLocaleDateString('pt-BR')}
            </p>

            <section className="mt-8">
              <h2 className="font-heading text-2xl font-bold text-foreground">
                1. Aceitação dos Termos
              </h2>
              <p className="text-foreground/80">
                Ao acessar e usar o site <strong>Melhores Motos Infantil Elétrica</strong>, você concorda 
                em cumprir e estar vinculado a estes Termos de Uso. Se você não concordar com qualquer 
                parte destes termos, não deve usar este site.
              </p>
            </section>

            <section className="mt-8">
              <h2 className="font-heading text-2xl font-bold text-foreground">
                2. Natureza do Conteúdo
              </h2>
              <p className="text-foreground/80">
                Este site oferece <strong>análises, comparativos e informações</strong> sobre motos 
                elétricas infantis. Todo o conteúdo é fornecido apenas para fins informativos e 
                não constitui aconselhamento profissional.
              </p>
              <p className="text-foreground/80">
                As análises são baseadas em pesquisas, especificações do fabricante e avaliações 
                de consumidores. Recomendamos sempre verificar as informações diretamente com 
                o vendedor antes de realizar qualquer compra.
              </p>
            </section>

            <section className="mt-8">
              <h2 className="font-heading text-2xl font-bold text-foreground">
                3. Links de Afiliados e Monetização
              </h2>
              <p className="text-foreground/80">
                Este site participa de <strong>programas de afiliados</strong>, incluindo o programa 
                de afiliados do Mercado Livre. Isso significa que:
              </p>
              <ul className="list-disc pl-6 text-foreground/80">
                <li>Podemos receber comissões por compras realizadas através dos nossos links</li>
                <li>Isso não afeta o preço que você paga pelo produto</li>
                <li>Nossas análises são imparciais e não influenciadas por comissões</li>
                <li>Sempre indicamos quando um link é de afiliado</li>
              </ul>
            </section>

            <section className="mt-8">
              <h2 className="font-heading text-2xl font-bold text-foreground">
                4. Propriedade Intelectual
              </h2>
              <p className="text-foreground/80">
                Todo o conteúdo deste site, incluindo textos, imagens, logotipos e design, 
                é protegido por direitos autorais. É proibida a reprodução sem autorização prévia.
              </p>
              <p className="text-foreground/80">
                Marcas mencionadas como BMW, Triumph, Aprilia e outras são propriedade de seus 
                respectivos donos e são usadas apenas para fins informativos.
              </p>
            </section>

            <section className="mt-8">
              <h2 className="font-heading text-2xl font-bold text-foreground">
                5. Limitação de Responsabilidade
              </h2>
              <p className="text-foreground/80">
                O site <strong>Melhores Motos Infantil Elétrica</strong> não se responsabiliza por:
              </p>
              <ul className="list-disc pl-6 text-foreground/80">
                <li>Decisões de compra baseadas em nosso conteúdo</li>
                <li>Qualidade, disponibilidade ou entrega de produtos de terceiros</li>
                <li>Alterações de preços ou especificações pelos vendedores</li>
                <li>Problemas técnicos ou interrupções no site</li>
              </ul>
            </section>

            <section className="mt-8">
              <h2 className="font-heading text-2xl font-bold text-foreground">
                6. Uso Aceitável
              </h2>
              <p className="text-foreground/80">
                Ao usar este site, você concorda em:
              </p>
              <ul className="list-disc pl-6 text-foreground/80">
                <li>Não usar o site para fins ilegais</li>
                <li>Não tentar acessar áreas restritas do site</li>
                <li>Não copiar ou distribuir conteúdo sem autorização</li>
                <li>Respeitar a privacidade de outros usuários</li>
              </ul>
            </section>

            <section className="mt-8">
              <h2 className="font-heading text-2xl font-bold text-foreground">
                7. Modificações
              </h2>
              <p className="text-foreground/80">
                Reservamo-nos o direito de modificar estes termos a qualquer momento. 
                Alterações entram em vigor imediatamente após publicação no site.
              </p>
            </section>

            <section className="mt-8">
              <h2 className="font-heading text-2xl font-bold text-foreground">
                8. Contato
              </h2>
              <p className="text-foreground/80">
                Para dúvidas sobre estes termos, entre em contato através da nossa 
                página de contato.
              </p>
            </section>
          </article>
        </main>

        <Footer />
      </div>
    </HelmetProvider>
  );
};

export default TermosUso;
