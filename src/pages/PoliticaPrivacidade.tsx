import { HelmetProvider } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

const PoliticaPrivacidade = () => {
  return (
    <HelmetProvider>
      <SEOHead
        title="Política de Privacidade"
        description="Política de Privacidade do site Melhores Motos Infantil Elétrica. Saiba como tratamos seus dados pessoais."
        noIndex={true}
      />
      
      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="container py-12 md:py-16">
          <article className="max-w-4xl mx-auto prose prose-lg">
            <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-8">
              Política de Privacidade
            </h1>

            <p className="text-muted-foreground">
              Última atualização: {new Date().toLocaleDateString('pt-BR')}
            </p>

            <section className="mt-8">
              <h2 className="font-heading text-2xl font-bold text-foreground">
                1. Informações que Coletamos
              </h2>
              <p className="text-foreground/80">
                O site <strong>Melhores Motos Infantil Elétrica</strong> coleta informações de forma automática 
                quando você navega em nossas páginas. Isso inclui:
              </p>
              <ul className="list-disc pl-6 text-foreground/80">
                <li>Endereço IP</li>
                <li>Tipo de navegador e dispositivo</li>
                <li>Páginas visitadas e tempo de permanência</li>
                <li>Dados de cookies e tecnologias similares</li>
              </ul>
            </section>

            <section className="mt-8">
              <h2 className="font-heading text-2xl font-bold text-foreground">
                2. Como Usamos suas Informações
              </h2>
              <p className="text-foreground/80">
                As informações coletadas são utilizadas para:
              </p>
              <ul className="list-disc pl-6 text-foreground/80">
                <li>Melhorar a experiência de navegação</li>
                <li>Analisar o tráfego do site</li>
                <li>Personalizar conteúdo e recomendações</li>
                <li>Fins estatísticos e de marketing</li>
              </ul>
            </section>

            <section className="mt-8">
              <h2 className="font-heading text-2xl font-bold text-foreground">
                3. Cookies e Tecnologias de Rastreamento
              </h2>
              <p className="text-foreground/80">
                Utilizamos cookies para melhorar sua experiência. Os cookies são pequenos arquivos 
                armazenados no seu dispositivo que nos ajudam a:
              </p>
              <ul className="list-disc pl-6 text-foreground/80">
                <li>Lembrar suas preferências</li>
                <li>Analisar como você usa o site</li>
                <li>Exibir anúncios relevantes</li>
              </ul>
              <p className="text-foreground/80">
                Você pode controlar ou desativar cookies através das configurações do seu navegador.
              </p>
            </section>

            <section className="mt-8">
              <h2 className="font-heading text-2xl font-bold text-foreground">
                4. Links de Afiliados
              </h2>
              <p className="text-foreground/80">
                Este site contém <strong>links de afiliados</strong> para produtos no Mercado Livre 
                e outras plataformas. Quando você clica nesses links e realiza uma compra, podemos 
                receber uma comissão, sem custo adicional para você.
              </p>
            </section>

            <section className="mt-8">
              <h2 className="font-heading text-2xl font-bold text-foreground">
                5. Compartilhamento de Dados
              </h2>
              <p className="text-foreground/80">
                Não vendemos, alugamos ou compartilhamos suas informações pessoais com terceiros, 
                exceto quando necessário para:
              </p>
              <ul className="list-disc pl-6 text-foreground/80">
                <li>Cumprir obrigações legais</li>
                <li>Proteger nossos direitos</li>
                <li>Fornecer serviços de análise (Google Analytics, etc.)</li>
              </ul>
            </section>

            <section className="mt-8">
              <h2 className="font-heading text-2xl font-bold text-foreground">
                6. Seus Direitos
              </h2>
              <p className="text-foreground/80">
                De acordo com a Lei Geral de Proteção de Dados (LGPD), você tem direito a:
              </p>
              <ul className="list-disc pl-6 text-foreground/80">
                <li>Acessar seus dados pessoais</li>
                <li>Solicitar correção de dados incorretos</li>
                <li>Solicitar exclusão de dados</li>
                <li>Revogar consentimento</li>
              </ul>
            </section>

            <section className="mt-8">
              <h2 className="font-heading text-2xl font-bold text-foreground">
                7. Contato
              </h2>
              <p className="text-foreground/80">
                Para questões sobre esta política de privacidade, entre em contato conosco 
                através da nossa página de contato.
              </p>
            </section>
          </article>
        </main>

        <Footer />
      </div>
    </HelmetProvider>
  );
};

export default PoliticaPrivacidade;
