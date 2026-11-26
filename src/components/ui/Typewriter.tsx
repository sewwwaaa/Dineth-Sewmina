"use client";

import { useEffect, useState } from "react";

/** Types and deletes each phrase in turn, terminal style. */
export default function Typewriter({ phrases, className = "" }: { phrases: string[]; className?: string }) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState(phrases[0] ?? "");
  const [deleting, setDeleting] = useState(false);
  const [reduce, setReduce] = useState(false);

  useEffect(() => {
    setReduce(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  useEffect(() => {
    if (reduce || phrases.length === 0) return;
    const full = phrases[index % phrases.length];
    let delay = deleting ? 35 : 75;
    if (!deleting && text === full) delay = 1800;
    if (deleting && text === "") delay = 300;

    const id = setTimeout(() => {
      if (!deleting && text === full) setDeleting(true);
      else if (deleting && text === "") {
        setDeleting(false);
        setIndex((i) => (i + 1) % phrases.length);
      } else {
        setText(deleting ? full.slice(0, text.length - 1) : full.slice(0, text.length + 1));
      }
    }, delay);
    return () => clearTimeout(id);
  }, [text, deleting, index, phrases, reduce]);

  return (
    <span className={className} aria-hidden>
      {text}
      <span className="ml-0.5 inline-block h-[1em] w-[0.55em] translate-y-[0.15em] bg-accent-400 motion-safe:animate-[blink_1s_steps(1)_infinite]" />
    </span>
  );
}
