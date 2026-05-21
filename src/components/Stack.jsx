import Reveal, { RevealLine, RevealStagger } from './Reveal'
import { stack } from '../models/content.js'

const categories = stack ? [
  { label: 'MERN Core',       items: stack.core     },
  { label: 'Extensiones',     items: stack.extended  },
  { label: 'Deploy & Cloud',  items: stack.deploy    },
] : []

export default function StackSection() {
  return (
    <section
      id="stack"
      style={{
        paddingTop: 'var(--section-gap)',
        paddingBottom: 'var(--section-gap)',
        borderTop: '1px solid var(--accent-line)',
      }}
    >
      <div className="wrap">
        {/* Header */}
        <div className="stack-header">
          <div>
            <Reveal>
              <p className="t-label" style={{ marginBottom: '16px' }}>Stack tecnológico</p>
            </Reveal>
            <RevealLine delay={0.05}>
              <h2 className="t-title" style={{ fontStyle: 'italic' }}>
                Herramientas
              </h2>
            </RevealLine>
          </div>

          <Reveal delay={0.1}>
            <p className="t-body" style={{ color: 'var(--stone)', maxWidth: '460px' }}>
              Un conjunto cuidadosamente elegido de tecnologías modernas que me permite
              construir desde la base de datos hasta la interfaz con coherencia y velocidad.
            </p>
          </Reveal>
        </div>

        {/* Tech grid */}
        <div className="stack-grid">
          {categories.map((cat, ci) => (
            <Reveal key={cat.label} delay={ci * 0.08}>
              <div style={{
                background: 'var(--ink)',
                padding: 'clamp(28px, 4vw, 48px)',
              }}>
                <p className="t-label" style={{ marginBottom: '28px' }}>{cat.label}</p>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  {cat.items.map((item, ii) => (
                    <li
                      key={item}
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontWeight: 300,
                        fontSize: 'clamp(1rem, 1.8vw, 1.4rem)',
                        color: 'var(--mist)',
                        paddingBottom: '14px',
                        borderBottom: ii < cat.items.length - 1 ? '1px solid var(--accent-line)' : 'none',
                        transition: 'color 0.3s ease',
                        cursor: 'default',
                      }}
                      onMouseEnter={e => e.currentTarget.style.color = 'var(--white)'}
                      onMouseLeave={e => e.currentTarget.style.color = 'var(--mist)'}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Philosophy note */}
        <Reveal delay={0.2}>
          <div style={{
            marginTop: 'clamp(48px, 6vw, 80px)',
            display: 'flex',
            gap: '24px',
            alignItems: 'flex-start',
            maxWidth: '680px',
          }}>
            <div style={{
              width: '1px',
              minHeight: '48px',
              background: 'var(--accent-line)',
              flexShrink: 0,
              marginTop: '4px',
            }} />
            <p className="t-body" style={{ color: 'var(--stone)', fontStyle: 'italic' }}>
              "Elijo las herramientas que resuelven el problema de forma elegante,
               no las que están de moda. La solidez del sistema importa más que el hype."
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
