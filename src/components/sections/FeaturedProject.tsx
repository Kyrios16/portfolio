import { ArrowUpRight, Github } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { projects } from "@/data/projects";

export function FeaturedProject() {
  const project = projects.find((p) => p.featured) ?? projects[0];
  if (!project) return null;

  return (
    <section className="border-t border-base-border py-24">
      <div className="section-shell">
        <p className="eyebrow mb-3">Featured Build</p>

        <div className="grid gap-10 overflow-hidden rounded-xl border border-base-border bg-base-surface lg:grid-cols-2">
          <div className="relative flex aspect-video items-center justify-center bg-gradient-to-br from-base-surface2 to-base-bg lg:aspect-auto">
            <div className="bg-dot-grid absolute inset-0 opacity-20" />
            <span className="relative font-display text-4xl font-semibold text-base-border">API</span>
          </div>

          <div className="flex flex-col justify-center p-8 sm:p-10">
            <h3 className="font-display text-2xl font-semibold text-ink sm:text-3xl">{project.title}</h3>

            <div className="mt-6 space-y-4">
              <div>
                <p className="font-mono text-xs uppercase tracking-wide text-signal-amber">Problem</p>
                <p className="mt-1 text-sm leading-relaxed text-ink-muted">
                  15+ partners each needed a bespoke, secure integration path, which slowed onboarding and
                  created inconsistent security guarantees across partner traffic.
                </p>
              </div>
              <div>
                <p className="font-mono text-xs uppercase tracking-wide text-signal-amber">Solution</p>
                <p className="mt-1 text-sm leading-relaxed text-ink-muted">{project.description}</p>
              </div>
              <div>
                <p className="font-mono text-xs uppercase tracking-wide text-signal-amber">Result</p>
                <p className="mt-1 text-sm leading-relaxed text-ink-muted">
                  Onboarding time for new partners dropped by roughly 30%, with a consistent HMAC-signed
                  request contract across every integration, including Grab and FoodPanda.
                </p>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <Badge key={tech}>{tech}</Badge>
              ))}
            </div>

            <div className="mt-8 flex gap-4">
              {project.github ? (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-2 font-mono text-sm text-ink hover:text-signal-amber"
                >
                  <Github size={16} /> Source
                </a>
              ) : (
                <span className="font-mono text-xs text-ink-faint">Proprietary — internal system</span>
              )}
              {project.liveDemo && (
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-2 font-mono text-sm text-ink hover:text-signal-amber"
                >
                  <ArrowUpRight size={16} /> Live Demo
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
