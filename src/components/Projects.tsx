"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Activity, ArrowUpRight, Cloud, FlaskConical, FolderGit2, ShieldCheck, type LucideIcon } from "lucide-react";
import { projects, type Project } from "@/data/portfolio";
import Section from "./ui/Section";
import { GithubIcon } from "./ui/BrandIcons";

const categoryIcon: Record<Project["category"], LucideIcon> = {
  Security: ShieldCheck,
  DevOps: Cloud,
  QA: FlaskConical,
  Monitoring: Activity,
};

type Filter = "All" | Project["category"];

export default function Projects() {
  const [filter, setFilter] = useState<Filter>("All");
  const categories: Filter[] = ["All", ...Array.from(new Set(projects.map((p) => p.category)))];
  const visible = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <Section
      id="projects"
      eyebrow="ls ./projects"
      title="Selected projects"
      description="Academic and hands-on work in wireless security, security testing, automation and cloud."
    >
      <div role="group" aria-label="Filter projects" className="mb-8 flex flex-wrap gap-2">
        {categories.map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => setFilter(c)}
            aria-pressed={filter === c}
            className={`focus-ring rounded-full border px-4 py-2 text-sm transition-colors ${
              filter === c
                ? "border-accent-400/40 bg-accent-500/15 text-white"
                : "border-white/10 text-slate-400 hover:border-white/20 hover:text-white"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <motion.ul layout className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {visible.map((p) => {
            const Icon = categoryIcon[p.category] ?? FolderGit2;
            return (
              <motion.li
                key={p.title}
                layout
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.35 }}
                className="h-full"
              >
                <article className="card group relative flex h-full flex-col p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent-400/30 hover:shadow-2xl hover:shadow-accent-500/10">
                  <div className="mb-5 flex items-center justify-between">
                    <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-navy-500/30 to-accent-500/30 text-accent-300 ring-1 ring-white/10">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <span className="font-mono text-xs uppercase tracking-wider text-slate-500">{p.category}</span>
                  </div>

                  <h3 className="text-lg font-semibold text-white">{p.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-400">{p.description}</p>

                  <ul className="mt-5 flex flex-wrap gap-1.5" aria-label="Technologies">
                    {p.tech.map((t) => (
                      <li key={t} className="chip !text-[11px]">
                        {t}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex items-center gap-4 border-t border-white/[0.06] pt-5 text-sm">
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="focus-ring inline-flex items-center gap-2 rounded text-slate-300 transition-colors hover:text-white"
                    >
                      <GithubIcon className="h-4 w-4" />
                      Source
                      <span className="sr-only"> code for {p.title}</span>
                    </a>
                    {p.demo && (
                      <a
                        href={p.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="focus-ring inline-flex items-center gap-1 rounded text-slate-300 transition-colors hover:text-white"
                      >
                        Live demo <ArrowUpRight className="h-4 w-4" aria-hidden />
                      </a>
                    )}
                  </div>
                </article>
              </motion.li>
            );
          })}
        </AnimatePresence>
      </motion.ul>
    </Section>
  );
}
