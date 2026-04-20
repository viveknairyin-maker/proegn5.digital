import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/container";
import { WorkProjectCard } from "@/components/work-project-card";
import { workProjects } from "@/data/work-projects";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Conversion-focused case studies by Progen5, including before-and-after website refinements and from-scratch builds.",
};

export default function WorkPage() {
  const refinementProjects = workProjects.filter((project) => project.type === "refinement");
  const fromScratchProjects = workProjects.filter(
    (project) => project.type === "from-scratch",
  );

  return (
    <div className="pb-16 pt-14 sm:pt-16">
      <Container>
        <div className="grid gap-10 xl:grid-cols-[1fr] xl:items-end">
          <div className="flex flex-col gap-4">
            <div className="text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">
              Work
            </div>
            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Real projects with clear before-and-after proof.
            </h1>
            <p className="max-w-2xl text-sm leading-6 text-[var(--muted)] sm:text-base">
              Explore how we refine existing websites and build new experiences
              from scratch. Every case study is structured to show trust,
              outcomes, and decision-ready proof.
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

        <section className="mt-10">
          <div className="text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">
            Website refinements
          </div>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
            Before vs after improvements
          </h2>
          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            {refinementProjects.map((project) => (
              <WorkProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>

        <section className="mt-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">
            Built from scratch
          </div>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
            New websites and product experiences
          </h2>
          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            {fromScratchProjects.map((project) => (
              <WorkProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>

        <div className="mt-12 rounded-3xl border border-[var(--border)] bg-white/70 p-6 backdrop-blur">
          <div className="text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">
            What each case study includes
          </div>
          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            {[
              { t: "Proof", d: "Before/After tabs or project gallery" },
              { t: "Clarity", d: "Scope, timeline, and concise storytelling" },
              { t: "Trust", d: "Live links, outcomes, and testimonial context" },
            ].map((item) => (
              <div
                key={item.t}
                className="rounded-2xl border border-[var(--border)] bg-white/60 px-4 py-4"
              >
                <div className="text-sm font-semibold tracking-tight">{item.t}</div>
                <div className="mt-1 text-sm leading-6 text-[var(--muted)]">
                  {item.d}
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
            How to evaluate fit for your project
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-[var(--muted)] sm:text-base">
            Refinement projects show measurable transformation from existing
            websites, while from-scratch projects focus on strategic structure,
            brand positioning, and conversion-ready build quality. Share your
            scope and we will suggest the quickest path from idea to launch.
          </p>
        </section>
      </Container>
    </div>
  );
}

