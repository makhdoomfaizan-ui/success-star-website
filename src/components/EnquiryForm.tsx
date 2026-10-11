"use client";

import { FormEvent, useState } from "react";
import { site } from "@/lib/site";

type Props = {
  courseName?: string;
};

export function EnquiryForm({ courseName }: Props) {
  const [sentHint, setSentHint] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    const interest = String(data.get("interest") || courseName || "General enquiry").trim();
    const message = String(data.get("message") || "").trim();

    const text = [
      `Hello Success Star Training Center,`,
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Interest: ${interest}`,
      message ? `Message: ${message}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    setSentHint(true);
    window.open(`https://wa.me/971508596379?text=${encodeURIComponent(text)}`, "_blank");
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4 rounded-[1.5rem] bg-white/80 p-6 shadow-[var(--shadow)] ring-1 ring-[var(--line)]">
      <div>
        <label className="text-sm font-medium text-ink" htmlFor="name">
          Full name
        </label>
        <input
          id="name"
          name="name"
          required
          className="mt-2 w-full rounded-xl border border-[var(--line)] bg-paper px-4 py-3 text-sm outline-none ring-sea/30 focus:ring-2"
          placeholder="Your name"
        />
      </div>
      <div>
        <label className="text-sm font-medium text-ink" htmlFor="phone">
          Phone / WhatsApp
        </label>
        <input
          id="phone"
          name="phone"
          required
          className="mt-2 w-full rounded-xl border border-[var(--line)] bg-paper px-4 py-3 text-sm outline-none ring-sea/30 focus:ring-2"
          placeholder="+971 ..."
        />
      </div>
      <div>
        <label className="text-sm font-medium text-ink" htmlFor="interest">
          Course interest
        </label>
        <input
          id="interest"
          name="interest"
          defaultValue={courseName || ""}
          className="mt-2 w-full rounded-xl border border-[var(--line)] bg-paper px-4 py-3 text-sm outline-none ring-sea/30 focus:ring-2"
          placeholder="School tutoring, Excel, Mental math..."
        />
      </div>
      <div>
        <label className="text-sm font-medium text-ink" htmlFor="message">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="mt-2 w-full rounded-xl border border-[var(--line)] bg-paper px-4 py-3 text-sm outline-none ring-sea/30 focus:ring-2"
          placeholder="Tell us the student’s age/level and what you need help with."
        />
      </div>
      <button type="submit" className="btn-primary w-full">
        Send on WhatsApp
      </button>
      <p className="text-xs leading-5 text-ink-soft">
        Submitting opens WhatsApp with your enquiry ready to send to {site.phoneDisplay}.
        {sentHint ? " If WhatsApp did not open, call us directly." : ""}
      </p>
    </form>
  );
}
