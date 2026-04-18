import { Bot, Settings2, ShoppingCart } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const items: { icon: LucideIcon; title: string; text: string }[] = [
  {
    icon: Bot,
    title: "Triagem com IA",
    text: "Atendimento 24/7 via WhatsApp para qualificação de leads e organização de demandas.",
  },
  {
    icon: Settings2,
    title: "Integração de Sistemas",
    text: "Conexão entre CRMs, bancos de dados e APIs para eliminar trabalho manual.",
  },
  {
    icon: ShoppingCart,
    title: "Recuperação de Vendas",
    text: "Fluxos automatizados para resgatar clientes e aumentar o faturamento.",
  },
];

export function Solutions() {
  return (
    <section id="solucoes" className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Soluções
          </p>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-primary">
            Tecnologia que trabalha pelo seu negócio.
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Plataformas inteligentes desenhadas para reduzir custos
            operacionais e ampliar a sua capacidade de atendimento.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {items.map(({ icon: Icon, title, text }) => (
            <article
              key={title}
              className="group relative rounded-2xl border border-border bg-card p-8 transition-smooth hover:-translate-y-1 hover:shadow-elegant hover:border-accent/40"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-accent shadow-soft">
                <Icon className="h-6 w-6" strokeWidth={1.6} />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-primary">
                {title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {text}
              </p>
              <div className="mt-6 h-px bg-gradient-to-r from-accent/60 to-transparent opacity-0 group-hover:opacity-100 transition-smooth" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
