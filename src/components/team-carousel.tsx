import Image from "next/image";

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
    role: "Designers & Developers",
    bio: "A cross-functional team covering UX, UI, development, QA, and launch support. Collaborates in short feedback loops for faster iterations and cleaner outcomes. Built to move quickly without compromising quality.",
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
    <article className="team-card relative w-[min(92vw,760px)] shrink-0 overflow-hidden rounded-3xl border border-white/50 bg-white/45 p-4 shadow-[0_12px_44px_rgba(11,15,25,0.12)] backdrop-blur-xl sm:p-5">
      <div className="pointer-events-none absolute inset-0 opacity-70">
        <div className="morph-blob absolute -left-8 -top-10 h-36 w-36 rounded-[42%_58%_63%_37%/34%_45%_55%_66%] bg-[radial-gradient(circle_at_30%_30%,rgba(74,163,255,0.35),rgba(30,99,255,0.04))]" />
      </div>
      <div className="relative grid gap-4 sm:grid-cols-[170px_1fr] sm:gap-5">
        <div className="overflow-hidden rounded-2xl border border-white/60 bg-white/60">
          <Image
            src={image}
            alt={`${name} portrait`}
            width={340}
            height={340}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="flex min-w-0 flex-col justify-center">
          <div className="text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">
            {role}
          </div>
          <h3 className="mt-1 text-xl font-semibold tracking-tight">{name}</h3>
          <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{bio}</p>
        </div>
      </div>
    </article>
  );
}

export function TeamCarousel() {
  const items = [...team, ...team];

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

      <div className="relative mt-6 overflow-hidden rounded-3xl border border-[var(--border)] bg-white/30 p-3 backdrop-blur sm:p-4">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-[linear-gradient(to_right,rgba(255,255,255,0.98),rgba(255,255,255,0))]" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-[linear-gradient(to_left,rgba(255,255,255,0.98),rgba(255,255,255,0))]" />

        <div className="group">
          <div className="team-marquee flex w-[200%] gap-4 group-hover:[animation-play-state:paused]">
            {items.map((member, i) => (
              <TeamCard key={`${member.name}-${i}`} {...member} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
