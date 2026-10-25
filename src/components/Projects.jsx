import React, { useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowDownRight, ArrowUpRight, Cpu, Github, Plus, X } from 'lucide-react';
import { portfolioContent, projectCategories } from '../data/portfolio.js';

function ProjectDetailList({ title, items }) {
  if (!items?.length) return null;

  return (
    <section className="project-detail-section">
      <h3>{title}</h3>
      <ul>
        {items.map((item) => <li key={item}>{item}</li>)}
      </ul>
    </section>
  );
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeFilter, setActiveFilter] = useState('All');
  const dialogRef = useRef(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (!selectedProject) return undefined;

    const previouslyFocused = document.activeElement;
    const previousBodyOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    dialogRef.current?.focus();

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setSelectedProject(null);
        return;
      }

      if (event.key === 'Tab' && dialogRef.current) {
        const focusableItems = dialogRef.current.querySelectorAll(
          'a[href], button:not([disabled])',
        );
        const firstItem = focusableItems[0];
        const lastItem = focusableItems[focusableItems.length - 1];

        if (event.shiftKey && document.activeElement === firstItem) {
          event.preventDefault();
          lastItem?.focus();
        } else if (!event.shiftKey && document.activeElement === lastItem) {
          event.preventDefault();
          firstItem?.focus();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = previousBodyOverflow;
      if (previouslyFocused instanceof HTMLElement) previouslyFocused.focus();
    };
  }, [selectedProject]);

  const visibleCategories = projectCategories.filter(({ category }) => {
    if (activeFilter === 'All') return true;
    if (activeFilter === 'Full Stack') return category.startsWith('Full Stack');
    if (activeFilter === 'ML') return category.startsWith('Machine Learning');
    if (activeFilter === 'IoT') return category.startsWith('IoT');
    return category.startsWith('VLSI');
  });

  return (
    <section id="projects" className="portfolio-section projects-section" aria-labelledby="projects-title">
      <div className="projects-content">
        <motion.h2
          id="projects-title"
          className="section-title projects-title"
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          {portfolioContent.sectionTitles.projects}
        </motion.h2>

        <div className="project-filters" role="group" aria-label="Filter projects by category">
          {portfolioContent.projectFilters.map((filter) => (
            <button
              className={`project-filter${activeFilter === filter ? ' is-active' : ''}`}
              key={filter}
              type="button"
              aria-pressed={activeFilter === filter}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="project-groups">
          {visibleCategories.map((category, categoryIndex) => (
            <motion.div
              className="project-group"
              key={`${category.category}-${activeFilter}`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: prefersReducedMotion ? 0 : 0.1,
                  },
                },
              }}
            >
              <h3 className="project-category-title">{category.category}</h3>
              {category.projects.length === 0 ? (
                <div
                  className="project-empty-slot"
                  role="note"
                  aria-label={portfolioContent.projectActions.emptyVlsiSlot}
                >
                  <div className="empty-slot-chip" aria-hidden="true">
                    <Cpu size={24} />
                    <Plus size={13} />
                  </div>
                  <svg className="empty-slot-wave" viewBox="0 0 220 34" fill="none" aria-hidden="true">
                    <path d="M0 17h27V8h24v18h26V12h25v10h26V5h25v24h23V15h44" />
                  </svg>
                </div>
              ) : (
                <div className={`project-grid${category.projects.length === 1 ? ' project-grid-single' : ''}`}>
                  {category.projects.map((project, projectIndex) => (
                    <motion.article
                      className="project-card"
                      key={project.title}
                      variants={{
                        hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 16 },
                        visible: {
                          opacity: 1,
                          y: 0,
                          transition: {
                            duration: prefersReducedMotion ? 0 : 0.5,
                            ease: [0.16, 1, 0.3, 1],
                          },
                        },
                      }}
                    >
                      <div className="project-card-topline">
                        <span className="project-index">
                          {String(categoryIndex + 1).padStart(2, '0')}.{String(projectIndex + 1).padStart(2, '0')}
                        </span>
                        {project.githubLink && (
                          <a
                            className="project-icon-link"
                            href={project.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`GitHub: ${project.title}`}
                          >
                            <Github size={17} aria-hidden="true" />
                          </a>
                        )}
                      </div>

                      <h4>{project.title}</h4>
                      <p className="project-description">{project.description}</p>

                      <div className="project-tags" aria-label={portfolioContent.projectActions.technologyLabel}>
                        {project.tech.map((technology) => (
                          <span className="project-tag" key={technology}>{technology}</span>
                        ))}
                      </div>

                      <div className="project-card-actions">
                        <button
                          className="project-details-button"
                          type="button"
                          onClick={() => setSelectedProject(project)}
                        >
                          {portfolioContent.projectActions.viewDetails}
                          <ArrowDownRight size={16} aria-hidden="true" />
                        </button>
                        {project.liveLink && (
                          <a
                            className="project-live-link"
                            href={project.liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {portfolioContent.projectActions.liveDemo}
                            <ArrowUpRight size={14} aria-hidden="true" />
                          </a>
                        )}
                      </div>
                    </motion.article>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <div
          className="project-dialog-backdrop"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setSelectedProject(null);
          }}
        >
          <div
            ref={dialogRef}
            className="project-dialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-dialog-title"
            tabIndex={-1}
          >
            <button
              className="project-dialog-close"
              type="button"
              onClick={() => setSelectedProject(null)}
              aria-label="Close project details"
            >
              <X size={18} aria-hidden="true" />
            </button>
            <p className="section-eyebrow">{portfolioContent.projectActions.detailsHeading}</p>
            <h2 id="project-dialog-title">{selectedProject.title}</h2>
            <p className="project-dialog-description">{selectedProject.description}</p>
            {selectedProject.details ? (
              <div className="project-detail-content">
                <ProjectDetailList title="Objectives" items={selectedProject.details.objectives} />
                <ProjectDetailList title="Key Features" items={selectedProject.details.features} />
                <ProjectDetailList title="Hardware Components" items={selectedProject.details.hardwareComponents} />
                {selectedProject.details.technologies?.length > 0 && (
                  <section className="project-detail-section">
                    <h3>{portfolioContent.projectActions.technologyLabel}</h3>
                    <div className="project-detail-tech-groups">
                      {selectedProject.details.technologies.map(({ label, items }) => (
                        <div className="project-detail-tech-group" key={label}>
                          <h4>{label}</h4>
                          <div className="project-tags">
                            {items.map((technology) => (
                              <span className="project-tag" key={technology}>{technology}</span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>
                )}
                <ProjectDetailList title="Security Measures" items={selectedProject.details.securityMeasures} />
                <ProjectDetailList title="Implementation Highlights" items={selectedProject.details.implementationHighlights} />
                <ProjectDetailList title="Future Enhancements" items={selectedProject.details.futureEnhancements} />
                {selectedProject.details.outcome && (
                  <section className="project-detail-section">
                    <h3>Outcome</h3>
                    <p>{selectedProject.details.outcome}</p>
                  </section>
                )}
              </div>
            ) : (
              <div className="project-tags" aria-label={portfolioContent.projectActions.technologyLabel}>
                {selectedProject.tech.map((technology) => (
                  <span className="project-tag" key={technology}>{technology}</span>
                ))}
              </div>
            )}
            <div className="project-dialog-actions">
              {selectedProject.liveLink && (
                <a
                  className="hero-button hero-button-primary"
                  href={selectedProject.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {portfolioContent.projectActions.liveDemo}
                  <ArrowUpRight size={15} aria-hidden="true" />
                </a>
              )}
              {selectedProject.githubLink && (
                <a
                  className="hero-button hero-button-secondary"
                  href={selectedProject.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {portfolioContent.projectActions.github}
                  <ArrowUpRight size={15} aria-hidden="true" />
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
