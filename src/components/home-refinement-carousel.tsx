"use client";

import Link from "next/link";
import Image from "next/image";
import { useMemo, useState } from "react";
import type { WorkProject } from "@/data/work-projects";

type Props = {
  projects: WorkProject[];
  caseStudyHref?: string;
};

export function HomeRefinementCarousel({
  projects,
  caseStudyHref = "/work",
}: Props) {
  const [index, setIndex] = useState(0);
  const items = useMemo(() => projects.filter((project) => project.featuredOnHome), [projects]);
  const canNavigate = items.length > 1;
  const active = items[index];

  if (!active) return null;

  const goNext = () => setIndex((value) => (value + 1) % items.length);
  const goPrev = () => setIndex((value) => (value - 1 + items.length) % items.length);

  const beforePreview = active.beforeImages[0] ?? active.showcaseImages[0] ?? "/team/founder.jpg";
  const afterPreview = active.afterImages[0] ?? active.showcaseImages[1] ?? beforePreview;

  return (
    <section className="mt-20">
      <div className="rounded-3xl border border-[var(--border)] bg-white/70 p-6 backdrop-blur sm:p-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">
              This Month&apos;s Website Refinement
            </div>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
              Story-driven recent work that builds trust
            </h2>
          </div>
          {canNavigate ? (
            <div className="inline-flex items-center gap-2">
              <button
                type="button"
                onClick={goPrev}
                aria-label="Previous recent work"
                className="rounded-full border border-[var(--border)] bg-white px-3 py-2 text-sm font-semibold text-[var(--foreground)]"
              >
                ←
              </button>
              <button
                type="button"
                onClick={goNext}
                aria-label="Next recent work"
                className="rounded-full border border-[var(--border)] bg-white px-3 py-2 text-sm font-semibold text-[var(--foreground)]"
              >
                →
              </button>
            </div>
          ) : null}
        </div>

        <article className="mt-6 grid gap-6 lg:grid-cols-[1.3fr_1fr]">
          <div className="grid gap-4 sm:grid-cols-2">
            <figure className="overflow-hidden rounded-2xl border border-[var(--border)] bg-white">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={beforePreview}
                  alt={`${active.title} before preview`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
              </div>
              <figcaption className="border-t border-[var(--border)] px-4 py-3 text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">
                Before
              </figcaption>
            </figure>

            <figure className="overflow-hidden rounded-2xl border border-[var(--border)] bg-white">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={afterPreview}
                  alt={`${active.title} after preview`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
              </div>
              <figcaption className="border-t border-[var(--border)] px-4 py-3 text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">
                After
              </figcaption>
            </figure>
          </div>

          <div className="rounded-2xl border border-[var(--border)] bg-white/70 p-5">
            <div className="rounded-full border border-[var(--border)] bg-white px-3 py-1 text-xs font-semibold text-[var(--muted)]">
              {active.type === "refinement" ? "Refinement Case Study" : "Built from Scratch"}
            </div>
            <h3 className="mt-3 text-xl font-semibold tracking-tight">{active.title}</h3>
            <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{active.fullDescription}</p>
            <div className="mt-4 flex flex-wrap items-center gap-3">
              <Link
                href={caseStudyHref}
                className="inline-flex items-center justify-center rounded-full bg-[var(--foreground)] px-4 py-2 text-sm font-semibold text-white"
              >
                View Case Study
              </Link>
              <a
                href={active.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-[var(--border)] bg-white px-4 py-2 text-sm font-semibold text-[var(--foreground)]"
              >
                Visit Live Site
              </a>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
