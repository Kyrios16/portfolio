import { Experience } from "@/types";

export const experience: Experience[] = [
  {
    company: "Wave Money",
    position: "Full Stack Developer",
    period: "01/2024 — Present",
    location: "Hlaingtharya, Yangon",
    description:
      "Building and maintaining modular monolithic and microservices-based financial systems for Myanmar's leading mobile financial services provider, supporting 100K+ daily transactions.",
    achievements: [
      "Designed a secure API Gateway using HMAC-SHA256 encryption, standardizing integrations for 15+ third-party partners (including Grab and FoodPanda) and cutting partner onboarding time by ~30%.",
      "Built a multi-currency processing engine (MMK, USD, THB, SGD) with asynchronous workflows for real-time conversion and improved settlement accuracy.",
      "Developed a KYC Portal with biometric document verification and RBAC, helping compliance process 40% more verifications per day.",
      "Implemented a Redis-backed fraud detection mechanism to flag high-risk transactions in real time.",
      "Introduced Jenkins + Docker CI/CD pipelines, cutting deployment failures by ~25% and release cycles from days to hours.",
      "Enforced automated testing standards with Pest PHP, PHPUnit, and Laravel Pint, raising code coverage and reducing post-release defects.",
    ],
    technologies: [
      "Laravel",
      "PHP",
      "React 18",
      "TypeScript",
      "Inertia.js",
      "Tailwind CSS",
      "Redis",
      "PostgreSQL",
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
