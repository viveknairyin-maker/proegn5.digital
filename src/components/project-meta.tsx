type Props = {
  duration: string;
  liveUrl: string;
  testimonial?: {
    quote: string;
    clientName: string;
    roleCompany: string;
  };
};

export function ProjectMeta({ duration, liveUrl, testimonial }: Props) {
  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center gap-3">
        <div className="rounded-full border border-[var(--border)] bg-white/75 px-3 py-2 text-xs font-semibold text-[var(--muted)]">
          Completed in {duration}
        </div>
        <a
          href={liveUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center rounded-full border border-[var(--border)] bg-white/75 px-4 py-2 text-xs font-semibold text-[var(--foreground)] transition-colors hover:bg-white"
        >
          Visit live website
        </a>
      </div>

      {testimonial ? (
        <blockquote className="rounded-2xl border border-[var(--border)] bg-white/60 px-4 py-4">
          <p className="text-sm leading-6 text-[var(--foreground)]">
            &ldquo;{testimonial.quote}&rdquo;
          </p>
          <footer className="mt-2 text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">
            {testimonial.clientName} - {testimonial.roleCompany}
          </footer>
        </blockquote>
      ) : null}
    </div>
  );
}
