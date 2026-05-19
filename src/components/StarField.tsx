export function StarField() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 bg-galaxy" />
      <div className="absolute inset-0 grid-galaxy opacity-35" />
      <div
        className="absolute left-1/2 top-[-12rem] h-[38rem] w-[70rem] -translate-x-1/2 opacity-45 blur-[96px]"
        style={{
          background: "radial-gradient(ellipse at center, oklch(0.72 0.19 245 / 0.32), transparent 68%)",
        }}
      />
      <div
        className="absolute bottom-[-12rem] right-[-12rem] h-[34rem] w-[34rem] rounded-full opacity-25 blur-[96px]"
        style={{
          background: "radial-gradient(circle, oklch(0.55 0.22 280), transparent 70%)",
        }}
      />
      <div className="absolute inset-0 opacity-[0.04] noise mix-blend-overlay" />
    </div>
  );
}
