import { Briefcase, CheckCircle2 } from "lucide-react";
import { experience } from "@/data/portfolio";
import Section from "./ui/Section";
import Reveal from "./ui/Reveal";

export default function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="history --experience"
      title="Professional experience"
      description="Where I have worked so far — and what each role taught me."
    >
      <ol className="relative ml-3 border-l border-white/10 sm:ml-5">
        {experience.map((job, i) => (
          <li key={`${job.company}-${job.role}`} className="relative pb-12 pl-8 last:pb-0 sm:pl-12">
            <span
              aria-hidden
              className="absolute -left-[17px] top-1 grid h-8 w-8 place-items-center rounded-full border border-accent-400/40 bg-ink-900 text-accent-300 shadow-[0_0_24px_rgba(0,224,122,0.35)]"
            >
              <Briefcase className="h-4 w-4" />
            </span>

            <Reveal delay={i * 0.1}>
              <article className="card p-6 sm:p-8">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-white">{job.role}</h3>
                    <p className="mt-1 font-medium text-accent-300">{job.company}</p>
                    {job.location && <p className="mt-0.5 text-sm text-slate-500">{job.location}</p>}
                  </div>
                  <span className="chip w-fit shrink-0">{job.period}</span>
                </div>

                <p className="mt-5 text-slate-400">{job.summary}</p>

                <ul className="mt-5 space-y-2.5">
                  {job.responsibilities.map((r) => (
                    <li key={r} className="flex gap-3 text-sm text-slate-300">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" aria-hidden />
                      <span>{r}</span>
                    </li>
                  ))}
                </ul>

                <ul className="mt-6 flex flex-wrap gap-2" aria-label="Technologies">
                  {job.tags.map((t) => (
                    <li key={t} className="chip">
                      {t}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}
