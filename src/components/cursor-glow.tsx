"use client";

import { useEffect, useRef } from "react";

export function CursorGlow() {
  const raf = useRef<number | null>(null);
  const latest = useRef<{ x: number; y: number } | null>(null);
  const enabled = useRef(false);

  useEffect(() => {
    const canUseFinePointer = window.matchMedia("(pointer: fine)").matches;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    enabled.current = canUseFinePointer && !prefersReducedMotion;
    if (!enabled.current) {
      return;
    }

    function onMove(e: MouseEvent) {
      latest.current = { x: e.clientX, y: e.clientY };
      if (raf.current) return;
      raf.current = window.requestAnimationFrame(() => {
        raf.current = null;
        const v = latest.current;
        if (!v) return;
        document.documentElement.style.setProperty("--mx", `${v.x}px`);
        document.documentElement.style.setProperty("--my", `${v.y}px`);
      });
    }

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      if (raf.current) window.cancelAnimationFrame(raf.current);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div className="absolute inset-0 grain opacity-60" />
      <div
        className="absolute inset-0"
        style={{
          background:
          "radial-gradient(650px circle at var(--mx, 50%) var(--my, 30%), rgba(30, 99, 255, 0.16), transparent 55%)",
        }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.88),rgba(255,255,255,1))]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(74,163,255,0.12),transparent_55%)]" />
    </div>
  );
}

