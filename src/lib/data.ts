import type {
  Achievement,
  ExperienceItem,
  LedgerStat,
  Project,
  SkillGroup,
} from "@/types";

export const profile = {
  name: "Makarand Dhepe",
  initials: "MD",
  headline: "Mechanical engineer who builds the analytics layer most teams skip.",
  subheadline:
    "B.Tech, Mechanical Engineering — IIT Ropar. Founder of IRVIS Solutions. I move between SQL, Python, and shop-floor process data to build systems people actually use to make decisions.",
  location: "Ropar, Punjab, India",
  email: "makarand.dhepe@example.com",
  resumeUrl: "/resume-makarand-dhepe.pdf",
  githubUrl: "https://github.com/makaranddhepe",
  linkedinUrl: "https://linkedin.com/in/makaranddhepe",
};

export const ledgerStats: LedgerStat[] = [
  { label: "CGPA", value: "7.53 / 10" },
  { label: "Institute", value: "IIT Ropar" },
  { label: "Founded", value: "IRVIS · 2025" },
  { label: "Grant Secured", value: "₹25,000" },
  { label: "Projects Shipped", value: "5" },
  { label: "Domain", value: "Mechanical → Analytics" },
];

export const projects: Project[] = [
  {
    id: "credit-risk-platform",
    title: "Credit Risk & Loan Default Prediction Platform",
    category: "Analytics",
    summary:
      "Risk scoring and portfolio monitoring for lending teams, built from raw transaction data up.",
    description:
      "An end-to-end pipeline that takes raw borrower and transaction data through cleaning, feature engineering, and a trained default-risk model, then surfaces the output as portfolio-level dashboards. Built to mirror how a credit risk team actually works: segment customers first, score second, monitor continuously after that.",
    stack: ["Python", "SQL", "PostgreSQL", "Power BI", "scikit-learn"],
    outcomes: [
      "Risk-scored a simulated loan book of 10,000+ borrower records",
      "Built customer segmentation logic on repayment behavior, not just demographics",
      "Power BI dashboards for portfolio monitoring, refreshed on a live PostgreSQL connection",
    ],
    githubUrl: "https://github.com/makaranddhepe/credit-risk-platform",
    accent: "signal",
  },
  {
    id: "fast-food-analytics",
    title: "Fast Food Chain Sales Analytics Platform",
    category: "Analytics",
    summary:
      "Store-level revenue and performance tracking across a simulated multi-outlet retail chain.",
    description:
      "A retail BI build covering revenue analysis, customer segmentation, and store performance tracking for a multi-location fast food chain. The focus was on the questions a regional ops manager actually asks — which stores are underperforming, why, and what changed week over week.",
    stack: ["SQL", "PostgreSQL", "Power BI"],
    outcomes: [
      "Modeled sales, inventory, and footfall data across multiple simulated store locations",
      "Built store-comparison dashboards surfacing underperformance by daypart",
      "Wrote SQL views to keep the dashboard layer decoupled from raw transaction tables",
    ],
    githubUrl: "https://github.com/makaranddhepe/fast-food-analytics",
    accent: "amber",
  },
  {
    id: "irvis-platform",
    title: "IRVIS — AI-Assisted Business Management Platform",
    category: "Product",
    summary:
      "The internal operating system for IRVIS Solutions: records, workflows, and automation in one place.",
    description:
      "The product behind my own company. IRVIS needed a way to manage operational records and recurring workflows without three disconnected spreadsheets. I built a FastAPI backend on PostgreSQL with AI-assisted entry and retrieval, designed so a non-technical team member can use it without training.",
    stack: ["Python", "FastAPI", "PostgreSQL"],
    outcomes: [
      "Replaced spreadsheet-based record-keeping for day-to-day operations",
      "Built REST endpoints for record CRUD, search, and workflow status tracking",
      "Designed schema to support audit history without duplicating records",
    ],
    githubUrl: "https://github.com/makaranddhepe/irvis-platform",
    accent: "signal",
  },
  {
    id: "agricultural-shredder",
    title: "Mini Agricultural Shredder Machine",
    category: "Hardware",
    summary:
      "Full CAD design of a compact shredder for small-farm agricultural waste, built for manufacturability.",
    description:
      "A complete mechanical design exercise: blade assembly, shaft sizing, and support frame, designed for a small-farm shredding use case. The brief I set myself was manufacturability — every part needed to be producible with standard tooling, not just renderable in CAD.",
    stack: ["SolidWorks", "Engineering Drawing", "DFM Analysis"],
    outcomes: [
      "Designed full blade and shaft assembly with calculated load tolerances",
      "Produced manufacturing-ready engineering drawings with toleranced dimensions",
      "Evaluated three frame configurations against cost and rigidity before finalizing one",
    ],
    githubUrl: "https://github.com/makaranddhepe/agri-shredder-cad",
    accent: "neutral",
  },
  {
    id: "self-balancing-robot",
    title: "Self-Balancing Robot",
    category: "Hardware",
    summary:
      "A two-wheeled balancing robot built around an MPU6050 IMU and a PID control loop.",
    description:
      "A hardware-and-control project from the ground up: chassis assembly, IMU integration, and a tuned PID loop to keep a two-wheeled robot upright. Most of the work was in the tuning — getting a stable response without oscillation across different floor surfaces.",
    stack: ["Arduino", "MPU6050", "C++", "PID Control"],
    outcomes: [
      "Built and assembled the full chassis and motor-driver hardware stack",
      "Tuned a PID control loop for stable balance across surface types",
      "Validated performance through repeated load and disturbance testing",
    ],
    githubUrl: "https://github.com/makaranddhepe/self-balancing-robot",
    accent: "amber",
  },
];

