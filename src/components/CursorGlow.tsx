import { useEffect, useState } from "react";

export const CursorGlow = () => {
  const [pos, setPos] = useState({ x: -200, y: -200 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    if (isTouch) return;
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      setVisible(true);
    };
    const leave = () => setVisible(false);
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseleave", leave);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseleave", leave);
    };
  }, []);

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed z-[60] h-[480px] w-[480px] rounded-full blur-3xl transition-opacity duration-500"
      style={{
        left: pos.x - 240,
        top: pos.y - 240,
        opacity: visible ? 0.35 : 0,
        background:
          "radial-gradient(circle, hsl(var(--primary) / 0.5), hsl(var(--accent) / 0.15) 40%, transparent 70%)",
      }}
    />
  );
};
