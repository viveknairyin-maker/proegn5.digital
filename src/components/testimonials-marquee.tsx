import { Container } from "@/components/container";

const testimonials = [
  {
    quote:
      "They understood my idea clearly and delivered faster than expected. Super smooth process for a non-technical founder.",
    name: "Aarav",
    meta: "Startup founder",
  },
  {
    quote:
      "Clean design, fast iterations, and clear updates. The site looks premium and converts better now.",
    name: "Meera",
    meta: "Business owner",
  },
  {
    quote:
      "The prototype-first approach reduced risk for us. After seeing it, approving the full build was easy.",
    name: "Karthik",
    meta: "Early-stage founder",
  },
  {
    quote:
      "Great communication and quick delivery. Everything from design to deployment was handled end-to-end.",
    name: "Sara",
    meta: "Creator",
  },
  {
    quote:
      "Professional execution at a startup-friendly budget. Exactly what we needed to launch.",
    name: "Rohan",
    meta: "Indie maker",
  },
];

function Card({
  quote,
  name,
  meta,
}: {
  quote: string;
  name: string;
  meta: string;
}) {
  return (
    <div className="w-[320px] shrink-0 rounded-3xl border border-[var(--border)] bg-white/70 p-5 backdrop-blur sm:w-[360px]">
      <div className="text-sm leading-6 text-[var(--foreground)]">{quote}</div>
      <div className="mt-4 flex items-center justify-between gap-4">
        <div className="text-sm font-semibold tracking-tight">{name}</div>
        <div className="text-xs font-semibold text-[var(--muted)]">{meta}</div>
      </div>
    </div>
  );
}

export function TestimonialsMarquee() {
  const items = [...testimonials, ...testimonials];

  return (
    <section className="mt-20">
      <Container>
        <div className="flex items-end justify-between gap-6">
          <div className="space-y-2">
            <div className="text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">
              Feedback
            </div>
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Loved by founders who value speed and clarity.
            </h2>
          </div>
          <div className="hidden rounded-full border border-[var(--border)] bg-white/60 px-4 py-2 text-xs font-semibold text-[var(--muted)] md:inline-flex">
            Swipe / hover to pause
          </div>
        </div>

        <div className="relative mt-8 overflow-hidden rounded-3xl border border-[var(--border)] bg-white/40 backdrop-blur">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-[linear-gradient(to_right,rgba(255,255,255,1),rgba(255,255,255,0))]" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-[linear-gradient(to_left,rgba(255,255,255,1),rgba(255,255,255,0))]" />

          <div className="group">
            <div className="marquee flex w-[200%] gap-4 p-5 group-hover:[animation-play-state:paused]">
              {items.map((t, i) => (
                <Card key={`${t.name}-${i}`} {...t} />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

