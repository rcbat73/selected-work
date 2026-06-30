import type { Metadata } from "next";

import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Rudys Calderin, frontend developer focused on AI-assisted workflows.",
};

export default function AboutPage() {
  return (
    <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-14 sm:px-6 lg:px-8">
      <section className="max-w-3xl space-y-6 rounded-2xl border border-zinc-800/80 bg-zinc-900/65 p-6 sm:p-10">
        <SectionHeading eyebrow="Profile" title="About" />
        <p className="text-sm leading-8 text-zinc-300 sm:text-base">
          Rudys is a frontend developer with experience building responsive
          interfaces, AI-assisted workflows, automation systems, and interactive
          web experiences. His work combines React, Next.js, TypeScript,
          Tailwind CSS, automation tools, and practical UX decisions to create
          polished products ready for real users.
        </p>
      </section>
    </main>
  );
}
