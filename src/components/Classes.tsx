import { ArrowUpRight, Info, Users } from 'lucide-react'
import { useLanguage } from '../lib/i18n'
import { wa } from '../lib/site'
import { Reveal, SectionHeading } from './ui'

export default function Classes() {
  const { t } = useLanguage()

  return (
    <section
      className="section section--paper section--paper--alt"
      id="classes"
      aria-labelledby="classes-title"
    >
      <div className="container">
        <Reveal>
          <SectionHeading
            eyebrow={t.classes.eyebrow}
            index={t.classes.index}
            title={t.classes.title}
            text={t.classes.text}
            id="classes-title"
          />
        </Reveal>

        <div className="classes-layout">
          <div className="class-list">
            {t.classes.items.map((item, index) => (
              <Reveal key={item.label} delay={index * 70}>
                <article className="class-row">
                  <span className="class-row__day">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div className="class-row__body">
                    <h3>{item.label}</h3>
                    <p>{item.desc}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={140}>
            <aside className="classes-aside">
              <span className="classes-aside__icon" aria-hidden="true">
                <Users size={22} strokeWidth={1.7} />
              </span>
              <p className="classes-aside__coach">{t.classes.asideEyebrow}</p>
              <h3>{t.classes.asideTitle}</h3>
              <p className="classes-aside__text">{t.classes.asideText}</p>
              <a
                className="btn btn--outline-dark"
                href={wa(t.whatsappMessages.classes)}
                target="_blank"
                rel="noopener noreferrer"
              >
                {t.classes.cta}
                <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            </aside>
          </Reveal>
        </div>

        <Reveal>
          <p className="classes-note">
            <Info size={14} aria-hidden="true" />
            {t.classes.note}
          </p>
        </Reveal>
      </div>
    </section>
  )
}
