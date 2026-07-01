/** Tarjeta de servicio reutilizable: icono, título y descripción. */
import { Icon, type IconName } from "@/components/icons";

interface ServiceCardProps {
  icon: IconName;
  title: string;
  description: string;
}

export function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <div className="group h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-card transition-colors hover:border-navy/30">
      <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-navy/5 text-navy transition-colors group-hover:bg-navy group-hover:text-white">
        <Icon name={icon} className="h-6 w-6" />
      </span>
      <h3 className="mt-5 text-lg font-semibold text-navy">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-600">{description}</p>
    </div>
  );
}
