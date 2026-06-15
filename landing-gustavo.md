# Landing Page — Gustavo Hernández

## Info general
- **Tipo de proyecto:** Landing page humanitaria de recaudación de fondos
- **Atribución:** Sin atribución
- **Fecha de inicio:** 2026-06-15
- **Urgencia:** Muy urgente

## Briefing
- **Protagonista:** Gustavo Hernández, 52 años
- **Situación médica:** Varios derrames cerebrales por insuficiencia vertebrobasilar. Intento de stent fallido. Trasladado al Jackson Memorial Hospital, Miami, en espera de cirugía de bypass de arteria vertebral. Cirugía pospuesta múltiples veces por complicaciones en exámenes previos.
- **Audiencia:** Cualquier persona en el mundo que quiera donar
- **GoFundMe:** https://www.gofundme.com/f/ayudemos-a-gustavo-a-luchar-por-su-vida
- **Meta:** $18,000
- **Objetivo:** Llevar tráfico al GoFundMe y generar donaciones
- **Idiomas:** Bilingüe (inglés / español) con toggle
- **Presupuesto:** Cero — todo gratuito
- **Cliente:** Familiar del usuario (uso personal, sin cliente externo)

## Dirección visual
- **Sensación:** Emotivo, real, honesto. Como una carta, no una campaña.
- **Paleta:** Fondo #FAFAF8, texto #1C1917, muted #6B6560, acento #C04232 (terracota accesible — contraste 5.17:1 sobre blanco)
- **Tipografía:** Lora (titulares — serif editorial justificado por tratarse de narrativa personal) + DM Sans (cuerpo — humano y legible)
- **Dials:** DESIGN_VARIANCE: 5 | MOTION_INTENSITY: 4 | VISUAL_DENSITY: 2
- **Modo oscuro:** Sí, via prefers-color-scheme

## Estructura de la página
1. Nav fija — toggle de idioma + botón Donar
2. Hero — título editorial + subtítulo + CTA
3. Sobre Gustavo — foto (placeholder) + párrafo personal
4. Qué pasó — situación médica explicada con claridad
5. La meta — $18,000 en grande
6. CTA final — frase + botón donar + botón compartir

## Archivos
- `index.html`
- `styles.css`
- `script.js`

## Pendientes
- [ ] Reemplazar placeholder de foto en `index.html` (buscar comentario "REEMPLAZAR")
- [ ] Agregar URL real del sitio en `<meta property="og:url">`
- [ ] Agregar foto de Gustavo para `<meta property="og:image">` (mejora compartibilidad en redes)
- [ ] Desplegar en Vercel

## Decisiones relevantes
- Se usó Lora como serif editorial (no Fraunces ni Instrument_Serif, que están prohibidas por el skill)
- Color acento ajustado de #C85840 a #C04232 para cumplir contraste WCAG AA (4.5:1)
- Idioma inicial detectado por localStorage > idioma del navegador > inglés por defecto
- El inline script en `<head>` previene flash de idioma antes del primer render
- Share button usa Web Share API con fallback a copiar al portapapeles
