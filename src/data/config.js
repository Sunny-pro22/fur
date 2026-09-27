// 👉 Change this to your real WhatsApp number (country code + number, no + or spaces)
export const WHATSAPP_NUMBER = '919170916490';

export const waLink = (msg = '') =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;