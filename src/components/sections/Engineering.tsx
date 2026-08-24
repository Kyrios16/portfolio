import { SectionHeading } from "@/components/ui/SectionHeading";

const steps = [
  { title: "Understand the problem", detail: "Talk to stakeholders, read the compliance requirements twice, and confirm what 'done' actually means." },
  { title: "Design the solution", detail: "Sketch service boundaries and data contracts before writing code — especially where money or PII moves." },
  { title: "Build scalable architecture", detail: "Favor explicit, testable service/repository layers over shortcuts that are hard to reason about at scale." },
  { title: "Test and validate", detail: "Pest/PHPUnit coverage on critical paths, plus integration tests against real partner contracts." },
  { title: "Monitor", detail: "Ship with Sentry and structured logs from day one — silent failures are the expensive kind." },
  { title: "Optimize", detail: "Profile before optimizing; fix the bottleneck that's actually there, not the one that looks interesting." },
  { title: "Continuously improve", detail: "Retro on incidents, tighten CI gates, and fold lessons back into the next design." },
];

export function Engineering() {
  return (
    <section className="border-t border-base-border py-24">
      <div className="section-shell">
        <SectionHeading eyebrow="Process" title="How I build software" />

        <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <li key={step.title} className="rounded-lg border border-base-border bg-base-surface p-5">
              <span className="font-mono text-xs text-signal-amber">{String(i + 1).padStart(2, "0")}</span>
              <p className="mt-2 font-display text-sm font-semibold text-ink">{step.title}</p>
              <p className="mt-2 text-xs leading-relaxed text-ink-muted">{step.detail}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
