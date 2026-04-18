import { ArrowRight, ShieldCheck } from "lucide-react";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-28 bg-surface-soft"
    >
      {/* Padrão geométrico sutil */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, var(--color-border) 1px, transparent 0)",
          backgroundSize: "28px 28px",
          maskImage:
            "radial-gradient(ellipse at center, black 50%, transparent 80%)",
        }}
      />
      <div
        aria-hidden
        className="absolute -top-32 -right-40 h-[480px] w-[480px] rounded-full blur-3xl opacity-30"
        style={{ background: "var(--gradient-accent)" }}
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1.5 text-xs font-medium text-muted-foreground shadow-soft">
            <ShieldCheck className="h-3.5 w-3.5 text-accent" />
            Adequado à LGPD · Sigilo de dados garantido
          </div>

          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] text-primary">
            Automação Inteligente com{" "}
            <span className="relative inline-block">
              <span className="relative z-10">Segurança Jurídica</span>
              <span
                aria-hidden
                className="absolute bottom-1 left-0 right-0 h-3 bg-accent-soft -z-0 rounded-sm"
              />
            </span>
            .
          </h1>

          <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
            Soluções de Inteligência Artificial e integrações sob medida para
            otimizar atendimentos, recuperar vendas e escalar seu negócio com
            total eficiência e adequação à LGPD.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#contato"
              className="group inline-flex items-center gap-2 rounded-md bg-gradient-accent px-7 py-3.5 text-sm font-semibold text-accent-foreground shadow-gold hover:translate-y-[-1px] transition-smooth"
            >
              Falar com Especialista
              <ArrowRight className="h-4 w-4 transition-smooth group-hover:translate-x-1" />
            </a>
            <a
              href="#solucoes"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary-glow transition-smooth"
            >
              Ver soluções
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <dl className="mt-12 grid grid-cols-3 gap-6 max-w-md">
            {[
              { k: "24/7", v: "Atendimento IA" },
              { k: "100%", v: "LGPD-Ready" },
              { k: "+30%", v: "Conversão média" },
            ].map((s) => (
              <div key={s.v}>
                <dt className="text-2xl font-bold text-primary">{s.k}</dt>
                <dd className="text-xs text-muted-foreground mt-1">{s.v}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Ilustração geométrica */}
        <div className="lg:col-span-5 relative h-[420px] hidden lg:block">
          <div className="absolute inset-0 bg-gradient-primary rounded-3xl shadow-elegant overflow-hidden">
            <svg
              viewBox="0 0 400 400"
              className="absolute inset-0 w-full h-full opacity-90"
              fill="none"
            >
              <defs>
                <linearGradient id="ln" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="oklch(0.78 0.12 80)" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="oklch(0.78 0.12 80)" stopOpacity="0.1" />
                </linearGradient>
              </defs>
              {/* grid */}
              {Array.from({ length: 10 }).map((_, i) => (
                <line
                  key={`h${i}`}
                  x1="0"
                  x2="400"
                  y1={i * 40}
                  y2={i * 40}
                  stroke="white"
                  strokeOpacity="0.05"
                />
              ))}
              {Array.from({ length: 10 }).map((_, i) => (
                <line
                  key={`v${i}`}
                  y1="0"
                  y2="400"
                  x1={i * 40}
                  x2={i * 40}
                  stroke="white"
                  strokeOpacity="0.05"
                />
              ))}
              {/* nodes connections */}
              <g stroke="url(#ln)" strokeWidth="1.2">
                <line x1="80" y1="120" x2="200" y2="200" />
                <line x1="200" y1="200" x2="320" y2="100" />
                <line x1="200" y1="200" x2="300" y2="300" />
                <line x1="200" y1="200" x2="100" y2="300" />
                <line x1="100" y1="300" x2="80" y2="120" />
                <line x1="320" y1="100" x2="300" y2="300" />
              </g>
              {[
                [80, 120, 5],
                [200, 200, 9],
                [320, 100, 5],
                [300, 300, 5],
                [100, 300, 5],
              ].map(([cx, cy, r], i) => (
                <circle
                  key={i}
                  cx={cx}
                  cy={cy}
                  r={r}
                  fill="oklch(0.78 0.12 80)"
                />
              ))}
              {[
                [80, 120, 14],
                [200, 200, 22],
                [320, 100, 14],
                [300, 300, 14],
                [100, 300, 14],
              ].map(([cx, cy, r], i) => (
                <circle
                  key={`p${i}`}
                  cx={cx}
                  cy={cy}
                  r={r}
                  fill="none"
                  stroke="oklch(0.78 0.12 80)"
                  strokeOpacity="0.35"
                />
              ))}
            </svg>
            <div className="absolute bottom-6 left-6 right-6 rounded-xl bg-white/8 backdrop-blur-sm border border-white/10 p-4">
              <p className="text-[11px] uppercase tracking-widest text-accent font-semibold">
                Fluxos integrados
              </p>
              <p className="text-sm text-white/90 mt-1 leading-snug">
                CRM · WhatsApp · IA · Pagamento — orquestrados em uma única
                camada de automação.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
