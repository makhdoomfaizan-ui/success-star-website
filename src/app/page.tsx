import Image from "next/image";
import Link from "next/link";
import { CourseCard } from "@/components/CourseCard";
import { SectionHeading } from "@/components/SectionHeading";
import { courses } from "@/content/courses";
import { posts } from "@/content/blog";
import { testimonials } from "@/content/testimonials";
import { site } from "@/lib/site";

export default function HomePage() {
  const featured = courses.filter((course) => course.featured).slice(0, 4);

  return (
    <>
      <section className="relative min-h-[92vh] overflow-hidden text-[#f8f2e8]">
        <Image
          src="/images/campus/exterior.jpg"
          alt="Success Star Training Center building in Sharjah"
          fill
          priority
          className="hero-ken object-cover object-[center_35%]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(10,22,36,0.88)_0%,rgba(10,22,36,0.55)_55%,rgba(10,22,36,0.35)_100%)]" />
        <div className="container-page relative flex min-h-[92vh] flex-col justify-end pb-16 pt-28">
          <p className="fade-up text-xs font-semibold uppercase tracking-[0.24em] text-gold">
            Success Star Training Center
          </p>
          <h1 className="display fade-up-delay mt-4 max-w-3xl text-5xl font-semibold leading-[1.05] sm:text-6xl md:text-7xl">
            Sharjah learning that builds real confidence.
          </h1>
          <p className="fade-up-delay-2 mt-6 max-w-xl text-lg leading-8 text-[#e7dccb]">
            School tutoring, IELTS, KG support, and skills training in Al Riqa — with clear next steps for every learner.
          </p>
          <div className="fade-up-delay-2 mt-8 flex flex-wrap gap-3">
            <Link href="/admissions" className="btn-gold">
              Book free assessment
            </Link>
            <a href={site.whatsapp} target="_blank" rel="noreferrer" className="btn-secondary">
              WhatsApp us
            </a>
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container-page">
          <SectionHeading
            eyebrow="Courses in Sharjah"
            title="Programmes parents and professionals actually search for"
            description="Every course page is built to rank locally and convert enquiries — tutoring, mental math, Excel, design, and more."
          />
          <div className="mt-12 grid gap-10 md:grid-cols-2">
            {featured.map((course) => (
              <CourseCard key={course.slug} course={course} />
            ))}
          </div>
          <div className="mt-10">
            <Link href="/courses" className="btn-primary">
              View all courses
            </Link>
          </div>
        </div>
      </section>

      <section className="section-space bg-[#12263a] text-[#f7f1e7]">
        <div className="container-page grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <SectionHeading
            light
            eyebrow="Why Success Star"
            title="A Sharjah centre built for steady progress"
            description="We combine personalised teaching, practical skills training, and simple admission steps so families know exactly what happens next."
          />
          <div className="grid gap-4">
            {[
              site.accreditation,
              "In-centre learning in Al Riqa with online options",
              "School tutoring, kids skills, and career-ready courses",
              "WhatsApp enquiry and assessment booking in minutes",
            ].map((item) => (
              <div
                key={item}
                className="border-l-2 border-gold/80 pl-4 text-sm leading-7 text-[#d9cdb8]"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container-page grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <SectionHeading
            eyebrow="Campus life"
            title="See the real Success Star centre"
            description="Your Sharjah classrooms, reception, KG room, and IELTS study spaces — real photos from your centre."
          />
          <div className="relative aspect-[16/10] overflow-hidden rounded-[1.75rem] shadow-[var(--shadow)]">
            <Image
              src="/images/campus/reception.jpg"
              alt="Success Star Sharjah reception and logo wall"
              fill
              className="object-cover transition duration-700 hover:scale-105"
            />
          </div>
        </div>
        <div className="container-page mt-8">
          <Link href="/gallery" className="text-sm font-semibold underline decoration-gold underline-offset-4">
            Open photo & video gallery
          </Link>
        </div>
      </section>

      <section className="section-space">
        <div className="container-page">
          <SectionHeading
            eyebrow="Trusted locally"
            title="What Sharjah learners say"
            description="Real Google-review themes from families and professionals who trained with Success Star."
          />
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {testimonials.map((item) => (
              <blockquote key={item.quote} className="border-t border-[var(--line)] pt-6">
                <p className="display text-2xl leading-snug text-ink">“{item.quote}”</p>
                <footer className="mt-4 text-sm text-ink-soft">
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
            eyebrow="Blog for rankings"
            title="Guides that keep Success Star visible on Google"
            description="Fresh articles targeting Sharjah education searches — updated as your content engine."
          />
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {posts.slice(0, 3).map((post) => (
              <article key={post.slug} className="border-t border-[var(--line)] pt-5">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-sea">
                  {post.category}
                </p>
                <h3 className="display mt-3 text-xl font-semibold">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h3>
                <p className="mt-3 text-sm leading-7 text-ink-soft">{post.excerpt}</p>
              </article>
            ))}
          </div>
          <div className="mt-8">
            <Link href="/blog" className="btn-primary">
              Read the blog
            </Link>
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container-page overflow-hidden rounded-[2rem] bg-[linear-gradient(135deg,#102033,#1f6f78)] px-8 py-12 text-[#f8f2e8] sm:px-12">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            Start this week
          </p>
          <h2 className="display mt-3 max-w-2xl text-3xl font-semibold sm:text-4xl">
            Book an assessment or message us on WhatsApp now.
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-7 text-[#ddd2c2]">
            Tell us the learner’s age, subjects, or career goal. We’ll recommend the right course plan.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/admissions" className="btn-gold">
              Book assessment
            </Link>
            <a href={site.whatsapp} target="_blank" rel="noreferrer" className="btn-secondary">
              {site.phoneDisplay}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
