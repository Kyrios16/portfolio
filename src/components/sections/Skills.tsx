import { SectionHeading } from "@/components/ui/SectionHeading";
import { skills } from "@/data/skills";

export function Skills() {
  return (
    <section id="skills" className="border-t border-base-border py-24">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Skills"
          title="Technology stack"
          description="Tools and languages I reach for daily, organized by where they sit in the stack."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((group) => (
            <div key={group.category} className="rounded-lg border border-base-border bg-base-surface p-5">
              <h3 className="font-mono text-xs uppercase tracking-wide text-signal-amber">{group.category}</h3>
              <ul className="mt-4 space-y-2.5">
                {group.items.map((item) => (
                  <li key={item} className="text-sm text-ink-muted">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
