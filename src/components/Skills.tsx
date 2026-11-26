"use client";

import { useState, type MouseEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Activity, Cloud, FlaskConical, ShieldCheck, Users, type LucideIcon } from "lucide-react";
import { skillCategories, type SkillCategory } from "@/data/portfolio";
import Section from "./ui/Section";

const meta: Record<SkillCategory["id"], { Icon: LucideIcon; tint: string }> = {
  security: { Icon: ShieldCheck, tint: "from-accent-500/25 to-navy-500/20 text-accent-300" },
  devops: { Icon: Cloud, tint: "from-navy-500/30 to-cyan-400/10 text-navy-400" },
  qa: { Icon: FlaskConical, tint: "from-lime-400/25 to-accent-500/15 text-lime-300" },
  monitoring: { Icon: Activity, tint: "from-yellow-400/20 to-accent-500/15 text-yellow-300" },
  soft: { Icon: Users, tint: "from-cyan-400/20 to-accent-500/15 text-cyan-300" },
};

type Filter = "all" | SkillCategory["id"];

function SkillCard({ category }: { category: SkillCategory }) {
  const { Icon, tint } = meta[category.id];

  // Cursor-following spotlight.
  const onMove = (e: MouseEvent<HTMLElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--x", `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty("--y", `${e.clientY - r.top}px`);
  };

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.35 }}
      onMouseMove={onMove}
      whileHover={{ y: -4 }}
      className="card group relative overflow-hidden p-6 transition-colors hover:border-accent-400/30"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(320px circle at var(--x, 50%) var(--y, 50%), rgba(0,224,122,0.12), transparent 60%)",
        }}
      />
      <div className="relative">
        <div className="mb-5 flex items-center gap-3">
          <span className={`grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br ring-1 ring-white/10 ${tint}`}>
            <Icon className="h-5 w-5" aria-hidden />
          </span>
          <div>
            <h3 className="text-lg font-semibold text-white">{category.title}</h3>
            <p className="font-mono text-xs text-slate-500">{category.skills.length} skills</p>
          </div>
        </div>
        <p className="mb-5 text-sm text-slate-400">{category.blurb}</p>
        <ul className="flex flex-wrap gap-2">
          {category.skills.map((s) => (
            <li
              key={s}
              className="rounded-lg border border-white/[0.08] bg-white/[0.03] px-3 py-1.5 text-sm text-slate-300 transition-colors hover:border-accent-400/40 hover:bg-accent-500/10 hover:text-white"
            >
              {s}
            </li>
          ))}
        </ul>
      </div>
    </motion.article>
  );
}

export default function Skills() {
  const [filter, setFilter] = useState<Filter>("all");
  const tabs: { id: Filter; label: string }[] = [
    { id: "all", label: "All" },
    ...skillCategories.map((c) => ({ id: c.id, label: c.title })),
  ];
  const visible = filter === "all" ? skillCategories : skillCategories.filter((c) => c.id === filter);

  return (
    <Section
      id="skills"
      eyebrow="ls ./skills --all"
      title="Technical toolkit"
      description="Security tools I work with, plus the DevOps, QA and monitoring stack I have hands-on exposure to."
    >
      <div role="group" aria-label="Filter skills" className="mb-8 flex flex-wrap gap-2">
        {tabs.map((t) => (
          <button
            key={t.id}
            type="button"
            onClick={() => setFilter(t.id)}
            aria-pressed={filter === t.id}
            className={`focus-ring relative rounded-full px-4 py-2 text-sm transition-colors ${
              filter === t.id ? "text-white" : "text-slate-400 hover:text-white"
            }`}
          >
            {filter === t.id && (
              <motion.span
                layoutId="skill-tab"
                className="absolute inset-0 -z-10 rounded-full border border-accent-400/30 bg-accent-500/15"
                transition={{ type: "spring", stiffness: 380, damping: 32 }}
              />
            )}
            {t.label}
          </button>
        ))}
      </div>

      <motion.div layout className="grid gap-5 md:grid-cols-2">
        <AnimatePresence mode="popLayout">
          {visible.map((c) => (
            <SkillCard key={c.id} category={c} />
          ))}
        </AnimatePresence>
      </motion.div>
    </Section>
  );
}
