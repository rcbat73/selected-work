import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Interactive Property Case Study",
  description:
    "Placeholder case study page for Interactive 3D Property Experience.",
};

export default function InteractivePropertyCaseStudyPage() {
  return (
    <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-14 sm:px-6 lg:px-8">
      <section className="max-w-3xl space-y-4 rounded-2xl border border-zinc-800/80 bg-zinc-900/65 p-6 sm:p-10">
        <h1 className="text-2xl font-semibold tracking-tight text-zinc-50">
          Interactive 3D Property Experience
        </h1>
        <p className="text-sm leading-7 text-zinc-300">
          Case study content coming soon. This route is a placeholder and can be
          replaced with a full project breakdown.
        </p>
      </section>
    </main>
  );
}
