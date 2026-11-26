"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2, Mail, Send, type LucideIcon } from "lucide-react";
import { socials } from "@/data/portfolio";
import Section from "./ui/Section";
import Reveal from "./ui/Reveal";
import { GithubIcon, LinkedinIcon } from "./ui/BrandIcons";

type IconLike = LucideIcon | typeof GithubIcon;

const channels: { label: string; value: string; href: string; Icon: IconLike }[] = [
  { label: "Email", value: socials.email, href: `mailto:${socials.email}`, Icon: Mail },
  {
    label: "LinkedIn",
    value: socials.linkedin.replace(/^https?:\/\/(www\.)?/, ""),
    href: socials.linkedin,
    Icon: LinkedinIcon,
  },
  {
    label: "GitHub",
    value: socials.github.replace(/^https?:\/\/(www\.)?/, ""),
    href: socials.github,
    Icon: GithubIcon,
  },
];

type Errors = Partial<Record<"name" | "email" | "message", string>>;

/**
 * The form opens the visitor's email app with the message pre-filled, so it
 * works with no backend. To receive messages directly instead, point it at a
 * service such as Formspree or a Next.js API route (see README).
 */
export default function Contact() {
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const subject = String(data.get("subject") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    const next: Errors = {};
    if (!name) next.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = "Please enter a valid email.";
    if (message.length < 10) next.message = "Message should be at least 10 characters.";
    setErrors(next);
    if (Object.keys(next).length) return;

    const body = `${message}\n\n— ${name} (${email})`;
    window.location.href = `mailto:${socials.email}?subject=${encodeURIComponent(
      subject || `Portfolio enquiry from ${name}`,
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
    e.currentTarget.reset();
  };

  const field =
    "focus-ring w-full rounded-xl border border-white/10 bg-ink-950/60 px-4 py-3 text-sm text-white placeholder:text-slate-600 transition-colors hover:border-white/20 focus:border-accent-400/60";

  return (
    <Section
      id="contact"
      eyebrow="./contact.sh"
      title="Let's work together"
      description="Have a role, project or question in mind? I'd be glad to hear from you."
    >
      <div className="grid gap-6 lg:grid-cols-[1fr_1.4fr]">
        <Reveal className="space-y-4">
          {channels.map(({ label, value, href, Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("mailto:") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="card focus-ring group flex items-center gap-4 p-5 transition-colors hover:border-accent-400/30"
            >
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-navy-500/30 to-accent-500/30 text-accent-300 ring-1 ring-white/10 transition-transform group-hover:scale-110">
                <Icon className="h-5 w-5" aria-hidden />
              </span>
              <span className="min-w-0">
                <span className="block text-sm text-slate-500">{label}</span>
                <span className="block truncate font-medium text-slate-100">{value}</span>
              </span>
            </a>
          ))}
        </Reveal>

        <Reveal delay={0.1}>
          <form onSubmit={onSubmit} noValidate className="card space-y-5 p-6 sm:p-8" aria-label="Contact form">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm text-slate-300">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  autoComplete="name"
                  placeholder="Your name"
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? "name-error" : undefined}
                  className={field}
                />
                {errors.name && (
                  <p id="name-error" className="mt-1.5 text-xs text-rose-400">
                    {errors.name}
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block text-sm text-slate-300">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="you@company.com"
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "email-error" : undefined}
                  className={field}
                />
                {errors.email && (
                  <p id="email-error" className="mt-1.5 text-xs text-rose-400">
                    {errors.email}
                  </p>
                )}
              </div>
            </div>
            <div>
              <label htmlFor="subject" className="mb-2 block text-sm text-slate-300">
                Subject <span className="text-slate-600">(optional)</span>
              </label>
              <input id="subject" name="subject" placeholder="What's this about?" className={field} />
            </div>
            <div>
              <label htmlFor="message" className="mb-2 block text-sm text-slate-300">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Tell me a bit about it…"
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? "message-error" : undefined}
                className={`${field} resize-y`}
              />
              {errors.message && (
                <p id="message-error" className="mt-1.5 text-xs text-rose-400">
                  {errors.message}
                </p>
              )}
            </div>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <button type="submit" className="btn-primary">
                <Send className="h-4 w-4" aria-hidden /> Send message
              </button>
              <p role="status" className="text-sm text-emerald-400">
                {sent && (
                  <span className="inline-flex items-center gap-1.5">
                    <CheckCircle2 className="h-4 w-4" aria-hidden /> Opening your email app…
                  </span>
                )}
              </p>
            </div>
          </form>
        </Reveal>
      </div>
    </Section>
  );
}
