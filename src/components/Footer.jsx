import { identity } from '../models/content.js'

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: '1px solid var(--accent-line)',
        padding: 'clamp(24px, 3vw, 40px) 0',
      }}
    >
      <div
        className="wrap"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '16px',
        }}
      >
        <span style={{
          fontFamily: 'var(--font-display)',
          fontStyle: 'italic',
          fontWeight: 300,
          color: 'var(--stone)',
          fontSize: '0.95rem',
        }}>
            {(identity || {}).name || 'Pablo Cruzado'}
        </span>

        <span className="t-label" style={{ color: 'var(--ink-3)' }}>
          © 2026 Pablo Cruzado. Todos los derechos reservados.
        </span>

            <p className="t-label" style={{ color: 'var(--mist)' }}>{(identity || {}).location || 'San Miguel de Tucumán, Argentina'}</p>
      </div>
    </footer>
  )
}
