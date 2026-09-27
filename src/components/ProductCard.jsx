import React from 'react';
import WhatsAppIcon from './WhatsAppIcon.jsx';
import { waLink } from '../data/config.js';

export default function ProductCard({ product }) {
  return (
    <article className="card">
      <div className="card__image">
        <img src={product.image} alt={product.name} loading="lazy" />
        {product.tag && <span className="card__tag">{product.tag}</span>}
        <div className="card__overlay">
          <a
            href={waLink(
              `Hi, I'm interested in "${product.name}" (${product.price}). Could you share more details?`
            )}
            target="_blank"
            rel="noreferrer"
            className="card__enquire"
          >
            <WhatsAppIcon size={15} /> Enquire on WhatsApp
          </a>
        </div>
      </div>

      <div className="card__body">
        <span className="card__cat">{product.category}</span>
        <h3 className="card__name">{product.name}</h3>
        <div className="card__foot">
          <span className="card__price">{product.price}</span>
          <span className="card__cta">View details →</span>
        </div>
      </div>
    </article>
  );
}