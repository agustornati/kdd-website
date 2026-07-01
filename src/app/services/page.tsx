import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/Section";
import { ServiceCard } from "@/components/ServiceCard";
import { areas } from "@/lib/content";

export const metadata: Metadata = {
  title: "Servicios",
  description:
    "Servicios de KDD Consulting & Technology: contabilidad, impuestos, auditoría y sueldos, más automatización de procesos, integración ERP/SAP, conciliaciones automáticas y herramientas internas.",
};

export default function ServicesPage() {
  return (
    <>
      <Section
        eyebrow="Servicios"
        title="Todo lo que tu empresa necesita, en un solo lugar"
        intro="Combinamos asesoramiento contable e impositivo con soluciones tecnológicas para procesos financieros. Elegí el área que buscás."
        centered
      />

      {areas.map((area, index) => (
        <Section
          key={area.id}
          id={area.id}
          className={index % 2 === 1 ? "bg-slate-50" : ""}
        >
          <div className="max-w-3xl">
            <p className="eyebrow">{area.label}</p>
            <h2 className="mt-3 text-3xl font-semibold text-navy sm:text-4xl">
              {area.title}
            </h2>
            <p className="mt-4 text-lg text-slate-600">{area.summary}</p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {area.services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </Section>
      ))}

      <Section centered>
        <div className="rounded-3xl bg-navy-950 px-6 py-14 text-center text-white sm:px-12">
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">
            ¿No sabés por dónde empezar?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-300">
            Contanos tu situación y te proponemos el mejor camino, combinando
            contabilidad y automatización según tus necesidades.
          </p>
          <Link href="/contact" className="btn-accent mt-8">
            Hablemos
          </Link>
        </div>
      </Section>
    </>
  );
}
