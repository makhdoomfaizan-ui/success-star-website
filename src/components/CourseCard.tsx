import Link from "next/link";
import type { Course } from "@/content/courses";

export function CourseCard({ course }: { course: Course }) {
  return (
    <article className="group flex h-full flex-col rounded-[1.5rem] bg-white p-6 shadow-[var(--shadow)] ring-1 ring-[var(--line)] transition hover:-translate-y-1 hover:ring-blue/30">
      <p className="text-xs font-bold uppercase tracking-[0.16em] text-mint">
        {course.category}
      </p>
      <h3 className="display mt-3 text-2xl font-semibold tracking-tight text-navy">
        <Link href={`/courses/${course.slug}`} className="transition group-hover:text-blue">
          {course.shortTitle}
        </Link>
      </h3>
      <p className="mt-3 flex-1 text-sm leading-7 text-ink-soft">{course.summary}</p>
      <div className="mt-5 flex flex-wrap gap-3 text-xs font-semibold text-ink-soft">
        <span>{course.audience}</span>
        <span aria-hidden>•</span>
        <span>{course.mode}</span>
      </div>
      <Link
        href={`/courses/${course.slug}`}
        className="mt-6 inline-flex text-sm font-bold text-blue underline decoration-gold decoration-2 underline-offset-4"
      >
        View details
      </Link>
    </article>
  );
}
