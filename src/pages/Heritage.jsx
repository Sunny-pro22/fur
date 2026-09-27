import React from 'react';
import SectionHeader from '../components/SectionHeader.jsx';

const TIMELINE = [
  { year: '1986', title: 'A workshop in Florence', text: 'Founded by Lorenzo Aurum with one bench, two chisels, and a stubborn belief in permanence.' },
  { year: '1994', title: 'The first international order', text: 'A boutique hotel in Kyoto commissions 40 pieces. Word spreads.' },
  { year: '2008', title: 'The first flagship', text: 'A showroom opens on Via dei Artigiani. It still stands today.' },
  { year: '2015', title: 'Sustainable sourcing', text: 'Every hardwood now sourced from FSC-certified, single-estate forests.' },
  { year: '2026', title: 'Four decades of craft', text: '12,000 pieces delivered to 68 countries. Not one outsourced, not one rushed.' },
];

export default function Heritage() {
  return (
    <>
      <section className="about about--page" id="heritage">
        <div className="about__inner">
          <div className="about__copy">
            <div className="eyebrow">
              <span className="eyebrow__line" />
              Our Heritage
            </div>
            <h2 className="section-title section-title--left">
              Forty years.
              <br />
              One <em>obsession.</em>
            </h2>
            <p>
              In 1986, in a small workshop outside Florence, our founder began with a
              single conviction: that a piece of furniture should be built to be
              inherited, not replaced. Four decades later, that conviction still
              guides every cut, every joint, every finish.
            </p>
            <p>
              Today, Maison Aurum ships to 68 countries — yet every piece is still
              finished by a single craftsman who signs the underside of the frame
              with their initials. That's our promise, stamped in wood.
            </p>

            <div className="about__grid">
              <div className="about__stat"><strong>1986</strong><span>Founded in Florence</span></div>
              <div className="about__stat"><strong>40+</strong><span>Years of mastery</span></div>
              <div className="about__stat"><strong>120</strong><span>Master craftsmen</span></div>
              <div className="about__stat"><strong>Lifetime</strong><span>Frame warranty</span></div>
            </div>
          </div>

          <div className="about__visual">
            <div className="about__img about__img--1">
              <img src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80" alt="Atelier" loading="lazy" />
            </div>
            <div className="about__img about__img--2">
              <img src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=800&q=80" alt="Craftsmanship" loading="lazy" />
            </div>
            <div className="about__badge">
              <span>SINCE</span>
              <strong>1986</strong>
              <span>FLORENCE</span>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="timeline">
        <SectionHeader eyebrow="Milestones" title={<>A slow, deliberate <em>journey.</em></>} />
        <div className="timeline__list">
          {TIMELINE.map((t) => (
            <div className="timeline__item" key={t.year}>
              <div className="timeline__year">{t.year}</div>
              <div className="timeline__dot" />
              <div className="timeline__content">
                <h4>{t.title}</h4>
                <p>{t.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="values">
        <SectionHeader eyebrow="What guides us" title={<>Four <em>principles.</em></>} />
        <div className="values__grid">
          <div className="value-card"><h4>Permanence</h4><p>We build for the next hundred years, not the next season.</p></div>
          <div className="value-card"><h4>Patience</h4><p>Every piece takes 8–14 weeks. We never rush the hand.</p></div>
          <div className="value-card"><h4>Provenance</h4><p>Every board traceable to a single, certified, sustainable forest.</p></div>
          <div className="value-card"><h4>Signature</h4><p>Each craftsman signs the frame they finished. Their name is our bond.</p></div>
        </div>
      </section>
    </>
  );
}