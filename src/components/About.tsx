import { Code2, Palette, Zap, Download } from "lucide-react";
import { motion } from "framer-motion";
import { SectionLabel } from "./SectionLabel";

const traits = [
  {
    Icon: Code2,
    title: "Clean, scalable code",
    desc: "Reusable components, typed contracts, and patterns that grow with your product.",
  },
  {
    Icon: Palette,
    title: "Design-system mindset",
    desc: "Pixel-perfect translations of Figma into accessible, themeable UI.",
  },
  {
    Icon: Zap,
    title: "Performance first",
    desc: "Optimised for real users — fast loads, smooth interactions, low bundle weight.",
  },
];

export function About() {
  return (
    <section id="about" className="relative px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionLabel
          eyebrow="About me"
          title="Fullstack dev with a product brain"
          // subtitle="I build scalable full-stack applications by combining intuitive frontend experiences with reliable backend systems to deliver seamless end-to-end products for both technical and non-technical users."
        />

        <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr]">
          <div className="glass rounded-2xl p-7 space-y-4">
            <p className="text-foreground/85 leading-relaxed">
             Full Stack Developer with experience building CMS platforms, admin panels, dashboards, authentication systems, responsive landing pages, and REST APIs. Worked on both frontend and backend development while collaborating with teams to deliver scalable and user-focused web applications.
            </p>
            <p className="text-foreground/85 leading-relaxed">
              I focus on{" "}
              <span className="text-powder font-medium">performance</span>,{" "}
              <span className="text-powder font-medium">usability</span> and{" "}
              <span className="text-powder font-medium">maintainable architecture</span>
              {" "}— clean component design, strong typing, and motion that earns its place.
            </p>
            <p className="text-foreground/85 leading-relaxed">
              I love solving practical problems, writing efficient code, and
              shipping interfaces that feel premium across every device.
            </p>
            <a
              href="/public/laiba-fullstack.pdf"
              download
              className="mt-3 inline-flex items-center gap-2 rounded-full bg-powder px-5 py-2.5 text-sm font-medium text-background transition-all hover:powder-glow hover:scale-[1.02]"
            >
              <Download className="h-4 w-4" /> Download Resume
            </a>
          </div>

          <div className="grid gap-4">
            {traits.map((t, i) => (
              <motion.div
                key={t.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.55, delay: i * 0.1, ease: [0.22, 0.61, 0.36, 1] }}
                whileHover={{ y: -4 }}
                className="glass rounded-2xl p-5 flex gap-4"
              >
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-neon/10 text-neon">
                  <t.Icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-powder">{t.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{t.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
