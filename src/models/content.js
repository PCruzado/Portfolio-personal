// ============================================================
// All portfolio content in one place.
// Edit this file to update the site without touching components.
// ============================================================

export const identity = {
  name: 'Pablo Cruzado',
  role: 'Full-Stack Web Developer',
  location: 'San Miguel de Tucumán, Argentina',
  tagline: 'Arquitecto de experiencias\nweb de extremo a extremo.',
  bio: `Desarrollo aplicaciones web con foco en arquitectura limpia,
experiencia de usuario y solidez técnica. Desde la base de datos
hasta la interfaz, construyo sistemas que escalan y perduran.`,
  availability: 'Disponible para proyectos · 2026',
}

export const studies = [
  {
    id: 'bachiller',
    institution: 'Colegio Tulio García Fernández',
    short: 'TGF',
    degree: 'Bachiller en Economía y Gestión de las Organizaciones',
    period: '2017 — 2022',
    focus: [
      'Economía y administración de organizaciones',
      'Gestión contable y financiera',
      'Organización y procesos empresariales',
    ],
    note: 'Título secundario con orientación en economía y gestión organizacional.',
  },
  {
    id: 'unsta',
    institution: 'Universidad del Norte\nSanto Tomás de Aquino',
    short: 'UNSTA',
    degree: 'Tecnicatura en Desarrollo y Calidad de Software',
    period: '2023 — Actualidad',
    focus: [
      'Desarrollo de software y arquitectura de sistemas',
      'Calidad de software y testing',
      'Automatización de pruebas funcionales',
      'Metodologías ágiles',
    ],
    note: 'Tecnicatura universitaria orientada al desarrollo profesional de software con énfasis en calidad y testing.',
  },
  {
    id: 'rolling',
    institution: 'Rolling Code School',
    short: 'Rolling',
    degree: 'Bootcamp Full-Stack',
    period: '2025',
    focus: [
      'Stack MERN de principio a fin',
      'APIs RESTful y arquitectura cliente-servidor',
      'Deployment en producción (Render, Vercel)',
      'Trabajo en equipo con metodología Scrum',
    ],
    note: 'Bootcamp intensivo en desarrollo web full-stack con proyectos reales.',
  },
]

export const projects = [
  {
    id: 'voy',
    index: '01',
    title: 'VOYProject',
    category: 'Plataforma de Eventos',
    year: '2026',
    headline: 'Búsqueda y listado\ndinámico de eventos.',
    description: `Sistema de filtrado de eventos con múltiples criterios combinados.
El foco estuvo en el diseño del motor de búsqueda y la gestión de entradas.`,
    challenge: 'Motor de búsqueda multi-criterio con performance sub-200ms.',
    stack: ['React', 'Node.js', 'Express', 'MongoDB Atlas', 'Vite'],
    color: '#1a1a1f',
    accent: '#c4b89a',
  },
  {
    id: 'mediweb',
    index: '02',
    title: 'MediWeb',
    category: 'Gestión Médica',
    year: '2025',
    headline: 'Gestión médica con\nroles y firmas digitales.',
    description: `Plataforma para la gestión de consultas médicas. Sistema de roles
(paciente, médico, administrador), recuperación de contraseña y firma digital de documentos clínicos.`,
    challenge: 'Sistema de roles + firmas digitales con trazabilidad de auditoría.',
    stack: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'PDF-Lib'],
    color: '#12121a',
    accent: '#9ab4c4',
  },
  {
    id: 'gym',
    index: '03',
    title: 'Gym Manager',
    category: 'Aplicación MERN',
    year: '2025',
    headline: 'Gestión de gimnasio\nde punta a punta.',
    description: `Aplicación MERN para administrar membresías, asistencia y pagos.
Notificaciones automáticas vía EmailJS. Deployado en Render.`,
    challenge: 'Automatización de notificaciones y reportes en tiempo real.',
    stack: ['React', 'Node.js', 'MongoDB', 'EmailJS', 'Render'],
    color: '#0f1a12',
    accent: '#9ac4a0',
  },
  {
    id: 'agn',
    index: '04',
    title: 'AGN Usados & Economato',
    category: 'Plataformas a medida',
    year: '2024',
    headline: 'Plataformas a medida\ncon automatización.',
    description: `Plataforma de venta de autos usados con catálogo y filtros dinámicos,
y sistema de stock de economato sobre Google Sheets automatizado con Apps Script.`,
    challenge: 'Reemplazar flujos manuales con automatizaciones sin fricción.',
    stack: ['React', 'Node.js', 'MongoDB', 'Google Apps Script', 'Cloudinary'],
    color: '#1a150f',
    accent: '#c4a96e',
  },
]

export const stack = {
  core: ['HTML', 'CSS', 'JavaScript', 'React'],
  extended: ['Tailwind CSS', 'Node.js', 'Express', 'MongoDB', 'Supabase'],
  deploy: ['Git', 'GitHub', 'Vercel', 'Netlify', 'Render'],
}
