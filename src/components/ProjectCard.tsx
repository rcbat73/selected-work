import { Button } from "@/components/Button";
import type { Project } from "@/types/project";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article
      aria-labelledby={`${project.slug}-title`}
      className="group relative overflow-hidden rounded-lg border border-zinc-800/80 bg-zinc-900/80 p-6 transition duration-300 hover:-translate-y-1 hover:border-zinc-600/80 hover:shadow-[0_20px_40px_rgba(0,0,0,0.32)]"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-80"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(100% 100% at 0% 0%, rgba(33, 173, 255, 0.14) 0%, rgba(12, 12, 13, 0) 55%), radial-gradient(100% 100% at 100% 100%, rgba(49, 74, 255, 0.1) 0%, rgba(12, 12, 13, 0) 60%)",
        }}
      />

      <div className="relative space-y-5">
        <div className="space-y-2">
          <span
            className={`inline-flex rounded-full border px-3 py-1 text-xs font-medium ${
              project.note === "Live Product"
                ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-300"
                : project.note === "Client Demo"
                  ? "border-sky-500/30 bg-sky-500/10 text-sky-300"
                  : "border-violet-500/30 bg-violet-500/10 text-violet-300"
            }`}
          >
            {project.note}
          </span>

          <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">
            {project.type}
          </p>

          <h3
            id={`${project.slug}-title`}
            className="text-xl font-semibold tracking-tight text-zinc-50"
          >
            {project.title}
          </h3>

          <p className="text-sm leading-7 text-zinc-300">
            {project.description}
          </p>
        </div>

        <ul
          className="flex flex-wrap gap-2"
          aria-label={`${project.title} technologies`}
        >
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full border border-zinc-700/70 bg-zinc-950/70 px-3 py-1 text-xs font-medium text-zinc-300 transition-colors duration-200"
            >
              {tag}
            </li>
          ))}
        </ul>

        <Button
          href={`/work/${project.slug}`}
          variant="secondary"
          className="w-full sm:w-auto"
        >
          View Case Study
        </Button>
      </div>
    </article>
  );
}
