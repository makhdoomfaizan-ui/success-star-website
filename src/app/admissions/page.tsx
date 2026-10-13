import type { Metadata } from "next";
import { EnquiryForm } from "@/components/EnquiryForm";
import { SectionHeading } from "@/components/SectionHeading";
import { SocialLinks } from "@/components/SocialLinks";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Admissions & Assessment Sharjah",
  description:
    "Book a free academic assessment at Success Star Training Center in Al Riqa, Sharjah for FS1 to Year 12 support.",
  alternates: { canonical: "/admissions" },
};

const steps = [
  {
    title: "Share your child’s year group",
    body: "Tell us FS1–Year 12 stage, subjects and what they need help with.",
  },
  {
    title: "Book an assessment",
    body: "We recommend a personalised academic plan with clear weekly goals.",
  },
  {
    title: "Start learning",
    body: "Join bright classroom sessions in Al Riqa with progress updates for parents.",
  },
];

export default function AdmissionsPage() {
  return (
    <div className="section-space">
      <div className="container-page grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <SectionHeading
            eyebrow="Admissions"
            title="Join Success Star in three clear steps"
            description="Simple, parent-friendly admissions focused on academic placement from FS1 to Year 12."
          />

          <ol className="mt-10 space-y-5">
            {steps.map((step, index) => (
              <li key={step.title} className="rounded-[1.4rem] bg-white p-5 shadow-sm ring-1 ring-[var(--line)]">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-coral">
                  Step {index + 1}
                </p>
                <h2 className="display mt-2 text-2xl font-semibold text-navy">{step.title}</h2>
                <p className="mt-3 text-sm leading-7 text-ink-soft">{step.body}</p>
              </li>
            ))}
          </ol>

          <div className="mt-8 space-y-3 text-sm leading-7 text-ink-soft">
            <p>
              <strong className="text-navy">Centre:</strong> {site.address}
            </p>
            {site.hours.map((item) => (
              <p key={item.day}>
                <strong className="text-navy">{item.day}:</strong> {item.time}
              </p>
            ))}
            <div className="pt-2">
              <SocialLinks tone="dark" />
            </div>
          </div>
        </div>

        <div>
          <h2 className="display text-2xl font-semibold text-navy">Book your assessment</h2>
          <p className="mt-2 text-sm text-ink-soft">
            Submit and WhatsApp opens with your details ready to send.
          </p>
          <div className="mt-6">
            <EnquiryForm courseName="FS1 to Year 12 academics" />
          </div>
        </div>
      </div>
    </div>
  );
}
