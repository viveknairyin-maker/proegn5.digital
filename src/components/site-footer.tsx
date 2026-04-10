import Link from "next/link";
import { Container } from "./container";

export function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-[var(--border)]">
      <Container>
        <div className="grid gap-10 py-14 md:grid-cols-3">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2">
              <span className="text-base font-semibold tracking-tight">
                Progen5
              </span>
              <span className="h-2 w-2 rounded-full bg-[var(--blue)]" />
            </div>
            <p className="max-w-sm text-sm leading-6 text-[var(--muted)]">
              A startup execution agency based in India. We help non-technical
              founders turn ideas into fully launched digital products.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10">
            <div className="space-y-2">
              <div className="text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">
                Pages
              </div>
              <div className="flex flex-col gap-1 text-sm font-medium">
                <Link className="text-[var(--foreground)] hover:underline" href="/services">
                  Services
                </Link>
                <Link className="text-[var(--foreground)] hover:underline" href="/work">
                  Work
                </Link>
                <Link className="text-[var(--foreground)] hover:underline" href="/about">
                  About
                </Link>
                <Link className="text-[var(--foreground)] hover:underline" href="/contact">
                  Contact
                </Link>
              </div>
            </div>

            <div className="space-y-2">
              <div className="text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">
                Contact
              </div>
              <div className="flex flex-col gap-1 text-sm font-medium">
                <a className="text-[var(--foreground)] hover:underline" href="mailto:hechtix@gmail.com">
                  hechtix@gmail.com
                </a>
                <a
                  className="text-[var(--foreground)] hover:underline"
                  href="https://wa.me/916362131572"
                  target="_blank"
                  rel="noreferrer"
                >
                  WhatsApp: +91 6362131572
                </a>
                <a
                  className="text-[var(--foreground)] hover:underline"
                  href="https://instagram.com/progen5.digital"
                  target="_blank"
                  rel="noreferrer"
                >
                  Instagram: @progen5.digital
                </a>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <div className="text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">
              Promise
            </div>
            <p className="text-sm leading-6 text-[var(--muted)]">
              Free discovery call. Free prototype before you pay. If you’re not
              happy, we fix it—no questions asked.
            </p>
            <p className="text-xs text-[var(--muted)]">
              © {new Date().getFullYear()} Progen5. All rights reserved.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}

