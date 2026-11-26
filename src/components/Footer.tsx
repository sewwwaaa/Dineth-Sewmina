import { ArrowUp } from "lucide-react";
import { navLinks, site } from "@/data/portfolio";
import SocialLinks from "./SocialLinks";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative border-t border-white/[0.06] bg-ink-950">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent-500/50 to-transparent" aria-hidden />
      <div className="container-x py-12">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <a href="#top" className="focus-ring inline-flex items-center gap-2.5 rounded-lg">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-navy-500 to-accent-500 font-mono text-sm font-bold text-ink-950">
                DS
              </span>
              <span className="font-semibold text-white">{site.name}</span>
            </a>
            <p className="mt-4 text-sm leading-relaxed text-slate-500">{site.title}</p>
          </div>

          <nav aria-label="Footer">
            <ul className="grid grid-cols-2 gap-x-10 gap-y-2 sm:grid-cols-3">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="focus-ring rounded text-sm text-slate-400 transition-colors hover:text-white">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <SocialLinks />
        </div>

        <div className="mt-10 flex flex-col-reverse items-start gap-4 border-t border-white/[0.06] pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-slate-600">
            © {year} {site.name}. All rights reserved.
          </p>
          <a
            href="#top"
            className="focus-ring inline-flex items-center gap-1.5 rounded text-xs text-slate-500 transition-colors hover:text-white"
          >
            Back to top <ArrowUp className="h-3.5 w-3.5" aria-hidden />
          </a>
        </div>
      </div>
    </footer>
  );
}
