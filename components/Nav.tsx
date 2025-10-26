// FILE: components/Nav.tsx
'use client';

import { useState, useEffect } from 'react';
import { JACOB } from '@/lib/data';

const NAV_ITEMS = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Writing', href: '#writing' },
  { label: 'Contact', href: '#contact' },
];

export default function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/80 backdrop-blur-xl border-b border-border shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a
            href="#"
            className="text-xl md:text-2xl font-bold text-text hover:text-accent transition-colors focus-ring rounded-lg px-2"
            aria-label="Jacob Rucker - Home"
          >
            {JACOB.name.split(' ')[0]}
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-8" role="menubar">
            {NAV_ITEMS.map((item) => (
              <li key={item.href} role="none">
                <a
                  href={item.href}
                  className="text-sm font-medium text-muted hover:text-text transition-colors focus-ring rounded-lg px-3 py-2"
                  role="menuitem"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <a
            href={`mailto:${JACOB.email}`}
            className="hidden md:inline-flex items-center gap-2 px-4 py-2 bg-accent hover:bg-accent-hover text-white font-medium rounded-lg transition-all duration-200 focus-ring hover:shadow-glow"
          >
            Get in Touch
          </a>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-muted hover:text-text focus-ring rounded-lg"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
