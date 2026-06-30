export interface Project {
  id: string;
  title: string;
  category: "Analytics" | "Product" | "Hardware";
  summary: string;
  description: string;
  stack: string[];
  outcomes: string[];
  githubUrl: string;
  liveUrl?: string;
  accent: "signal" | "amber" | "neutral";
}

export interface ExperienceItem {
  id: string;
  role: string;
  org: string;
  period: string;
  location: string;
  bullets: string[];
  kind: "work" | "founder" | "leadership";
}

export interface SkillGroup {
  id: string;
  label: string;
  skills: string[];
}

export interface Achievement {
  id: string;
  title: string;
  detail: string;
  year: string;
}

export interface LedgerStat {
  label: string;
  value: string;
}
