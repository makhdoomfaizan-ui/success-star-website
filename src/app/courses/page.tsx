import type { Metadata } from "next";
import Link from "next/link";
import { CourseCard } from "@/components/CourseCard";
import { SectionHeading } from "@/components/SectionHeading";
import { courses } from "@/content/courses";

export const metadata: Metadata = {
  title: "Short Courses Sharjah",
  description:
    "Short courses at Success Star Training Center in Sharjah — IELTS, Excel, graphic design, computer training and more, alongside our FS1–Year 12 academics.",
  alternates: { canonical: "/courses" },
};

const shortCategories = ["Kids Skills", "Professional Skills", "Higher Education"] as const;

export default function CoursesPage() {
  return (
    <div className="section-space">
      <div className="container-page">
        <SectionHeading
          eyebrow="Short courses"
          title="Skills programmes that fit around school life"
          description="Looking for core academics first? Start with our FS1 to Year 12 pathway. These short courses are available when your family wants an extra boost."
        />

        <div className="mt-8 rounded-[1.5rem] bg-[linear-gradient(120deg,#08275f,#1557c0)] p-6 text-white sm:p-8">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold">Primary focus</p>
          <h2 className="display mt-2 text-3xl font-semibold">FS1 to Year 12 Academics</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-white/80">
            Structured academic support is our main offering for Sharjah families.
          </p>
          <Link href="/academics" className="btn-gold mt-6">
            Explore academics
          </Link>
        </div>

        <div className="mt-14 space-y-14">
          {shortCategories.map((category) => {
            const items = courses.filter((course) => course.category === category);
            if (!items.length) return null;
            return (
              <section key={category}>
                <h2 className="display text-2xl font-semibold text-navy">{category}</h2>
                <div className="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                  {items.map((course) => (
                    <CourseCard key={course.slug} course={course} />
                  ))}
                </div>
              </section>
            );
          })}

          <section>
            <h2 className="display text-2xl font-semibold text-navy">School Tutoring</h2>
            <div className="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {courses
                .filter((course) => course.category === "School Tutoring")
                .map((course) => (
                  <CourseCard key={course.slug} course={course} />
                ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
