import logo from "@/assets/logo.png";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-background border-t border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2.5">
          <img
            src={logo}
            alt="Jus Automação"
            width={32}
            height={32}
            loading="lazy"
            className="h-8 w-8 object-contain"
          />
          <p className="text-sm text-primary">
            <span className="font-extrabold">Jus</span>
            <span className="font-light"> Automação</span>
          </p>
        </div>
        <p className="text-xs text-muted-foreground">
          © {year} Jus Automação. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
