import React from 'react';
import { portfolioContent, socialLinks } from '../data/portfolio.js';

export default function Footer() {
  return (
    <footer className="site-footer">
      <svg className="footer-wave-divider" viewBox="0 0 1440 24" preserveAspectRatio="none" fill="none" aria-hidden="true">
        <path d="M0 12h88V5h38v14h54V9h74v6h82V4h46v16h64V10h78v4h90V6h44v12h66V9h76v6h86V4h50v16h72V9h72v6h86V5h48v14h88V12h82" />
      </svg>
      <div className="site-footer-content">
        <p>{portfolioContent.footer}</p>
        <nav className="footer-links" aria-label="Footer links">
          {socialLinks.map((social) => {
            const isEmail = social.icon === 'email';

            return (
              <a
                href={social.href}
                key={social.label}
                target={isEmail ? undefined : '_blank'}
                rel={isEmail ? undefined : 'noopener noreferrer'}
              >
                {social.label}
              </a>
            );
          })}
        </nav>
      </div>
    </footer>
  );
}
