import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { SectionHeader } from "./About";
import { works, workCategories, type Work } from "@/data/works";

// Decorative animated thumbnail rendered per category — keeps every card unique.
const Thumbnail = ({ work }: { work: Work }) => {
  const seed = work.id.length;
  return (
    <div className={`relative h-52 overflow-hidden bg-gradient-to-br ${work.gradient}`}>
      {/* radial highlight */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.4),transparent_55%)]" />
      {/* moving grid */}
      <div className="absolute inset-0 grid-pattern opacity-25 mix-blend-overlay" />

      {/* SVG art layer per category */}
      <svg
        className="absolute inset-0 h-full w-full opacity-70 transition-transform duration-700 group-hover:scale-110"
        viewBox="0 0 400 200"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id={`g-${work.id}`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="white" stopOpacity="0.6" />
            <stop offset="100%" stopColor="white" stopOpacity="0.05" />
          </linearGradient>
        </defs>
        {Array.from({ length: 6 }).map((_, i) => (
          <circle
            key={i}
            cx={40 + ((i * 67 + seed * 13) % 320)}
            cy={30 + ((i * 41 + seed * 7) % 140)}
            r={4 + (i % 3) * 3}
            fill={`url(#g-${work.id})`}
          />
        ))}
        {Array.from({ length: 5 }).map((_, i) => (
          <line
            key={`l${i}`}
            x1={20 + i * 70}
            y1={180}
            x2={60 + i * 70}
            y2={20}
            stroke="white"
            strokeOpacity="0.18"
            strokeWidth="1"
          />
        ))}
      </svg>

      {/* Top-right meta */}
      <div className="absolute right-3 top-3 flex gap-1.5">
        <span className="rounded-full bg-black/35 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-white backdrop-blur">
          {work.year}
        </span>
        <span className="rounded-full bg-white/15 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-white backdrop-blur">
          {work.category}
        </span>
      </div>

      {/* Bottom shade + title */}
      <div className="absolute inset-x-0 bottom-0 h-3/5 bg-gradient-to-t from-black/65 via-black/25 to-transparent" />
      <div className="absolute bottom-4 left-4 right-4">
        <div className="font-mono text-[10px] uppercase tracking-wider text-white/70">{work.client}</div>
        <div className="mt-1 font-display text-xl font-bold leading-tight text-white drop-shadow-lg">
          {work.title}
        </div>
      </div>
    </div>
  );
};

export const Projects = () => {
  const [active, setActive] = useState<string>("All");
  const filtered = active === "All" ? works : works.filter((p) => p.category === active);

  return (
    <section id="work" className="relative py-32">
      <div className="absolute inset-0 -z-10 bg-mesh opacity-50" />
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeader
            eyebrow="Portfolio"
            title="Work that shipped, at scale."
            subtitle="A decade of building data and AI products for enterprise and government — across PSUs, state governments, defense, EdTech and energy."
          />
          <div className="flex flex-wrap gap-2">
            {workCategories.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`rounded-full border px-3 py-1.5 text-sm transition-all ${
                  active === c
                    ? "border-primary bg-gradient-primary text-primary-foreground shadow-glow"
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
              <Link
                to={`/work/${p.id}`}
                className="group relative block overflow-hidden card-premium p-0"
              >
                <Thumbnail work={p} />
                <div className="p-5">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                      {p.tags.join(" · ")}
                    </span>
                    <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
                  </div>
                  <p className="mt-2 text-sm text-foreground/80">{p.subtitle}</p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {p.stack.slice(0, 4).map((s) => (
                      <span
                        key={s}
                        className="rounded-md border border-border/60 bg-secondary/40 px-2 py-0.5 font-mono text-[10px] text-muted-foreground"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="pointer-events-none absolute inset-0 rounded-2xl ring-0 ring-primary/0 transition-all duration-500 group-hover:ring-2 group-hover:ring-primary/40" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
