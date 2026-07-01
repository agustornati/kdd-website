/** Hero reutilizable con eyebrow, título, subtítulo y CTAs opcionales. */
import Link from "next/link";
import type { ReactNode } from "react";

interface HeroAction {
  href: string;
  label: string;
  variant?: "primary" | "secondary" | "accent";
}

interface HeroProps {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
  actions?: HeroAction[];
  align?: "left" | "center";
}

const variantClass = {
  primary: "btn-primary",
  secondary: "btn-secondary",
  accent: "btn-accent",
} as const;

export function Hero({
  eyebrow,
  title,
  subtitle,
  actions = [],
  align = "left",
}: HeroProps) {
  const centered = align === "center";
  return (
    <section className="relative overflow-hidden bg-navy-950 text-white">
      {/* Fondo sutil con degradé y patrón de grilla. */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-navy-800/40 to-navy-950" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      <div className="container-site relative py-24 sm:py-32">
        <div className={`max-w-3xl ${centered ? "mx-auto text-center" : ""}`}>
          {eyebrow && (
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">
              {eyebrow}
            </p>
          )}
          <h1 className="mt-4 text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-6 text-lg leading-relaxed text-slate-300">
              {subtitle}
            </p>
          )}
          {actions.length > 0 && (
            <div
              className={`mt-9 flex flex-wrap gap-4 ${
                centered ? "justify-center" : ""
              }`}
            >
              {actions.map((action) => (
                <Link
                  key={action.href + action.label}
                  href={action.href}
                  className={variantClass[action.variant ?? "primary"]}
                >
                  {action.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
