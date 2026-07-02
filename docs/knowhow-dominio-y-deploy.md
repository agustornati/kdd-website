# Know-How: Dominio, DNS y Deploy — NAT Consulting

## Resumen del stack actual

| Componente | Proveedor | Detalle |
|---|---|---|
| Dominio | NIC.ar | `nat-consulting.com.ar` |
| DNS | Cloudflare | Nameservers apuntan a Cloudflare |
| Hosting | Railway | Repo `agustornati/kdd-website` (branch `main`) |
| Framework | Next.js 15 | React 19, TailwindCSS, TypeScript |
| SSL | Cloudflare | Modo Full |

---

## 1. Dominio — NIC.ar

**URL:** https://nic.ar (requiere login con CUIT via TAD — Trámites a Distancia)

### Qué es una Delegación
En NIC.ar, "Delegación" = nameservers (servidores DNS). Le dicen a Internet quién maneja el DNS del dominio.

### Nameservers actuales (Cloudflare)
```
carol.ns.cloudflare.com
damiete.ns.cloudflare.com
```
> ⚠️ Si alguna vez borrás y volvés a crear el dominio en Cloudflare, los nameservers pueden cambiar. Siempre verificar en Cloudflare → Overview antes de tocar NIC.ar.

### Cómo cambiar nameservers en NIC.ar
1. TAD → Mis trámites → Dominio → Delegaciones
2. Eliminar los existentes
3. Agregar los nuevos (solo Host, dejar IPv4/IPv6 vacío para nameservers externos)
4. EJECUTAR CAMBIOS
5. Propagación: entre 1 y 24 horas

### Qué NO acepta NIC.ar
- Nameservers de Vercel directamente (`ns1.vercel-dns.com`) — los rechaza como "host inválido"
- Por eso se usa Cloudflare como intermediario

---

## 2. DNS — Cloudflare

**URL:** https://cloudflare.com

Cloudflare actúa como DNS manager. Recibe las consultas del dominio y las redirige al hosting.

### Registros DNS configurados

| Tipo | Name | Value | Proxy |
|---|---|---|---|
| `CNAME` | `@` | `ccrvicnn.up.railway.app` | 🟠 Naranja (activado) |
| `TXT` | `_railway-verify` | `railway-verify=479bc24c...` | — |

### Proxy (nube naranja vs gris)
- **Naranja (activado):** el tráfico pasa por Cloudflare → da SSL, caché, protección
- **Gris (desactivado):** conexión directa al servidor → sin beneficios de Cloudflare

> Para producción siempre usar **naranja** en los registros A y CNAME principales.

### SSL/TLS en Cloudflare
- **Cloudflare → SSL/TLS → Overview**
- Modo recomendado: **Full**
  - `Flexible`: Cloudflare ↔ visitante tiene SSL, pero Cloudflare ↔ servidor NO. Puede dar errores.
  - `Full`: Cloudflare ↔ servidor también usa SSL. Recomendado.
  - `Full (Strict)`: igual pero valida el certificado del servidor. Más seguro.

---

## 3. Hosting — Railway

**URL:** https://railway.app

### Cómo está configurado
- Conectado al repo GitHub `agustornati/kdd-website`
- Cada push a `main` trigerea un deploy automático
- Railway detecta Next.js y corre `npm run build` + `npm start`

### Dominio personalizado en Railway
1. Proyecto → Settings → Networking → Custom Domain
2. Agregar el dominio
3. Railway da dos registros DNS a configurar:
   - `CNAME` apuntando a la URL de Railway
   - `TXT` para verificación de propiedad
4. Agregar ambos en Cloudflare → DNS → Records
5. Railway verifica automáticamente en minutos/horas

### URL temporal de Railway
```
ccrvicnn.up.railway.app
```
Siempre funciona, independientemente del dominio personalizado.

---

## 4. Código — Repositorio

**GitHub:** https://github.com/agustornati/kdd-website

### Flujo de deploy
```
git push origin main → Railway detecta el push → build automático → deploy
```

### Archivos clave
| Archivo | Para qué |
|---|---|
| `src/lib/site.ts` | Nombre, email, WhatsApp, tagline, navegación |
| `src/lib/content.ts` | Servicios del estudio |
| `next.config.mjs` | Configuración de Next.js |
| `.node-version` | Versión de Node.js para el build |

### Cambiar datos de contacto
Todo el contacto está centralizado en `src/lib/site.ts`:
```typescript
contact: {
  email: "agustin.tornati@gmail.com",
  whatsapp: "5491165026093",
  whatsappDisplay: "+54 9 11 6502-6093",
}
```

---

## 5. Errores comunes y soluciones

### "Host inválido" en NIC.ar
NIC.ar no acepta todos los nameservers directamente. Solución: usar Cloudflare como intermediario.

### El sitio pide login de Vercel al compartir el link
Es un link de **preview** (deploy de prueba), no de producción. Usar el link de producción o el dominio propio.

### "Not secure" / sin candado
1. Verificar que el proxy de Cloudflare esté en **naranja**
2. Verificar que SSL/TLS esté en modo **Full**
3. Limpiar caché del navegador o probar en incógnito
4. Esperar que Railway termine de emitir el certificado

### Build falla en Cloudflare Pages / Vercel
- Agregar variable de entorno `NODE_VERSION = 20`
- O agregar archivo `.node-version` con el contenido `20`

### "Vulnerable version of Next.js detected"
Actualizar Next.js: `npm install next@15.3.9 --save-exact`

### Conflictos en Cloudflare
- No se puede tener un `CNAME` y otro registro para el mismo `Name`
- No se puede tener dos registros del mismo tipo con el mismo `Name` (excepto TXT)

---

## 6. Propagación DNS — tiempos estimados

| Cambio | Tiempo estimado |
|---|---|
| Nameservers en NIC.ar | 1 a 24 horas |
| Registros DNS en Cloudflare | 1 a 30 minutos |
| SSL de Cloudflare | Instantáneo (proxy activado) |
| Verificación de dominio en Railway | 5 a 60 minutos |

---

## 7. Proveedores evaluados

| Proveedor | Resultado | Motivo de descarte |
|---|---|---|
| **Vercel** | Funciona ✅ | Requería configurar DNS manualmente |
| **Cloudflare Pages** | Descartado ❌ | Interfaz compleja, Worker interfería |
| **Netlify** | No probado | Se optó por Railway |
| **Railway** | Seleccionado ✅ | Simple, GitHub integration, Next.js nativo |

---

## 8. Credenciales y accesos

| Servicio | Usuario |
|---|---|
| NIC.ar | CUIT — login via TAD |
| Cloudflare | agustin.tornati@gmail.com |
| Railway | GitHub (agustornati) |
| GitHub | agustornati |
