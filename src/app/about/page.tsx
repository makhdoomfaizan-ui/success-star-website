import type { Metadata } from "next";
import Link from "next/link";
import { SectionHeading } from "@/components/SectionHeading";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Success Star Training Center Sharjah",
  description:
    "Learn about Success Star Training Center in Al Riqa, Sharjah — SPEA-registered tutoring, kids skills, and professional training.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <div className="section-space">
      <div className="container-page max-w-3xl">
        <SectionHeading
          eyebrow="About"
          title="A Sharjah training centre for every learning stage"
          description={site.tagline}
        />

        <div className="mt-10 space-y-5 text-base leading-8 text-ink-soft">
          <p>
            Success Star Training Center serves families and learners in Al Riqa, Sharjah with
            personalised academic support and practical skills training.
          </p>
          <p>
            Our programmes cover school tutoring from foundation years through secondary exam
            preparation, kids skills such as mental math, and professional courses including Excel,
            graphic design, and computer training.
          </p>
          <p>
            {site.accreditation}. We focus on clear teaching, steady progress, and a simple
            admissions experience through WhatsApp and assessment booking.
          </p>
          <p>
            Whether you need homework confidence for your child or workplace digital skills for
            yourself, we help you start with the right plan.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <Link href="/admissions" className="btn-gold">
            Book assessment
          </Link>
          <Link href="/courses" className="btn-primary">
            Explore courses
          </Link>
        </div>
      </div>
    </div>
  );
}
