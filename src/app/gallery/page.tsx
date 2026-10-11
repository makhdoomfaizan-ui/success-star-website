import type { Metadata } from "next";
import Image from "next/image";
import { SectionHeading } from "@/components/SectionHeading";
import { gallery } from "@/content/gallery";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Gallery & Campus Media",
  description:
    "Photos and media from Success Star Training Center in Sharjah — classrooms, kids learning, and skills training.",
  alternates: { canonical: "/gallery" },
};

export default function GalleryPage() {
  return (
    <div className="section-space">
      <div className="container-page">
        <SectionHeading
          eyebrow="Gallery"
          title="Inside Success Star, Sharjah"
          description="Real photos from our centre — classrooms, reception, KG room, and IELTS study spaces."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {gallery.map((item, index) => (
            <figure
              key={item.id}
              className={`relative overflow-hidden rounded-[1.5rem] ${
                index === 0 ? "sm:col-span-2 sm:aspect-[16/9]" : "aspect-[4/3]"
              }`}
            >
              <Image
                src={item.image}
                alt={item.alt}
                fill
                className="object-cover transition duration-700 hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-sm text-white">
                <span className="text-xs uppercase tracking-[0.14em] text-gold">{item.category}</span>
                <p className="mt-1 font-medium">{item.title}</p>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-12 rounded-[1.5rem] bg-[#12263a] px-6 py-8 text-[#f7f1e7]">
          <h2 className="display text-2xl font-semibold">Add your videos here</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-[#d9cdb8]">
            Send classroom clips, student wins, or a 30-second campus tour. We can embed YouTube or
            Instagram videos on this page. For now, message us on WhatsApp to share media.
          </p>
          <a href={site.whatsapp} target="_blank" rel="noreferrer" className="btn-gold mt-6">
            Send photos or videos
          </a>
        </div>
      </div>
    </div>
  );
}
