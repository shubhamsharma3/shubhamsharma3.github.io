import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "./About";
import { experience } from "@/data/experience";

export const Experience = () => (
  <section id="experience" className="relative py-32">
    <div className="container mx-auto px-6">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <SectionHeader eyebrow="Experience" title="A decade of building." subtitle="Product, data and AI leadership across enterprise, government and consulting." />
        <Button asChild size="lg" className="rounded-full bg-gradient-primary text-primary-foreground hover:opacity-90">
          <Link to="/resume"><Download className="mr-2 h-4 w-4" /> Full Résumé</Link>
        </Button>
      </div>

      <div className="relative mx-auto mt-16 max-w-3xl">
        <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-primary/50 via-border to-transparent md:left-1/2" />
        {experience.map((it, idx) => (
          <motion.div
            key={it.period + it.org}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.05 }}
            className={`relative mb-10 grid gap-4 pl-12 md:grid-cols-2 md:pl-0`}
          >
            <div className={`${idx % 2 === 0 ? "md:text-right md:pr-12" : "md:order-2 md:pl-12"}`}>
              <div className="font-mono text-xs text-muted-foreground">{it.period}</div>
              <h3 className="mt-1 font-display text-xl font-semibold">{it.role}</h3>
              <div className="text-sm text-primary">{it.org} · {it.location}</div>
              <p className="mt-2 text-sm text-muted-foreground">{it.desc}</p>
            </div>
            <span className="absolute left-4 top-2 grid h-3 w-3 -translate-x-1/2 place-items-center rounded-full bg-gradient-primary shadow-glow md:left-1/2" />
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
