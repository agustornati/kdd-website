/**
 * Configuración global del sitio: identidad, navegación y datos de contacto.
 * Centralizar acá permite mantener consistencia en Navbar, Footer y páginas.
 */

export const site = {
  name: "KDD Consulting & Technology",
  shortName: "KDD",
  tagline: "Contabilidad, impuestos y automatización de procesos financieros",
  description:
    "Estudio contable familiar que evoluciona hacia la tecnología: contabilidad, impuestos y automatización de procesos financieros con precisión auditable.",
  url: "https://kdd-consulting.com.ar",
  contact: {
    email: "info@kdd-consulting.com.ar",
    // Número en formato internacional sin signos para el enlace de WhatsApp.
    whatsapp: "5491100000000",
    whatsappDisplay: "+54 9 11 0000-0000",
    location: "Buenos Aires, Argentina",
  },
} as const;

export const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/services", label: "Servicios" },
  { href: "/technology", label: "Technology" },
  { href: "/about", label: "Nosotros" },
  { href: "/contact", label: "Contacto" },
] as const;

export const whatsappUrl = (message?: string) =>
  `https://wa.me/${site.contact.whatsapp}` +
  (message ? `?text=${encodeURIComponent(message)}` : "");
