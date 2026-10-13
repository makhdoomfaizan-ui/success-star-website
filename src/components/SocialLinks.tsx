import { site } from "@/lib/site";

const links = [
  { href: site.social.facebook, label: "Facebook", short: "f" },
  { href: site.social.instagram, label: "Instagram", short: "ig" },
  { href: site.social.linkedin, label: "LinkedIn", short: "in" },
] as const;

type Props = {
  tone?: "light" | "dark";
};

export function SocialLinks({ tone = "light" }: Props) {
  return (
    <div className="flex items-center gap-2">
      {links.map((link) => (
        <a
          key={link.href}
          href={link.href}
          target="_blank"
          rel="noreferrer"
          aria-label={link.label}
          className={
            tone === "light"
              ? "social-chip text-sm font-bold uppercase text-white"
              : "inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--line)] bg-white text-sm font-bold uppercase text-navy shadow-sm transition hover:-translate-y-0.5 hover:border-gold"
          }
        >
          {link.short}
        </a>
      ))}
    </div>
  );
}
