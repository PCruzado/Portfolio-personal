# Pablo Cruzado — Portfolio V2
### *Editorial Luxury · Cinematic Dark · Scroll-Driven*

---

## Filosofía de diseño

Este portfolio está construido con una dirección de arte específica:

- **Editorial de lujo** — tipografía serif italiana (Cormorant Garamond) combinada con DM Sans sans-serif. Sin neones, sin gradientes ruidosos.
- **Cinematográfico** — el scroll *narra*, no solo desplaza. Cada sección emerge de forma orgánica.
- **Minimalista** — el espacio vacío es intencional. El contenido respira.
- **Técnicamente preciso** — arquitectura limpia, código mantenible.

---

## Stack del portfolio

| Lib             | Uso                                              |
|-----------------|--------------------------------------------------|
| React 18 + Vite | Base de la app                                   |
| Framer Motion   | Scroll-driven animations, page-load reveals      |
| React Three Fiber + Three.js | Escena 3D abstracta en el Hero    |
| @react-three/drei | Float, helpers para la escena                  |
| Lenis           | Smooth scroll de alta calidad (reemplaza scroll nativo) |

---

## Estructura

```
src/
├── App.jsx                   # Root: inicializa Lenis + monta secciones
├── main.jsx
├── styles/
│   └── global.css            # Sistema de diseño completo (CSS custom props)
├── data/
│   └── content.js            ⭐ EDITAR AQUÍ — todo el contenido del portfolio
├── hooks/
│   ├── useLenis.js           # Smooth scroll global
│   ├── useCursor.js          # Custom cursor (mix-blend-mode: difference)
│   └── useScrollProgress.js  # useInView + useScrollProgress utilities
└── components/
    ├── Cursor.jsx             # Dot + ring cursor con lerp
    ├── Nav.jsx                # Navbar flotante, se atenúa al scrollear
    ├── Hero.jsx               # Scroll-parallax + escena 3D de fondo
    ├── Scene3D.jsx            ⭐ Icosaedro wireframe + partículas (R3F)
    ├── Reveal.jsx             # Reveal / RevealLine / RevealStagger
    ├── Studies.jsx            # Sección académica estilo case-study
    ├── Projects.jsx           # 4 proyectos con layout alternado + parallax
    ├── Stack.jsx              # Grid tecnológico con hover suave
    ├── Contact.jsx            # Links de contacto tipográficos
    └── Footer.jsx             # Ultra-minimal
```

---

## Setup

```bash
# 1. Instalar dependencias
npm install

# 2. Dev server
npm run dev

# 3. Build de producción
npm run build
```

---

## Personalización

### Contenido
**Todo el contenido está en `src/data/content.js`.**
Editá ese archivo sin tocar los componentes.

### Colores
Todas las variables están en `src/styles/global.css` dentro de `:root`:

```css
--ink:         #0a0a0b;   /* Fondo principal */
--accent-gold: #c9a96e;   /* Acento dorado */
--stone:       #8a8a96;   /* Texto secundario */
```

### Tipografía
Cormorant Garamond (display serif) + DM Sans (body).
Para cambiarlas, reemplazá el `@import` en `index.html` y las variables `--font-display` / `--font-body`.

### Escena 3D
En `Scene3D.jsx`:
- Cambiá `icosahedronGeometry` por `torusKnotGeometry`, `octahedronGeometry`, etc.
- Ajustá `opacity` en el wireframe (actualmente 0.12 — muy sutil).
- Modificá `count` en `<Particles>` para más/menos puntos.

### Proyectos
Cada proyecto en `content.js` acepta:
```js
{
  color:  '#1a1a1f',   // tint de bg en hover
  accent: '#c4b89a',   // color del hairline decorativo
}
```

---

## Deploy

```bash
# Vercel (recomendado — zero-config con Vite)
npx vercel

# Netlify
npm run build
# → drag dist/ a app.netlify.com/drop
```

---

*Construido con sobriedad intencional — Pablo Cruzado, Tucumán 2025*
