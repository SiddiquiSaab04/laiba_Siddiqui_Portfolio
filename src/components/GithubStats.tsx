import { Github, GitCommit, Star, Flame } from "lucide-react";
import { motion } from "framer-motion";
import { SectionLabel } from "./SectionLabel";
import { Reveal } from "./Reveal";

const USERNAME = "SiddiquiSaab04";

// Theme params tuned to match the galaxy/neon palette
const themeParams =
  "bg_color=0D1530&title_color=A8C8FF&text_color=C9D9F2&icon_color=6FA8FF&border_color=1F2F58&hide_border=false&border_radius=16";

const statsUrl = `https://github-readme-stats.vercel.app/api?username=${USERNAME}&show_icons=true&count_private=true&include_all_commits=true&${themeParams}`;
const streakUrl = `https://streak-stats.demolab.com?user=${USERNAME}&background=0D1530&stroke=1F2F58&ring=6FA8FF&fire=A8C8FF&currStreakLabel=A8C8FF&sideLabels=C9D9F2&currStreakNum=FFFFFF&sideNums=FFFFFF&dates=8FA3CC&border=1F2F58&border_radius=16`;
const langsUrl = `https://github-readme-stats.vercel.app/api/top-langs/?username=${USERNAME}&layout=compact&langs_count=8&${themeParams}`;
const trophyUrl = `https://github-profile-trophy.vercel.app/?username=${USERNAME}&theme=algolia&no-frame=true&margin-w=8&column=7`;

const quickFacts = [
  { Icon: GitCommit, label: "Commits", value: "Daily" },
  { Icon: Star, label: "Open source", value: "Active" },
  { Icon: Flame, label: "Streak", value: "On fire" },
];

export function GitHubStats() {
  return (
    <section id="github" className="relative px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionLabel
          eyebrow="GitHub activity"
          title="A look at my code life"
          subtitle="Live stats pulled straight from GitHub — commits, languages and streaks."
        />

        <Reveal>
          <div className="mb-6 flex flex-wrap items-center justify-between gap-4 glass rounded-2xl p-5">
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-neon/10 text-neon">
                <Github className="h-5 w-5" />
              </span>
              <div>
                <p className="text-[11px] uppercase tracking-wider text-muted-foreground">GitHub</p>
                <a
                  href={`https://github.com/${USERNAME}`}
                  target="_blank"
                  rel="noreferrer"
                  className="font-display text-base text-powder hover:underline"
                >
                  @{USERNAME}
                </a>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {quickFacts.map((f) => (
                <span
                  key={f.label}
                  className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background/50 px-3 py-1 text-xs text-powder/85"
                >
                  <f.Icon className="h-3.5 w-3.5 text-neon" />
                  {f.label} · {f.value}
                </span>
              ))}
            </div>
          </div>
        </Reveal>

        <div className="grid gap-5 lg:grid-cols-2">
          <StatCard src={statsUrl} alt="GitHub stats" delay={0} />
          <StatCard src={streakUrl} alt="GitHub streak" delay={0.1} />
          <StatCard src={langsUrl} alt="Top languages" delay={0.15} />
          <StatCard src={trophyUrl} alt="GitHub trophies" delay={0.2} />
        </div>
      </div>
    </section>
  );
}

function StatCard({ src, alt, delay }: { src: string; alt: string; delay: number }) {
  return (
    <motion.a
      href={`https://github.com/${USERNAME}`}
      target="_blank"
      rel="noreferrer"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 0.61, 0.36, 1] }}
      whileHover={{ y: -4 }}
      className="glass hover-lift block rounded-2xl p-4 sm:p-5"
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="mx-auto h-auto w-full max-w-full"
      />
    </motion.a>
  );
}
