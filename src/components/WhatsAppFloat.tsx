import { site } from "@/lib/site";

export function WhatsAppFloat() {
  return (
    <a
      href={site.whatsapp}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-[#1faa59] px-4 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(16,32,51,0.25)] transition hover:-translate-y-0.5"
      aria-label="Chat on WhatsApp"
    >
      <span className="inline-flex h-2.5 w-2.5 rounded-full bg-white/90" />
      WhatsApp
    </a>
  );
}
