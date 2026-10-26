import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { portfolioContent } from '../data/portfolio.js';
import { learningItems } from '../data/learning.js';

const filters = [
  { label: '--all', value: 'all' },
  { label: '--active', value: 'active' },
  { label: '--done', value: 'done' },
];

const statusLabels = {
  learning: 'LEARNING',
  building: 'BUILDING',
  done: 'DONE',
};

export default function Learning() {
  const [activeFilter, setActiveFilter] = useState('all');
  const prefersReducedMotion = useReducedMotion();
  const sortedItems = [...learningItems].sort(
    (first, second) => Number(first.status === 'done') - Number(second.status === 'done'),
  );
  const visibleItems = sortedItems.filter((item) => {
    if (activeFilter === 'active') return item.status !== 'done';
    if (activeFilter === 'done') return item.status === 'done';
    return true;
  });

  return (
    <section
      id="learning"
      className="portfolio-section learning-section"
      aria-labelledby="learning-title"
    >
      <div className="learning-content">
        <p className="section-eyebrow">Command line update</p>
        <h2 id="learning-title" className="section-title learning-title">
          {portfolioContent.sectionTitles.learning}
        </h2>

        <div className="learning-terminal">
          <div className="learning-terminal-titlebar">
            <span className="learning-terminal-dots" aria-hidden="true">
              <span />
              <span />
              <span />
            </span>
            <span className="learning-terminal-title">mathi@portfolio: ~/learning</span>
          </div>

          <div className="learning-terminal-body">
            <p className="learning-command" aria-label="learning --status">
              <span aria-hidden="true">$ </span>learning --status
            </p>

            {visibleItems.length > 0 ? (
              <motion.ul
                className="learning-output"
                key={activeFilter}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
                variants={{
                  hidden: {},
                  visible: {
                    transition: {
                      staggerChildren: prefersReducedMotion ? 0 : 0.12,
                    },
                  },
                }}
                aria-live="polite"
              >
                {visibleItems.map(({ topic, detail, status, updated, proof }) => (
                  <motion.li
                    className="learning-line"
                    key={topic}
                    variants={{
                      hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 5 },
                      visible: {
                        opacity: 1,
                        y: 0,
                        transition: {
                          duration: prefersReducedMotion ? 0 : 0.35,
                          ease: [0.16, 1, 0.3, 1],
                        },
                      },
                    }}
                  >
                    <span className={`learning-line-status learning-line-status-${status}`}>
                      [{statusLabels[status]}]
                    </span>
                    <span className="learning-line-topic">{topic}</span>
                    <span className="learning-line-info">
                      <span className="learning-line-detail">{detail}</span>
                      <span className="learning-line-meta">
                        <time dateTime={updated}>updated {updated}</time>
                        {proof && (
                          <a href={proof} target="_blank" rel="noopener noreferrer">
                            [proof]
                          </a>
                        )}
                      </span>
                    </span>
                  </motion.li>
                ))}
              </motion.ul>
            ) : (
              <p className="learning-no-results" aria-live="polite">No completed topics yet.</p>
            )}

            <p className="learning-cursor" aria-hidden="true">
              $ <span>_</span>
            </p>
          </div>
        </div>

        <div className="learning-filters" role="group" aria-label="Filter learning topics">
          {filters.map(({ label, value }) => (
            <button
              className="learning-filter"
              key={value}
              type="button"
              aria-pressed={activeFilter === value}
              onClick={() => setActiveFilter(value)}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
