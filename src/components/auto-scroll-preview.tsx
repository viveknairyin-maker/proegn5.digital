"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  src: string;
  alt: string;
  aspectClassName: string;
};

export function AutoScrollPreview({ src, alt, aspectClassName }: Props) {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    const node = rootRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry) return;
        setRunning(entry.isIntersecting && entry.intersectionRatio >= 0.2);
      },
      { threshold: [0, 0.2, 0.6, 1] },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={rootRef}
      className={[
        "relative mb-5 w-full overflow-hidden rounded-2xl border border-[var(--border)] bg-[#0b0f19]",
        aspectClassName,
      ].join(" ")}
      aria-label={alt}
      role="img"
      style={{
        backgroundImage: `url(${src})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "50% 0%",
      }}
      data-auto-scroll={running ? "on" : "off"}
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(11,15,25,0.0),rgba(11,15,25,0.22)_50%,rgba(11,15,25,0.35))]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-10 bg-[linear-gradient(to_bottom,rgba(11,15,25,0.55),transparent)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-[linear-gradient(to_top,rgba(11,15,25,0.55),transparent)]" />
    </div>
  );
}

