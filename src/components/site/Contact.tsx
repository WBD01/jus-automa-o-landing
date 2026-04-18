import { useState } from "react";
import { Send, CheckCircle2, Mail, MessageCircle } from "lucide-react";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      whatsapp: (form.elements.namedItem("whatsapp") as HTMLInputElement)
        .value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement)
        .value,
    };

    try {
      await fetch("https://n8n.jusautomacao.cloud/webhook/Jusautomacao", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          source: "landing-page",
          submittedAt: new Date().toISOString(),
        }),
      });
      setSubmitted(true);
      form.reset();
    } catch (err) {
      console.error("[Jus Automação] Erro ao enviar lead:", err);
      alert("Não foi possível enviar agora. Tente novamente em instantes.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contato" className="py-24 lg:py-32 bg-primary text-primary-foreground relative overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />
      <div
        aria-hidden
        className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full blur-3xl opacity-25"
        style={{ background: "var(--gradient-accent)" }}
      />

      <div className="relative mx-auto max-w-6xl px-6 lg:px-10 grid lg:grid-cols-2 gap-14 items-start">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Contato
          </p>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            Vamos transformar a operação do seu negócio.
          </h2>
          <p className="mt-6 text-base sm:text-lg text-primary-foreground/75 leading-relaxed max-w-lg">
            Conte sobre o seu desafio. Em até 1 dia útil você receberá um
            contato direto para entendermos como a automação pode acelerar
            seus resultados.
          </p>

          <div className="mt-10 space-y-4">
            <div className="flex items-center gap-3 text-sm text-primary-foreground/85">
              <MessageCircle className="h-5 w-5 text-accent" />
              Atendimento via WhatsApp
            </div>
            <div className="flex items-center gap-3 text-sm text-primary-foreground/85">
              <Mail className="h-5 w-5 text-accent" />
              Resposta personalizada por especialista
            </div>
            <div className="flex items-center gap-3 text-sm text-primary-foreground/85">
              <CheckCircle2 className="h-5 w-5 text-accent" />
              Confidencialidade e sigilo garantidos
            </div>
          </div>
        </div>

        <div className="rounded-2xl bg-background text-foreground p-6 sm:p-8 shadow-elegant border border-border">
          {submitted ? (
            <div className="text-center py-12">
              <div className="mx-auto h-14 w-14 rounded-full bg-accent-soft flex items-center justify-center">
                <CheckCircle2 className="h-7 w-7 text-primary" />
              </div>
              <h3 className="mt-5 text-xl font-semibold text-primary">
                Solicitação recebida!
              </h3>
              <p className="mt-2 text-sm text-muted-foreground max-w-sm mx-auto">
                Em breve um especialista da Jus Automação entrará em contato
                pelo WhatsApp informado.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-6 text-sm font-medium text-accent hover:underline"
              >
                Enviar outra mensagem
              </button>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="space-y-5">
              <Field id="name" label="Nome" required>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Seu nome completo"
                  className="input-style"
                />
              </Field>

              <Field id="whatsapp" label="WhatsApp" required>
                <input
                  id="whatsapp"
                  name="whatsapp"
                  type="tel"
                  required
                  placeholder="(11) 99999-9999"
                  className="input-style"
                />
              </Field>

              <Field id="message" label="Breve descrição da demanda" required>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  placeholder="Conte rapidamente o que você precisa automatizar..."
                  className="input-style resize-none"
                />
              </Field>

              <button
                type="submit"
                disabled={loading}
                className="w-full inline-flex items-center justify-center gap-2 rounded-md bg-gradient-accent px-6 py-3.5 text-sm font-semibold text-accent-foreground shadow-gold hover:translate-y-[-1px] transition-smooth disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading ? "Enviando..." : "Solicitar Contato"}
                {!loading && <Send className="h-4 w-4" />}
              </button>

              <p className="text-[11px] text-muted-foreground text-center">
                Seus dados são tratados em conformidade com a LGPD.
              </p>
            </form>
          )}
        </div>
      </div>

      <style>{`
        .input-style {
          width: 100%;
          border-radius: 0.5rem;
          border: 1px solid var(--color-border);
          background: var(--color-background);
          padding: 0.7rem 0.9rem;
          font-size: 0.9rem;
          color: var(--color-foreground);
          outline: none;
          transition: var(--transition-smooth);
        }
        .input-style:focus {
          border-color: var(--color-accent);
          box-shadow: 0 0 0 3px color-mix(in oklab, var(--color-accent) 20%, transparent);
        }
      `}</style>
    </section>
  );
}

function Field({
  id,
  label,
  required,
  children,
}: {
  id: string;
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-sm font-medium text-primary mb-2"
      >
        {label}
        {required && <span className="text-accent"> *</span>}
      </label>
      {children}
    </div>
  );
}
