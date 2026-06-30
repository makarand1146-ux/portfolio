import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-12 max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      <span className="font-mono text-xs uppercase tracking-widest2 text-signal">
        {eyebrow}
      </span>
      <h2 className="mt-3 font-display text-3xl font-medium tracking-tightest text-ink-text dark:text-paper-text md:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-relaxed text-ink-text-muted dark:text-paper-text-muted">
          {description}
        </p>
      ) : null}
    </div>
  );
}
