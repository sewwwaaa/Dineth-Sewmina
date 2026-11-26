import type { ReactNode } from "react";
import Reveal from "./Reveal";

type Props = {
  id: string;
  /** Shown as a terminal command above the title, e.g. "cat about.md". */
  eyebrow: string;
  title: string;
  description?: string;
  children: ReactNode;
};

/** Consistent section wrapper with a terminal-prompt eyebrow + heading. */
export default function Section({ id, eyebrow, title, description, children }: Props) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="relative py-24 sm:py-28">
      <div className="container-x">
        <Reveal className="mb-12 max-w-2xl sm:mb-16">
          <p className="mb-4 inline-flex flex-wrap items-center gap-x-1 rounded-lg border border-accent-500/20 bg-ink-900/80 px-3 py-1.5 font-mono text-xs sm:text-sm">
            <span className="text-accent-400">root@dineth</span>
            <span className="text-slate-500">:</span>
            <span className="text-navy-400">~</span>
            <span className="text-slate-500">$</span>
            <span className="text-slate-200">{eyebrow}</span>
          </p>
          <h2 id={`${id}-title`} className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            {title}
            <span aria-hidden className="text-accent-400 motion-safe:animate-[blink_1s_steps(1)_infinite]">_</span>
          </h2>
          {description && <p className="mt-4 text-base leading-relaxed text-slate-400">{description}</p>}
        </Reveal>
        {children}
      </div>
    </section>
  );
}
