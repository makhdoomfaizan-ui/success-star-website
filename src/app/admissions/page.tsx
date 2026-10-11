import type { Metadata } from "next";
import { EnquiryForm } from "@/components/EnquiryForm";
import { SectionHeading } from "@/components/SectionHeading";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Admissions & Assessment Sharjah",
  description:
    "Book a free assessment at Success Star Training Center in Al Riqa, Sharjah. Simple admissions for tutoring and skills courses.",
  alternates: { canonical: "/admissions" },
};

const steps = [
  {
    title: "Tell us your goal",
    body: "Share the learner’s age/level, subjects, or skills course interest on WhatsApp or the form.",
  },
  {
    title: "Book an assessment",
    body: "We recommend a suitable plan — school tutoring, mental math, Excel, design, or pathway support.",
  },
  {
    title: "Start learning",
    body: "Join in-centre sessions in Al Riqa or online classes with clear progress follow-up.",
  },
];

export default function AdmissionsPage() {
  return (
    <div className="section-space">
      <div className="container-page grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <SectionHeading
            eyebrow="Admissions"
            title="Enrol in three clear steps"
            description="No confusing process. Message us, book an assessment, and start with a plan that fits your family or career goal."
          />

          <ol className="mt-10 space-y-8">
            {steps.map((step, index) => (
              <li key={step.title} className="border-t border-[var(--line)] pt-6">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">
                  Step {index + 1}
                </p>
                <h2 className="display mt-2 text-2xl font-semibold">{step.title}</h2>
                <p className="mt-3 text-sm leading-7 text-ink-soft">{step.body}</p>
              </li>
            ))}
          </ol>

          <div className="mt-10 space-y-3 text-sm leading-7 text-ink-soft">
            <p>
              <strong className="text-ink">Centre:</strong> {site.address}
            </p>
            {site.hours.map((item) => (
              <p key={item.day}>
                <strong className="text-ink">{item.day}:</strong> {item.time}
              </p>
            ))}
            <p>
              <strong className="text-ink">Call:</strong>{" "}
              <a href={`tel:${site.phone}`}>{site.phoneDisplay}</a> · Landline{" "}
              <a href={`tel:${site.landline}`}>{site.landlineDisplay}</a>
            </p>
          </div>
        </div>

        <div>
          <h2 className="display text-2xl font-semibold">Book your assessment</h2>
          <p className="mt-2 text-sm text-ink-soft">
            Submit and WhatsApp opens with your details ready to send.
          </p>
          <div className="mt-6">
            <EnquiryForm />
          </div>
        </div>
      </div>
    </div>
  );
}
