"use client";

import Link from "next/link";
import { type CSSProperties, useMemo, useRef, useState } from "react";

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "ghost";
  className?: string;
};

export function MagneticButton({
  href,
  children,
  variant = "primary",
  className = "",
}: Props) {
  const ref = useRef<HTMLAnchorElement | null>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const style = useMemo<CSSProperties>(
    () => ({
      transform: `translate3d(${pos.x}px, ${pos.y}px, 0)`,
      transition: "transform 140ms ease",
      willChange: "transform",
    }),
    [pos.x, pos.y],
  );

  const base =
    "group inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold tracking-tight";
  const primary =
    "bg-[var(--foreground)] text-white shadow-[0_10px_30px_rgba(11,15,25,0.16)] hover:shadow-[0_14px_44px_rgba(11,15,25,0.22)]";
  const ghost =
    "border border-[var(--border)] bg-white/60 text-[var(--foreground)] backdrop-blur hover:bg-white";

  return (
    <Link
      ref={ref}
      href={href}
      className={`${base} ${variant === "primary" ? primary : ghost} ${className}`}
      style={style}
      onMouseMove={(e) => {
        const el = ref.current;
        if (!el) return;
        const r = el.getBoundingClientRect();
        const dx = e.clientX - (r.left + r.width / 2);
        const dy = e.clientY - (r.top + r.height / 2);
        setPos({ x: dx * 0.12, y: dy * 0.12 });
      }}
      onMouseLeave={() => setPos({ x: 0, y: 0 })}
    >
      <span className="relative">
        {children}
        <span className="pointer-events-none absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-white/70 transition-transform duration-300 group-hover:scale-x-100" />
      </span>
    </Link>
  );
}

