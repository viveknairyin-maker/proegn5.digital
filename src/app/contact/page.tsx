import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/container";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Progen5 for a free discovery call and a free prototype. Email, WhatsApp, and Instagram available.",
};

export default function ContactPage() {
  return (
    <div className="pb-16 pt-14 sm:pt-16">
      <Container>
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
                href="https://wa.me/919611702503?text=Hi%20Progen5%2C%20I%20want%20to%20build%20a%20digital%20product.%20Can%20we%20do%20a%20free%20discovery%20call%3F"
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
      </Container>
    </div>
  );
}

