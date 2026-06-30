import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
  tone?: "neutral" | "signal" | "amber";
}

export function Badge({ children, className, tone = "neutral" }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1 font-mono text-[11px] tracking-wide",
        tone === "neutral" &&
          "border-line-light bg-paper-raised text-ink-text-muted dark:border-line-dark dark:bg-ink-raised dark:text-paper-text-muted",
        tone === "signal" && "border-signal/30 bg-signal-tint text-signal-dim dark:bg-signal/10 dark:text-signal",
        tone === "amber" && "border-amber/30 bg-amber/10 text-amber-dim dark:text-amber",
        className
      )}
    >
      {children}
    </span>
  );
}
