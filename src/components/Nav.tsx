import { useEffect, useRef, useState } from "react";
import { Download, Menu, X } from "lucide-react";
import { motion } from "framer-motion";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Work" },
  { href: "#skills", label: "Skills" },
  { href: "#github", label: "GitHub" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");
  const ids = useRef(links.map((l) => l.href.slice(1)));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(`#${e.target.id}`);
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );
    ids.current.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1.6, duration: 0.7, ease: [0.22, 0.61, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background/90 border-b border-border shadow-[0_10px_40px_-28px_oklch(0.72_0.19_245/0.55)]" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center gap-2.5">
          <span className="relative grid h-9 w-9 place-items-center overflow-hidden rounded-xl bg-gradient-to-br from-neon to-powder text-background font-display text-sm font-bold shadow-[0_0_20px_oklch(0.72_0.19_245/0.5)]">
            L
          </span>
          <span className="font-display text-base font-semibold text-foreground">
            Laiba<span className="text-neon">.</span>
          </span>
        </a>

        <nav className="hidden items-center gap-1 rounded-full border border-border/60 bg-background/75 px-2 py-1.5 md:flex">
          {links.map((l) => {
            const isActive = active === l.href;
            return (
              <a
                key={l.href}
                href={l.href}
                className={`relative rounded-full px-3.5 py-1.5 text-xs font-medium transition-colors ${
                  isActive ? "text-background" : "text-muted-foreground hover:text-powder"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full bg-powder"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{l.label}</span>
              </a>
            );
          })}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <a
            href="/public/laiba-fullstack.pdf"
            download
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full border border-neon/40 bg-neon/5 px-4 py-2 text-xs font-medium text-powder transition-all hover:border-neon hover:[box-shadow:0_0_24px_oklch(0.72_0.19_245/0.45)]"
          >
            <Download className="h-3.5 w-3.5" /> Resume
          </a>
        </div>

        <button
          onClick={() => setOpen((o) => !o)}
          className="grid h-10 w-10 place-items-center rounded-lg border border-border md:hidden"
          aria-label="menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background/95 md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-1 px-6 py-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-card hover:text-powder"
              >
                {l.label}
              </a>
            ))}
            <a
              href="/laiba-cv.pdf"
              download
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-powder px-4 py-2.5 text-sm font-medium text-background"
            >
              <Download className="h-4 w-4" /> Download Resume
            </a>
          </div>
        </div>
      )}
    </motion.header>
  );
}
