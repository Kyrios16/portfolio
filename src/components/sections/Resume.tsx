import { Download, Eye } from "lucide-react";
import { profile } from "@/data/profile";
import { withBasePath } from "@/lib/paths";

export function Resume() {
  return (
    <section className="border-t border-base-border py-24">
      <div className="section-shell">
        <div className="flex flex-col items-start justify-between gap-6 rounded-xl border border-base-border bg-base-surface p-8 sm:flex-row sm:items-center sm:p-10">
          <div>
            <p className="eyebrow mb-3">Resume</p>
            <h2 className="font-display text-2xl font-semibold text-ink sm:text-3xl">
              Want the short version?
            </h2>
            <p className="mt-3 max-w-lg text-sm leading-relaxed text-ink-muted">
              A one-page summary of my experience, skills, and impact — the same information on this page,
              formatted for a quick read.
            </p>
          </div>

          <div className="flex flex-shrink-0 gap-3">
            <a
              href={withBasePath(profile.resumeUrl)}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 rounded-md border border-base-border px-5 py-3 font-mono text-sm text-ink hover:border-signal-amber hover:text-signal-amber"
            >
              <Eye size={16} /> View
            </a>
            <a
              href={withBasePath(profile.resumeUrl)}
              download
              className="inline-flex items-center gap-2 rounded-md bg-signal-amber px-5 py-3 font-mono text-sm font-medium text-base-bg"
            >
              <Download size={16} /> Download
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
