import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Solutions } from "@/components/site/Solutions";
import { Portfolio } from "@/components/site/Portfolio";
import { About } from "@/components/site/About";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      {
        title:
          "Jus Automação — Automação Inteligente com Segurança Jurídica",
      },
      {
        name: "description",
        content:
          "Soluções de IA e integrações sob medida para otimizar atendimentos, recuperar vendas e escalar seu negócio com adequação total à LGPD.",
      },
      {
        property: "og:title",
        content: "Jus Automação — Automação Inteligente com Segurança Jurídica",
      },
      {
        property: "og:description",
        content:
          "IA, integrações e automações sob medida com blindagem jurídica e adequação à LGPD.",
      },
    ],
  }),
});

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <Solutions />
      <Portfolio />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
