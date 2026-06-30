import { Container } from "@/components/ui/Container";
import { ledgerStats } from "@/lib/data";

export function LedgerStrip() {
  // Duplicate the stat list so the marquee can loop seamlessly at -50%.
  const loopStats = [...ledgerStats, ...ledgerStats];

  return (
    <div className="border-y border-line-light bg-paper-raised dark:border-line-dark dark:bg-ink-raised">
      <Container className="!max-w-none !px-0">
        <div className="group relative overflow-hidden py-4">
          <div className="flex w-max animate-ticker-scroll gap-10 group-hover:[animation-play-state:paused] motion-reduce:animate-none motion-reduce:flex-wrap motion-reduce:justify-center motion-reduce:gap-6">
            {loopStats.map((stat, i) => (
              <div key={`${stat.label}-${i}`} className="flex items-center gap-3 whitespace-nowrap px-2">
                <span className="font-mono text-[11px] uppercase tracking-widest2 text-ink-text-muted dark:text-paper-text-muted">
                  {stat.label}
                </span>
                <span className="font-mono text-sm text-ink-text dark:text-paper-text">
                  {stat.value}
                </span>
                <span className="ml-7 h-3 w-px bg-line-light dark:bg-line-dark" aria-hidden="true" />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
