import { Achievement } from "@/types";

export const achievements: Achievement[] = [
  {
    label: "Transaction Volume",
    value: "100K+/day",
    description: "Daily transactions supported across Wave Money's financial systems.",
  },
  {
    label: "Partner Onboarding",
    value: "~30% faster",
    description: "Reduction in onboarding time after standardizing the partner API Gateway.",
  },
  {
    label: "KYC Throughput",
    value: "+40%",
    description: "More verifications processed per day after the KYC Portal launch.",
  },
  {
    label: "Deployment Failures",
    value: "~25% fewer",
    description: "Drop in deployment failures after introducing Jenkins + Docker CI/CD.",
  },
  {
    label: "Partner Integrations",
    value: "15+",
    description: "Third-party partners integrated via the secure API Gateway, including Grab and FoodPanda.",
  },
  {
    label: "Currencies Supported",
    value: "4",
    description: "MMK, USD, THB, and SGD handled by the multi-currency settlement engine.",
  },
];
