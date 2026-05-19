import { motion } from "framer-motion";
import { SectionLabel } from "./SectionLabel";
import { Braces, Database, GitBranch, Layers3, Palette, Sparkles, Zap } from "lucide-react";

const skillGroups = [
  {
    title: "Frontend",
    icon: Braces,
    summary: "React, Next.js, Vue 3, TypeScript and Tailwind for polished production interfaces.",
    skills: ["Html", "CSS", "JS", "TS", "React", "Next.js", "Vue 3", "Tailwind", "Tanstack", "Material UI", "Shadcn UI","Redux", "Zustand", "Pinia","Data Tables"],
  },
  {
    title: "Backend and Databases",
    icon: Layers3,
    summary: "Reusable design tokens, scalable components, state management and dashboard architecture.",
    skills: ["Node.js", "Express", "MongoDB", "MySQL" , "Authentication" , "Authorization","API Integration","Microservices","JWT"],
  },
  {
    title: "Tools & Platforms",
    icon: GitBranch,
    summary: "Clean Git workflows, Vite, Vercel, Firebase and cross-team Figma-to-code handoff.",
    skills: ["Git", "GitHub", "Vite", "Webpack", " Netlify", "Vercel",  "Firebase", "Figma", "AWS Amplify", "Postman","Axios"],
  },
];

const operatingModes = [
  { icon: Zap, label: "Performance", value: "Fast by default", detail: "Motion stays transform-based and interfaces are built to remain smooth." },
  { icon: Palette, label: "UI craft", value: "Premium polish", detail: "Spacing, contrast, typography and states are treated like product features." },
  { icon: Database, label: "API work", value: "Clean data flows", detail: "REST integrations with loading, error and empty states that make sense." },
  { icon: Sparkles, label: "Interaction", value: "Alive, not noisy", detail: "Subtle transitions that guide attention without slowing users down." },
];

export function Skills() {
  return (
    <section id="skills" className="relative px-6 py-28">
      <div className="mx-auto max-w-7xl">
        <SectionLabel
          eyebrow="Skills"
          title="Tech Stack I have worked with"
          subtitle="No old progress bars — just the tools, patterns and habits I use to build modern frontend experiences."
        />

        <div className="grid gap-5 lg:grid-cols-3">
          {skillGroups.map((group, index) => {
            const Icon = group.icon;
            return (
              <motion.article
                key={group.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.55, delay: index * 0.08, ease: [0.22, 0.61, 0.36, 1] }}
                whileHover={{ y: -6 }}
                className="group soft-panel relative overflow-hidden rounded-[2rem] p-6"
              >
                <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-neon/10 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="relative">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl border border-neon/25 bg-neon/10 text-neon">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-6 font-display text-2xl font-semibold text-foreground">{group.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{group.summary}</p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border px-3 py-1.5 text-sm text-white border-powder transition-colors group-hover:border-neon/30"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        <div className="mt-6 grid gap-4 lg:grid-cols-4">
          {operatingModes.map((mode, index) => {
            const Icon = mode.icon;
            return (
              <motion.div
                key={mode.label}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                className="rounded-[1.5rem] border border-border/60 bg-background/45 p-5"
              >
                <Icon className="h-5 w-5 text-neon" />
                <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.24em] text-muted-foreground">{mode.label}</p>
                <h4 className="mt-1 font-display text-lg font-semibold text-powder">{mode.value}</h4>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{mode.detail}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
