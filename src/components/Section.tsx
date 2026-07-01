/** Contenedor de sección con encabezado opcional (eyebrow + título + intro). */
import type { ReactNode } from "react";

interface SectionProps {
  id?: string;
  eyebrow?: string;
  title?: string;
  intro?: string;
  className?: string;
  children?: ReactNode;
  centered?: boolean;
}

export function Section({
  id,
  eyebrow,
  title,
  intro,
  className = "",
  children,
  centered = false,
}: SectionProps) {
  return (
    <section id={id} className={`py-16 sm:py-24 ${className}`}>
      <div className="container-site">
        {(eyebrow || title || intro) && (
          <div className={`max-w-3xl ${centered ? "mx-auto text-center" : ""}`}>
            {eyebrow && <p className="eyebrow">{eyebrow}</p>}
            {title && (
              <h2 className="mt-3 text-3xl sm:text-4xl font-semibold text-navy">
                {title}
              </h2>
            )}
            {intro && <p className="mt-4 text-lg text-slate-600">{intro}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
