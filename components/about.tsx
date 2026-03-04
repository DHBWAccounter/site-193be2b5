"use client";

import { useEffect, useRef, useState } from "react";
import { Heart, Sparkles } from "lucide-react";

export function About() {
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

  const cats = [
    {
      name: "Mochi",
      description: "Tiny tabby with a crooked ear",
      emoji: "🐱",
      color: "bg-caramel-light",
    },
    {
      name: "Whiskers",
      description: "Dignified orange gentleman",
      emoji: "🧡",
      color: "bg-soft-peach",
    },
    {
      name: "Shadow",
      description: "Sleek black cat with ear tufts",
      emoji: "🖤",
      color: "bg-blush",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-24 bg-cream relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-10 right-20 text-6xl opacity-5">✨</div>
      <div className="absolute bottom-20 left-10 text-5xl opacity-5">💫</div>

      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Heart className="w-6 h-6 text-caramel" />
            <span className="text-warm-gray font-medium tracking-wide uppercase text-sm">
              About Me & My Cats
            </span>
            <Heart className="w-6 h-6 text-caramel" />
          </div>
          <h2 className="text-charcoal">My Feline Family</h2>
        </div>

        {/* Cat cards */}
        <div
          className={`grid md:grid-cols-3 gap-6 mb-16 transition-all duration-700 delay-100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {cats.map((cat, index) => (
            <div
              key={cat.name}
              className={`${cat.color} rounded-3xl p-8 text-center transition-all duration-300 hover:scale-105 hover:shadow-cozy`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <span className="text-6xl mb-4 block">{cat.emoji}</span>
              <h3 className="font-playfair text-2xl text-charcoal mb-2">
                {cat.name}
              </h3>
              <p className="text-warm-gray">{cat.description}</p>
            </div>
          ))}
        </div>

        {/* Story content */}
        <div
          className={`max-w-3xl mx-auto transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-10 shadow-soft border border-caramel/10">
            <div className="flex items-start gap-4 mb-6">
              <Sparkles className="w-6 h-6 text-golden flex-shrink-0 mt-1" />
              <p className="text-lg text-charcoal/90 leading-relaxed">
                My journey into cat parenthood began quite by accident. I was
                volunteering at our local animal shelter when a tiny tabby with a
                crooked ear pressed her paw against the glass of her enclosure.{" "}
                <span className="font-semibold text-caramel-dark">
                  Mochi chose me that day
                </span>
                , and my life has never been the same.
              </p>
            </div>

            <p className="text-warm-gray leading-relaxed mb-6 pl-10">
              Since then, our family has grown to include Whiskers, a dignified
              orange gentleman who believes he runs the household (he does), and
              Shadow, a sleek black cat who followed me home from the park and
              decided to stay. Each of them has taught me something different
              about patience, love, and the art of living well.
            </p>

            <p className="text-warm-gray leading-relaxed mb-6 pl-10">
              By day, I work as a freelance illustrator, which means my cats are
              also my coworkers. They're terrible at meeting deadlines but
              excellent at providing emotional support during stressful projects.
              This blog is my way of sharing the lessons they've taught me and
              connecting with fellow cat enthusiasts around the world.
            </p>

            <div className="bg-blush/50 rounded-2xl p-6 border-l-4 border-caramel">
              <p className="text-charcoal/80 italic font-medium">
                "I believe cats find us when we need them."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
