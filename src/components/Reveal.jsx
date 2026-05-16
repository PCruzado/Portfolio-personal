import { motion } from 'framer-motion'
import { useInView } from '../hooks/useScrollProgress'

/**
 * Reveal — wraps children in a scroll-triggered fade+slide animation.
 *
 * Props:
 *   delay   {number}  – extra delay before animation starts
 *   y       {number}  – starting vertical offset in px
 *   once    {boolean} – only animate once (default true)
 *   as      {string}  – HTML tag to render as (default 'div')
 *   rootMargin {string}
 */
export default function Reveal({
  children,
  delay   = 0,
  y       = 32,
  style   = {},
  className,
  as      = 'div',
  rootMargin = '-60px',
}) {
  const { ref, inView } = useInView({ rootMargin })

  const Tag = motion[as] || motion.div

  return (
    <Tag
      ref={ref}
      className={className}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 1.1,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      style={style}
    >
      {children}
    </Tag>
  )
}

/**
 * RevealLine — reveals a single line by clipping it upward.
 * Great for individual heading lines.
 */
export function RevealLine({ children, delay = 0, style = {}, className }) {
  const { ref, inView } = useInView({ rootMargin: '-40px' })

  return (
    <div ref={ref} style={{ overflow: 'hidden', ...style }} className={className}>
      <motion.div
        initial={{ y: '110%' }}
        animate={inView ? { y: '0%' } : {}}
        transition={{ duration: 1.1, delay, ease: [0.16, 1, 0.3, 1] }}
      >
        {children}
      </motion.div>
    </div>
  )
}

/**
 * RevealStagger — maps children to staggered Reveal elements.
 */
export function RevealStagger({ children, baseDelay = 0, step = 0.12, ...rest }) {
  return (
    <>
      {Array.isArray(children)
        ? children.map((child, i) => (
            <Reveal key={i} delay={baseDelay + i * step} {...rest}>
              {child}
            </Reveal>
          ))
        : <Reveal delay={baseDelay} {...rest}>{children}</Reveal>
      }
    </>
  )
}
