// import { motion } from "framer-motion";
// import { ArrowRight, Download, MapPin, Sparkles } from "lucide-react";
// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { Button } from "@/components/ui/button";
// import portrait from "@/assets/shubham-portrait.png";

// const roles = ["Product Leader", "AI Architect", "Data Strategist", "GenAI Builder", "0→1 Operator"];

// export const Hero = () => {
//   const [i, setI] = useState(0);
//   useEffect(() => {
//     const id = setInterval(() => setI((v) => (v + 1) % roles.length), 2200);
//     return () => clearInterval(id);
//   }, []);

//   return (
//     <section id="top" className="relative isolate flex min-h-screen items-center overflow-hidden pt-24">
//       <div className="absolute inset-0 -z-10 bg-mesh" />
//       <div className="absolute inset-0 -z-10 grid-pattern opacity-50" />
//       <div className="absolute -top-40 left-1/3 -z-10 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-primary/25 blur-[120px] animate-glow-pulse" />
//       <div className="absolute bottom-0 right-0 -z-10 h-[500px] w-[500px] rounded-full bg-accent/25 blur-[120px] animate-glow-pulse" />

//       <div className="container relative mx-auto px-6">
//         <div className="grid items-center gap-12 lg:grid-cols-12">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 1.5, duration: 0.8 }}
//             className="lg:col-span-7"
//           >
//             <div className="mb-6 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-mono text-muted-foreground">
//               <span className="relative flex h-2 w-2">
//                 <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
//                 <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
//               </span>
//               Available for advisory & 0→1 GenAI work
//             </div>

//             <h1 className="font-display text-5xl font-bold leading-[0.95] tracking-tight md:text-7xl lg:text-[5.5rem]">
//               <span className="block text-foreground">Shubham</span>
//               <span className="block text-gradient-primary [background-size:200%_200%] animate-gradient-shift">Sharma.</span>
//             </h1>

//             <div className="mt-6 flex h-10 items-center gap-2 text-lg md:text-2xl">
//               <Sparkles className="h-5 w-5 text-primary" />
//               <span className="text-muted-foreground">I work as a</span>
//               <span className="relative inline-block min-w-[220px] text-left">
//                 {roles.map((r, idx) => (
//                   <motion.span
//                     key={r}
//                     initial={{ opacity: 0, y: 12 }}
//                     animate={{ opacity: i === idx ? 1 : 0, y: i === idx ? 0 : -12 }}
//                     transition={{ duration: 0.4 }}
//                     className="absolute left-0 font-display font-semibold text-gradient-primary"
//                   >
//                     {r}
//                   </motion.span>
//                 ))}
//               </span>
//             </div>

//             <p className="mt-8 max-w-xl text-balance text-base text-muted-foreground md:text-lg">
//               I build <span className="text-foreground">scalable data platforms and intelligent systems</span> for enterprise and government — turning complex problems into AI-native products that ship.
//             </p>

//             <div className="mt-10 flex flex-wrap items-center gap-3">
//               <Button asChild size="lg" className="group rounded-full bg-gradient-primary text-primary-foreground shadow-glow hover:opacity-90">
//                 <a href="#work">View Portfolio <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" /></a>
//               </Button>
//               <Button asChild size="lg" variant="outline" className="rounded-full border-border/60">
//                 <Link to="/case-studies">Read Case Studies</Link>
//               </Button>
//               <Button asChild size="lg" variant="ghost" className="rounded-full">
//                 <a href={`${import.meta.env.BASE_URL}shubham-sharma-resume.pdf`} download><Download className="mr-2 h-4 w-4" /> Résumé</a>
//               </Button>
//             </div>

//             <div className="mt-6 inline-flex items-center gap-2 font-mono text-xs text-muted-foreground">
//               <MapPin className="h-3.5 w-3.5" /> Based in India · Remote-friendly
//             </div>
//           </motion.div>

//           {/* Portrait */}
//           <motion.div
//             initial={{ opacity: 0, scale: 0.92 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ delay: 1.7, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
//             className="relative mx-auto w-full max-w-md lg:col-span-5"
//           >
//             <div className="relative aspect-[4/5] w-full">
//               {/* animated rotating gradient ring */}
//               <div className="absolute -inset-4 rounded-[2rem] bg-gradient-primary opacity-30 blur-2xl animate-glow-pulse" />
//               <div className="absolute -inset-1 rounded-[2rem] bg-gradient-primary opacity-90 [background-size:300%_300%] animate-gradient-shift" />
//               <div className="relative h-full w-full overflow-hidden rounded-[1.85rem] bg-card">
//                 <img
//                   src={portrait}
//                   alt="Portrait of Shubham Sharma"
//                   width={800}
//                   height={1000}
//                   className="h-full w-full object-cover"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
//                 <div className="pointer-events-none absolute inset-0 grid-pattern opacity-20 mix-blend-overlay" />
//               </div>

//               {/* floating badges */}
//               <motion.div
//                 animate={{ y: [0, -10, 0] }}
//                 transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
//                 className="absolute -left-6 top-12 hidden rounded-2xl glass px-4 py-3 shadow-card md:block"
//               >
//                 <div className="font-mono text-[10px] uppercase text-muted-foreground">Building</div>
//                 <div className="font-display text-sm font-semibold">GenAI · Data · Product</div>
//               </motion.div>
//               <motion.div
//                 animate={{ y: [0, 10, 0] }}
//                 transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
//                 className="absolute -right-6 bottom-16 hidden rounded-2xl glass px-4 py-3 shadow-card md:block"
//               >
//                 <div className="font-mono text-[10px] uppercase text-muted-foreground">Partner</div>
//                 <div className="font-display text-sm font-semibold">Microsoft · Govt · Enterprise</div>
//               </motion.div>
//             </div>
//           </motion.div>
//         </div>

//         {/* Stats */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 2, duration: 0.7 }}
//           className="mx-auto mt-20 grid max-w-4xl grid-cols-2 gap-4 md:grid-cols-4"
//         >
//           {[
//             { k: "10+", v: "Years building" },
//             { k: "12+", v: "GenAI products shipped" },
//             { k: "$2M+", v: "GenAI projects won" },
//             { k: "100+", v: "Enterprise clients" },
//           ].map((m) => (
//             <div key={m.v} className="rounded-2xl glass p-4 text-center">
//               <div className="font-display text-2xl font-bold text-gradient-primary md:text-3xl">{m.k}</div>
//               <div className="mt-1 text-xs text-muted-foreground">{m.v}</div>
//             </div>
//           ))}
//         </motion.div>
//       </div>

//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 2.5 }}
//         className="absolute bottom-8 left-1/2 -translate-x-1/2 text-xs font-mono text-muted-foreground"
//       >
//         scroll ↓
//       </motion.div>
//     </section>
//   );
// };



