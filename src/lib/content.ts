/**
 * Contenido de negocio del sitio: las dos áreas (Consulting y Technology) y sus
 * servicios. Se consume desde la Home y desde /services.
 */
import type { IconName } from "@/components/icons";

export interface ServiceItem {
  icon: IconName;
  title: string;
  description: string;
}

export interface ServiceArea {
  id: "consulting" | "technology";
  label: string;
  title: string;
  summary: string;
  services: ServiceItem[];
}

export const consulting: ServiceArea = {
  id: "consulting",
  label: "Consulting",
  title: "Contabilidad y asesoramiento profesional",
  summary:
    "La solidez de un estudio contable tradicional: cumplimiento, orden y acompañamiento cercano para tu empresa.",
  services: [
    {
      icon: "calculator",
      title: "Contabilidad general",
      description:
        "Registración, estados contables y balances con información clara y a tiempo para tomar decisiones.",
    },
    {
      icon: "percent",
      title: "Impuestos",
      description:
        "Liquidación y planificación impositiva nacional y provincial, cumplimiento de vencimientos y optimización de la carga fiscal.",
    },
    {
      icon: "shield",
      title: "Auditoría",
      description:
        "Revisión y control de la información financiera para garantizar consistencia, transparencia y confianza.",
    },
    {
      icon: "users",
      title: "Sueldos y payroll",
      description:
        "Liquidación de haberes, cargas sociales y administración de personal con precisión y confidencialidad.",
    },
  ],
};

export const technology: ServiceArea = {
  id: "technology",
  label: "Technology",
  title: "Automatización de procesos financieros",
  summary:
    "Tecnología aplicada a la contabilidad: menos trabajo manual, más precisión y trazabilidad en cada proceso.",
  services: [
    {
      icon: "cog",
      title: "Automatización de procesos contables",
      description:
        "Digitalizamos tareas repetitivas —carga, validación y cierres— para reducir errores y liberar tiempo del equipo.",
    },
    {
      icon: "plug",
      title: "Integración con ERP o SAP",
      description:
        "Conectamos tus sistemas y fuentes de datos para que la información fluya sin recargas ni planillas intermedias.",
    },
    {
      icon: "refresh",
      title: "Conciliaciones automáticas",
      description:
        "Conciliación bancaria y de cuentas de forma automática, con detección de diferencias a nivel de dato.",
    },
    {
      icon: "database",
      title: "Data pipelines financieros",
      description:
        "Flujos de datos confiables y herramientas internas a medida para reportes auditables y siempre actualizados.",
    },
  ],
};

export const areas: ServiceArea[] = [consulting, technology];

/** Beneficios del sistema KDD Automation (usados en la Home y /technology). */
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
    title: "Elimina conciliaciones manuales",
    description:
      "Reemplaza el cruce manual de planillas por un proceso automático, repetible y sin errores humanos.",
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
