import { motion } from "framer-motion";
import { ArrowUpRight, Clock, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import { SectionHeader } from "./About";
import { caseStudies } from "@/data/caseStudies";

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });

export const Insights = () => {
  const featured = caseStudies.slice(0, 4);
  return (
    <section id="case-studies" className="relative py-32">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeader
            eyebrow="Case Studies"
            title="Writing on AI, data and design."
            subtitle="Independent essays and product teardowns. Different from my client work — these are how I think about building."
          />
          <Link
            to="/case-studies"
            className="group inline-flex items-center gap-2 rounded-full border border-border/60 bg-secondary/40 px-5 py-2.5 text-sm transition-all hover:border-primary/60"
          >
            <BookOpen className="h-4 w-4" /> All case studies
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {featured.map((c, idx) => (
            <motion.div
              key={c.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.06 }}
            >
              <Link to={`/case-studies/${c.slug}`} className="group relative block overflow-hidden card-premium p-0">
                <div className={`relative h-40 overflow-hidden bg-gradient-to-br ${c.cover.from} ${c.cover.via} ${c.cover.to}`}>
                  <div className="absolute inset-0 grid-pattern opacity-25 mix-blend-overlay" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.4),transparent_60%)]" />
                  <div className="absolute left-4 top-4 rounded-full bg-black/30 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-white backdrop-blur">
                    {c.topic}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-semibold leading-snug">{c.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{c.excerpt}</p>
                  <div className="mt-4 flex items-center justify-between font-mono text-[11px] text-muted-foreground">
                    <span>{formatDate(c.date)}</span>
                    <span className="inline-flex items-center gap-1.5"><Clock className="h-3 w-3" /> {c.readMinutes} min</span>
                    <ArrowUpRight className="h-4 w-4 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
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
