import type { Metadata } from "next";
import Image from "next/image";
import { SectionHeading } from "@/components/SectionHeading";
import { SocialLinks } from "@/components/SocialLinks";
import { gallery } from "@/content/gallery";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Life at Success Star | Kids & Campus Gallery",
  description:
    "Photos from Success Star Training Center in Sharjah — kids learning, classrooms, KG room, and campus life.",
  alternates: { canonical: "/gallery" },
};

export default function GalleryPage() {
  return (
    <div className="section-space">
      <div className="container-page">
        <SectionHeading
          eyebrow="Life at Success Star"
          title="Kids, classrooms and campus energy"
          description="A brighter look at daily learning in Al Riqa — foundation years through secondary coaching."
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {gallery.map((item, index) => (
            <figure
              key={item.id}
              className={`relative overflow-hidden rounded-[1.5rem] shadow-[var(--shadow)] ${
                index === 0 || index === 6 ? "sm:col-span-2 sm:aspect-[16/9]" : "aspect-[4/3]"
              }`}
            >
              <Image
                src={item.image}
                alt={item.alt}
                fill
                className="photo-tilt object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy-deep/85 to-transparent p-4 text-sm text-white">
                <span className="text-xs font-bold uppercase tracking-[0.14em] text-gold">
                  {item.category}
                </span>
                <p className="mt-1 font-semibold">{item.title}</p>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-5 rounded-[1.5rem] bg-navy px-6 py-8 text-white sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="display text-2xl font-semibold">See more on social</h2>
            <p className="mt-2 text-sm text-white/75">
              Follow classroom moments and centre updates on Facebook, Instagram and LinkedIn.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <SocialLinks />
            <a href={site.whatsapp} target="_blank" rel="noreferrer" className="btn-gold !px-4 !py-2 text-sm">
              WhatsApp us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
