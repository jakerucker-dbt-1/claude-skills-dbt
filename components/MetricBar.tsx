// FILE: components/MetricBar.tsx
'use client';

import { motion } from 'framer-motion';
import { JACOB } from '@/lib/data';

export default function MetricBar() {
  return (
    <section className="py-8 border-y border-border bg-panel/50 backdrop-blur-sm">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {JACOB.metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="inline-flex flex-col items-center px-6 py-4 glass-panel rounded-pill">
                <p className="text-2xl md:text-3xl font-bold text-accent mb-1">
                  {metric.value}
                </p>
                <p className="text-sm text-muted font-medium">
                  {metric.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
