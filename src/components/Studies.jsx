import Reveal, { RevealLine } from './Reveal'
import { studies } from '../models/content.js'

function StudyBlock({ study, index, isLast }) {

  return (
    <article
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 2fr',
        gap: 'clamp(32px, 5vw, 80px)',
        padding: 'clamp(48px, 6vw, 80px) 0',
        borderTop: '1px solid var(--accent-line)',
        ...(isLast ? { borderBottom: '1px solid var(--accent-line)' } : {}),
      }}
    >
      {/* Left column — meta */}
      <div>
        <Reveal delay={0}>
          <p className="t-label" style={{ marginBottom: '16px' }}>
            {String(index + 1).padStart(2, '0')} / Formación
          </p>
          <p style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.65rem',
            color: 'var(--stone)',
            letterSpacing: '0.1em',
          }}>
            {study.period}
          </p>
        </Reveal>
      </div>

      {/* Right column — content */}
      <div>
        <RevealLine delay={0.05}>
          <h2 className="t-title" style={{
            fontSize: 'clamp(1.6rem, 3.5vw, 3rem)',
            marginBottom: '8px',
            whiteSpace: 'pre-line',
          }}>
            {study.institution}
          </h2>
        </RevealLine>

        <Reveal delay={0.1}>
          <p className="t-subtitle" style={{ marginBottom: '32px' }}>
            {study.degree}
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="t-body" style={{ marginBottom: '28px', maxWidth: '520px' }}>
            {study.note}
          </p>
        </Reveal>

        {/* Focus areas */}
        <Reveal delay={0.2}>
          <ul style={{
            listStyle: 'none',
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
          }}>
            {study.focus.map((item, i) => (
              <li key={i} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <span style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.6rem',
                  color: 'var(--stone)',
                  paddingTop: '4px',
                  flexShrink: 0,
                }}>
                  ∙
                </span>
                <span className="t-body" style={{ color: 'var(--mist)' }}>{item}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </article>
  )
}

export default function Studies() {
  return (
    <section
      id="studies"
      style={{
        paddingTop: 'var(--section-gap)',
        paddingBottom: 'var(--section-gap)',
      }}
    >
      <div className="wrap">
        {/* Section header */}
        <div style={{ marginBottom: 'clamp(48px, 6vw, 80px)' }}>
          <Reveal>
            <p className="t-label" style={{ marginBottom: '16px' }}>Formación académica</p>
          </Reveal>
          <RevealLine delay={0.05}>
            <h2 className="t-title" style={{ fontStyle: 'italic' }}>
              Estudios
            </h2>
          </RevealLine>
        </div>

        {/* Study blocks */}
        {(studies || []).map((s, i) => (
          <StudyBlock key={s.id} study={s} index={i} isLast={i === (studies?.length || 0) - 1} />
        ))}
      </div>
    </section>
  )
}
