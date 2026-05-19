import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";

const marqueeWords = ["React", "Next.js", "TypeScript", "Vue 3", "Tailwind", "Framer Motion", "Node", "Figma", "GSAP", "Express.js" , "MySQL", "MongoDB"];
const metrics = [
  { value: "2+", label: "Years" },
  { value: "10+", label: "Projects touched" },
  { value: "90+", label: "Performance target" },
];

export function Hero() {
  const word = "Hi, I’m Laiba Siddiqui".split(" ");

  return (
    <section id="top" className="relative flex min-h-screen flex-col justify-center overflow-hidden px-6 pt-28 pb-36">
      <div className="pointer-events-none absolute inset-x-6 top-24 h-px bg-gradient-to-r from-transparent via-powder/25 to-transparent" />
      <div className="mx-auto w-full max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="flex items-center gap-3"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-powder/25 bg-powder/5 px-3.5 py-1.5 text-xs text-powder">
            <span className="relative grid h-2 w-2 place-items-center">
              <span className="absolute inset-0 rounded-full bg-neon animate-pulse-ring" />
              <span className="h-2 w-2 rounded-full bg-neon" />
            </span>
            Available for new projects
          </span>
          <span className="hidden font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground sm:inline">
             Lahore, PK
          </span>
        </motion.div>

        <h1 className="mt-8 display-xxl max-w-7xl text-[clamp(2.5rem,14vw,8.8rem)]">
          {word.map((w, i) => (
            <span key={w} className="mr-[0.18em] align-bottom font-serif italic text-powder text-glow-powder">
              <motion.span
                className="inline-block"
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ delay: 0.35 + i * 0.08, duration: 0.95, ease: [0.22, 0.61, 0.36, 1] }}
              >
                {w}
              </motion.span>
            </span>
          ))}
          <br />
          <span className="overflow-hidden inline-block align-bottom">
            <motion.span
              className="inline-block "
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ delay: 0.6, duration: 0.95, ease: [0.22, 0.61, 0.36, 1] }}
            >
              a Full Stack Developer 
            </motion.span>
          </span>
          <span className="overflow-hidden inline-block align-bottom">
            <motion.span
              className="inline-block shine-text"
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ delay: 0.7, duration: 0.95, ease: [0.22, 0.61, 0.36, 1] }}
            >
              building modern web products.
            </motion.span>
          </span>
        </h1>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.95, duration: 0.7 }}
            className="max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            <span className="text-muted-foreground">I build </span> <span className="text-powder">modern, responsive <span className="text-white">&</span>  scalable</span> web applications with a strong focus on clean UI, smooth user experience, and performance. Passionate about frontend development with growing expertise in backend architecture and real-world product development.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.05, duration: 0.7 }}
            className="soft-panel relative overflow-hidden rounded-3xl p-5 lg:ml-auto lg:w-full lg:max-w-md"
          >
            <div className="pointer-events-none absolute right-0 top-0 h-24 w-24 bg-neon/10 blur-2xl" />
            <div className="grid grid-cols-3 gap-3">
              {metrics.map((m) => (
                <div key={m.label} className="rounded-2xl border border-border/60 bg-background/35 p-3">
                  <p className="font-display text-2xl font-semibold text-powder">{m.value}</p>
                  <p className="mt-1 text-[10px] leading-snug text-muted-foreground">{m.label}</p>
                </div>
              ))}
            </div>

            <div className="mt-5 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-powder px-6 py-3.5 text-sm font-medium text-background transition-all hover:powder-glow"
              >
                <span className="relative z-10">View selected work</span>
                <ArrowRight className="relative z-10 h-4 w-4 transition-transform group-hover:translate-x-1" />
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              </a>
            </div>

            <div className="mt-5 flex items-center gap-3">
              {[
                { Icon: Github, href: "https://github.com/SiddiquiSaab04", label: "GitHub" },
                { Icon: Linkedin, href: "https://www.linkedin.com/in/laiba-siddiqui-29408a265/", label: "LinkedIn" },
                { Icon: Mail, href: "mailto:devlaiba04@gmail.com", label: "Email" },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="grid h-10 w-10 place-items-center rounded-full border border-border bg-card/60 text-muted-foreground transition-all hover:border-neon hover:text-neon hover:[box-shadow:0_0_24px_oklch(0.72_0.19_245/0.35)]"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom marquee */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute inset-x-0 bottom-0 overflow-hidden border-y border-border/40 bg-background/75 py-3"
      >
        <div className="flex w-max animate-marquee items-center gap-10 whitespace-nowrap font-mono text-xs uppercase tracking-[0.3em] text-powder/70">
          {[...marqueeWords, ...marqueeWords].map((w, i) => (
            <span key={i} className="flex items-center gap-10">
              <span>{w}</span>
              <span className="h-1 w-1 rounded-full bg-neon" />
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
