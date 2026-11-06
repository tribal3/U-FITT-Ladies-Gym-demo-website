import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  type ReactNode,
} from 'react'

export type Lang = 'en'

const en = {
  meta: {
    title: 'U FITT Ladies Gym — Women-Only Gym in PECHS, Karachi',
    description:
      'U FITT Ladies Gym is a women-only gym on Kashmir Road, PECHS Block 2, Karachi. Strength and cardio equipment, group classes and personal training. Call or WhatsApp 0322 8290074.',
  },
  nav: {
    home: 'Home',
    about: 'About',
    experiences: 'Facilities',
    training: 'Training',
    classes: 'Classes',
    membership: 'Membership',
    gallery: 'Gallery',
    contact: 'Contact',
  },
  actions: {
    join: 'Join Us',
    call: 'Call Now',
    whatsapp: 'WhatsApp Us',
    directions: 'Get Directions',
    explore: 'Explore The Gym',
    contact: 'Contact Us',
    retry: 'Open WhatsApp',
    menuOpen: 'Open menu',
    menuClose: 'Close menu',
    scroll: 'Scroll to explore',
  },
  hero: {
    badge: 'Ladies only · PECHS Block 2, Karachi',
    titleTop: 'Your Space.',
    titleAccent: 'Your Strength.',
    text: 'A women-only gym on Kashmir Road, PECHS Block 2 — strength, cardio and supportive coaching in a private, welcoming space.',
    hoursValue: '8 AM – 8 PM',
    hoursLabel: 'Open daily',
    optionsValue: 'Women only',
    optionsLabel: 'Private ladies gym',
    locationValue: 'PECHS Block 2',
    locationLabel: 'Kashmir Road, Karachi',
    imageAlt:
      'Woman training on gym equipment at U FITT Ladies Gym on Kashmir Road, PECHS Block 2, Karachi',
  },
  marquee: ['Strength', 'Cardio', 'Classes', 'Confidence'],
  about: {
    eyebrow: 'About U FITT Ladies Gym',
    index: '01',
    title: 'A women-only gym, built around you.',
    text: 'U FITT Ladies Gym is a dedicated women’s fitness space on Kashmir Road, PECHS Block 2. Train with strength and cardio equipment, join classes or work one-to-one with a coach — at your pace, in a private environment.',
    points: [
      'Women-only gym on Kashmir Road, PECHS Block 2',
      'Strength, cardio and group training under one roof',
      'Supportive coaching for beginners and regulars',
      'Mezzanine Floor, Plot 54-M — easy to reach',
      'Call or WhatsApp 0322 8290074',
    ],
    cardTitle: 'Show up for yourself',
    cardText: 'Small steps, done consistently, become real strength.',
    badgeTitle: 'Women only',
    badgeText: 'A private space to train',
    imageAlt: 'Women training at U FITT Ladies Gym in PECHS, Karachi',
    caption: 'U FITT Ladies Gym · PECHS Block 2',
  },
  experiences: {
    eyebrow: 'The Experience',
    index: '02',
    title: 'Your space. Your pace.',
    text: 'A women-only training floor with the equipment, classes and coaching to help you feel stronger every week.',
    strength: {
      label: 'Training Floor',
      tag: 'Strength + Cardio',
      desc: 'Strength machines, free weights and cardio equipment in a comfortable women-only setting.',
      tags: ['Strength & free weights', 'Cardio machines', 'Warm-up & stretch area'],
      cta: 'Ask About The Gym',
      imageAlt: 'Strength and cardio equipment at U FITT Ladies Gym',
    },
    functional: {
      label: 'Classes & Coaching',
      tag: 'Guided',
      desc: 'Join group sessions or train one-to-one with a coach who meets you at your level.',
      tags: ['Group classes', 'Personal coaching', 'Beginner friendly'],
      cta: 'Ask About Coaching',
      imageAlt: 'Women in a group class at U FITT Ladies Gym',
    },
    note: 'Facilities, classes and timings are confirmed by the U FITT team — message us on WhatsApp.',
  },
  training: {
    eyebrow: 'Training',
    index: '03',
    title: 'Training that fits your life.',
    text: 'From your first session to your next goal, choose the training that suits your routine.',
    items: [
      {
        title: 'Strength Training',
        desc: 'Build confidence and strength with free weights and resistance machines.',
        icon: 'dumbbell',
      },
      {
        title: 'Cardio & Endurance',
        desc: 'Treadmills, cycles and cardio machines to build stamina at your own pace.',
        icon: 'heart',
      },
      {
        title: 'Personal Training',
        desc: 'One-to-one coaching with a plan built around your goals and experience.',
        icon: 'target',
      },
      {
        title: 'Group Classes',
        desc: 'Train with other women in coached sessions that keep you motivated.',
        icon: 'flame',
      },
    ],
    note: 'Equipment, classes and timings may vary — contact the gym to confirm current access.',
  },
  classes: {
    eyebrow: 'Classes & Coaching',
    index: '04',
    title: 'Guided sessions. Real support.',
    text: 'Group classes and one-to-one coaching in a women-only space.',
    items: [
      {
        label: 'Group Classes',
        desc: 'Coach-led sessions that mix strength, cardio and mobility.',
      },
      {
        label: 'Personal Training',
        desc: 'One-to-one coaching, fitness checks and a plan built around your goals.',
      },
      {
        label: 'Progress Check-ins',
        desc: 'Regular check-ins to track how far you have come.',
      },
    ],
    asideEyebrow: 'Women only',
    asideTitle: 'Train comfortably.',
    asideText:
      'A private, women-only environment where you can focus on yourself. Ask us for the current class timetable.',
    cta: 'Ask About Classes',
    note: 'Class formats and timings change — message us on WhatsApp for the current schedule.',
  },
  membership: {
    eyebrow: 'Membership',
    index: '05',
    title: 'Simple memberships. Flexible training.',
    text: 'Monthly and quarterly options. Message us for current rates, offers and availability.',
    plans: [
      {
        name: 'Monthly',
        tag: 'Flexible',
        price: 'On request',
        period: '/ month',
        desc: 'Full access to the ladies-only floor for a month.',
        features: ['Full gym access', 'Cardio & strength floor', 'Locker room access'],
        cta: 'Enquire About Monthly',
      },
      {
        name: 'Quarterly',
        tag: 'Best value',
        price: 'On request',
        period: '/ 3 months',
        desc: 'Three months of training with a better rate.',
        features: ['Everything in Monthly', 'Priority class booking', 'Progress check-in'],
        cta: 'Enquire About Quarterly',
      },
    ],
    extrasTitle: 'Also available',
    extras: [
      'Personal training — on request',
      'Group class schedule — on request',
      'Free walk-in tour',
    ],
    note: 'Rates, inclusions and availability are confirmed by U FITT Ladies Gym.',
  },
  gallery: {
    eyebrow: 'Gallery',
    index: '06',
    title: 'Inside U FITT.',
    text: 'A look at the training floor, classes and the energy you can expect.',
    note: 'A look inside U FITT Ladies Gym, PECHS Block 2, Karachi.',
    alts: [
      'Women training together at U FITT Ladies Gym',
      'Women in a studio class at U FITT Ladies Gym',
      'Core training session at U FITT Ladies Gym',
      'Woman using a strength machine at U FITT Ladies Gym',
      'Personal coaching at U FITT Ladies Gym',
      'Group class at U FITT Ladies Gym',
    ],
    view: 'View image',
    close: 'Close',
    prev: 'Previous image',
    next: 'Next image',
  },
  why: {
    eyebrow: 'Why U FITT',
    index: '07',
    title: 'Built for women who show up.',
    text: 'A private, women-only space with the equipment, coaching and flexibility to keep you consistent.',
    items: [
      {
        title: 'Women-only environment',
        desc: 'Train in a private space reserved for women.',
      },
      {
        title: 'Supportive coaching',
        desc: 'Guidance that meets you at your level — beginner or returning.',
      },
      {
        title: 'Flexible daily timings',
        desc: 'Morning or evening, find a slot that fits your routine.',
      },
      {
        title: 'Central PECHS location',
        desc: 'Mezzanine Floor, Plot 54-M, Kashmir Road, Block 2.',
      },
    ],
    hoursLabel: 'Opening Hours',
    hoursValue: '8 AM – 8 PM',
    hoursCaption: 'Open daily (timings may vary).',
    hoursNote: 'Women-only gym.',
    hoursSub: 'Call or WhatsApp to confirm before visiting.',
  },
  hours: {
    eyebrow: 'Opening Hours',
    title: 'Open daily. Train on your schedule.',
    text: 'Doors are open daily, 8 AM to 8 PM. Timings can vary — call or WhatsApp 0322 8290074 before your first visit.',
  },
  contact: {
    eyebrow: 'Contact',
    index: '08',
    title: 'Come train with us.',
    text: 'Questions about membership, classes or your first visit? Message us on WhatsApp or give us a call.',
    labels: {
      address: 'Address',
      phone: 'Phone',
      whatsapp: 'WhatsApp',
      hours: 'Hours',
      directions: 'Directions',
    },
    locationTitle: 'Find us on Kashmir Road, PECHS Block 2',
    locationText:
      'Mezzanine Floor, Plot 54-M, Kashmir Rd, Block 2 PECHS, Karachi. Open the listing in Google Maps for directions.',
    locationChip: 'PECHS Block 2',
    form: {
      title: 'Membership Enquiry',
      subtitle: 'Fill in your details and the enquiry opens in WhatsApp, ready to send.',
      name: 'Full Name',
      namePlaceholder: 'Your name',
      phone: 'Phone Number',
      phonePlaceholder: '03XX XXXXXXX',
      interest: 'Interested In',
      interestMembership: 'Gym Membership',
      interestTraining: 'Classes & Personal Training',
      message: 'Message',
      messagePlaceholder: 'Tell us what you’re looking for (optional)',
      send: 'Send Enquiry',
      required: '* Required fields',
      errorName: 'Please enter your full name.',
      errorPhone: 'Please enter your phone number.',
      errorPhoneInvalid: 'Please enter a valid phone number.',
      errorInterest: 'Please choose an option.',
      successTitle: 'Your enquiry is ready',
      successText:
        'WhatsApp should have opened with your message ready to send. If it didn’t, use the button below.',
      sendAnother: 'Send another enquiry',
      privacy:
        'Your details are only used to create this WhatsApp message — nothing is stored on this website.',
    },
  },
  footer: {
    tagline:
      'A women-only fitness space on Kashmir Road, PECHS Block 2, Karachi.',
    explore: 'Explore',
    contact: 'Contact',
    follow: 'Follow',
    rights: '© 2026 U FITT Ladies Gym. All rights reserved.',
    credit: 'Website concept — TRIBAL³',
  },
  whatsappMessages: {
    general:
      'Hello U FITT Ladies Gym, I found your website and would like to ask about membership.',
    strength:
      'Hello U FITT Ladies Gym, I would like to ask about the training floor and equipment.',
    recovery:
      'Hello U FITT Ladies Gym, I would like to ask about classes and coaching.',
    classes: 'Hello U FITT Ladies Gym, I would like to ask about the class schedule.',
    membership: 'Hello U FITT Ladies Gym, I would like to ask about membership packages.',
    silver: 'Hello U FITT Ladies Gym, I would like to enquire about the monthly membership.',
    golden: 'Hello U FITT Ladies Gym, I would like to enquire about the quarterly membership.',
    join: 'Hello U FITT Ladies Gym, I would like to join. Could you share the available membership options?',
  },
  floatingWhatsapp: 'Chat on WhatsApp',
}

export const copy = { en }
export type Copy = typeof en

interface LanguageContextValue {
  lang: Lang
  dir: 'ltr'
  isRtl: false
  t: Copy
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    const root = document.documentElement
    root.lang = 'en'
    root.dir = 'ltr'
    root.dataset.lang = 'en'
    document.title = copy.en.meta.title

    const description = document.querySelector('meta[name="description"]')
    if (description) description.setAttribute('content', copy.en.meta.description)
  }, [])

  const value = useMemo<LanguageContextValue>(
    () => ({ lang: 'en', dir: 'ltr', isRtl: false, t: copy.en }),
    [],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) throw new Error('useLanguage must be used inside LanguageProvider')
  return context
}
