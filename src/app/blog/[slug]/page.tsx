import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPost, posts } from "@/content/blog";
import { site } from "@/lib/site";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    keywords: post.keywords,
    alternates: { canonical: `/blog/${post.slug}` },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <article className="section-space">
      <div className="container-page max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sea">
          {post.category}
        </p>
        <h1 className="display mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
          {post.title}
        </h1>
        <p className="mt-4 text-sm text-ink-soft">
          {new Date(post.date).toLocaleDateString("en-AE", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </p>
        <p className="mt-6 text-lg leading-8 text-ink-soft">{post.excerpt}</p>
        <div className="mt-10 space-y-5">
          {post.content.map((paragraph) => (
            <p key={paragraph} className="text-base leading-8 text-ink-soft">
              {paragraph}
            </p>
          ))}
        </div>
        <div className="mt-12 rounded-[1.5rem] bg-paper-deep px-6 py-8">
          <h2 className="display text-2xl font-semibold">Ready to talk about a course?</h2>
          <p className="mt-3 text-sm leading-7 text-ink-soft">
            Message Success Star on WhatsApp and we will help you choose the right programme in Sharjah.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <a href={site.whatsapp} target="_blank" rel="noreferrer" className="btn-gold">
              WhatsApp enquire
            </a>
            <Link href="/courses" className="btn-primary">
              Browse courses
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
