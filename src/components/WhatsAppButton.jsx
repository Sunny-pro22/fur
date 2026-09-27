import React, { useEffect, useState } from 'react';
import WhatsAppIcon from './WhatsAppIcon.jsx';
import { waLink } from '../data/config.js';

export default function WhatsAppButton() {
  const [pulse, setPulse] = useState(true);

  useEffect(() => {
    // Stop the pulsing ring after 6 seconds so it doesn't distract forever
    const t = setTimeout(() => setPulse(false), 6000);
    return () => clearTimeout(t);
  }, []);

  return (
    <a
      href={waLink('Hello Maison Aurum! I would like to know more about your furniture.')}
      target="_blank"
      rel="noreferrer"
      className={`wa-float ${pulse ? 'wa-float--pulse' : ''}`}
      aria-label="Chat on WhatsApp"
    >
      {/* Pulsing ring (only shows while pulse is true) */}
      <span className="wa-float__ring" />

      {/* WhatsApp glyph */}
      <WhatsAppIcon size={26} />

      {/* Label — hidden on small screens via CSS */}
      <span className="wa-float__label">Chat with us</span>
    </a>
  );
}