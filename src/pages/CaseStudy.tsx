import { ArrowLeft } from "lucide-react";
import { Link, useParams, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ThemeProvider } from "@/components/ThemeProvider";
import { CursorGlow } from "@/components/CursorGlow";
import { ScrollProgress } from "@/components/ScrollProgress";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { works } from "@/data/works";

const CaseStudy = () => {
  const { id } = useParams();
  const work = works.find((w) => w.id === id);
  if (!work) return <Navigate to="/" replace />;

  return (
    <ThemeProvider>
      <ScrollProgress />
      <CursorGlow />
      <div className="relative min-h-screen overflow-x-hidden">
        <Navbar />
        <main className="pt-32">
          <article className="container mx-auto max-w-4xl px-6 pb-32">
            <Link to="/#work" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
              <ArrowLeft className="h-4 w-4" /> Back to work
            </Link>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mt-8"
            >
              <div className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                {work.category} · {work.year} · {work.client}
              </div>
              <h1 className="mt-4 font-display text-4xl font-bold tracking-tight md:text-6xl">
                <span className="text-gradient-primary">{work.title}</span>
              </h1>
              <p className="mt-4 text-xl text-muted-foreground">{work.subtitle}</p>

              <div className={`mt-10 h-64 overflow-hidden rounded-3xl bg-gradient-to-br ${work.gradient} relative`}>
                <div className="absolute inset-0 grid-pattern opacity-30 mix-blend-overlay" />
              </div>

              <p className="mt-10 text-lg leading-relaxed text-foreground/90">{work.summary}</p>

              <Section title="The problem">
                <p className="text-foreground/80">{work.problem}</p>
              </Section>

              <Section title="The approach">
                <ul className="space-y-3">
                  {work.approach.map((a) => (
                    <li key={a} className="flex gap-3 text-foreground/80">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      {a}
                    </li>
                  ))}
                </ul>
              </Section>

              <Section title="Impact">
                <ul className="space-y-3">
                  {work.impact.map((a) => (
                    <li key={a} className="flex gap-3 text-foreground/80">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      {a}
                    </li>
                  ))}
                </ul>
              </Section>

              <Section title="Stack">
                <div className="flex flex-wrap gap-2">
                  {work.stack.map((s) => (
                    <span key={s} className="rounded-full border border-border/60 bg-secondary/40 px-3 py-1 font-mono text-xs text-muted-foreground">
                      {s}
                    </span>
                  ))}
                </div>
              </Section>
            </motion.div>
          </article>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="mt-12">
    <h2 className="font-display text-2xl font-semibold">{title}</h2>
    <div className="mt-4">{children}</div>
  </div>
);

export default CaseStudy;
