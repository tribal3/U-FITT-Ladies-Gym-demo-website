export const BUSINESS = {
  nameEn: 'U FITT LADIES GYM',
  phoneDisplay: '0322 8290074',
  phoneHref: 'tel:+923228290074',
  whatsappDisplay: '0322 8290074',
  whatsappNumber: '923228290074',
  addressEn:
    'Mezzanine Floor, Plot 54-M, Kashmir Rd, Block 2 PECHS, Karachi',
  shortAddress: 'Kashmir Road, PECHS Block 2',
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=UFITT+Ladies+Gym+54-M+Kashmir+Rd+Block+2+PECHS+Karachi',
  instagram: '',
  facebook: 'https://www.facebook.com/Ufitt/',
  hours: 'Open daily · 8 AM – 8 PM',
  ladiesHours: 'Women-only gym',
} as const

export const WHATSAPP_BASE = `https://wa.me/${BUSINESS.whatsappNumber}`

/** Build a WhatsApp deep link with a pre-filled message. */
export const wa = (message: string) =>
  `${WHATSAPP_BASE}?text=${encodeURIComponent(message)}`

const IMG = '/images'

export const IMAGES = {
  hero: `${IMG}/ufitt-hero.jpg`,
  about: `${IMG}/ufitt-about.jpg`,
  aboutDetail: `${IMG}/ufitt-about-detail.jpg`,
  strengthZone: `${IMG}/ufitt-strength.jpg`,
  functional: `${IMG}/ufitt-studio.jpg`,
  strength: `${IMG}/ufitt-strength-detail.jpg`,
  cardio: `${IMG}/ufitt-gallery-3.jpg`,
  goals: `${IMG}/ufitt-goals.jpg`,
  guidance: `${IMG}/ufitt-guidance.jpg`,
  gallery: [
    { src: `${IMG}/ufitt-hero.jpg`, w: 2000, h: 1333 },
    { src: `${IMG}/ufitt-studio.jpg`, w: 2000, h: 1333 },
    { src: `${IMG}/ufitt-gallery-1.jpg`, w: 2000, h: 1335 },
    { src: `${IMG}/ufitt-strength.jpg`, w: 2000, h: 3000 },
    { src: `${IMG}/ufitt-guidance.jpg`, w: 2000, h: 3000 },
    { src: `${IMG}/ufitt-gallery-2.jpg`, w: 2000, h: 1333 },
  ],
}

export const galleryImage = (src: string) => src
