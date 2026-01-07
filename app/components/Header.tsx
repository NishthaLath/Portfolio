"use client";

import React, { useEffect, useState } from "react";
import type { LinkItem } from "../types";
import { profile } from "../data/constants";

type HeaderProps = {
  navLinks: LinkItem[];
  lang: "en" | "ko";
  onLangToggle: () => void;
  scrollProgress: number;
};

export function Header({ navLinks, lang, onLangToggle, scrollProgress }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const githubEnabled = Boolean(profile.links.github);
  const linkedinEnabled = Boolean(profile.links.linkedin);

  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/95 backdrop-blur-xl shadow-sm">
      <div
        className="absolute top-0 left-0 h-0.5 bg-gradient-to-r from-accent to-accent-2 transition-all duration-150"
        style={{ width: `${scrollProgress}%` }}
      />

      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <a
          href="#top"
          className="text-sm font-semibold tracking-tight text-foreground transition-colors hover:text-accent"
          style={{ fontFamily: "var(--font-geist-mono)" }}
        >
          {profile.name}
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-5 text-sm text-muted md:flex">
          {navLinks.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative transition-colors hover:text-foreground after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-accent after:transition-all after:duration-300 hover:after:w-full"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          {/* Social links - hidden on small mobile */}
          <div className="hidden sm:flex items-center gap-3">
            {githubEnabled ? (
              <a
                href={profile.links.github}
                className="text-sm font-medium text-muted transition-all hover:text-foreground hover:scale-110"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            ) : null}
            {linkedinEnabled ? (
              <a
                href={profile.links.linkedin}
                className="text-sm font-medium text-muted transition-all hover:text-foreground hover:scale-110"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            ) : null}
          </div>

          {/* Language toggle */}
          <button
            aria-label={lang === "ko" ? "영어로 전환" : "한국어로 전환"}
            onClick={onLangToggle}
            className="rounded-full border border-border/80 bg-surface/60 px-3 py-1 text-sm font-medium text-muted hover:text-foreground hover:bg-surface-2 transition-all cursor-pointer"
          >
            {lang === "ko" ? "EN" : "한국어"}
          </button>

          {/* Mobile menu button */}
          <button
            aria-label="Toggle menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-muted hover:text-foreground transition-colors"
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[57px] bg-background/98 backdrop-blur-xl z-50 animate-fadeIn">
          <nav className="flex flex-col px-5 py-6 space-y-1">
            {navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-muted hover:text-foreground py-3 px-4 rounded-lg hover:bg-surface/60 transition-all"
              >
                {item.label}
              </a>
            ))}

            {/* Social links in mobile menu */}
            <div className="pt-6 mt-6 border-t border-border/60 flex gap-4">
              {githubEnabled ? (
                <a
                  href={profile.links.github}
                  className="flex-1 text-center py-2 px-4 rounded-lg border border-border/80 bg-surface/60 text-sm font-medium text-muted hover:text-foreground hover:bg-surface-2 transition-all"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              ) : null}
              {linkedinEnabled ? (
                <a
                  href={profile.links.linkedin}
                  className="flex-1 text-center py-2 px-4 rounded-lg border border-border/80 bg-surface/60 text-sm font-medium text-muted hover:text-foreground hover:bg-surface-2 transition-all"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              ) : null}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
