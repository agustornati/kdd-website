import Link from "next/link";
import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { ServiceCard } from "@/components/ServiceCard";
import { Icon } from "@/components/icons";
import { areas } from "@/lib/content";

const differentials = [
  "Reducimos el trabajo manual y los errores de carga.",
  "Aumentamos la precisión con validaciones a nivel de dato.",
  "Mejoramos la trazabilidad de cada proceso financiero.",
  "Liberamos tiempo del equipo para el análisis y la decisión.",
];

export default function HomePage() {
  return (
    <>
      <Hero
        eyebrow="KDD Consulting & Technology"
        title="Contabilidad, impuestos y automatización de procesos financieros"
        subtitle="Somos un estudio contable que combina la confianza del asesoramiento tradicional con tecnología que automatiza y valida tus procesos financieros."
        actions={[
          { href: "/services", label: "Ver servicios", variant: "accent" },
          { href: "/contact", label: "Contactar", variant: "secondary" },
        ]}
      />

      {/* Dos áreas del negocio */}
      <Section
        eyebrow="Qué hacemos"
        title="Dos áreas, una misma firma"
        intro="Unimos el rigor de un estudio contable con la eficiencia de la tecnología aplicada a las finanzas."
      >
        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {areas.map((area) => (
            <div
              key={area.id}
              className="rounded-2xl border border-slate-200 bg-slate-50/60 p-6 sm:p-8"
            >
              <p className="eyebrow">{area.label}</p>
              <h3 className="mt-2 text-2xl font-semibold text-navy">
                {area.title}
              </h3>
              <p className="mt-3 text-slate-600">{area.summary}</p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {area.services.map((service) => (
                  <ServiceCard key={service.title} {...service} />
                ))}
              </div>
            </div>
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
              La contabilidad tradicional, potenciada con tecnología
            </h2>
            <p className="mt-4 text-lg text-slate-300">
              No reemplazamos al contador: lo potenciamos. Incorporamos
              automatización para que los procesos sean más rápidos, precisos y
              auditables, sin perder el trato cercano de siempre.
            </p>
            <Link href="/technology" className="btn-accent mt-8">
              Conocé KDD Automation
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
            ¿Listo para ordenar y automatizar tus finanzas?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            Conversemos sobre tu empresa y encontremos juntos la combinación
            justa de asesoramiento y tecnología.
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
