import { Reveal } from "@/components/ui/Reveal";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const stages = [
  {
    label: "Where I started",
    body: "Mechanical engineering at IIT Ropar — shafts, tolerances, manufacturing processes. The kind of work where a wrong number means a part that doesn't fit.",
  },
  {
    label: "Where I went next",
    body: "I started treating spreadsheets the way I treated CAD files: as something to model carefully, not just fill in. SQL and Python followed naturally from that.",
  },
  {
    label: "What I do now",
    body: "I build the analytics and product layer that sits on top of operations — credit risk models, sales dashboards, and the internal platform running my own company, IRVIS.",
  },
];

export function About() {
  return (
    <section id="about" className="py-20 md:py-28">
      <Container>
        <SectionHeading
          eyebrow="About"
          title="A mechanical engineer who ended up living in SQL."
          description="Not a pivot away from engineering — an extension of it. The same discipline that goes into tolerancing a shaft goes into validating a risk model."
        />

        <div className="grid gap-8 md:grid-cols-3">
          {stages.map((stage, i) => (
            <Reveal key={stage.label} delay={i * 0.08}>
              <div className="border-l border-line-light pl-6 dark:border-line-dark">
                <p className="font-mono text-xs uppercase tracking-widest2 text-signal">
                  {stage.label}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-ink-text-muted dark:text-paper-text-muted">
                  {stage.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
