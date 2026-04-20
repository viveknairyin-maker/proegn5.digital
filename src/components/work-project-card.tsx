import { BeforeAfterTabs } from "@/components/before-after-tabs";
import { ImageCarousel } from "@/components/image-carousel";
import { ProjectMeta } from "@/components/project-meta";
import type { WorkProject } from "@/data/work-projects";

type Props = {
  project: WorkProject;
};

export function WorkProjectCard({ project }: Props) {
  return (
    <article className="group relative overflow-hidden rounded-[28px] border border-[var(--border)] bg-white/70 p-5 backdrop-blur transition-[transform,box-shadow] hover:-translate-y-1 hover:shadow-[0_18px_60px_rgba(11,15,25,0.10)] sm:p-6">
      <div className="absolute -right-24 -top-28 h-64 w-64 rounded-full bg-[radial-gradient(circle_at_center,rgba(30,99,255,0.2),transparent_62%)] blur-2xl opacity-70 transition-opacity group-hover:opacity-100" />

      <div className="relative space-y-5">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div className="space-y-2">
            <h3 className="text-xl font-semibold tracking-tight">{project.title}</h3>
            <p className="max-w-2xl text-sm leading-6 text-[var(--muted)]">
              {project.shortDescription}
            </p>
          </div>
          <span className="rounded-full border border-[var(--border)] bg-white/80 px-3 py-1 text-xs font-semibold text-[var(--muted)]">
            {project.type === "refinement" ? "Refinement" : "Built from Scratch"}
          </span>
        </div>

        {project.type === "refinement" ? (
          <BeforeAfterTabs
            projectTitle={project.title}
            beforeImages={project.beforeImages}
            afterImages={project.afterImages}
          />
        ) : (
          <ImageCarousel
            images={project.showcaseImages.map((src, index) => ({
              src,
              alt: `${project.title} showcase ${index + 1}`,
            }))}
            aspectClassName="aspect-[16/10]"
            sizes="(max-width: 768px) 100vw, 55vw"
          />
        )}

        <ProjectMeta
          duration={project.duration}
          liveUrl={project.liveUrl}
          testimonial={project.testimonial}
        />

        <ul className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full border border-[var(--border)] bg-white/60 px-3 py-1 text-xs font-semibold text-[var(--muted)]"
            >
              {tag}
            </li>
          ))}
        </ul>

        <div className="rounded-2xl border border-[var(--border)] bg-white/60 px-4 py-4">
          <div className="text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">
            Key outcomes
          </div>
          <ul className="mt-2 grid gap-2">
            {project.outcomes.map((outcome) => (
              <li key={outcome} className="text-sm leading-6 text-[var(--foreground)]">
                - {outcome}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}
