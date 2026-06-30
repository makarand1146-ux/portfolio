import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { experience } from "@/lib/data";

const kindLabel: Record<string, string> = {
  founder: "Founder",
  work: "Internship",
  leadership: "Leadership",
};

export function Experience() {
  return (
    <section id="experience" className="py-20 md:py-28">
      <Container>
        <SectionHeading
          eyebrow="Experience"
          title="From the shop floor to founding a company."
        />

        <ol className="relative space-y-10 border-l border-line-light pl-8 dark:border-line-dark">
          {experience.map((item, i) => (
            <Reveal key={item.id} as="li" delay={i * 0.07} className="relative">
              <span
                className="absolute -left-[calc(2rem+5px)] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-paper bg-signal dark:border-ink"
                aria-hidden="true"
              />
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-display text-lg font-medium text-ink-text dark:text-paper-text">
                  {item.role}
                </h3>
                <span className="font-mono text-xs text-ink-text-muted dark:text-paper-text-muted">
                  {item.period}
                </span>
              </div>
              <p className="mt-1 text-sm text-ink-text-muted dark:text-paper-text-muted">
                {item.org} · {item.location} ·{" "}
                <span className="text-signal">{kindLabel[item.kind]}</span>
              </p>
              <ul className="mt-3 space-y-1.5">
                {item.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="flex gap-2.5 text-sm leading-relaxed text-ink-text-muted dark:text-paper-text-muted"
                  >
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-ink-text-muted/60 dark:bg-paper-text-muted/60" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  );
}
