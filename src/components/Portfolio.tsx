"use client";

import Image from "next/image";
import AnimatedSection from "./AnimatedSection";

const portfolioImages = [
  { src: "https://picsum.photos/id/42/600/400", alt: "Modern kitchen renovation" },
  { src: "https://picsum.photos/id/37/600/400", alt: "Luxury bathroom remodel" },
  { src: "https://picsum.photos/id/49/600/400", alt: "Open concept living space" },
  { src: "https://picsum.photos/id/164/600/400", alt: "Custom home office" },
  { src: "https://picsum.photos/id/188/600/400", alt: "Finished basement lounge" },
  { src: "https://picsum.photos/id/259/600/400", alt: "Outdoor living area" },
  { src: "https://picsum.photos/id/274/600/400", alt: "Master bedroom suite" },
  { src: "https://picsum.photos/id/308/600/400", alt: "Custom walk-in closet" },
];

const portfolioImagesRow2 = [
  { src: "https://picsum.photos/id/316/600/400", alt: "Wine cellar design" },
  { src: "https://picsum.photos/id/342/600/400", alt: "Home theater build" },
  { src: "https://picsum.photos/id/356/600/400", alt: "Gourmet kitchen" },
  { src: "https://picsum.photos/id/366/600/400", alt: "Spa bathroom" },
  { src: "https://picsum.photos/id/399/600/400", alt: "Modern staircase" },
  { src: "https://picsum.photos/id/401/600/400", alt: "Fireplace redesign" },
  { src: "https://picsum.photos/id/416/600/400", alt: "Outdoor kitchen" },
  { src: "https://picsum.photos/id/429/600/400", alt: "Mudroom renovation" },
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
    <section id="portfolio" className="relative py-32 lg:py-40 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 mb-16">
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
