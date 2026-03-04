"use client";

import { useEffect, useRef, useState } from "react";
import { Calendar, ArrowRight, Clock } from "lucide-react";

export function BlogList() {
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

  const posts = [
    {
      title: "The Day Shadow Learned to Fetch",
      date: "November 12, 2024",
      excerpt:
        "I always thought fetching was a dog thing—until Shadow dropped a crumpled receipt at my feet and stared expectantly. What followed was a three-hour session of toss and retrieve that left us both exhausted and happy. Here's how my black cat became the most dedicated retriever I've ever known...",
      emoji: "🎾",
      readTime: "5 min read",
    },
    {
      title: "Creating the Perfect Cat Corner: A Guide",
      date: "November 5, 2024",
      excerpt:
        "Every cat deserves a space to call their own. After years of trial and error (and one very expensive cat tree that nobody used), I've finally cracked the code on creating cozy, stimulating spaces that cats actually love. Spoiler: it involves more cardboard boxes than you'd expect...",
      emoji: "🏠",
      readTime: "8 min read",
    },
    {
      title: "What My Cats Taught Me About Rest",
      date: "October 28, 2024",
      excerpt:
        "In a world that glorifies busyness, cats are radical in their commitment to rest. Watching Mochi nap in a sunbeam for the fourth time today, I realized she might be onto something. This is what I've learned about slowing down from the true experts of relaxation...",
      emoji: "😴",
      readTime: "6 min read",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="stories"
      className="py-24 bg-gradient-cozy relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-caramel/30 to-transparent" />
      <div className="absolute top-20 right-10 text-5xl opacity-5">📖</div>
      <div className="absolute bottom-20 left-10 text-5xl opacity-5">✍️</div>

      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="text-2xl">📝</span>
            <span className="text-warm-gray font-medium tracking-wide uppercase text-sm">
              Recent Stories
            </span>
            <span className="text-2xl">📝</span>
          </div>
          <h2 className="text-charcoal mb-4">Latest from the Blog</h2>
          <p className="text-warm-gray max-w-xl mx-auto">
            Heartwarming tales, practical tips, and the daily adventures of life
            with my three rescue cats
          </p>
        </div>

        {/* Blog posts */}
        <div className="grid gap-8">
          {posts.map((post, index) => (
            <article
              key={post.title}
              className={`group bg-white/70 backdrop-blur-sm rounded-3xl overflow-hidden shadow-soft border border-caramel/10 hover:shadow-cozy-lg transition-all duration-500 hover:-translate-y-1 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="p-8 md:p-10 flex flex-col md:flex-row gap-6">
                {/* Emoji icon */}
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-blush rounded-2xl flex items-center justify-center text-4xl group-hover:scale-110 transition-transform duration-300">
                    {post.emoji}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-grow">
                  <div className="flex flex-wrap items-center gap-4 mb-3">
                    <div className="flex items-center gap-2 text-warm-gray text-sm">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-warm-gray text-sm">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  <h3 className="font-playfair text-2xl text-charcoal mb-3 group-hover:text-caramel-dark transition-colors duration-300">
                    {post.title}
                  </h3>

                  <p className="text-warm-gray leading-relaxed mb-4">
                    {post.excerpt}
                  </p>

                  <button className="inline-flex items-center gap-2 text-caramel-dark font-semibold hover:gap-3 transition-all duration-300">
                    Read More
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View all button */}
        <div
          className={`text-center mt-12 transition-all duration-700 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <button className="inline-flex items-center gap-3 bg-white hover:bg-blush text-charcoal px-8 py-4 rounded-full transition-all duration-300 shadow-soft hover:shadow-cozy border border-caramel/20 font-semibold">
            View All Stories
            <span className="text-xl">📚</span>
          </button>
        </div>
      </div>
    </section>
  );
}
