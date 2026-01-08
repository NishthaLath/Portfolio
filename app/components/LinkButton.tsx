import React from "react";

function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

type LinkButtonProps = {
  label: string;
  href: string;
  variant: "primary" | "secondary";
};

export function LinkButton({ label, href, variant }: LinkButtonProps) {
  const base =
    "inline-flex h-11 items-center justify-center rounded-full px-6 text-sm font-semibold transition-all duration-300 ease-out transform";

  const primaryStyles = [
    "border-2 border-border bg-white text-slate-800 font-bold backdrop-blur-sm",
    "shadow-lg",
    "hover:bg-surface-2 hover:border-accent/50 hover:shadow-lg hover:scale-105 hover:-translate-y-0.5 hover:text-white",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background",
    "active:scale-100",
  ].join(" ");

  const secondaryStyles = [
    "border-2 border-border bg-surface/60 text-foreground shadow-md backdrop-blur-sm",
    "hover:bg-surface-2 hover:border-accent/50 hover:shadow-lg hover:scale-105 hover:-translate-y-0.5",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background",
    "active:scale-100",
  ].join(" ");

  const variants = {
    primary: primaryStyles,
    secondary: secondaryStyles,
  } as const;

  return (
    <a
      className={cx(base, variants[variant])}
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
    >
      {label}
    </a>
  );
}
