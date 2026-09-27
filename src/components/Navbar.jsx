import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import WhatsAppIcon from './WhatsAppIcon.jsx';
import { waLink } from '../data/config.js';
import { useTheme } from '../context/ThemeContext.jsx';

const LINKS = [
  { label: 'Home',       to: '/' },
  { label: 'Collection', to: '/collection' },
  { label: 'Heritage',   to: '/heritage' },
  { label: 'Contact',    to: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className={`nav ${scrolled ? 'nav--solid' : ''}`}>
      <div className="nav__inner">
        <Link to="/" className="nav__brand">
          <span className="nav__brand-mark">M</span>
          <span className="nav__brand-text">
            KJL FURNITURES
            <small>EST. 1986</small>
          </span>
        </Link>

        <nav className={`nav__links ${open ? 'nav__links--open' : ''}`}>
          {LINKS.map((l) => (
            <Link key={l.label} to={l.to} className={pathname === l.to ? 'is-active' : ''}>
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="nav__actions">
          {/* Theme toggle */}
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
          </button>

          <a
            className="nav__wa"
            href={waLink('Hello Maison Aurum, I would like to enquire about your furniture.')}
            target="_blank"
            rel="noreferrer"
          >
            <WhatsAppIcon size={16} />
            <span>WhatsApp</span>
          </a>

          <button className="nav__burger" onClick={() => setOpen((o) => !o)} aria-label="Menu">
            <span /><span /><span />
          </button>
        </div>
      </div>
    </header>
  );
}