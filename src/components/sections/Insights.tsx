import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { SectionHeader } from "./About";
import { principles } from "@/data/philosophy";

export const Insights = () => (
  <section id="insights" className="relative py-32">
    <div className="container mx-auto px-6">
      <SectionHeader
        eyebrow="Product philosophy"
        title="How I think about building."
        subtitle="A few principles I keep coming back to. The full essay lives on its own page."
      />

      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {principles.slice(0, 6).map((p, idx) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.06 }}
            className="card-premium flex flex-col p-6"
          >
            <div className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">Principle {String(idx + 1).padStart(2, "0")}</div>
            <h3 className="mt-3 font-display text-lg font-semibold leading-snug">{p.title}</h3>
            {p.quote && (
              <blockquote className="mt-3 border-l-2 border-primary/60 pl-3 text-sm italic text-foreground/80">{p.quote}</blockquote>
            )}
            <p className="mt-3 text-sm text-muted-foreground">{p.body}</p>
          </motion.div>
        ))}
      </div>

      <div className="mt-10 flex justify-center">
        <Link
          to="/philosophy"
          className="group inline-flex items-center gap-2 rounded-full border border-border/60 bg-secondary/40 px-5 py-2.5 text-sm transition-all hover:border-primary/60"
        >
          Read the full philosophy
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </Link>
      </div>
    </div>
  </section>
);
