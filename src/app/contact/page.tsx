import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { ContactForm } from "@/components/ContactForm";
import { Icon } from "@/components/icons";
import { site, whatsappUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Contactate con KDD Consulting & Technology por formulario, email o WhatsApp.",
};

export default function ContactPage() {
  return (
    <Section
      eyebrow="Contacto"
      title="Hablemos de tu empresa"
      intro="Completá el formulario o escribinos por el canal que prefieras. Te respondemos a la brevedad."
    >
      <div className="mt-12 grid gap-10 lg:grid-cols-5">
        <div className="lg:col-span-3">
          <ContactForm />
        </div>

        <div className="lg:col-span-2">
          <div className="space-y-4">
            <a
              href={whatsappUrl("Hola KDD, quisiera hacer una consulta.")}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-card transition-colors hover:border-navy/30"
            >
              <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-navy/5 text-navy">
                <Icon name="users" className="h-6 w-6" />
              </span>
              <span>
                <span className="block text-lg font-semibold text-navy">
                  WhatsApp
                </span>
                <span className="mt-1 block text-sm text-slate-600">
                  {site.contact.whatsappDisplay}
                </span>
              </span>
            </a>

            <a
              href={`mailto:${site.contact.email}`}
              className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-card transition-colors hover:border-navy/30"
            >
              <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-navy/5 text-navy">
                <Icon name="document" className="h-6 w-6" />
              </span>
              <span>
                <span className="block text-lg font-semibold text-navy">Email</span>
                <span className="mt-1 block text-sm text-slate-600">
                  {site.contact.email}
                </span>
              </span>
            </a>

            <div className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-card">
              <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-navy/5 text-navy">
                <Icon name="shield" className="h-6 w-6" />
              </span>
              <span>
                <span className="block text-lg font-semibold text-navy">
                  Ubicación
                </span>
                <span className="mt-1 block text-sm text-slate-600">
                  {site.contact.location}
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
