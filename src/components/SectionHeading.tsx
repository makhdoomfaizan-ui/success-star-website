type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  light?: boolean;
};

export function SectionHeading({ eyebrow, title, description, light }: Props) {
  return (
    <div className={`max-w-2xl ${light ? "text-[#f7f1e7]" : "text-ink"}`}>
      {eyebrow ? (
        <p
          className={`text-xs font-semibold uppercase tracking-[0.2em] ${
            light ? "text-gold" : "text-sea"
          }`}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2 className="display reveal-line mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className={`mt-5 text-base leading-7 ${light ? "text-[#ddd2c2]" : "text-ink-soft"}`}>
          {description}
        </p>
      ) : null}
    </div>
  );
}
