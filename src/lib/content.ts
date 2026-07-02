/**
 * Contenido de negocio del sitio: servicios del estudio contable.
 * Se consume desde la Home y desde /services.
 */
import type { IconName } from "@/components/icons";

export interface ServiceItem {
  icon: IconName;
  title: string;
  description: string;
}

export interface ServiceArea {
  id: string;
  label: string;
  title: string;
  summary: string;
  services: ServiceItem[];
}

export const consulting: ServiceArea = {
  id: "consulting",
  label: "Servicios Contables",
  title: "Contabilidad y asesoramiento profesional",
  summary:
    "Un estudio contable moderno y profesional: cumplimiento, orden y acompañamiento cercano para tu empresa.",
  services: [
    {
      icon: "calculator",
      title: "Contabilidad General",
      description:
        "Administración y registración contable para empresas y profesionales.",
    },
    {
      icon: "percent",
      title: "Liquidación de Impuestos",
      description:
        "IVA, Ganancias, Ingresos Brutos y demás obligaciones fiscales.",
    },
    {
      icon: "users",
      title: "Liquidación de Sueldos",
      description:
        "Administración integral de nómina y obligaciones laborales.",
    },
    {
      icon: "shield",
      title: "Asesoramiento Contable",
      description:
        "Asistencia permanente para la toma de decisiones y cumplimiento normativo.",
    },
    {
      icon: "document",
      title: "Constitución de Sociedades",
      description:
        "Asesoramiento y acompañamiento en la creación de nuevas empresas.",
    },
    {
      icon: "chart",
      title: "Consultoría Financiera",
      description:
        "Análisis financiero y planificación para el crecimiento del negocio.",
    },
  ],
};

export const areas: ServiceArea[] = [consulting];

/** Beneficios internos de NAT Automation (usados en /technology — no visible en nav). */
export const automationBenefits: { icon: IconName; title: string; description: string }[] = [
  {
    icon: "refresh",
    title: "Compara legacy vs. nuevos desarrollos",
    description:
      "Contrasta resultados entre sistemas heredados y nuevas soluciones para validar cada migración o cambio.",
  },
  {
    icon: "chart",
    title: "Detecta diferencias a nivel de datos",
    description:
      "Identifica discrepancias registro por registro, no solo totales, para encontrar la causa raíz.",
  },
  {
    icon: "cog",
    title: "Reduce el trabajo manual",
    description:
      "Reemplaza tareas repetitivas y el cruce manual de planillas por procesos automáticos, repetibles y sin errores humanos.",
  },
  {
    icon: "document",
    title: "Mejora la trazabilidad",
    description:
      "Cada validación queda registrada y es reproducible: sabés qué se comparó, cuándo y con qué resultado.",
  },
  {
    icon: "shield",
    title: "Genera reportes auditables",
    description:
      "Salidas claras y verificables, listas para auditoría interna o externa.",
  },
  {
    icon: "check",
    title: "Objetivo: 0 diferencias",
    description:
      "El estándar de calidad es una validación que cierra en cero. Ni más, ni menos.",
  },
];
