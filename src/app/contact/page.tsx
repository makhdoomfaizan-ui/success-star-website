import type { Metadata } from "next";
import { EnquiryForm } from "@/components/EnquiryForm";
import { SectionHeading } from "@/components/SectionHeading";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Success Star Training Center Sharjah",
  description:
    "Contact Success Star Training Center in Al Riqa, Sharjah by WhatsApp, phone, or enquiry form.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <div className="section-space">
      <div className="container-page grid gap-12 lg:grid-cols-2">
        <div>
          <SectionHeading
            eyebrow="Contact"
            title="Visit us in Al Riqa, Sharjah"
            description="Call, WhatsApp, or send an enquiry. We respond with course guidance and assessment timing."
          />

          <div className="mt-8 space-y-4 text-sm leading-7 text-ink-soft">
            <p>
              <strong className="text-ink">Address</strong>
              <br />
              {site.address}
            </p>
            <p>
              <strong className="text-ink">Mobile</strong>
              <br />
              <a href={`tel:${site.phone}`}>{site.phoneDisplay}</a>
            </p>
            <p>
              <strong className="text-ink">Landline</strong>
              <br />
              <a href={`tel:${site.landline}`}>{site.landlineDisplay}</a>
            </p>
            <p>
              <strong className="text-ink">Email</strong>
              <br />
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </p>
            {site.hours.map((item) => (
              <p key={item.day}>
                <strong className="text-ink">{item.day}</strong>
                <br />
                {item.time}
              </p>
            ))}
          </div>

          <a href={site.whatsapp} target="_blank" rel="noreferrer" className="btn-gold mt-8">
            Chat on WhatsApp
          </a>

          <div className="mt-8 overflow-hidden rounded-[1.5rem] ring-1 ring-[var(--line)]">
            <iframe
              title="Success Star Training Center map"
              src={`https://www.google.com/maps?q=${site.mapsQuery}&output=embed`}
              className="h-72 w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        <div>
          <h2 className="display text-2xl font-semibold">Send an enquiry</h2>
          <p className="mt-2 text-sm text-ink-soft">We will continue the conversation on WhatsApp.</p>
          <div className="mt-6">
            <EnquiryForm />
          </div>
        </div>
      </div>
    </div>
  );
}
