"use client";

import Link from "next/link";
import { Heart, Mail, Instagram, ExternalLink } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-charcoal text-white relative overflow-hidden">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-caramel via-golden to-caramel" />

      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Main footer content */}
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          {/* Left column - About */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="text-4xl">🐱</span>
              <div>
                <h3 className="font-playfair text-2xl font-semibold">
                  Lena's Cat Blog
                </h3>
                <p className="text-white/60 text-sm">Tales from a Feline Friend</p>
              </div>
            </div>
            <p className="text-white/70 leading-relaxed mb-6 max-w-md">
              A warm, personal blog celebrating the joys and adventures of cat
              ownership, featuring stories, tips, and plenty of purrs.
            </p>

            {/* Contact */}
            <div className="flex items-center gap-3 text-white/70 hover:text-caramel transition-colors duration-300">
              <Mail className="w-5 h-5" />
              <a
                href="mailto:hello@lenascatblog.com"
                className="hover:text-caramel transition-colors"
              >
                hello@lenascatblog.com
              </a>
            </div>
          </div>

          {/* Right column - Social & Rescue note */}
          <div>
            {/* Social links */}
            <h4 className="font-playfair text-lg font-semibold mb-4 flex items-center gap-2">
              <span className="text-xl">📸</span>
              Follow the Cats
            </h4>
            <div className="space-y-3 mb-8">
              <a
                href="https://instagram.com/lenascatblog"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white/70 hover:text-caramel transition-colors duration-300 group"
              >
                <Instagram className="w-5 h-5" />
                <span>@lenascatblog</span>
                <span className="text-sm text-white/50 group-hover:text-caramel/70">
                  — daily cat photos and behind-the-scenes moments
                </span>
              </a>
              <a
                href="https://pinterest.com/lenascatblog"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white/70 hover:text-caramel transition-colors duration-300 group"
              >
                <ExternalLink className="w-5 h-5" />
                <span>Pinterest</span>
                <span className="text-sm text-white/50 group-hover:text-caramel/70">
                  — cat care tips, DIY toys, and cozy cat spaces
                </span>
              </a>
            </div>

            {/* Rescue note */}
            <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
              <h4 className="font-playfair text-lg font-semibold mb-3 flex items-center gap-2">
                <span className="text-xl">💜</span>
                A Note on Rescue
              </h4>
              <p className="text-white/70 text-sm leading-relaxed">
                All three of my cats came from rescue situations. If you're
                thinking about adding a feline friend to your family, please
                consider adopting from a local shelter or rescue organization.
                There are so many wonderful cats waiting for their forever homes.
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/50 text-sm text-center md:text-left">
              Made with love, plenty of cat hair, and an unreasonable amount of
              treats.
            </p>
            <div className="flex items-center gap-2 text-white/50 text-sm">
              <span>© 2024 Lena's Cat Blog</span>
              <Heart className="w-4 h-4 text-caramel animate-pulse" />
            </div>
          </div>
        </div>
      </div>

      {/* Decorative bottom paw prints */}
      <div className="absolute bottom-4 left-10 text-2xl opacity-10 rotate-12">
        🐾
      </div>
      <div className="absolute bottom-8 right-16 text-2xl opacity-10 -rotate-12">
        🐾
      </div>
    </footer>
  );
}
