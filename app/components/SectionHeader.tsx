import React from "react";

type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  subtitle?: string;
};

export function SectionHeader({ eyebrow, title, subtitle }: SectionHeaderProps) {
  return (
    <div className="mb-8">
      <div className="text-sm font-medium tracking-wide text-muted">{eyebrow}</div>
      <h2
        className="mt-2 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
        style={{ fontFamily: "var(--font-geist-mono)" }}
      >
        {title}
      </h2>
      {subtitle ? <p className="mt-3 max-w-2xl text-base leading-7 text-muted">{subtitle}</p> : null}
    </div>
  );
}
