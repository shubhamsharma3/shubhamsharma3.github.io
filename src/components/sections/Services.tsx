import { motion } from "framer-motion";
import { Bot, Compass, LineChart, Palette, Rocket, Code } from "lucide-react";
import { SectionHeader } from "./About";

const services = [
  { icon: Rocket, title: "Product Strategy", desc: "From insight to roadmap. Sharpen the wedge, focus the team, ship what matters." },
  { icon: Bot, title: "AI Engineering", desc: "Production-grade LLM apps, agents, RAG and evals — designed to actually scale." },
  { icon: Code, title: "Web & Mobile Dev", desc: "Performant, beautiful apps with Next.js, React Native and modern tooling." },
  { icon: Palette, title: "Design Systems", desc: "Reusable UI foundations that move fast without sacrificing polish." },
  { icon: LineChart, title: "Growth & GTM", desc: "Distribution loops, lifecycle, content engines — calm growth that compounds." },
  { icon: Compass, title: "Founder Coaching", desc: "Hands-on advisory for early-stage founders navigating 0→1 chaos." },
];

export const Services = () => (
  <section id="services" className="relative py-32">
    <div className="container mx-auto px-6">
      <SectionHeader eyebrow="Services" title="How I can help you ship." subtitle="Engagements range from rapid sprints to fractional partnerships." />

      <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {services.map((s, idx) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.06 }}
            className="group card-premium relative overflow-hidden p-6"
          >
            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/10 blur-2xl transition-all duration-500 group-hover:bg-primary/30" />
            <div className="relative">
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-primary text-primary-foreground shadow-glow">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