import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Globe,
  Zap,
  Rocket,
  BarChart3,
  Cpu,
  Users,
  Box,
} from "lucide-react";
import portrait from "@/assets/shubham-portrait.png";
import { useEffect, useRef, useState } from "react";
// import { Link } from "react-router-dom";
import { Link, useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
// Using a placeholder instead of missing local asset
// const portrait = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=1000";

const XIcon = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const roles = [
  "Product Manager",
  "GenAI Product Leader",
  "Product & Platform Strategist",
  "0→1  Product Operator",
];

export const Hero = () => {
  // typewriter for role
  const [roleIdx, setRoleIdx] = useState(0);
  const [typed, setTyped] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIdx];
    const speed = deleting ? 10 : 15;
    const t = setTimeout(() => {
      if (!deleting) {
        const next = current.slice(0, typed.length + 1);
        setTyped(next);
        if (next === current) setTimeout(() => setDeleting(true), 1400);
      } else {
        const next = current.slice(0, typed.length - 1);
        setTyped(next);
        if (next === "") {
          setDeleting(false);
          setRoleIdx((v) => (v + 1) % roles.length);
        }
      }
    }, speed);
    return () => clearTimeout(t);
  }, [typed, deleting, roleIdx]);

  // mouse parallax
  const ref = useRef<HTMLDivElement>(null);

  return (
    <section
      id="top"
      ref={ref}
      className="relative isolate flex h-screen min-h-[720px] items-center overflow-hidden bg-[#050309] pt-16 text-white"
    >
      {/* ───────────────── BACKGROUND LAYERS ───────────────── */}
      <div className="absolute inset-0 -z-50 bg-[radial-gradient(ellipse_at_top,#1a0d3d_0%,#0a0612_55%,#050309_100%)]" />

      {/* Digital Grid Horizon (Floor) */}
      <div className="absolute bottom-0 left-0 right-0 -z-40 h-[40vh] overflow-hidden">
        <div 
          className="absolute inset-0 opacity-[0.1]"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(139, 92, 246, 0.2) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(139, 92, 246, 0.2) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
            transform: 'perspective(1000px) rotateX(75deg) translateY(0px) scale(2)',
            transformOrigin: 'bottom'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050309] via-[#050309]/90 to-transparent" />
      </div>

      {/* 8. Particle / Network Mesh Floor overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-[25vh] -z-30 overflow-hidden pointer-events-none opacity-[0.12]">
        <svg width="100%" height="100%" viewBox="0 0 1200 400" preserveAspectRatio="none" className="translate-y-20">
          <defs>
            <linearGradient id="meshGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.2" />
              <stop offset="50%" stopColor="#22d3ee" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.2" />
            </linearGradient>
          </defs>
          <path 
            d="M0,300 L150,220 L300,320 L450,200 L600,300 L750,220 L900,340 L1050,240 L1200,300"
            fill="none" 
            stroke="url(#meshGrad)" 
            strokeWidth="0.5"
          />
          <path 
            d="M0,350 L200,280 L400,350 L600,250 L800,370 L1000,270 L1200,350"
            fill="none" 
            stroke="rgba(34,211,238,0.2)" 
            strokeWidth="0.5"
          />
          {[
            {x: 150, y: 220}, {x: 450, y: 200}, {x: 750, y: 220}, 
            {x: 1050, y: 240}, {x: 600, y: 250}, {x: 1000, y: 270}
          ].map((pt, i) => (
            <circle key={i} cx={pt.x} cy={pt.y} r="2" fill="#22d3ee" className="animate-pulse" />
          ))}
        </svg>
      </div>

      {/* Atmospheric Bubbles/Spheres */}
      <div className="pointer-events-none absolute inset-0 -z-30 overflow-hidden">
        <motion.div
          animate={{ y: [0, -40, 0], x: [0, 20, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-[10%] top-[20%] h-32 w-32 rounded-full bg-gradient-to-br from-violet-500/20 to-transparent blur-xl"
        />
        <motion.div
          animate={{ y: [0, 50, 0], x: [0, -30, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute right-[15%] top-[10%] h-48 w-48 rounded-full bg-gradient-to-tr from-cyan-500/10 to-transparent blur-2xl"
        />
        <motion.div
          animate={{ opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute bottom-[30%] left-[40%] h-24 w-24 rounded-full bg-violet-600/20 blur-xl"
        />
      </div>

      {/* Glowing Starfield */}
      <div
        className="pointer-events-none absolute inset-0 -z-40 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(rgba(180,160,255,0.3) 1px, transparent 1px), radial-gradient(rgba(120,180,255,0.2) 1px, transparent 1px)",
          backgroundSize: "120px 120px, 80px 80px",
          backgroundPosition: "0 0, 40px 40px",
        }}
      />

      {/* Atmospheric Glow Orbs */}
      <div className="absolute -left-40 top-10 -z-30 h-[520px] w-[520px] rounded-full bg-[#6d28d9]/30 blur-[130px]" />
      <div className="absolute -right-32 bottom-0 -z-30 h-[600px] w-[600px] rounded-full bg-[#1d4ed8]/25 blur-[150px]" />

      <div className="container relative mx-auto px-6">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          
          {/* ───────── LEFT CONTENT ───────── */}
          <div className="z-20">
            {/* Status Chip */}
            {/* <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-xs font-medium text-white/90 backdrop-blur-2xl"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              Available for advisory & 0→1 GenAI work
            </motion.div> */}

            {/* Main Heading */}
            <div className="relative mt-2">
              <h1 className="font-display text-[12vw] font-black uppercase leading-[0.82] tracking-tight md:text-[5.5rem] lg:text-[9.5rem]">
                <motion.span
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                  className="block text-white"
                >
                  SHUBHAM
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                  className="relative block bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-300 bg-clip-text text-transparent"
                >
                  SHARMA
                </motion.span>
              </h1>
              {/* Decorative signature-style subtitle */}
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.15 }}
                transition={{ delay: 1, duration: 1 }}
                className="pointer-events-none absolute right-4 top-[56%] hidden select-none text-3xl italic text-white md:block"
                style={{ fontFamily: "'Brush Script MT', cursive" }}
              >
                Shubham Sharma
              </motion.span>
            </div>

            {/* Role + Typewriter */}

<div className="mt-3 flex flex-wrap items-center gap-4">

  <div className="flex items-center gap-2.5 text-white/70">
    <Sparkles className="h-4 w-4 text-violet-400" />

    <span className="text-xs font-medium uppercase tracking-wider">
      I work as a
    </span>
  </div>

  <div className="inline-flex items-center rounded-full border border-violet-400/30 bg-violet-500/10 px-6 py-2 backdrop-blur-xl shadow-[0_0_40px_-5px_rgba(139,92,246,0.5)]">
    <span className="bg-gradient-to-r from-violet-300 to-cyan-300 bg-clip-text text-base font-bold text-transparent md:text-xl">
      {typed}
    </span>

    <span className="ml-1 inline-block h-6 w-[2px] animate-pulse bg-violet-300" />
  </div>

</div>

            

            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.7 }}
              className="mt-4 max-w-lg text-sm leading-relaxed text-white/70 md:text-base lg:text-[17px]"
            >
              I build <span className="font-bold text-white">scalable data platforms</span> and{" "}
              <span className="font-bold text-white">intelligent systems</span> for enterprise and
              government — turning complex problems into AI-native products that ship.
            </motion.p>

            {/* Primary Actions */}
            <div className="mt-4 flex flex-wrap items-center gap-3">
              <a
                href="/#projects"
                className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-gradient-to-r from-violet-600 via-fuchsia-600 to-cyan-500 px-8 py-4 text-sm font-bold text-white shadow-[0_15px_45px_-12px_rgba(139,92,246,0.6)] transition-all hover:scale-[1.03] hover:shadow-[0_20px_60px_-10px_rgba(139,92,246,0.75)] active:scale-[0.98]"
              >
                View My Work
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <Link
                to="/case-studies"
                className="group inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-8 py-4 text-sm font-bold text-white/90 backdrop-blur-2xl transition-all hover:bg-white/[0.08] hover:border-white/20 active:scale-[0.98]"
              >
                Explore Case Studies
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Social Links */}
            {/* <div className="mt-4 flex items-center gap-3">
              {[
                { Icon: Linkedin, href: "#", label: "LinkedIn" },
                { Icon: Github, href: "#", label: "GitHub" },
                { Icon: XIcon, href: "#", label: "X" },
                { Icon: Mail, href: "#", label: "Email" },
              ].map(({ Icon, href, label }, i) => (
                <a
                  key={label}
                  href={href}
                  className="group relative grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/[0.05] text-white/50 backdrop-blur-3xl transition-all hover:scale-110 hover:border-violet-400/50 hover:text-white"
                >
                  <Icon className="h-4 w-4" />
                  <span className="absolute -top-8 left-1/2 -translate-x-1/2 rounded bg-violet-600 px-2 py-1 text-[9px] font-bold text-white opacity-0 transition-all group-hover:opacity-100 uppercase tracking-tighter">
                    {label}
                  </span>
                </a>
              ))}
            </div> */}

            {/* Quick Metrics Strip */}
            {/* grid max-w-md grid-cols-2 gap-8 */}
            <div className="mt-6 flex items-center justify-between w-[550px] rounded-3xl border border-white/10 bg-white/[0.02] p-3 backdrop-blur-2xl sm:grid-cols-4">
              {[
                { Icon: MapPin, label: "Based in", value: "India" },
                { Icon: Globe, label: "Focus", value: "Enterprise AI" },
                { Icon: Zap, label: "Building", value: "GenAI Products" },
                { Icon: Rocket, label: "Open to", value: "Collaborations" },
              ].map(({ Icon, label, value }) => (
                <div key={label} className="flex items-center gap-3">
                  <div className="grid h-9 w-9 place-items-center rounded-xl bg-violet-500/10 text-violet-400">
                    <Icon className="h-4.5 w-4.5" />
                  </div>
                  <div className="leading-tight">
                    <div className="text-[10px] font-bold uppercase tracking-widest text-white/40">{label}</div>
                    <div className="text-xs font-semibold text-white/90">{value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ───────── RIGHT CONTENT: 3D STAGE ───────── */}
          <div 
            className="relative mx-auto flex h-[540px] w-full max-w-[640px] items-center justify-center lg:translate-y-7 lg:-translate-x-10" // TWEAK THIS: Use negative like -translate-x-10 to move left/up
            style={{ perspective: 700 }} // TWEAK THIS: Lower = more extreme 3D, Higher = flatter
          >
            
            {/* Perspective Wrapper for all 3D elements */}
            <motion.div 
              style={{ 
                rotateY: -20, // TWEAK THIS: Change the side-tilt angle
                rotateX: 2,   // TWEAK THIS: Change the top-tilt angle
                transformStyle: "preserve-3d"
              }}
              className="relative flex h-full w-full items-center justify-center"
            >
              {/* 3. Large Background Typography - GLOBAL */}
              <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden">
                <span
                  className="font-display text-[15rem] font-black uppercase leading-none tracking-tighter text-transparent select-none opacity-[0.05]"
                  style={{
                    WebkitTextStroke: "1px rgba(255,255,255,1)",
                    transform: "translateY(-30px) translateZ(-80px)"
                  }}
                >
                  GLOBAL
                </span>
              </div>

              {/* Large Glowing Ring */}
              <div className="absolute inset-0 flex items-center justify-center" style={{ transform: "translateZ(-40px)" }}>
                <svg viewBox="0 0 500 500" className="h-[95%] w-[95%] opacity-30">
                  <defs>
                    <linearGradient id="ringGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.8" />
                      <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.6" />
                      <stop offset="100%" stopColor="#d946ef" stopOpacity="0.4" />
                    </linearGradient>
                  </defs>
                  <motion.circle
                    cx="250"
                    cy="250"
                    r="248"
                    stroke="url(#ringGradient)"
                    strokeWidth="0.8"
                    strokeDasharray="4 12"
                    fill="none"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
                  />
                </svg>
              </div>

              {/* 4. Main Glowing Rectangle Panel - The Portal */}
              <div
                className="absolute z-0 h-[360px] w-[600px] rounded-[48px] border-[2px] border-cyan-400/40 bg-[#0c0816]/70 backdrop-blur-[24px] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.8),_inset_0_0_80px_rgba(34,211,238,0.1)]"
                style={{ transformStyle: "preserve-3d" }}
              >
                  {/* Side Extrusion (Thickness) */}
                  <div className="absolute inset-y-8 -right-[20px] w-[40px] rounded-[40px] bg-[#1a1528] border-r border-white/20" style={{ transform: "rotateY(90deg) translateZ(20px)" }} />
                  <div className="absolute -inset-[2px] rounded-[48px] border-[1px] border-white/10" style={{ transform: "translateZ(-1px)" }} />
                  {/* Tech Label: Top Left */}
                  <div className="absolute top-6 left-10 flex flex-col gap-0.5">
                    <span className="text-[10px] font-mono font-bold tracking-widest text-cyan-400/70 border-b border-cyan-400/20 pb-0.5 uppercase">DEEPTECH.AI</span>
                    <span className="text-[9px] font-mono text-white/50 uppercase">ADVANCED_SYSTEMS // ACTIVE</span>
                  </div>

                  {/* Tech Label: Bottom Right */}
                  <div className="absolute bottom-10 right-10 flex flex-col items-end gap-0.5">
                    <span className="text-[9px] font-mono text-white/30 uppercase tracking-widest">ENCRYPTION: AES-256</span>
                    <span className="text-[9px] font-mono text-cyan-400 animate-pulse">● SIGNAL_ACTIVE</span>
                  </div>

                  {/* Digital Bracket Corners (Wireframe #4 accent) */}
                  {/* <div className="absolute top-0 left-0 h-16 w-16 border-t-4 border-l-4 border-cyan-400/60 rounded-tl-[48px] m-[-2px] transition-all hover:border-cyan-300" />
                  <div className="absolute top-0 right-0 h-16 w-16 border-t-4 border-r-4 border-cyan-400/60 rounded-tr-[48px] m-[-2px]" />
                  <div className="absolute bottom-0 left-0 h-16 w-16 border-b-4 border-l-4 border-cyan-400/60 rounded-bl-[48px] m-[-2px]" />
                  <div className="absolute bottom-0 right-0 h-16 w-16 border-b-4 border-r-4 border-cyan-400/60 rounded-br-[48px] m-[-2px]" /> */}

                  {/* Digital Matrix Grid */}
                  <div 
                      className="absolute inset-[8px] opacity-[0.15] rounded-[40px]"
                      style={{
                          backgroundImage: `
                            linear-gradient(to right, rgba(34, 211, 238, 0.4) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(34, 211, 238, 0.4) 1px, transparent 1px)
                          `,
                          backgroundSize: '24px 24px'
                      }}
                  />
                  
                  {/* Holographic Overlays */}
                  <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-cyan-500/10 via-transparent to-transparent opacity-40 rounded-b-[48px]" />
                  <div className="absolute -left-20 top-0 h-full w-40 bg-violet-600/10 blur-[80px] mix-blend-screen" />
                  <div className="absolute -right-20 top-0 h-full w-40 bg-cyan-600/10 blur-[80px] mix-blend-screen" />
                  
                  {/* Vertical Scanline Animation - Refined */}
                  <motion.div 
                    animate={{ top: ['0%', '90%'] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                    className="absolute left-[10px] right-[10px] h-[40px] bg-gradient-to-b from-transparent via-cyan-400/30 to-transparent opacity-30"
                  />

                  {/* Decorative Tech Rings around corners */}
                  <div className="absolute -top-3 -left-3 h-12 w-12 border border-cyan-400/20 rounded-full animate-spin-slow" />
                  <div className="absolute -bottom-3 -right-3 h-12 w-12 border border-violet-400/20 rounded-full animate-spin-reverse-slow" />

                  {/* Inner Border Layer */}
                  <div className="absolute inset-[10px] rounded-[38px] border-[1px] border-white/10 shadow-[inner_0_0_20px_rgba(255,255,255,0.05)]" />
                  
                  {/* Small Data Readout - Left Side */}
                  <div className="absolute left-10 top-1/2 -translate-y-1/2 flex flex-col gap-1 opacity-20">
                    {[...Array(6)].map((_, i) => (
                      <div key={i} className={`h-0.5 bg-cyan-400`} style={{ width: `${Math.random() * 20 + 5}px` }} />
                    ))}
                  </div>
              </div>

              {/* Backdrop Radial Halo (Soft Head Light behind frame) */}
              <div className="absolute h-[480px] w-[480px] rounded-full bg-[radial-gradient(circle,rgba(139,92,246,0.3)_0%,rgba(6,182,212,0.15)_40%,transparent_75%)] blur-3xl opacity-60" style={{ transform: "translateZ(-10px)" }} />
              
              {/* 5. Hero Image (Emerging Effect) */}
              <div
                style={{
                  zIndex: 10,
                  // Clip at frame bottom while allowing top overflow
                  // Stage h 540, Frame h 360, centered. Top at 90, Bottom at 450.
                  // 450 / 540 = 83.33%
                  clipPath: "polygon(0% -200%, 100% -200%, 100% 83.33%, 0% 83.33%)",
                  transformStyle: "preserve-3d",
                }}
                className="absolute inset-0 pointer-events-none"
              >
                <img
                  src={portrait}
                  alt="Shubham Sharma"
                  className="absolute left-1/2 top-1/2 h-[142%] w-auto max-w-none object-contain drop-shadow-[0_45px_120px_rgba(34,211,238,0.5)]"
                  style={{
                    // Position slightly higher to make sure head pops out more
                    // TWEAK THIS: The 180px is how far forward the character pops
                    transform: "translate3d(-50%, -52%, 180px)", 
                    filter: "brightness(1.15) contrast(1.05) saturate(1.05)"
                  }}
                />
                {/* Energy line at the bottom clip border */}
                <div className="absolute top-[83.33%] left-1/2 -translate-x-1/2 w-[540px] h-[2px] bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent" />
                <div className="absolute top-[83.33%] left-1/2 -translate-x-1/2 w-[480px] h-[8px] bg-cyan-400/20 blur-[6px] rounded-full" />
              </div>

              {/* Floating 3D/Glass Cards ───────────────── */}

              {/* Card: 10+ AI Deployments (Top Right) */}
              <FloatCard
                className="absolute right-[-20px] top-[15%] z-30 w-[240px]" // TWEAK THIS: w-[...] for width, add h-[...] for height
                delay={1.1}
                float={8}
                z={80}
              >
                <div className="flex items-center gap-4">
                  {/* Left: Component icon */}
                  <div className="shrink-0">
                    <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-violet-500/20 to-cyan-400/20 border border-white/20 text-cyan-300 shadow-inner backdrop-blur-md">
                      <BarChart3 className="h-6 w-6" />
                    </div>
                  </div>
                  
                  {/* Right: Text content */}
                  <div className="flex-1">
                    <div className="text-2xl font-black tracking-tight text-white">10<span className="text-cyan-400">+</span></div>
                    <div className="text-[10px] font-bold uppercase tracking-[0.15em] text-white/60">AI PRODUCTS</div>
                    <div className="text-[9px] text-white/40 font-mono tracking-tighter mt-0.5">Deployed across sectors</div>
                  </div>
                </div>
              </FloatCard>

              {/* Card: GenAI Infra (Center Left) */}
              <FloatCard
                className="absolute left-[-140px] top-[40%] z-100 w-[240px]" // TWEAK THIS: w-[...] for width, add h-[...] for height
                delay={1.3}
                float={10}
                z={120}
              >
                <div className="flex items-center gap-4">
                  {/* Left Icon */}
                  <div className="shrink-0">
                    <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-violet-600/30 to-fuchsia-500/30 border border-white/10 text-white shadow-lg backdrop-blur-md">
                      <Cpu className="h-6 w-6" />
                    </div>
                  </div>

                  {/* Right Content */}
                  <div className="flex-1">
                    <div className="text-lg font-black text-white">10+ Years</div>
                    <div className="text-[11px] font-bold text-white/70 leading-snug uppercase tracking-wide">
                      Building GenAI and Data Platforms
                    </div>
                  </div>
                </div>
              </FloatCard>

              {/* Card: Building Intelligent Systems (Bottom Left) */}
              <FloatCard
                className="absolute bottom-[4%] left-[7%] z-30 w-[300px]" // TWEAK THIS: w-[...] for width, add h-[...] for height
                delay={1.5}
                float={7}
                z={100}
              >
                <div className="flex items-center gap-5">
                  {/* Left Visual */}
                  <div className="shrink-0">
                    <div className="relative">
                      <div className="absolute inset-0 rounded-full bg-cyan-400/20 blur-md" />
                      <div className="relative grid h-14 w-14 place-items-center rounded-full border border-white/20 bg-white/5 backdrop-blur-xl">
                        <Box className="h-7 w-7 text-cyan-300" />
                      </div>
                    </div>
                  </div>

                  {/* Right Text Content */}
                  <div className="flex-1">
                    <div className="text-lg font-bold leading-tight text-white tracking-tight">
                      0 to 1{" "}
                      <span className="text-cyan-400">AI Execution</span>
                    </div>
                    <div className="mt-1 text-[11px] text-white/50 tracking-wider font-medium">
                      Driving strategy, architecture and implementation
                    </div>
                  </div>
                </div>
              </FloatCard>

              {/* Card: Govt + Enterprise (Bottom Right) */}
              <FloatCard
                className="absolute bottom-[24%] right-[-50px] z-30 w-[240px]" // TWEAK THIS: w-[...] for width, add h-[...] for height
                delay={1.7}
                float={9}
                z={60}
              >
                <div className="flex items-center gap-4">
                  {/* Left Icon */}
                  <div className="shrink-0">
                    <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-fuchsia-500/30 to-violet-700/30 border border-white/10 text-white shadow-lg backdrop-blur-md">
                      <Users className="h-6 w-6" />
                    </div>
                  </div>

                  {/* Right Content */}
                  <div className="flex-1">
                    <div className="font-black text-sm text-white leading-tight tracking-wider">
                      Industries 
                    </div>
                    <div className="mt-2 text-[8px] font-bold uppercase tracking-[0.2em] text-cyan-400">
                      Government, PSU & Enterprise Domains
                    </div>
                  </div>
                </div>
              </FloatCard>
            </motion.div>

            {/* ───── FLOATING DECORATIONS ───── */}

            {/* Large Purple Cube */}
            <motion.div
              animate={{ 
                y: [0, -20, 0], 
                rotate: [45, 65, 45],
                scale: [1, 1.05, 1] 
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute left-[15%] top-[15%] z-20 flex h-16 w-16 items-center justify-center rounded-2xl border border-violet-400/40 bg-gradient-to-br from-violet-500/40 to-fuchsia-500/30 backdrop-blur-xl shadow-[0_0_50px_-10px_rgba(139,92,246,0.8)]"
            >
              <Box className="h-7 w-7 text-white/90" />
            </motion.div>

            {/* Floating Orbs & Dots */}
            {[
              { pos: "top-10 right-20", size: "h-3 w-3", color: "bg-cyan-400", delay: 0 },
              { pos: "bottom-40 left-10", size: "h-4 w-4", color: "bg-violet-400", delay: 0.5 },
              { pos: "top-1/2 right-10", size: "h-2 w-2", color: "bg-fuchsia-400", delay: 1 },
            ].map((dot, i) => (
              <motion.div
                key={i}
                animate={{ y: [0, -15, 0], opacity: [0.4, 0.8, 0.4] }}
                transition={{ duration: 4 + i, repeat: Infinity, delay: dot.delay }}
                className={`absolute ${dot.pos} ${dot.size} ${dot.color} rounded-full blur-sm`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Down Hint ───────────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2 }}
        className="absolute bottom-4 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-[10px] font-bold uppercase tracking-[0.5em] text-white/40"
      >
        <div className="relative flex h-10 w-6 justify-center rounded-full border border-white/20 p-1.5">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="h-2 w-1 rounded-full bg-violet-400 shadow-[0_0_10px_rgba(139,92,246,0.8)]"
          />
        </div>
        <span className="hidden sm:block">Scroll to explore</span>
      </motion.div>
    </section>
  );
};

// Reusable Glassmorphism Card Wrapper
const FloatCard = ({
  children,
  className = "",
  delay = 0,
  float = 8,
  z = 40,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  float?: number;
  z?: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 30, scale: 0.9 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    transition={{ delay, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    className={className}
    style={{ transformStyle: "preserve-3d" }}
  >

  

    <motion.div
      animate={{ 
        y: [0, -float, 0],
      }}
      transition={{ 
        duration: 6 + float * 0.1, 
        repeat: Infinity, 
        ease: "easeInOut" 
      }}
      className="group relative rounded-[32px] border border-white/15 bg-white/[0.01] p-5 backdrop-blur-[7px] transition-all duration-500 hover:border-white/40"
      style={{
        boxShadow: `
          0 40px 100px -20px rgba(0, 0, 0, 0.8), 
          inset 0 0 80px rgba(255, 255, 255, 0.03),
          inset 0 1px 2px rgba(255, 255, 255, 0.4),
          inset 0 -1px 1px rgba(255, 255, 255, 0.1)
        `,
        transform: `translateZ(${z}px)`,
        transformStyle: "preserve-3d"
      }}
    >
      {/* Liquid Glass Highlight (Top Specular) */}
      <div className="absolute inset-0 rounded-[32px] bg-[radial-gradient(circle_at_30%_0%,rgba(255,255,255,0.1),transparent_50%)] pointer-events-none" />
      
      {/* Liquid Depth Gradient */}
      <div className="absolute inset-0 rounded-[32px] bg-[radial-gradient(circle_at_bottom_right,rgba(139,92,246,0.05),transparent_60%)] pointer-events-none" />
      
      {/* 3D Thickness Edge (Simulated right-side extrusion) */}
      <div 
        className="absolute -right-[1px] inset-y-8 w-[6px] rounded-full bg-white/20 blur-[0.5px] pointer-events-none" // TWEAK THIS: Edge width
        style={{ transform: "rotateY(90deg) translateZ(1px)" }}
      />

      {/* Internal Glass Refraction Layer */}
      <div 
        className="absolute inset-[1px] rounded-[31px] border border-white/10 bg-white/[0.02] pointer-events-none"
        style={{ transform: "translateZ(-6px)" }} // TWEAK THIS: Internal depth (more negative = deeper)
      />
      
      {/* Frosted Edge Reflection */}
      <div className="absolute -inset-[1px] rounded-[32px] border-t border-l border-white/30 opacity-40 pointer-events-none" />
      
      {/* Internal Content Glow */}
      <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      
      <div className="relative z-10">{children}</div>
    </motion.div>
  </motion.div>
);


// import { motion } from "framer-motion";
// import {
//   ArrowRight,
//   BrainCircuit,
//   Globe,
//   Sparkles,
//   SunMedium,
// } from "lucide-react";

// import heroImage from "@/assets/shubham-portrait.png";

// const floatingCards = [
//   {
//     title: "GenAI",
//     subtitle: "Infrastructure & Applications",
//     icon: BrainCircuit,
//     className:
//       "top-[18%] left-[58%] w-[260px] h-[220px] z-30",
//   },
//   {
//     title: "Enterprise",
//     subtitle: "Govt + Enterprise",
//     icon: Globe,
//     className:
//       "bottom-[16%] right-[4%] w-[300px] h-[220px] z-30",
//   },
//   {
//     title: "Building",
//     subtitle: "Intelligent Systems",
//     icon: Sparkles,
//     className:
//       "bottom-[10%] left-[52%] w-[320px] h-[150px] z-30",
//   },
// ];

// export default function Hero() {
//   return (
//     <section className="relative min-h-screen overflow-hidden bg-[#04050b] text-white">
//       {/* BACKGROUND */}

//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(124,58,237,0.22),transparent_32%),radial-gradient(circle_at_80%_10%,rgba(6,182,212,0.18),transparent_30%),radial-gradient(circle_at_50%_100%,rgba(168,85,247,0.18),transparent_45%)]" />

//       {/* VIGNETTE */}

//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,rgba(0,0,0,0.65)_100%)]" />

//       {/* GRID */}

//       <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(rgba(255,255,255,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.5)_1px,transparent_1px)] bg-[size:120px_120px]" />

//       {/* ORBIT */}

//       <div className="absolute right-[-10%] top-[8%] h-[980px] w-[980px] rounded-full border border-violet-500/20" />

//       <div className="absolute right-[0%] top-[18%] h-[760px] w-[760px] rounded-full border border-cyan-400/10" />

//       {/* ENERGY GLOW */}

//       <div className="absolute right-[14%] top-[14%] h-[720px] w-[720px] rounded-full bg-violet-500/15 blur-[140px]" />

//       <div className="absolute right-[8%] top-[30%] h-[400px] w-[400px] rounded-full bg-cyan-400/10 blur-[120px]" />

//       {/* FLOATING PARTICLES */}

//       <div className="absolute left-[18%] top-[22%] h-2 w-2 rounded-full bg-violet-400 shadow-[0_0_20px_#8b5cf6]" />

//       <div className="absolute left-[68%] top-[16%] h-3 w-3 rounded-full bg-cyan-300 shadow-[0_0_30px_#22d3ee]" />

//       <div className="absolute right-[14%] top-[20%] h-5 w-5 rounded-full bg-violet-400/60 blur-[1px] shadow-[0_0_40px_#8b5cf6]" />

//       <div className="absolute bottom-[24%] left-[42%] h-4 w-4 rounded-full bg-fuchsia-400/60 blur-[1px] shadow-[0_0_40px_#d946ef]" />

//       {/* FLOATING CUBE */}

//       <motion.div
//         animate={{
//           y: [0, -18, 0],
//           rotate: [0, 12, 0],
//         }}
//         transition={{
//           duration: 6,
//           repeat: Infinity,
//           ease: "easeInOut",
//         }}
//         className="absolute left-[48%] top-[26%] z-20 h-[88px] w-[88px] rounded-[22px] border border-violet-400/20 bg-gradient-to-br from-violet-500/25 to-cyan-400/10 backdrop-blur-xl"
//       />

//       {/* FLOATING GLASS SPHERE */}

//       <motion.div
//         animate={{
//           y: [0, -12, 0],
//         }}
//         transition={{
//           duration: 4,
//           repeat: Infinity,
//           ease: "easeInOut",
//         }}
//         className="absolute right-[12%] top-[10%] z-20 h-[92px] w-[92px] rounded-full border border-cyan-300/20 bg-gradient-to-br from-violet-500/25 to-cyan-400/20 backdrop-blur-2xl"
//       />

//       {/* NAVBAR */}

//       <header className="relative z-50 mx-auto flex max-w-[1600px] items-center justify-between px-10 pt-8">
//         <div className="flex items-center gap-5">
//           <div className="flex h-16 w-16 items-center justify-center rounded-full border border-violet-500/30 bg-violet-500/10 text-2xl font-bold text-violet-300 shadow-[0_0_40px_rgba(139,92,246,0.3)] backdrop-blur-xl">
//             S
//           </div>

//           <div className="text-5xl font-black tracking-tight">
//             shubham.
//           </div>
//         </div>

//         <nav className="hidden items-center gap-14 rounded-full border border-white/10 bg-white/5 px-14 py-7 text-[18px] text-white/70 backdrop-blur-xl lg:flex">
//           <a href="#">About</a>
//           <a href="#">Portfolio</a>
//           <a href="#">Experience</a>
//           <a href="#">Case Studies</a>
//           <a href="#">Résumé</a>
//           <a href="#">Contact</a>
//         </nav>

//         <div className="flex items-center gap-5">
//           <button className="flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur-xl">
//             <SunMedium className="h-5 w-5 text-white/80" />
//           </button>

//           <button className="rounded-full bg-gradient-to-r from-violet-500 to-cyan-400 px-10 py-5 text-lg font-semibold shadow-[0_0_50px_rgba(139,92,246,0.45)] transition-all duration-300 hover:scale-105">
//             Let’s talk
//           </button>
//         </div>
//       </header>

//       {/* HERO */}

//       <div className="relative z-20 mx-auto grid min-h-screen max-w-[1600px] grid-cols-1 items-center gap-10 px-10 pb-20 pt-24 lg:grid-cols-[0.95fr_1.05fr]">
//         {/* LEFT */}

//         <div className="relative z-30 max-w-[760px]">
//           {/* AVAILABILITY */}

//           <div className="mb-10 inline-flex items-center gap-4 rounded-full border border-violet-400/20 bg-violet-500/10 px-8 py-4 backdrop-blur-xl">
//             <div className="h-3 w-3 rounded-full bg-emerald-400 shadow-[0_0_20px_#4ade80]" />

//             <span className="font-mono text-sm uppercase tracking-[0.35em] text-white/70">
//               Available for advisory & 0→1 GenAI work
//             </span>
//           </div>

//           {/* TITLE */}

//           <div className="relative leading-[0.9]">
//             <h1 className="text-[132px] font-black tracking-[-0.08em] text-white">
//               SHUBHAM
//             </h1>

//             <h1 className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-[132px] font-black tracking-[-0.08em] text-transparent">
//               SHARMA
//             </h1>

//             <div className="absolute bottom-[14px] left-[320px] rotate-[-4deg] text-7xl italic text-white/18">
//               Sharma
//             </div>
//           </div>

//           {/* ROLE */}

//           <div className="mt-10 flex items-center gap-5 text-3xl text-white/80">
//             <Sparkles className="h-7 w-7 text-violet-400" />

//             <span>I work as a</span>
//           </div>

//           <div className="mt-4 inline-block bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-6xl font-bold text-transparent">
//             AI Systems Architect
//           </div>

//           {/* DESCRIPTION */}

//           <p className="mt-10 max-w-[720px] text-[30px] leading-[1.5] text-white/60">
//             I build scalable data platforms and intelligent systems for
//             enterprise and government — transforming complex workflows into
//             AI-native products that ship.
//           </p>

//           {/* CTA */}

//           <div className="mt-14 flex flex-wrap items-center gap-6">
//             <button className="group flex items-center gap-4 rounded-2xl bg-gradient-to-r from-violet-600 to-cyan-400 px-10 py-6 text-2xl font-semibold shadow-[0_0_60px_rgba(139,92,246,0.5)] transition-all duration-300 hover:scale-[1.03]">
//               View My Work

//               <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
//             </button>

//             <button className="rounded-2xl border border-white/10 bg-white/[0.03] px-10 py-6 text-2xl text-white/80 backdrop-blur-xl transition-all duration-300 hover:border-violet-400/30 hover:bg-white/[0.06]">
//               Explore Case Studies
//             </button>
//           </div>

//           {/* SOCIAL */}

//           <div className="mt-14 flex items-center gap-5">
//             {["in", "gh", "x", "mail"].map((item) => (
//               <div
//                 key={item}
//                 className="flex h-16 w-16 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-lg text-white/70 backdrop-blur-xl transition-all duration-300 hover:border-violet-400/40 hover:bg-violet-500/10"
//               >
//                 {item}
//               </div>
//             ))}
//           </div>

//           {/* BOTTOM INFO */}

//           <div className="mt-16 flex flex-wrap gap-4 rounded-[28px] border border-white/10 bg-white/[0.03] p-6 backdrop-blur-2xl">
//             {[
//               "Based in India",
//               "Available Worldwide",
//               "Building AI Products",
//               "Open to Advisory",
//             ].map((item) => (
//               <div
//                 key={item}
//                 className="rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-4 text-lg text-white/70"
//               >
//                 {item}
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* RIGHT */}

//         <div className="relative flex min-h-[900px] items-center justify-center">
//           {/* MAIN FRAME */}

//           <div className="absolute h-[720px] w-[620px] rounded-[42px] border border-violet-400/30 bg-gradient-to-br from-violet-500/10 to-cyan-400/5 backdrop-blur-2xl shadow-[0_0_120px_rgba(139,92,246,0.35)]" />

//           {/* INNER FRAME */}

//           <div className="absolute h-[660px] w-[560px] rounded-[34px] border border-cyan-400/20 bg-[#060915]/90" />

//           {/* CYAN EDGE GLOW */}

//           <div className="absolute h-[665px] w-[565px] rounded-[36px] border border-cyan-400/30 shadow-[0_0_80px_rgba(34,211,238,0.25)]" />

//           {/* PORTRAIT */}

//           <motion.img
//             initial={{ opacity: 0, y: 40 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1 }}
//             src={heroImage}
//             alt="Shubham Sharma"
//             className="relative z-20 h-[860px] object-contain drop-shadow-[0_0_100px_rgba(139,92,246,0.35)]"
//           />

//           {/* GLOW BELOW IMAGE */}

//           <div className="absolute bottom-[18%] z-10 h-[220px] w-[420px] rounded-full bg-violet-500/25 blur-[120px]" />

//           {/* FLOATING CARDS */}

//           {floatingCards.map((card, index) => {
//             const Icon = card.icon;

//             return (
//               <motion.div
//                 key={card.title}
//                 animate={{
//                   y: [0, -12, 0],
//                 }}
//                 transition={{
//                   duration: 4 + index,
//                   repeat: Infinity,
//                   ease: "easeInOut",
//                 }}
//                 className={`absolute rounded-[34px] border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))] p-8 backdrop-blur-2xl shadow-[0_20px_80px_rgba(0,0,0,0.45)] ${card.className}`}
//               >
//                 <div className="flex items-start justify-between">
//                   <div className="flex h-20 w-20 items-center justify-center rounded-[24px] bg-gradient-to-br from-violet-500 to-cyan-400 shadow-[0_0_50px_rgba(139,92,246,0.45)]">
//                     <Icon className="h-9 w-9 text-white" />
//                   </div>

//                   <div className="flex gap-2 pt-2">
//                     <div className="h-2 w-2 rounded-full bg-white/30" />
//                     <div className="h-2 w-2 rounded-full bg-white/30" />
//                     <div className="h-2 w-2 rounded-full bg-white/30" />
//                   </div>
//                 </div>

//                 <div className="mt-10">
//                   <h3 className="text-5xl font-bold text-white">
//                     {card.title}
//                   </h3>

//                   <p className="mt-4 text-2xl leading-[1.5] text-white/55">
//                     {card.subtitle}
//                   </p>
//                 </div>
//               </motion.div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }








// import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
// import { ArrowRight, Download, Sparkles, Github, Linkedin, Twitter } from "lucide-react";
// import { lazy, Suspense, useEffect, useRef, useState } from "react";
// import { Link } from "react-router-dom";
// import { Button } from "@/components/ui/button";
// import portrait from "@/assets/shubham-portrait.png";

// const HeroScene = lazy(() => import("@/components/HeroScene").then((m) => ({ default: m.HeroScene })));

// const roles = ["Product Leader", "AI Architect", "GenAI Builder", "0→1 Operator"];

// export const Hero = () => {
//   const [i, setI] = useState(0);
//   useEffect(() => {
//     const id = setInterval(() => setI((v) => (v + 1) % roles.length), 2400);
//     return () => clearInterval(id);
//   }, []);

//   const ref = useRef<HTMLDivElement>(null);
//   const mx = useMotionValue(0);
//   const my = useMotionValue(0);
//   const sx = useSpring(mx, { stiffness: 60, damping: 22, mass: 0.7 });
//   const sy = useSpring(my, { stiffness: 60, damping: 22, mass: 0.7 });

//   const portraitRotY = useTransform(sx, [-1, 1], [10, -10]);
//   const portraitRotX = useTransform(sy, [-1, 1], [-7, 7]);
//   const sceneX = useTransform(sx, [-1, 1], [-30, 30]);
//   const sceneY = useTransform(sy, [-1, 1], [-20, 20]);
//   const blobAX = useTransform(sx, [-1, 1], [-40, 40]);
//   const blobAY = useTransform(sy, [-1, 1], [-40, 40]);
//   const blobBX = useTransform(sx, [-1, 1], [50, -50]);
//   const blobBY = useTransform(sy, [-1, 1], [50, -50]);
//   const cardA = useTransform(sx, [-1, 1], [-18, 18]);
//   const cardB = useTransform(sx, [-1, 1], [22, -22]);

//   const onMove = (e: React.MouseEvent) => {
//     const r = ref.current?.getBoundingClientRect();
//     if (!r) return;
//     mx.set(((e.clientX - r.left) / r.width) * 2 - 1);
//     my.set(((e.clientY - r.top) / r.height) * 2 - 1);
//   };
//   const onLeave = () => {
//     mx.set(0);
//     my.set(0);
//   };

//   return (
//     <section
//       id="top"
//       ref={ref}
//       onMouseMove={onMove}
//       onMouseLeave={onLeave}
//       className="relative isolate flex min-h-screen items-center overflow-hidden pt-24"
//       style={{ perspective: 1800 }}
//     >
//       {/* ── Layer 1: Aurora background ─────────────────────────── */}
//       <div className="absolute inset-0 -z-40 bg-background" />
//       <motion.div
//         style={{ x: blobAX, y: blobAY }}
//         className="absolute left-[10%] top-[5%] -z-30 h-[620px] w-[620px] rounded-full bg-primary/25 blur-[160px]"
//       />
//       <motion.div
//         style={{ x: blobBX, y: blobBY }}
//         className="absolute -bottom-40 right-[2%] -z-30 h-[560px] w-[560px] rounded-full bg-accent/30 blur-[170px]"
//       />
//       <div
//         className="pointer-events-none absolute inset-0 -z-30 opacity-[0.08]"
//         style={{
//           background:
//             "radial-gradient(circle at 20% 30%, hsl(var(--primary)/0.3), transparent 40%), radial-gradient(circle at 80% 70%, hsl(var(--accent)/0.3), transparent 40%)",
//         }}
//       />

//       {/* Subtle dot grid */}
//       <div
//         className="pointer-events-none absolute inset-0 -z-20 opacity-[0.18]"
//         style={{
//           backgroundImage: "radial-gradient(hsl(var(--foreground)/0.5) 1px, transparent 1px)",
//           backgroundSize: "32px 32px",
//           maskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
//           WebkitMaskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
//         }}
//       />

//       {/* Noise overlay */}
//       <div
//         className="pointer-events-none absolute inset-0 -z-20 opacity-[0.04] mix-blend-overlay"
//         style={{
//           backgroundImage:
//             "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
//         }}
//       />

//       {/* ── Layer 2: Real 3D floating geometry ─────────────────── */}
//       <motion.div
//         style={{ x: sceneX, y: sceneY }}
//         className="absolute inset-0 -z-10"
//       >
//         <Suspense fallback={null}>
//           <HeroScene />
//         </Suspense>
//       </motion.div>

//       <div className="container relative mx-auto px-6">
//         <div className="grid items-center gap-12 lg:grid-cols-12">
//           {/* ── LEFT: Headline ──────────────────────────────── */}
//           <motion.div
//             initial={{ opacity: 0, y: 24 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.3, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
//             className="lg:col-span-7"
//             style={{ transformStyle: "preserve-3d" }}
//           >
//             <motion.div
//               initial={{ opacity: 0, y: 10 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.4, duration: 0.6 }}
//               className="mb-8 inline-flex items-center gap-2 rounded-full border border-border/50 bg-background/30 px-4 py-1.5 text-xs font-mono text-muted-foreground shadow-[0_8px_30px_-12px_hsl(var(--primary)/0.4)] backdrop-blur-2xl"
//             >
//               <span className="relative flex h-2 w-2">
//                 <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
//                 <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
//               </span>
//               Available · Advisory & 0→1 GenAI builds
//             </motion.div>

//             <h1 className="font-display text-[14vw] font-black uppercase leading-[0.85] tracking-tighter md:text-[8rem] lg:text-[8.5rem]">
//               <motion.span
//                 initial={{ opacity: 0, y: 50 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.5, duration: 1, ease: [0.22, 1, 0.36, 1] }}
//                 className="block bg-gradient-to-b from-foreground via-foreground/90 to-foreground/30 bg-clip-text text-transparent"
//               >
//                 Shubham
//               </motion.span>
//               <motion.span
//                 initial={{ opacity: 0, y: 50 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.7, duration: 1, ease: [0.22, 1, 0.36, 1] }}
//                 className="block italic text-gradient-primary"
//               >
//                 Sharma.
//               </motion.span>
//             </h1>

//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 1, duration: 0.6 }}
//               className="mt-8 flex h-8 items-center gap-2 text-base text-muted-foreground md:text-lg"
//             >
//               <span>Working as a</span>
//               <span className="relative inline-block min-w-[180px] text-left">
//                 {roles.map((r, idx) => (
//                   <motion.span
//                     key={r}
//                     initial={{ opacity: 0, y: 10 }}
//                     animate={{ opacity: i === idx ? 1 : 0, y: i === idx ? 0 : -10 }}
//                     transition={{ duration: 0.4 }}
//                     className="absolute left-0 font-display font-semibold text-foreground"
//                   >
//                     {r}
//                   </motion.span>
//                 ))}
//               </span>
//             </motion.div>

//             <motion.p
//               initial={{ opacity: 0, y: 10 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 1.1, duration: 0.7 }}
//               className="mt-6 max-w-xl text-balance text-base leading-relaxed text-muted-foreground md:text-lg"
//             >
//               Building scalable data platforms and AI-native products for enterprise and government — turning hard problems into systems that ship.
//             </motion.p>

//             <motion.div
//               initial={{ opacity: 0, y: 12 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 1.25, duration: 0.7 }}
//               className="mt-10 flex flex-wrap items-center gap-3"
//             >
//               <Button asChild size="lg" className="group rounded-full bg-gradient-primary text-primary-foreground shadow-glow transition-transform hover:-translate-y-0.5 hover:opacity-95">
//                 <a href="#work">
//                   View Work <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
//                 </a>
//               </Button>
//               <Button asChild size="lg" variant="outline" className="rounded-full border-border/50 bg-background/30 backdrop-blur-xl transition-transform hover:-translate-y-0.5">
//                 <Link to="/case-studies">Case Studies</Link>
//               </Button>
//               <Button asChild size="lg" variant="ghost" className="rounded-full">
//                 <a href={`${import.meta.env.BASE_URL}shubham-sharma-resume.pdf`} download>
//                   <Download className="mr-2 h-4 w-4" /> Résumé
//                 </a>
//               </Button>
//             </motion.div>

//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 1.5, duration: 0.6 }}
//               className="mt-8 flex items-center gap-3"
//             >
//               {[Linkedin, Github, Twitter].map((Icon, idx) => (
//                 <a
//                   key={idx}
//                   href="#"
//                   className="grid h-9 w-9 place-items-center rounded-full border border-border/50 bg-background/30 text-muted-foreground backdrop-blur-xl transition hover:-translate-y-0.5 hover:text-primary hover:shadow-glow"
//                 >
//                   <Icon className="h-4 w-4" />
//                 </a>
//               ))}
//             </motion.div>
//           </motion.div>

//           {/* ── RIGHT: Portrait stage ──────────────────────── */}
//           <div className="relative lg:col-span-5">
//             <motion.div
//               initial={{ opacity: 0, scale: 0.94 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ delay: 0.9, duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
//               className="relative mx-auto aspect-[4/5] w-full max-w-[440px]"
//               style={{ transformStyle: "preserve-3d" }}
//             >
//               {/* Rotating conic halo */}
//               <motion.div
//                 animate={{ rotate: 360 }}
//                 transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
//                 className="absolute left-1/2 top-1/2 -z-10 h-[108%] w-[108%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[conic-gradient(from_0deg,hsl(var(--primary)/0.55),transparent_28%,hsl(var(--accent)/0.55)_58%,transparent_88%,hsl(var(--primary)/0.55))] opacity-60 blur-3xl"
//               />

//               {/* Inner radial glow */}
//               <div className="absolute left-1/2 top-1/2 -z-10 h-[78%] w-[78%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-radial from-primary/30 via-primary/5 to-transparent blur-2xl" />

//               {/* Counter-rotating dashed ring */}
//               <motion.svg
//                 viewBox="0 0 100 100"
//                 animate={{ rotate: -360 }}
//                 transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
//                 className="absolute left-1/2 top-1/2 -z-10 h-[118%] w-[118%] -translate-x-1/2 -translate-y-1/2"
//               >
//                 <circle
//                   cx="50"
//                   cy="50"
//                   r="46"
//                   fill="none"
//                   stroke="hsl(var(--primary) / 0.35)"
//                   strokeWidth="0.25"
//                   strokeDasharray="0.6 1.6"
//                 />
//               </motion.svg>

//               {/* Portrait — frameless with 3D tilt */}
//               <motion.div
//                 style={{ rotateY: portraitRotY, rotateX: portraitRotX, transformStyle: "preserve-3d" }}
//                 className="relative h-full w-full"
//               >
//                 <img
//                   src={portrait}
//                   alt="Portrait of Shubham Sharma"
//                   width={800}
//                   height={1000}
//                   className="h-full w-full object-contain drop-shadow-[0_40px_80px_hsl(var(--primary)/0.45)]"
//                   style={{
//                     WebkitMaskImage: "linear-gradient(to bottom, black 80%, transparent 100%)",
//                     maskImage: "linear-gradient(to bottom, black 80%, transparent 100%)",
//                   }}
//                 />
//               </motion.div>

//               {/* Glass card — top left (stat) */}
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 1.4, duration: 0.7 }}
//                 style={{ x: cardA }}
//                 className="absolute -left-6 top-[12%] z-30 md:-left-16"
//               >
//                 <motion.div
//                   animate={{ y: [0, -8, 0] }}
//                   transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
//                   className="rounded-2xl border border-border/40 bg-background/40 px-4 py-3 shadow-[0_20px_60px_-15px_hsl(var(--primary)/0.5)] backdrop-blur-2xl"
//                 >
//                   <div className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground">
//                     Shipped
//                   </div>
//                   <div className="mt-1 font-display text-lg font-bold">12+ GenAI</div>
//                 </motion.div>
//               </motion.div>

//               {/* Glass card — bottom right (now building) */}
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 1.6, duration: 0.7 }}
//                 style={{ x: cardB }}
//                 className="absolute -right-4 bottom-[10%] z-30 md:-right-12"
//               >
//                 <motion.div
//                   animate={{ y: [0, -10, 0] }}
//                   transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
//                   className="flex items-center gap-3 rounded-2xl border border-border/40 bg-background/40 px-4 py-3 shadow-[0_20px_60px_-15px_hsl(var(--accent)/0.5)] backdrop-blur-2xl"
//                 >
//                   <div className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-primary text-primary-foreground shadow-glow">
//                     <Sparkles className="h-4 w-4" />
//                   </div>
//                   <div>
//                     <div className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground">
//                       Now building
//                     </div>
//                     <div className="font-display text-sm font-semibold">Vertical AI agents</div>
//                   </div>
//                 </motion.div>
//               </motion.div>
//             </motion.div>
//           </div>
//         </div>
//       </div>

//       {/* Scroll indicator */}
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 2 }}
//         className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 font-mono text-[10px] uppercase tracking-[0.4em] text-muted-foreground"
//       >
//         <span>scroll</span>
//         <motion.span
//           animate={{ y: [0, 8, 0], opacity: [0.4, 1, 0.4] }}
//           transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
//           className="h-6 w-px bg-foreground/40"
//         />
//       </motion.div>
//     </section>
//   );
// };

