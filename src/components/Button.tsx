import Link from "next/link";

type ButtonProps = {
  children: React.ReactNode;
  href: string;
  variant?: "primary" | "secondary";
  className?: string;
  external?: boolean;
};

export function Button({
  children,
  href,
  variant = "primary",
  className = "",
  external = false,
}: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition";

  const variantClasses =
    variant === "primary"
      ? "bg-cyan-300 text-zinc-950 hover:bg-cyan-200"
      : "border border-zinc-700/80 bg-zinc-950/60 text-zinc-100 hover:border-zinc-500 hover:bg-zinc-900";

  const classes = `${baseClasses} ${variantClasses} ${className}`;

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
