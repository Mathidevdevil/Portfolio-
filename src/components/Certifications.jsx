import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight, Award } from 'lucide-react';
import { certificates, portfolioContent } from '../data/portfolio.js';

export default function Certifications() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="certifications"
      className="portfolio-section certifications-section"
      aria-labelledby="certifications-title"
    >
      <div className="certifications-content">
        <motion.h2
          id="certifications-title"
          className="section-title certifications-title"
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          {portfolioContent.sectionTitles.certifications}
        </motion.h2>

        <div className="certifications-grid">
          {certificates.map((certificate, index) => {
            const isAvailable = Boolean(certificate.link);
            const content = (
              <>
                <div className="certificate-topline">
                  <span className="certificate-icon" aria-hidden="true">
                    <Award size={18} />
                  </span>
                  {isAvailable && <ArrowUpRight className="certificate-arrow" size={16} aria-hidden="true" />}
                </div>
                <h3>{certificate.name}</h3>
                <p>{certificate.issuer}</p>
                {isAvailable && (
                  <span className="certificate-link-label">
                    {portfolioContent.certificateLinkLabel}
                    <ArrowUpRight size={14} aria-hidden="true" />
                  </span>
                )}
                {!isAvailable && (
                  <span className="certificate-link-unavailable">Verification link unavailable</span>
                )}
              </>
            );

            return (
              <motion.article
                className={`certificate-card${certificate.image ? ' certificate-card-has-image' : ''}`}
                key={certificate.name}
                initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{
                  duration: prefersReducedMotion ? 0 : 0.5,
                  delay: prefersReducedMotion ? 0 : index * 0.06,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                {certificate.image && (
                  <img
                    className="certificate-card-image"
                    src={certificate.image}
                    alt=""
                    aria-hidden="true"
                    loading="lazy"
                    decoding="async"
                  />
                )}
                {isAvailable ? (
                  <a
                    className="certificate-card-link"
                    href={certificate.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {content}
                  </a>
                ) : (
                  <div className="certificate-card-content">{content}</div>
                )}
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
