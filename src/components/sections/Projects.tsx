import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { SectionHeader } from "./About";

type Project = {
  title: string; tag: string; year: string; category: string;
  desc: string; stack: string[]; gradient: string;
};

const projects: Project[] = [
  { title: "Nimbus AI", tag: "AI Platform", year: "2025", category: "AI",
    desc: "An end-to-end platform for building, evaluating and shipping LLM agents — used by teams to ship 5× faster.",
    stack: ["Next.js", "OpenAI", "Postgres", "tRPC"], gradient: "from-violet-500 via-fuchsia-500 to-cyan-400" },
  { title: "Loopcraft", tag: "SaaS", year: "2024", category: "Product",
    desc: "A workflow tool for indie founders to automate growth loops with no-code triggers and AI copy.",
    stack: ["React", "Node", "Supabase"], gradient: "from-amber-400 via-rose-500 to-violet-500" },
  { title: "Folio OS", tag: "Studio Project", year: "2024", category: "Design",
    desc: "An opinionated design system + component library powering 12+ founder portfolios with live theming.",
    stack: ["Tailwind", "Radix", "Framer"], gradient: "from-cyan-400 via-blue-500 to-indigo-500" },
  { title: "Atlas Mobile", tag: "Consumer App", year: "2023", category: "Mobile",
    desc: "A travel companion app blending AI itineraries with local guides — featured on the App Store.",
    stack: ["React Native", "Expo", "Maps"], gradient: "from-emerald-400 via-teal-500 to-cyan-500" },
  { title: "Pulse Analytics", tag: "B2B", year: "2023", category: "Product",
    desc: "Real-time product analytics for fast-moving teams. Sub-second queries on billions of rows.",
    stack: ["Go", "ClickHouse", "Kafka"], gradient: "from-pink-500 via-rose-500 to-orange-400" },
  { title: "Studio Site", tag: "Brand", year: "2022", category: "Design",
    desc: "An award-nominated agency site experimenting with WebGL and editorial typography.",
    stack: ["Three.js", "GSAP", "Vite"], gradient: "from-indigo-500 via-purple-500 to-pink-500" },
];

const cats = ["All", "AI", "Product", "Design", "Mobile"];

export const Projects = () => {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="work" className="relative py-32">
      <div className="absolute inset-0 -z-10 bg-mesh opacity-50" />
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeader eyebrow="Selected work" title="Projects that shipped." subtitle="A handful of recent builds across AI, product and design." />
          <div className="flex flex-wrap gap-2">
            {cats.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`rounded-full border px-3 py-1.5 text-sm transition-all ${
                  active === c ? "border-primary bg-gradient-primary text-primary-foreground" : "border-border/60 text-muted-foreground hover:text-foreground"
                }`}
              >{c}</button>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p, idx) => (
            <motion.a
              key={p.title}
              href="#"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (idx % 6) * 0.05 }}
              className="group relative overflow-hidden card-premium p-0"
            >
              <div className={`relative h-48 overflow-hidden bg-gradient-to-br ${p.gradient}`}>
                <div className="absolute inset-0 grid-pattern opacity-30 mix-blend-overlay" />
                <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
                <div className="absolute right-4 top-4 rounded-full bg-black/30 px-2.5 py-1 font-mono text-[10px] text-white backdrop-blur">
                  {p.year}
                </div>
                <div className="absolute bottom-4 left-4 font-display text-2xl font-bold text-white drop-shadow-lg">
                  {p.title}
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[11px] uppercase text-muted-foreground">{p.tag}</span>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
                </div>
                <p className="mt-2 text-sm text-foreground/80">{p.desc}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.stack.map((s) => (
                    <span key={s} className="rounded-md border border-border/60 px-2 py-0.5 font-mono text-[10px] text-muted-foreground">{s}</span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};
