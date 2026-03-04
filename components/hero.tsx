"use client";

import { useEffect, useRef, useState } from "react";
import { PawPrint } from "lucide-react";

export function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-[85vh] flex items-center overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 bg-gradient-warm" />
      <div className="absolute top-20 right-10 text-8xl opacity-10 animate-float">
        🐾
      </div>
      <div className="absolute bottom-20 left-10 text-6xl opacity-10 animate-float delay-300">
        🐾
      </div>
      <div className="absolute top-1/3 left-1/4 text-4xl opacity-5 animate-paw delay-500">
        🐱
      </div>
      <div className="absolute bottom-1/3 right-1/4 text-4xl opacity-5 animate-paw delay-200">
        😺
      </div>

      {/* Decorative circles */}
      <div className="absolute top-1/4 right-1/3 w-64 h-64 bg-caramel/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-blush/30 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-6 py-20">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <div
            className={`flex items-center gap-3 mb-6 transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            <PawPrint className="w-5 h-5 text-caramel" />
            <span className="text-warm-gray font-medium tracking-wide uppercase text-sm">
              Welcome to my cozy corner
            </span>
          </div>

          {/* Main headline */}
          <h1
            className={`text-charcoal mb-6 leading-tight transition-all duration-700 delay-100 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            There's something magical about the moment a cat chooses to sit on
            your lap
          </h1>

          {/* Subheadline */}
          <p
            className={`text-xl md:text-2xl text-warm-gray leading-relaxed mb-8 max-w-2xl transition-all duration-700 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            That gentle weight, the rhythmic purring, the slow blink of trust—it's
            a language all its own.
          </p>

          {/* Introduction */}
          <div
            className={`bg-white/50 backdrop-blur-sm rounded-3xl p-8 shadow-soft border border-caramel/10 max-w-2xl transition-all duration-700 delay-300 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            <p className="text-lg text-charcoal/80 leading-relaxed mb-4">
              I'm <span className="font-semibold text-caramel-dark">Lena</span>,
              and this blog is my love letter to the feline friends who have
              filled my life with joy, laughter, and the occasional 3 AM zoomie
              session.
            </p>
            <p className="text-warm-gray leading-relaxed">
              Whether you're a seasoned cat parent or simply someone who
              appreciates the quiet wisdom of our whiskered companions, I'm so
              glad you're here.
            </p>
          </div>

          {/* CTA */}
          <div
            className={`flex flex-wrap gap-4 mt-10 transition-all duration-700 delay-400 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            <a
              href="#stories"
              className="inline-flex items-center gap-2 bg-caramel hover:bg-caramel-dark text-white px-8 py-4 rounded-full transition-all duration-300 shadow-cozy hover:shadow-cozy-lg font-semibold text-lg"
            >
              Read Stories
              <span className="text-xl">📚</span>
            </a>
            <a
              href="#about"
              className="inline-flex items-center gap-2 bg-white hover:bg-blush text-charcoal px-8 py-4 rounded-full transition-all duration-300 shadow-soft border border-caramel/20 font-semibold text-lg"
            >
              Meet My Cats
              <span className="text-xl">🐱</span>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
        >
          <path
            d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="#FDF8F3"
          />
        </svg>
      </div>
    </section>
  );
}
