import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { works } from "@/data/works";
import { Link } from "react-router-dom";

export const Projects = () => {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  const prev = () => {
    setActive((prev) =>
      prev === 0 ? works.length - 1 : prev - 1
    );
  };

  const next = () => {
    setActive((prev) =>
      prev === works.length - 1 ? 0 : prev + 1
    );
  };

  useEffect(() => {
    if (paused) return;

    const interval = setInterval(() => {
      next();
    }, 2500);

    return () => clearInterval(interval);
  }, [paused]);

  return (
    <section
      id="projects"
      className="relative py-10 overflow-hidden"
    >
       <div className="absolute inset-0 -z-10 bg-mesh opacity-50" />
      {/* Ambient Glow */}
      {/* <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(120,119,198,0.12),transparent_45%)]" /> */}

      <div className="relative z-10 max-w-[1700px] mx-auto">
        {/* Header */}
        <div className="px-8 mb-10">
  <motion.div
   
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="max-w-4xl"
  >
    {/* Eyebrow */}
    <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-secondary/40 px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
      <span className="h-1 w-1 rounded-full bg-primary" />
      Portfolio
    </div>

    {/* Heading */}
    <h2 className="mt-5 font-display text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
      <span className="text-gradient">
        Work that shipped, 
        at scale.
      </span>
    </h2>

    {/* Description */}
    <p className="mt-4 text-lg text-muted-foreground max-w-3xl">
      Enterprise AI, data and digital transformation platforms built across
      government, energy, aviation, defense and education ecosystems.
    </p>
    
  </motion.div>
</div>

{/* Controls */}
<div className="flex justify-end px-8 -mt-4 mb-1 gap-4">
  <button
    onClick={prev}
    className="group w-14 h-14 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white hover:text-black transition-all duration-300 flex items-center justify-center text-white"
  >
    <ChevronLeft
      size={22}
      className="transition-transform duration-300 group-hover:-translate-x-0.5"
    />
  </button>

  <button
    onClick={next}
    className="group w-14 h-14 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white hover:text-black transition-all duration-300 flex items-center justify-center text-white"
  >
    <ChevronRight
      size={22}
      className="transition-transform duration-300 group-hover:translate-x-0.5"
    />
  </button>
</div>

        {/* Carousel */}
        <div
          className="relative h-[430px] flex items-center justify-center overflow-visible"
          style={{
            perspective: "1400px",
          }}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {works.map((work, index) => {
            const offset =
              (index - active + works.length) % works.length;

            let position = offset;

            if (position > works.length / 2) {
              position -= works.length;
            }

            const isActive = position === 0;

            return (
              <motion.div
                key={work.id}
                animate={{
                  x:
                    position === 0
                      ? 0
                      : position > 0
                      ? 500
                      : -500,

                  scale:
                    position === 0 ? 1 : 0.72,

                  rotateY:
                    position === 0
                      ? 0
                      : position > 0
                      ? -58
                      : 58,

                  z:
                    position === 0
                      ? 0
                      : -260,

                  opacity:
                    Math.abs(position) > 1
                      ? 0
                      : position === 0
                      ? 1
                      : 0.6,

                  zIndex:
                    position === 0 ? 30 : 10,

                  
                }}
                transition={{
                  duration: 0.9,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="absolute w-[52vw] max-w-[720px]"
                style={{
                  transformStyle: "preserve-3d",
                }}
              >
                {/* Glow */}
                {/* {isActive && (
                  <div className="absolute inset-0 bg-pink-500/10 opacity-60 scale-110 rounded-full" />
                )} */}

                <motion.div
                  whileHover={
                    isActive
                      ? {
                          scale: 1.02,
                          y: -6,
                          rotateX: -2,
                        }
                      : {}
                  }
                  className="relative h-[430px] rounded-[36px] overflow-hidden border border-white/10 bg-[#0A0A0F]/90 backdrop-blur-sm shadow-[0_40px_120px_rgba(0,0,0,0.65)]"
                >
                  {/* Reflection */}
                  <div className="absolute inset-y-0 left-0 w-[1px] bg-white/10" />
                  <div className="absolute top-0 left-0 w-full h-[1px] bg-white/10" />

                  {/* Gradient Glow */}
                  <div
                    className={`absolute inset-0 opacity-20 bg-gradient-to-br ${work.gradient}`}
                  />

                  {/* Header */}
                  <div className="relative z-10 flex items-center justify-between px-5 py-3 border-b border-white/10">
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="text-4xl font-black text-white/20 shrink-0">
                        {String(index + 1).padStart(2, "0")}
                      </div>

                      <div className="min-w-0">
                        <p className="uppercase tracking-[0.3em] text-[9px] text-white/40 mb-1">
                          {work.category}
                        </p>

                        <h2 className="text-lg font-bold leading-tight text-white">
                          {work.title}
                        </h2>

                        <p className="text-white/50 text-xs truncate max-w-[240px]">
                          {work.client}
                        </p>
                      </div>
                    </div>

                    {/* <button className="border border-white/20 px-3 py-2 rounded-full text-[10px] hover:bg-white hover:text-black transition-all duration-300 shrink-0">
                      View Case Study
                    </button> */}
                    <Link to={`/work/${work.id}`}>
  <button
    className="
      group
      border border-violet-500/20
      bg-violet-500/5
      px-4 py-2
      rounded-full
      text-[10px]
      uppercase
      tracking-[0.22em]
      text-violet-300
      hover:bg-violet-500/10
      hover:border-violet-400/40
      hover:text-white
      transition-all duration-300
      shrink-0
      flex items-center gap-2
      shadow-[0_0_20px_rgba(139,92,246,0.12)]
    "
  >
    View Project

    <span
      className="
        transition-transform duration-300
        group-hover:translate-x-0.5
        group-hover:-translate-y-0.5
      "
    >
      ↗
    </span>
  </button>
</Link>
                  </div>

                  {/* Content */}
                  <div className="relative z-10 h-[calc(100%-68px)] grid grid-cols-[1.55fr_0.7fr] gap-3 px-4 pt-4 pb-7 overflow-hidden">
                    {/* Hero */}
                    <div
                      className={`rounded-[24px] overflow-hidden h-full bg-gradient-to-br ${work.gradient} relative`}
                    >
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-black/15" />
                      {/* Thumbnail */}
<img
  src={work.thumbnail}
  alt={work.title}
  className="absolute inset-0 h-full w-full object-cover object-top"
  style={{
    imageRendering: "high-quality",
    backfaceVisibility: "hidden",
    transform: "translateZ(0)",
  }}
/>

                      {/* Grid */}
                      <div
                        className="absolute inset-0 opacity-10"
                        style={{
                          backgroundImage:
                            "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
                          backgroundSize: "24px 24px",
                        }}
                      />

                      {/* Pills */}
                      {/* <div className="absolute top-3 left-3 flex gap-2">
                        <div className="h-7 w-16 rounded-full bg-white/10 backdrop-blur-md border border-white/10" />

                        <div className="h-7 w-12 rounded-full bg-white/10 backdrop-blur-md border border-white/10" />
                      </div> */}

                      {/* Floating Glass */}
                      {/* <div className="absolute bottom-3 right-3 w-20 h-12 rounded-xl bg-black/20 backdrop-blur-xl border border-white/10" /> */}

                      {/* Hero Content */}
                      <div className="absolute inset-0 flex flex-col justify-end p-4">
                        <div className="max-w-sm">
                          <p className="uppercase tracking-[0.22em] text-[9px] text-white/60 mb-2">
                            {/* Enterprise AI Platform */}
                          </p>

                          <h3 className="text-lg font-black leading-tight text-white mb-2">
                            {work.subtitle}
                          </h3>

                          <p className="text-[11px] leading-snug text-white/75 line-clamp-2">
                            {work.summary}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Right Column */}
                    <div className="flex flex-col gap-3 h-full">
                      {/* Stack */}
                      <div className="flex flex-col flex-1 min-h-0 rounded-[20px] bg-white/5 border border-white/10 p-3 backdrop-blur-xl overflow-hidden">
                        <p className="uppercase tracking-[0.22em] text-[9px] text-white/40 mb-2">
                          Stack
                        </p>

                        <div className="flex flex-wrap gap-1.5">
                          {work.stack
                            .slice(0, 5)
                            .map((tech: string) => (
                              <span
                                key={tech}
                                className="px-2.5 py-1 rounded-full bg-white/10 border border-white/10 text-[9px] text-white/80"
                              >
                                {tech}
                              </span>
                            ))}
                        </div>
                      </div>

                      {/* Impact */}
                      <div className="flex flex-col flex-1 min-h-0 rounded-[20px] bg-white/5 border border-white/10 p-3 backdrop-blur-xl overflow-hidden">
                        <p className="uppercase tracking-[0.22em] text-[9px] text-white/40 mb-2">
                          Impact
                        </p>

                        <div className="space-y-1">
                          {work.impact
                            .slice(0, 2)
                            .map((item: string) => (
                              <div
                                key={item}
                                className="flex gap-2 text-white/80"
                              >
                                <div className="w-1 h-1 rounded-full bg-white mt-1.5 shrink-0" />

                                <p className="leading-snug text-[10px]">
                                  {item}
                                </p>
                              </div>
                            ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {works.map((_, index) => (
            <button
              key={index}
              onClick={() => setActive(index)}
              className={`transition-all duration-300 rounded-full ${
                active === index
                  ? "w-8 h-2 bg-white"
                  : "w-2 h-2 bg-white/30 hover:bg-white/60"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};