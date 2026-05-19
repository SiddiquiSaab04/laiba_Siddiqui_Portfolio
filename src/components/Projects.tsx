import { ArrowUpRight, BadgeCheck, Layers3, MonitorSmartphone } from "lucide-react";
import { motion } from "framer-motion";
import { SectionLabel } from "./SectionLabel";
import kwiikpayImg from "../assets/kwiikpay.png";
import snooNewsImg from "../assets/snoonews.png";
import touriImg from "../assets/touri.png";
import corerunImg from "../assets/corerun.png";
import dubaiDesertSafariImg from "../assets/desert.png";
import pennoImg from "../assets/penno.png";
import beatYouImg from "../assets/beatyou.png";

const projects = [
  {
    name: "KwiikPay",
    tag: "Fintech product",
    url: "https://kwiikpay.io/",
    desc: "A polished payment platform experience built around trust, speed and conversion-focused product storytelling.",
    stack: ["Next.js", "TypeScript", "Tailwind"],
    result: "Trust-led payment UI",
img: kwiikpayImg,
  },
  {
    name: "Snoo News",
    tag: "News platform",
    url: "https://snoonews.vercel.app/",
    desc: "A polished news platform experience built around trust, speed and conversion-focused product storytelling.",
    stack: ["Next.js", "TypeScript", "Tailwind"],
    result: "Trust-led news platform",
img: snooNewsImg, 
  },
  {
    name: "Touri",
    tag: "Tour planning website",
    url: "https://main.dlu1p384goa9z.amplifyapp.com/",
    desc: "Tour planning app with booking system.",
    stack: ["Next.js", "TypeScript", "Tailwind"],
    result: "Tour planning website",
    img: touriImg, 
  },

  {
    name: "EdgeCore AI",
    tag: "Core Rig Manager",
    url: "",
    desc: "A full-stack admin panel for managing rigs, holes, torque data, and core runs with structured relational workflows and scalable data handling.",
    stack: ["Next.js", "TypeScript", "Tailwind"],
    result: "Tour planning website",
    img: corerunImg,  
  },

  {
    name: "Penno",
    tag: "Community Based Platform",
    url: "",
    desc: "Admin Panel for community based platform. Build Networks across different clubs.",
    stack: ["Next.js", "TypeScript", "Tailwind"],
    result: "Community Based Platform",
    img: pennoImg,  
  },
  {
    name: "Dubai Desert Safari",
    tag: "Tour planning website",
    url: "http://www.desertsafaridubai.com/",
    desc: "Tour planning Website.",
    stack: ["WordPress", "PHP", "Bootstrap", "JavaScript"],
    result: "Tour planning website",
    img: dubaiDesertSafariImg,
  },
  {
    name: "Beat You",
    tag: "Challenge based Platform",
    url: "https://beatyou.app/",
    desc: "Beat You is a platform where users can create challenges for themselves and compete with others.",
    stack: ["Next.js", "TypeScript", "Tailwind", "Supabase"],
    result: "Challenge based Platform",
    img: beatYouImg,
  }

];

export function Projects() {
  return (
    <section id="projects" className="relative px-6 py-28">
      <div className="mx-auto max-w-7xl">
        <SectionLabel
          eyebrow="Selected work"
          title="Interfaces that feel expensive and work fast"
          subtitle="A focused look at product experiences I've shipped — built for users, business teams and developers who need clarity."
        />

        <div className="grid gap-5 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
          {projects.map((project, index) => (
            <motion.a
              key={project.name}
              href={project.url}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: index * 0.08, ease: [0.22, 0.61, 0.36, 1] }}
              whileHover={{ y: -6 }}
              className={`group soft-panel relative overflow-hidden rounded-[2rem] p-6 transition-transform`}
              data-cursor="hover"
            >
              <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 project-card-glow" />
              <div className="relative flex min-h-[22rem] flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-3">
                    <span className="inline-flex items-center gap-2 rounded-full border border-neon/25 bg-neon/[0.08] px-3 py-1 font-mono text-[10px] uppercase tracking-[0.22em] text-neon">
                      <BadgeCheck className="h-3 w-3" /> {project.tag}
                    </span>
                    <span className="grid h-11 w-11 place-items-center rounded-full border border-border bg-background/50 text-powder transition-all duration-500 group-hover:rotate-45 group-hover:border-powder">
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </div>

                  <div className="mt-10 overflow-hidden rounded-[1.5rem] border border-border/70 bg-background/45 p-4">
                    {/* <div className="project-screen relative h-44 overflow-hidden rounded-[1rem]">
                      <div className="absolute left-4 right-4 top-4 flex gap-2">
                        <span className="h-2 w-2 rounded-full bg-neon" />
                        <span className="h-2 w-2 rounded-full bg-powder" />
                        <span className="h-2 w-2 rounded-full bg-muted" />
                      </div>
                      <div className="absolute inset-x-5 bottom-5 grid grid-cols-3 gap-3">
                        <span className="h-16 rounded-xl bg-powder/12" />
                        <span className="h-16 rounded-xl bg-neon/18" />
                        <span className="h-16 rounded-xl bg-powder/12" />
                      </div>
                      <div className="absolute left-5 top-12 h-4 w-36 rounded-full bg-powder/35" />
                      <div className="absolute left-5 top-20 h-2 w-52 rounded-full bg-muted-foreground/20" />
                    </div> */}
                    <img src={project.img} alt={project.name} className="w-full h-full object-cover" />
                  </div>
                </div>

                <div className="mt-7">
                  <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">0{index + 1} · {project.result}</p>
                  <h3 className="mt-2 font-display text-4xl font-semibold leading-none text-foreground sm:text-5xl">{project.name}</h3>
                  <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">{project.desc}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                      <span key={item} className="rounded-full border border-border bg-background/55 px-3 py-1 text-[11px] text-powder/85">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        
      </div>
    </section>
  );
}
