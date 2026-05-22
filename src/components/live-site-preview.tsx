"use client";

import { useEffect, useRef, useState } from "react";

const DESKTOP_WIDTH = 1280;
const DESKTOP_HEIGHT = 800;

type Props = {
  url: string;
  title: string;
};

export function LiveSitePreview({ url, title }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const updateScale = () => {
      const width = container.clientWidth;
      setScale(width > 0 ? width / DESKTOP_WIDTH : 1);
    };

    updateScale();
    const observer = new ResizeObserver(updateScale);
    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-[var(--border)] bg-[#0b0f19]"
    >
      <div
        className="pointer-events-none absolute left-0 top-0 origin-top-left"
        style={{
          width: DESKTOP_WIDTH,
          height: DESKTOP_HEIGHT,
          transform: `scale(${scale})`,
        }}
      >
        <iframe
          src={url}
          title={`${title} live preview`}
          loading="lazy"
          width={DESKTOP_WIDTH}
          height={DESKTOP_HEIGHT}
          className="block border-0"
        />
      </div>
      <div className="absolute inset-0" aria-hidden="true" />
    </div>
  );
}
