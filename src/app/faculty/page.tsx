import type { Metadata } from "next";
import { SectionHeading } from "@/components/SectionHeading";
import { faculty } from "@/content/faculty";

export const metadata: Metadata = {
  title: "Faculty & Instructors",
  description:
    "Meet the teaching focus areas at Success Star Training Center in Sharjah — school tutoring, digital skills, mental math, and design.",
  alternates: { canonical: "/faculty" },
};

export default function FacultyPage() {
  return (
    <div className="section-space">
      <div className="container-page">
        <SectionHeading
          eyebrow="Faculty"
          title="Instructors focused on progress"
          description="Replace these role profiles with your real teacher names and photos when ready. The structure is already parent-friendly and SEO-clean."
        />

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {faculty.map((member) => (
            <article
              key={member.role}
              className="rounded-[1.5rem] bg-white/70 p-6 shadow-[var(--shadow)] ring-1 ring-[var(--line)]"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-sea">
                {member.role}
              </p>
              <h2 className="display mt-3 text-2xl font-semibold">{member.name}</h2>
              <p className="mt-2 text-sm font-medium text-gold-deep">{member.focus}</p>
              <p className="mt-4 text-sm leading-7 text-ink-soft">{member.bio}</p>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
