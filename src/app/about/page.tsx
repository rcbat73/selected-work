import type { Metadata } from "next";

import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Rudys Calderin, frontend engineer focused on AI automation, interactive experiences, and modern web products.",
};

export default function AboutPage() {
  return (
    <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-14 sm:px-6 lg:px-8">
      <section className="mx-auto max-w-3xl space-y-6 rounded-lg border border-zinc-800/80 bg-zinc-900/65 p-6 sm:p-10">
        <SectionHeading
          eyebrow="About"
          title="Frontend Engineer with a product mindset"
        />

        <p className="text-sm leading-8 text-zinc-300 sm:text-base">
          I'm a frontend engineer specialising in modern web applications,
          AI-powered automation, and interactive user experiences. I enjoy
          building products that combine clean architecture, thoughtful UX, and
          production-ready quality.
        </p>

        <p className="text-sm leading-8 text-zinc-300 sm:text-base">
          My work spans commercial demos, private product prototypes, and live
          applications built with React, Next.js, TypeScript, Tailwind CSS,
          Three.js, React Three Fiber, n8n, and modern AI technologies.
        </p>

        <p className="text-sm leading-8 text-zinc-300 sm:text-base">
          I focus on solving real business problems through scalable frontend
          engineering, AI automation, and intuitive digital experiences.
        </p>
      </section>
    </main>
  );
}
