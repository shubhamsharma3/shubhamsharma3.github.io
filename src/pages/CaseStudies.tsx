import { ArrowUpRight, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import { ThemeProvider } from "@/components/ThemeProvider";
import { CursorGlow } from "@/components/CursorGlow";
import { ScrollProgress } from "@/components/ScrollProgress";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { caseStudies, caseStudyTopics } from "@/data/caseStudies";

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });

const CaseStudies = () => {
  const [active, setActive] = useState<string>("All");
  const filtered = active === "All" ? caseStudies : caseStudies.filter((c) => c.topic === active);

  return (
    <ThemeProvider>
      <ScrollProgress />
      <CursorGlow />
      <div className="relative min-h-screen overflow-x-hidden">
        <Navbar />
        <main className="pt-32">
          <section className="container mx-auto max-w-6xl px-6 pb-20">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="font-mono text-xs uppercase tracking-wider text-muted-foreground">Writing</div>
              <h1 className="mt-3 font-display text-5xl font-bold tracking-tight md:text-7xl">
                <span className="text-gradient-primary">Case Studies</span>
              </h1>
              <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
                Essays, teardowns and product analyses on AI, data and design. Independent of client work — just thinking out loud.
              </p>
            </motion.div>

            <div className="mt-10 flex flex-wrap gap-2">
              {caseStudyTopics.map((t) => (
                <button
                  key={t}
                  onClick={() => setActive(t)}
                  className={`rounded-full border px-3 py-1.5 text-sm transition-all ${
                    active === t
                      ? "border-primary bg-gradient-primary text-primary-foreground"
                      : "border-border/60 text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {filtered.map((c, i) => (
                <motion.div
                  key={c.slug}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: (i % 4) * 0.06 }}
                >
                  <Link to={`/case-studies/${c.slug}`} className="group relative block overflow-hidden card-premium p-0">
                    <div className={`relative h-44 overflow-hidden bg-gradient-to-br ${c.cover.from} ${c.cover.via} ${c.cover.to}`}>
                      <div className="absolute inset-0 grid-pattern opacity-30 mix-blend-overlay" />
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.35),transparent_60%)]" />
                      <div className="absolute left-4 top-4 rounded-full bg-black/30 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-white backdrop-blur">
                        {c.topic}
                      </div>
                      <div className="absolute bottom-4 left-4 right-4 font-display text-xl font-bold leading-tight text-white drop-shadow-lg">
                        {c.title}
                      </div>
                    </div>
                    <div className="p-5">
                      <p className="text-sm text-foreground/80">{c.excerpt}</p>
                      <div className="mt-4 flex items-center justify-between font-mono text-[11px] text-muted-foreground">
                        <span>{formatDate(c.date)}</span>
                        <span className="inline-flex items-center gap-1.5"><Clock className="h-3 w-3" /> {c.readMinutes} min read</span>
                        <ArrowUpRight className="h-4 w-4 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default CaseStudies;
