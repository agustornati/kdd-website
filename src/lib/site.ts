/**
 * Configuración global del sitio: identidad, navegación y datos de contacto.
 * Centralizar acá permite mantener consistencia en Navbar, Footer y páginas.
 */

export const site = {
  name: "NAT Consulting",
  shortName: "NAT",
  tagline: "Contabilidad, impuestos y asesoramiento para empresas y profesionales",
  description:
    "Estudio contable moderno y profesional especializado en contabilidad general, liquidación de impuestos, sueldos y asesoramiento para empresas y profesionales en Buenos Aires, Argentina.",
  url: "https://nat-consulting.com.ar",
  contact: {
    email: "agustin.tornati@gmail.com",
    // Número en formato internacional sin signos para el enlace de WhatsApp.
    whatsapp: "5491165026093",
    whatsappDisplay: "+54 9 11 6502-6093",
    location: "Buenos Aires, Argentina",
  },
} as const;

export const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/services", label: "Servicios" },
  { href: "/about", label: "Nosotros" },
  { href: "/contact", label: "Contacto" },
] as const;

export const whatsappUrl = (message?: string) =>
  `https://wa.me/${site.contact.whatsapp}` +
  (message ? `?text=${encodeURIComponent(message)}` : "");
