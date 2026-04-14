import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/container";
import { TeamCarousel } from "@/components/team-carousel";

export const metadata: Metadata = {
  title: "About",
  description:
    "Progen5 is a startup execution agency in India helping non-technical founders design, build, and launch digital products.",
};

export default function AboutPage() {
  return (
    <div className="pb-16 pt-14 sm:pt-16">
      <Container>
        <TeamCarousel />

        <div className="grid gap-10 xl:grid-cols-[1.2fr_1fr] xl:items-start">
          <div className="space-y-6">
            <div className="text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">
              About Progen5
            </div>
            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Execution that feels simple for non-technical founders.
            </h1>
            <p className="max-w-xl text-sm leading-6 text-[var(--muted)] sm:text-base">
              Most founders don’t fail because the idea is bad—they fail because
              execution is slow, expensive, or fragmented. Progen5 exists to fix
              that: one team, one flow, from concept to launch.
            </p>
            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-[var(--blue)] px-5 py-3 text-sm font-semibold text-white shadow-[0_10px_24px_rgba(30,99,255,0.18)] transition-transform hover:-translate-y-0.5"
              >
                Talk to us
              </Link>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {[
                {
                  t: "Who we serve",
                  d: "Non-technical founders, startup teams, business owners, creators, and indie makers.",
                },
                {
                  t: "What we execute",
                  d: "Websites, landing pages, UX/UI design, MVP builds, AI chatbots, and launch support.",
                },
                {
                  t: "How we de-risk",
                  d: "Free discovery call and free prototype before payment, so you validate direction early.",
                },
                {
                  t: "How we communicate",
                  d: "Simple updates, clear timelines, and founder-friendly language without technical overload.",
                },
              ].map((item) => (
                <div
                  key={item.t}
                  className="rounded-2xl border border-[var(--border)] bg-white/70 px-5 py-4 backdrop-blur"
                >
                  <div className="text-sm font-semibold tracking-tight">{item.t}</div>
                  <div className="mt-1 text-sm leading-6 text-[var(--muted)]">{item.d}</div>
                </div>
              ))}
            </div>

            <div className="rounded-3xl border border-[var(--border)] bg-white/70 p-6 backdrop-blur">
              <div className="text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">
                Our execution flow
              </div>
              <div className="mt-4 grid gap-3 md:grid-cols-5">
                {[
                  "Discovery",
                  "Prototype",
                  "Design",
                  "Build",
                  "Launch",
                ].map((step, i) => (
                  <div
                    key={step}
                    className="rounded-2xl border border-[var(--border)] bg-white/60 px-4 py-3 text-center"
                  >
                    <div className="text-xs font-semibold text-[var(--muted)]">Step {i + 1}</div>
                    <div className="mt-1 text-sm font-semibold tracking-tight">{step}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="rounded-3xl border border-[var(--border)] bg-white/70 p-6 backdrop-blur">
              <div className="text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">
                What we believe
              </div>
              <div className="mt-4 grid gap-3">
                {[
                  {
                    t: "Clarity beats complexity",
                    d: "We keep the plan simple so decisions are easy.",
                  },
                  {
                    t: "Speed with quality",
                    d: "Fast doesn’t mean rushed—clean, scalable foundations.",
                  },
                  {
                    t: "Reduce risk early",
                    d: "Prototype before payment to validate direction.",
                  },
                  {
                    t: "One team, one outcome",
                    d: "Design + build + launch aligned from day one.",
                  },
                ].map((x) => (
                  <div
                    key={x.t}
                    className="rounded-2xl border border-[var(--border)] bg-white/60 px-5 py-4"
                  >
                    <div className="text-sm font-semibold tracking-tight">
                      {x.t}
                    </div>
                    <div className="mt-1 text-sm leading-6 text-[var(--muted)]">
                      {x.d}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-[var(--border)] bg-white/70 p-6 backdrop-blur">
              <div className="text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">
                Numbers (so far)
              </div>
              <div className="mt-4 grid grid-cols-2 gap-3">
                {[
                  { t: "15+ projects", d: "Delivered end-to-end" },
                  { t: "100% satisfaction", d: "Client-first delivery" },
                  { t: "4–6 weeks", d: "Average MVP timeline" },
                  { t: "7+ industries", d: "Across India, UAE, USA" },
                ].map((s) => (
                  <div
                    key={s.t}
                    className="rounded-2xl border border-[var(--border)] bg-white/60 px-5 py-4"
                  >
                    <div className="text-sm font-semibold tracking-tight">
                      {s.t}
                    </div>
                    <div className="mt-1 text-xs font-semibold text-[var(--muted)]">
                      {s.d}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-[var(--border)] bg-[var(--foreground)] p-6 text-white">
              <div className="text-xs font-semibold uppercase tracking-wider text-white/70">
                Why founders choose us
              </div>
              <div className="mt-3 space-y-2 text-sm leading-6 text-white/90">
                <p>• One team for design, development, branding, and launch.</p>
                <p>• Faster delivery compared to traditional agency pipelines.</p>
                <p>• Affordable startup-first execution model.</p>
                <p>• Ongoing support through and after launch.</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

