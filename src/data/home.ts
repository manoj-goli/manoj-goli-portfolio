export const hero = {
  eyebrow: "Manoj Goli",
  name: "Platform & Observability",
  title: "Engineering reliable systems",
  tagline:
    "Specialized in Kubernetes, CI/CD, and enterprise-scale observability patterns that empower teams.",
  primaryCta: { label: "View Projects", href: "/projects" },
  secondaryCta: { label: "Download Resume", href: "/resume" },
};

export const highlights = [
  { icon: "mdi:kubernetes", label: "Cloud Platforms", value: "Kubernetes" },
  { icon: "mdi:chart-line", label: "Observability", value: "SLO-driven" },
  { icon: "mdi:robot-outline", label: "Practical AI", value: "RAG / PoC" },
  { icon: "mdi:infinity", label: "Automation", value: "CI/CD / GitOps" },
];

export const featuredProjects = [
  {
    title: "Enterprise Observability Platform",
    description: "Standardized monitoring and alerting patterns for hybrid cloud environments.",
    tags: ["Instana", "OpenShift", "Prometheus"],
    href: "/projects/enterprise-observability-platform",
  },
  {
    title: "AI Governance Framework",
    description: "Proof of concept for managing RAG-based AI agent compliance and monitoring.",
    tags: ["Python", "LangChain", "VectorDB"],
    href: "/projects/ai-governance-framework",
  },
  {
    title: "GitOps Continuous Delivery",
    description: "Automated delivery pipeline for multi-cluster application deployments.",
    tags: ["ArgoCD", "GitHub Actions", "Helm"],
    href: "/projects/gitops-cd",
  },
];
