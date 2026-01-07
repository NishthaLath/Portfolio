import React from "react";
import Image from "next/image";
import type { Profile } from "../types";
import { LinkButton } from "./LinkButton";

type HeroSectionProps = {
  profileData: Profile;
  lang: "en" | "ko";
};

const basePath = process.env.NEXT_PUBLIC_BASEPATH || "";


export function HeroSection({ profileData, lang }: HeroSectionProps) {
  return (
    <section id="top" className="relative overflow-hidden min-h-screen flex flex-col">
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <div className="absolute -top-30 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(124,92,255,0.22),transparent_60%)]" />
      </div>

      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8 sm:py-16">
        <div className="grid gap-10 md:grid-cols-12 md:items-center">
          <div className="md:col-span-8">
            <p className="text-lg font-semibold text-foreground">{profileData.locationLine}</p>

            <h1
              className="mt-4 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl"
              style={{ fontFamily: "var(--font-geist-mono)" }}
            >
              {profileData.name} <span className="text-muted">({profileData.nameNative})</span>
            </h1>

            {/* Specialization Badges */}
            <div className="mt-6 flex flex-wrap gap-3">
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold bg-gradient-to-r from-accent/20 to-accent-2/20 text-accent border border-accent/40 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300">
                🤖 AI Systems
              </span>
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold bg-gradient-to-r from-accent-2/20 to-accent/20 text-accent-2 border border-accent-2/40 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300">
                🔗 RAG Pipelines
              </span>
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold bg-gradient-to-r from-purple-500/20 to-accent/20 text-purple-400 border border-purple-500/40 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300">
                💻 Full-Stack
              </span>
            </div>

            <p className="mt-5 text-lg leading-8 text-muted">{profileData.subheadline}</p>

            <div className="mt-7 flex flex-wrap items-center gap-4">
              <LinkButton
                label={lang === "ko" ? "내 이력서" : "My Resume"}
                href={lang === "ko" ? profileData.links.resumeKo : profileData.links.resumeEn}
                variant="secondary"
              />
              <LinkButton
                label={lang === "ko" ? "연락하기" : "Contact"}
                href="#contact"
                variant="secondary"
              />
            </div>
          </div>

          <div className="md:col-span-4 flex justify-center">
            <div className="relative w-full max-w-xs">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/20 to-accent-2/20 blur-2xl opacity-60" />
              <div className="relative rounded-2xl border border-border/80 overflow-hidden shadow-2xl shadow-accent/20 backdrop-blur-sm">
                <div className="relative aspect-[4/5]">
                  <Image
                    src={`${basePath}/Profile_image.png`}
                    alt="Profile image of Nishtha Lath"
                    fill
                    className="object-cover"
                    priority
                    />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
