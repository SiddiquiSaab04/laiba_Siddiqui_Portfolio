import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export function LoadingScreen() {
  const [done, setDone] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setDone(true), 1500);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[200] grid place-items-center bg-deep"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: [0.22, 0.61, 0.36, 1] } }}
        >
          <motion.div
            className="absolute inset-0 bg-galaxy"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          />
          <div className="relative text-center">
            <motion.p
              className="font-mono text-[10px] uppercase tracking-[0.4em] text-powder/70"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              Initialising experience
            </motion.p>
            <motion.h1
              className="mt-4 font-display text-6xl font-semibold tracking-tighter text-powder sm:text-7xl"
              initial={{ opacity: 0, y: 18, filter: "blur(12px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.9, ease: [0.22, 0.61, 0.36, 1] }}
            >
              LAIBA<span className="text-neon">.</span>
            </motion.h1>
            <div className="mx-auto mt-6 h-px w-64 overflow-hidden bg-powder/15">
              <motion.div
                className="h-full bg-gradient-to-r from-transparent via-neon to-transparent"
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ duration: 1.3, ease: "easeInOut" }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
