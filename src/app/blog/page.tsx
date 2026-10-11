import type { Metadata } from "next";
import Link from "next/link";
import { SectionHeading } from "@/components/SectionHeading";
import { posts } from "@/content/blog";

export const metadata: Metadata = {
  title: "Education Blog Sharjah",
  description:
    "Parent guides, exam tips, and skills articles from Success Star Training Center to help Sharjah families choose better learning paths.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  return (
    <div className="section-space">
      <div className="container-page">
        <SectionHeading
          eyebrow="Blog"
          title="Guides that attract Sharjah search traffic"
          description="These posts target real parent and learner searches. New articles can be added in the content file without rebuilding the whole site design."
        />

        <div className="mt-12 space-y-8">
          {posts.map((post) => (
            <article key={post.slug} className="border-t border-[var(--line)] pt-8">
              <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.16em] text-sea">
                <span>{post.category}</span>
                <span aria-hidden>•</span>
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString("en-AE", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </time>
              </div>
              <h2 className="display mt-3 text-3xl font-semibold tracking-tight">
                <Link href={`/blog/${post.slug}`}>{post.title}</Link>
              </h2>
              <p className="mt-3 max-w-3xl text-sm leading-7 text-ink-soft">{post.excerpt}</p>
              <Link
                href={`/blog/${post.slug}`}
                className="mt-4 inline-flex text-sm font-semibold underline decoration-gold underline-offset-4"
              >
                Read article
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
