"use client";

import { useEffect, useRef, useState } from "react";
import { Mail, Gift, Sparkles } from "lucide-react";

export function Newsletter() {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState("");
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    alert(`Thanks for subscribing with ${email}! 🐱`);
    setEmail("");
  };

  return (
    <section
      ref={sectionRef}
      id="newsletter"
      className="py-24 bg-cream relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 text-7xl opacity-5">💌</div>
      <div className="absolute bottom-10 right-10 text-6xl opacity-5">🎁</div>
      <div className="absolute top-1/3 right-1/4 text-4xl opacity-5 animate-float">
        ✨
      </div>

      <div className="max-w-4xl mx-auto px-6">
        <div
          className={`relative bg-gradient-to-br from-caramel/10 via-blush/30 to-soft-peach/20 rounded-5xl p-10 md:p-16 shadow-cozy-lg border border-caramel/20 transition-all duration-700 ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          {/* Decorative paw prints */}
          <div className="absolute top-6 left-6 text-3xl opacity-20 rotate-12">
            🐾
          </div>
          <div className="absolute bottom-6 right-6 text-3xl opacity-20 -rotate-12">
            🐾
          </div>

          <div className="text-center relative z-10">
            {/* Header */}
            <div className="flex items-center justify-center gap-3 mb-6">
              <Mail className="w-7 h-7 text-caramel" />
              <span className="text-warm-gray font-medium tracking-wide uppercase text-sm">
                Join Our Little Community
              </span>
              <Mail className="w-7 h-7 text-caramel" />
            </div>

            <h2 className="text-charcoal mb-4">
              Love Cats as Much as I Do?
            </h2>

            <p className="text-lg text-warm-gray max-w-xl mx-auto mb-8 leading-relaxed">
              Sign up for my newsletter and get weekly stories, tips, and
              exclusive photos delivered straight to your inbox. No spam—just
              pure feline goodness.
            </p>

            {/* Free guide highlight */}
            <div className="inline-flex items-center gap-3 bg-white/60 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-caramel/20">
              <Gift className="w-5 h-5 text-golden" />
              <span className="text-charcoal font-medium">
                Free guide: "10 Ways to Make Your Indoor Cat Happy"
              </span>
              <Sparkles className="w-5 h-5 text-golden" />
            </div>

            {/* Signup form */}
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  className="flex-grow px-6 py-4 rounded-full bg-white/80 backdrop-blur-sm border border-caramel/20 focus:border-caramel focus:ring-2 focus:ring-caramel/20 outline-none transition-all duration-300 text-charcoal placeholder:text-warm-gray/60"
                />
                <button
                  type="submit"
                  className="flex items-center justify-center gap-2 bg-caramel hover:bg-caramel-dark text-white px-8 py-4 rounded-full transition-all duration-300 shadow-cozy hover:shadow-cozy-lg font-semibold whitespace-nowrap"
                >
                  <Mail className="w-5 h-5" />
                  Subscribe
                </button>
              </div>
              <p className="text-sm text-warm-gray/70 mt-4">
                Join 2,000+ cat lovers. Unsubscribe anytime. 🐱
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
