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

      <div className="relative mx-auto mt-16 max-w-4xl">
        {/* vertical line */}
        <div className="pointer-events-none absolute left-5 top-0 h-full w-px bg-gradient-to-b from-primary via-border to-transparent md:left-1/2" />

        {experience.map((it, idx) => {
          const left = idx % 2 === 0;
          return (
            <motion.div
              key={it.period + it.org}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: idx * 0.05 }}
              className="relative mb-10 grid gap-4 pl-14 md:grid-cols-2 md:pl-0"
            >
              {/* node */}
              <span className="absolute left-5 top-3 -translate-x-1/2 md:left-1/2">
                <span className="grid h-5 w-5 place-items-center rounded-full bg-gradient-primary shadow-glow">
                  <Briefcase className="h-2.5 w-2.5 text-primary-foreground" />
                </span>
                <span className="absolute inset-0 -z-10 animate-glow-pulse rounded-full bg-primary/40 blur-md" />
              </span>

              <div className={left ? "md:text-right md:pr-12" : "md:order-2 md:pl-12"}>
                <div className="card-premium p-5 text-left md:inline-block md:max-w-md md:text-left">
                  <div className="font-mono text-[11px] uppercase tracking-wider text-primary">{it.period}</div>
                  <h3 className="mt-2 font-display text-xl font-semibold">{it.role}</h3>
                  <div className="mt-1 flex items-center gap-2 text-sm text-foreground/80">
                    <span className="font-medium">{it.org}</span>
                    <span className="inline-flex items-center gap-1 text-muted-foreground">
                      <MapPin className="h-3 w-3" /> {it.location}
                    </span>
                  </div>
                  <p className="mt-3 text-sm text-muted-foreground">{it.desc}</p>
                  {it.highlights && (
                    <ul className="mt-3 space-y-1.5">
                      {it.highlights.slice(0, 3).map((h) => (
                        <li key={h} className="flex gap-2 text-xs text-foreground/75">
                          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary/70" /> {h}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}
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
