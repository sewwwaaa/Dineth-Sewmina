import { GraduationCap, Terminal, Trophy, Wifi } from "lucide-react";
import { about } from "@/data/portfolio";
import Section from "./ui/Section";
import Reveal from "./ui/Reveal";

const icons = [GraduationCap, Wifi, Terminal, Trophy];

export default function About() {
  return (
    <Section id="about" eyebrow="cat about.md" title="Learning to break systems so I can defend them.">
      <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
        <Reveal className="space-y-5 text-base leading-relaxed text-slate-400 sm:text-lg">
          {about.paragraphs.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2">
          {about.highlights.map((h, i) => {
            const Icon = icons[i % icons.length];
            return (
              <Reveal key={h.title} delay={i * 0.08}>
                <div className="card group h-full p-5 transition-colors hover:border-accent-400/30">
                  <span className="mb-4 grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-navy-500/30 to-accent-500/30 text-accent-300 ring-1 ring-white/10 transition-transform group-hover:scale-110">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="font-semibold text-white">{h.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-400">{h.text}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
