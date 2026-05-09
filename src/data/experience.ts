export type Role = {
  period: string;
  role: string;
  org: string;
  location: string;
  desc: string;
  highlights?: string[];
};

export const experience: Role[] = [
  {
    period: "2025 — Present",
    role: "Manager · Product & Strategy",
    org: "KFin Technologies Ltd.",
    location: "Hyderabad",
    desc: "Driving product and service improvements for the IRIS and DSS platforms within the DFS department.",
    highlights: [
      "Identifying enhancements for usability, operational efficiency and service quality",
      "Working across technology and operations to deliver scalable, compliant releases",
      "Aligning continuous improvement with business and regulatory needs",
    ],
  },
  {
    period: "2023 — 2025",
    role: "Technical Manager · Data Architect · Pre-sales",
    org: "Glorious Insight",
    location: "Noida",
    desc: "Headed the technology vertical (50+ engineers) across custom apps, analytics and AI. Consulted 100+ enterprise and government clients on their digital transformation.",
    highlights: [
      "Founded 4 CoEs: GIGA-MINDS (BI), DIRA (AI), CID (Apps), DIODE (Data)",
      "Won ~$2M of cutting-edge GenAI projects across govt and private",
      "Closed Microsoft Fabric analytics with Maha-IT — dashboards inaugurated by the CM",
      "50% growth in new business; ~25% YoY revenue growth",
      "Cut effective project duration by 40% via better architecture and planning",
    ],
  },
  {
    period: "2022 — 2023",
    role: "Technical Lead",
    org: "Glorious Insight",
    location: "Noida",
    desc: "Led the analytics vertical, managing HQ and client-deployed teams across data and analytics engagements.",
    highlights: [
      "Owned client consultation, solution design and delivery",
      "Drove ~20% improvement in solution efficiency via modern stack adoption",
    ],
  },
  {
    period: "2021 — 2022",
    role: "Senior Software Engineer",
    org: "Glorious Insight",
    location: "Noida",
    desc: "Architected end-to-end MSBI solutions for a global management consulting firm.",
    highlights: [
      "Near real-time analytics across 50,000+ employees, multiple BUs and clients",
      "Project transition monitoring and decision-support analytics",
    ],
  },
  {
    period: "2019 — 2021",
    role: "Software Engineer",
    org: "Glorious Insight",
    location: "Noida",
    desc: "Designed and shipped end-to-end BI solutions across battery, electrical, fashion, retail and logistics verticals.",
  },
  {
    period: "2016 — 2019",
    role: "BI Developer",
    org: "PRM Soft Solutions",
    location: "Pune",
    desc: "Power BI developer for enterprise dashboarding and reporting needs.",
  },
  {
    period: "2014 — 2015",
    role: "Project Intern",
    org: "DRDO · DTRL Lab",
    location: "Delhi",
    desc: "Initiated and contributed to the research project: Augmented Vision Perception from Long Infrared Images.",
  },
];

import certDataEngineer from "@/assets/cert-az-data-engineer.png";
import certSolutionsArchitect from "@/assets/cert-az-solutions-architect.png";
import certDataScientist from "@/assets/cert-az-data-scientist.png";

export const certifications = [
  { code: "DP-203", name: "Azure Data Engineer Associate", issuer: "Microsoft", image: certDataEngineer },
  { code: "AZ-305", name: "Azure Solutions Architect Expert", issuer: "Microsoft", image: certSolutionsArchitect },
  { code: "DP-100", name: "Azure Data Scientist Associate", issuer: "Microsoft", image: certDataScientist },
  { code: "AZ-104", name: "Azure Administrator Associate", issuer: "Microsoft" },
];

export const highlights = [
  "Established Gen-AI & Data practice from scratch and led advanced enterprise use cases",
  "Lead GenAI products with Microsoft for enterprise and government accounts",
  "Conducted a Gen-AI workshop at Microsoft on the latest advancements",
  "Closed ~$2M in cutting-edge GenAI projects across govt and private sectors",
  "Microsoft Fabric analytics rollout for Maha-IT — dashboards inaugurated by the CM",
  "Worked with MP-Finance, MP-IT, BSNL, UGC, Maha-IT, IAF, Dial 100, MPEB, PowerGrid, NPS, PFRDA, SBI and more",
];

export const clients = [
  "HPCL", "BPCL", "PowerGrid", "IGNOU", "NSDC", "MPSeDC",
  "Govt. of Gujarat", "Govt. of Punjab", "Indian Air Force", "Classplus", "CitiusTech", "NIA",
  "Microsoft", "Maha-IT", "MP-IT", "BSNL", "UGC", "SBI", "PFRDA", "Power Grid",
];
