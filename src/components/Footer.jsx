import React from 'react';
import { Link } from 'react-router-dom';
import WhatsAppIcon from './WhatsAppIcon.jsx';
import { waLink } from '../data/config.js';

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer__inner">
        <div className="footer__cta">
          <div className="eyebrow eyebrow--center">
            <span className="eyebrow__line" />
            Begin your commission
            <span className="eyebrow__line" />
          </div>
          <h2>
            Let's design something
            <br />
            <em>worth keeping.</em>
          </h2>
          <a
            href={waLink('Hi Maison Aurum, I would like to discuss a bespoke piece.')}
            target="_blank"
            rel="noreferrer"
            className="btn btn--solid btn--lg"
          >
            <WhatsAppIcon size={18} /> Start a WhatsApp Chat
          </a>
        </div>

        <div className="footer__cols">
          <div>
            <h4>Maison Aurum</h4>
            <p>Via dei Artigiani 12<br />50122 Firenze, Italia</p>
            <p className="footer__muted">hello@maisonaurum.com</p>
          </div>
          <div>
            <h4>Explore</h4>
            <Link to="/">Home</Link>
            <Link to="/collection">Collection</Link>
            <Link to="/heritage">Heritage</Link>
            <Link to="/contact">Contact</Link>
          </div>
          <div>
            <h4>Service</h4>
            <a href="#">Bespoke Design</a>
            <a href="#">Trade Program</a>
            <a href="#">Care Guide</a>
            <a href="#">Shipping</a>
          </div>
          <div>
            <h4>Follow</h4>
            <a href="#">Instagram</a>
            <a href="#">Pinterest</a>
            <a href="#">LinkedIn</a>
            <a href="#">Journal</a>
          </div>
        </div>

        <div className="footer__base">
          <span>© {new Date().getFullYear()} Maison Aurum. All rights reserved.</span>
          <span>Crafted with intention in Firenze.</span>
        </div>
      </div>
    </footer>
  );
}