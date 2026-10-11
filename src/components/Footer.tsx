import Link from "next/link";
import { nav, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-[var(--line)] bg-[#0f2032] text-[#f6f0e6]">
      <div className="container-page grid gap-10 py-14 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="display text-3xl font-semibold">
            Success <span className="text-gold">Star</span>
          </p>
          <p className="mt-3 max-w-md text-sm leading-7 text-[#d7cfc2]">
            {site.description}
          </p>
          <p className="mt-4 text-sm font-medium text-gold">{site.accreditation}</p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#b9ae9c]">
            Explore
          </p>
          <div className="mt-4 flex flex-col gap-2 text-sm">
            {nav.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-gold">
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#b9ae9c]">
            Contact
          </p>
          <div className="mt-4 space-y-3 text-sm leading-6 text-[#d7cfc2]">
            <p>{site.address}</p>
            <p>
              <a href={`tel:${site.phone}`} className="hover:text-gold">
                {site.phoneDisplay}
              </a>
            </p>
            <p>
              <a href={`mailto:${site.email}`} className="hover:text-gold">
                {site.email}
              </a>
            </p>
            <a href={site.whatsapp} target="_blank" rel="noreferrer" className="btn-gold !px-4 !py-2 text-sm">
              WhatsApp enquire
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-[#b9ae9c]">
        © 2026 {site.name}. All rights reserved.
      </div>
    </footer>
  );
}
