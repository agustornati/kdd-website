/** Pie de página institucional con navegación, contacto y copyright. */
import Link from "next/link";
import { navLinks, site, whatsappUrl } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-8 border-t border-slate-200 bg-navy-950 text-slate-300">
      <div className="container-site grid gap-10 py-14 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center rounded-lg bg-white text-sm font-bold text-navy">
              KDD
            </span>
            <span className="font-semibold text-white">
              Consulting &amp; Technology
            </span>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-400">
            {site.tagline}. Un estudio contable que evoluciona con tecnología y
            automatización.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
            Navegación
          </h4>
          <ul className="mt-4 space-y-2 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-slate-400 transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
            Contacto
          </h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a
                href={`mailto:${site.contact.email}`}
                className="text-slate-400 transition-colors hover:text-white"
              >
                {site.contact.email}
              </a>
            </li>
            <li>
              <a
                href={whatsappUrl("Hola KDD, quisiera hacer una consulta.")}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 transition-colors hover:text-white"
              >
                WhatsApp {site.contact.whatsappDisplay}
              </a>
            </li>
            <li className="text-slate-400">{site.contact.location}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-site flex flex-col items-center justify-between gap-2 py-6 text-xs text-slate-500 sm:flex-row">
          <p>
            © {year} {site.name}. Todos los derechos reservados.
          </p>
          <p>Contabilidad · Impuestos · Automatización</p>
        </div>
      </div>
    </footer>
  );
}
