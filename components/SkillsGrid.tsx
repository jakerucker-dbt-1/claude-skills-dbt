// FILE: components/SkillsGrid.tsx
'use client';

import { motion } from 'framer-motion';
import { JACOB } from '@/lib/data';
import Badge from '@/components/Badge';
import { Database, TrendingUp, Wrench, Award } from 'lucide-react';

const CATEGORY_ICONS: Record<string, React.ReactNode> = {
  'Modern Data Stack': <Database className="w-5 h-5" />,
  'Sales Expertise': <TrendingUp className="w-5 h-5" />,
  'GTM Tools': <Wrench className="w-5 h-5" />,
  'Performance': <Award className="w-5 h-5" />,
};

export default function SkillsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
      {Object.entries(JACOB.skills).map(([category, skills], index) => (
        <motion.div
          key={category}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          className="glass-panel p-6 md:p-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-lg bg-accent/10 text-accent">
              {CATEGORY_ICONS[category]}
            </div>
            <h3 className="text-xl font-semibold text-text">{category}</h3>
          </div>

          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <Badge key={skill} variant="primary">
                {skill}
              </Badge>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
