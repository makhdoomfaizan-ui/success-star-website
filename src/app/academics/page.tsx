import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { EnquiryForm } from "@/components/EnquiryForm";
import { SectionHeading } from "@/components/SectionHeading";
import { academicStages, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Academics FS1 to Year 12 Sharjah",
  description:
    "Academic support from FS1 to Year 12 at Success Star Training Center in Sharjah — foundation, primary, secondary and exam readiness.",
  alternates: { canonical: "/academics" },
};

export default function AcademicsPage() {
  return (
    <>
      <section className="relative min-h-[70vh] overflow-hidden text-white">
        <Image
          src="/images/campus/class-math-1.jpg"
          alt="Academic classroom coaching at Success Star"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(6,27,66,0.9)_0%,rgba(21,87,192,0.55)_100%)]" />
        <div className="container-page relative flex min-h-[70vh] flex-col justify-end pb-14 pt-28">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-gold">Academics</p>
          <h1 className="display mt-4 max-w-3xl text-5xl font-semibold leading-tight sm:text-6xl">
            FS1 to Year 12 academic excellence
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-white/88">
            A clear pathway for every stage — early years foundations, primary mastery, secondary confidence, and exam readiness.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/admissions" className="btn-gold">
              Book assessment
            </Link>
            <a href={site.whatsapp} target="_blank" rel="noreferrer" className="btn-ghost">
              WhatsApp us
            </a>
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container-page">
          <SectionHeading
            eyebrow="Learning stages"
            title="One academy journey from first steps to Year 12"
            description="Each stage has its own goals, teaching style and progress checks — so parents always know what comes next."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {academicStages.map((item, index) => (
              <article key={item.stage} className="stage-card p-7">
                <div className="flex items-center justify-between gap-3">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-blue">
                    Stage {index + 1}
                  </p>
                  <p className="rounded-full bg-sky px-3 py-1 text-xs font-bold text-navy">
                    {item.stage}
                  </p>
                </div>
                <h2 className="display mt-4 text-3xl font-semibold text-navy">{item.title}</h2>
                <p className="mt-2 text-sm font-semibold text-mint">{item.ages}</p>
                <p className="mt-4 text-sm leading-7 text-ink-soft">{item.focus}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space bg-sky/60">
        <div className="container-page grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="grid grid-cols-2 gap-3">
            <div className="relative col-span-2 aspect-[16/10] overflow-hidden rounded-[1.5rem]">
              <Image
                src="/images/campus/kg-room.jpg"
                alt="KG room for early years learners"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-square overflow-hidden rounded-[1.5rem]">
              <Image
                src="/images/campus/class-math-2.jpg"
                alt="Secondary academic coaching"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-square overflow-hidden rounded-[1.5rem]">
              <Image
                src="/images/campus/ielts-materials.jpg"
                alt="Study resources and exam materials"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div>
            <SectionHeading
              eyebrow="How we teach"
              title="Confidence first. Results follow."
              description="We assess each learner, build a personal plan, and keep parents updated — the same clarity families expect from top UAE academies."
            />
            <ul className="mt-8 space-y-3">
              {[
                "Diagnostic assessment before joining",
                "Personalised weekly academic plan",
                "Core subjects + exam technique",
                "Progress updates parents can understand",
              ].map((item) => (
                <li
                  key={item}
                  className="rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-navy shadow-sm ring-1 ring-[var(--line)]"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container-page grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <SectionHeading
              eyebrow="Admissions"
              title="Ready to place your child?"
              description="Share year group, subjects and current challenges. We’ll recommend the right academic track."
            />
            <div className="mt-8 space-y-3 text-sm leading-7 text-ink-soft">
              <p>
                <strong className="text-navy">Centre:</strong> {site.address}
              </p>
              <p>
                <strong className="text-navy">Call:</strong>{" "}
                <a href={`tel:${site.phone}`}>{site.phoneDisplay}</a>
              </p>
            </div>
          </div>
          <EnquiryForm courseName="FS1 to Year 12 academics" />
        </div>
      </section>
    </>
  );
}
