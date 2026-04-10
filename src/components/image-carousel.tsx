"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";

type Props = {
  images: { src: string; alt: string }[];
  aspectClassName: string;
  sizes: string;
  priority?: boolean;
};

export function ImageCarousel({
  images,
  aspectClassName,
  sizes,
  priority,
}: Props) {
  const safeImages = images.length ? images : [];
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const timer = useRef<number | null>(null);

  const max = safeImages.length;
  const canNavigate = max > 1;

  const go = useMemo(() => {
    function clamp(next: number) {
      if (max === 0) return 0;
      return (next + max) % max;
    }
    return {
      next: () => setIndex((i) => clamp(i + 1)),
      prev: () => setIndex((i) => clamp(i - 1)),
      to: (i: number) => setIndex(clamp(i)),
    };
  }, [max]);

  useEffect(() => {
    if (!canNavigate) return;
    if (paused) return;

    timer.current = window.setInterval(() => {
      go.next();
    }, 3200);

    return () => {
      if (timer.current) window.clearInterval(timer.current);
      timer.current = null;
    };
  }, [canNavigate, go, paused]);

  if (max === 0) return null;

  return (
    <div
      className={[
        "relative mb-5 w-full overflow-hidden rounded-2xl border border-[var(--border)] bg-[#f8fbff]",
        aspectClassName,
      ].join(" ")}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        className="flex h-full w-full transition-transform duration-500 ease-out"
        style={{ transform: `translate3d(${-index * 100}%,0,0)` }}
      >
        {safeImages.map((img, i) => (
          <div key={`${img.src}-${i}`} className="relative h-full w-full shrink-0">
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover"
              sizes={sizes}
              priority={priority && i === 0}
            />
          </div>
        ))}
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgba(11,15,25,0.06))]" />

      {canNavigate ? (
        <>
          <button
            type="button"
            aria-label="Previous image"
            className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full border border-[var(--border)] bg-white/80 px-3 py-2 text-sm font-semibold text-[var(--foreground)] shadow-sm backdrop-blur transition-transform hover:-translate-y-1/2 hover:scale-[1.02]"
            onClick={(e) => {
              e.preventDefault();
              go.prev();
            }}
          >
            ←
          </button>
          <button
            type="button"
            aria-label="Next image"
            className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full border border-[var(--border)] bg-white/80 px-3 py-2 text-sm font-semibold text-[var(--foreground)] shadow-sm backdrop-blur transition-transform hover:-translate-y-1/2 hover:scale-[1.02]"
            onClick={(e) => {
              e.preventDefault();
              go.next();
            }}
          >
            →
          </button>

          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 rounded-full border border-[var(--border)] bg-white/75 px-3 py-2 backdrop-blur">
            <div className="flex items-center gap-2">
              {safeImages.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`Go to image ${i + 1}`}
                  className={[
                    "h-1.5 w-1.5 rounded-full transition-transform",
                    i === index ? "bg-[var(--blue)] scale-[1.35]" : "bg-black/20",
                  ].join(" ")}
                  onClick={(e) => {
                    e.preventDefault();
                    go.to(i);
                  }}
                />
              ))}
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
}

