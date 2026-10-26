import React, { Suspense, lazy, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowDownRight, ArrowUpRight, Mail } from 'lucide-react';
import { useRef } from 'react';
import { portfolioContent, portfolioData } from '../data/portfolio.js';

const Chip3D = lazy(() => import('./Chip3D.jsx'));

export default function Hero() {
  const prefersReducedMotion = useReducedMotion();
  const heroRef = useRef(null);
  const [chip3DReady, setChip3DReady] = useState(false);
  const [projectsAction, resumeAction, contactAction] = portfolioContent.heroActions;
  const enter = (delay = 0) => ({
    initial: { opacity: 0, y: prefersReducedMotion ? 0 : 18 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: prefersReducedMotion ? 0 : 0.7, ease: [0.16, 1, 0.3, 1], delay },
  });

  const handlePointerMove = (event) => {
    if (prefersReducedMotion || event.pointerType !== 'mouse') return;
    const bounds = event.currentTarget.getBoundingClientRect();
    heroRef.current?.style.setProperty('--cursor-x', `${event.clientX - bounds.left}px`);
    heroRef.current?.style.setProperty('--cursor-y', `${event.clientY - bounds.top}px`);
  };

  const chipFallback = (
    <svg className="chip-graphic" viewBox="0 0 520 430" fill="none">
      <defs>
        <linearGradient id="chip-gradient" x1="124" y1="86" x2="396" y2="352" gradientUnits="userSpaceOnUse">
          <stop stopColor="var(--portfolio-grid-line)" />
          <stop offset="1" stopColor="var(--portfolio-grid-line)" stopOpacity=".2" />
        </linearGradient>
        <radialGradient id="chip-core-glow" cx="0" cy="0" r="1" gradientTransform="matrix(0 183 -183 0 260 212)" gradientUnits="userSpaceOnUse">
          <stop stopColor="var(--portfolio-grid-line)" stopOpacity=".18" />
          <stop offset="1" stopColor="var(--portfolio-grid-line)" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="260" cy="212" r="180" fill="url(#chip-core-glow)" />
      <path className="chip-trace chip-trace-left" d="M53 133h84v35h37m-121 65h83v-26h38M67 300h75v-34h33" />
      <path className="chip-trace chip-trace-right" d="M467 126h-72v42h-38m110 75h-84v-25h-27m87 101h-72v-35h-34" />
      <rect x="158" y="106" width="204" height="204" rx="24" fill="var(--portfolio-bg)" stroke="url(#chip-gradient)" strokeWidth="1.5" />
      <rect x="175" y="123" width="170" height="170" rx="16" stroke="var(--portfolio-border)" />
      <path className="chip-pin" d="M195 86v20m32-20v20m33-20v20m32-20v20m32-20v20M195 310v20m32-20v20m33-20v20m32-20v20m32-20v20M138 137h20m-20 34h20m-20 34h20m-20 34h20m-20 34h20m204-136h20m-20 34h20m-20 34h20m-20 34h20m-20 34h20" />
      <path className="chip-symbol" d="M222 197h19l16-27 22 69 17-42h23" />
      <circle className="chip-node" cx="222" cy="197" r="3.5" />
      <circle className="chip-node" cx="319" cy="197" r="3.5" />
      <path className="chip-trace chip-trace-bottom" d="M93 368h107l24-24h71l22 22h100" />
      <circle className="chip-dot" cx="93" cy="368" r="3" />
      <circle className="chip-dot" cx="417" cy="366" r="3" />
    </svg>
  );

  return (
    <section
      id="home"
      ref={heroRef}
      className="portfolio-hero"
      aria-labelledby="hero-title"
      onPointerMove={handlePointerMove}
    >
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-glow" aria-hidden="true" />
      <div className="hero-cursor-glow" aria-hidden="true" />
      <div className="hero-layout">
        <div className="hero-content">
          <motion.p className="hero-kicker" {...enter(0.05)}>
            {portfolioContent.heroLabel}
          </motion.p>

          <motion.h1 id="hero-title" className="hero-title" {...enter(0.12)}>
            {portfolioData.name}
          </motion.h1>

          <motion.p className="hero-tagline" {...enter(0.2)}>
            {portfolioContent.heroTagline}
          </motion.p>

          <motion.div className="hero-actions" {...enter(0.28)}>
            <a className="hero-button hero-button-primary" href={projectsAction.href}>
              {projectsAction.label}
              <ArrowDownRight size={17} aria-hidden="true" />
            </a>
            <a
              className="hero-button hero-button-secondary"
              href={resumeAction.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {resumeAction.label}
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
            <a className="hero-button hero-button-secondary" href={contactAction.href}>
              {contactAction.label}
              <Mail size={16} aria-hidden="true" />
            </a>
          </motion.div>
        </div>

        <motion.div
          className={`hero-visual${chip3DReady ? ' is-chip-3d-ready' : ''}`}
          {...enter(0.22)}
          aria-hidden="true"
        >
          <div className="chip-ornament chip-ornament-top" />
          <div className="chip-ornament chip-ornament-bottom" />
          <Suspense fallback={<div className="chip3d-fallback">{chipFallback}</div>}>
            <Chip3D
              reducedMotion={prefersReducedMotion}
              onReady={() => setChip3DReady(true)}
              fallback={chipFallback}
            />
          </Suspense>
          <svg className="hero-waveform" viewBox="0 0 520 90" fill="none">
            <path className="wave-guide" d="M0 45h520" />
            <path className="wave-line wave-line-one" d="M0 45h52V21h42v48h50V34h58v22h60V17h48v54h46V37h57v18h52v-10h55" />
            <path className="wave-line wave-line-two" d="M0 62h38v-9h55v9h67V27h45v35h58V47h53v15h68V29h48v33h58v-9h30" />
            <circle className="wave-marker" cx="94" cy="21" r="3" />
            <circle className="wave-marker" cx="310" cy="17" r="3" />
            <circle className="wave-marker" cx="416" cy="29" r="3" />
          </svg>
        </motion.div>
      </div>
      <div className="hero-footnote" aria-hidden="true">
        <span>SOFTWARE</span>
        <span className="hero-signal"><i /><i /><i /><i /><i /><i /></span>
        <span>VLSI</span>
      </div>
    </section>
  );
}
