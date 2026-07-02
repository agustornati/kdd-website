import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/Section";
import { Icon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Nosotros",
  description:
    "NAT Consulting es un estudio contable moderno y profesional especializado en contabilidad general, liquidación de impuestos, sueldos y asesoramiento para empresas y profesionales.",
};

const values = [
  {
    icon: "users",
    title: "Trato familiar y cercano",
    description:
      "Somos un estudio familiar: cada cliente tiene un interlocutor real que conoce su empresa.",
  },
  {
    icon: "shield",
    title: "Confianza y cumplimiento",
    description:
      "Rigor profesional, confidencialidad y cumplimiento como base de todo lo que hacemos.",
  },
  {
    icon: "sparkles",
    title: "Actualización permanente",
    description:
      "Nos capacitamos continuamente para brindar el mejor asesoramiento en materia contable, impositiva y laboral.",
  },
] as const;

export default function AboutPage() {
  return (
    <>
      <Section
        eyebrow="Nosotros"
        title="Un estudio contable moderno y profesional"
        intro="Acompañamos a empresas y profesionales en su gestión contable, impositiva y laboral con dedicación, precisión y la cercanía de siempre."
        centered
      />

      <Section className="bg-slate-50 py-12 sm:py-16">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="space-y-5 text-lg leading-relaxed text-slate-600">
            <p>
              Durante años acompañamos a empresas y familias en su contabilidad,
              impuestos y sueldos. Ese recorrido nos dio algo que no se improvisa:
              confianza y conocimiento profundo de cada cliente.
            </p>
            <p>
              Somos un estudio contable moderno y cercano. Creemos en el trabajo
              bien hecho, en la comunicación clara y en estar presentes cuando
              nuestros clientes más nos necesitan.
            </p>
            <p>
              Nuestra visión es clara:{" "}
              <strong className="text-navy">
                brindar un servicio contable de excelencia
              </strong>{" "}
              que combine el rigor profesional con el trato personalizado que
              cada empresa merece.
            </p>
          </div>

          <div className="grid gap-4">
            {values.map((value) => (
              <div
                key={value.title}
                className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-card"
              >
                <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-navy/5 text-navy">
                  <Icon name={value.icon} className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-navy">{value.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-slate-600">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section centered>
        <div className="rounded-3xl border border-slate-200 bg-slate-50 px-6 py-14 text-center sm:px-12">
          <h2 className="text-3xl font-semibold text-navy sm:text-4xl">
            Conozcámonos
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            Contanos sobre tu empresa y cómo trabajás hoy. Estamos para ayudarte
            a dar el próximo paso.
          </p>
          <Link href="/contact" className="btn-primary mt-8">
            Contactar
          </Link>
        </div>
      </Section>
    </>
  );
}
