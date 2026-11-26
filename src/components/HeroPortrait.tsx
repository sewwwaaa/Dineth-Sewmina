"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Lock, ShieldCheck, User } from "lucide-react";
import { site } from "@/data/portfolio";

const ease = [0.22, 1, 0.36, 1] as const;

/** HUD-style corner bracket. */
function Corner({ className }: { className: string }) {
  return <span aria-hidden className={`absolute h-6 w-6 border-accent-400/80 ${className}`} />;
}

/**
 * Cybersecurity-themed portrait: transparent cut-out photo on a dark navy
 * backdrop with radar rings, a scan line, HUD corners and floating status cards.
 * Works best with a transparent PNG (see site.profileImage).
 */
export default function HeroPortrait() {
  const reduce = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.94 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={reduce ? { duration: 0 } : { duration: 0.9, delay: 0.2, ease }}
      className="relative mx-auto w-full max-w-[19rem] sm:max-w-sm"
    >
      {/* outer glow */}
      <div
        aria-hidden
        className="absolute -inset-8 rounded-[3rem] bg-[radial-gradient(circle_at_50%_40%,rgba(0,224,122,0.35),rgba(14,165,196,0.25)_45%,transparent_70%)] blur-2xl"
      />

      {/* frame with rotating light border */}
      <div className="relative overflow-hidden rounded-[2rem] bg-white/10 p-[1.5px] shadow-2xl shadow-black/60">
        <div
          aria-hidden
          className="absolute left-1/2 top-1/2 aspect-square w-[200%] -translate-x-1/2 -translate-y-1/2 bg-[conic-gradient(from_0deg,transparent_0deg,rgba(57,255,159,0.9)_60deg,transparent_120deg,transparent_180deg,rgba(34,211,238,0.9)_240deg,transparent_300deg)] motion-safe:animate-[spin_8s_linear_infinite]"
        />
        <div className="relative aspect-[4/5] overflow-hidden rounded-[calc(2rem-1.5px)] bg-[radial-gradient(circle_at_50%_32%,#0b3d2b_0%,#061a10_38%,#020604_80%)]">
          {/* grid */}
          <div
            aria-hidden
            className="absolute inset-0 bg-[linear-gradient(rgba(57,255,159,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(57,255,159,0.08)_1px,transparent_1px)] bg-[size:28px_28px] [mask-image:radial-gradient(circle_at_50%_35%,black_30%,transparent_75%)]"
          />

          {/* radar rings behind the head */}
          <div aria-hidden className="absolute left-1/2 top-[34%] -translate-x-1/2 -translate-y-1/2">
            <div className="relative grid h-[22rem] w-[22rem] place-items-center">
              <span className="absolute inset-0 rounded-full border border-accent-400/10" />
              <span className="absolute inset-[3.5rem] rounded-full border border-accent-400/15" />
              <span className="absolute inset-[7rem] rounded-full border border-dashed border-navy-400/30" />
              <span className="absolute inset-0 rounded-full bg-[conic-gradient(from_0deg,rgba(0,224,122,0.22),transparent_60deg)] [mask-image:radial-gradient(circle,black_25%,transparent_70%)] motion-safe:animate-[spin_6s_linear_infinite] motion-reduce:hidden" />
            </div>
          </div>

          {/* portrait */}
          {site.profileImage ? (
            <Image
              src={site.profileImage}
              alt={`Portrait of ${site.name}`}
              fill
              priority
              sizes="(max-width: 640px) 304px, 384px"
              className="object-contain object-bottom [filter:drop-shadow(0_0_18px_rgba(0,224,122,0.45))_drop-shadow(0_0_2px_rgba(157,255,207,0.5))]"
            />
          ) : (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-slate-500">
              <div className="grid h-24 w-24 place-items-center rounded-full border border-white/10 bg-white/[0.03]">
                <User className="h-10 w-10" aria-hidden />
              </div>
              <span className="font-mono text-xs">profile image placeholder</span>
            </div>
          )}

          {/* bottom fade + subtle purple tint at floor */}
          <div aria-hidden className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-ink-950/90 via-ink-950/30 to-transparent" />

          {/* scan line */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-0 h-20 motion-safe:animate-[scan_4.5s_ease-in-out_infinite] motion-reduce:hidden"
          >
            <div className="h-full bg-gradient-to-b from-transparent to-accent-400/15" />
            <div className="h-px bg-accent-300/80 shadow-[0_0_12px_2px_rgba(57,255,159,0.7)]" />
          </div>

          {/* HUD */}
          <Corner className="left-4 top-4 rounded-tl-lg border-l-2 border-t-2" />
          <Corner className="right-4 top-4 rounded-tr-lg border-r-2 border-t-2" />
          <Corner className="bottom-4 left-4 rounded-bl-lg border-b-2 border-l-2" />
          <Corner className="bottom-4 right-4 rounded-br-lg border-b-2 border-r-2" />

          <div aria-hidden className="absolute inset-x-12 top-5 flex items-center justify-between font-mono text-[10px] tracking-widest">
            <span className="flex items-center gap-1.5 text-emerald-300">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 motion-safe:animate-pulse" />
              SECURE
            </span>
            <span className="text-slate-400">ID · DS-01</span>
          </div>
        </div>
      </div>

      {/* floating: terminal */}
      <motion.div
        aria-hidden
        animate={reduce ? undefined : { y: [0, -8, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-10 -left-4 w-[15.5rem] rounded-2xl border border-white/10 bg-ink-900/85 p-4 shadow-2xl shadow-black/60 backdrop-blur-xl sm:-left-14"
      >
        <div className="mb-3 flex items-center justify-between">
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
          </div>
          <span className="font-mono text-[10px] text-slate-500">~/secure-shell</span>
        </div>
        <div className="space-y-1 font-mono text-[11px] leading-relaxed">
          <p>
            <span className="text-accent-400">$</span> <span className="text-slate-400">whoami</span>
          </p>
          <p className="text-slate-100">dineth_sewmina</p>
          <p>
            <span className="text-accent-400">$</span> <span className="text-slate-400">cat role.txt</span>
          </p>
          <p className="text-navy-400">cybersec undergrad @ sliit</p>
          <p className="flex items-center text-emerald-300">
            ✔ access granted
            <span className="ml-1 inline-block h-3 w-1.5 bg-emerald-300 motion-safe:animate-[blink_1s_steps(1)_infinite]" />
          </p>
        </div>
      </motion.div>

      {/* floating: security badge */}
      <motion.div
        aria-hidden
        animate={reduce ? undefined : { y: [0, 8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute -right-3 top-12 flex items-center gap-3 rounded-2xl border border-white/10 bg-ink-900/85 py-2.5 pl-2.5 pr-4 shadow-xl shadow-black/50 backdrop-blur-xl sm:-right-10"
      >
        <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-navy-500/40 to-accent-500/40 text-accent-300 ring-1 ring-accent-400/30">
          <ShieldCheck className="h-5 w-5" />
        </span>
        <span className="leading-tight">
          <span className="block text-xs font-semibold text-white">Security First</span>
          <span className="block font-mono text-[10px] text-slate-400">Kali · Wireshark</span>
        </span>
      </motion.div>

      {/* floating: lock orb */}
      <motion.div
        aria-hidden
        animate={reduce ? undefined : { y: [0, -6, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute -left-6 top-1/3 hidden h-12 w-12 place-items-center rounded-full border border-accent-400/30 bg-ink-900/80 text-accent-300 shadow-[0_0_30px_rgba(0,224,122,0.35)] backdrop-blur-xl sm:grid"
      >
        <Lock className="h-5 w-5" />
      </motion.div>
    </motion.div>
  );
}
