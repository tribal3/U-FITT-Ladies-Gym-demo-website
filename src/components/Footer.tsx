import { Clock, MapPin, Phone } from 'lucide-react'
import { useLanguage } from '../lib/i18n'
import { BUSINESS, wa } from '../lib/site'
import { Logo, WhatsAppIcon } from './ui'

function InstagramIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      aria-hidden="true"
      focusable="false"
    >
      <rect x="2.5" y="2.5" width="19" height="19" rx="5.5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.6" cy="6.4" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  )
}

function FacebookIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M13.5 22v-8h2.7l.4-3.1h-3.1V8.9c0-.9.25-1.5 1.55-1.5H16.7V4.6c-.3-.04-1.3-.13-2.5-.13-2.5 0-4.2 1.5-4.2 4.3v2.1H7.3V14h2.7v8h3.5z" />
    </svg>
  )
}

export default function Footer() {
  const { t } = useLanguage()

  const links = [
    { id: 'home', label: t.nav.home },
    { id: 'about', label: t.nav.about },
    { id: 'experiences', label: t.nav.experiences },
    { id: 'training', label: t.nav.training },
    { id: 'classes', label: t.nav.classes },
    { id: 'membership', label: t.nav.membership },
    { id: 'gallery', label: t.nav.gallery },
    { id: 'contact', label: t.nav.contact },
  ]

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <Logo asLink={false} />
            <p>{t.footer.tagline}</p>

            <div className="footer__socials">
              {BUSINESS.instagram ? (
                <a
                  href={BUSINESS.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="U FITT Ladies Gym on Instagram"
                >
                  <InstagramIcon />
                  Instagram
                </a>
              ) : null}
              {BUSINESS.facebook ? (
                <a
                  href={BUSINESS.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="U FITT Ladies Gym on Facebook"
                >
                  <FacebookIcon />
                  Facebook
                </a>
              ) : null}
            </div>
          </div>

          <nav aria-labelledby="footer-explore">
            <p className="footer__title" id="footer-explore">
              {t.footer.explore}
            </p>
            <div className="footer__links">
              {links.map((link) => (
                <a key={link.id} href={`#${link.id}`}>
                  {link.label}
                </a>
              ))}
            </div>
          </nav>

          <div>
            <p className="footer__title" id="footer-contact">
              {t.footer.contact}
            </p>
            <div className="footer__contact">
              <a href={BUSINESS.phoneHref} dir="ltr">
                <Phone size={15} aria-hidden="true" />
                {BUSINESS.phoneDisplay}
              </a>
              <a
                href={wa(t.whatsappMessages.general)}
                target="_blank"
                rel="noopener noreferrer"
              >
                <WhatsAppIcon size={15} />
                {t.actions.whatsapp}
              </a>
              <a href={BUSINESS.mapsUrl} target="_blank" rel="noopener noreferrer">
                <MapPin size={15} aria-hidden="true" />
                {BUSINESS.addressEn}
              </a>
              <span>
                <Clock size={15} aria-hidden="true" />
                {BUSINESS.hours} · {BUSINESS.ladiesHours}
              </span>
            </div>
          </div>
        </div>

        <div className="footer__watermark" aria-hidden="true">
          U FITT
        </div>

        <div className="footer__bottom">
          <p className="footer__legal">{t.footer.rights}</p>
          <a
            className="footer__credit"
            href="https://tribal3.bond"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t.footer.credit}
          </a>
        </div>
      </div>
    </footer>
  )
}
