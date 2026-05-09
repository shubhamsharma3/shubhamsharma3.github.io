import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "./About";

const items = [
  { year: "2024 — Now", role: "Founder & Builder", org: "Independent Studio",
    desc: "Building AI-native products and partnering with select startups on 0→1 launches." },
  { year: "2022 — 2024", role: "Head of Product", org: "Stealth Startup",
    desc: "Led product across two launches; grew weekly active usage 14× in 11 months." },
  { year: "2020 — 2022", role: "Co-Founder & CTO", org: "Early-stage Venture",
    desc: "Shipped the MVP, hired the first eng team, and raised seed capital." },
  { year: "2018 — 2020", role: "Senior Engineer", org: "Product company",
    desc: "Owned core platform; mentored juniors; led the design system migration." },
  { year: "2016 — 2018", role: "Engineer & Intern", org: "Multiple teams",
    desc: "Cut my teeth across web, mobile and infra. Started writing publicly." },
];

export const Experience = () => (
  <section id="experience" className="relative py-32">
    <div className="container mx-auto px-6">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <SectionHeader eyebrow="Experience" title="A timeline of building." />
        <Button asChild size="lg" className="rounded-full bg-gradient-primary text-primary-foreground hover:opacity-90">
          <a href="#" download><Download className="mr-2 h-4 w-4" /> Download Resume</a>
        </Button>
      </div>

      <div className="relative mx-auto mt-16 max-w-3xl">
        <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-primary/50 via-border to-transparent md:left-1/2" />
        {items.map((it, idx) => (
          <motion.div
            key={it.year}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.08 }}
            className={`relative mb-10 grid gap-4 pl-12 md:grid-cols-2 md:pl-0 ${idx % 2 === 0 ? "md:pr-1/2" : ""}`}
          >
            <div className={`${idx % 2 === 0 ? "md:text-right md:pr-12" : "md:order-2 md:pl-12"}`}>
              <div className="font-mono text-xs text-muted-foreground">{it.year}</div>
              <h3 className="mt-1 font-display text-xl font-semibold">{it.role}</h3>
              <div className="text-sm text-primary">{it.org}</div>
              <p className="mt-2 text-sm text-muted-foreground">{it.desc}</p>
            </div>
            <span className="absolute left-4 top-2 grid h-3 w-3 -translate-x-1/2 place-items-center rounded-full bg-gradient-primary shadow-glow md:left-1/2" />
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
