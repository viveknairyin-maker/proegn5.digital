import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/container";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Websites, landing pages, UI/UX design, MVP builds, branding, deployment, and AI chatbots—end-to-end startup execution by Progen5.",
};

const packages = [
  {
    title: "Basic Website",
    desc: "A clean professional website for your business. Up to 5 pages, mobile-friendly, contact form, and basic SEO—delivered fast.",
    includes: ["Up to 5 pages", "Mobile responsive", "Contact form", "Basic SEO"],
  },
  {
    title: "Landing Page",
    desc: "A single high-converting page designed to turn visitors into leads or customers. Includes lead capture and mobile-first design.",
    includes: ["High-conversion layout", "Lead capture form", "Fast load", "Mobile-first"],
  },
  {
    title: "Design Package",
    desc: "Full UI/UX design in Figma. Wireframes, user flows, and 5–10 high-quality screens that show exactly how your product will look.",
    includes: ["Wireframes", "User flows", "5–10 UI screens", "Design handoff"],
  },
  {
    title: "MVP Build",
    desc: "A working product you can launch. Functional web app with basic UI, landing page, and deployment—built clean and fast.",
    includes: ["Working web app", "Basic UI", "Landing page", "Deployment"],
  },
  {
    title: "MVP + Design",
    desc: "Our most popular. Full Figma design plus complete MVP development plus landing page, basic branding, and deployment.",
    badge: "Most Popular",
    includes: ["Figma design", "MVP development", "Landing page", "Brand basics", "Deployment"],
  },
  {
    title: "Ultra Premium",
    desc: "Complete startup execution from scratch—idea validation, full design & development, branding and identity, pitch deck, and launch support.",
    includes: ["Validation", "Design + build", "Brand identity", "Pitch deck", "Launch support"],
  },
  {
    title: "AI Chatbot",
    desc: "A custom AI chatbot for your website (Google Gemini). Trained on your business, answers questions 24/7, and captures leads.",
    includes: ["Custom training", "Lead capture", "Website integration", "Ongoing support options"],
  },
];

export default function ServicesPage() {
  return (
    <div className="pb-16 pt-14 sm:pt-16">
      <Container>
        {/* HERO */}
        <section className="grid gap-6 xl:grid-cols-[1.2fr]">
          <div className="flex flex-col gap-4">
            <div className="text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">
              Services
            </div>
            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Clean execution, end-to-end.
            </h1>
            <p className="max-w-2xl text-sm leading-6 text-[var(--muted)] sm:text-base">
              Choose what you need. We start with a free discovery call and a
              free prototype—then share a clear scope and quote.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-[var(--blue)] px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_24px_rgba(30,99,255,0.18)] transition-transform hover:-translate-y-0.5"
              >
                Get a free prototype
              </Link>
            </div>
          </div>
        </section>

        {/* PACKAGES */}
        <section className="mt-12 space-y-6">
          {/* Featured */}
          {packages
            .filter((p) => "badge" in p && p.badge)
            .map((p) => (
              <div
                key={p.title}
                className="relative overflow-hidden rounded-[28px] border border-[var(--border)] bg-white/75 p-6 backdrop-blur transition-[transform,box-shadow] hover:-translate-y-1 hover:shadow-[0_18px_60px_rgba(11,15,25,0.10)]"
              >
                <div className="pointer-events-none absolute -right-40 -top-44 h-72 w-72 rounded-full bg-[radial-gradient(circle_at_center,rgba(30,99,255,0.20),transparent_60%)] blur-2xl" />
                <div className="relative grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
                  <div className="space-y-3">
                    <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(30,99,255,0.25)] bg-[rgba(30,99,255,0.08)] px-3 py-1.5 text-xs font-semibold text-[var(--blue)]">
                      {p.badge}
                    </div>
                    <div className="text-2xl font-semibold tracking-tight">
                      {p.title}
                    </div>
                    <div className="text-sm leading-6 text-[var(--muted)]">
                      {p.desc}
                    </div>
                    <div className="pt-2">
                      <Link
                        href="/contact"
                        className="inline-flex items-center justify-center rounded-full bg-[var(--foreground)] px-5 py-3 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(11,15,25,0.18)] transition-transform hover:-translate-y-0.5"
                      >
                        Enquire
                      </Link>
                    </div>
                  </div>

                  <div className="rounded-3xl border border-[var(--border)] bg-white/70 p-5">
                    <div className="text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">
                      Includes
                    </div>
                    <ul className="mt-3 space-y-2">
                      {p.includes.map((x) => (
                        <li
                          key={x}
                          className="flex items-center gap-3 text-sm font-medium"
                        >
                          <span className="h-2 w-2 rounded-full bg-[var(--blue)]" />
                          <span>{x}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}

          {/* Minimal grid */}
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {packages
              .filter((p) => !("badge" in p && p.badge))
              .map((p) => (
                <article
                  key={p.title}
                  className="group rounded-3xl border border-[var(--border)] bg-white/70 p-6 backdrop-blur transition-[transform,box-shadow] hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(11,15,25,0.08)]"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="text-lg font-semibold tracking-tight">
                      {p.title}
                    </div>
                    <div className="h-9 w-9 rounded-2xl border border-[var(--border)] bg-white/70" />
                  </div>
                  <div className="mt-2 text-sm leading-6 text-[var(--muted)]">
                    {p.desc}
                  </div>
                  <ul className="mt-4 space-y-2">
                    {p.includes.slice(0, 4).map((x) => (
                      <li
                        key={x}
                        className="flex items-center gap-3 text-xs font-semibold text-[var(--muted)]"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-[var(--blue)]" />
                        {x}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-5">
                    <Link
                      href="/contact"
                      className="text-sm font-semibold text-[var(--blue)] hover:underline"
                    >
                      Enquire →
                    </Link>
                  </div>
                </article>
              ))}
          </div>
        </section>

        {/* HOW IT WORKS (BOTTOM) */}
        <section className="mt-12">
          <div className="rounded-3xl border border-[var(--border)] bg-white/70 p-6 backdrop-blur">
            <div className="text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">
              How it works
            </div>
            <div className="mt-4 grid gap-2 md:grid-cols-4">
              {[
                { t: "Discovery call", d: "15 minutes to understand your idea." },
                { t: "Free prototype", d: "You see the direction before paying." },
                { t: "Design + Build", d: "We execute fast and clean." },
                { t: "Launch", d: "Deployment and launch support." },
              ].map((x) => (
                <div
                  key={x.t}
                  className="rounded-2xl border border-[var(--border)] bg-white/60 px-4 py-3"
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
        </section>
      </Container>
    </div>
  );
}

