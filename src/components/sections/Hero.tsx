import { motion } from "framer-motion";
import { ArrowRight, Download, MapPin, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import portrait from "@/assets/shubham-portrait.png";

const roles = ["Product Leader", "AI Architect", "Data Strategist", "GenAI Builder", "0→1 Operator"];

export const Hero = () => {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % roles.length), 2200);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="top" className="relative isolate flex min-h-screen items-center overflow-hidden pt-24">
      <div className="absolute inset-0 -z-10 bg-mesh" />
      <div className="absolute inset-0 -z-10 grid-pattern opacity-50" />
      <div className="absolute -top-40 left-1/3 -z-10 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-primary/25 blur-[120px] animate-glow-pulse" />
      <div className="absolute bottom-0 right-0 -z-10 h-[500px] w-[500px] rounded-full bg-accent/25 blur-[120px] animate-glow-pulse" />

      <div className="container relative mx-auto px-6">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="lg:col-span-7"
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-mono text-muted-foreground">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              Available for advisory & 0→1 GenAI work
            </div>

            <h1 className="font-display text-5xl font-bold leading-[0.95] tracking-tight md:text-7xl lg:text-[5.5rem]">
              <span className="block text-foreground">Shubham</span>
              <span className="block text-gradient-primary [background-size:200%_200%] animate-gradient-shift">Sharma.</span>
            </h1>

            <div className="mt-6 flex h-10 items-center gap-2 text-lg md:text-2xl">
              <Sparkles className="h-5 w-5 text-primary" />
              <span className="text-muted-foreground">I work as a</span>
              <span className="relative inline-block min-w-[220px] text-left">
                {roles.map((r, idx) => (
                  <motion.span
                    key={r}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: i === idx ? 1 : 0, y: i === idx ? 0 : -12 }}
                    transition={{ duration: 0.4 }}
                    className="absolute left-0 font-display font-semibold text-gradient-primary"
                  >
                    {r}
                  </motion.span>
                ))}
              </span>
            </div>

            <p className="mt-8 max-w-xl text-balance text-base text-muted-foreground md:text-lg">
              I build <span className="text-foreground">scalable data platforms and intelligent systems</span> for enterprise and government — turning complex problems into AI-native products that ship.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              <Button asChild size="lg" className="group rounded-full bg-gradient-primary text-primary-foreground shadow-glow hover:opacity-90">
                <a href="#work">View Portfolio <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" /></a>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full border-border/60">
                <Link to="/case-studies">Read Case Studies</Link>
              </Button>
              <Button asChild size="lg" variant="ghost" className="rounded-full">
                <a href={`${import.meta.env.BASE_URL}shubham-sharma-resume.pdf`} download><Download className="mr-2 h-4 w-4" /> Résumé</a>
              </Button>
            </div>

            <div className="mt-6 inline-flex items-center gap-2 font-mono text-xs text-muted-foreground">
              <MapPin className="h-3.5 w-3.5" /> Based in India · Remote-friendly
            </div>
          </motion.div>

          {/* Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.7, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto w-full max-w-md lg:col-span-5"
          >
            <div className="relative aspect-[4/5] w-full">
              {/* animated rotating gradient ring */}
              <div className="absolute -inset-4 rounded-[2rem] bg-gradient-primary opacity-30 blur-2xl animate-glow-pulse" />
              <div className="absolute -inset-1 rounded-[2rem] bg-gradient-primary opacity-90 [background-size:300%_300%] animate-gradient-shift" />
              <div className="relative h-full w-full overflow-hidden rounded-[1.85rem] bg-card">
                <img
                  src={portrait}
                  alt="Portrait of Shubham Sharma"
                  width={800}
                  height={1000}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                <div className="pointer-events-none absolute inset-0 grid-pattern opacity-20 mix-blend-overlay" />
              </div>

              {/* floating badges */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -left-6 top-12 hidden rounded-2xl glass px-4 py-3 shadow-card md:block"
              >
                <div className="font-mono text-[10px] uppercase text-muted-foreground">Building</div>
                <div className="font-display text-sm font-semibold">GenAI · Data · Product</div>
              </motion.div>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-6 bottom-16 hidden rounded-2xl glass px-4 py-3 shadow-card md:block"
              >
                <div className="font-mono text-[10px] uppercase text-muted-foreground">Partner</div>
                <div className="font-display text-sm font-semibold">Microsoft · Govt · Enterprise</div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.7 }}
          className="mx-auto mt-20 grid max-w-4xl grid-cols-2 gap-4 md:grid-cols-4"
        >
          {[
            { k: "10+", v: "Years building" },
            { k: "12+", v: "GenAI products shipped" },
            { k: "$2M+", v: "GenAI projects won" },
            { k: "100+", v: "Enterprise clients" },
          ].map((m) => (
            <div key={m.v} className="rounded-2xl glass p-4 text-center">
              <div className="font-display text-2xl font-bold text-gradient-primary md:text-3xl">{m.k}</div>
              <div className="mt-1 text-xs text-muted-foreground">{m.v}</div>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-xs font-mono text-muted-foreground"
      >
        scroll ↓
      </motion.div>
    </section>
  );
};
