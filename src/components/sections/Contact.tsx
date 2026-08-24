"use client";

import { FormEvent, useState } from "react";
import { Github, Linkedin, Mail, MapPin, Send } from "lucide-react";
import { profile } from "@/data/profile";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio inquiry from ${name || "a visitor"}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  }

  return (
    <section id="contact" className="border-t border-base-border py-24">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Contact"
          title="Let's talk"
          description="Open to new opportunities and interesting engineering problems. The form below opens your email client — no data is sent to a server."
        />

        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          <ul className="space-y-4">
            <li>
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-3 rounded-lg border border-base-border bg-base-surface p-4 text-sm text-ink hover:border-signal-amber"
              >
                <Mail size={18} className="text-signal-amber" />
                {profile.email}
              </a>
            </li>
            <li>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer noopener"
                className="flex items-center gap-3 rounded-lg border border-base-border bg-base-surface p-4 text-sm text-ink hover:border-signal-amber"
              >
                <Github size={18} className="text-signal-amber" />
                GitHub
              </a>
            </li>
            <li>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                className="flex items-center gap-3 rounded-lg border border-base-border bg-base-surface p-4 text-sm text-ink hover:border-signal-amber"
              >
                <Linkedin size={18} className="text-signal-amber" />
                LinkedIn
              </a>
            </li>
            <li className="flex items-center gap-3 rounded-lg border border-base-border bg-base-surface p-4 text-sm text-ink">
              <MapPin size={18} className="text-signal-amber" />
              {profile.location}
            </li>
          </ul>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="mb-1.5 block font-mono text-xs uppercase tracking-wide text-ink-muted">
                Name
              </label>
              <input
                id="name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded-md border border-base-border bg-base-surface px-4 py-2.5 text-sm text-ink outline-none focus:border-signal-amber"
              />
            </div>
            <div>
              <label htmlFor="email" className="mb-1.5 block font-mono text-xs uppercase tracking-wide text-ink-muted">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-md border border-base-border bg-base-surface px-4 py-2.5 text-sm text-ink outline-none focus:border-signal-amber"
              />
            </div>
            <div>
              <label htmlFor="message" className="mb-1.5 block font-mono text-xs uppercase tracking-wide text-ink-muted">
                Message
              </label>
              <textarea
                id="message"
                required
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full rounded-md border border-base-border bg-base-surface px-4 py-2.5 text-sm text-ink outline-none focus:border-signal-amber"
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-md bg-signal-amber px-5 py-3 font-mono text-sm font-medium text-base-bg"
            >
              Send Message <Send size={16} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
