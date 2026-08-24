import { SkillCategory } from "@/types";

export const skills: SkillCategory[] = [
  {
    category: "Backend",
    items: [
      "PHP",
      "Laravel",
      "RESTful APIs",
      "Service / Repository Pattern",
      "API Gateway Design",
      "Microservices",
    ],
  },
  {
    category: "Frontend",
    items: ["React", "Vue.js", "Node.js", "Inertia.js", "TypeScript", "Tailwind CSS", "Shadcn UI", "TanStack Query"],
  },
  {
    category: "Data & Storage",
    items: ["PostgreSQL", "Oracle", "MongoDB", "Redis", "AWS S3"],
  },
  {
    category: "Tools & Quality",
    items: ["Docker", "Jenkins", "Git", "Sentry", "Pest PHP", "PHPUnit"],
  },
];
