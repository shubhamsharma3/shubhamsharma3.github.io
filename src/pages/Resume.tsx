import { ArrowLeft, Download, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ThemeProvider } from "@/components/ThemeProvider";
import { CursorGlow } from "@/components/CursorGlow";
import { ScrollProgress } from "@/components/ScrollProgress";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { experience, certifications, highlights } from "@/data/experience";

const Resume = () => (
  <ThemeProvider>
    <ScrollProgress />
    <CursorGlow />
    <div className="relative min-h-screen overflow-x-hidden">
      <Navbar />
      <main className="pt-32">
        <article className="container mx-auto max-w-4xl px-6 pb-32">
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
            <ArrowLeft className="h-4 w-4" /> Back home
          </Link>

          <motion.header
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-8"
          >
            <div className="font-mono text-xs uppercase tracking-wider text-muted-foreground">Résumé</div>
            <h1 className="mt-3 font-display text-5xl font-bold tracking-tight md:text-6xl">
              <span className="text-gradient-primary">Shubham Sharma</span>
            </h1>
            <p className="mt-3 text-lg text-muted-foreground">Product & AI Leader · 10+ years building data and GenAI products at scale</p>
            <div className="mt-5 flex flex-wrap gap-3">
              <a
                href={`${import.meta.env.BASE_URL}shubham-sharma-resume.pdf`}
                download
                className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-5 py-2 text-sm font-medium text-primary-foreground shadow-glow transition-opacity hover:opacity-90"
              >
                <Download className="h-4 w-4" /> Download PDF
              </a>
              <a
                href="https://www.linkedin.com/in/shubhamjksharma/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-secondary/40 px-4 py-2 text-sm hover:border-primary/60"
              >
                <Linkedin className="h-4 w-4" /> LinkedIn
              </a>
              <a
                href="/#contact"
                className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-secondary/40 px-4 py-2 text-sm hover:border-primary/60"
              >
                <Mail className="h-4 w-4" /> Get in touch
              </a>
            </div>
          </motion.header>

          <Section title="Highlights">
            <ul className="space-y-3">
              {highlights.map((h) => (
                <li key={h} className="flex gap-3 text-foreground/80">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  {h}
                </li>
              ))}
            </ul>
          </Section>

          <Section title="Experience">
            <div className="space-y-8">
              {experience.map((r) => (
                <div key={r.period + r.org} className="card-premium p-6">
                  <div className="font-mono text-xs text-muted-foreground">{r.period}</div>
                  <h3 className="mt-1 font-display text-xl font-semibold">{r.role}</h3>
                  <div className="text-sm text-primary">{r.org} · {r.location}</div>
                  <p className="mt-3 text-foreground/80">{r.desc}</p>
                  {r.highlights && (
                    <ul className="mt-3 space-y-2">
                      {r.highlights.map((h) => (
                        <li key={h} className="flex gap-3 text-sm text-muted-foreground">
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary/70" /> {h}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </Section>

          <Section title="Education">
            <div className="card-premium p-6">
              <div className="font-mono text-xs text-muted-foreground">2011 — 2015</div>
              <h3 className="mt-1 font-display text-xl font-semibold">B.Tech, Electronics & Communication Engineering</h3>
              <div className="text-sm text-primary">Vellore Institute of Technology · Vellore</div>
            </div>
          </Section>

          <Section title="Certifications">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {certifications.map((c) => (
                <div key={c.code} className="card-premium flex flex-col items-center p-5 text-center">
                  {c.image ? (
                    <img src={c.image} alt={`${c.code} ${c.name}`} className="h-24 w-24 object-contain" loading="lazy" />
                  ) : (
                    <div className="grid h-24 w-24 place-items-center rounded-2xl bg-gradient-primary font-display text-lg font-bold text-primary-foreground">
                      {c.code}
                    </div>
                  )}
                  <div className="mt-3 font-mono text-[11px] uppercase tracking-wider text-primary">{c.code}</div>
                  <div className="mt-1 font-display text-sm font-semibold leading-snug">{c.name}</div>
                  <div className="mt-1 text-xs text-muted-foreground">{c.issuer}</div>
                </div>
              ))}
            </div>
          </Section>

          <Section title="Other">
            <ul className="space-y-2 text-foreground/80">
              <li>Languages: English (educated), Hindi (native)</li>
              <li>Internships: BSNL (2013), DRDO (2014–2015)</li>
              <li>Founded the Passionate Trekkers Group in 2015</li>
            </ul>
          </Section>
        </article>
      </main>
      <Footer />
    </div>
  </ThemeProvider>
);

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="mt-12">
    <h2 className="font-display text-2xl font-semibold">{title}</h2>
    <div className="mt-4">{children}</div>
  </div>
);

export default Resume;
