import React, { useState } from 'react';
import SectionHeader from '../components/SectionHeader.jsx';
import WhatsAppIcon from '../components/WhatsAppIcon.jsx';
import { waLink, WHATSAPP_NUMBER } from '../data/config.js';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const msg = `Hello Maison Aurum!\n\nName: ${form.name}\nEmail: ${form.email}\n\n${form.message}`;
    window.open(waLink(msg), '_blank');
  };

  return (
    <section className="contact contact--page">
      <SectionHeader
        eyebrow="Get in touch"
        title={<>Let's talk about <em>your space.</em></>}
        sub="Bespoke commissions, trade enquiries, or just a question — reach us on WhatsApp for the fastest reply."
      />

      <div className="contact__inner">
        <div className="contact__side">
          <div className="contact__card">
            <h3>WhatsApp</h3>
            <p>The quickest way to reach our atelier.</p>
            <a href={waLink('Hello Maison Aurum, I have a question.')} target="_blank" rel="noreferrer" className="btn btn--solid">
              <WhatsAppIcon size={16} /> Chat now
            </a>
            <p className="contact__meta">+{WHATSAPP_NUMBER}</p>
          </div>
          <div className="contact__card contact__card--info">
            <h3>Visit the atelier</h3>
            <p>Via dei Artigiani 12<br />50122 Firenze, Italia</p>
            <p className="contact__meta">By appointment only</p>
          </div>
        </div>

        <form className="contact__form" onSubmit={handleSubmit}>
          <label>
            Name
            <input name="name" value={form.name} onChange={handleChange} required />
          </label>
          <label>
            Email
            <input type="email" name="email" value={form.email} onChange={handleChange} required />
          </label>
          <label>
            Message
            <textarea name="message" rows={6} value={form.message} onChange={handleChange} required />
          </label>
          <button type="submit" className="btn btn--solid btn--lg">Send via WhatsApp</button>
        </form>
      </div>
    </section>
  );
}