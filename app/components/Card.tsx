import React from "react";

function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

type CardProps = {
  children: React.ReactNode;
  className?: string;
  premium?: boolean;
};

export function Card({ children, className, premium }: CardProps) {
  if (premium) {
    return (
      <div
        className={cx(
          "rounded-2xl border-2 p-6 shadow-xl transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-2xl backdrop-blur-sm",
          "bg-gradient-to-br from-amber-500/5 via-surface/60 to-accent/5",
          "border-amber-500/30 hover:border-amber-500/50",
          "shadow-amber-500/10 hover:shadow-amber-500/20",
          className
        )}
      >
        {children}
      </div>
    );
  }

  return (
    <div
      className={cx(
        "rounded-2xl border border-border/80 bg-surface/60 p-6 shadow-lg shadow-black/5 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-xl hover:shadow-black/10 hover:border-border backdrop-blur-sm",
        className
      )}
    >
      {children}
    </div>
  );
}
