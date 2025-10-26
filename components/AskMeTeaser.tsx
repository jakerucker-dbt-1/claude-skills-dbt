// FILE: components/AskMeTeaser.tsx
'use client';

import { motion } from 'framer-motion';
import { JACOB } from '@/lib/data';
import { MessageCircle, Mail, Linkedin } from 'lucide-react';

export default function AskMeTeaser() {
  return (
    <div className="max-w-3xl mx-auto space-y-8">
      {/* Future Q&A Feature Teaser */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="glass-panel p-6 md:p-8 border-2 border-accent/20"
      >
        <div className="flex items-start gap-4 mb-6">
          <div className="p-3 rounded-lg bg-accent/10">
            <MessageCircle className="w-6 h-6 text-accent" />
          </div>
          <div className="flex-grow">
            <h3 className="text-xl font-semibold text-text mb-2">
              Ask Me Anything
            </h3>
            <p className="text-muted text-sm">
              Soon: Ask questions about my experience, skills, and projects.
              Powered by Supabase + AI.
            </p>
          </div>
        </div>

        <div className="space-y-3">
          <input
            type="text"
            placeholder="e.g., Tell me about your experience with dbt Cloud POCs..."
            disabled
            className="w-full px-4 py-3 bg-background/50 border border-border rounded-lg text-text placeholder:text-muted/50 focus:outline-none focus:border-accent/50 transition-colors cursor-not-allowed opacity-60"
            aria-label="Question input (coming soon)"
          />
          <button
            disabled
            className="w-full px-6 py-3 bg-accent/20 text-accent font-medium rounded-lg cursor-not-allowed opacity-60"
            aria-label="Submit question (coming soon)"
          >
            Coming Soon
          </button>
        </div>
      </motion.div>

      {/* Contact Methods */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
      >
        <a
          href={`mailto:${JACOB.email}`}
          className="glass-panel-hover p-6 flex items-center gap-4 group"
        >
          <div className="p-3 rounded-lg bg-accent/10 text-accent group-hover:bg-accent group-hover:text-white transition-colors">
            <Mail className="w-6 h-6" />
          </div>
          <div>
            <p className="font-medium text-text group-hover:text-accent transition-colors">
              Email
            </p>
            <p className="text-sm text-muted">{JACOB.email}</p>
          </div>
        </a>

        <a
          href={`https://${JACOB.linkedin}`}
          target="_blank"
          rel="noopener noreferrer"
          className="glass-panel-hover p-6 flex items-center gap-4 group"
        >
          <div className="p-3 rounded-lg bg-accent/10 text-accent group-hover:bg-accent group-hover:text-white transition-colors">
            <Linkedin className="w-6 h-6" />
          </div>
          <div>
            <p className="font-medium text-text group-hover:text-accent transition-colors">
              LinkedIn
            </p>
            <p className="text-sm text-muted">Connect with me</p>
          </div>
        </a>
      </motion.div>
    </div>
  );
}
