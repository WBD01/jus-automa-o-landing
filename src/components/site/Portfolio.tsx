import { Ticket, GraduationCap, TrendingUp } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const cases: {
  tag: string;
  icon: LucideIcon;
  title: string;
  text: string;
}[] = [
  {
    tag: "Turismo",
    icon: Ticket,
    title: "Emissão Automática de Ingressos",
    text: "Sistema integrado onde o cliente preenche os dados, realiza o pagamento e recebe o ingresso digital instantaneamente via WhatsApp ou E-mail.",
  },
  {
    tag: "Educação",
    icon: GraduationCap,
    title: "Agente IA de Vendas e Suporte",
    text: "Assistente virtual com sub-agentes inteligentes. Esclarece dúvidas sobre cursos, qualifica leads para vendas e direciona problemas técnicos para o suporte adequado.",
  },
  {
    tag: "E-commerce",
    icon: TrendingUp,
    title: "Recuperação de Carrinho Abandonado",
    text: "Fluxo que identifica desistências em tempo real e aciona o cliente de forma assertiva, convertendo carrinhos perdidos em vendas concluídas.",
  },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="py-24 lg:py-32 bg-surface-soft">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Portfólio
            </p>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-primary">
              Casos de sucesso entregues.
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md">
            Projetos reais que demonstram o impacto da automação inteligente
            em diferentes setores.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {cases.map(({ tag, icon: Icon, title, text }) => (
            <article
              key={title}
              className="relative flex flex-col rounded-2xl bg-card p-8 border border-border shadow-soft transition-smooth hover:shadow-elegant hover:-translate-y-1"
            >
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center rounded-full bg-primary/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-primary">
                  {tag}
                </span>
                <Icon className="h-5 w-5 text-accent" strokeWidth={1.8} />
              </div>
              <h3 className="mt-6 text-lg font-semibold text-primary leading-snug">
                {title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground flex-1">
                {text}
              </p>
              <div className="mt-6 pt-6 border-t border-border flex items-center justify-between text-xs text-muted-foreground">
                <span>Projeto entregue</span>
                <span className="text-accent font-semibold">●  Em produção</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
