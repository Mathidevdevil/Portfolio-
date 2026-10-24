import React from 'react';

export default function LoadingIntro({ name, isExiting }) {
  return (
    <div
      className={`loading-intro${isExiting ? ' is-exiting' : ''}`}
      role="status"
      aria-label="Loading portfolio"
    >
      <div className="loading-intro-stage">
        <svg className="loading-intro-scribble" viewBox="0 0 60 70" aria-hidden="true">
          <path
            pathLength="1"
            d="M6 56 C6 30 6 12 10 8 C16 4 26 36 30 44 C34 36 44 4 50 8 C54 12 54 30 54 56"
          />
        </svg>
        <p className="loading-intro-logo" aria-hidden="true">
          <span className="loading-intro-logo-line">
            <i>M A T H I</i>
          </span>
        </p>
      </div>
    </div>
  );
}
