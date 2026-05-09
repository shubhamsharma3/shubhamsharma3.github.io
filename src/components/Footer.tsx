export const Footer = () => (
  <footer className="border-t border-border/60 py-10">
    <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-6 md:flex-row">
      <div className="flex items-center gap-2">
        <span className="grid h-7 w-7 place-items-center rounded-full bg-gradient-primary font-display text-xs font-bold text-primary-foreground">S</span>
        <span className="font-display font-semibold">Shubham Sharma</span>
      </div>
      <p className="font-mono text-xs text-muted-foreground">
        © {new Date().getFullYear()} · Designed & built with care
      </p>
      <div className="flex gap-4 font-mono text-xs text-muted-foreground">
        <a href="#top" className="hover:text-foreground">Back to top ↑</a>
      </div>
    </div>
  </footer>
);
