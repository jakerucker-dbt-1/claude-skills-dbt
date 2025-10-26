// FILE: components/ProjectCards.tsx
'use client';

import { motion } from 'framer-motion';
import { PROJECTS } from '@/lib/data';
import Badge from '@/components/Badge';
import { ExternalLink } from 'lucide-react';

export default function ProjectCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
      {PROJECTS.map((project, index) => (
        <motion.article
          key={project.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          className="glass-panel-hover p-6 flex flex-col h-full group"
        >
          <div className="flex items-start justify-between mb-4">
            <h3 className="text-xl font-semibold text-text group-hover:text-accent transition-colors">
              {project.title}
            </h3>
            <ExternalLink className="w-5 h-5 text-muted group-hover:text-accent transition-colors opacity-0 group-hover:opacity-100" />
          </div>

          <p className="text-muted leading-relaxed mb-4 flex-grow">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>

          <div className="pt-4 border-t border-border">
            <span className="text-sm font-medium text-accent">
              {project.status}
            </span>
          </div>
        </motion.article>
      ))}
    </div>
  );
}
