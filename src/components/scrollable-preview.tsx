"use client";

type Props = {
  src: string;
  alt: string;
  aspectClassName: string;
};

export function ScrollablePreview({ src, alt, aspectClassName }: Props) {
  return (
    <div
      className={[
        "relative mb-5 w-full overflow-y-auto overflow-x-hidden rounded-2xl border border-[var(--border)] bg-[#0b0f19] focus-within:ring-2 focus-within:ring-[var(--blue)]/40",
        aspectClassName,
      ].join(" ")}
      tabIndex={0}
      aria-label={`${alt}. Scroll to preview more.`}
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="block h-auto w-full select-none"
        draggable={false}
      />
      <div className="pointer-events-none sticky bottom-0 left-0 right-0 h-10 bg-[linear-gradient(to_top,rgba(11,15,25,0.75),transparent)]" />
      <div className="pointer-events-none sticky top-0 left-0 right-0 h-10 bg-[linear-gradient(to_bottom,rgba(11,15,25,0.75),transparent)]" />
    </div>
  );
}

