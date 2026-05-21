import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Reveal, { RevealLine } from './Reveal'
import { projects } from '../models/content.js'

/* ──────────────────────────────────────────────────────────
   ProjectCard — full-bleed case study block.
   Alternates layout and uses scroll-driven parallax on the
   background color layer.
────────────────────────────────────────────────────────── */
function ProjectCard({ project, index }) {
  const cardRef = useRef(null)
  const isEven  = index % 2 === 0

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start end', 'end start'],
  })

  // Subtle parallax on the index number
  const numY = useTransform(scrollYProgress, [0, 1], ['20px', '-20px'])

  return (
    <article
      ref={cardRef}
      id={`project-${project.id}`}
      style={{
        position: 'relative',
        padding: 'clamp(56px, 8vw, 100px) 0',
        borderTop: '1px solid var(--accent-line)',
      }}
    >
      {/* Subtle background tint on hover */}
      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        style={{
          position: 'absolute',
          inset: 0,
          background: `radial-gradient(ellipse 60% 60% at ${isEven ? '20%' : '80%'} 50%, ${project.color} 0%, transparent 70%)`,
          pointerEvents: 'none',
          zIndex: 0,
        }}
        aria-hidden="true"
      />

      <div
        className={`wrap project-grid ${isEven ? 'even' : 'odd'}`}
        style={{
          position: 'relative',
          zIndex: 1,
        }}
      >
        {/* ── Meta column ── */}
        <div className="project-col-meta">
          <Reveal delay={0}>
            <motion.div style={{ y: numY }}>
              <span style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(4rem, 10vw, 9rem)',
                fontWeight: 300,
                color: 'rgba(245,245,247,0.04)',
                lineHeight: 1,
                display: 'block',
                marginBottom: '8px',
                userSelect: 'none',
                pointerEvents: 'none',
              }}>
                {project.index}
              </span>
            </motion.div>

            <p className="t-label" style={{ marginBottom: '12px' }}>
              {project.category}
            </p>
            <p className="t-label" style={{ color: 'var(--ink-3)', marginBottom: '32px' }}>
              {project.year}
            </p>
          </Reveal>

          {/* Stack tags */}
          <Reveal delay={0.1}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '32px' }}>
              {project.stack.map(t => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>
          </Reveal>

          {/* Challenge label */}
          <Reveal delay={0.15}>
            <div style={{
              padding: '16px 20px',
              border: '1px solid var(--accent-line)',
              borderRadius: '4px',
              background: 'rgba(255,255,255,0.02)',
            }}>
              <p className="t-label" style={{ marginBottom: '8px', color: 'var(--stone)' }}>
                Desafío clave
              </p>
              <p className="t-body" style={{ fontSize: '0.85rem', color: 'var(--mist)' }}>
                {project.challenge}
              </p>
            </div>
          </Reveal>
        </div>

        {/* ── Content column ── */}
        <div className="project-col-content">
          <RevealLine delay={0.05}>
            <h3
              className="t-title"
              style={{
                fontStyle: 'italic',
                fontSize: 'clamp(1.8rem, 4vw, 3.5rem)',
                marginBottom: '24px',
                whiteSpace: 'pre-line',
              }}
            >
              {project.headline}
            </h3>
          </RevealLine>

          <Reveal delay={0.12}>
            <h4 style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 400,
              fontSize: 'clamp(1.4rem, 3vw, 2.2rem)',
              color: 'var(--white)',
              marginBottom: '20px',
            }}>
              {project.title}
            </h4>
          </Reveal>

          <Reveal delay={0.18}>
            <p className="t-body" style={{ color: 'var(--stone)', maxWidth: '520px' }}>
              {project.description}
            </p>
          </Reveal>

          {/* Horizontal rule with accent */}
          <Reveal delay={0.24}>
            <div style={{
              marginTop: '40px',
              height: '1px',
              background: `linear-gradient(to right, ${project.accent}44, transparent)`,
              maxWidth: '320px',
            }} />
          </Reveal>
        </div>
      </div>
    </article>
  )
}

export default function Projects() {
  return (
    <section
      id="projects"
      style={{
        paddingTop: 'var(--section-gap)',
        paddingBottom: 'var(--section-gap)',
      }}
    >
      {/* Section header */}
      <div className="wrap" style={{ marginBottom: 'clamp(48px, 6vw, 80px)' }}>
        <Reveal>
          <p className="t-label" style={{ marginBottom: '16px' }}>Trabajo seleccionado</p>
        </Reveal>
        <RevealLine delay={0.05}>
          <h2 className="t-title" style={{ fontStyle: 'italic' }}>
            Casos de estudio
          </h2>
        </RevealLine>
      </div>

      {/* Projects List */}
      <div style={{ padding: 'clamp(60px, 8vw, 100px) 0' }}>
        {(projects || []).map((proj, i) => (
          <ProjectCard key={proj.id} project={proj} index={i} />
        ))}
      </div>
    </section>
  )
}
