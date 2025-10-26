// FILE: components/WritingList.tsx
'use client';

import { motion } from 'framer-motion';
import { JACOB } from '@/lib/data';
import { ExternalLink } from 'lucide-react';

export default function WritingList() {
  return (
    <div className="max-w-3xl mx-auto">
      <ul className="space-y-4" role="list">
        {JACOB.writing.map((article, index) => (
          <motion.li
            key={article.title}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <a
              href={article.url}
              className="glass-panel-hover p-6 flex items-start justify-between gap-4 group"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex-grow">
                <h3 className="text-lg font-semibold text-text group-hover:text-accent transition-colors mb-2">
                  {article.title}
                </h3>
                <time className="text-sm text-muted">
                  {new Date(article.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </time>
              </div>
              <ExternalLink className="w-5 h-5 text-muted group-hover:text-accent transition-colors flex-shrink-0 mt-1" />
            </a>
          </motion.li>
        ))}
      </ul>

      {JACOB.writing.length === 0 && (
        <p className="text-center text-muted py-12">
          Writing samples coming soon...
        </p>
      )}
    </div>
  );
}
