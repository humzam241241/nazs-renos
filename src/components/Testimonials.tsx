"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const testimonials = [
  {
    quote:
      "NAZ RENOVATIONS transformed our dated kitchen into a stunning modern masterpiece. The attention to detail was extraordinary -- from the custom millwork to the hidden lighting. We couldn't be happier.",
    name: "Sarah & Michael Thompson",
    role: "Kitchen Renovation, Oakville",
    rating: 5,
  },
  {
    quote:
      "Working with the team was a dream. They managed our complete home renovation while we were out of the country. Every decision was handled with care, and the result exceeded our wildest expectations.",
    name: "James Richardson",
    role: "Full Home Remodel, Toronto",
    rating: 5,
  },
  {
    quote:
      "Our basement went from a forgotten storage space to the most-used room in our home. The design team created an incredible entertainment space with a bar, home theater, and guest suite.",
    name: "Priya & Arjun Patel",
    role: "Basement Finishing, Mississauga",
    rating: 5,
  },
  {
    quote:
      "The bathroom renovation was completed on time and under budget. The spa-like design with the freestanding tub and rain shower is exactly what we envisioned. True craftsmanship.",
    name: "Emma Lindqvist",
    role: "Bathroom Remodel, Burlington",
    rating: 5,
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {[...Array(rating)].map((_, i) => (
        <svg
          key={i}
          className="w-4 h-4 text-gold-400"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 7000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section
      id="testimonials"
      className="relative py-32 lg:py-40 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-950 via-dark-900/30 to-dark-950 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold-500/[0.02] rounded-full blur-[150px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <AnimatedSection>
            <p className="text-gold-400 text-sm font-medium tracking-[0.2em] uppercase mb-4">
              Testimonials
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
              Client <span className="gradient-text">Stories</span>
            </h2>
          </AnimatedSection>
        </div>

        <AnimatedSection delay={0.2}>
          <div className="max-w-4xl mx-auto">
            <div className="glass rounded-3xl p-8 md:p-12 lg:p-16 relative min-h-[320px] flex items-center">
              {/* Quote icon */}
              <div className="absolute top-8 left-8 md:top-12 md:left-12 text-gold-500/10">
                <svg
                  className="w-16 h-16 md:w-24 md:h-24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{
                    duration: 0.6,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="relative z-10 text-center"
                >
                  <StarRating rating={testimonials[current].rating} />
                  <blockquote className="text-xl md:text-2xl text-dark-200 font-light leading-relaxed mt-6 mb-8">
                    &ldquo;{testimonials[current].quote}&rdquo;
                  </blockquote>
                  <div>
                    <p className="text-white font-semibold text-lg">
                      {testimonials[current].name}
                    </p>
                    <p className="text-dark-400 text-sm mt-1">
                      {testimonials[current].role}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center gap-3 mt-8">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-500 ${
                    i === current
                      ? "bg-gold-400 scale-125"
                      : "bg-white/15 hover:bg-white/30"
                  }`}
                  aria-label={`View testimonial ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