export const experience: ExperienceItem[] = [
  {
    id: "irvis-founder",
    role: "Founder & Owner",
    org: "IRVIS Solutions Pvt. Ltd.",
    period: "2025 — Present",
    location: "Ropar, Punjab",
    kind: "founder",
    bullets: [
      "Incorporated the company and built its first product, an internal business management platform",
      "Selected for the IIT Ropar E-Cell & TBIF Pre-Incubation Program",
      "Secured a ₹25,000 startup grant to support early product development",
    ],
  },
  {
    id: "trimurti-intern",
    role: "Industrial Engineering Intern",
    org: "Trimurti Stainless Equipments Pvt. Ltd.",
    period: "2024",
    location: "Maharashtra",
    kind: "work",
    bullets: [
      "Studied shop-floor production planning and process flow on the factory line",
      "Worked directly with manufacturing processes and engineering drawings used in daily production",
      "Identified process bottlenecks and documented findings for the operations team",
    ],
  },
  {
    id: "esummit-cohead",
    role: "Co-Head, Sponsorship Team",
    org: "E-Summit IIT Ropar 2026",
    period: "2025 — 2026",
    location: "IIT Ropar",
    kind: "leadership",
    bullets: [
      "Co-led sponsorship outreach and relationship management for the institute's flagship entrepreneurship summit",
      "Coordinated with corporate sponsors and internal teams to close partnership commitments",
    ],
  },
];

export const skillGroups: SkillGroup[] = [
  {
    id: "analytics",
    label: "Analytics",
    skills: ["SQL", "Power BI", "Pandas", "Excel"],
  },
  {
    id: "backend",
    label: "Backend",
    skills: ["Python", "FastAPI", "C++"],
  },
  {
    id: "databases",
    label: "Databases & Tooling",
    skills: ["PostgreSQL", "Git", "GitHub"],
  },
  {
    id: "mechanical",
    label: "Mechanical",
    skills: [
      "SolidWorks",
      "Tinkercad",
      "Engineering Drawing",
      "Manufacturing Processes",
      "Production Planning",
    ],
  },
  {
    id: "tools",
    label: "Hardware & Tools",
    skills: ["Arduino IDE", "Git"],
  },
];

export const achievements: Achievement[] = [
  {
    id: "tbif",
    title: "Selected, IIT Ropar E-Cell & TBIF Pre-Incubation Program",
    detail:
      "Admitted to the institute's pre-incubation track for early-stage founders building toward registered ventures.",
    year: "2025",
  },
  {
    id: "grant",
    title: "₹25,000 Startup Grant",
    detail:
      "Awarded seed funding to support early development of the IRVIS product and operations.",
    year: "2025",
  },
  {
    id: "incorporation",
    title: "Incorporated IRVIS Solutions Pvt. Ltd.",
    detail:
      "Registered the company as a private limited entity, moving from prototype to a formal business.",
    year: "2025",
  },
];
