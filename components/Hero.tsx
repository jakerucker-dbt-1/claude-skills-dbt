// FILE: components/Hero.tsx
'use client';

import { motion } from 'framer-motion';
import { JACOB } from '@/lib/data';
import { Download, Mail } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-10">
      {/* Ambient gradient background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Name with fade-in animation */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-hero-sm md:text-hero-lg mb-6"
          >
            {JACOB.name}
          </motion.h1>

          {/* Headline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl md:text-2xl text-accent font-medium mb-6"
          >
            {JACOB.headline}
          </motion.p>

          {/* Summary */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-muted leading-relaxed max-w-2xl mx-auto mb-10"
          >
            {JACOB.summary}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href={JACOB.links.pdf}
              className="inline-flex items-center gap-2 px-6 py-3 bg-accent hover:bg-accent-hover text-white font-medium rounded-lg transition-all duration-200 focus-ring hover:shadow-glow hover:-translate-y-0.5"
            >
              <Download className="w-5 h-5" />
              Download Resume
            </a>
            <a
              href={`mailto:${JACOB.email}`}
              className="inline-flex items-center gap-2 px-6 py-3 glass-panel-hover text-text font-medium rounded-lg focus-ring"
            >
              <Mail className="w-5 h-5" />
              Email Me
            </a>
          </motion.div>

          {/* Location & Contact Info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-4 text-sm text-muted"
          >
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {JACOB.location}
            </span>
            <span className="text-border">•</span>
            <a
              href={`mailto:${JACOB.email}`}
              className="hover:text-accent transition-colors link-underline"
            >
              {JACOB.email}
            </a>
            <span className="text-border">•</span>
            <a
              href={`https://${JACOB.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors link-underline"
            >
              LinkedIn
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
