import { useEffect, useRef, useState } from "react";

export function Cursor() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);
  const [hover, setHover] = useState(false);
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    if (window.matchMedia("(hover: none)").matches) return;
    setHidden(false);
    const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const tgt = { x: pos.x, y: pos.y };
    let raf = 0;

    const move = (e: MouseEvent) => {
      tgt.x = e.clientX;
      tgt.y = e.clientY;
      if (dot.current) dot.current.style.transform = `translate3d(${e.clientX - 4}px, ${e.clientY - 4}px, 0)`;
      const t = e.target as HTMLElement | null;
      setHover(!!t?.closest("a, button, [data-cursor='hover']"));
    };
    const animate = () => {
      pos.x += (tgt.x - pos.x) * 0.15;
      pos.y += (tgt.y - pos.y) * 0.15;
      if (ring.current) ring.current.style.transform = `translate3d(${pos.x - 18}px, ${pos.y - 18}px, 0)`;
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);
    window.addEventListener("mousemove", move);
    return () => {
      window.removeEventListener("mousemove", move);
      cancelAnimationFrame(raf);
    };
  }, []);

  if (hidden) return null;
  return (
    <>
      <div
        ref={dot}
        className="pointer-events-none fixed left-0 top-0 z-[100] h-2 w-2 rounded-full bg-powder mix-blend-difference"
      />
      <div
        ref={ring}
        className={`pointer-events-none fixed left-0 top-0 z-[100] h-9 w-9 rounded-full border transition-[width,height,border-color,background] duration-300 ${
          hover
            ? "border-neon bg-neon/10 [box-shadow:0_0_28px_oklch(0.72_0.19_245/0.6)]"
            : "border-powder/50"
        }`}
      />
    </>
  );
}
