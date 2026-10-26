import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Learning from './components/Learning';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LoadingIntro from './components/LoadingIntro';
import { portfolioData } from './data/portfolio.js';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setIsLoading(false);
      return undefined;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const exitTimer = window.setTimeout(() => setIsExiting(true), 3200);
    const finishTimer = window.setTimeout(() => {
      document.body.style.overflow = previousOverflow;
      setIsLoading(false);
    }, 4100);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.clearTimeout(exitTimer);
      window.clearTimeout(finishTimer);
    };
  }, []);

  return (
    <>
      {isLoading && (
        <LoadingIntro
          name={portfolioData.name}
          isExiting={isExiting}
        />
      )}
      <div
        className={`portfolio-app${isLoading ? ' is-loading' : ''}`}
        aria-hidden={isLoading}
      >
        <a className="skip-link" href="#main-content">Skip to main content</a>
        <Navbar />
        <main id="main-content" tabIndex="-1">
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Learning />
          <Skills />
          <Certifications />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
