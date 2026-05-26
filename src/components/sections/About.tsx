import { motion } from "framer-motion";
import { Cpu, Database, Layers, LineChart, Sparkles, Workflow } from "lucide-react";


const groups = [
  {
    icon: Cpu,
    title: "Product Strategy",
    description:
      "Vision, roadmap planning and strategic execution aligned with business goals.",
  },
  // {
  //   icon: Workflow,
  //   title: "Execution & Delivery",
  //   description:
  //     "Driving enterprise AI delivery through agile execution and cross-functional leadership.",
  // },
  {
    icon: Sparkles,
    title: "Enterprise AI Platforms",
    description:
      "Building scalable AI systems, copilots and workflow platforms for governments and enterprises.",
  },
  {
    icon: Database,
    title: "Data & Analytics",
    description:
      "Designing lakehouse platforms, dashboards and analytics systems for enterprise-scale decision making.",
  },
  {
    icon: Layers,
    title: "Architecture & Scale",
    description:
      "Delivering secure cloud, on-prem and air-gapped AI architectures for mission-critical environments.",
  },
  // {
  //   icon: LineChart,
  //   title: "Leadership & Growth",
  //   description:
  //     "Leading hiring, partnerships, workshops and enterprise AI initiatives across multiple domains.",
  // },
];

// const groups = [
//   { icon: Cpu, title: "Generative AI", items: ["Copilots",
//   "RAG Systems",
//   "Enterprise AI",
//   "Workflow AI",
//   "Voice AI",
//   "AI Assistants"] },
//   { icon: Database, title: "Data Platforms", items: ["Microsoft Fabric", "Lakehouse", "Spark", "Delta", "Postgres", "APIs"] },
//   { icon: Layers, title: "Product", items: ["0→1 Products",
//   "Roadmaps",
//   "Execution",
//   "Discovery",
//   "Stakeholders",
//   "Scaling"] },
//   { icon: Workflow, title: "Architecture", items: ["Azure", "On-prem", "Air-gapped", "Security", "Scale", "MLOps"] },
//   { icon: LineChart, title: "Analytics & BI", items: ["Power BI", "MSBI", "Fabric", "Dashboards", "KPIs", "Modeling"] },
//   { icon: Sparkles, title: "Leadership", items: ["Cross-functional",
//   "Hiring",
//   "Govt Programs",
//   "Pre-sales",
//   "Partnerships",
//   "Workshops"] },
// ];

export const About = () => (
  <section id="about" className="relative py-12">
    <div className="container mx-auto px-6">
      

      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
        <motion.div
        
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl"
        >
          <SectionHeader eyebrow="About" title="Building AI Products to Bring Disruption."/>
          <p className="mt-10 text-xl leading-relaxed text-foreground/90">
            I'm <span className="text-gradient-primary font-semibold">Shubham</span> — a Product & AI leader with 10+ years of experience building enterprise platforms, data products and Generative AI systems across government and enterprise domains.
          </p>
          <div className="mt-6 space-y-5 text-muted-foreground">
  {/* <p className="leading-relaxed">
    I specialize in taking complex AI initiatives from concept to production — driving product strategy, architecture alignment, stakeholder collaboration and large-scale execution across cross-functional teams.
  </p> */}

  <ul className="space-y-3">
    {[
      "I specialize in taking complex AI initiatives from concept to production — driving product strategy, architecture alignment, stakeholder collaboration and large-scale execution across cross-functional teams.",
      "My work spans GenAI platforms, lakehouse architectures, Agentic AI Systems, workflow automation and enterprise modernization initiatives for PSUs, state governments and large enterprises across India.",
    ].map((item) => (
      <li key={item} className="flex items-start gap-3">
        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gradient-primary shrink-0" />
        <span className="leading-relaxed">{item}</span>
      </li>
    ))}
  </ul>
</div>
          {/* <p className="mt-6 text-muted-foreground">
            I specialize in taking complex AI initiatives from concept to production — driving product strategy, architecture alignment, stakeholder collaboration and large-scale execution across cross-functional teams.
            
            My work spans GenAI platforms, lakehouse architectures, Agentic AI Systems, workflow automation and enterprise modernization initiatives for PSUs, state governments and large enterprises across India.
          </p> */}
          {/* <div className="mt-8 grid grid-cols-2 gap-4 max-w-xl">
            {[
  { k: "Currently", v: "Driving Product & AI Strategy at KFin" },
  { k: "Practice", v: "Enterprise AI · Data Platforms · GovTech" },
  { k: "Delivery", v: "0→1 Products · Enterprise Rollouts · RFPs" },
  { k: "Partners", v: "Microsoft · PSUs · State Governments" },
].map((x) => (
              <div key={x.k} className="
rounded-2xl
border border-white/8
bg-white/[0.02]
px-4 py-5
transition-all duration-300
hover:border-violet-500/20
hover:bg-violet-500/[0.03]
hover:shadow-[0_0_30px_rgba(139,92,246,0.08)]">
                <div className="font-mono text-[10px] uppercase text-muted-foreground">{x.k}</div>
                <div className="mt-1 text-sm font-medium">{x.v}</div>
              </div>
            ))}
          </div> */}
        </motion.div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 content-start">
          {groups.map((g, idx) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.06 }}
              className="card-premium
min-h-[230px]
p-7
transition-all
duration-300
hover:border-violet-500/30
hover:bg-violet-500/[0.02]
hover:shadow-[0_0_40px_rgba(139,92,246,0.08)]"
            >
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-primary text-primary-foreground">
                  <g.icon className="h-5 w-5" />
                </div>
                <h3 className="font-display text-lg font-semibold">{g.title}</h3>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
  {g.description}
</p>
              {/* <div className="mt-4 flex flex-wrap gap-1.5">
                {g.items.map((i) => (
                  <span key={i} className="rounded-full border border-border/60 bg-secondary/50 px-2.5 py-1 text-xs text-muted-foreground">
                    {i}
                  </span>
                ))}
              </div> */}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export const SectionHeader = ({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="max-w-3xl"
  >
    <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-secondary/40 px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
      <span className="h-1 w-1 rounded-full bg-primary" /> {eyebrow}
    </div>
    <h2 className="mt-5 font-display text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
      <span className="text-gradient">{title}</span>
    </h2>
    {subtitle && <p className="mt-4 text-lg text-muted-foreground">{subtitle}</p>}
  </motion.div>
);
