import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    title: "RB AutoAI",
    slug: "rb-autoai",
    type: "AI Automation Platform",
    description:
      "AI-powered invoice processing platform that automates document extraction from WhatsApp and email using OCR, AI, Google Drive, and Google Sheets.",
    tags: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "n8n",
      "Gemini AI",
      "OCR",
      "Evolution API",
      "Google Workspace",
    ],
    note: "Live Product",
  },
  {
    title: "Interactive 3D Property Experience",
    slug: "interactive-home-walkthrough",
    type: "Real-Time 3D Web Experience",
    description:
      "Commercial 3D property walkthrough demo built to help architecture studios present spaces before construction through an interactive real-time experience.",
    tags: [
      "React Three Fiber",
      "Rapier Physics",
      "Three.js",
      "TypeScript",
      "WebGL",
      "Interactive UX",
    ],
    note: "Client Demo"
  },
  {
    title: "AI Reception Dashboard",
    slug: "ai-reception-dashboard",
    type: "Healthcare CRM & Reception Dashboard",
    description:
      "Dashboard prototype designed for aesthetic clinics to centralize WhatsApp conversations, customer records, and appointment workflows in a single interface.",
    tags: ["React", "TypeScript", "Tailwind", "Dashboard", "WhatsApp", "UX"],
    note: "Private Product Prototype"
  },
];
