import { motion } from "framer-motion";
import { Code2, Cpu, Layers, Rocket, Sparkles, Wrench } from "lucide-react";

const groups = [
  { icon: Code2, title: "Engineering", items: ["TypeScript", "React", "Node.js", "Go", "Python", "Rust"] },
  { icon: Cpu, title: "AI & ML", items: ["LLMs", "RAG", "Embeddings", "PyTorch", "Agents", "Eval"] },
  { icon: Layers, title: "Product", items: ["Strategy", "0→1", "PMF", "Roadmaps", "Discovery", "Analytics"] },
  { icon: Sparkles, title: "Design", items: ["Systems", "Motion", "Brand", "Figma", "Prototyping", "DX"] },
  { icon: Rocket, title: "Growth", items: ["GTM", "SEO", "Lifecycle", "Content", "Pricing", "CRO"] },
  { icon: Wrench, title: "Infra", items: ["AWS", "Vercel", "Postgres", "K8s", "Edge", "Observability"] },
];

export const About = () => (
  <section id="about" className="relative py-32">
    <div className="container mx-auto px-6">
      <SectionHeader eyebrow="About" title="A founder who codes, a builder who designs." />

      <div className="mt-16 grid gap-10 lg:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-5"
        >
          <p className="text-xl leading-relaxed text-foreground/90">
            I'm <span className="text-gradient-primary font-semibold">Shubham</span> — a technologist and entrepreneur obsessed with building products that compound. I sit between engineering, design, and business, shipping work that feels considered.
          </p>
          <p className="mt-6 text-muted-foreground">
            Over the past decade I've co-founded ventures, led product at fast-moving teams, and shipped tools used by people across the world. My mission is simple: build things that respect the user's time and feel inevitable in hindsight.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-3 max-w-md">
            {[
              { k: "Mission", v: "Useful, beautiful software" },
              { k: "Style", v: "Calm, fast, opinionated" },
              { k: "Based in", v: "India · Remote" },
              { k: "Currently", v: "Building in AI" },
            ].map((x) => (
              <div key={x.k} className="rounded-xl border border-border/60 p-3">
                <div className="font-mono text-[10px] uppercase text-muted-foreground">{x.k}</div>
                <div className="mt-1 text-sm font-medium">{x.v}</div>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
          {groups.map((g, idx) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.06 }}
              className="card-premium p-5"
            >
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-primary text-primary-foreground">
                  <g.icon className="h-5 w-5" />
                </div>
                <h3 className="font-display text-lg font-semibold">{g.title}</h3>
              </div>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {g.items.map((i) => (
                  <span key={i} className="rounded-full border border-border/60 bg-secondary/50 px-2.5 py-1 text-xs text-muted-foreground">
                    {i}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export const SectionHeader = ({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="max-w-3xl"
  >
    <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-secondary/40 px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
      <span className="h-1 w-1 rounded-full bg-primary" /> {eyebrow}
    </div>
    <h2 className="mt-5 font-display text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
      <span className="text-gradient">{title}</span>
    </h2>
    {subtitle && <p className="mt-4 text-lg text-muted-foreground">{subtitle}</p>}
  </motion.div>
);
