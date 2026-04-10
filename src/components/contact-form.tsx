"use client";

import { useMemo, useState } from "react";

function enc(v: string) {
  return encodeURIComponent(v);
}

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [idea, setIdea] = useState("");
  const [timeline, setTimeline] = useState("");
  const [status, setStatus] = useState<"idle" | "ready">("idle");

  const mailto = useMemo(() => {
    const subject = `Progen5 inquiry — ${name || "New lead"}`;
    const body = [
      "Hi Progen5,",
      "",
      "I’d like to discuss a project.",
      "",
      `Name: ${name || "-"}`,
      `Email: ${email || "-"}`,
      `Timeline: ${timeline || "-"}`,
      "",
      "Idea / requirements:",
      idea || "-",
      "",
      "Thanks!",
    ].join("\n");

    return `mailto:hechtix@gmail.com?subject=${enc(subject)}&body=${enc(body)}`;
  }, [email, idea, name, timeline]);

  return (
    <form
      className="space-y-4"
      onSubmit={(e) => {
        e.preventDefault();
        setStatus("ready");
        window.location.href = mailto;
      }}
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="space-y-2">
          <div className="text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">
            Your name
          </div>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full rounded-2xl border border-[var(--border)] bg-white/70 px-4 py-3 text-sm font-medium outline-none transition-shadow focus:shadow-[0_0_0_4px_rgba(30,99,255,0.16)]"
            placeholder="e.g., Rahul"
          />
        </label>
        <label className="space-y-2">
          <div className="text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">
            Email
          </div>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            className="w-full rounded-2xl border border-[var(--border)] bg-white/70 px-4 py-3 text-sm font-medium outline-none transition-shadow focus:shadow-[0_0_0_4px_rgba(30,99,255,0.16)]"
            placeholder="you@company.com"
          />
        </label>
      </div>

      <label className="space-y-2">
        <div className="text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">
          What are you building?
        </div>
        <textarea
          value={idea}
          onChange={(e) => setIdea(e.target.value)}
          rows={5}
          className="w-full resize-none rounded-2xl border border-[var(--border)] bg-white/70 px-4 py-3 text-sm font-medium outline-none transition-shadow focus:shadow-[0_0_0_4px_rgba(30,99,255,0.16)]"
          placeholder="Briefly describe the idea, target users, and must-have features."
        />
      </label>

      <label className="space-y-2">
        <div className="text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">
          Timeline
        </div>
        <input
          value={timeline}
          onChange={(e) => setTimeline(e.target.value)}
          className="w-full rounded-2xl border border-[var(--border)] bg-white/70 px-4 py-3 text-sm font-medium outline-none transition-shadow focus:shadow-[0_0_0_4px_rgba(30,99,255,0.16)]"
          placeholder="e.g., 3–5 days / 2 weeks / 4–6 weeks"
        />
      </label>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          className="inline-flex items-center justify-center rounded-full bg-[var(--blue)] px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_24px_rgba(30,99,255,0.18)] transition-transform hover:-translate-y-0.5"
        >
          Send inquiry
        </button>

        <div className="text-xs font-semibold text-[var(--muted)]">
          {status === "ready"
            ? "Opening your email client…"
            : "We typically respond quickly on WhatsApp too."}
        </div>
      </div>
    </form>
  );
}

