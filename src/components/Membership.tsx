import { Check, Info } from 'lucide-react'
import { useLanguage } from '../lib/i18n'
import { wa } from '../lib/site'
import { Reveal, SectionHeading, WhatsAppIcon } from './ui'

export default function Membership() {
  const { t } = useLanguage()
  const messages = [t.whatsappMessages.silver, t.whatsappMessages.golden]

  return (
    <section
      className="section section--paper"
      id="membership"
      aria-labelledby="membership-title"
    >
      <div className="container">
        <Reveal>
          <SectionHeading
            eyebrow={t.membership.eyebrow}
            index={t.membership.index}
            title={t.membership.title}
            text={t.membership.text}
            id="membership-title"
          />
        </Reveal>

        <div className="plans-grid">
          {t.membership.plans.map((plan, index) => (
            <Reveal key={plan.name} delay={index * 100}>
              <article className={`plan-card ${index === 1 ? 'plan-card--featured' : ''}`}>
                <div className="plan-card__head">
                  <div>
                    <p className="plan-card__tag">{plan.tag}</p>
                    <h3 className="display plan-card__name">{plan.name}</h3>
                  </div>
                  <span className="plan-card__num" aria-hidden="true">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>

                <div className="plan-card__price">
                  <strong>{plan.price}</strong>
                  <span>{plan.period}</span>
                </div>

                <p className="plan-card__desc">{plan.desc}</p>

                <ul className="plan-card__features">
                  {plan.features.map((feature) => (
                    <li key={feature}>
                      <Check size={14} strokeWidth={3} aria-hidden="true" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  className={`btn btn--block ${index === 1 ? '' : 'btn--outline-dark'}`}
                  href={wa(messages[index] ?? t.whatsappMessages.membership)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <WhatsAppIcon size={15} />
                  {plan.cta}
                </a>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="plan-addons">
            <p className="plan-addons__title">{t.membership.extrasTitle}</p>
            <div className="plan-addons__items">
              {t.membership.extras.map((extra) => (
                <span className="plan-addons__item" key={extra}>
                  {extra}
                </span>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal>
          <p className="plans-note">
            <Info size={14} aria-hidden="true" />
            {t.membership.note}
          </p>
        </Reveal>
      </div>
    </section>
  )
}
