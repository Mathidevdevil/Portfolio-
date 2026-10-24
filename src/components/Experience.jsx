import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { portfolioContent } from '../data/portfolio.js';

export default function Experience() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="experience"
      className="portfolio-section experience-section"
      aria-labelledby="experience-title"
    >
      <div className="experience-content">
        <motion.h2
          id="experience-title"
          className="section-title experience-title"
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          {portfolioContent.sectionTitles.experience}
        </motion.h2>
        <div className="experience-timeline">
          <motion.div
            className="experience-progress-line"
            aria-hidden="true"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{
              duration: prefersReducedMotion ? 0 : 1.1,
              ease: [0.16, 1, 0.3, 1],
            }}
          />
          {portfolioContent.experience.map((exp, index) => (
            <motion.article
              key={exp.role}
              className="experience-item"
              initial={{ opacity: 0, x: prefersReducedMotion ? 0 : 14 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{
                duration: prefersReducedMotion ? 0 : 0.55,
                delay: prefersReducedMotion ? 0 : index * 0.12,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <span className="experience-marker" aria-hidden="true" />
              <div className="experience-card">
                <h3>{exp.role}</h3>
                <span className="experience-company-badge">{exp.company}</span>
                <p className="experience-meta">
                  {exp.location} | {exp.date}
                </p>
                <p className="experience-description">{exp.description}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
