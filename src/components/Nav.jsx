import { useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const links = [
  { label: 'Estudios',  href: '#studies'  },
  { label: 'Proyectos', href: '#projects' },
  { label: 'Stack',     href: '#stack'    },
  { label: 'Contacto',  href: '#contact'  },
]

export default function Nav() {
  const { scrollY } = useScroll()
  const [atTop, setAtTop] = useState(true)

  useEffect(() => {
    return scrollY.on('change', v => setAtTop(v < 60))
  }, [scrollY])

  const handleScroll = (e) => {
    e.preventDefault()
    const targetId = e.currentTarget.getAttribute('href')
    const element = document.querySelector(targetId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
      style={{
        position: 'fixed',
        top: 0, left: 0, right: 0,
        zIndex: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '28px clamp(24px, 5vw, 80px)',
        transition: 'background 0.6s ease',
        background: atTop
          ? 'transparent'
          : 'linear-gradient(to bottom, rgba(10,10,11,0.9) 0%, transparent 100%)',
        backdropFilter: atTop ? 'none' : 'blur(0px)',
      }}
    >
      {/* Logo */}
      <a
        href="#top"
        onClick={handleScroll}
        style={{
          fontFamily: 'var(--font-display)',
          fontStyle: 'italic',
          fontWeight: 300,
          fontSize: '1.1rem',
          color: 'var(--white)',
          textDecoration: 'none',
          letterSpacing: '0.02em',
          cursor: 'none',
        }}
        data-cursor
      >
        PC
      </a>

      {/* Links */}
      <ul style={{ display: 'flex', gap: 'clamp(24px, 3vw, 48px)', listStyle: 'none' }}>
        {links.map(l => (
          <li key={l.href}>
            <a
              href={l.href}
              onClick={handleScroll}
              className="link-underline"
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.65rem',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--stone)',
                textDecoration: 'none',
                cursor: 'none',
                transition: 'color 0.3s ease',
              }}
              onMouseEnter={e => e.target.style.color = 'var(--white)'}
              onMouseLeave={e => e.target.style.color = 'var(--stone)'}
              data-cursor
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>

      {/* Availability dot */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <span style={{
          width: '6px', height: '6px',
          borderRadius: '50%',
          background: '#6ee7a0',
          boxShadow: '0 0 8px rgba(110,231,160,0.6)',
        }} />
        <span style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.6rem',
          letterSpacing: '0.1em',
          color: 'var(--stone)',
          textTransform: 'uppercase',
        }}>
          Disponible
        </span>
      </div>
    </motion.nav>
  )
}
