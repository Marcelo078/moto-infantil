import { HelmetProvider } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, MessageCircle, Clock, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contato = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Mensagem enviada!",
        description: "Responderemos em breve. Obrigado pelo contato!",
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <HelmetProvider>
      <SEOHead
        title="Contato"
        description="Entre em contato com a equipe do Melhores Motos Infantil Elétrica. Estamos aqui para ajudar com suas dúvidas."
        keywords="contato motos infantis, fale conosco, suporte"
      />
      
      <div className="min-h-screen bg-background">
        <Header />
        
        <main>
          {/* Hero */}
          <section className="bg-gradient-hero py-16">
            <div className="container">
              <div className="max-w-2xl mx-auto text-center">
                <h1 className="font-heading text-4xl md:text-5xl font-black text-primary-foreground mb-4">
                  Fale Conosco
                </h1>
                <p className="text-lg text-primary-foreground/80">
                  Tem alguma dúvida ou sugestão? Entre em contato com nossa equipe!
                </p>
              </div>
            </div>
          </section>

          <section className="py-16 container">
            <div className="max-w-5xl mx-auto">
              <div className="grid lg:grid-cols-3 gap-8">
                {/* Contact Info */}
                <div className="space-y-6">
                  <Card className="border-border/50">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <div className="p-3 rounded-lg bg-primary/10">
                          <Mail className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-heading font-bold text-foreground mb-1">
                            E-mail
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            contato@melhoresmotos.com.br
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-border/50">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <div className="p-3 rounded-lg bg-energy-yellow/10">
                          <MessageCircle className="h-6 w-6 text-energy-orange" />
                        </div>
                        <div>
                          <h3 className="font-heading font-bold text-foreground mb-1">
                            Redes Sociais
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            Siga-nos para novidades e dicas
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-border/50">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <div className="p-3 rounded-lg bg-success/10">
                          <Clock className="h-6 w-6 text-success" />
                        </div>
                        <div>
                          <h3 className="font-heading font-bold text-foreground mb-1">
                            Tempo de Resposta
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            Respondemos em até 48 horas úteis
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Contact Form */}
                <div className="lg:col-span-2">
                  <Card className="border-border/50">
                    <CardContent className="pt-6">
                      <h2 className="font-heading text-2xl font-bold text-foreground mb-6">
                        Envie sua Mensagem
                      </h2>

                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid sm:grid-cols-2 gap-4">
                          <div>
                            <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                              Nome Completo
                            </label>
                            <Input 
                              id="name" 
                              placeholder="Seu nome" 
                              required 
                            />
                          </div>
                          <div>
                            <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                              E-mail
                            </label>
                            <Input 
                              id="email" 
                              type="email" 
                              placeholder="seu@email.com" 
                              required 
                            />
                          </div>
                        </div>

                        <div>
                          <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                            Assunto
                          </label>
                          <Input 
                            id="subject" 
                            placeholder="Sobre o que você quer falar?" 
                            required 
                          />
                        </div>

                        <div>
                          <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                            Mensagem
                          </label>
                          <Textarea 
                            id="message" 
                            placeholder="Escreva sua mensagem aqui..." 
                            rows={6}
                            required 
                          />
                        </div>

                        <Button 
                          type="submit" 
                          variant="cta" 
                          size="lg" 
                          className="w-full"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? (
                            "Enviando..."
                          ) : (
                            <>
                              Enviar Mensagem
                              <Send className="ml-2 h-5 w-5" />
                            </>
                          )}
                        </Button>
                      </form>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </HelmetProvider>
  );
};

export default Contato;
