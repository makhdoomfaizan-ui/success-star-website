import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SectionHeading } from "@/components/SectionHeading";
import { SocialLinks } from "@/components/SocialLinks";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Success Star Training Center Sharjah",
  description:
    "About Success Star Training Center in Al Riqa, Sharjah — a focus academy for FS1 to Year 12 academic support.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <div className="section-space">
      <div className="container-page grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div>
          <SectionHeading
            eyebrow="About"
            title="A vibrant Sharjah academy for growing minds"
            description={site.tagline}
          />
          <div className="mt-8 space-y-5 text-base leading-8 text-ink-soft">
            <p>
              Success Star Training Center helps children and teens build academic confidence from
              FS1 through Year 12 with personalised teaching and clear progress plans.
            </p>
            <p>
              Our centre in Al Riqa is designed to feel bright, welcoming and serious about results —
              from early years foundations to secondary exam readiness.
            </p>
            <p>
              {site.accreditation}. Families also find short skills courses such as IELTS and digital
              tools when they need them.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link href="/academics" className="btn-primary">
              View academics
            </Link>
            <Link href="/admissions" className="btn-gold">
              Book assessment
            </Link>
            <SocialLinks tone="dark" />
          </div>
        </div>
        <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-[var(--shadow)]">
          <Image
            src="/images/campus/exterior.jpg"
            alt="Success Star Training Center exterior in Sharjah"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}
