import { motion } from "framer-motion";
import { ArrowRight, Download, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

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
      <div className="absolute inset-0 -z-10 grid-pattern opacity-60" />
      <div className="absolute -top-40 left-1/2 -z-10 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-primary/20 blur-[120px] animate-glow-pulse" />
      <div className="absolute bottom-0 right-0 -z-10 h-[500px] w-[500px] rounded-full bg-accent/20 blur-[120px] animate-glow-pulse" />

      <div className="container relative mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="mx-auto max-w-4xl text-center"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-mono text-muted-foreground">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            Building GenAI for enterprise & government
          </div>

          <h1 className="font-display text-5xl font-bold tracking-tight md:text-7xl lg:text-[5.5rem]">
            <span className="block text-foreground">Shubham</span>
            <span className="block text-gradient-primary [background-size:200%_200%] animate-gradient-shift">Sharma</span>
          </h1>

          <div className="mt-6 flex h-10 items-center justify-center gap-2 text-lg md:text-2xl">
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

          <p className="mx-auto mt-8 max-w-2xl text-balance text-base text-muted-foreground md:text-lg">
            I build <span className="text-foreground">scalable data platforms and intelligent systems</span> for enterprise and government — turning complex problems into AI-native products that ship.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Button asChild size="lg" className="group rounded-full bg-gradient-primary text-primary-foreground shadow-glow hover:opacity-90">
              <a href="#work">View Work <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" /></a>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full border-border/60">
              <Link to="/resume">Résumé</Link>
            </Button>
            <Button asChild size="lg" variant="ghost" className="rounded-full">
              <Link to="/philosophy"><Download className="mr-2 h-4 w-4" /> Product Philosophy</Link>
            </Button>
          </div>

          <div className="mx-auto mt-20 grid max-w-3xl grid-cols-2 gap-4 md:grid-cols-4">
            {[
              { k: "10+", v: "Years building" },
              { k: "12+", v: "GenAI products shipped" },
              { k: "$2M+", v: "GenAI projects won" },
              { k: "100+", v: "Enterprise clients" },
            ].map((m) => (
              <div key={m.v} className="rounded-2xl glass p-4">
                <div className="font-display text-2xl font-bold text-gradient-primary md:text-3xl">{m.k}</div>
                <div className="mt-1 text-xs text-muted-foreground">{m.v}</div>
              </div>
            ))}
          </div>
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
