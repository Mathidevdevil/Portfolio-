import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';
import { contactContent, contactDetails } from '../data/portfolio.js';

const contactIcons = {
  email: Mail,
  github: Github,
  linkedin: Linkedin,
  phone: Phone,
};

export default function Contact() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="contact" className="portfolio-section contact-section" aria-labelledby="contact-title">
      <div className="contact-content">
        <div className="contact-layout">
          <motion.div
            className="contact-heading"
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 id="contact-title" className="section-title">{contactContent.heading}</h2>
            <p>{contactContent.description}</p>
          </motion.div>

          <motion.div
            className="contact-details-panel"
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{
              duration: prefersReducedMotion ? 0 : 0.55,
              delay: prefersReducedMotion ? 0 : 0.1,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <div className="contact-link-list">
              {contactDetails.map((detail) => {
                const Icon = contactIcons[detail.icon];
                const isExternal = detail.icon === 'github' || detail.icon === 'linkedin';

                return (
                  <a
                    className="contact-social-link"
                    key={detail.label}
                    href={detail.href}
                    target={isExternal ? '_blank' : undefined}
                    rel={isExternal ? 'noopener noreferrer' : undefined}
                  >
                    <Icon size={17} aria-hidden="true" />
                    <span className="contact-detail-copy">
                      <span className="contact-detail-label">{detail.label}</span>
                      <span className="contact-detail-value">{detail.value}</span>
                    </span>
                    {isExternal && <span className="contact-social-arrow" aria-hidden="true">↗</span>}
                  </a>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
