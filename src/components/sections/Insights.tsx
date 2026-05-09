import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SectionHeader } from "./About";

const posts = [
  { title: "Designing for AI-native products", date: "May 2026", read: "8 min", tag: "AI" },
  { title: "0→1 lessons from 6 launches", date: "Apr 2026", read: "12 min", tag: "Product" },
  { title: "The compounding edge of taste", date: "Mar 2026", read: "5 min", tag: "Essay" },
];

export const Insights = () => (
  <section id="insights" className="relative py-32">
    <div className="container mx-auto px-6">
      <SectionHeader eyebrow="Insights" title="Thoughts on building." subtitle="Notes on product, AI, design and the craft of shipping." />

      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {posts.map((p, idx) => (
          <motion.a
            key={p.title}
            href="#"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.06 }}
            className="group card-premium flex flex-col p-6"
          >
            <div className="flex items-center justify-between">
              <span className="rounded-full bg-secondary/60 px-2.5 py-1 font-mono text-[10px] uppercase text-muted-foreground">{p.tag}</span>
              <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
            </div>
            <h3 className="mt-6 font-display text-xl font-semibold leading-snug group-hover:text-gradient-primary">{p.title}</h3>
            <div className="mt-auto flex items-center gap-3 pt-6 font-mono text-xs text-muted-foreground">
              <span>{p.date}</span>
              <span>·</span>
              <span>{p.read}</span>
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  </section>
);
