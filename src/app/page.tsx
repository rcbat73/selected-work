import type { Metadata } from "next";

import { Button } from "@/components/Button";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeading } from "@/components/SectionHeading";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Frontend portfolio of Rudys Calderin featuring selected work in AI automation, dashboard UX, and interactive web experiences.",
};

const focusAreas = [
  {
    title: "Frontend Craftsmanship",
    description:
      "Clean architecture, responsive layouts, and UI systems focused on clarity, consistency, and production quality.",
  },
  {
    title: "AI-Assisted Workflows",
    description:
      "Smart integrations and automation-first thinking to reduce operational friction and improve speed to value.",
  },
  {
    title: "Interactive Experiences",
    description:
      "Meaningful interactions and polished transitions that support communication, usability, and product storytelling.",
  },
];

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-20 px-4 py-14 sm:px-6 lg:px-8">
      <section className="rounded-3xl border border-zinc-800/80 bg-zinc-900/60 p-7 sm:p-10 lg:p-12">
        <div className="max-w-3xl space-y-6">
          <p className="text-xs uppercase tracking-[0.24em] text-cyan-300/80">
            Rudys Calderin
          </p>
          <h1 className="text-3xl font-semibold leading-tight tracking-tight text-zinc-50 sm:text-4xl lg:text-5xl">
            Building production-ready frontend experiences powered by AI,
            automation, and modern web technologies.
          </h1>
          <p className="max-w-2xl text-sm leading-8 text-zinc-300 sm:text-base">
            I design and build responsive web products, AI-powered workflows,
            and interactive experiences using React, Next.js, TypeScript,
            Tailwind CSS, Three.js, and automation platforms. My focus is
            shipping products that combine clean engineering, thoughtful UX, and
            production quality.
          </p>

          <div className="flex flex-col gap-3 pt-2 sm:flex-row">
            <Button href="/work">View Selected Work</Button>
            <Button href="/contact" variant="secondary">
              Contact Me
            </Button>
          </div>
        </div>
      </section>

      <section className="space-y-8">
        <SectionHeading
          eyebrow="Core Strengths"
          title="Built with frontend precision and product thinking"
          description="Three areas that guide how I design and ship interfaces for business-focused products."
        />
        <div className="grid gap-4 md:grid-cols-3">
          {focusAreas.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-zinc-800/80 bg-zinc-900/65 p-5"
            >
              <h3 className="text-base font-semibold text-zinc-50">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-zinc-300">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <SectionHeading
          eyebrow="Featured Projects"
          title="Selected Work"
          description="Shipped projects and production-ready concept builds focused on modern interfaces, clear UX flow, and practical automation use cases."
        />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      <section className="rounded-2xl border border-zinc-800/80 bg-zinc-900/70 p-6 sm:p-8">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold tracking-tight text-zinc-50">
              Building your next frontend product?
            </h2>
            <p className="max-w-2xl text-sm leading-7 text-zinc-300">
              Available for frontend roles and projects where UI quality,
              responsiveness, and shipping discipline matter.
            </p>
          </div>
          <Button href="/contact">Contact Me</Button>
        </div>
      </section>
    </main>
  );
}
