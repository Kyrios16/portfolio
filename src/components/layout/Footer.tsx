import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="border-t border-base-border py-8">
      <div className="section-shell flex flex-col items-center justify-between gap-3 text-center sm:flex-row sm:text-left">
        <p className="font-mono text-xs text-ink-faint">
          © {new Date().getFullYear()} {profile.name}. Built with Next.js &amp; Tailwind CSS.
        </p>
        <p className="font-mono text-xs text-ink-faint">Deployed on GitHub Pages</p>
      </div>
    </footer>
  );
}
