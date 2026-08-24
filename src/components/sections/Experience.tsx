import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { experience } from "@/data/experience";

export function Experience() {
  return (
    <section id="experience" className="border-t border-base-border py-24">
      <div className="section-shell">
        <SectionHeading eyebrow="Experience" title="Where I've worked" />

        <div className="relative space-y-10 border-l border-base-border pl-8 sm:pl-10">
          {experience.map((job) => (
            <article key={job.company} className="relative">
              <span className="absolute -left-[calc(2rem+5px)] top-1.5 h-2.5 w-2.5 rounded-full bg-signal-amber sm:-left-[calc(2.5rem+5px)]" />

              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="font-display text-xl font-semibold text-ink">{job.position}</h3>
                <span className="font-mono text-xs text-ink-faint">{job.period}</span>
              </div>
              <p className="mt-1 font-mono text-sm text-signal-amber">
                {job.company}
                {job.location ? ` · ${job.location}` : ""}
              </p>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-ink-muted">{job.description}</p>

              <ul className="mt-4 space-y-2">
                {job.achievements.map((achievement) => (
                  <li key={achievement} className="flex gap-2.5 text-sm leading-relaxed text-ink-muted">
                    <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-ink-faint" />
                    {achievement}
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex flex-wrap gap-2">
                {job.technologies.map((tech) => (
                  <Badge key={tech}>{tech}</Badge>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
