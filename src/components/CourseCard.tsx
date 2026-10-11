import Link from "next/link";
import type { Course } from "@/content/courses";

export function CourseCard({ course }: { course: Course }) {
  return (
    <article className="group flex h-full flex-col border-b border-[var(--line)] pb-8 pt-2 transition hover:border-gold/50">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-sea">
        {course.category}
      </p>
      <h3 className="display mt-3 text-2xl font-semibold tracking-tight text-ink">
        <Link href={`/courses/${course.slug}`} className="transition group-hover:text-gold-deep">
          {course.shortTitle}
        </Link>
      </h3>
      <p className="mt-3 flex-1 text-sm leading-7 text-ink-soft">{course.summary}</p>
      <div className="mt-5 flex flex-wrap gap-3 text-xs font-medium text-ink-soft">
        <span>{course.audience}</span>
        <span aria-hidden>•</span>
        <span>{course.mode}</span>
      </div>
      <Link
        href={`/courses/${course.slug}`}
        className="mt-6 inline-flex text-sm font-semibold text-ink underline decoration-gold/70 underline-offset-4"
      >
        View course details
      </Link>
    </article>
  );
}
