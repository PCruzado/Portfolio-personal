import { useLenis }  from './hooks/useLenis'
import Cursor   from './components/Cursor'
import Nav      from './components/Nav'
import Hero     from './components/Hero'
import Studies  from './components/Studies'
import Projects from './components/Projects'
import StackSection from './components/Stack'
import Contact  from './components/Contact'
import Footer   from './components/Footer'

export default function App() {
  // Initialize Lenis smooth scroll globally
  useLenis()

  return (
    <>
      <Cursor />
      <Nav />

      <main>
        {/* 01 — Landing */}
        <Hero />

        {/* 02 — Formación */}
        <Studies />

        {/* 03 — Proyectos */}
        <Projects />

        {/* 04 — Stack */}
        <StackSection />

        {/* 05 — Contacto */}
        <Contact />
      </main>

      <Footer />
    </>
  )
}
