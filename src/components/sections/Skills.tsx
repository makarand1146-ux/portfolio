import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { skillGroups } from "@/lib/data";

export function Skills() {
  return (
    <section id="skills" className="py-20 md:py-28">
      <Container>
        <SectionHeading eyebrow="Skills" title="Tools I reach for, by category." />

        <div className="grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => (
            <Reveal key={group.id} delay={i * 0.06}>
              <p className="font-mono text-xs uppercase tracking-widest2 text-ink-text-muted dark:text-paper-text-muted">
                {group.label}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <Badge key={skill} tone={i % 2 === 0 ? "signal" : "amber"}>
                    {skill}
                  </Badge>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
