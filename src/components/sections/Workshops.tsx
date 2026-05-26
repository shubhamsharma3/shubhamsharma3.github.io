import { motion } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";
import { SectionHeader } from "./About";

const workshops = [
  {
    type: "Workshop",
    title: "Microsoft",
    location: "Noida",
    description: "AI Advancement for Indian Air Force",
    image: "assets/images/microsoft3.jpeg",
    color: "text-blue-500",
  },
  {
    type: "Participant",
    title: "NASSCOM SME Confluence",
    location: "Delhi",
    description: "SME Confluence 2024 Delhi",
    image: "assets/images/nasscom.jfif",
    color: "text-purple-500",
  },
  {
    type: "Summit",
    title: "Microsoft",
    location: "Gurgaon",
    description: "Partner Summit for Data and AI",
    image: "assets/images/microsoft2.jfif",
    color: "text-indigo-500",
  },
  {
    type: "Expert Speaker",
    title: "GL Bajaj",
    location: "Greater Noida",
    description: "Data & AI Workshop",
    image: "assets/images/glbajaj.png",
    color: "text-emerald-500",
  },
  {
    type: "Expert Speaker",
    title: "Sharda University",
    location: "Greater Noida",
    description: "Data & AI Workshop",
    image: "/assets/images/sharda.png",
    color: "text-emerald-500",
  },
];

export const Workshops = () => {
  return (
    <section id="workshops" className="relative py-32 bg-secondary/30">
      <div className="absolute inset-0 -z-10 grid-pattern opacity-10" />
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-foreground">
            Expert Workshops
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Actively engaged across industry forums, government workshops, and academic
            institutions, sharing practical insights on data platforms, Generative AI, and enterprise-scale
            transformation.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-5">
          {workshops.map((w, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative flex flex-col overflow-hidden rounded-2xl bg-card border border-border/50 shadow-sm transition-all hover:shadow-xl hover:-translate-y-1"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <img
                  src={w.image}
                  alt={w.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
              
              <div className="flex flex-col flex-1 p-5">
                <div className={`font-mono text-[11px] uppercase tracking-wider font-semibold ${w.color}`}>
                  {w.type}
                </div>
                <h3 className="mt-2 font-display text-xl font-bold text-foreground leading-tight">
                  {w.title}
                </h3>
                <div className="mt-1.5 flex items-center gap-1.5 text-xs text-muted-foreground/80">
                  <MapPin className="h-3 w-3" />
                  {w.location}
                </div>
                <p className="mt-4 text-sm text-muted-foreground">
                  {w.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};