"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const slides = [
  {
    image: "https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?auto=format&fit=crop&w=1920&q=80",
    title: "Luxury Kitchen\nTransformations",
    subtitle: "Crafting culinary spaces that inspire and delight",
  },
  {
    image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1920&q=80",
    title: "Modern Bathroom\nRedesigns",
    subtitle: "Spa-like retreats tailored to your lifestyle",
  },
  {
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=80",
    title: "Complete Home\nSolutions",
    subtitle: "Transforming visions into architectural masterpieces",
  },
  {
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1920&q=80",
    title: "Premium Basement\nFinishing",
    subtitle: "Unlocking your home's hidden potential",
  },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const paginate = useCallback(
    (newDirection: number) => {
      setDirection(newDirection);
      setCurrent(
        (prev) => (prev + newDirection + slides.length) % slides.length
      );
    },
    []
  );

  useEffect(() => {
    const timer = setInterval(() => paginate(1), 6000);
    return () => clearInterval(timer);
  }, [paginate]);

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? "100%" : "-100%",
      opacity: 0,
      scale: 1.1,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (dir: number) => ({
      x: dir < 0 ? "100%" : "-100%",
      opacity: 0,
      scale: 0.95,
    }),
  };

  return (
    <section id="home" className="relative h-dvh w-full overflow-hidden">
      {/* Carousel Images */}
      <AnimatePresence initial={false} custom={direction} mode="popLayout">
        <motion.div
          key={current}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 200, damping: 30 },
            opacity: { duration: 0.6 },
            scale: { duration: 0.8 },
          }}
          className="absolute inset-0"
        >
          <Image
            src={slides[current].image}
            alt={slides[current].title}
            fill
            className="object-cover"
            priority={current === 0}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 100vw"
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-dark-950/60 via-dark-950/40 to-dark-950/90" />
          <div className="absolute inset-0 bg-gradient-to-r from-dark-950/50 via-transparent to-dark-950/30" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 flex items-center h-full max-w-6xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-gold-400 text-sm font-medium tracking-[0.2em] uppercase mb-6"
              >
                No Jobs Too Big, No Issue Too Small
              </motion.p>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight text-white mb-6 whitespace-pre-line">
                {slides[current].title}
              </h1>
              <p className="text-lg md:text-xl text-dark-300 font-light max-w-xl mb-10">
                {slides[current].subtitle}
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#contact" className="btn-apple btn-apple-filled">
                  Start Your Project
                </a>
                <a href="#portfolio" className="btn-apple">
                  View Our Work
                </a>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex items-center gap-1">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setDirection(i > current ? 1 : -1);
              setCurrent(i);
            }}
            className="relative flex items-center justify-center h-11 w-11 p-0"
            aria-label={`Go to slide ${i + 1}`}
          >
            <span className={`block rounded-full transition-all duration-500 h-1.5 ${
              i === current ? "w-10 bg-gold-400" : "w-6 bg-white/20"
            }`}>
              {i === current && (
                <motion.span
                  layoutId="hero-indicator"
                  className="block w-full h-full rounded-full bg-gold-400"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </span>
          </button>
        ))}
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 right-8 z-10 hidden lg:flex flex-col items-center gap-2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="text-xs text-dark-400 tracking-widest uppercase rotate-90 origin-center translate-y-6">
          Scroll
        </span>
        <div className="w-[1px] h-16 bg-gradient-to-b from-gold-400/60 to-transparent mt-8" />
      </motion.div>
    </section>
  );
}
