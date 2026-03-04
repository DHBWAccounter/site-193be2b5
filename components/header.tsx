"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Heart } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Stories", href: "#stories" },
  { label: "Gallery", href: "#gallery" },
  { label: "About", href: "#about" },
  { label: "FAQ", href: "#faq" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-cream/80 backdrop-blur-md border-b border-caramel/10">
      <nav className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 group"
          >
            <div className="relative">
              <span className="text-3xl group-hover:animate-paw">🐱</span>
            </div>
            <div className="flex flex-col">
              <span className="font-playfair text-xl font-semibold text-charcoal leading-tight">
                Lena's Cat Blog
              </span>
              <span className="text-xs text-warm-gray tracking-wide">
                Tales from a Feline Friend
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-warm-gray hover:text-caramel-dark transition-colors duration-300 font-medium relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-caramel transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
            <Link
              href="#newsletter"
              className="flex items-center gap-2 bg-caramel hover:bg-caramel-dark text-white px-5 py-2.5 rounded-full transition-all duration-300 shadow-soft hover:shadow-cozy font-medium"
            >
              <Heart className="w-4 h-4" />
              Subscribe
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-charcoal hover:text-caramel transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "md:hidden overflow-hidden transition-all duration-300",
            isOpen ? "max-h-96 pt-6" : "max-h-0"
          )}
        >
          <div className="flex flex-col gap-4 pb-4">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-warm-gray hover:text-caramel-dark transition-colors duration-300 font-medium py-2"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="#newsletter"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center gap-2 bg-caramel hover:bg-caramel-dark text-white px-5 py-3 rounded-full transition-all duration-300 font-medium mt-2"
            >
              <Heart className="w-4 h-4" />
              Subscribe
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
