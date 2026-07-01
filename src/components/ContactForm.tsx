"use client";

/**
 * Formulario de contacto simple (sin backend). Valida en el cliente y arma un
 * correo con los datos (mailto). Pensado para reemplazar por una API en el
 * futuro sin cambiar la interfaz.
 */
import { useState } from "react";
import { site } from "@/lib/site";

interface FormState {
  name: string;
  email: string;
  message: string;
}

const EMPTY: FormState = { name: "", email: "", message: "" };
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function ContactForm() {
  const [form, setForm] = useState<FormState>(EMPTY);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [sent, setSent] = useState(false);

  const update =
    (field: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((f) => ({ ...f, [field]: e.target.value }));
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    };

  const validate = (): boolean => {
    const next: Partial<FormState> = {};
    if (!form.name.trim()) next.name = "Ingresá tu nombre.";
    if (!EMAIL_RE.test(form.email)) next.email = "Ingresá un email válido.";
    if (form.message.trim().length < 10)
      next.message = "Contanos un poco más (mínimo 10 caracteres).";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    const subject = `Consulta web de ${form.name}`;
    const body = `Nombre: ${form.name}\nEmail: ${form.email}\n\n${form.message}`;
    window.location.href = `mailto:${site.contact.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  const fieldClass = (field: keyof FormState) =>
    `mt-1 w-full rounded-lg border px-4 py-3 text-sm text-navy outline-none transition-colors focus:border-navy focus:ring-2 focus:ring-accent/30 ${
      errors[field] ? "border-red-400" : "border-slate-300"
    }`;

  if (sent) {
    return (
      <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-card">
        <h3 className="text-xl font-semibold text-navy">¡Gracias por tu mensaje!</h3>
        <p className="mt-2 text-slate-600">
          Se abrió tu cliente de correo para enviar la consulta. Si no ocurrió,
          escribinos directamente a{" "}
          <a className="font-medium text-accent" href={`mailto:${site.contact.email}`}>
            {site.contact.email}
          </a>
          .
        </p>
        <button
          type="button"
          onClick={() => {
            setForm(EMPTY);
            setSent(false);
          }}
          className="btn-secondary mt-6"
        >
          Enviar otra consulta
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="rounded-2xl border border-slate-200 bg-white p-6 shadow-card sm:p-8"
    >
      <div className="grid gap-5">
        <div>
          <label htmlFor="name" className="text-sm font-medium text-navy">
            Nombre
          </label>
          <input
            id="name"
            type="text"
            value={form.name}
            onChange={update("name")}
            className={fieldClass("name")}
            placeholder="Tu nombre y apellido"
          />
          {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="email" className="text-sm font-medium text-navy">
            Email
          </label>
          <input
            id="email"
            type="email"
            value={form.email}
            onChange={update("email")}
            className={fieldClass("email")}
            placeholder="tu@email.com"
          />
          {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
        </div>

        <div>
          <label htmlFor="message" className="text-sm font-medium text-navy">
            Mensaje
          </label>
          <textarea
            id="message"
            rows={5}
            value={form.message}
            onChange={update("message")}
            className={fieldClass("message")}
            placeholder="¿En qué podemos ayudarte?"
          />
          {errors.message && (
            <p className="mt-1 text-xs text-red-500">{errors.message}</p>
          )}
        </div>

        <button type="submit" className="btn-primary w-full sm:w-auto">
          Enviar consulta
        </button>
      </div>
    </form>
  );
}
