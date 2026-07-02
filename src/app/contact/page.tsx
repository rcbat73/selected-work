import type { Metadata } from "next";

import { Button } from "@/components/Button";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Rudys Calderin regarding frontend engineering, AI automation, and interactive web development.",
};

export default function ContactPage() {
  return (
    <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-14 sm:px-6 lg:px-8">
      <section className="mx-auto max-w-3xl space-y-8 rounded-lg border border-zinc-800/80 bg-zinc-900/65 p-6 sm:p-10">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something great together."
          description="I'm available for frontend engineering, AI automation, interactive experiences, and modern web product development."
        />

        <div className="space-y-6">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
              Email
            </p>

            <a
              href="mailto:rcbat73@gmail.com"
              className="mt-2 inline-flex text-base text-cyan-300 transition hover:text-cyan-200"
            >
              rcbat73@gmail.com
            </a>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
              LinkedIn
            </p>

            <a
              href="https://www.linkedin.com/in/rudyscalderin/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex text-base text-cyan-300 transition hover:text-cyan-200"
            >
              linkedin.com/in/rudyscalderin/
            </a>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
              GitHub
            </p>

            <a
              href="https://github.com/rcbat73"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex text-base text-cyan-300 transition hover:text-cyan-200"
            >
              github.com/rcbat73
            </a>
          </div>
        </div>

        <Button href="mailto:rcbat73@gmail.com" className="w-full sm:w-auto">
          Start a Conversation
        </Button>
      </section>
    </main>
  );
}
