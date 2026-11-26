import { Mail } from "lucide-react";
import { socials } from "@/data/portfolio";
import { GithubIcon, LinkedinIcon } from "./ui/BrandIcons";

const items = [
  { label: "LinkedIn", href: socials.linkedin, Icon: LinkedinIcon },
  { label: "GitHub", href: socials.github, Icon: GithubIcon },
  { label: "Email", href: `mailto:${socials.email}`, Icon: Mail },
];

export default function SocialLinks({ className = "" }: { className?: string }) {
  return (
    <ul className={`flex items-center gap-3 ${className}`}>
      {items.map(({ label, href, Icon }) => (
        <li key={label}>
          <a
            href={href}
            target={href.startsWith("mailto:") ? undefined : "_blank"}
            rel="noopener noreferrer"
            aria-label={label}
            className="focus-ring grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/[0.03] text-slate-400 transition-all hover:-translate-y-0.5 hover:border-accent-400/50 hover:text-white"
          >
            <Icon className="h-[18px] w-[18px]" />
          </a>
        </li>
      ))}
    </ul>
  );
}
