type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  light?: boolean;
};

export function SectionHeading({ eyebrow, title, description, light }: Props) {
  return (
    <div className={`max-w-2xl ${light ? "text-white" : "text-ink"}`}>
      {eyebrow ? (
        <p
          className={`text-xs font-bold uppercase tracking-[0.2em] ${
            light ? "text-gold" : "text-blue"
          }`}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2 className="display mt-3 text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className={`mt-5 text-base leading-7 ${light ? "text-white/80" : "text-ink-soft"}`}>
          {description}
        </p>
      ) : null}
    </div>
  );
}
