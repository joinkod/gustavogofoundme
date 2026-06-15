# JOINKOD — Contexto base para Claude Code

## Quiénes somos

JOINKOD es la unión de **Join Media Co.** (branding y desarrollo web) y **KODIAK** (contenido audiovisual y filmmaking). Somos una agencia creativa especializada en construir identidades de marca y presencia digital para emprendedores, empresarios y marcas.

Nuestro trabajo no es replicar tendencias genéricas. Es encontrar el lenguaje visual único de cada marca y llevarlo a cada pieza que producimos.

---

## Idioma

Responde y comunícate siempre en **español**. Comentarios en el código también en español.

---

## Stack

- HTML, CSS, JavaScript como base
- Servicios externos según el proyecto: Supabase, EmailJS, u otros que el proyecto requiera
- Despliegue preferiblemente en **Vercel**, pero si existe una opción mejor según el tipo de proyecto, presupuesto u objetivos, sugiérela con una explicación breve y espera confirmación antes de proceder

---

## Skills activos en todos los proyectos

Los siguientes skills deben estar instalados y activos en cada proyecto:

- `emilkowalski/skill` — criterio de animaciones y UI
- `Leonxlnx/taste-skill` — estilo visual, anti-slop, diseño con criterio
- `pbakaus/impeccable` — vocabulario de diseño, 23 comandos especializados

Úsalos activamente durante el desarrollo. No generes UI sin consultarlos.

---

## Preguntas previas al inicio — obligatorias

Antes de cualquier otra cosa, haz estas dos preguntas. Son independientes del proyecto y definen cómo se va a identificar el trabajo.

### 1. Atribución de marca

Pregunta: **¿Este proyecto llevará marca de agencia? Elige una opción:**

- **JOINKOD** — el proyecto se identifica con la marca unificada
- **Join Media Co.** — el proyecto se identifica con la marca original de la agencia
- **Davo** — el proyecto va a nombre personal
- **Sin atribución** — el proyecto no lleva referencias de quién lo creó

Respeta esta decisión durante todo el proyecto: en el footer, metadatos, créditos, comentarios de código y cualquier referencia visible o invisible al creador.

### 2. Archivo de contexto del proyecto

Crea automáticamente un archivo `.md` con el nombre del proyecto en la raíz del repositorio. Por ejemplo, si el proyecto es una tienda para "Restaurante Elena", el archivo se llama `restaurante-elena.md`. Este archivo documenta todo el contexto del proyecto: briefing, decisiones de diseño, estructura, servicios usados y cualquier decisión relevante tomada durante el desarrollo. Se actualiza a medida que el proyecto avanza.

---

## Tipo de proyecto — obligatorio antes del Mini-Briefing

Antes de hablar de marca o identidad visual, pregunta qué tipo de proyecto se va a desarrollar. Esto define la arquitectura, el stack y las decisiones técnicas.

**¿Qué tipo de proyecto vamos a construir? Elige el que mejor lo describa:**

- **Landing page** — página única con objetivo de conversión
- **Sitio corporativo** — presentación institucional de una empresa o marca
- **Sitio de servicios** — describe y ofrece servicios profesionales
- **Portafolio** — muestra trabajos, proyectos o casos de éxito
- **Blog** — publicación de contenido editorial o personal
- **E-commerce** — tienda en línea con catálogo y proceso de compra
- **Tienda de producto único** — una sola oferta con foco en conversión
- **Aplicación web** — herramienta interactiva con lógica de usuario
- **Dashboard / Panel de administración** — visualización y gestión de datos
- **Sistema de reservas o turnos** — agendamiento en línea
- **Directorio o listado** — catálogo de negocios, personas o recursos
- **Membresías / Contenido exclusivo** — acceso restringido por suscripción o registro
- **Sitio de eventos** — información, registro o venta de entradas para eventos
- **Página de producto** — presentación detallada de un producto específico
- **One-pager de campaña** — página temporal para una campaña o lanzamiento
- **Sitio educativo / Curso** — contenido formativo estructurado por módulos
- **Galería o exhibición** — muestra visual de arte, fotografía u obras
- **Comunidad o foro** — interacción entre usuarios registrados
- **Herramienta o calculadora** — utilidad específica para el usuario
- **Sitio multiidioma** — contenido en más de un idioma
- **Proyecto experimental / Conceptual** — exploración creativa sin categoría fija
- **Otro** — descripción libre

