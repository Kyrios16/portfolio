import { ArrowDown, Download, Github, Linkedin } from "lucide-react";
import { profile } from "@/data/profile";
import { withBasePath } from "@/lib/paths";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="pointer-events-none absolute inset-0 bg-dot-grid opacity-30 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,black,transparent)]" />

      <div className="section-shell relative grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="animate-fadeUp">
          <p className="eyebrow mb-5">Software Engineer · Yangon, Myanmar</p>
          <h1 className="font-display text-4xl font-semibold leading-tight text-ink sm:text-5xl lg:text-6xl">
            {profile.name}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-muted">{profile.tagline}</p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-md bg-signal-amber px-5 py-3 font-mono text-sm font-medium text-base-bg transition-transform hover:-translate-y-0.5"
            >
              View My Work
              <ArrowDown size={16} />
            </a>
            <a
              href={withBasePath(profile.resumeUrl)}
              download
              className="inline-flex items-center gap-2 rounded-md border border-base-border px-5 py-3 font-mono text-sm text-ink transition-colors hover:border-signal-amber hover:text-signal-amber"
            >
              Download Resume
              <Download size={16} />
            </a>
          </div>

          <div className="mt-8 flex items-center gap-5">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="GitHub profile"
              className="text-ink-muted transition-colors hover:text-ink"
            >
              <Github size={20} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="LinkedIn profile"
              className="text-ink-muted transition-colors hover:text-ink"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>

        <div className="animate-fadeUp [animation-delay:150ms]">
          <TerminalCard />
        </div>
      </div>
    </section>
  );
}

const terminalLines: { text: string; tone?: "teal" | "faint" }[] = [
  { text: "POST /v1/partners/settlement" },
  { text: "Authorization: HMAC-SHA256 ••••••••", tone: "faint" },
  { text: "Content-Type: application/json", tone: "faint" },
  { text: "" },
  { text: "{" },
  { text: '  "partner": "grab",' },
  { text: '  "currency": "MMK" -> "SGD",' },
  { text: '  "kyc_status": "verified",', tone: "teal" },
  { text: '  "fraud_check": "passed"', tone: "teal" },
  { text: "}" },
  { text: "" },
  { text: "200 OK · settled in 214ms", tone: "teal" },
];

function TerminalCard() {
  return (
    <div className="overflow-hidden rounded-lg border border-base-border bg-base-surface shadow-2xl shadow-black/40">
      <div className="flex items-center gap-2 border-b border-base-border bg-base-surface2 px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-signal-red/70" />
        <span className="h-3 w-3 rounded-full bg-signal-amber/70" />
        <span className="h-3 w-3 rounded-full bg-signal-teal/70" />
        <span className="ml-3 font-mono text-xs text-ink-faint">gateway.request.log</span>
      </div>
      <pre className="overflow-x-auto p-5 font-mono text-[13px] leading-relaxed text-ink-muted">
        <code>
          {terminalLines.map((line, i) => (
            <div
              key={i}
              className={
                line.tone === "teal" ? "text-signal-teal" : line.tone === "faint" ? "text-ink-faint" : undefined
              }
            >
              {line.text || "\u00A0"}
            </div>
          ))}
          <span className="mt-1 inline-block h-4 w-2 animate-blink bg-signal-amber align-middle" />
        </code>
      </pre>
    </div>
  );
}
