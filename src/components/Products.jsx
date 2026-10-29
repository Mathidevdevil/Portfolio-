import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight, Check, Github, Plane, TrendingUp, Wallet } from 'lucide-react';
import { portfolioContent, productsData } from '../data/portfolio.js';

export default function Products() {
  const [activeFilter, setActiveFilter] = useState('All');
  const prefersReducedMotion = useReducedMotion();

  const hasFilters = portfolioContent.productsFilters && portfolioContent.productsFilters.length > 1;

  const visibleProducts = productsData.filter((product) => {
    if (!hasFilters || activeFilter === 'All') return true;
    return product.filter === activeFilter;
  });

  return (
    <section
      id="products"
      className="portfolio-section products-section"
      aria-labelledby="products-title"
    >
      <div className="products-content">
        <motion.div
          className="products-header"
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="section-eyebrow">{portfolioContent.productActions.eyebrow}</p>
          <h2 id="products-title" className="section-title products-title">
            {portfolioContent.sectionTitles.products}
          </h2>
          <p className="products-lead-text">
            {portfolioContent.productActions.lead}
          </p>
        </motion.div>

        {hasFilters && (
          <div className="product-filters" role="group" aria-label="Filter products by category">
            {portfolioContent.productsFilters.map((filter) => (
              <button
                key={filter}
                type="button"
                className={`product-filter${activeFilter === filter ? ' is-active' : ''}`}
                aria-pressed={activeFilter === filter}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>
        )}

        <div className={`products-grid${visibleProducts.length === 1 ? ' products-grid-single' : ''}`}>
          {visibleProducts.map((product) => (
            <motion.article
              key={product.id}
              className={`product-card${visibleProducts.length === 1 ? ' product-card-featured' : ''}`}
              initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{
                duration: prefersReducedMotion ? 0 : 0.5,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <div className="product-card-topline">
                <div className="product-category-group">
                  <span className="product-category-pill">{product.category}</span>
                  {product.subtitle && (
                    <span className="product-subtitle-tag">{product.subtitle}</span>
                  )}
                </div>
                <span className={`product-status-pill status-${product.status}`}>
                  <span className={`product-status-dot dot-${product.status}`} aria-hidden="true" />
                  {product.badge}
                </span>
              </div>

              <div className="product-card-body">
                <div className="product-title-row">
                  <div className="product-title-icon-wrapper" aria-hidden="true">
                    <Wallet size={24} className="product-brand-icon" />
                  </div>
                  <div>
                    <h3 className="product-card-title">{product.title}</h3>
                    <p className="product-card-tagline">{product.tagline}</p>
                  </div>
                </div>

                <p className="product-card-desc">{product.description}</p>

                {/* Key feature pillars highlight */}
                <div className="product-highlight-pills">
                  <div className="product-highlight-pill">
                    <TrendingUp size={15} aria-hidden="true" />
                    <span>Income & Expense Tracking</span>
                  </div>
                  <div className="product-highlight-pill">
                    <Plane size={15} aria-hidden="true" />
                    <span>Travel Plan Budgeting</span>
                  </div>
                </div>

                {product.features?.length > 0 && (
                  <div className="product-features-block">
                    <h4 className="product-features-heading">Core Capabilities</h4>
                    <ul className="product-features-list">
                      {product.features.map((feature, idx) => (
                        <li key={idx} className="product-feature-item">
                          <span className="product-feature-icon" aria-hidden="true">
                            <Check size={13} strokeWidth={2.4} />
                          </span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              <div className="product-card-footer">
                <div className="product-tech-pills" aria-label="Technologies used">
                  {product.tech.map((techItem) => (
                    <span key={techItem} className="product-tech-tag">{techItem}</span>
                  ))}
                </div>

                <div className="product-actions-bar">
                  {product.liveLink && (
                    <a
                      className="product-btn product-btn-primary"
                      href={product.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span>{portfolioContent.productActions.liveDemo}</span>
                      <ArrowUpRight size={14} aria-hidden="true" />
                    </a>
                  )}
                  {product.githubLink && (
                    <a
                      className="product-btn product-btn-secondary"
                      href={product.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github size={14} aria-hidden="true" />
                      <span>{portfolioContent.productActions.github}</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
