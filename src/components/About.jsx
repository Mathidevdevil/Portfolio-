import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import { portfolioContent } from '../data/portfolio.js';
import portrait from '../assets/mathiyarasu-portrait.png';
import kaveryCampus from '../assets/the-kavery-polytechnic-college-salem.webp';
import governmentCollege from '../assets/government-college-of-engineering-erode.jpg';
import governmentHighSchool from '../assets/government-high-school-karattupudur.jpg';

export default function About() {
  const prefersReducedMotion = useReducedMotion();
  const reveal = {
    initial: { opacity: 0, y: prefersReducedMotion ? 0 : 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-80px' },
    transition: { duration: prefersReducedMotion ? 0 : 0.65, ease: [0.16, 1, 0.3, 1] },
  };

  return (
    <section id="about" className="portfolio-section about-section" aria-labelledby="about-title">
      <div className="about-layout">
        <motion.div className="about-portrait-frame" {...reveal}>
          <img
            className="about-portrait"
            src={portrait}
            alt="Portrait of Mathiyarasu Arumugam"
            loading="lazy"
          />
        </motion.div>

        <motion.div className="about-copy" {...reveal}>
          <p className="section-eyebrow">About</p>
          <h2 id="about-title" className="section-title">{portfolioContent.sectionTitles.about}</h2>
          <p className="about-description">{portfolioContent.about.description}</p>
          <ul className="about-highlights" aria-label="Core highlights">
            {portfolioContent.about.highlights.map(({ label, details }) => (
              <li key={label}>
                <strong>{label}:</strong> {details}
              </li>
            ))}
          </ul>
        </motion.div>

        <div className="about-education-grid" aria-label="Education">
          {portfolioContent.about.education.map((education, index) => (
            <motion.article
              className={`about-education about-education-${index === 0 ? 'degree' : index === 1 ? 'diploma' : 'school'}`}
              key={education.title}
              {...reveal}
              transition={{ ...reveal.transition, delay: 0.1 + index * 0.12 }}
            >
              {index === 0 && (
                <img
                  className="about-education-image"
                  src={governmentCollege}
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                />
              )}
              {index === 1 && (
                <img
                  className="about-education-image"
                  src={kaveryCampus}
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                />
              )}
              {index === 2 && (
                <img
                  className="about-education-image"
                  src={governmentHighSchool}
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                />
              )}
              <div className="about-education-top">
                <div className="about-education-icon" aria-hidden="true">
                  <GraduationCap size={18} />
                </div>
                {education.period && <span className="education-period">{education.period}</span>}
                {education.result && <span className="education-result">{education.result}</span>}
              </div>
              <h3>{education.title}</h3>
              <p>{education.institution}</p>
              {education.university && (
                <p className="education-university">{education.university}</p>
              )}
            </motion.article>
          ))}
        </div>
        <div className="about-circuit-mark" aria-hidden="true">
          <svg viewBox="0 0 180 48" fill="none">
            <path d="M0 24h40v-12h28v24h34V18h28v6h50" />
            <circle cx="40" cy="12" r="2" />
            <circle cx="102" cy="36" r="2" />
            <circle cx="158" cy="24" r="2" />
          </svg>
        </div>
      </div>
    </section>
  );
}
