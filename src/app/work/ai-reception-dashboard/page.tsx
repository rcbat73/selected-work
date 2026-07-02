import type { Metadata } from "next";

import { Button } from "@/components/Button";

export const metadata: Metadata = {
  title: "AI Reception Dashboard | Case Study",
  description:
    "Case study of an AI-powered reception dashboard designed for aesthetic clinics to manage WhatsApp conversations, leads, and appointment workflows.",
};

const roles = [
  "Frontend Development",
  "Dashboard UX",
  "Product Design",
  "Workflow Design",
];

const tech = ["React", "TypeScript", "Tailwind", "WhatsApp", "Automation"];

export default function ClinicDashboardCaseStudyPage() {
  return (
    <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-16 px-4 py-14 sm:px-6 lg:px-8">
      <section className="rounded-lg border border-zinc-800/80 bg-zinc-900/65 p-7 sm:p-10 lg:p-12">
        <div className="max-w-4xl space-y-6">
          <p className="text-xs uppercase tracking-[0.24em] text-cyan-300/80">
            Product Prototype
          </p>

          <h1 className="text-3xl font-semibold leading-tight tracking-tight text-zinc-50 sm:text-4xl lg:text-5xl">
            AI Reception Dashboard
          </h1>

          <p className="max-w-3xl text-lg leading-8 text-zinc-300">
            Dashboard prototype designed for aesthetic clinics to manage
            WhatsApp conversations, customer information, and appointment
            workflows from a single interface.
          </p>

          <div className="grid gap-5 pt-4 md:grid-cols-2">
            <div className="rounded-lg border border-zinc-800/80 bg-zinc-950/50 p-5">
              <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-zinc-400">
                Role
              </h2>

              <ul className="mt-4 flex flex-wrap gap-2">
                {roles.map((role) => (
                  <li
                    key={role}
                    className="rounded-full border border-zinc-700/70 bg-zinc-900 px-3 py-1 text-xs text-zinc-300"
                  >
                    {role}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-lg border border-zinc-800/80 bg-zinc-950/50 p-5">
              <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-zinc-400">
                Tech Stack
              </h2>

              <ul className="mt-4 flex flex-wrap gap-2">
                {tech.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-zinc-700/70 bg-zinc-900 px-3 py-1 text-xs text-zinc-300"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-3 pt-2">
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button href="/contact">Request Walkthrough</Button>

              <Button href="/work" variant="secondary">
                Back to Selected Work
              </Button>
            </div>

            <p className="text-sm leading-6 text-zinc-400">
              Private product prototype. A walkthrough is available on request.
            </p>
          </div>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-lg border border-zinc-800/80 bg-zinc-900/65 p-6 sm:p-8">
          <p className="text-xs uppercase tracking-[0.22em] text-cyan-300/80">
            Overview
          </p>

          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-zinc-50">
            Managing conversations without losing context
          </h2>
        </div>

        <div className="space-y-5 rounded-lg border border-zinc-800/80 bg-zinc-900/65 p-6 sm:p-8">
          <p className="text-sm leading-7 text-zinc-300">
            This prototype was designed to help aesthetic clinics centralize
            customer conversations received through WhatsApp while keeping
            customer information and appointment workflows organized.
          </p>

          <p className="text-sm leading-7 text-zinc-300">
            The initial goal was not to fully automate customer service, but to
            provide staff with a clearer workflow before introducing AI-assisted
            automation.
          </p>
        </div>
      </section>
    </main>
  );
}
