import { motion } from "framer-motion";

interface Props {
  eyebrow: string;
  title: string;
  subtitle?: string;
  center?: boolean;
}
export function SectionLabel({ eyebrow, title, subtitle, center }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.22, 0.61, 0.36, 1] }}
      className={`mb-14 space-y-5 ${center ? "text-center mx-auto" : ""}`}
    >
      <span className="inline-flex items-center gap-2 rounded-full border border-neon/30 bg-neon/5 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.3em] text-neon">
        <span className="h-1 w-1 rounded-full bg-neon" />
        {eyebrow}
      </span>
      <h2 className="font-display font-semibold tracking-tighter text-[clamp(2.25rem,5.5vw,4.5rem)] leading-[0.95]">
        <span className="text-foreground">{title}</span>
        <span className="text-neon">.</span>
      </h2>
      {subtitle && (
        <p className={`text-base text-muted-foreground sm:text-lg ${center ? "mx-auto max-w-2xl" : "max-w-2xl"}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
