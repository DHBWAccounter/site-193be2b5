"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDown, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";

export function FAQ() {
  const [isVisible, setIsVisible] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
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

  const faqs = [
    {
      question: "How did you end up with three cats?",
      answer:
        "It happened one cat at a time, and I wouldn't change a thing. Each one came into my life when the time was right. Mochi was my first, adopted from a shelter. Whiskers showed up as a stray who needed a home. Shadow literally followed me home from a walk. I believe cats find us when we need them.",
    },
    {
      question: "What's the best advice for new cat owners?",
      answer:
        "Patience, patience, patience. Cats operate on their own timeline, and earning their trust takes time. Also, invest in a good litter scoop—you'll be using it a lot. And never underestimate the entertainment value of a simple cardboard box.",
    },
    {
      question: "Do your cats get along?",
      answer:
        "Most of the time! It took about three months for everyone to find their place in the hierarchy. Now they're a proper little family. They even groom each other sometimes, which is the highest compliment in cat language.",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="faq"
      className="py-24 bg-gradient-warm relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-20 right-20 text-6xl opacity-5">💬</div>
      <div className="absolute bottom-20 left-20 text-5xl opacity-5">❓</div>

      <div className="max-w-4xl mx-auto px-6">
        {/* Section header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <MessageCircle className="w-6 h-6 text-caramel" />
            <span className="text-warm-gray font-medium tracking-wide uppercase text-sm">
              Questions I Get Asked Often
            </span>
            <MessageCircle className="w-6 h-6 text-caramel" />
          </div>
          <h2 className="text-charcoal mb-4">Frequently Asked Questions</h2>
          <p className="text-warm-gray max-w-xl mx-auto">
            Curious minds want to know—here are the answers to the questions I
            hear most often
          </p>
        </div>

        {/* FAQ accordion */}
        <div
          className={`space-y-4 transition-all duration-700 delay-100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-soft border border-caramel/10 overflow-hidden transition-all duration-300 hover:shadow-cozy"
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="w-full px-8 py-6 flex items-center justify-between text-left"
              >
                <span className="font-playfair text-lg text-charcoal pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={cn(
                    "w-5 h-5 text-caramel flex-shrink-0 transition-transform duration-300",
                    openIndex === index && "rotate-180"
                  )}
                />
              </button>
              <div
                className={cn(
                  "overflow-hidden transition-all duration-300",
                  openIndex === index ? "max-h-96" : "max-h-0"
                )}
              >
                <div className="px-8 pb-6 pt-0">
                  <div className="bg-blush/50 rounded-xl p-5 border-l-4 border-caramel">
                    <p className="text-warm-gray leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional note */}
        <div
          className={`mt-12 text-center transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-warm-gray">
            Have another question?{" "}
            <a
              href="mailto:hello@lenascatblog.com"
              className="text-caramel-dark font-semibold hover:underline"
            >
              Drop me a line
            </a>{" "}
            💌
          </p>
        </div>
      </div>
    </section>
  );
}
