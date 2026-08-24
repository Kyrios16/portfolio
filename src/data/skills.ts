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
    items: ["React 18", "Vue.js", "Node.js", "Inertia.js", "TypeScript", "Tailwind CSS", "Shadcn UI"],
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
