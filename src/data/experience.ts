import { Experience } from "@/types";

export const experience: Experience[] = [
  {
    company: "Wave Money",
    position: "Full Stack Developer",
    period: "01/2024 — Present",
    location: "Hlaingtharya, Yangon",
    description:
      "Building and maintaining a portfolio of modular monolithic and microservices-based financial systems for Myanmar's leading mobile financial services provider — spanning payments, KYC/compliance, a merchant CMS platform, and partner-facing web apps.",
    achievements: [
      "Designed a secure API Gateway using HMAC-SHA256 encryption, standardizing integrations for 15+ third-party partners (including Grab and FoodPanda) and cutting partner onboarding time by ~30%.",
      "Built and maintain a headless CMS platform (Strapi) powering merchant banners, mini-apps, biller content, and referral-program data across multiple Wave Money apps — the most actively developed backend service in the org.",
      "Rebuilt the KYC Verification Portal on Laravel 11 with biometric document verification, RBAC, and falsified-selfie fraud detection, helping compliance process 40% more verifications per day.",
      "Led development of the Refer & Earn Program (Next.js, React, TanStack Query) integrated with a custom in-house JS SDK that bridges native app capabilities into WebView mini-apps.",
      "Built a multi-currency processing engine (MMK, USD, THB, SGD) with asynchronous workflows for real-time conversion and improved settlement accuracy.",
      "Implemented Redis-backed fraud detection and reconciliation tooling (circuit breakers, auto-sweep) as part of an internal ops platform used across payments and compliance teams.",
      "Introduced Jenkins + Docker CI/CD pipelines, cutting deployment failures by ~25% and release cycles from days to hours.",
      "Enforced automated testing standards with Pest PHP, PHPUnit, Vitest, and Laravel Pint, raising code coverage and reducing post-release defects.",
    ],
    technologies: [
      "Laravel",
      "PHP",
      "Vue.js",
      "React",
      "Next.js",
      "TypeScript",
      "Inertia.js",
      "Tailwind CSS",
      "TranStack Query",
      "Strapi",
      "Redis",
      "PostgreSQL",
      "MongoDB",
      "Docker",
      "Jenkins",
    ],
  },
  {
    company: "METATEAM MYANMAR Co., Ltd.",
    position: "Web Developer (Intern → Senior)",
    period: "09/2023 — 12/2023",
    location: "Botataung, Yangon",
    description:
      "Developed and maintained scalable web applications across multiple internal and client-facing systems, progressing from intern to a senior mentoring role within the same engagement.",
    achievements: [
      "Designed MVC-based architectures, reducing feature development time by ~20%.",
      "Built responsive, cross-browser UIs improving overall usability.",
      "Collaborated across GitHub, GitLab, and Bitbucket workflows, reducing merge conflicts and smoothing release cycles.",
      "Containerized applications with Docker and supported Nginx-based deployments for consistent dev/prod environments.",
      "Conducted API, functional, integration, and performance testing with Postman, catching critical issues early.",
      "Mentored junior developers as a Senior Developer, raising overall team code quality.",
    ],
    technologies: ["PHP", "Laravel", "Phalcon", "Vue.js", "MySQL", "Docker", "Postman"],
  },
];
