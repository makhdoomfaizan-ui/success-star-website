import Image from "next/image";
import Link from "next/link";
import { CourseCard } from "@/components/CourseCard";
import { SectionHeading } from "@/components/SectionHeading";
import { SocialLinks } from "@/components/SocialLinks";
import { courses } from "@/content/courses";
import { posts } from "@/content/blog";
import { testimonials } from "@/content/testimonials";
import { academicStages, site } from "@/lib/site";

export default function HomePage() {
  const shortCourseSlugs = [
    "ielts-preparation-sharjah",
    "microsoft-excel-course-sharjah",
    "graphic-design-course-sharjah",
  ];
  const shortCourses = shortCourseSlugs
    .map((slug) => courses.find((course) => course.slug === slug))
    .filter((course): course is (typeof courses)[number] => Boolean(course));

  return (
    <>
      <section className="relative min-h-[92vh] overflow-hidden text-white">
        <Image
          src="/images/campus/class-math-2.jpg"
          alt="Students learning with a Success Star teacher in Sharjah"
          fill
          priority
          className="hero-ken object-cover object-[center_20%]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(6,27,66,0.92)_0%,rgba(8,39,95,0.72)_48%,rgba(21,87,192,0.45)_100%)]" />
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-navy-deep/50 to-transparent" />
        <div className="container-page relative flex min-h-[92vh] flex-col justify-end pb-16 pt-32">
          <p className="fade-up text-xs font-bold uppercase tracking-[0.24em] text-gold">
            Success Star Training Center · Sharjah
          </p>
          <h1 className="display fade-up-delay mt-4 max-w-4xl text-5xl font-semibold leading-[1.02] sm:text-6xl md:text-7xl">
            Bright futures start with strong academics.
          </h1>
          <p className="fade-up-delay-2 mt-6 max-w-2xl text-lg leading-8 text-white/88">
            A vibrant focus academy for FS1 to Year 12 — personalised teaching, confident kids, and clear progress every term.
          </p>
          <div className="fade-up-delay-2 mt-8 flex flex-wrap gap-3">
            <Link href="/admissions" className="btn-gold">
              Book free assessment
            </Link>
            <Link href="/academics" className="btn-ghost">
              Explore FS1–Year 12
            </Link>
          </div>
          <div className="fade-up-delay-2 mt-8 flex items-center gap-4">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/70">Follow us</p>
            <SocialLinks />
          </div>
        </div>
      </section>

      <section className="relative z-10 -mt-8">
        <div className="container-page">
          <div className="marquee-path rounded-2xl bg-white/95 px-4 py-4 shadow-[var(--shadow)] ring-1 ring-[var(--line)]">
            <div className="marquee-track text-sm font-bold uppercase tracking-[0.14em] text-navy">
              {[...academicStages, ...academicStages].map((item, index) => (
                <span
                  key={`${item.stage}-${index}`}
                  className="inline-flex items-center gap-3 rounded-full bg-sky px-4 py-2"
                >
                  <span className="text-blue">{item.stage}</span>
                  <span className="text-ink-soft">{item.title}</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container-page">
          <SectionHeading
            eyebrow="Academic pathway"
            title="FS1 to Year 12 — built like a real academy journey"
            description="Parents choose Success Star for structured academic support across every stage, with teachers who know how to lift confidence and results."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {academicStages.map((item) => (
              <article key={item.stage} className="stage-card p-6">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-blue">{item.stage}</p>
                <h3 className="display mt-3 text-2xl font-semibold text-navy">{item.title}</h3>
                <p className="mt-1 text-sm font-semibold text-mint">{item.ages}</p>
                <p className="mt-4 text-sm leading-7 text-ink-soft">{item.focus}</p>
              </article>
            ))}
          </div>
          <div className="mt-10">
            <Link href="/academics" className="btn-primary">
              View full academics
            </Link>
          </div>
        </div>
      </section>

      <section className="section-space bg-[linear-gradient(180deg,#08275f_0%,#0b3d91_100%)] text-white">
        <div className="container-page grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <SectionHeading
              light
              eyebrow="Life at Success Star"
              title="Happy classrooms. Confident kids."
              description="See the energy of our Sharjah centre — from KG foundations to secondary exam coaching."
            />
            <Link href="/gallery" className="btn-gold mt-8">
              Open gallery
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {[
              ["/images/campus/kg-room.jpg", "KG learning room"],
              ["/images/campus/class-math-1.jpg", "Classroom coaching"],
              ["/images/campus/class-math-2.jpg", "Guided board teaching"],
              ["/images/campus/reception.jpg", "Welcome desk"],
            ].map(([src, alt], index) => (
              <div
                key={src}
                className={`relative overflow-hidden rounded-2xl ${index === 0 ? "col-span-2 aspect-[16/9]" : "aspect-square"}`}
              >
                <Image src={src} alt={alt} fill className="photo-tilt object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container-page grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-[var(--shadow)]">
            <Image
              src="/images/campus/kg-room.jpg"
              alt="Bright KG classroom at Success Star"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <SectionHeading
              eyebrow="Why families choose us"
              title="Personal attention with academy-level clarity"
              description="We combine warm teaching, stage-by-stage academic plans, and easy WhatsApp communication for busy Sharjah parents."
            />
            <div className="mt-8 grid gap-4">
              {[
                "FS1 to Year 12 academic focus",
                "Small-group and personalised support",
                "Exam readiness for IGCSE pathways",
                "Bright, child-friendly learning spaces",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-2xl bg-white px-4 py-3 shadow-sm ring-1 ring-[var(--line)]">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-coral" />
                  <p className="text-sm font-semibold text-navy">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container-page">
          <SectionHeading
            eyebrow="Also available"
            title="Short courses for skills & confidence"
            description="Alongside our academic pathway, families can join focused short programmes such as IELTS, Excel and creative skills."
          />
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {shortCourses.map((course) => (
              <CourseCard key={course.slug} course={course} />
            ))}
          </div>
          <div className="mt-8">
            <Link href="/courses" className="text-sm font-bold text-blue underline decoration-gold decoration-2 underline-offset-4">
              Browse all short courses
            </Link>
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container-page">
          <SectionHeading
            eyebrow="Parent voices"
            title="Trusted by Sharjah families"
            description="Real feedback themes from learners and parents who chose Success Star."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {testimonials.map((item) => (
              <blockquote
                key={item.quote}
                className="rounded-[1.5rem] bg-white p-6 shadow-[var(--shadow)] ring-1 ring-[var(--line)]"
              >
                <p className="display text-2xl leading-snug text-navy">“{item.quote}”</p>
                <footer className="mt-4 text-sm font-semibold text-ink-soft">
                  {item.name} · {item.detail}
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container-page">
          <SectionHeading
            eyebrow="Parent guides"
            title="Helpful reads for Sharjah families"
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {posts.slice(0, 3).map((post) => (
              <article key={post.slug} className="rounded-[1.4rem] bg-white p-5 ring-1 ring-[var(--line)]">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-mint">{post.category}</p>
                <h3 className="display mt-3 text-xl font-semibold text-navy">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h3>
                <p className="mt-3 text-sm leading-7 text-ink-soft">{post.excerpt}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space pt-0">
        <div className="container-page overflow-hidden rounded-[2rem] bg-[linear-gradient(135deg,#ff5a45_0%,#ffb703_45%,#1557c0_100%)] p-1">
          <div className="rounded-[1.85rem] bg-navy-deep px-8 py-12 text-white sm:px-12">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold">Start this week</p>
            <h2 className="display mt-3 max-w-2xl text-3xl font-semibold sm:text-4xl">
              Book an academic assessment for your child.
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-white/80">
              Tell us their year group and subjects. We’ll recommend the right FS1–Year 12 support plan.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link href="/admissions" className="btn-gold">
                Book assessment
              </Link>
              <a href={site.whatsapp} target="_blank" rel="noreferrer" className="btn-ghost">
                WhatsApp {site.phoneDisplay}
              </a>
              <SocialLinks />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
