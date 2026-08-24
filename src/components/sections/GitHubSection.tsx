import { Github, GitFork, Star } from "lucide-react";
import { profile } from "@/data/profile";

// Static placeholders — safe for GitHub Pages since there's no server to hide
// an API token behind. Replace the numbers once you wire up your real profile,
// or swap this component for a client fetch to the public GitHub REST API
// (unauthenticated, rate-limited) if you want it live.
const stats = [
  { label: "Public Repos", value: "—" },
  { label: "Contributions (last yr)", value: "—" },
  { label: "Followers", value: "—" },
];

// Placeholder layout only — replace with your real pinned repositories.
const pinned = [
  { name: "your-repo-one", description: "Short description of what this project does.", stars: 0 },
  { name: "your-repo-two", description: "Short description of what this project does.", stars: 0 },
  { name: "your-repo-three", description: "Short description of what this project does.", stars: 0 },
];

export function GitHubSection() {
  return (
    <section className="border-t border-base-border py-24">
      <div className="section-shell">
        <div className="mb-10 flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="eyebrow mb-3">GitHub</p>
            <h2 className="font-display text-3xl font-semibold text-ink sm:text-4xl">Open-source activity</h2>
            <p className="mt-2 font-mono text-xs text-ink-faint">
              Placeholder layout — replace with your real stats and pinned repos in{" "}
              <code>src/components/sections/GitHubSection.tsx</code>
            </p>
          </div>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-2 rounded-md border border-base-border px-4 py-2 font-mono text-xs text-ink hover:border-signal-amber hover:text-signal-amber"
          >
            <Github size={16} /> View Profile
          </a>
        </div>

        <div className="mb-8 grid grid-cols-3 gap-4">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-lg border border-base-border bg-base-surface p-5 text-center">
              <p className="font-display text-2xl font-semibold text-ink sm:text-3xl">{stat.value}</p>
              <p className="mt-1 font-mono text-[11px] uppercase tracking-wide text-ink-faint">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          {pinned.map((repo) => (
            <div key={repo.name} className="rounded-lg border border-base-border bg-base-surface p-5">
              <div className="flex items-center justify-between">
                <p className="font-mono text-sm text-ink">{repo.name}</p>
                <GitFork size={14} className="text-ink-faint" />
              </div>
              <p className="mt-2 text-xs leading-relaxed text-ink-muted">{repo.description}</p>
              <p className="mt-3 flex items-center gap-1 font-mono text-xs text-signal-amber">
                <Star size={12} /> {repo.stars}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
