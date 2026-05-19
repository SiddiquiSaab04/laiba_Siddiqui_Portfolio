import { createFileRoute } from "@tanstack/react-router";
import { StarField } from "@/components/StarField";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { GitHubStats } from "@/components/GithubStats";
import { Contact } from "@/components/Contact";
import { SmoothScroll } from "@/components/SmoothScroll";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Laiba Siddiqui — Frontend Developer crafting cinematic experiences" },
      {
        name: "description",
        content:
          "Portfolio of Laiba Siddiqui — a frontend developer designing & building cinematic, performant interfaces with React, Next.js, Vue & TypeScript.",
      },
      { property: "og:title", content: "Laiba Siddiqui — Frontend Developer" },
      {
        property: "og:description",
        content:
          "Cinematic, motion-rich portfolio of a frontend developer with 2+ years building dashboards, POS, KDS & CMS systems.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen text-foreground">
      <SmoothScroll />
      <StarField />
      <div className="relative z-10">
        <Nav />
        <main>
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Contact />
        </main>
      </div>
    </div>
  );
}
