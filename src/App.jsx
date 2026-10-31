import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Products from './components/Products';
import Learning from './components/Learning';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LoadingIntro from './components/LoadingIntro';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    try {
      window.sessionStorage.removeItem('portfolio-intro-viewed');
    } catch {
      // ignore
    }

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setIsLoading(false);
      return undefined;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    let finishTimer;
    const startExit = () => {
      setIsExiting(true);
      finishTimer = window.setTimeout(() => {
        document.body.style.overflow = previousOverflow;
        setIsLoading(false);
      }, 1000);
    };

    const exitTimer = window.setTimeout(() => {
      startExit();
    }, 3400);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.clearTimeout(exitTimer);
      if (finishTimer) {
        window.clearTimeout(finishTimer);
      }
    };
  }, []);

  const handleDismissIntro = () => {
    if (!isExiting) {
      setIsExiting(true);
      window.setTimeout(() => {
        document.body.style.overflow = '';
        setIsLoading(false);
      }, 1000);
    }
  };

  return (
    <>
      {isLoading && (
        <LoadingIntro
          isExiting={isExiting}
          onDismiss={handleDismissIntro}
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
          <Products />
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
