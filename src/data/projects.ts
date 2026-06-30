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
      "Tailwind",
      "n8n",
      "Gemini",
      "OCR",
      "Google Workspace",
    ],
    note: "Live Product",
  },
  {
    title: "Interactive 3D Property Experience",
    slug: "interactive-property",
    type: "Real-Time 3D Web Experience",
    description:
      "Interactive property visualization built with React Three Fiber to explore architectural spaces before construction through a real-time 3D environment.",
    tags: [
      "React Three Fiber",
      "Three.js",
      "TypeScript",
      "WebGL",
      "Interactive UX",
    ],
    note: "Personal R&D Project",
  },
  {
    title: "AI Reception Dashboard",
    slug: "clinic-dashboard",
    type: "Healthcare CRM & Reception Dashboard",
    description:
      "Dashboard prototype designed for aesthetic clinics to centralize WhatsApp conversations, customer records, and appointment workflows in a single interface.",
    tags: ["React", "TypeScript", "Tailwind", "Dashboard", "WhatsApp", "UX"],
    note: "Product Prototype",
  },
];
