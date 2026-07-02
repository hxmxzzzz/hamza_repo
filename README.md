# EcoBin — Smart Waste Management System

A front-end-only, AI-inspired concept site for a smart waste management
platform built for Pakistan's cities. Dark glassmorphic UI, 3D hero bin,
scroll-driven motion, and a full illustrative analytics dashboard — no
backend, no database.

## Stack

- React 18 + Vite
- Tailwind CSS (custom neon/cyan design tokens)
- Framer Motion (scroll reveals, hover states, page motion)
- React Three Fiber + Drei (3D smart bin in the hero)
- Recharts (dashboard bar / pie / line charts)
- React Icons (Feather + Phosphor sets)

## Run it

```bash
npm install
npm run dev
```

Then open the printed local URL. Build for production with:

```bash
npm run build
npm run preview
```

## Structure

```
src/
  components/     one component per section
  data/           copy + icon data for repeatable sections
  index.css       design tokens, glass utilities, cursor, animations
  App.jsx         section order
```

All dashboard figures, gallery tiles, and route-map data are illustrative
placeholders — wire them up to real sensor data when you're ready to go
beyond the concept.
