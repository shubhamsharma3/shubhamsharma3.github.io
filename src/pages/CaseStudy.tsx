import { ArrowLeft } from "lucide-react";
import { Link, useParams, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { ThemeProvider } from "@/components/ThemeProvider";
import { CursorGlow } from "@/components/CursorGlow";
import { ScrollProgress } from "@/components/ScrollProgress";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { works } from "@/data/works";
import { getCaseStudyMarkdown } from "@/data/caseStudyContent";

const CaseStudy = () => {
  const { id } = useParams();
  const work = works.find((w) => w.id === id);
  if (!work) return <Navigate to="/" replace />;
  const markdown = getCaseStudyMarkdown(work.id);

  return (
    <ThemeProvider>
      <ScrollProgress />
      <CursorGlow />
      <div className="relative min-h-screen overflow-x-hidden">
        <Navbar />
        <main className="pt-32">
          <article className="container mx-auto max-w-4xl px-6 pb-32">
            <Link to="/#work" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
              <ArrowLeft className="h-4 w-4" /> Back to work
            </Link>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mt-8"
            >
              <div className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                {work.category} · {work.year} · {work.client}
              </div>
              <h1 className="mt-4 font-display text-4xl font-bold tracking-tight md:text-6xl">
                <span className="text-gradient-primary">{work.title}</span>
              </h1>
              <p className="mt-4 text-xl text-muted-foreground">{work.subtitle}</p>

              <div className={`relative mt-10 h-64 overflow-hidden rounded-3xl bg-gradient-to-br ${work.gradient}`}>
                <div className="absolute inset-0 grid-pattern opacity-30 mix-blend-overlay" />
                <div className="absolute bottom-6 left-6 flex flex-wrap gap-2">
                  {work.tags.map((t) => (
                    <span key={t} className="rounded-full bg-black/30 px-3 py-1 font-mono text-[11px] text-white backdrop-blur">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-10 grid gap-3 sm:grid-cols-3">
                {work.stack.slice(0, 6).map((s) => (
                  <div key={s} className="rounded-xl border border-border/60 bg-secondary/30 px-4 py-3 text-center font-mono text-xs text-muted-foreground">
                    {s}
                  </div>
                ))}
              </div>

              {markdown ? (
                <div className="prose prose-lg mt-12 max-w-none dark:prose-invert prose-headings:font-display prose-headings:tracking-tight prose-h1:text-4xl prose-h2:mt-12 prose-h2:text-2xl prose-h3:text-xl prose-a:text-primary prose-strong:text-foreground prose-code:rounded prose-code:bg-secondary prose-code:px-1.5 prose-code:py-0.5 prose-code:text-[0.9em] prose-code:before:content-none prose-code:after:content-none prose-blockquote:border-l-primary prose-blockquote:text-foreground/85 prose-img:rounded-2xl prose-hr:border-border/60">
                  <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    components={{
                      // Hide the leading H1 since we render our own hero title
                      h1: () => null,
                      img: () => null, // case-study image paths not bundled — skip cleanly
                    }}
                  >
                    {markdown}
                  </ReactMarkdown>
                </div>
              ) : (
                <>
                  <p className="mt-10 text-lg leading-relaxed text-foreground/90">{work.summary}</p>
                  <Section title="The problem"><p className="text-foreground/80">{work.problem}</p></Section>
                  <Section title="The approach">
                    <ul className="space-y-3">
                      {work.approach.map((a) => (
                        <li key={a} className="flex gap-3 text-foreground/80">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" /> {a}
                        </li>
                      ))}
                    </ul>
                  </Section>
                  <Section title="Impact">
                    <ul className="space-y-3">
                      {work.impact.map((a) => (
                        <li key={a} className="flex gap-3 text-foreground/80">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" /> {a}
                        </li>
                      ))}
                    </ul>
                  </Section>
                </>
              )}

              <div className="mt-16 rounded-2xl border border-border/60 bg-secondary/30 p-6 text-center">
                <div className="font-mono text-xs uppercase tracking-wider text-muted-foreground">Want to build something like this?</div>
                <Link to="/#contact" className="mt-3 inline-block font-display text-xl font-semibold text-gradient-primary">Let's talk →</Link>
              </div>
            </motion.div>
          </article>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="mt-12">
    <h2 className="font-display text-2xl font-semibold">{title}</h2>
    <div className="mt-4">{children}</div>
  </div>
);

export default CaseStudy;
