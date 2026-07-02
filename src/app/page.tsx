import Link from "next/link";
import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { ServiceCard } from "@/components/ServiceCard";
import { Icon } from "@/components/icons";
import { consulting } from "@/lib/content";

const differentials = [
  "Atención personalizada y conocimiento profundo de cada cliente.",
  "Cumplimiento impositivo y laboral con rigor y precisión.",
  "Respuesta ágil ante consultas y vencimientos.",
  "Confidencialidad y profesionalismo en cada gestión.",
];

export default function HomePage() {
  return (
    <>
      <Hero
        eyebrow="NAT Consulting"
        title="Contabilidad, impuestos y asesoramiento para tu empresa"
        subtitle="Somos un estudio contable moderno y profesional. Te acompañamos en la gestión contable, impositiva y laboral con el rigor técnico y la cercanía que tu empresa necesita."
        actions={[
          { href: "/services", label: "Ver servicios", variant: "accent" },
          { href: "/contact", label: "Contactar", variant: "secondary" },
        ]}
      />

      {/* Servicios */}
      <Section
        eyebrow="Qué hacemos"
        title="Nuestros servicios"
        intro="Asesoramiento profesional para el orden, el cumplimiento y el crecimiento de tu empresa."
      >
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {consulting.services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </Section>

      {/* Diferencial */}
      <Section className="bg-navy-950 text-white">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">
              Nuestro diferencial
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
              El rigor profesional con el trato cercano de siempre
            </h2>
            <p className="mt-4 text-lg text-slate-300">
              Combinamos el conocimiento técnico de un estudio profesional con
              la cercanía y dedicación que cada cliente merece. Tu empresa no es
              un número: es una relación de largo plazo.
            </p>
            <Link href="/contact" className="btn-accent mt-8">
              Consultanos sin compromiso
            </Link>
          </div>
          <ul className="grid gap-4">
            {differentials.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-4"
              >
                <span className="mt-0.5 text-accent">
                  <Icon name="check" className="h-6 w-6" />
                </span>
                <span className="text-slate-200">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* CTA final */}
      <Section centered>
        <div className="rounded-3xl border border-slate-200 bg-slate-50 px-6 py-14 text-center sm:px-12">
          <h2 className="text-3xl font-semibold text-navy sm:text-4xl">
            ¿Necesitás un estudio contable de confianza?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            Conversemos sobre tu empresa y encontremos el asesoramiento
            contable que necesitás.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-primary">
              Agendar una consulta
            </Link>
            <Link href="/services" className="btn-secondary">
              Ver servicios
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
