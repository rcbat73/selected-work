import type { Metadata } from "next";

import { Button } from "@/components/Button";

export const metadata: Metadata = {
  title: "Interactive Home Walkthrough | Case Study",
  description:
    "Case study of an interactive 3D web application built with Three.js for architectural visualization.",
};

const technologies = [
  "Three.js",
  "React Three Fiber",
  "React Three Rapier",
  "JavaScript",
  "Vite",
  "Blender",
  "GLTF / GLB",
  "HTML",
  "CSS",
];

const highlights = [
  "First-person navigation",
  "Desktop & Mobile",
  "Collision detection",
  "Browser-based experience",
];

export default function InteractiveHomeWalkthroughCaseStudyPage() {
  return (
    <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-16 px-4 py-14 sm:px-6 lg:px-8">
      <section className="rounded-lg border border-zinc-800/80 bg-zinc-900/65 p-7 sm:p-10 lg:p-12">
        <div className="max-w-4xl space-y-6">
          <p className="text-xs uppercase tracking-[0.24em] text-cyan-300/80">
            Product Prototype
          </p>

          <h1 className="text-3xl font-semibold leading-tight tracking-tight text-zinc-50 sm:text-4xl lg:text-5xl">
            Interactive Home Walkthrough
          </h1>

          <p className="max-w-3xl text-lg leading-8 text-zinc-300">
            Interactive 3D web application developed as a product prototype for
            an architecture studio, allowing clients to freely explore a future
            home directly in the browser before construction.
          </p>

          <div className="grid gap-5 pt-4 md:grid-cols-2">
            <div className="rounded-lg border border-zinc-800/80 bg-zinc-950/50 p-5">
              <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-zinc-400">
                Highlights
              </h2>

              <ul className="mt-4 flex flex-wrap gap-2">
                {highlights.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-zinc-700/70 bg-zinc-900 px-3 py-1 text-xs text-zinc-300"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-lg border border-zinc-800/80 bg-zinc-950/50 p-5">
              <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-zinc-400">
                Technology
              </h2>

              <ul className="mt-4 flex flex-wrap gap-2">
                {technologies.map((item) => (
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

          <div className="flex flex-col gap-3 pt-2 sm:flex-row">
            <Button
              href="https://rcbat73.github.io/interactive-home-walkthrough/"
              external
            >
              Live Demo
            </Button>

            <Button href="/work" variant="secondary">
              Back to Selected Work
            </Button>
          </div>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-lg border border-zinc-800/80 bg-zinc-900/65 p-6 sm:p-8">
          <p className="text-xs uppercase tracking-[0.22em] text-cyan-300/80">
            Project Overview
          </p>

          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-zinc-50">
            Bringing architectural projects to life before construction
          </h2>
        </div>

        <div className="space-y-5 rounded-lg border border-zinc-800/80 bg-zinc-900/65 p-6 sm:p-8">
          <p className="text-sm leading-7 text-zinc-300">
            This prototype explored how architecture studios could offer clients
            an immersive walkthrough of their future home instead of relying
            only on static renders or floor plans.
          </p>

          <p className="text-sm leading-7 text-zinc-300">
            Users can freely navigate the environment using first-person
            controls, while collision detection prevents walking through walls
            and furniture. The application was designed to work on both desktop
            and mobile devices directly in the browser.
          </p>

          <p className="text-sm leading-7 text-zinc-300">
            Future iterations were planned to allow furniture placement,
            electrical outlet positioning and interior customization before
            construction.
          </p>
        </div>
      </section>
    </main>
  );
}
