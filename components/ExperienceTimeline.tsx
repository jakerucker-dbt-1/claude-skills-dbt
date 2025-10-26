// FILE: components/ExperienceTimeline.tsx
'use client';

import { motion } from 'framer-motion';
import { JACOB } from '@/lib/data';

export default function ExperienceTimeline() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="space-y-8">
        {JACOB.experience.map((exp, index) => (
          <motion.article
            key={`${exp.company}-${exp.role}`}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="glass-panel-hover p-6 md:p-8 border-l-4 border-accent"
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
              <div>
                <h3 className="text-xl md:text-2xl font-semibold text-text mb-1">
                  {exp.role}
                </h3>
                <p className="text-lg text-accent font-medium">
                  {exp.company}
                </p>
              </div>
              <time className="text-sm md:text-base text-muted font-medium whitespace-nowrap">
                {exp.dates}
              </time>
            </div>
            <ul className="space-y-3" role="list">
              {exp.bullets.map((bullet, i) => (
                <li key={i} className="flex items-start gap-3 text-muted">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                  <span className="leading-relaxed">{bullet}</span>
                </li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>

      {/* Education Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-12 glass-panel p-6 md:p-8"
      >
        <h3 className="text-xl md:text-2xl font-semibold text-text mb-4">
          Education
        </h3>
        {JACOB.education.map((edu) => (
          <div key={edu.school} className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-lg font-medium text-text">{edu.degree}</p>
              <p className="text-muted">{edu.school}</p>
            </div>
            <p className="text-muted font-medium mt-2 md:mt-0">{edu.grad}</p>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
