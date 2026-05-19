import { Briefcase, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { SectionLabel } from "./SectionLabel";

const jobs = [
  {
    type: "Full-time",
    role: "Junior Fullstack Developer",
    company: "Dedev.co",
    period: "Jul 2025 — Present",
    location: "Onsite · Lahore, PK",
    bullets: [
      "Building scalable dashboards with React, Next.js & TypeScript",
      "Managing complex state with Redux Toolkit & Zustand",
      "Integrating REST APIs with loading, error & realtime states",
      "Shipping Firebase Cloud Functions for push notifications",
      "Assisted in API integration and component-level updates",
      "Implemented responsive layouts and UI fixes across projects",
    ],
    stack: ["React", "Next.js", "TypeScript", "Redux", "Zustand", "Firebase", "Node", "MongoDB", "Postgress"],
  },
  {
    type: "Full-time",
    role: "Frontend Developer",
    company: "Teams.pk",
    period: "Apr 2024 — Jun 2025",
    location: "Lahore, PK",
    bullets: [
      "Rebuilt POS & KDS UI in Vue 3 + Tailwind for faster, responsive flows",
      "Maintained a feature-rich admin panel with clean data workflows",
      "Engineered a reusable component library to cut UI dev time",
      "Integrated REST APIs with Axios and managed state with Pinia",
    ],
    stack: ["Vue 3", "Tailwind", "Pinia", "Axios"],
  },
  {
    type: "Internship",
    role: "Frontend Developer Intern",
    company: "Teams.pk",
    period: "Earlier 2024",
    location: "Lahore, PK",
    bullets: [
      "Built responsive landing pages with Vue.js & Tailwind, mobile-first",
      "Shipped UI fixes on live production projects",
      "Assisted in API integration and component-level updates",
    ],
    stack: ["Vue.js", "Tailwind", "HTML/CSS"],
  },
];

export function Experience() {
  return (
    <section id="experience" className="relative px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionLabel
          eyebrow="Experience"
          title="Where I've shipped"
          subtitle="A short timeline of the teams I've worked with and what I've built."
        />

        <div className="relative space-y-6 border-l border-border/60 pl-6 sm:pl-10">
          {jobs.map((j, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 0.61, 0.36, 1] }}
              className="hover-lift glass relative rounded-2xl p-6"
            >
              <span className="absolute -left-[2.15rem] top-7 grid h-8 w-8 place-items-center rounded-full border border-neon bg-background text-neon sm:-left-[3.15rem]">
                <Briefcase className="h-3.5 w-3.5" />
              </span>
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <span className="inline-block rounded-full bg-neon/10 px-2 py-0.5 text-[10px] uppercase tracking-wider text-neon">
                    {j.type}
                  </span>
                  <h3 className="mt-2 font-display text-xl font-semibold text-foreground">{j.role}</h3>
                  <p className="text-sm text-powder">
                    {j.company} <span className="text-muted-foreground">· {j.period}</span>
                  </p>
                </div>
                <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                  <MapPin className="h-3 w-3" /> {j.location}
                </span>
              </div>
              <ul className="mt-4 space-y-2 text-sm text-foreground/80">
                {j.bullets.map((b) => (
                  <li key={b} className="flex gap-2.5">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-neon" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-4 flex flex-wrap gap-2">
                {j.stack.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-border bg-background/50 px-2.5 py-0.5 text-[11px] text-powder/85"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
