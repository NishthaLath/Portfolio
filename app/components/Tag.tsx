import React from "react";

type TagProps = {
  children: string;
};

export function Tag({ children }: TagProps) {
  return (
    <span className="inline-flex items-center rounded-full border border-border/80 bg-surface/60 px-3 py-1.5 text-xs font-medium text-foreground/90 shadow-sm transition-all duration-200 hover:bg-surface-2/80 hover:border-accent/40 hover:shadow-md backdrop-blur-sm">
      {children}
    </span>
  );
}
