import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { SectionHeader } from "./About";

const testimonials = [
  { quote: "Shubham operates like a one-person product org. Rare blend of taste, speed and judgement.", name: "Aarav K.", role: "Founder, Loopcraft" },
  { quote: "He turned a vague idea into a shipped product in weeks. The thing just feels right.", name: "Mira S.", role: "CEO, Atlas" },
  { quote: "Best collaborator I've worked with. Engineering rigor with a designer's eye.", name: "Jonas L.", role: "VP Product, Pulse" },
  { quote: "Strategic from the first call, hands-on by the second. Lifted our entire bar.", name: "Ria P.", role: "Founder, Studio Co." },
];

const logos = ["NIMBUS", "ATLAS", "PULSE", "FOLIO", "LOOP", "STUDIO", "ORBIT", "FORGE"];

export const Testimonials = () => (
  <section className="relative py-32">
    <div className="container mx-auto px-6">
      <SectionHeader eyebrow="Social proof" title="Trusted by builders." />

      <div className="mt-12 grid gap-5 md:grid-cols-2">
        {testimonials.map((t, idx) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.08 }}
            className="card-premium p-7"
          >
            <Quote className="h-6 w-6 text-primary" />
            <p className="mt-4 text-lg text-foreground/90">"{t.quote}"</p>
            <div className="mt-5 flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-full bg-gradient-primary font-display font-bold text-primary-foreground">
                {t.name[0]}
              </div>
              <div>
                <div className="font-medium">{t.name}</div>
                <div className="text-xs text-muted-foreground">{t.role}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="relative mt-16 overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />
        <div className="flex w-max animate-marquee gap-12 py-6">
          {[...logos, ...logos].map((l, i) => (
            <span key={i} className="font-display text-2xl font-bold tracking-widest text-muted-foreground/60">
              {l}
            </span>
          ))}
        </div>
      </div>
    </div>
  </section>
);
