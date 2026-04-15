import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/container";
import { ImageCarousel } from "@/components/image-carousel";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected work by Progen5—websites, landing pages, MVPs, and product design for founders and businesses.",
};

type Project = {
  title: string;
  desc: string;
  tags: string[];
  outcome: string;
  images: string[];
  orientation: "portrait" | "landscape";
  deliveryDays: number;
  websiteUrl: string;
  featured?: boolean;
};

const projects: Project[] = [
  {
    title: "LettrBlack Edtech Website",
    desc: "From idea to a usable MVP with onboarding + core flows + deployment.",
    tags: ["MVP", "Web App", "Deployment"],
    outcome: "Launch-ready product in weeks, not months.",
    images: ["/work/lettrblack-1.png", "/work/lettrblack-2.png", "/work/lettrblack-3.png"],
    orientation: "landscape",
    deliveryDays: 7,
    websiteUrl: "https://lettrblack.in",
    featured: true,
  },
  {
    title: "RNYB NGO",
    desc: "Modern, minimal website redesign with SEO-friendly structure.",
    tags: ["Website", "SEO", "Branding"],
    outcome: "Premium look + faster load + better clarity.",
    images: ["/work/rnyb-1.png", "/work/rnyb-2.png", "/work/rnyb-3.png"],
    orientation: "landscape",
    deliveryDays: 3,
    websiteUrl: "https://rnyb.in",
    featured: true,
  },
];

function ProjectCard({
  p,
  size = "normal",
}: {
  p: Project;
  size?: "featured" | "normal";
}) {
  const imgAspect =
    p.orientation === "portrait"
      ? size === "featured"
        ? "aspect-[4/5]"
        : "aspect-[3/4]"
      : size === "featured"
        ? "aspect-[21/10]"
        : "aspect-[16/10]";

  return (
    <article
      className={[
        "group relative overflow-hidden rounded-[28px] border border-[var(--border)] bg-white/70 backdrop-blur",
        "transition-[transform,box-shadow] hover:-translate-y-1 hover:shadow-[0_18px_60px_rgba(11,15,25,0.10)]",
        size === "featured" ? "p-5 sm:p-6" : "p-5",
      ].join(" ")}
    >
      <div className="absolute -right-24 -top-28 h-64 w-64 rounded-full bg-[radial-gradient(circle_at_center,rgba(30,99,255,0.22),transparent_62%)] blur-2xl opacity-70 transition-opacity group-hover:opacity-100" />

      <div className="relative">
        <ImageCarousel
          images={p.images.map((src, i) => ({
            src,
            alt: `${p.title} screenshot ${i + 1}`,
          }))}
          aspectClassName={imgAspect}
          sizes={
            size === "featured"
              ? "(max-width: 768px) 100vw, 70vw"
              : "(max-width: 768px) 100vw, 45vw"
          }
          priority={size === "featured"}
        />

        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="text-lg font-semibold tracking-tight sm:text-xl">
              {p.title}
            </div>
            <div className="mt-2 text-sm leading-6 text-[var(--muted)]">
              {p.desc}
            </div>
          </div>

          <div className="hidden shrink-0 flex-col items-end gap-2 sm:flex">
            <div className="rounded-full border border-[var(--border)] bg-white/70 px-3 py-2 text-xs font-semibold text-[var(--muted)]">
              Delivered in {p.deliveryDays} days
            </div>
            <a
              href={p.websiteUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-white/70 px-3 py-2 text-xs font-semibold text-[var(--muted)] transition-colors hover:bg-white"
            >
              View website
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-0.5">
                →
              </span>
            </a>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap items-center justify-between gap-3 sm:hidden">
          <div className="rounded-full border border-[var(--border)] bg-white/70 px-3 py-2 text-xs font-semibold text-[var(--muted)]">
            Delivered in {p.deliveryDays} days
          </div>
          <a
            href={p.websiteUrl}
            target="_blank"
            rel="noreferrer"
            className="text-xs font-semibold text-[var(--blue)] hover:underline"
          >
            View website →
          </a>
        </div>

        <ul className="mt-4 flex flex-wrap gap-2">
          {p.tags.map((t) => (
            <li
              key={t}
              className="rounded-full border border-[var(--border)] bg-white/60 px-3 py-1 text-xs font-semibold text-[var(--muted)]"
            >
              {t}
            </li>
          ))}
        </ul>

        <div className="mt-5 rounded-2xl border border-[var(--border)] bg-white/60 px-4 py-3">
          <div className="text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">
            Outcome
          </div>
          <div className="mt-1 text-sm font-semibold tracking-tight">
            {p.outcome}
          </div>
        </div>
      </div>
    </article>
  );
}

export default function WorkPage() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <div className="pb-16 pt-14 sm:pt-16">
      <Container>
        <div className="grid gap-10 xl:grid-cols-[1fr] xl:items-end">
          <div className="flex flex-col gap-4">
          <div className="text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">
            Work
          </div>
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            A portfolio focused on outcomes.
          </h1>
          <p className="max-w-2xl text-sm leading-6 text-[var(--muted)] sm:text-base">
            These are representative examples. Share your idea and we’ll show
            you a free prototype that matches your exact use case.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-[var(--foreground)] px-5 py-3 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(11,15,25,0.16)] transition-transform hover:-translate-y-0.5"
            >
              Get a free prototype
            </Link>
          </div>
          </div>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {featured.map((p) => (
            <ProjectCard key={p.title} p={p} size="featured" />
          ))}
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {rest.map((p) => (
            <ProjectCard key={p.title} p={p} />
          ))}
        </div>

        <div className="mt-12 rounded-3xl border border-[var(--border)] bg-white/70 p-6 backdrop-blur">
          <div className="text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">
            What we typically deliver
          </div>
          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            {[
              { t: "Design", d: "Figma, UX flows, UI screens" },
              { t: "Build", d: "Web app, landing page, integrations" },
              { t: "Launch", d: "Deployment + support" },
            ].map((x) => (
              <div
                key={x.t}
                className="rounded-2xl border border-[var(--border)] bg-white/60 px-4 py-4"
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

        <section className="mt-10 rounded-3xl border border-[var(--border)] bg-white/70 p-6 backdrop-blur sm:p-8">
          <div className="text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">
            Portfolio context
          </div>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
            How to read these project examples
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-[var(--muted)] sm:text-base">
            Each case study represents a real delivery pattern we use for startups and business teams:
            discovery, prototype validation, focused design, rapid build, and launch support. Depending
            on your scope, we can ship a simple website in a few days or a working MVP in a few weeks.
            If your requirements are unique, we adapt the process while keeping communication simple and
            outcomes measurable.
          </p>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-[var(--muted)] sm:text-base">
            We can also extend existing products, redesign outdated interfaces, improve conversion-focused
            landing pages, and integrate AI assistants for lead capture or customer support workflows.
          </p>
        </section>
      </Container>
    </div>
  );
}

