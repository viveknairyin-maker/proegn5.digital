"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const team = [
  {
    name: "Vivek Nair",
    role: "Founder",
    bio: "Leads product strategy and delivery across every engagement. Focused on helping non-technical founders convert raw ideas into clear execution plans. Works closely with clients from discovery through launch.",
    image: "/team/founder.svg",
  },
  {
    name: "Ananya Rao",
    role: "Co-founder",
    bio: "Drives operations, design quality, and client communication. Aligns timelines with business goals so momentum stays high from week one. Ensures each build remains practical, scalable, and user-first.",
    image: "/team/cofounder.svg",
  },
  {
    name: "Core Product Team",
    role: "Team Member",
    bio: "A cross-functional team covering UX, UI, development, QA, and launch support. Collaborates in short feedback loops for faster iterations and cleaner outcomes. Built to move quickly without compromising quality.",
    image: "/team/team-members.svg",
  },
  {
    name: "Launch & Growth Team",
    role: "Team Member",
    bio: "Supports content, quality checks, deployment, and post-launch optimizations. Keeps each project stable, measurable, and ready for continuous improvement after release.",
    image: "/team/team-members.svg",
  },
];

function TeamCard({
  name,
  role,
  bio,
  image,
}: {
  name: string;
  role: string;
  bio: string;
  image: string;
}) {
  return (
    <article className="relative aspect-[1.91/1] w-full overflow-hidden rounded-3xl border border-white/50 bg-white/45 p-5 shadow-[0_12px_44px_rgba(11,15,25,0.12)] backdrop-blur-xl sm:p-6">
      <div className="pointer-events-none absolute inset-0 opacity-70">
        <div className="morph-blob absolute -left-8 -top-10 h-36 w-36 rounded-[42%_58%_63%_37%/34%_45%_55%_66%] bg-[radial-gradient(circle_at_30%_30%,rgba(74,163,255,0.35),rgba(30,99,255,0.04))]" />
      </div>
      <div className="relative grid h-full gap-4 sm:grid-cols-[34%_1fr] sm:gap-6">
        <div className="h-full overflow-hidden rounded-2xl border border-white/60 bg-white/60">
          <Image
            src={image}
            alt={`${name} portrait`}
            width={720}
            height={720}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="flex min-w-0 flex-col justify-center">
          <div className="text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">
            {role}
          </div>
          <h3 className="mt-2 text-xl font-semibold tracking-tight sm:text-2xl">
            {name}
          </h3>
          <p className="mt-3 text-sm leading-6 text-[var(--muted)] sm:text-base">
            {bio}
          </p>
        </div>
      </div>
    </article>
  );
}

export function TeamCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const timer = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % team.length);
    }, 4200);

    return () => window.clearInterval(timer);
  }, [isPaused]);

  return (
    <section className="mt-12">
      <div className="flex items-end justify-between gap-6">
        <div className="space-y-2">
          <div className="text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">
            Our team
          </div>
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Meet the people building with you.
          </h2>
        </div>
      </div>

      <div
        className="relative mx-auto mt-6 max-w-6xl overflow-hidden rounded-3xl border border-[var(--border)] bg-white/30 p-3 backdrop-blur sm:p-4"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-[linear-gradient(to_right,rgba(255,255,255,0.95),rgba(255,255,255,0))]" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-[linear-gradient(to_left,rgba(255,255,255,0.95),rgba(255,255,255,0))]" />

        <div
          className="flex transition-transform duration-700 ease-out"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {team.map((member) => (
            <div key={`${member.name}-${member.role}`} className="w-full shrink-0">
              <TeamCard {...member} />
            </div>
          ))}
        </div>
        <div className="mt-4 flex items-center justify-center gap-2">
          {team.map((member, index) => (
            <button
              key={`${member.name}-dot`}
              aria-label={`Show ${member.name}`}
              onClick={() => setActiveIndex(index)}
              className={`h-2.5 rounded-full transition-all ${
                activeIndex === index
                  ? "w-6 bg-[var(--blue)]"
                  : "w-2.5 bg-[var(--border)]"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
