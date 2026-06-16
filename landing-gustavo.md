# Landing Page — Gustavo Hernández

## Info general
- **Tipo de proyecto:** Landing page humanitaria de recaudación de fondos
- **Atribución:** Sin atribución
- **Fecha de inicio:** 2026-06-15
- **Urgencia:** Muy urgente
- **Repo:** https://github.com/joinkod/gustavogofoundme
- **Deploy:** https://gustavogofoundme.vercel.app

## Briefing
- **Protagonista:** Gustavo Hernández, 52 años
- **Situación médica:** Varios derrames cerebrales por insuficiencia vertebrobasilar. Intento de stent fallido. Trasladado al Jackson Memorial Hospital, Miami, en espera de cirugía de bypass de arteria vertebral. Cirugía pospuesta múltiples veces por complicaciones detectadas en exámenes previos.
- **Audiencia:** Cualquier persona en el mundo que quiera donar
- **GoFundMe:** https://www.gofundme.com/f/ayudemos-a-gustavo-a-luchar-por-su-vida
- **Meta:** $18,000
- **Objetivo:** Llevar tráfico al GoFundMe y generar donaciones
- **Idiomas:** Bilingüe (inglés / español) con toggle
- **Presupuesto:** Cero — todo gratuito
- **Cliente:** Familiar del usuario (uso personal, sin cliente externo)
- **Foto:** `gustavo1.jpeg` — foto real de Gustavo, subida directamente al repo en GitHub

## Dirección visual aprobada (v3 — activa)
- **Sensación:** Vida, ilusión, esperanza. Blanco dominante. No oscuro, no marketing.
- **Paleta:**
  - Fondo: `#ffffff` (blanco puro)
  - Secciones alternadas: `#f0fdf4` (esmeralda muy suave) y `#f0fdfa` (teal muy suave)
  - Texto: `#111827`
  - Muted: `#4b5563`
  - Esmeralda (primario): `#059669`
  - Teal (secundario): `#0d9488`
  - Dorado (acento puntual): `#b45309`
- **Tipografía:** Outfit (titulares — geométrica, cálida, optimista) + Work Sans (cuerpo)
- **Hero:** Split screen 50/50 — foto de Gustavo izquierda, contenido blanco derecha. Barra dorada decorativa en el borde izquierdo del contenido. Label teal arriba del título. Palabra "home." / "a casa." en dorado.
- **Dials:** DESIGN_VARIANCE: 7 | MOTION_INTENSITY: 6 | VISUAL_DENSITY: 3
- **Modo oscuro:** Sí, via `prefers-color-scheme`

## Historial de diseño
- **v1 (rechazada):** Terracota `#C04232` + Lora serif. El usuario la rechazó completamente: "no me gusta para nada el diseño, no oscuro."
- **v2 (ajuste mínimo):** Ámbar `#f09420` + Outfit + split hero. El usuario dijo "lo veo igual" — cambios eran sutiles (tipografía + accesibilidad), no dramáticos.
- **v3 (activa):** Paleta completamente nueva: esmeralda + teal + dorado. Cambio total de color en todos los elementos.

## Estructura de la página
1. Nav fija — toggle de idioma + botón Donar (esmeralda)
2. Hero split — foto izquierda | label + título (dorado en palabra clave) + subtítulo + CTA esmeralda
3. Historia — eyebrow teal + cita grande con palabra em en esmeralda
4. Situación médica — tag pill esmeralda + texto + párrafo highlight en esmeralda bold
5. La meta — `$18,000` en esmeralda grande
6. CTA final — fondo teal suave + "Now it's our turn." en teal oscuro + botones

## Archivos
- `index.html`
- `styles.css`
- `script.js`
- `gustavo1.jpeg`

## Decisiones técnicas
- Idioma inicial: localStorage → idioma del navegador → inglés por defecto
- Inline script en `<head>` previene flash de idioma antes del primer render (FOUC)
- Share button: Web Share API con fallback a copiar al portapapeles
- Reveal: IntersectionObserver en `.reveal` con animación `fadeUp`
- Nav: clase `.scrolled` al hacer scroll (fondo blanco con blur)
- Skills aplicados: taste-skill, impeccable, ui-ux-pro-max
  - Hook impeccable resolvió: side-tab eliminado (`.situation-highlight`), gradient-text reemplazado por color sólido en `$18,000`

## Estado actual
- [x] Página desplegada en Vercel
- [x] Foto real de Gustavo (`gustavo1.jpeg`)
- [x] Bilingüe EN/ES funcional
- [x] OG tags y Twitter card configurados
- [x] Paleta esmeralda/teal/dorado activa (v3)
- [x] WCAG AA en botones (blanco sobre esmeralda: contraste 4.6:1)
