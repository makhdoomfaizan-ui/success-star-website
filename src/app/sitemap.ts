import type { MetadataRoute } from "next";
import { posts } from "@/content/blog";
import { courses } from "@/content/courses";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    "",
    "/courses",
    "/admissions",
    "/faculty",
    "/gallery",
    "/blog",
    "/about",
    "/contact",
  ].map((path) => ({
    url: `${site.url}${path}`,
    lastModified: "2026-10-11",
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const coursePages = courses.map((course) => ({
    url: `${site.url}/courses/${course.slug}`,
    lastModified: "2026-10-11",
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  const blogPages = posts.map((post) => ({
    url: `${site.url}/blog/${post.slug}`,
    lastModified: post.date,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...coursePages, ...blogPages];
}
