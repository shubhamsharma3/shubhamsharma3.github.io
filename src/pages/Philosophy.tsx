import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ThemeProvider } from "@/components/ThemeProvider";
import { CursorGlow } from "@/components/CursorGlow";
import { ScrollProgress } from "@/components/ScrollProgress";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { principles, summary } from "@/data/philosophy";

const Philosophy = () => (
  <ThemeProvider>
    <ScrollProgress />
    <CursorGlow />
    <div className="relative min-h-screen overflow-x-hidden">
      <Navbar />
      <main className="pt-32">
        <article className="container mx-auto max-w-3xl px-6 pb-32">
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
            <ArrowLeft className="h-4 w-4" /> Back home
          </Link>

          <motion.header
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-8"
          >
            <div className="font-mono text-xs uppercase tracking-wider text-muted-foreground">Essay</div>
            <h1 className="mt-3 font-display text-5xl font-bold tracking-tight md:text-6xl">
              <span className="text-gradient-primary">Product Philosophy</span>
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              How I approach product work — from problem-first thinking to empowered teams. Not a framework. Just what's worked for me.
            </p>
          </motion.header>

          <div className="mt-16 space-y-12">
            {principles.map((p, i) => (
              <motion.section
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.04 }}
              >
                <div className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight">{p.title}</h2>
                {p.quote && (
                  <blockquote className="mt-4 border-l-2 border-primary pl-4 text-lg italic text-foreground/80">
                    {p.quote}
                  </blockquote>
                )}
                <p className="mt-4 text-lg leading-relaxed text-foreground/90">{p.body}</p>
              </motion.section>
            ))}

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="card-premium p-8"
            >
              <h2 className="font-display text-2xl font-semibold">In summary</h2>
              <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                {summary.map((s) => (
                  <li key={s} className="flex items-center gap-3 text-foreground/85">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" /> {s}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm text-muted-foreground">
                None of this is original. I've learned from countless people, books and experiences. Take what resonates — leave the rest.
              </p>
            </motion.section>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  </ThemeProvider>
);

export default Philosophy;
