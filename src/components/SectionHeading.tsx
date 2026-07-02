type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <header className="space-y-3">
      {eyebrow ? (
        <p className="text-xs font-medium uppercase tracking-[0.24em] text-cyan-300/80">
          {eyebrow}
        </p>
      ) : null}

      <h2 className="max-w-4xl text-2xl font-semibold tracking-tight text-zinc-50 sm:text-3xl">
        {title}
      </h2>

      {description ? (
        <p className="max-w-3xl text-sm leading-7 text-zinc-300">
          {description}
        </p>
      ) : null}
    </header>
  );
}
