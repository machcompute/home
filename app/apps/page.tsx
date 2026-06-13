import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Apps — Mach Computing",
  description: "Applications built by Mach Computing.",
};

const NAV_LINKS = [
  { label: "About", href: "/#about" },
  { label: "Portfolio", href: "/#portfolio" },
  { label: "Blog", href: "/#blog" },
  { label: "Projects", href: "/#projects" },
  { label: "Apps", href: "/apps" },
];

type App = {
  name: string;
  description: string;
  url: string;
  tags: string[];
};

const APPS: App[] = [
  {
    name: "Finances",
    description:
      "Personal finance tracker. Log income and expenses, see trends and moving averages, OFX import/export.",
    url: "https://finances.machcomputing.com",
    tags: ["Next.js", "OFX", "CSV"],
  },
  {
    name: "Design",
    description:
      "Agentic design tool powered by local models. Describe what you want and iterate on a live canvas.",
    url: "https://design.machcomputing.com",
    tags: ["AI", "Agents", "Canvas"],
  },
];

export default function Apps() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-mc-gray/15">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/logo.png" alt="MACH COMPUTING" width={36} height={36} />
            <Image
              src="/text_logo.png"
              alt="MACH COMPUTING"
              width={160}
              height={20}
              className="hidden sm:block"
            />
          </Link>
          <div className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-mc-gray hover:text-mc-dark transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 pt-20 pb-12 lg:pt-32 lg:pb-16">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-mc-dark">
          <span className="text-mc-lavender">Apps</span>
        </h1>
        <p className="mt-6 text-lg text-mc-gray leading-relaxed max-w-xl">
          Applications I&apos;ve built and run. Every tool is client only. It
          runs entirely in your browser, with your data staying on your device.
        </p>
      </section>

      {/* Apps Grid */}
      <section className="pb-20 lg:pb-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {APPS.map((app) => (
              <a
                key={app.name}
                href={app.url}
                className="group flex flex-col p-6 rounded-2xl border border-mc-gray/15 bg-white hover:border-mc-mint/40 transition-colors"
              >
                <h3 className="text-lg font-semibold text-mc-dark group-hover:text-mc-lavender transition-colors">
                  {app.name}
                </h3>
                <p className="mt-3 text-sm text-mc-gray leading-relaxed">
                  {app.description}
                </p>
                <div className="mt-auto pt-5 flex flex-wrap gap-2">
                  {app.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-medium px-2.5 py-1 rounded-full bg-mc-lavender/15 text-mc-dark/70"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="mt-4 text-sm font-medium text-mc-dark group-hover:text-mc-mint transition-colors">
                  Open {app.name}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-mc-dark text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between gap-10">
            <div>
              <div className="flex items-center gap-3">
                <Image
                  src="/logo.png"
                  alt="MACH COMPUTING"
                  width={32}
                  height={32}
                />
                <span className="font-bold text-lg tracking-tight">
                  MACH COMPUTING
                </span>
              </div>
              <p className="mt-3 text-white/50 text-sm max-w-xs">
                Engineering high-performance computing solutions.
              </p>
            </div>
            <div className="flex gap-12">
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-white/40 mb-4">
                  Navigation
                </h4>
                <div className="flex flex-col gap-2">
                  {NAV_LINKS.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      className="text-sm text-white/60 hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-white/40 mb-4">
                  Connect
                </h4>
                <div className="flex flex-col gap-2">
                  <a
                    href="https://orcid.org/0009-0005-6728-3089"
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    ORCID
                  </a>
                  <a
                    href="https://github.com/LukasAfonso"
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    GitHub
                  </a>
                  <a
                    href="https://www.linkedin.com/in/lu%C3%ADs-carlos-casanova-afonso-8415521b2"
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    LinkedIn
                  </a>
                  <a
                    href="https://scholar.google.com/citations?user=BgSpSB0AAAAJ"
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    Google Scholar
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-6 border-t border-white/10 text-xs text-white/30">
            &copy; {new Date().getFullYear()} MACH COMPUTING. All rights
            reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
