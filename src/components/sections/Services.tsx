import { motion } from "framer-motion";
import { Bot, Database, FileText, LineChart, ShieldCheck, Workflow } from "lucide-react";
import { SectionHeader } from "./About";

const services = [
  { icon: Bot, title: "Generative AI Products", desc: "Production-grade GenAI: RAG, agents, copilots and multilingual assistants — designed for governance and scale." },
  { icon: Database, title: "Data Platforms", desc: "Lakehouse architectures on Microsoft Fabric / Azure with standardized data products and serving APIs." },
  { icon: ShieldCheck, title: "GovTech & Sovereign AI", desc: "Air-gapped, on-prem and compliance-first AI for defense, PSUs and state governments." },
  { icon: Workflow, title: "Product & Strategy", desc: "From problem to roadmap to launch. Discovery, prioritization and 0→1 product execution." },
  { icon: LineChart, title: "Analytics & BI", desc: "Microsoft Fabric, Power BI and modern analytics — from KPI design to executive dashboards." },
  { icon: FileText, title: "Pre-sales & RFPs", desc: "Solutioning, proposal writing and pre-sales for enterprise and government deals." },
];

export const Services = () => (
  <section id="services" className="relative py-32">
    <div className="container mx-auto px-6">
      <SectionHeader eyebrow="What I do" title="Where I add leverage." subtitle="Engagements span product leadership, GenAI architecture, data platforms and pre-sales." />

      <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {services.map((s, idx) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.06 }}
            className="group card-premium relative overflow-hidden p-6"
          >
            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/10 blur-2xl transition-all duration-500 group-hover:bg-primary/30" />
            <div className="relative">
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-primary text-primary-foreground shadow-glow">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
