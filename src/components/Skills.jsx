import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import {
  Atom,
  BookOpen,
  Box,
  Braces,
  Code2,
  Cpu,
  Database,
  FileCode2,
  GitBranch,
  Layers,
  Leaf,
  Monitor,
  Terminal,
  Wind,
  Workflow,
} from 'lucide-react';
import { portfolioContent, siliconSkills, skillCategories } from '../data/portfolio.js';

const skillIcons = {
  'React.js': Atom,
  'HTML5/CSS3': FileCode2,
  JavaScript: Braces,
  TailwindCSS: Wind,
  Java: Code2,
  'Spring Boot': Leaf,
  Python: Terminal,
  MySQL: Database,
  MongoDB: Layers,
  'VS Code': Code2,
  Eclipse: Box,
  Git: GitBranch,
  'Jupyter Notebook': BookOpen,
  'n8n Basics': Workflow,
  LTspice: Cpu,
  Virtuoso: Cpu,
  Multisim: Cpu,
  'Xilinx Vivado': Cpu,
  'Electric Binary': Cpu,
  Windows: Monitor,
  Linux: Terminal,
  'SystemVerilog/UVM': Cpu,
  Verilog: Cpu,
  'C/C++': Code2,
  'Digital Electronics': Cpu,
};

function SkillItems({ items, prefersReducedMotion }) {
  return (
    <div className="skill-tags">
      {items.map(({ name }, index) => {
        const Icon = skillIcons[name] || Code2;

        return (
          <motion.span
            className="skill-tag"
            key={name}
            initial={{ opacity: 0, scale: prefersReducedMotion ? 1 : 0.82, y: prefersReducedMotion ? 0 : 6 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: false, amount: 0.8 }}
            transition={{
              duration: prefersReducedMotion ? 0 : 0.55,
              delay: prefersReducedMotion ? 0 : index * 0.1,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <Icon size={15} aria-hidden="true" />
            <span>{name}</span>
          </motion.span>
        );
      })}
    </div>
  );
}

export default function Skills() {
  const prefersReducedMotion = useReducedMotion();
  const reveal = (index = 0) => ({
    initial: { opacity: 0, y: prefersReducedMotion ? 0 : 18 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: false, margin: '-70px' },
    transition: {
      duration: prefersReducedMotion ? 0 : 0.55,
      delay: prefersReducedMotion ? 0 : index * 0.1,
      ease: [0.16, 1, 0.3, 1],
    },
  });

  return (
    <section id="skills" className="portfolio-section skills-section" aria-labelledby="skills-title">
      <div className="skills-content">
        <motion.div
          className="skills-heading"
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="section-eyebrow">Silicon ↔ Software</p>
          <h2 id="skills-title" className="section-title">{portfolioContent.sectionTitles.skills}</h2>
        </motion.div>

        <div className="skills-dual-layout">
          <div className="skills-software-side">
            <h3 className="skills-side-label">Technical Skills</h3>
            <div className="software-skill-grid">
              {skillCategories.map((category, index) => {
                const Icon = category.icon === 'code'
                  ? Braces
                  : category.icon === 'database'
                    ? Database
                    : category.icon === 'cpu'
                      ? Cpu
                      : category.icon === 'monitor'
                        ? Monitor
                        : Workflow;

                return (
                  <motion.article
                    className={`skill-card skill-card-${category.icon}`}
                    key={category.title}
                    whileHover={prefersReducedMotion ? undefined : {
                      y: -5,
                      scale: 1.025,
                      transition: { duration: 0.2, ease: [0.16, 1, 0.3, 1] },
                    }}
                    {...reveal(index)}
                  >
                    <div className="skill-card-heading">
                      <span className="skill-card-icon" aria-hidden="true">
                        <Icon size={17} />
                      </span>
                      <h4>{category.title}</h4>
                    </div>
                    <SkillItems
                      items={category.skills.map((name) => ({ name }))}
                      prefersReducedMotion={prefersReducedMotion}
                    />
                  </motion.article>
                );
              })}
            </div>
          </div>

          <motion.article
            className="skill-silicon-panel"
            whileHover={prefersReducedMotion ? undefined : {
              y: -5,
              scale: 1.025,
              transition: { duration: 0.2, ease: [0.16, 1, 0.3, 1] },
            }}
            {...reveal(skillCategories.length)}
            aria-labelledby="silicon-skills-title"
          >
            <div className="skill-silicon-heading">
              <span className="skill-card-icon" aria-hidden="true">
                <Cpu size={18} />
              </span>
              <h3 id="silicon-skills-title">Silicon</h3>
            </div>
            <SkillItems items={siliconSkills} prefersReducedMotion={prefersReducedMotion} />
          </motion.article>
        </div>
      </div>
    </section>
  );
}
