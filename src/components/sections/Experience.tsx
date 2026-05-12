import { motion } from "framer-motion";
import { Award, Briefcase, Download, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "./About";
import { experience, certifications } from "@/data/experience";

export const Experience = () => (
  <section id="experience" className="relative py-32">
    <div className="absolute inset-0 -z-10 bg-mesh opacity-40" />
    <div className="container mx-auto px-6">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <SectionHeader
          eyebrow="Experience"
          title="A decade of building."
          subtitle="Product, data and AI leadership across enterprise, government and consulting."
        />
        <div className="flex flex-wrap gap-2">
          <Button asChild size="lg" variant="outline" className="rounded-full border-border/60">
            <Link to="/resume">Full Résumé</Link>
          </Button>
          <Button asChild size="lg" className="rounded-full bg-gradient-primary text-primary-foreground hover:opacity-90">
            <a href={`${import.meta.env.BASE_URL}shubham-sharma-resume.pdf`} download>
              <Download className="mr-2 h-4 w-4" /> Download PDF
            </a>
          </Button>
        </div>
      </div>

      <div className="relative mx-auto mt-24 max-w-5xl">
        {/* vertical line */}
        <div className="pointer-events-none absolute left-8 top-0 h-full w-px bg-gradient-to-b from-primary via-primary/20 to-transparent md:left-1/2 md:-ml-px" />

        <div className="flex flex-col gap-16 md:gap-24">
          {experience.map((it, idx) => {
            const startYear = it.period.split("—")[0].trim();
            const isNow = it.period.toLowerCase().includes("present");
            const displayYear = isNow ? "NOW" : startYear;

            return (
              <motion.div
                key={it.period + it.org}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: idx * 0.1 }}
                className="relative flex flex-col md:flex-row md:items-start group"
              >
                {/* node */}
                <div className="absolute left-8 top-0 h-4 w-4 -translate-x-1/2 rounded-full border-2 border-background bg-primary shadow-[0_0_15px_rgba(var(--primary),0.5)] md:left-1/2 md:top-6 transition-all duration-300 group-hover:scale-150 group-hover:shadow-[0_0_25px_rgba(var(--primary),0.8)]" />

                {/* Left Side: Role & Company */}
                <div className="pl-16 pr-4 pt-0 md:w-1/2 md:pr-16 md:pl-0 md:text-right flex flex-col md:items-end">
                  <h3 className="font-display text-2xl md:text-3xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">
                    {it.role}
                  </h3>
                  <div className="mt-2 text-primary font-medium text-lg">
                    {it.org}
                  </div>
                  <div className="mt-1 flex items-center gap-1.5 text-sm text-muted-foreground">
                    <MapPin className="h-3.5 w-3.5" /> {it.location}
                  </div>
                </div>

                {/* Year Label (Desktop) */}
                <div className="hidden md:flex absolute left-1/2 top-5 -translate-x-[120px] items-center justify-end w-[80px]">
                  <span className="font-display text-2xl font-bold text-muted-foreground/50 tracking-widest transition-colors group-hover:text-foreground">
                    {displayYear}
                  </span>
                </div>

                {/* Year Label (Mobile) */}
                <div className="pl-16 mt-2 mb-4 md:hidden">
                  <span className="font-display text-xl font-bold text-muted-foreground tracking-widest">
                    {displayYear}
                  </span>
                </div>

                {/* Right Side: Description */}
                <div className="pl-16 md:w-1/2 md:pl-16 md:pt-6 text-muted-foreground text-base leading-relaxed">
                  <p>{it.desc}</p>
                  {it.highlights && (
                    <ul className="mt-4 space-y-2">
                      {it.highlights.slice(0, 3).map((h) => (
                        <li key={h} className="flex gap-3 text-sm text-foreground/80 items-start">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/70" /> 
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Certifications strip */}
      <div className="mt-20">
        <div className="mb-6 flex items-center gap-3">
          <div className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-primary text-primary-foreground">
            <Award className="h-4 w-4" />
          </div>
          <h3 className="font-display text-2xl font-semibold">Certifications</h3>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {certifications.map((c, i) => (
            <motion.div
              key={c.code}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="card-premium flex items-center gap-4 p-4"
            >
              {c.image ? (
                <img src={c.image} alt={`${c.code} ${c.name}`} className="h-16 w-16 shrink-0 object-contain" loading="lazy" />
              ) : (
                <div className="grid h-16 w-16 shrink-0 place-items-center rounded-xl bg-gradient-primary font-display text-sm font-bold text-primary-foreground">
                  {c.code}
                </div>
              )}
              <div className="min-w-0">
                <div className="font-mono text-[11px] uppercase tracking-wider text-primary">{c.code}</div>
                <div className="mt-0.5 truncate font-display text-sm font-semibold">{c.name}</div>
                <div className="text-xs text-muted-foreground">{c.issuer}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);
