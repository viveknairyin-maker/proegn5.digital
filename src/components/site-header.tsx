"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Container } from "@/components/container";

const nav = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 12);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-40">
      <div
        className={[
          "border-b backdrop-blur supports-[backdrop-filter]:bg-white/70",
          scrolled ? "border-[var(--border)] bg-white/80" : "border-transparent",
        ].join(" ")}
      >
        <Container>
          <div className="flex w-full items-center gap-6 py-4">
            <Link href="/" className="group inline-flex items-center">
              <Image
                src="/brand/logo.png"
                alt="Progen5 logo"
                width={160}
                height={48}
                className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02] sm:h-11"
                priority
              />
            </Link>

            <nav className="hidden flex-1 items-center gap-1 md:flex">
              {nav.map((item) => {
                const active =
                  item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={[
                      "rounded-full px-3 py-2 text-sm font-medium transition-colors",
                      active
                        ? "bg-black/[0.06] text-[var(--foreground)]"
                        : "text-[var(--muted)] hover:bg-black/[0.04] hover:text-[var(--foreground)]",
                    ].join(" ")}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            <div className="ml-auto hidden items-center gap-2 md:flex">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-[var(--blue)] px-4 py-2 text-sm font-semibold text-white shadow-[0_10px_24px_rgba(30,99,255,0.18)] transition-transform hover:-translate-y-0.5"
              >
                Get a free prototype
              </Link>
            </div>

          <button
            type="button"
            className="ml-auto inline-flex items-center justify-center rounded-full border border-[var(--border)] bg-white/70 px-4 py-2 text-sm font-semibold md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
          >
            {open ? "Close" : "Menu"}
          </button>
          </div>
        </Container>

        <div
          id="mobile-nav"
          className={[
            "md:hidden",
            open ? "block" : "hidden",
          ].join(" ")}
        >
          <Container>
            <div className="pb-5">
              <div className="rounded-2xl border border-[var(--border)] bg-white/80 p-2 backdrop-blur">
                {nav.map((item) => {
                  const active =
                    item.href === "/"
                      ? pathname === "/"
                      : pathname.startsWith(item.href);
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className={[
                        "block rounded-xl px-4 py-3 text-sm font-semibold",
                        active
                          ? "bg-black/[0.06] text-[var(--foreground)]"
                          : "text-[var(--muted)] hover:bg-black/[0.04] hover:text-[var(--foreground)]",
                      ].join(" ")}
                    >
                      {item.label}
                    </Link>
                  );
                })}
                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="mt-1 block rounded-xl bg-[var(--blue)] px-4 py-3 text-center text-sm font-semibold text-white"
                >
                  Get a free prototype
                </Link>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </header>
  );
}

