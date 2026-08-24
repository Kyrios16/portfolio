import { Project } from "@/types";

// These are real systems built at Wave Money / METATEAM, described as case
// studies since the underlying code is proprietary (no public repo/demo).
// Swap in your own open-source projects with `github` / `liveDemo` links
// whenever you have them — see README for instructions.
export const projects: Project[] = [
  {
    title: "Partner API Gateway",
    description:
      "Secure API Gateway standardizing integrations for 15+ third-party partners using HMAC-SHA256 request signing, cutting partner onboarding time by roughly 30%.",
    technologies: ["Laravel", "PHP", "HMAC-SHA256", "Redis", "PostgreSQL"],
    category: "backend",
    featured: true,
  },
  {
    title: "KYC Verification Portal",
    description:
      "Biometric document verification portal with role-based access control, built for a compliance team processing high daily verification volumes.",
    technologies: ["Laravel", "React 18", "TypeScript", "Inertia.js", "RBAC"],
    category: "web",
  },
  {
    title: "Multi-Currency Settlement Engine",
    description:
      "Asynchronous processing engine handling MMK, USD, THB, and SGD conversions with real-time settlement accuracy for cross-border transactions.",
    technologies: ["Laravel", "PHP", "Async Workflows", "Oracle"],
    category: "backend",
  },
  {
    title: "Real-Time Fraud Detection",
    description:
      "Redis-backed mechanism that flags high-risk transactions in real time, contributing to a measurable drop in suspicious activity incidents.",
    technologies: ["Redis", "PHP", "Laravel"],
    category: "backend",
  },
  {
    title: "CI/CD Pipeline Overhaul",
    description:
      "Jenkins + Docker deployment pipeline that cut deployment failures by ~25% and reduced release cycles from days to hours.",
    technologies: ["Jenkins", "Docker", "Git", "Laravel Pint", "Husky"],
    category: "devops",
  },
  {
    title: "Internal Operations Dashboards",
    description:
      "Admin dashboards and operational webviews that replaced manual reporting workflows for internal teams.",
    technologies: ["React 18", "TypeScript", "Inertia.js", "Tailwind CSS"],
    category: "web",
  },
];
