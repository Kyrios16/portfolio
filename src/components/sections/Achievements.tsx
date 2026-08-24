import { SectionHeading } from "@/components/ui/SectionHeading";
import { achievements } from "@/data/achievements";

export function Achievements() {
  return (
    <section id="achievements" className="border-t border-base-border py-24">
      <div className="section-shell">
        <SectionHeading eyebrow="Impact" title="Achievements by the numbers" />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {achievements.map((item) => (
            <div key={item.label} className="rounded-lg border border-base-border bg-base-surface p-6">
              <p className="font-display text-3xl font-semibold text-signal-amber">{item.value}</p>
              <p className="mt-2 font-mono text-xs uppercase tracking-wide text-ink">{item.label}</p>
              <p className="mt-2 text-xs leading-relaxed text-ink-muted">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
