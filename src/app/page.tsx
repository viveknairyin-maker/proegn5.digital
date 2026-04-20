import Link from "next/link";
import { Container } from "@/components/container";
import { HomeRefinementCarousel } from "@/components/home-refinement-carousel";
import { MagneticButton } from "@/components/magnetic-button";
import { TestimonialsMarquee } from "@/components/testimonials-marquee";
import { featuredHomeProjects } from "@/data/work-projects";

export default function Home() {
  return (
    <div className="pb-16">
      <section className="pt-16 sm:pt-20">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="space-y-7">
              <div className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-white/70 px-4 py-2 text-xs font-semibold tracking-tight text-[var(--muted)] backdrop-blur">
                <span className="h-2 w-2 rounded-full bg-[var(--blue)]" />
                Startup execution, end-to-end
              </div>
              <h1 className="text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl">
                Turn your Vision into Reality.
              </h1>
              <p className="max-w-xl text-base leading-7 text-[var(--muted)] sm:text-lg">
                Progen5 is a startup execution agency based in India. We help
                non-technical founders build and launch digital products—design,
                development, branding, and deployment—under one roof.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <MagneticButton href="/contact" variant="primary">
                  Book a free discovery call
                </MagneticButton>
                <MagneticButton href="/services" variant="ghost">
                  Explore our services
                </MagneticButton>
              </div>
              <ul className="flex flex-wrap gap-3 text-xs font-semibold text-[var(--muted)]">
                <li className="rounded-full border border-[var(--border)] bg-white/60 px-3 py-2">
                  Free prototype before you pay
                </li>
                <li className="rounded-full border border-[var(--border)] bg-white/60 px-3 py-2">
                  Non-tech friendly process
                </li>
                <li className="rounded-full border border-[var(--border)] bg-white/60 px-3 py-2">
                  Fast & clean delivery
                </li>
              </ul>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 -z-10 rounded-3xl bg-[radial-gradient(circle_at_top,rgba(30,99,255,0.18),transparent_60%)] blur-2xl" />
              <div className="rounded-3xl border border-[var(--border)] bg-white/70 p-6 backdrop-blur">
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">
                      What you get
                    </div>
                    <div className="mt-2 text-lg font-semibold tracking-tight">
                      Your complete technical team
                    </div>
                  </div>
                  <div className="rounded-full border border-[var(--border)] bg-white px-3 py-1 text-xs font-semibold text-[var(--muted)]">
                    Progen5
                  </div>
                </div>

                <ul className="mt-6 grid gap-3">
                  {[
                    "Design in Figma (wireframes → UI screens)",
                    "Landing page or full website",
                    "MVP development + deployment",
                    "Branding + launch support",
                    "Optional AI chatbot for lead capture",
                  ].map((t) => (
                    <li
                      key={t}
                      className="group flex items-center gap-3 rounded-2xl border border-[var(--border)] bg-white/60 px-4 py-3 transition-transform hover:-translate-y-0.5"
                    >
                      <span className="h-2 w-2 rounded-full bg-[var(--blue)] shadow-[0_0_0_5px_rgba(30,99,255,0.10)]" />
                      <span className="text-sm font-medium text-[var(--foreground)]">
                        {t}
                      </span>
                      <span className="ml-auto text-xs font-semibold text-[var(--muted)] opacity-0 transition-opacity group-hover:opacity-100">
                        Learn more →
                      </span>
                    </li>
                  ))}
                </ul>

                <ul className="mt-6 flex flex-wrap items-center gap-3">
                  <li className="rounded-2xl border border-[var(--border)] bg-white/60 px-4 py-3">
                    <div className="text-xl font-semibold tracking-tight">
                      15+
                    </div>
                    <div className="text-xs font-semibold text-[var(--muted)]">
                      Projects delivered
                    </div>
                  </li>
                  <li className="rounded-2xl border border-[var(--border)] bg-white/60 px-4 py-3">
                    <div className="text-xl font-semibold tracking-tight">
                      100%
                    </div>
                    <div className="text-xs font-semibold text-[var(--muted)]">
                      Client satisfaction
                    </div>
                  </li>
                  <li className="rounded-2xl border border-[var(--border)] bg-white/60 px-4 py-3">
                    <div className="text-xl font-semibold tracking-tight">
                      4–6 weeks
                    </div>
                    <div className="text-xs font-semibold text-[var(--muted)]">
                      Typical MVP timeline
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <Container>
        <HomeRefinementCarousel projects={featuredHomeProjects} />
      </Container>

      <section className="mt-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="space-y-3">
              <div className="text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">
                Who we help
              </div>
              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                Built for founders who want to move fast.
              </h2>
              <p className="max-w-xl text-sm leading-6 text-[var(--muted)] sm:text-base">
                You bring the idea. We handle the execution—clean design, solid
                engineering, and a launch-ready experience.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {[
                "People with startup ideas who can’t code",
                "Early-stage startup founders",
                "Business owners going digital",
                "Coaches & creators launching platforms",
                "Indie hackers building side projects",
                "Anyone who needs a website or app fast",
              ].map((t) => (
                <div
                  key={t}
                  className="rounded-2xl border border-[var(--border)] bg-white/70 px-4 py-4 backdrop-blur transition-transform hover:-translate-y-0.5"
                >
                  <div className="text-sm font-semibold tracking-tight">
                    {t}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="mt-20">
        <Container>
          <div className="rounded-3xl border border-[var(--border)] bg-white/70 p-7 backdrop-blur sm:p-10">
            <div className="grid gap-10 lg:grid-cols-2">
              <div className="space-y-3">
                <div className="text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">
                  How we work
                </div>
                <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                  A process designed to reduce risk.
                </h2>
                <p className="max-w-xl text-sm leading-6 text-[var(--muted)] sm:text-base">
                  The goal is simple: help you see progress quickly, validate
                  faster, and launch with confidence.
                </p>
                <div className="pt-2">
                  <Link
                    href="/work"
                    className="text-sm font-semibold text-[var(--blue)] hover:underline"
                  >
                    See recent work →
                  </Link>
                </div>
              </div>

              <ol className="grid gap-3">
                {[
                  {
                    t: "Free discovery call",
                    d: "15 minutes to understand your idea and constraints.",
                  },
                  {
                    t: "Free prototype",
                    d: "We build a prototype before you pay—zero risk.",
                  },
                  {
                    t: "Design",
                    d: "Wireframes and polished Figma screens for approval.",
                  },
                  {
                    t: "Build",
                    d: "Clean, fast development with weekly progress.",
                  },
                  {
                    t: "Launch",
                    d: "Deployment + support through your launch window.",
                  },
                ].map((s, i) => (
                  <li
                    key={s.t}
                    className="group rounded-2xl border border-[var(--border)] bg-white/70 px-5 py-4 transition-transform hover:-translate-y-0.5"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[var(--foreground)] text-sm font-semibold text-white">
                        {i + 1}
                      </div>
                      <div>
                        <div className="text-sm font-semibold tracking-tight">
                          {s.t}
                        </div>
                        <div className="mt-1 text-sm leading-6 text-[var(--muted)]">
                          {s.d}
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </Container>
      </section>

      <section className="mt-20">
        <Container>
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div className="space-y-3">
              <div className="text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">
                Why Progen5
              </div>
              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                One team. Everything done.
              </h2>
              <p className="max-w-xl text-sm leading-6 text-[var(--muted)] sm:text-base">
                No juggling vendors. We handle design, development, branding,
                and launch—fast and affordably.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {[
                { t: "Fast delivery", d: "Websites in days. MVPs in weeks." },
                { t: "Affordable", d: "Execution without enterprise overhead." },
                { t: "Non-tech friendly", d: "Simple communication and clarity." },
                { t: "Satisfaction guaranteed", d: "Not happy? We fix it." },
              ].map((x) => (
                <div
                  key={x.t}
                  className="rounded-2xl border border-[var(--border)] bg-white/70 px-5 py-4 backdrop-blur transition-transform hover:-translate-y-0.5"
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
        </Container>
      </section>

      <TestimonialsMarquee />

      <section className="mt-20">
        <Container>
          <div className="overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--foreground)] px-7 py-10 text-white sm:px-10">
            <div className="absolute" aria-hidden="true" />
            <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
              <div className="space-y-3">
                <div className="text-xs font-semibold uppercase tracking-wider text-white/70">
                  Ready to start?
                </div>
                <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                  Get a free prototype for your idea.
                </h2>
                <p className="max-w-xl text-sm leading-6 text-white/70 sm:text-base">
                  Tell us what you’re building. We’ll respond quickly with next
                  steps and a clear plan.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-[var(--foreground)] transition-transform hover:-translate-y-0.5"
                >
                  Contact Progen5
                </Link>
                <Link
                  href="/work"
                  className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                >
                  View portfolio
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
