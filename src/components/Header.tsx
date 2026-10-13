"use client";

import Link from "next/link";
import { useState } from "react";
import { SocialLinks } from "@/components/SocialLinks";
import { nav, site } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[rgba(6,27,66,0.92)] text-white backdrop-blur-xl">
      <div className="hidden border-b border-white/10 bg-navy-deep/80 lg:block">
        <div className="container-page flex items-center justify-between py-2 text-xs font-medium text-white/80">
          <p>Focus academy · FS1 to Year 12 · {site.area}</p>
          <div className="flex items-center gap-4">
            <a href={`tel:${site.phone}`} className="hover:text-gold">
              {site.phoneDisplay}
            </a>
            <SocialLinks />
          </div>
        </div>
      </div>

      <div className="container-page flex items-center justify-between gap-4 py-3.5">
        <Link href="/" className="min-w-0" onClick={() => setOpen(false)}>
          <div className="display text-xl font-semibold tracking-tight sm:text-2xl">
            Success <span className="text-gold">Star</span>
          </div>
          <p className="truncate text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-white/70">
            Training Center · Sharjah
          </p>
        </Link>

        <nav className="hidden items-center gap-5 xl:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-white/85 transition hover:text-gold"
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
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/25 bg-white/10 lg:hidden"
          aria-label="Toggle menu"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="display text-lg">{open ? "×" : "☰"}</span>
        </button>
      </div>

      {open ? (
        <div className="border-t border-white/10 bg-navy-deep px-4 py-4 lg:hidden">
          <div className="flex flex-col gap-2">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-xl px-3 py-2.5 text-base font-semibold text-white hover:bg-white/10"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-3 flex items-center justify-between px-1">
              <SocialLinks />
              <a href={site.whatsapp} target="_blank" rel="noreferrer" className="btn-gold !px-4 !py-2 text-sm">
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
