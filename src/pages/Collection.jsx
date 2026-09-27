import React, { useState } from 'react';
import ProductCard from '../components/ProductCard.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import WhatsAppIcon from '../components/WhatsAppIcon.jsx';
import { PRODUCTS } from '../data/products.js';
import { waLink } from '../data/config.js';

export default function Collection() {
  const [filter, setFilter] = useState('All');
  const categories = ['All', ...new Set(PRODUCTS.map((p) => p.category))];
  const shown = filter === 'All' ? PRODUCTS : PRODUCTS.filter((p) => p.category === filter);

  return (
    <>
      <section className="collection collection--page">
        <SectionHeader
          eyebrow="The Collection"
          title={<>Pieces worth <em>passing down.</em></>}
          sub="A curated selection of our most-loved designs — available in your choice of hardwood and upholstery."
        />

        <div className="filters">
          {categories.map((c) => (
            <button
              key={c}
              className={`filter ${filter === c ? 'filter--active' : ''}`}
              onClick={() => setFilter(c)}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="grid">
          {shown.map((p) => <ProductCard key={p.id} product={p} />)}
        </div>
      </section>

      {/* Bespoke CTA band */}
      <section className="bespoke">
        <div className="bespoke__inner">
          <div>
            <div className="eyebrow"><span className="eyebrow__line" />Bespoke</div>
            <h2>Can't find the <em>one?</em></h2>
            <p>We build fully bespoke pieces. Share your space, your reference images, and your imagination — we'll take it from there.</p>
          </div>
          <a
            href={waLink('Hi, I would like to commission a bespoke piece.')}
            target="_blank" rel="noreferrer" className="btn btn--solid btn--lg"
          >
            <WhatsAppIcon size={18} /> Start a bespoke enquiry
          </a>
        </div>
      </section>
    </>
  );
}