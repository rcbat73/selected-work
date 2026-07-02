import type { Metadata } from "next";

import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeading } from "@/components/SectionHeading";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Selected Work",
  description: "Portfolio projects and product concepts by Rudys Calderin.",
};

export default function WorkPage() {
  return (
    <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-14 sm:px-6 lg:px-8">
      <section className="space-y-10">
        <SectionHeading
          eyebrow="Selected Work"
          title="Shipped products, production prototypes, and interactive experiences."
          description="A curated collection of commercial demos, shipped interfaces, AI automation systems, and interactive web experiences built with a product-focused approach."
        />

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
    </main>
  );
}
