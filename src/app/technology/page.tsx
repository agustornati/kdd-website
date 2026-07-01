import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { ServiceCard } from "@/components/ServiceCard";
import { Icon } from "@/components/icons";
import { automationBenefits } from "@/lib/content";

export const metadata: Metadata = {
  title: "Technology — KDD Automation",
  description:
    "KDD Automation: sistema interno de automatización y validación financiera que compara sistemas legacy y nuevos desarrollos, detecta diferencias a nivel de datos y genera reportes auditables con el objetivo de 0 diferencias.",
};

const steps = [
  {
    icon: "database",
    title: "1. Toma los datos de cada sistema",
    description:
      "Extrae la información desde los sistemas legacy y desde los nuevos desarrollos, sin cargas manuales.",
  },
  {
    icon: "refresh",
    title: "2. Compara registro por registro",
    description:
      "Cruza ambos orígenes a nivel de dato y no solo por totales, para encontrar cualquier discrepancia.",
  },
  {
    icon: "check",
    title: "3. Valida y reporta",
    description:
      "Marca las diferencias, deja trazabilidad del proceso y genera un reporte auditable. El objetivo: cero.",
  },
] as const;

export default function TechnologyPage() {
  return (
    <>
      <Hero
        eyebrow="KDD Automation"
        title="Automatizamos procesos financieros para mejorar la eficiencia"
        subtitle="KDD Automation es nuestro sistema interno de automatización y validación de procesos financieros: reduce el trabajo manual, mejora la eficiencia y deja todo trazable y auditable."
        actions={[{ href: "/contact", label: "Quiero saber más", variant: "accent" }]}
      />

      {/* Qué hace */}
      <Section
        eyebrow="El sistema"
        title="Qué resuelve KDD Automation"
        intro="Diseñado para dar certeza sobre los números: valida que dos sistemas digan exactamente lo mismo."
      >
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {automationBenefits.map((benefit) => (
            <ServiceCard key={benefit.title} {...benefit} />
          ))}
        </div>
      </Section>

      {/* Cómo funciona */}
      <Section className="bg-slate-50" eyebrow="Cómo funciona" title="Tres pasos, un resultado">
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-card"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-navy text-white">
                <Icon name={step.icon} className="h-6 w-6" />
              </span>
              <h3 className="mt-5 text-lg font-semibold text-navy">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Banner 0 diferencias */}
      <Section>
        <div className="overflow-hidden rounded-3xl bg-navy-950 px-6 py-16 text-center text-white sm:px-12">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            Nuestro estándar de calidad
          </p>
          <p className="mt-4 text-6xl font-bold tracking-tight text-white sm:text-7xl">
            0
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-white sm:text-3xl">
            diferencias
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-300">
            Una validación bien hecha cierra en cero. Ese es el resultado que
            buscamos en cada proceso: sin partidas sin explicar, sin sorpresas y
            con evidencia auditable de respaldo.
          </p>
          <Link href="/contact" className="btn-accent mt-9">
            Conversemos sobre tu caso
          </Link>
        </div>
      </Section>
    </>
  );
}
