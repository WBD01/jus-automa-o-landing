export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-background border-t border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-primary">
          <span className="font-extrabold">Jus</span>
          <span className="font-light"> Automação</span>
        </p>
        <p className="text-xs text-muted-foreground">
          © {year} Jus Automação. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
