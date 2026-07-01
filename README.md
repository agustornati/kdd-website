# KDD Consulting & Technology — Sitio institucional

Sitio web público de **KDD Consulting & Technology**, un estudio contable
familiar que evoluciona hacia la tecnología y la automatización de procesos
financieros.

Construido con **Next.js (App Router)**, **TypeScript** y **TailwindCSS**.

## Stack

- [Next.js 15](https://nextjs.org/) con App Router
- React 19 + TypeScript
- TailwindCSS 3
- Fuente Inter (`next/font`)

## Requisitos

- Node.js 18.18 o superior
- npm

## Desarrollo

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Build de producción

```bash
npm run build
npm run start
```

## Estructura

```
src/
├── app/                    # App Router (una carpeta por ruta)
│   ├── layout.tsx          # Layout raíz (Navbar + Footer, fuentes, metadata)
│   ├── globals.css         # Estilos base + utilidades Tailwind
│   ├── page.tsx            # Home  (/)
│   ├── services/page.tsx   # /services
│   ├── technology/page.tsx # /technology
│   ├── about/page.tsx      # /about
│   └── contact/page.tsx    # /contact
├── components/             # Componentes reutilizables
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── Section.tsx
│   ├── ServiceCard.tsx
│   ├── ContactForm.tsx
│   └── icons.tsx           # Set de iconos de línea
└── lib/
    ├── site.ts             # Identidad, navegación y datos de contacto
    └── content.ts          # Áreas y servicios (Consulting / Technology)
```

## Rutas

| Ruta          | Descripción                                                        |
| ------------- | ------------------------------------------------------------------ |
| `/`           | Home: hero, áreas Consulting y Technology, diferencial y CTA.      |
| `/services`   | Detalle de servicios en dos bloques (Consulting / Technology).     |
| `/technology` | Concepto de **KDD Automation** (validación financiera, 0 diferencias). |
| `/about`      | Historia y visión del estudio.                                     |
| `/contact`    | Formulario de contacto + WhatsApp y email.                         |

## Configuración de contenido

- **Datos de contacto** (email, WhatsApp, ubicación) y navegación: `src/lib/site.ts`.
- **Servicios y textos de negocio**: `src/lib/content.ts`.

> El formulario de contacto es solo front-end (usa `mailto:`). Está preparado
> para conectarse a una API en el futuro sin cambiar la interfaz.

## Despliegue

Listo para desplegar en [Vercel](https://vercel.com/) u otro hosting compatible
con Next.js (`npm run build`).
