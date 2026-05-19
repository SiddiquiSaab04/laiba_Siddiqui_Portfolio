import { Mail, Phone, MapPin, Github, Linkedin, Download, Send, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { SectionLabel } from "./SectionLabel";

export function Contact() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const body = encodeURIComponent(
      `Hi Laiba,\n\nMy name is ${data.get("name")}.\n\n${data.get("message")}\n\n— ${data.get("email")}`
    );
    window.location.href = `mailto:devlaiba04@gmail.com?subject=Project enquiry&body=${body}`;
    setSent(true);
  };

  return (
    <section id="contact" className="relative px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <SectionLabel
          eyebrow="Contact"
          title="Let's build something cinematic"
          subtitle="Freelance, full-time, or interesting collaborations — I usually reply within 24 hours."
        />

        <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr]">
          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.22, 0.61, 0.36, 1] }}
            className="glass-strong relative overflow-hidden rounded-3xl p-8"
          >
            <div className="pointer-events-none absolute -right-32 -top-32 h-64 w-64 rounded-full opacity-50 blur-3xl" style={{ background: "radial-gradient(circle, oklch(0.72 0.19 245), transparent 70%)" }} />
            <div className="grid gap-5 sm:grid-cols-2">
              <Field name="name" label="Your name" placeholder="Your name" />
              <Field name="email" label="Email" placeholder="Your email" type="email" />
            </div>
            <div className="mt-5">
              <Field name="subject" label="Project" placeholder="Portfolio redesign, SaaS dashboard…" />
            </div>
            <div className="mt-5">
              <label className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Message</label>
              <div className="neon-input mt-2 rounded-2xl px-4 py-3">
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell me about your project, timeline & vibe…"
                  className="w-full resize-none bg-transparent text-sm text-white outline-none placeholder:text-white"
                />
              </div>
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
              <p className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                <Sparkles className="h-3 w-3 text-neon" /> Encrypted via your mail client
              </p>
              <button
                type="submit"
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-powder px-6 py-3 text-sm font-medium text-background transition-all hover:powder-glow"
              >
                <span className="relative z-10">{sent ? "Opening mail…" : "Send message"}</span>
                <Send className="relative z-10 h-4 w-4 transition-transform group-hover:translate-x-1" />
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              </button>
            </div>
          </motion.form>

          <div className="flex flex-col gap-4">
            {[
              { Icon: Mail, label: "Email", host: "devlaiba04@gmail.com", url: "mailto:devlaiba04@gmail.com" },
              { Icon: Phone, label: "Phone", host: "+92 308 1138997", url: "tel:+923081138997" },
              { Icon: Linkedin, label: "LinkedIn", host: "/in/laiba-siddiqui", url: "https://www.linkedin.com/in/laiba-siddiqui-29408a265/" },
              { Icon: Github, label: "GitHub", host: "@SiddiquiSaab04", url: "https://github.com/SiddiquiSaab04" },
              { Icon: MapPin, label: "Based in", host: "Lahore, Pakistan", url: "#" },
            ].map((s, i) => (
              <motion.a
                key={s.label}
                href={s.url}
                target={s.url.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.55, delay: i * 0.07 }}
                whileHover={{ x: 6 }}
                className="group flex items-center gap-4 glass rounded-2xl p-4 transition-colors hover:border-neon/40"
              >
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-neon/10 text-neon transition-all group-hover:bg-neon group-hover:text-background group-hover:[box-shadow:0_0_24px_oklch(0.72_0.19_245/0.6)]">
                  <s.Icon className="h-5 w-5" />
                </span>
                <div className="flex-1">
                  <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">{s.label}</p>
                  <p className="font-display text-sm text-powder">{s.host}</p>
                </div>
              </motion.a>
            ))}

            <a
              href="/public/laiba-fullstack.pdf"
              download
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full border border-neon/40 bg-neon/5 px-5 py-3 text-sm font-medium text-powder transition-all hover:border-neon hover:[box-shadow:0_0_30px_oklch(0.72_0.19_245/0.45)]"
            >
              <Download className="h-4 w-4" /> Download Resume (PDF)
            </a>
          </div>
        </div>

        <footer className="mt-20 flex flex-wrap items-center justify-between gap-3 border-t border-border/60 pt-6 font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
          <p>© {new Date().getFullYear()} Laiba Siddiqui · Crafted in Lahore</p>
          <p>Designed & developed with React + Framer Motion</p>
        </footer>
      </div>
    </section>
  );
}

function Field({
  name,
  label,
  placeholder,
  type = "text",
}: {
  name: string;
  label: string;
  placeholder: string;
  type?: string;
}) {
  return (
    <div>
      <label className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">{label}</label>
      <div className="neon-input mt-2 rounded-2xl px-4 py-3">
        <input
          name={name}
          type={type}
          required
          placeholder={placeholder}
          className="w-full bg-transparent text-white text-sm outline-none placeholder:text-white/80"
        />
      </div>
    </div>
  );
}
