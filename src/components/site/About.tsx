import { Scale, ShieldCheck, GraduationCap, Award } from "lucide-react";
import founderImg from "@/assets/founder.jpg";

const credentials = [
  { icon: Scale, label: "Bacharel em Direito · OAB" },
  { icon: GraduationCap, label: "Pós em Direito Público" },
  { icon: Award, label: "Esp. em Direito Eletrônico" },
  { icon: ShieldCheck, label: "Especialista em LGPD" },
];

export function About() {
  return (
    <section id="sobre" className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-12 gap-14 items-center">
        <div className="lg:col-span-5 relative">
          <div className="relative aspect-[4/5] max-w-md mx-auto">
            <div
              aria-hidden
              className="absolute -inset-4 rounded-3xl bg-gradient-accent opacity-30 blur-2xl"
            />
            <div className="relative h-full w-full rounded-3xl overflow-hidden border border-border shadow-elegant">
              <img
                src={founderImg}
                alt="Fundador da Jus Automação"
                width={896}
                height={1024}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-2 sm:-right-6 bg-primary text-primary-foreground rounded-2xl p-5 shadow-elegant max-w-[220px]">
              <p className="text-[10px] uppercase tracking-widest text-accent font-semibold">
                Fundador
              </p>
              <p className="mt-1 text-sm font-semibold leading-snug">
                Direito + Tecnologia em uma única visão.
              </p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Sobre o Fundador
          </p>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-primary leading-tight">
            Precisão técnica, blindagem jurídica.
          </h2>
          <p className="mt-6 text-base sm:text-lg text-muted-foreground leading-relaxed">
            Sou especialista em automação de processos e desenvolvimento de
            agentes de IA, unindo a precisão técnica à segurança jurídica. Com
            bacharelado em Direito, aprovação na OAB, pós-graduação em Direito
            Público e especialização em Direito Eletrônico, compreendo
            profundamente as demandas operacionais, o sigilo de dados e o
            rigor exigidos por escritórios e empresas de alto nível.
          </p>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
            Minha missão é tirar a tecnologia do papel e transformá-la em
            fluxos de trabalho eficientes, blindados e que devolvem tempo ao
            seu negócio.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-3">
            {credentials.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-3 rounded-lg border border-border bg-surface-soft px-4 py-3"
              >
                <Icon className="h-4 w-4 text-accent shrink-0" />
                <span className="text-sm font-medium text-primary">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
