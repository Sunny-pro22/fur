import React from 'react';

export default function SectionHeader({ eyebrow, title, sub, align = 'center' }) {
  return (
    <div className={`section-head ${align === 'left' ? 'section-head--left' : ''}`}>
      {eyebrow && (
        <div className={`eyebrow ${align === 'center' ? 'eyebrow--center' : ''}`}>
          <span className="eyebrow__line" />
          {eyebrow}
          {align === 'center' && <span className="eyebrow__line" />}
        </div>
      )}
      <h2 className={`section-title ${align === 'left' ? 'section-title--left' : ''}`}>
        {title}
      </h2>
      {sub && <p className="section-sub">{sub}</p>}
    </div>
  );
}