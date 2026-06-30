import type { Metadata } from "next";

import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact details and social links for Rudys Calderin.",
};

const contactItems = [
  {
    label: "Email",
    value: "your-email@example.com",
    href: "mailto:your-email@example.com",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/your-profile",
    href: "https://linkedin.com/in/your-profile",
  },
  {
    label: "GitHub",
    value: "github.com/your-username",
    href: "https://github.com/your-username",
  },
];

export default function ContactPage() {
  return (
    <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-14 sm:px-6 lg:px-8">
      <section className="max-w-3xl space-y-8 rounded-2xl border border-zinc-800/80 bg-zinc-900/65 p-6 sm:p-10">
        <SectionHeading
          eyebrow="Get In Touch"
          title="Contact"
          description="Placeholders below are intentionally explicit so you can replace them quickly before publishing."
        />

        <ul className="space-y-4">
          {contactItems.map((item) => (
            <li
              key={item.label}
              className="rounded-xl border border-zinc-800 bg-zinc-950/70 p-4"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
                {item.label}
              </p>
              <a
                href={item.href}
                target={item.label === "Email" ? undefined : "_blank"}
                rel={item.label === "Email" ? undefined : "noopener noreferrer"}
                className="mt-1 inline-flex text-sm text-cyan-300 transition hover:text-cyan-200"
              >
                {item.value}
              </a>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
