import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { SectionHeader } from "./About";
import { works, workCategories } from "@/data/works";

export const Projects = () => {
  const [active, setActive] = useState<string>("All");
  const filtered = active === "All" ? works : works.filter((p) => p.category === active);

  return (
    <section id="work" className="relative py-32">
      <div className="absolute inset-0 -z-10 bg-mesh opacity-50" />
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeader
            eyebrow="Selected work"
            title="GenAI products that shipped."
            subtitle="A decade of building data and AI products for enterprise and government — at national scale."
          />
          <div className="flex flex-wrap gap-2">
            {workCategories.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`rounded-full border px-3 py-1.5 text-sm transition-all ${
                  active === c
                    ? "border-primary bg-gradient-primary text-primary-foreground"
                    : "border-border/60 text-muted-foreground hover:text-foreground"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p, idx) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (idx % 6) * 0.05 }}
            >
              <Link to={`/work/${p.id}`} className="group relative block overflow-hidden card-premium p-0">
                <div className={`relative h-48 overflow-hidden bg-gradient-to-br ${p.gradient}`}>
                  <div className="absolute inset-0 grid-pattern opacity-30 mix-blend-overlay" />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
                  <div className="absolute right-4 top-4 rounded-full bg-black/30 px-2.5 py-1 font-mono text-[10px] text-white backdrop-blur">
                    {p.year}
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 font-display text-xl font-bold leading-tight text-white drop-shadow-lg">
                    {p.title}
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[11px] uppercase text-muted-foreground">{p.category} · {p.client}</span>
                    <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
                  </div>
                  <p className="mt-2 text-sm text-foreground/80">{p.subtitle}</p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {p.tags.map((s) => (
                      <span key={s} className="rounded-md border border-border/60 px-2 py-0.5 font-mono text-[10px] text-muted-foreground">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
