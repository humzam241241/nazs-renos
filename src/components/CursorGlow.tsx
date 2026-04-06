"use client";

import { useEffect, useRef } from "react";

export default function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);
  const position = useRef({ x: 0, y: 0 });
  const target = useRef({ x: 0, y: 0 });
  const rafId = useRef<number>(0);

  useEffect(() => {
    const glow = glowRef.current;
    if (!glow) return;

    // Only enable on non-touch devices
    const isTouchDevice =
      "ontouchstart" in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) {
      glow.style.display = "none";
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      target.current = { x: e.clientX, y: e.clientY };
      glow.style.opacity = "1";
    };

    const handleMouseLeave = () => {
      glow.style.opacity = "0";
    };

    const animate = () => {
      position.current.x +=
        (target.current.x - position.current.x) * 0.08;
      position.current.y +=
        (target.current.y - position.current.y) * 0.08;

      glow.style.left = `${position.current.x}px`;
      glow.style.top = `${position.current.y}px`;

      rafId.current = requestAnimationFrame(animate);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    rafId.current = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(rafId.current);
    };
  }, []);

  return <div ref={glowRef} id="cursor-glow" />;
}
