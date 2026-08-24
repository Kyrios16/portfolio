"use client";

import { useMemo, useState } from "react";
import { Github, ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { projects } from "@/data/projects";
import { Project } from "@/types";

const filters: { label: string; value: Project["category"] | "all" }[] = [
  { label: "All", value: "all" },
  { label: "Web", value: "web" },
  { label: "Backend", value: "backend" },
  { label: "DevOps", value: "devops" },
  { label: "Mobile", value: "mobile" },
];

export function Projects() {
  const [active, setActive] = useState<(typeof filters)[number]["value"]>("all");

  const visible = useMemo(
    () => (active === "all" ? projects : projects.filter((p) => p.category === active)),
    [active]
  );

  return (
    <section id="projects" className="border-t border-base-border py-24">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Projects"
          title="Systems I've built"
          description="Real systems shipped in production. Filter by area, or see the featured build below."
        />

        <div className="mb-10 flex flex-wrap gap-2" role="group" aria-label="Filter projects by category">
          {filters.map((f) => (
            <button
              key={f.value}
              type="button"
              onClick={() => setActive(f.value)}
              aria-pressed={active === f.value}
              className={`rounded-full border px-4 py-1.5 font-mono text-xs uppercase tracking-wide transition-colors ${
                active === f.value
                  ? "border-signal-amber bg-signal-amber/10 text-signal-amber"
                  : "border-base-border text-ink-muted hover:text-ink"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((project) => (
            <article
              key={project.title}
              className="group flex flex-col rounded-lg border border-base-border bg-base-surface p-6 transition-colors hover:border-signal-amber/50"
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-display text-lg font-semibold text-ink">{project.title}</h3>
                {project.featured && (
                  <span className="whitespace-nowrap rounded-full border border-signal-amber/40 bg-signal-amber/10 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wide text-signal-amber">
                    Featured
                  </span>
                )}
              </div>

              <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-muted">{project.description}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <Badge key={tech}>{tech}</Badge>
                ))}
              </div>

              <div className="mt-5 flex gap-4">
                {project.github ? (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-1.5 font-mono text-xs text-ink-muted hover:text-signal-amber"
                  >
                    <Github size={14} /> Code
                  </a>
                ) : (
                  <span className="font-mono text-[11px] text-ink-faint">Internal / proprietary</span>
                )}
                {project.liveDemo && (
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-1.5 font-mono text-xs text-ink-muted hover:text-signal-amber"
                  >
                    <ArrowUpRight size={14} /> Demo
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
