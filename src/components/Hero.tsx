"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Download, MapPin } from "lucide-react";
import { hero, site } from "@/data/portfolio";
import SocialLinks from "./SocialLinks";
import HeroPortrait from "./HeroPortrait";
import Typewriter from "./ui/Typewriter";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  const reduce = useReducedMotion();
  // Always animate to visible; with reduced motion the transition is instant.
  const fade = (delay: number) => ({
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: reduce ? { duration: 0 } : { duration: 0.7, delay, ease },
  });

  return (
    <section id="top" aria-label="Introduction" className="relative flex min-h-[100svh] items-center pb-20 pt-28">
      <div className="container-x grid items-center gap-16 lg:grid-cols-[1.25fr_1fr] lg:gap-10">
        {/* Text */}
        <div>
          <motion.div
            {...fade(0)}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent-400/25 bg-accent-400/[0.06] px-3 py-1.5 font-mono text-xs text-accent-300"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-400 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-400" />
            </span>
            {site.availability}
          </motion.div>

          <motion.p {...fade(0.05)} className="font-mono text-sm text-accent-400">
            {hero.greeting}
          </motion.p>
          <motion.h1
            {...fade(0.1)}
            className="mt-2 text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl"
          >
            <span className="glitch" data-text={site.name}>
              {site.name}
            </span>
          </motion.h1>
          <motion.p {...fade(0.18)} className="mt-4 min-h-[1.75rem] font-mono text-base text-slate-200 sm:text-xl">
            <span className="text-accent-400" aria-hidden>
              ${" "}
            </span>
            <Typewriter phrases={hero.roles} />
            <span className="sr-only">{site.title}</span>
          </motion.p>
          <motion.p {...fade(0.26)} className="mt-6 max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg">
            {hero.intro}
          </motion.p>

          <motion.ul {...fade(0.32)} className="mt-6 flex flex-wrap gap-2" aria-label="Focus areas">
            {hero.focus.map((f) => (
              <li key={f} className="chip">
                {f}
              </li>
            ))}
          </motion.ul>

          <motion.div {...fade(0.4)} className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="#projects" className="btn-primary group">
              View My Projects
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />
            </a>
            <a href={site.cvPath} download className="btn-ghost">
              <Download className="h-4 w-4" aria-hidden />
              Download CV
            </a>
          </motion.div>

          <motion.div {...fade(0.48)} className="mt-9 flex flex-wrap items-center gap-5">
            <SocialLinks />
            <span className="flex items-center gap-1.5 text-sm text-slate-500">
              <MapPin className="h-4 w-4" aria-hidden /> {site.location}
            </span>
          </motion.div>
        </div>

        <HeroPortrait />
      </div>
    </section>
  );
}
