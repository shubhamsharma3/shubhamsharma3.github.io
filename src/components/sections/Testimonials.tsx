import { motion } from "framer-motion";
import { SectionHeader } from "./About";
import { clients } from "@/data/experience";

export const Testimonials = () => (
  <section className="relative py-32">
    <div className="container mx-auto px-6">
      <SectionHeader
        eyebrow="Trusted by"
        title="Enterprise & government, at scale."
        subtitle="Selected organisations I've partnered with on AI, data and product engagements."
      />

      <div className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-border/60 bg-border/60 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {clients.map((c, i) => (
          <motion.div
            key={c}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: (i % 10) * 0.03 }}
            className="group flex h-24 items-center justify-center bg-card transition-colors hover:bg-secondary/40"
          >
            <span className="font-display text-sm font-bold tracking-wider text-muted-foreground transition-colors group-hover:text-foreground md:text-base">
              {c}
            </span>
          </motion.div>
        ))}
      </div>

      <div className="relative mt-16 overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />
        <div className="flex w-max animate-marquee gap-12 py-6">
          {[...clients, ...clients].map((l, i) => (
            <span key={i} className="font-mono text-sm uppercase tracking-[0.2em] text-muted-foreground/60">
              {l}
            </span>
          ))}
        </div>
      </div>
    </div>
  </section>
);
