import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/container";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Progen5 for a free discovery call and a free prototype. Email, WhatsApp, and Instagram available.",
};

const INTRO_CALL_VIDEO_ID = "Wo-0Q9G4Mn4";
const INTRO_CALL_EMBED_URL = `https://www.youtube-nocookie.com/embed/${INTRO_CALL_VIDEO_ID}?rel=0`;

export default function ContactPage() {
  return (
    <div className="pb-16 pt-14 sm:pt-16">
      <Container>
        <section className="mb-10 rounded-3xl border border-[var(--border)] bg-white/70 p-6 backdrop-blur sm:p-8">
          <div className="text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">
            15-minute introductory call
          </div>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
            Watch how our intro call works
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-[var(--muted)] sm:text-base">
            Get a quick walkthrough before booking. This video plays right here
            on the page, then you can share your project details below.
          </p>
          <div className="mt-5 overflow-hidden rounded-2xl border border-[var(--border)] bg-black">
            <div className="relative w-full pt-[56.25%]">
              <iframe
                className="absolute inset-0 h-full w-full"
                src={INTRO_CALL_EMBED_URL}
                title="Progen5 introductory call"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>
        </section>

        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <div className="space-y-4">
            <div className="text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">
              Contact
            </div>
            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Let’s build your product—starting with a free prototype.
            </h1>
            <p className="max-w-xl text-sm leading-6 text-[var(--muted)] sm:text-base">
              Share what you’re working on. We’ll suggest the best approach and
              next steps, then create a quick prototype so you can see the
              direction before you pay.
            </p>

            <div className="grid gap-3">
              <a
                className="rounded-2xl border border-[var(--border)] bg-white/70 px-5 py-4 backdrop-blur transition-transform hover:-translate-y-0.5"
                href="mailto:hechtix@gmail.com"
              >
                <div className="text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">
                  Email
                </div>
                <div className="mt-1 text-sm font-semibold tracking-tight">
                  hechtix@gmail.com
                </div>
              </a>

              <a
                className="rounded-2xl border border-[var(--border)] bg-white/70 px-5 py-4 backdrop-blur transition-transform hover:-translate-y-0.5"
                href="https://wa.me/916362131572"
                target="_blank"
                rel="noreferrer"
              >
                <div className="text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">
                  WhatsApp
                </div>
                <div className="mt-1 text-sm font-semibold tracking-tight">
                  +91 6362131572
                </div>
              </a>

              <a
                className="rounded-2xl border border-[var(--border)] bg-white/70 px-5 py-4 backdrop-blur transition-transform hover:-translate-y-0.5"
                href="https://instagram.com/progen5.digital"
                target="_blank"
                rel="noreferrer"
              >
                <div className="text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">
                  Instagram
                </div>
                <div className="mt-1 text-sm font-semibold tracking-tight">
                  @progen5.digital
                </div>
              </a>
            </div>

            <div className="rounded-3xl border border-[var(--border)] bg-[var(--foreground)] p-6 text-white">
              <div className="text-xs font-semibold uppercase tracking-wider text-white/70">
                What happens next
              </div>
              <ol className="mt-3 space-y-2 text-sm font-semibold">
                <li className="text-white/90">1) 15-minute discovery call</li>
                <li className="text-white/90">2) Free prototype</li>
                <li className="text-white/90">3) Clear scope + timeline</li>
                <li className="text-white/90">4) Build + launch</li>
              </ol>
            </div>
          </div>

          <div className="rounded-3xl border border-[var(--border)] bg-white/70 p-6 backdrop-blur">
            <div className="flex items-start justify-between gap-6">
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">
                  Inquiry form
                </div>
                <div className="mt-2 text-lg font-semibold tracking-tight">
                  Tell us about your idea
                </div>
              </div>
              <Link
                href="/services"
                className="text-sm font-semibold text-[var(--blue)] hover:underline"
              >
                Services →
              </Link>
            </div>

            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </div>

        <section className="mt-12 rounded-3xl border border-[var(--border)] bg-white/70 p-6 backdrop-blur sm:p-8">
          <div className="text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">
            Before you submit
          </div>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
            What details help us give better recommendations
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-[var(--muted)] sm:text-base">
            The more context you share, the faster we can give you a practical roadmap. Include your
            product idea, the audience you want to serve, your preferred launch timeline, and whether
            you need only design, only development, or complete end-to-end execution.
          </p>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2">
            <li className="rounded-2xl border border-[var(--border)] bg-white/60 px-4 py-3 text-sm leading-6 text-[var(--muted)]">
              Clear problem statement and business goal
            </li>
            <li className="rounded-2xl border border-[var(--border)] bg-white/60 px-4 py-3 text-sm leading-6 text-[var(--muted)]">
              Must-have features for version one
            </li>
            <li className="rounded-2xl border border-[var(--border)] bg-white/60 px-4 py-3 text-sm leading-6 text-[var(--muted)]">
              Target launch window and budget expectations
            </li>
            <li className="rounded-2xl border border-[var(--border)] bg-white/60 px-4 py-3 text-sm leading-6 text-[var(--muted)]">
              Any examples you like for style or functionality
            </li>
          </ul>
        </section>
      </Container>
    </div>
  );
}

