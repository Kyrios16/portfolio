import { SectionHeading } from "@/components/ui/SectionHeading";
import { profile } from "@/data/profile";

export function About() {
  return (
    <section id="about" className="py-24">
      <div className="section-shell">
        <SectionHeading eyebrow="About" title="Engineering with a compliance mindset" />

        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr]">
          <div className="space-y-5 text-base leading-relaxed text-ink-muted">
            {profile.bio.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}

            <div className="mt-8 rounded-lg border border-base-border bg-base-surface p-5">
              <p className="eyebrow mb-2">Currently</p>
              <p className="text-sm text-ink">{profile.currentFocus}</p>
            </div>

            <div className="rounded-lg border border-base-border bg-base-surface p-5">
              <p className="eyebrow mb-2">Philosophy</p>
              <p className="text-sm text-ink">{profile.philosophy}</p>
            </div>
          </div>

          <div>
            <p className="eyebrow mb-4">Strengths</p>
            <ul className="space-y-3">
              {profile.strengths.map((strength, i) => (
                <li
                  key={strength}
                  className="flex items-center gap-3 rounded-md border border-base-border bg-base-surface px-4 py-3"
                >
                  <span className="font-mono text-xs text-signal-amber">{String(i + 1).padStart(2, "0")}</span>
                  <span className="text-sm text-ink">{strength}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 flex gap-6 border-t border-base-border pt-6">
              <div>
                <p className="font-display text-2xl font-semibold text-ink">{profile.yearsExperience}</p>
                <p className="font-mono text-xs text-ink-faint">Years experience</p>
              </div>
              <div>
                <p className="font-display text-2xl font-semibold text-ink">100K+</p>
                <p className="font-mono text-xs text-ink-faint">Daily transactions</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
