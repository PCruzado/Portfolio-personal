import { motion } from 'framer-motion'
import Reveal, { RevealLine } from './Reveal'
import { identity } from '../models/content.js'

const contacts = [
  { label: 'Email',    value: 'pablito.cruzadosujeros@gmail.com',     href: 'mailto:pablito.cruzadosujeros@gmail.com' },
  { label: 'GitHub',   value: 'github.com/PCruzado',      href: 'https://github.com/PCruzado' },
  { label: 'LinkedIn', value: 'linkedin.com/in/pablo-eugenio-cruzado-sujeros', href: 'https://www.linkedin.com/in/pablo-eugenio-cruzado-sujeros-64728130b' },
]

export default function Contact() {
  return (
    <section
      id="contact"
      style={{
        paddingTop: 'var(--section-gap)',
        paddingBottom: 'clamp(80px, 12vw, 160px)',
        borderTop: '1px solid var(--accent-line)',
      }}
    >
      <div className="wrap">
        {/* Big closing statement */}
        <div style={{ marginBottom: 'clamp(80px, 10vw, 140px)', maxWidth: '800px' }}>
          <Reveal>
            <p className="t-label" style={{ marginBottom: '20px' }}>Trabajemos juntos</p>
          </Reveal>
          <RevealLine delay={0.05}>
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 300,
              fontStyle: 'italic',
              fontSize: 'clamp(2.4rem, 6vw, 6rem)',
              lineHeight: 0.95,
              color: 'var(--white)',
            }}>
              ¿Tenés un proyecto
            </h2>
          </RevealLine>
          <RevealLine delay={0.1}>
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 300,
              fontStyle: 'italic',
              fontSize: 'clamp(2.4rem, 6vw, 6rem)',
              lineHeight: 0.95,
              color: 'var(--stone)',
            }}>
              en mente?
            </h2>
          </RevealLine>

          <Reveal delay={0.18}>
            <p className="t-body" style={{
              marginTop: '32px',
              color: 'var(--stone)',
              maxWidth: '420px',
            }}>
              Estoy disponible para proyectos freelance, colaboraciones y posiciones de tiempo completo.
              Escribime y lo conversamos.
            </p>
          </Reveal>
        </div>

        {/* Contact rows */}
        <div>
          {contacts.map((c, i) => (
            <Reveal key={c.label} delay={i * 0.08}>
              <a
                href={c.href}
                target={c.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                data-cursor
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: 'clamp(20px, 3vw, 32px) 0',
                  borderTop: '1px solid var(--accent-line)',
                  textDecoration: 'none',
                  cursor: 'none',
                  transition: 'color 0.35s ease',
                  ...(i === contacts.length - 1 ? { borderBottom: '1px solid var(--accent-line)' } : {}),
                }}
                onMouseEnter={e => {
                  e.currentTarget.querySelector('.c-label').style.color = 'var(--white)'
                  e.currentTarget.querySelector('.c-value').style.color = 'var(--stone)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.querySelector('.c-label').style.color = 'var(--stone)'
                  e.currentTarget.querySelector('.c-value').style.color = 'var(--mist)'
                }}
              >
                <span
                  className="c-label t-label"
                  style={{ color: 'var(--stone)', transition: 'color 0.3s ease' }}
                >
                  {c.label}
                </span>
                <span
                  className="c-value"
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontWeight: 300,
                    fontStyle: 'italic',
                    fontSize: 'clamp(1rem, 2vw, 1.6rem)',
                    color: 'var(--mist)',
                    transition: 'color 0.3s ease',
                  }}
                >
                  {c.value}
                </span>
                <span style={{ color: 'var(--stone)', fontSize: '1.2rem', opacity: 0.5 }}>↗</span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
