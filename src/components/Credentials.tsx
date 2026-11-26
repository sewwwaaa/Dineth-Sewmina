import { Award, BookOpen, ExternalLink, GraduationCap, Trophy, type LucideIcon } from "lucide-react";
import { activities, certifications, education, training, type Credential } from "@/data/portfolio";
import Section from "./ui/Section";
import Reveal from "./ui/Reveal";

function Column({
  title,
  Icon,
  items,
  delay,
  className = "",
}: {
  title: string;
  Icon: LucideIcon;
  items: Credential[];
  delay: number;
  className?: string;
}) {
  return (
    <Reveal delay={delay} className={`card h-full p-6 ${className}`}>
      <div className="mb-6 flex items-center gap-3">
        <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-navy-500/30 to-accent-500/30 text-accent-300 ring-1 ring-white/10">
          <Icon className="h-5 w-5" aria-hidden />
        </span>
        <h3 className="text-lg font-semibold text-white">{title}</h3>
      </div>
      <ul className="space-y-4">
        {items.map((c, i) => (
          <li
            key={`${c.title}-${i}`}
            className={`rounded-xl border p-4 ${
              c.placeholder ? "border-dashed border-white/15 bg-transparent" : "border-white/[0.07] bg-white/[0.02]"
            }`}
          >
            <div className="flex items-start justify-between gap-3">
              <p className={`font-medium ${c.placeholder ? "text-slate-400" : "text-slate-100"}`}>{c.title}</p>
              <span className="shrink-0 font-mono text-xs text-accent-300/80">{c.date}</span>
            </div>
            <p className="mt-1 text-sm text-slate-400">{c.issuer}</p>
            {(c.note || c.link) && (
              <div className="mt-2 flex items-center justify-between gap-3">
                {c.note && <span className="font-mono text-xs text-slate-500">{c.note}</span>}
                {c.link && (
                  <a
                    href={c.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="focus-ring inline-flex items-center gap-1 rounded text-xs text-accent-300 hover:text-accent-400"
                  >
                    View <ExternalLink className="h-3 w-3" aria-hidden />
                  </a>
                )}
              </div>
            )}
          </li>
        ))}
      </ul>
    </Reveal>
  );
}

export default function Credentials() {
  return (
    <Section
      id="credentials"
      eyebrow="cat education.txt"
      title="Education & activities"
      description="Academic background, ongoing training, certifications and life beyond the keyboard."
    >
      <div className="grid gap-5 lg:grid-cols-2">
        <Column title="Education" Icon={GraduationCap} items={education} delay={0} className="lg:row-span-2" />
        <Column title="Professional Development" Icon={BookOpen} items={training} delay={0.08} />
        <Column title="Certifications" Icon={Award} items={certifications} delay={0.12} />
        <Column title="Extra-Curricular" Icon={Trophy} items={activities} delay={0.16} className="lg:col-span-2" />
      </div>
    </Section>
  );
}
