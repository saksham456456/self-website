# Futuristic Personal Portfolio

A high-end, futuristic personal website built with Next.js, TypeScript, TailwindCSS, Framer Motion, and Three.js.

## Features

- **Next.js 15 + App Router**
- **TypeScript** for type safety
- **TailwindCSS v4** for styling
- **Framer Motion** for cinematic animations
- **Three.js (@react-three/fiber)** for 3D effects (Particle Background, Hologram)
- **Fully Responsive** design
- **Glassmorphism** & Neon aesthetics

## Getting Started

1.  **Install dependencies:**
    ```bash
    npm install
    ```

2.  **Run the development server:**
    ```bash
    npm run dev
    ```

3.  **Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.**

## customization

### Personal Information & Content

All content is managed centrally in `src/config/index.ts`. You can edit this file to update:

- **Personal Info:** Name, Role, Bio, Location, Email, Social Links.
- **Skills:** Technical skills and tools.
- **Experience:** Work history timeline.
- **Projects:** Case studies with details (Problem, Solution, Features).
- **Stats:** Key statistics counters.
- **Testimonials:** Client quotes.

### Images

Place your images in the `public/` directory and update the paths in `src/config/index.ts`.

- **Projects:** Update `image` property in the `projects` array.
- **Testimonials:** Update `avatar` property in the `testimonials` array.

### Icons

The project uses `lucide-react`. You can import new icons in components or `src/config/index.ts`.

### Styling

Global styles and variables are defined in `src/app/globals.css`.
- Colors: `--color-neon-blue`, `--color-tech-black`, etc.
- Fonts: configured in `src/app/layout.tsx`.

## Deployment

This project is optimized for deployment on Vercel.

```bash
npm run build
```
