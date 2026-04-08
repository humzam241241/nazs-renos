"use client";

import Image from "next/image";
import AnimatedSection from "./AnimatedSection";

const portfolioImages = [
  { src: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=600&h=400&q=80", alt: "Modern kitchen renovation" },
  { src: "https://images.unsplash.com/photo-1564540583246-934409427776?auto=format&fit=crop&w=600&h=400&q=80", alt: "Luxury bathroom remodel" },
  { src: "https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&w=600&h=400&q=80", alt: "Open concept living space" },
  { src: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=600&h=400&q=80", alt: "Custom home office" },
  { src: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&h=400&q=80", alt: "Finished basement lounge" },
  { src: "https://images.unsplash.com/photo-1604014237800-1c9102c219da?auto=format&fit=crop&w=600&h=400&q=80", alt: "Outdoor living area" },
  { src: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=600&h=400&q=80", alt: "Master bedroom suite" },
  { src: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=600&h=400&q=80", alt: "Custom walk-in closet" },
];

const portfolioImagesRow2 = [
  { src: "https://images.unsplash.com/photo-1516594915697-87eb3b1c14ea?auto=format&fit=crop&w=600&h=400&q=80", alt: "Wine cellar design" },
  { src: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=600&h=400&q=80", alt: "Home theater build" },
  { src: "https://images.unsplash.com/photo-1588854337236-6889d631faa8?auto=format&fit=crop&w=600&h=400&q=80", alt: "Gourmet kitchen" },
  { src: "https://images.unsplash.com/photo-1604709177225-055f99402ea3?auto=format&fit=crop&w=600&h=400&q=80", alt: "Spa bathroom" },
  { src: "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?auto=format&fit=crop&w=600&h=400&q=80", alt: "Modern staircase" },
  { src: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=600&h=400&q=80", alt: "Fireplace redesign" },
  { src: "https://images.unsplash.com/photo-1533779283484-8ad4940aa3a8?auto=format&fit=crop&w=600&h=400&q=80", alt: "Outdoor kitchen" },
  { src: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=600&h=400&q=80", alt: "Mudroom renovation" },
];

function CarouselRow({
  images,
  direction = "left",
}: {
  images: typeof portfolioImages;
  direction?: "left" | "right";
}) {
  // Double the array for seamless looping
  const doubled = [...images, ...images];

  return (
    <div className="overflow-hidden">
      <div
        className={`flex gap-5 ${
          direction === "left" ? "animate-scroll-left" : "animate-scroll-right"
        }`}
        style={{ width: `${doubled.length * 320}px` }}
      >
        {doubled.map((img, i) => (
          <div
            key={`${img.src}-${i}`}
            className="relative w-[300px] h-[200px] md:w-[380px] md:h-[260px] flex-shrink-0 rounded-2xl overflow-hidden group"
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              sizes="(max-width: 768px) 300px, 380px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
              <p className="text-white text-sm font-medium">{img.alt}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Portfolio() {
  return (
    <section id="portfolio" className="relative py-40 lg:py-52 overflow-hidden">
      <div className="max-w-5xl mx-auto px-8 md:px-12 lg:px-16 mb-16">
        <div className="text-center">
          <AnimatedSection>
            <p className="text-gold-400 text-sm font-medium tracking-[0.2em] uppercase mb-4">
              Our Work
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
              Featured <span className="gradient-text">Portfolio</span>
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="text-lg text-dark-400 max-w-2xl mx-auto font-light">
              Browse through our collection of completed projects, each one a
              testament to our commitment to excellence and attention to detail.
            </p>
          </AnimatedSection>
        </div>
      </div>

      {/* Infinite Carousels */}
      <div className="space-y-5">
        <AnimatedSection delay={0.3}>
          <CarouselRow images={portfolioImages} direction="left" />
        </AnimatedSection>
        <AnimatedSection delay={0.4}>
          <CarouselRow images={portfolioImagesRow2} direction="right" />
        </AnimatedSection>
      </div>
    </section>
  );
}
