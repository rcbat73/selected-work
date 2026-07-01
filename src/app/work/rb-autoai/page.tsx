import type { Metadata } from "next";

import { Button } from "@/components/Button";

export const metadata: Metadata = {
  title: "RB AutoAI | Case Study",
  description:
    "Case study of RB AutoAI, an AI-powered invoice processing platform that automates document extraction from WhatsApp and email using OCR, AI, Google Drive, and Google Sheets.",
};

const roles = [
  "Frontend Development",
  "UX/UI",
  "AI Workflow Design",
  "Automation Architecture",
  "Deployment",
];

const tech = [
  "Next.js",
  "TypeScript",
  "Tailwind",
  "n8n",
  "Gemini",
  "OCR",
  "Google Drive",
  "Google Sheets",
  "WhatsApp",
  "Email",
];

const features = [
  "Invoice capture through WhatsApp and email",
  "OCR and AI-assisted data extraction",
  "Original document storage in Google Drive",
  "Structured invoice data exported to Google Sheets",
  "Error handling for unreadable or incomplete documents",
  "Responsive landing page with clear conversion-focused CTA",
];

export default function RbAutoAiCaseStudyPage() {
  return (
    <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-16 px-4 py-14 sm:px-6 lg:px-8">
      <section className="rounded-3xl border border-zinc-800/80 bg-zinc-900/65 p-7 sm:p-10 lg:p-12">
        <div className="max-w-4xl space-y-6">
          <p className="text-xs uppercase tracking-[0.24em] text-cyan-300/80">
            Case Study
          </p>

          <h1 className="text-3xl font-semibold leading-tight tracking-tight text-zinc-50 sm:text-4xl lg:text-5xl">
            RB AutoAI
          </h1>

          <p className="max-w-3xl text-lg leading-8 text-zinc-300">
            AI-powered invoice processing platform that automates document
            extraction from WhatsApp and email using OCR, AI, Google Drive, and
            Google Sheets.
          </p>

          <div className="grid gap-5 pt-4 md:grid-cols-2">
            <div className="rounded-2xl border border-zinc-800/80 bg-zinc-950/50 p-5">
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

            <div className="rounded-2xl border border-zinc-800/80 bg-zinc-950/50 p-5">
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

          <div className="flex flex-col gap-3 pt-2 sm:flex-row">
            <Button href="https://rb-autoai.tech" external>
              Live Website
            </Button>
            <Button href="/work" variant="secondary">
              Back to Selected Work
            </Button>
          </div>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-2xl border border-zinc-800/80 bg-zinc-900/65 p-6 sm:p-8">
          <p className="text-xs uppercase tracking-[0.22em] text-cyan-300/80">
            Overview
          </p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-zinc-50">
            From manual invoice handling to structured automation
          </h2>
        </div>

        <div className="space-y-5 rounded-2xl border border-zinc-800/80 bg-zinc-900/65 p-6 sm:p-8">
          <p className="text-sm leading-7 text-zinc-300">
            RB AutoAI was built to reduce the repetitive work involved in
            receiving, reading, storing, and organizing invoice data for small
            business and accounting workflows.
          </p>
          <p className="text-sm leading-7 text-zinc-300">
            The system receives documents through WhatsApp or email, extracts
            invoice information with OCR and AI, stores the original file in
            Google Drive, and sends structured data to Google Sheets for review
            and export.
          </p>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <article className="rounded-2xl border border-zinc-800/80 bg-zinc-900/65 p-6 sm:p-8">
          <p className="text-xs uppercase tracking-[0.22em] text-cyan-300/80">
            Challenge
          </p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-zinc-50">
            Manual document processing is slow and error-prone
          </h2>
          <p className="mt-4 text-sm leading-7 text-zinc-300">
            Many invoice workflows still depend on manually reading documents,
            copying supplier details, checking dates, entering totals, and
            keeping the original files organized for future reference.
          </p>
        </article>

        <article className="rounded-2xl border border-zinc-800/80 bg-zinc-900/65 p-6 sm:p-8">
          <p className="text-xs uppercase tracking-[0.22em] text-cyan-300/80">
            Solution
          </p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-zinc-50">
            A practical AI workflow connected to tools businesses already use
          </h2>
          <p className="mt-4 text-sm leading-7 text-zinc-300">
            Instead of forcing users into a new platform, RB AutoAI connects
            WhatsApp, email, Google Drive, Google Sheets, OCR, and AI into one
            automated document-processing flow.
          </p>
        </article>
      </section>

      <section className="rounded-2xl border border-zinc-800/80 bg-zinc-900/65 p-6 sm:p-8">
        <p className="text-xs uppercase tracking-[0.22em] text-cyan-300/80">
          Key Features
        </p>
        <h2 className="mt-3 text-2xl font-semibold tracking-tight text-zinc-50">
          Built around real operational steps
        </h2>

        <div className="mt-6 grid gap-3 md:grid-cols-2">
          {features.map((feature) => (
            <div
              key={feature}
              className="rounded-xl border border-zinc-800/80 bg-zinc-950/50 p-4 text-sm leading-7 text-zinc-300"
            >
              {feature}
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-2xl border border-zinc-800/80 bg-zinc-900/65 p-6 sm:p-8">
        <p className="text-xs uppercase tracking-[0.22em] text-cyan-300/80">
          Architecture
        </p>
        <h2 className="mt-3 text-2xl font-semibold tracking-tight text-zinc-50">
          Workflow architecture
        </h2>

        <div className="mt-6 grid gap-3 text-sm text-zinc-300 sm:grid-cols-2 lg:grid-cols-5">
          {[
            "WhatsApp / Email",
            "OCR",
            "AI Extraction",
            "Google Drive",
            "Google Sheets",
          ].map((step) => (
            <div
              key={step}
              className="rounded-xl border border-zinc-800/80 bg-zinc-950/50 p-4 text-center"
            >
              {step}
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-2xl border border-zinc-800/80 bg-zinc-900/65 p-6 sm:p-8">
        <p className="text-xs uppercase tracking-[0.22em] text-cyan-300/80">
          Lessons Learned
        </p>
        <h2 className="mt-3 text-2xl font-semibold tracking-tight text-zinc-50">
          What this project improved
        </h2>
        <p className="mt-4 max-w-3xl text-sm leading-7 text-zinc-300">
          This project strengthened my experience in designing production-ready
          landing pages, connecting AI workflows to business processes, handling
          document extraction edge cases, and building automation systems around
          tools that users already understand.
        </p>
      </section>
    </main>
  );
}
