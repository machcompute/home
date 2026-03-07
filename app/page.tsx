import Image from "next/image";

const NAV_LINKS = [
  { label: "Portfolio", href: "https://portfolio.machcomputing.com" },
  { label: "Blog", href: "#blog" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
];

function GeometricGrid() {
  return (
    <div className="grid grid-cols-3 gap-2 w-full max-w-xs sm:max-w-sm lg:max-w-md aspect-square">
      {/* Row 1 */}
      <div className="aspect-square overflow-hidden rounded-2xl">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <rect x="0" y="0" width="100" height="100" rx="16" fill="#2E282A" />
        </svg>
      </div>
      <div className="aspect-square overflow-hidden flex items-center justify-center">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <rect
            x="50"
            y="50"
            width="36"
            height="36"
            rx="4"
            transform="rotate(45 50 50)"
            fill="#DEEFB7"
          />
        </svg>
      </div>
      <div className="aspect-square overflow-hidden">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <path d="M100,0 A100,100 0 0,1 0,100 L100,100 Z" fill="#98DFAF" />
        </svg>
      </div>

      {/* Row 2 */}
      <div className="aspect-square overflow-hidden flex items-center justify-center">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <rect
            x="8"
            y="8"
            width="84"
            height="84"
            rx="4"
            fill="none"
            stroke="#B8B3E9"
            strokeWidth="8"
          />
        </svg>
      </div>
      <div className="aspect-square overflow-hidden flex items-center justify-center">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <circle cx="50" cy="50" r="46" fill="#8A8D91" />
        </svg>
      </div>
      <div className="aspect-square overflow-hidden">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <path d="M0,0 L100,0 L100,100 A100,100 0 0,0 0,0 Z" fill="#98DFAF" />
        </svg>
      </div>

      {/* Row 3 */}
      <div className="aspect-square overflow-hidden rounded-full">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <ellipse cx="50" cy="50" rx="50" ry="50" fill="#B8B3E9" />
        </svg>
      </div>
      <div className="aspect-square overflow-hidden flex items-center justify-center">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <polygon points="50,10 90,90 10,90" fill="#8A8D91" />
        </svg>
      </div>
      <div className="aspect-square overflow-hidden rounded-full">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <ellipse cx="50" cy="50" rx="50" ry="50" fill="#B8B3E9" />
        </svg>
      </div>
    </div>
  );
}

const BLOG_POSTS = [
  {
    date: "Feb 2026",
    title: "Why We Moved to Bare Metal",
    excerpt:
      "The surprising economics and performance gains of leaving the cloud for dedicated infrastructure.",
  },
  {
    date: "Jan 2026",
    title: "Building a Custom Scheduler in Rust",
    excerpt:
      "Lessons learned from writing a task scheduler that handles 10M jobs per day with zero downtime.",
  },
  {
    date: "Dec 2025",
    title: "The Case for Simplicity in System Design",
    excerpt:
      "How removing layers of abstraction led to a 40x performance improvement in our core pipeline.",
  },
];

const PROJECTS = [
  {
    name: "mc-bench",
    description:
      "Open-source benchmarking suite for comparing compute performance across cloud providers and hardware configs.",
    stack: ["Rust", "Python", "Docker"],
    link: "#",
  },
  {
    name: "lattice",
    description:
      "Lightweight service mesh for edge computing environments with minimal resource overhead.",
    stack: ["Go", "eBPF", "Linux"],
    link: "#",
  },
  {
    name: "sigil",
    description:
      "Cryptographic signing library optimized for embedded systems and IoT devices.",
    stack: ["C", "Rust", "WASM"],
    link: "#",
  },
];

const SKILLS = [
  "Rust",
  "Go",
  "TypeScript",
  "Python",
  "C/C++",
  "AWS",
  "Kubernetes",
  "Terraform",
  "Linux",
  "Distributed Systems",
  "System Design",
  "Performance Engineering",
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-mc-gray/15">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="MACH COMPUTING"
              width={36}
              height={36}
            />
            <Image
              src="/text_logo.png"
              alt="MACH COMPUTING"
              width={160}
              height={20}
              className="hidden sm:block"
            />
          </a>
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
      <section className="max-w-7xl mx-auto px-6 pt-20 pb-16 lg:pt-32 lg:pb-28">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="flex-1 max-w-xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-mc-dark">
              Engineering At{" "}
              <span className="text-mc-lavender">Mach</span>{" "}
              <span className="text-mc-mint">Speed</span>
            </h1>
            <p className="mt-6 text-lg text-mc-gray leading-relaxed max-w-lg">
              CS PhD student exploring the intersection of systems and
              performance. I like building things that are fast, elegant,
              and actually work.
            </p>
            <div className="mt-8">
              <a
                href="https://portfolio.machcomputing.com"
                className="inline-flex items-center px-6 py-3 rounded-full bg-mc-dark text-white font-medium text-sm hover:bg-mc-dark/85 transition-colors"
              >
                View Portfolio
              </a>
            </div>
          </div>
          <div className="flex-1 flex justify-center lg:justify-end">
            <GeometricGrid />
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 lg:py-28 bg-mc-dark/[0.02]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <div className="flex-1 max-w-xl">
              <h2 className="text-3xl sm:text-4xl font-bold text-mc-dark tracking-tight">
                Portfolio
              </h2>
              <p className="mt-4 text-lg text-mc-gray leading-relaxed">
                A collection of work spanning systems engineering, web
                development, and research projects from my master&apos;s and
                beyond.
              </p>
              <a
                href="https://portfolio.machcomputing.com"
                className="mt-8 inline-flex items-center px-6 py-3 rounded-full bg-mc-dark text-white font-medium text-sm hover:bg-mc-dark/85 transition-colors"
              >
                Browse Portfolio &rarr;
              </a>
            </div>
            <div className="flex-1 flex justify-center lg:justify-end">
              <div className="w-full max-w-md rounded-xl border border-mc-gray/20 bg-white shadow-lg overflow-hidden">
                {/* Browser chrome */}
                <div className="flex items-center gap-2 px-4 py-3 bg-mc-dark/[0.03] border-b border-mc-gray/15">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-mc-dark/15" />
                    <div className="w-3 h-3 rounded-full bg-mc-dark/15" />
                    <div className="w-3 h-3 rounded-full bg-mc-dark/15" />
                  </div>
                  <div className="flex-1 mx-2 px-3 py-1 rounded-md bg-white border border-mc-gray/15 text-xs text-mc-gray font-mono truncate">
                    portfolio.machcomputing.com
                  </div>
                </div>
                {/* Page content mockup */}
                <div className="p-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-mc-lavender/30" />
                    <div className="h-3 w-32 rounded-full bg-mc-dark/10" />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="aspect-[4/3] rounded-lg bg-mc-mint/20" />
                    <div className="aspect-[4/3] rounded-lg bg-mc-lavender/20" />
                    <div className="aspect-[4/3] rounded-lg bg-mc-lime/25" />
                    <div className="aspect-[4/3] rounded-lg bg-mc-gray/10" />
                  </div>
                  <div className="space-y-2 pt-1">
                    <div className="h-2 w-full rounded-full bg-mc-dark/5" />
                    <div className="h-2 w-3/4 rounded-full bg-mc-dark/5" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-mc-dark tracking-tight">
            Blog
          </h2>
          <p className="mt-3 text-mc-gray text-lg max-w-2xl">
            Thoughts on engineering, infrastructure, and building systems that
            last.
          </p>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {BLOG_POSTS.map((post) => (
              <a
                key={post.title}
                href="#"
                className="group block p-6 rounded-2xl border border-mc-gray/15 hover:border-mc-lavender/50 transition-colors"
              >
                <span className="text-xs font-medium text-mc-mint uppercase tracking-wider">
                  {post.date}
                </span>
                <h3 className="mt-3 text-lg font-semibold text-mc-dark group-hover:text-mc-lavender transition-colors leading-snug">
                  {post.title}
                </h3>
                <p className="mt-2 text-sm text-mc-gray leading-relaxed">
                  {post.excerpt}
                </p>
                <span className="mt-4 inline-block text-sm font-medium text-mc-dark/60 group-hover:text-mc-lavender transition-colors">
                  Read more &rarr;
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 lg:py-28 bg-mc-dark/[0.02]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-mc-dark tracking-tight">
            Projects
          </h2>
          <p className="mt-3 text-mc-gray text-lg max-w-2xl">
            Open-source tools and personal projects.
          </p>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {PROJECTS.map((project) => (
              <div
                key={project.name}
                className="group p-6 rounded-2xl border border-mc-gray/15 bg-white hover:border-mc-mint/40 transition-colors"
              >
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-mc-mint" />
                  <h3 className="text-lg font-mono font-semibold text-mc-dark">
                    {project.name}
                  </h3>
                </div>
                <p className="mt-3 text-sm text-mc-gray leading-relaxed">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-mono px-2.5 py-1 rounded-md bg-mc-lavender/20 text-mc-dark/70"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  className="mt-4 inline-block text-sm font-medium text-mc-dark/60 group-hover:text-mc-mint transition-colors"
                >
                  View on GitHub &rarr;
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-mc-dark tracking-tight">
            About
          </h2>
          <div className="mt-6 flex flex-col md:flex-row gap-6 md:gap-16">
            <p className="flex-1 text-lg text-mc-gray leading-relaxed">
              I&apos;m a CS PhD student with a freshly minted master&apos;s
              degree. My research interests span systems, performance
              engineering, and infrastructure.
            </p>
            <p className="flex-1 text-lg text-mc-gray leading-relaxed">
              Outside of research, I like tinkering with side projects,
              writing about what I learn, and breaking things to understand
              how they work.
            </p>
          </div>
          <div className="mt-10">
            <h3 className="text-sm font-semibold text-mc-dark uppercase tracking-wider">
              Technologies & Skills
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {SKILLS.map((skill) => (
                <span
                  key={skill}
                  className="text-sm font-medium px-3 py-1.5 rounded-full bg-mc-lavender/15 text-mc-dark/80 border border-mc-lavender/20"
                >
                  {skill}
                </span>
              ))}
            </div>
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
                  className=""
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
                    href="#"
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    GitHub
                  </a>
                  <a
                    href="#"
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    LinkedIn
                  </a>
                  <a
                    href="#"
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    Twitter / X
                  </a>
                  <a
                    href="mailto:hello@machcomputing.com"
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    Email
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
