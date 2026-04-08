"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";

const TOTAL_FRAMES = 60;

function getFrameSrc(index: number): string {
  const padded = String(index).padStart(3, "0");
  return `/frames/frame_${padded}.jpg`;
}

export default function ScrollVideo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentFrame, setCurrentFrame] = useState(1);
  const [loaded, setLoaded] = useState(false);
  const frameRef = useRef(1);

  // Preload all frames
  useEffect(() => {
    let loadedCount = 0;
    for (let i = 1; i <= TOTAL_FRAMES; i++) {
      const img = new window.Image();
      img.src = getFrameSrc(i);
      img.onload = () => {
        loadedCount++;
        if (loadedCount === TOTAL_FRAMES) setLoaded(true);
      };
    }
  }, []);

  const handleScroll = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;

    const rect = container.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const containerHeight = container.offsetHeight;
    const scrollableDistance = containerHeight - windowHeight;

    // How far through the container we've scrolled (0 to 1)
    const scrolledPast = -rect.top;
    const progress = Math.max(0, Math.min(1, scrolledPast / scrollableDistance));

    const frame = Math.max(1, Math.min(TOTAL_FRAMES, Math.ceil(progress * TOTAL_FRAMES)));
    if (frame !== frameRef.current) {
      frameRef.current = frame;
      setCurrentFrame(frame);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <section
      ref={containerRef}
      className="relative"
      style={{ height: "300vh" }}
    >
      <div className="sticky top-0 h-dvh w-full overflow-hidden flex items-center justify-center">
        {/* Dark background */}
        <div className="absolute inset-0 bg-dark-950" />

        {/* Frame display */}
        <div className="relative w-full h-full">
          <Image
            src={getFrameSrc(currentFrame)}
            alt="NAZ Solutions project showcase"
            fill
            className="object-contain"
            priority
            sizes="100vw"
          />

          {/* Gradient overlays for smooth blend with site */}
          <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-dark-950 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-dark-950 to-transparent" />
        </div>

        {/* Progress indicator */}
        <div className="absolute right-6 top-1/2 -translate-y-1/2 flex flex-col items-center gap-2 z-10">
          <div className="h-24 w-[2px] rounded-full bg-white/10 overflow-hidden">
            <div
              className="w-full bg-gradient-to-b from-gold-400 to-gold-600 rounded-full transition-all duration-100"
              style={{ height: `${(currentFrame / TOTAL_FRAMES) * 100}%` }}
            />
          </div>
        </div>

        {/* Loading overlay */}
        {!loaded && (
          <div className="absolute inset-0 bg-dark-950 flex items-center justify-center z-20">
            <div className="flex flex-col items-center gap-3">
              <div className="w-8 h-8 border-2 border-gold-400 border-t-transparent rounded-full animate-spin" />
              <p className="text-sm text-dark-400 tracking-wide">Loading showcase...</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
