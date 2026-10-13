import Link from "next/link";
import { SocialLinks } from "@/components/SocialLinks";
import { nav, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-[linear-gradient(160deg,#061b42_0%,#08275f_55%,#0b3d91_100%)] text-white">
      <div className="container-page grid gap-10 py-14 md:grid-cols-[1.35fr_1fr_1fr]">
        <div>
          <p className="display text-3xl font-semibold">
            Success <span className="text-gold">Star</span>
          </p>
          <p className="mt-3 max-w-md text-sm leading-7 text-white/75">{site.description}</p>
          <p className="mt-4 text-sm font-semibold text-gold">{site.accreditation}</p>
          <div className="mt-5">
            <SocialLinks />
          </div>
        </div>

        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold">Explore</p>
          <div className="mt-4 flex flex-col gap-2 text-sm text-white/80">
            {nav.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-gold">
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold">Visit us</p>
          <div className="mt-4 space-y-3 text-sm leading-6 text-white/80">
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
      <div className="border-t border-white/10 py-4 text-center text-xs text-white/55">
        © 2026 {site.name}. All rights reserved.
      </div>
    </footer>
  );
}