Con la respuesta, confirma el tipo de proyecto, describe brevemente qué implica técnicamente y continúa con el Mini-Briefing de identidad.

---

## Mini-Briefing de identidad — obligatorio al inicio de cada proyecto

Una vez definido el tipo de proyecto, haz las siguientes preguntas sobre la marca. Espera las respuestas antes de continuar. Este paso no es opcional.

### Preguntas del Mini-Briefing:

1. **¿Cuál es el nombre de la marca y a qué se dedica?**
2. **¿A quién le habla esta marca? Describe su cliente ideal.**
3. **¿Cómo describirías la personalidad de esta marca en 3 palabras?**
4. **¿Qué sensación debe generar el sitio cuando alguien lo visita?** (ej: confianza, exclusividad, energía, calma, atrevimiento)
5. **¿Hay colores definidos? Si no, ¿qué colores conectan con la marca?**
6. **¿Hay tipografías definidas? Si no, ¿qué estilo tipográfico imaginas?** (ej: moderno, clásico, experimental, manuscrito)
7. **¿Referencias visuales que te gusten?** Pueden ser marcas, sitios web, imágenes, estilos.
8. **¿Qué quieres evitar? ¿Qué NO debe parecer este sitio?**
9. **¿Cuál es el objetivo principal del sitio?** (ej: vender, informar, generar leads, mostrar portafolio)
10. **¿Hay contenido listo o hay que generarlo?**
11. **¿Este proyecto es para un cliente o para uso personal/interno de JOINKOD?**
12. **¿Cuál es el presupuesto disponible para servicios, herramientas o hosting?** (ej: cero — todo debe ser gratuito, bajo, medio, sin restricción). Esto define qué servicios y plataformas se pueden usar durante el desarrollo y el despliegue.
13. **¿Cuál es el plazo o urgencia del proyecto?**
14. **¿Cómo se va a medir el éxito de este proyecto?** (ej: ventas, visitas, leads generados, satisfacción del cliente, aprendizaje personal)

Con las respuestas, propón una dirección visual antes de arrancar el desarrollo. Describe el estilo, el mood, las decisiones tipográficas y de color que vas a tomar y por qué. Espera aprobación antes de continuar.

---

## Comportamiento automático — sin preguntar

Claude Code debe ejecutar las siguientes acciones de forma automática, sin pedir confirmación:

- `git add .` + `git commit` + `git push` después de cada cambio relevante
- Mensajes de commit en español, descriptivos y concisos
- Borrar archivos cuando sea necesario
- Reorganizar estructura de carpetas cuando mejore el proyecto
- Instalar dependencias necesarias sin preguntar

---

## Estilo visual — criterio general JOINKOD

- **Nunca** generes interfaces genéricas, prediseñadas o que parezcan una plantilla
- Cada proyecto debe reflejar la identidad única de la marca, no los defaults del modelo
- Explora tendencias y estilos visuales atípicos cuando el briefing lo permita
- Usa los skills instalados para validar cada decisión de diseño
- Evita: gradientes genéricos, glassmorphism sin propósito, paletas de colores de IA, layouts de Bootstrap sin criterio
- Prioriza: jerarquía visual clara, tipografía con intención, espaciado con criterio, animaciones con propósito

---

## Flujo de trabajo estándar

1. **Preguntas previas** → atribución de marca + crear archivo de contexto del proyecto
2. **Tipo de proyecto** → definir qué se va a construir y sus implicaciones técnicas
3. **Mini-Briefing** → preguntas de identidad de marca
4. **Propuesta de dirección visual** → esperar aprobación
5. **Estructura del proyecto** → crear carpetas y archivos base
6. **Desarrollo** → usando los skills activos
7. **Commit y push automático** → después de cada avance relevante
8. **Despliegue** → Vercel por defecto, o la plataforma más adecuada según presupuesto y objetivos del proyecto

---

## Lo que NO debes hacer

- Iniciar desarrollo sin completar las preguntas previas, el tipo de proyecto y el Mini-Briefing
- Ignorar la decisión de atribución de marca — respétala en todo el proyecto
- Hablar de marca o identidad antes de definir el tipo de proyecto
- Generar UI sin usar los skills instalados
- Usar estilos genéricos que no reflejen la identidad de la marca
- Responder en inglés
- Pedir confirmación para commits, push, borrado de archivos o restructuraciones
