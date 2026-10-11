import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { EnquiryForm } from "@/components/EnquiryForm";
import { courses, getCourse } from "@/content/courses";
import { site } from "@/lib/site";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return courses.map((course) => ({ slug: course.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const course = getCourse(slug);
  if (!course) return {};
  return {
    title: course.seoTitle,
    description: course.seoDescription,
    keywords: [course.primaryKeyword, "Success Star Training Center", "Sharjah"],
    alternates: { canonical: `/courses/${course.slug}` },
  };
}

export default async function CourseDetailPage({ params }: Props) {
  const { slug } = await params;
  const course = getCourse(slug);
  if (!course) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: course.title,
    description: course.summary,
    provider: {
      "@type": "EducationalOrganization",
      name: site.name,
      address: site.address,
    },
  };

  return (
    <div className="section-space">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="container-page grid gap-12 lg:grid-cols-[1.15fr_0.85fr]">
        <article>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sea">
            {course.category} · {course.primaryKeyword}
          </p>
          <h1 className="display mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
            {course.title}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-ink-soft">{course.summary}</p>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {[
              ["Audience", course.audience],
              ["Duration", course.duration],
              ["Mode", course.mode],
            ].map(([label, value]) => (
              <div key={label} className="border-t border-[var(--line)] pt-4">
                <p className="text-xs uppercase tracking-[0.16em] text-ink-soft">{label}</p>
                <p className="mt-2 text-sm font-medium text-ink">{value}</p>
              </div>
            ))}
          </div>

          <h2 className="display mt-12 text-2xl font-semibold">What you will gain</h2>
          <ul className="mt-5 space-y-3">
            {course.outcomes.map((outcome) => (
              <li key={outcome} className="border-l-2 border-gold pl-4 text-sm leading-7 text-ink-soft">
                {outcome}
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-wrap gap-3">
            <a href={site.whatsapp} target="_blank" rel="noreferrer" className="btn-gold">
              Enquire on WhatsApp
            </a>
            <Link href="/courses" className="btn-primary">
              All courses
            </Link>
          </div>
        </article>

        <aside>
          <h2 className="display text-2xl font-semibold">Book this course</h2>
          <p className="mt-2 text-sm text-ink-soft">
            Send your enquiry and we will guide you on batch timing and assessment.
          </p>
          <div className="mt-6">
            <EnquiryForm courseName={course.shortTitle} />
          </div>
        </aside>
      </div>
    </div>
  );
}
