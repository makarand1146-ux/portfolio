import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { achievements } from "@/lib/data";

export function Achievements() {
  return (
    <section id="achievements" className="py-20 md:py-28">
      <Container>
        <SectionHeading eyebrow="Achievements" title="Markers along the way." />

        <div className="grid gap-6 sm:grid-cols-3">
          {achievements.map((item, i) => (
            <Reveal key={item.id} delay={i * 0.08}>
              <div className="h-full rounded-xl border border-line-light p-6 dark:border-line-dark">
                <span className="font-mono text-xs text-amber">{item.year}</span>
                <h3 className="mt-3 font-display text-base font-medium leading-snug text-ink-text dark:text-paper-text">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-text-muted dark:text-paper-text-muted">
                  {item.detail}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
