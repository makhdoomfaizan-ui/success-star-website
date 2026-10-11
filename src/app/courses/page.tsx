import type { Metadata } from "next";
import { CourseCard } from "@/components/CourseCard";
import { SectionHeading } from "@/components/SectionHeading";
import { courseCategories, courses } from "@/content/courses";

export const metadata: Metadata = {
  title: "Courses in Sharjah",
  description:
    "Explore tutoring, mental math, Excel, graphic design, computer training, and university pathway support at Success Star Training Center in Sharjah.",
  alternates: { canonical: "/courses" },
};

export default function CoursesPage() {
  return (
    <div className="section-space">
      <div className="container-page">
        <SectionHeading
          eyebrow="Course catalogue"
          title="Training and tutoring programmes in Sharjah"
          description="Choose a programme below. Each page is SEO-ready with clear outcomes and a WhatsApp enquiry path."
        />

        <div className="mt-12 space-y-14">
          {courseCategories.map((category) => {
            const items = courses.filter((course) => course.category === category);
            if (!items.length) return null;
            return (
              <section key={category}>
                <h2 className="display text-2xl font-semibold text-ink">{category}</h2>
                <div className="mt-8 grid gap-10 md:grid-cols-2">
                  {items.map((course) => (
                    <CourseCard key={course.slug} course={course} />
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </div>
  );
}
