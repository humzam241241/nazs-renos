"use client";

import AnimatedSection from "./AnimatedSection";

const stats = [
  { number: "15+", label: "Years Experience" },
  { number: "500+", label: "Projects Completed" },
  { number: "98%", label: "Client Satisfaction" },
  { number: "50+", label: "Design Awards" },
];

export default function About() {
  return (
    <section id="about" className="relative py-40 lg:py-52 overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold-500/[0.03] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gold-600/[0.02] rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Centered header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <AnimatedSection>
            <p className="text-gold-400 text-sm font-medium tracking-[0.2em] uppercase mb-4">
              About Us
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.05] mb-8">
              Building dreams
              <br />
              with{" "}
              <span className="gradient-text">precision</span>
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="text-lg text-dark-300 font-light leading-relaxed mb-6">
              At NAZ SOLUTIONS, we believe every home tells a story. For over 15
              years, we&apos;ve been crafting extraordinary living spaces that blend
              timeless design with modern innovation. Our team of skilled
              tradespeople and designers work together to transform
              your vision into reality.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.3}>
            <p className="text-lg text-dark-400 font-light leading-relaxed mb-12">
              From the initial consultation to the final reveal, we manage every
              detail with meticulous care. We source only premium materials and
              partner with trusted suppliers to ensure your renovation exceeds
              expectations -- on time and on budget.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.4}>
            <a href="#contact" className="btn-apple btn-apple-filled">
              Learn Our Process
            </a>
          </AnimatedSection>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6 max-w-4xl mx-auto">
          {stats.map((stat, i) => (
            <AnimatedSection
              key={stat.label}
              delay={0.1 + i * 0.1}
              direction={i % 2 === 0 ? "left" : "right"}
            >
              <div className="glass rounded-2xl p-8 text-center hover:border-gold-500/20 transition-all duration-500 group">
                <div className="text-4xl md:text-5xl font-bold gradient-text mb-2 group-hover:scale-105 transition-transform duration-500">
                  {stat.number}
                </div>
                <div className="text-sm text-dark-400 font-medium tracking-wide uppercase">
                  {stat.label}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
