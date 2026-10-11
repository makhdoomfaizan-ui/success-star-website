"use client";

import Link from "next/link";
import { useState } from "react";
import { nav, site } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--line)] bg-[rgba(247,244,239,0.86)] backdrop-blur-xl">
      <div className="container-page flex items-center justify-between gap-4 py-3.5">
        <Link href="/" className="group min-w-0" onClick={() => setOpen(false)}>
          <div className="display text-xl font-semibold tracking-tight text-ink sm:text-2xl">
            Success <span className="text-gold">Star</span>
          </div>
          <p className="truncate text-[0.7rem] font-medium uppercase tracking-[0.18em] text-ink-soft">
            Training Center · Sharjah
          </p>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-ink-soft transition hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a href={site.whatsapp} target="_blank" rel="noreferrer" className="btn-gold !py-2.5 !px-4 text-sm">
            WhatsApp
          </a>
          <Link href="/admissions" className="btn-primary !py-2.5 !px-4 text-sm">
            Book assessment
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--line)] bg-white/70 lg:hidden"
          aria-label="Toggle menu"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="display text-lg">{open ? "×" : "☰"}</span>
        </button>
      </div>

      {open ? (
        <div className="border-t border-[var(--line)] bg-paper px-4 py-4 lg:hidden">
          <div className="flex flex-col gap-3">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-xl px-3 py-2 text-base font-medium text-ink hover:bg-paper-deep"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <a
              href={site.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="btn-gold mt-2"
              onClick={() => setOpen(false)}
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
