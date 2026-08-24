import { Project } from "@/types";

export const projects: Project[] = [
  {
    title: "Refer & Earn Program",
    description:
      "Referral platform with referee tracking, commission, leaderboards, and social sharing, built on Next.js and integrated with an in-house JS SDK that bridges native app capabilities into WebView mini-apps.",
    technologies: ["Next.js", "React 19", "TypeScript", "TanStack Query", "Tailwind CSS"],
    category: "web",
    featured: true,
  },
  {
    title: "KYC Portal",
    description:
      "Rebuilt admin portal for Know-Your-Customer identity verification (WaveID), with biometric document checks, RBAC, and falsified-selfie fraud detection tooling for the compliance team.",
    technologies: ["Laravel 11", "Vue.js", "Vite", "Sentry"],
    category: "web",
  },
  {
    title: "WaveMoney JS SDK",
    description:
      "TypeScript bridge SDK embedded in in-app WebViews, exposing native-like capabilities (auth, payments, device info, sharing, analytics) to web-based mini-apps across the super-app ecosystem.",
    technologies: ["TypeScript", "Webpack", "Jest", "TypeDoc"],
    category: "backend",
  },
  {
    title: "Partner API Gateway",
    description:
      "Secure API Gateway standardizing integrations for 15+ third-party partners using HMAC-SHA256 request signing, cutting partner onboarding time by roughly 30%.",
    technologies: ["Laravel", "PHP", "HMAC-SHA256", "Redis", "PostgreSQL"],
    category: "backend",
  },
  {
    title: "Internal Ops & Utilities Platform",
    description:
      "Back-office platform covering audit logging, transaction auto-sweep reconciliation, circuit breakers, fraud mitigation, gift cards, and telecom integrations for internal payments and compliance teams.",
    technologies: ["Laravel", "Inertia.js", "React 18", "PostgreSQL", "Redis Cluster"],
    category: "backend",
  },
  {
    title: "Channel Portal",
    description:
      "Sales & Distribution workflow system for internal partner and channel operations — one of the longest-running, most actively maintained systems in the portfolio.",
    technologies: ["Laravel", "Vue.js", "Bootstrap-Vue", "MySQL"],
    category: "web",
  },
  {
    title: "Online Biller Webview",
    description:
      "WebView templates powering in-app bill payments (utilities, telecom, gift cards) inside the WavePay mobile app, integrating with multiple third-party biller providers.",
    technologies: ["Laravel", "Vue.js", "Jest", "MSW"],
    category: "web",
  },
  {
    title: "Merchant CMS Platform",
    description:
      "Heavily customized headless CMS (Strapi) powering merchant banners, mini-apps, biller content, feature toggles, and the referral program across every Wave Money app — the most actively developed backend service in the org.",
    technologies: ["Strapi", "Node.js", "PostgreSQL", "Redis", "AWS S3"],
    category: "backend",
    featured: true,
  },
  {
    title: "CI/CD Pipeline Overhaul",
    description:
      "Jenkins + Docker deployment pipeline that cut deployment failures by ~25% and reduced release cycles from days to hours.",
    technologies: ["Jenkins", "Docker", "Git", "Laravel Pint", "Husky"],
    category: "devops",
  },
];
