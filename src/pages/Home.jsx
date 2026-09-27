import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ChairScene from '../components/three/ChairScene.jsx';
import ProductCard from '../components/ProductCard.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import WhatsAppIcon from '../components/WhatsAppIcon.jsx';
import { FABRIC_SWATCHES, WOOD_COLOR } from '../data/swatches.js';
import { PRODUCTS } from '../data/products.js';
import { TESTIMONIALS } from '../data/testimonials.js';
import { JOURNAL } from '../data/journal.js';
import { waLink } from '../data/config.js';
import { useTheme } from '../context/ThemeContext.jsx';

const CATEGORIES = [
  { name: 'Living',   count: '48 pieces', image: 'https://images.unsplash.com/photo-1567016432779-094069958ea5?auto=format&fit=crop&w=900&q=80' },
  { name: 'Dining',   count: '32 pieces', image: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=900&q=80' },
  { name: 'Bedroom',  count: '26 pieces', image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80' },
  { name: 'Lighting', count: '18 pieces', image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=900&q=80' },
];

const PROCESS = [
  { step: '01', title: 'Consultation', text: 'A private conversation to understand your space, your taste, and your story.' },
  { step: '02', title: 'Design',       text: 'Hand-drawn plans and material boards, refined with you until every line feels right.' },
  { step: '03', title: 'Craft',        text: 'Built by a single master craftsman over 8–14 weeks. Every joint signed by its maker.' },
  { step: '04', title: 'Delivery',     text: 'White-glove, fully insured delivery to any address in 68 countries.' },
];

export default function Home() {
  const [fabric, setFabric] = useState(FABRIC_SWATCHES[0]);
  const { theme } = useTheme();
  const featured = PRODUCTS.slice(0, 8);

  return (
    <>
      {/* ============ HERO ============ */}
      <section className="hero">
        <div className="hero__glow" />
        <div className="hero__inner">
          <div className="hero__copy">
            <div className="eyebrow">
              <span className="eyebrow__line" />
              Handcrafted since 1986
            </div>
            <h1 className="hero__title">
              Furniture that
              <br />
              outlives <em>trends.</em>
            </h1>
            <p className="hero__sub">
              Four decades of obsessive craftsmanship. Every curve, joint and stitch
              is finished by hand in our atelier — then delivered to your door,
              anywhere in the world.
            </p>

            <div className="hero__cta">
              <Link to="/collection" className="btn btn--solid">Explore the Collection</Link>
              <a
                href={waLink('Hi! I would like a private consultation with Maison Aurum.')}
                target="_blank" rel="noreferrer" className="btn btn--ghost"
              >
                Book a Consultation
              </a>
            </div>

            <div className="hero__stats">
              <div><strong>40</strong><span>Years of craft</span></div>
              <div className="hero__stats-div" />
              <div><strong>68</strong><span>Countries served</span></div>
              <div className="hero__stats-div" />
              <div><strong>100%</strong><span>Hand finished</span></div>
            </div>
          </div>

          <div className="hero__stage">
            <div className="hero__badge">Drag to rotate</div>
            <div className="hero__canvas">
              <ChairScene fabricColor={fabric.color} woodColor={WOOD_COLOR} theme={theme} />
            </div>

            <div className="hero__swatches">
              <span className="hero__swatches-label">Upholstery</span>
              <div className="swatch-row">
                {FABRIC_SWATCHES.map((s) => (
                  <button
                    key={s.name}
                    className={`swatch ${fabric.name === s.name ? 'swatch--active' : ''}`}
                    style={{ background: s.color }}
                    title={s.name}
                    onClick={() => setFabric(s)}
                  />
                ))}
              </div>
              <span className="hero__fabric-name">{fabric.name}</span>
            </div>
          </div>
        </div>

        <div className="hero__marquee">
          <div className="marquee-track">
            {[...Array(2)].map((_, k) => (
              <span key={k} className="marquee-group">
                <i>◆</i> Made in Italy <i>◆</i> Solid Walnut &amp; Oak <i>◆</i> Lifetime Warranty
                <i>◆</i> Free Global Shipping <i>◆</i> Bespoke Sizing <i>◆</i> Master Craftsmen
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ============ PRESS ============ */}
      <section className="press">
        <div className="press__inner">
          <span className="press__label">As featured in</span>
          <div className="press__logos">
            <span>ARCHITECTURAL DIGEST</span>
            <span>ELLE DECOR</span>
            <span>WALLPAPER*</span>
            <span>KINFOLK</span>
            <span>MONOCLE</span>
          </div>
        </div>
      </section>

      {/* ============ CATEGORIES ============ */}
      <section className="categories">
        <SectionHeader
          eyebrow="Shop by room"
          title={<>Rooms <em>we love.</em></>}
          sub="Four collections, one philosophy — pieces built to be inherited."
        />
        <div className="categories__grid">
          {CATEGORIES.map((c) => (
            <Link to="/collection" key={c.name} className="category-tile">
              <img src={c.image} alt={c.name} loading="lazy" />
              <div className="category-tile__overlay">
                <span className="category-tile__count">{c.count}</span>
                <h3>{c.name}</h3>
                <span className="category-tile__cta">Discover →</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ============ FEATURED PRODUCTS ============ */}
      <section className="collection">
        <SectionHeader
          eyebrow="The Collection"
          title={<>Pieces worth <em>passing down.</em></>}
          sub="A curated selection of our most-loved designs — available in your choice of hardwood and upholstery."
        />
        <div className="grid">
          {featured.map((p) => <ProductCard key={p.id} product={p} />)}
        </div>
        <div className="collection__more">
          <Link to="/collection" className="btn btn--solid">View Full Collection</Link>
        </div>
      </section>

      {/* ============ PROCESS / CRAFT ============ */}
      <section className="process">
        <div className="process__inner">
          <div className="process__left">
            <SectionHeader
              align="left"
              eyebrow="The Atelier"
              title={<>From sketch to <em>signature.</em></>}
              sub="Every Maison Aurum piece passes through four careful stages. Nothing is rushed; nothing is outsourced."
            />
            <a
              href={waLink('I would like to commission a bespoke piece.')}
              target="_blank" rel="noreferrer" className="btn btn--ghost"
            >
              Commission a Piece
            </a>
          </div>
          <div className="process__right">
            {PROCESS.map((p) => (
              <div className="process-step" key={p.step}>
                <span className="process-step__num">{p.step}</span>
                <div>
                  <h4>{p.title}</h4>
                  <p>{p.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ STATS BAND ============ */}
      <section className="stats-band">
        <div className="stats-band__inner">
          <div><strong>40</strong><span>Years of craft</span></div>
          <div><strong>12,000+</strong><span>Pieces delivered</span></div>
          <div><strong>68</strong><span>Countries served</span></div>
          <div><strong>120</strong><span>Master artisans</span></div>
        </div>
      </section>

      {/* ============ TESTIMONIALS ============ */}
      <section className="testimonials">
        <SectionHeader
          eyebrow="Voices"
          title={<>What our clients <em>say.</em></>}
        />
        <div className="testimonials__grid">
          {TESTIMONIALS.map((t, i) => (
            <div className="testimonial" key={i}>
              <div className="testimonial__quote">“</div>
              <p>{t.quote}</p>
              <div className="testimonial__by">
                <strong>{t.name}</strong>
                <span>{t.role}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ============ JOURNAL ============ */}
      <section className="journal">
        <SectionHeader
          eyebrow="The Journal"
          title={<>Stories from the <em>atelier.</em></>}
        />
        <div className="journal__grid">
          {JOURNAL.map((j, i) => (
            <article className="journal-card" key={i}>
              <div className="journal-card__img">
                <img src={j.image} alt={j.title} loading="lazy" />
                <span className="journal-card__cat">{j.category}</span>
              </div>
              <div className="journal-card__body">
                <div className="journal-card__meta">
                  <span>{j.date}</span>
                  <span>·</span>
                  <span>{j.read}</span>
                </div>
                <h3>{j.title}</h3>
                <span className="journal-card__cta">Read article →</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ============ NEWSLETTER ============ */}
      <section className="newsletter">
        <div className="newsletter__inner">
          <div className="newsletter__copy">
            <div className="eyebrow">
              <span className="eyebrow__line" />
              The Letter
            </div>
            <h2>Slow news from Florence.</h2>
            <p>New collections, workshop stories, and a private preview invitation — once a month, never more.</p>
          </div>
          <form
            className="newsletter__form"
            onSubmit={(e) => {
              e.preventDefault();
              const email = e.target.email.value;
              window.open(waLink(`Hi, I'd like to subscribe to The Letter. My email: ${email}`), '_blank');
            }}
          >
            <input type="email" name="email" placeholder="your@email.com" required />
            <button type="submit" className="btn btn--solid">Subscribe</button>
          </form>
        </div>
      </section>
    </>
  );
}