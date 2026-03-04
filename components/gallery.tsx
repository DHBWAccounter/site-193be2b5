"use client";

import { useEffect, useRef, useState } from "react";
import { Camera, Heart } from "lucide-react";

export function Gallery() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const galleries = [
    {
      title: "Mochi's Greatest Hits",
      description:
        "A collection of my tabby's finest moments: sleeping in impossibly small boxes, judging me from high perches, and that one time she fell asleep with her tongue out. Mochi has perfected the art of looking dignified in any situation.",
      emoji: "🐱",
      color: "from-caramel-light to-blush",
      photos: ["😴", "📦", "😼", "💤"],
    },
    {
      title: "Whiskers in His Element",
      description:
        "The orange overlord in all his glory. Featuring his famous 'loaf' position, his intense concentration while watching birds through the window, and that time he claimed the entire sofa as his personal kingdom.",
      emoji: "🧡",
      color: "from-soft-peach to-caramel-light",
      photos: ["🛋️", "🐦", "🍞", "👑"],
    },
    {
      title: "Shadow's Secret Soft Side",
      description:
        "Proof that black cats are the most photogenic of all. Shadow's gallery includes his signature 'sploot,' his unlikely friendship with the neighbor's golden retriever, and the adorable ear tufts that make everyone who meets him melt.",
      emoji: "🖤",
      color: "from-blush to-soft-peach",
      photos: ["🦮", "✨", "🐾", "💜"],
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="gallery"
      className="py-24 bg-cream relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-10 left-20 text-6xl opacity-5">📸</div>
      <div className="absolute bottom-20 right-10 text-5xl opacity-5">🖼️</div>

      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Camera className="w-6 h-6 text-caramel" />
            <span className="text-warm-gray font-medium tracking-wide uppercase text-sm">
              The Gallery of Feline Charm
            </span>
            <Camera className="w-6 h-6 text-caramel" />
          </div>
          <h2 className="text-charcoal mb-4">Captured Moments</h2>
          <p className="text-warm-gray max-w-xl mx-auto">
            A visual celebration of the personalities, quirks, and undeniable
            charm of my three rescue cats
          </p>
        </div>

        {/* Gallery cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {galleries.map((gallery, index) => (
            <div
              key={gallery.title}
              className={`group transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="bg-white/70 backdrop-blur-sm rounded-3xl overflow-hidden shadow-soft border border-caramel/10 hover:shadow-cozy-lg transition-all duration-500 hover:-translate-y-2">
                {/* Photo grid */}
                <div
                  className={`bg-gradient-to-br ${gallery.color} p-6 grid grid-cols-2 gap-3`}
                >
                  {gallery.photos.map((photo, i) => (
                    <div
                      key={i}
                      className="aspect-square bg-white/40 backdrop-blur-sm rounded-2xl flex items-center justify-center text-4xl hover:scale-105 transition-transform duration-300"
                    >
                      {photo}
                    </div>
                  ))}
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-2xl">{gallery.emoji}</span>
                    <h3 className="font-playfair text-xl text-charcoal">
                      {gallery.title}
                    </h3>
                  </div>
                  <p className="text-warm-gray text-sm leading-relaxed">
                    {gallery.description}
                  </p>
                  <button className="mt-4 flex items-center gap-2 text-caramel-dark font-medium hover:gap-3 transition-all duration-300 text-sm">
                    <Heart className="w-4 h-4" />
                    View Gallery
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
