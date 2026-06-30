import Link from "next/link";
import type { ReactNode } from "react";

type ButtonVariant = "primary" | "secondary";

type ButtonProps = {
  children: ReactNode;
  href: string;
  variant?: ButtonVariant;
  className?: string;
};

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-[linear-gradient(135deg,_#2d77ff_0%,_#4cb8ff_100%)] text-zinc-950 hover:brightness-110 focus-visible:ring-zinc-200",
  secondary:
    "border border-zinc-700/70 bg-zinc-900/70 text-zinc-100 hover:border-zinc-500 hover:bg-zinc-900 focus-visible:ring-zinc-600",
};

export function Button({
  children,
  href,
  variant = "primary",
  className = "",
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={[
        "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold tracking-wide transition duration-200",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950",
        variants[variant],
        className,
      ].join(" ")}
    >
      {children}
    </Link>
  );
}
