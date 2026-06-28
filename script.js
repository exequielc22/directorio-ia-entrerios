/**
 * Guía de Herramientas de IA para Entre Ríos
 * Script para manejar el filtrado dinámico y la visualización de herramientas.
 */

// 1. Base de datos de herramientas (Fácil de actualizar)
const tools = [
    {
        name: "ChatGPT",
        category: "Trabajo Remoto",
        description: "Tu asistente para escribir correos, resumir textos y tener ideas.",
        icon: "💬",
        link: "https://chatgpt.com",
        bestFor: "Escribir, resumir y resolver dudas del día a día",
        easeOfUse: "Muy fácil",
        pricingDetail: "Gratis con límites; plan Plus de pago para más uso",
        rating: 9.8,
        speed: "rapida",
        difficulty: "facil",
        labels: ["🔥 Muy popular"],
        pros: ["Muy versátil para todo tipo de texto", "Excelente soporte en español", "Versión gratis muy potente"],
        cons: ["GPT-4 requiere plan Plus de pago", "Límite de mensajes en versión gratis"]
    },
    {
        name: "Manus AI",
        category: "Trabajo Remoto",
        description: "Agente de IA autónomo capaz de ejecutar tareas complejas de principio a fin.",
        icon: "🤖",
        link: "https://manus.im/invitation/3XQLEKLJN9ELECJ?utm_source=invitation&utm_medium=social&utm_campaign=copy_link",
        isPro: true,
        bestFor: "Delegar tareas complejas de principio a fin de forma autónoma",
        easeOfUse: "Requiere algo de experiencia previa con IA",
        pricingDetail: "Créditos gratis diarios; planes de pago para más uso",
        rating: 8.9,
        speed: "media",
        difficulty: "avanzada",
        labels: ["🚀 IA nueva", "💎 Premium"],
        pros: ["Ejecuta tareas de inicio a fin de forma autónoma", "Muy potente para tareas complejas"],
        cons: ["Requiere experiencia previa con IA", "Los créditos gratis se agotan rápido"]
    },
    {
        name: "Trello",
        category: "Trabajo Remoto",
        description: "Para organizar tus tareas del día a día de forma visual.",
        icon: "📋",
        link: "https://trello.com",
        bestFor: "Organizar proyectos y tareas en equipo con tableros",
        easeOfUse: "Muy fácil",
        pricingDetail: "Gratis con límites; planes de pago para equipos grandes",
        rating: 8.5,
        speed: "rapida",
        difficulty: "facil",
        labels: ["🔥 Muy popular"],
        pros: ["Interfaz visual muy intuitiva", "Excelente para trabajar en equipo", "Versión gratis muy completa"],
        cons: ["Sin funciones de IA avanzada", "Puede ser limitado para proyectos grandes"]
    },
    {
        name: "DeepL",
        category: "Trabajo Remoto",
        description: "El mejor traductor para que el idioma no sea una barrera en tu trabajo.",
        icon: "🌍",
        link: "https://www.deepl.com",
        bestFor: "Traducir textos y documentos con matices naturales",
        easeOfUse: "Muy fácil",
        pricingDetail: "Gratis con límite de caracteres; plan Pro de pago",
        rating: 9.5,
        speed: "rapida",
        difficulty: "facil",
        labels: ["🏆 Editor favorito"],
        pros: ["Traducciones muy naturales y precisas", "Soporta muchos idiomas", "Muy fácil de usar"],
        cons: ["Límite de caracteres en versión gratis", "Documentos grandes requieren plan de pago"]
    },
    {
        name: "Alrite",
        category: "Trabajo Remoto",
        description: "Transcribí reuniones y llamadas en tiempo real con resúmenes automáticos.",
        icon: "📝",
        link: "https://alrite.io/",
        isPro: false,
        bestFor: "Transcribir reuniones y llamadas en tiempo real",
        easeOfUse: "Fácil",
        pricingDetail: "Gratis con límites de minutos; planes de pago para más uso",
        rating: 7.8,
        speed: "media",
        difficulty: "facil",
        labels: [],
        pros: ["Transcripción en tiempo real", "Resúmenes automáticos muy útiles"],
        cons: ["Límite de minutos en versión gratis", "Requiere buena conexión a internet"]
    },
    {
        name: "Fireflies.ai",
        category: "Trabajo Remoto",
        description: "Asistente de voz de IA que graba y transcribe automáticamente reuniones en Zoom o Google Meet.",
        icon: "📝",
        link: "https://fireflies.ai",
        bestFor: "Grabar y resumir reuniones automáticamente",
        easeOfUse: "Fácil",
        pricingDetail: "Gratis con límites; planes de pago para equipos",
        rating: 8.2,
        speed: "media",
        difficulty: "facil",
        labels: ["🔥 Muy popular"],
        pros: ["Integración con Zoom y Google Meet", "Resúmenes automáticos de reuniones", "Muy fácil de activar"],
        cons: ["Almacenamiento limitado en versión gratis", "Requiere permisos de grabación"]
    },
    {
        name: "Gemini Enterprise Agent Platform",
        category: "Trabajo Remoto",
        description: "Plataforma para crear agentes de IA personalizados usando planos prediseñados en Agent Garden.",
        icon: "🤖",
        link: "https://cloud.google.com/gemini/docs/agents",
        bestFor: "Crear agentes de IA personalizados para empresas",
        easeOfUse: "Requiere experiencia técnica",
        pricingDetail: "Modelo de pago por uso en Google Cloud",
        rating: 7.5,
        speed: "media",
        difficulty: "avanzada",
        labels: ["💎 Premium"],
        pros: ["Muy potente para uso empresarial", "Integrado con toda la nube de Google"],
        cons: ["Requiere experiencia técnica avanzada", "Modelo de pago por uso"]
    },
    {
        name: "Make",
        category: "Trabajo Remoto",
        description: "Plataforma de automatización visual para conectar tus aplicaciones y optimizar flujos de trabajo.",
        icon: "⚙️",
        link: "https://www.make.com",
        bestFor: "Automatizar tareas conectando distintas apps",
        easeOfUse: "Intermedio, sin necesitar saber programar",
        pricingDetail: "Gratis con límites; planes de pago para más operaciones",
        rating: 8.7,
        speed: "media",
        difficulty: "media",
        labels: ["🔥 Muy popular"],
        pros: ["Automatización visual muy potente", "Conecta cientos de aplicaciones", "Sin necesidad de programar"],
        cons: ["Puede ser complejo para principiantes", "Operaciones limitadas en versión gratis"]
    },
    {
        name: "Perplexity",
        category: "Estudios/Educación",
        description: "Como un Google que te da la respuesta directa y te dice de dónde sacó la info.",
        icon: "🔍",
        link: "https://www.perplexity.ai",
        bestFor: "Buscar información actualizada con fuentes citadas",
        easeOfUse: "Muy fácil",
        pricingDetail: "Gratis con límites; plan Pro de pago",
        rating: 9.2,
        speed: "rapida",
        difficulty: "facil",
        labels: ["🚀 IA nueva", "🔥 Muy popular"],
        pros: ["Respuestas con fuentes citadas", "Información siempre actualizada", "Gratis y sin registro necesario"],
        cons: ["Plan Pro para búsquedas ilimitadas", "Puede cometer errores como cualquier IA"]
    },
    {
        name: "Canva",
        category: "Estudios/Educación",
        description: "Para hacer presentaciones y trabajos prácticos que se vean profesionales.",
        icon: "🎨",
        link: "https://www.canva.com",
        bestFor: "Diseño gráfico, presentaciones y redes sociales",
        easeOfUse: "Muy fácil",
        pricingDetail: "Gratis con plantillas limitadas; Canva Pro de pago",
        rating: 9.6,
        speed: "rapida",
        difficulty: "facil",
        labels: ["🏆 Editor favorito", "🔥 Muy popular"],
        pros: ["Interfaz muy fácil de usar", "Miles de plantillas profesionales", "100% en español"],
        cons: ["Funciones avanzadas son de pago", "Imágenes con marca de agua en versión gratis"]
    },
    {
        name: "TTSreader",
        category: "Estudios/Educación",
        description: "Convertí tus textos o apuntes en audio natural de forma rápida y gratuita.",
        icon: "🔊",
        link: "https://ttsreader.com/es/",
        isPro: false,
        bestFor: "Escuchar apuntes o textos en vez de leerlos",
        easeOfUse: "Muy fácil",
        pricingDetail: "Gratis, sin necesidad de registrarte",
        rating: 7.5,
        speed: "rapida",
        difficulty: "facil",
        labels: [],
        pros: ["100% gratis y sin registro", "Muy fácil de usar", "Funciona en el navegador"],
        cons: ["Voces robóticas, poco naturales", "Sin historial de textos guardados"]
    },
    {
        name: "Google Cloud TTS",
        category: "Estudios/Educación",
        description: "Voces de alta fidelidad con entonación muy natural para proyectos profesionales.",
        icon: "🎙️",
        link: "https://cloud.google.com/text-to-speech",
        isPro: false,
        bestFor: "Generar voces realistas para proyectos o videos",
        easeOfUse: "Requiere algo de configuración técnica",
        pricingDetail: "Gratis con cuota mensual; pago por uso adicional",
        rating: 8.8,
        speed: "media",
        difficulty: "avanzada",
        labels: [],
        pros: ["Voces muy naturales y de alta calidad", "Gran variedad de voces e idiomas"],
        cons: ["Requiere configuración técnica inicial", "Pago por uso adicional"]
    },
    {
        name: "Otter.ai",
        category: "Estudios/Educación",
        description: "Transcribe clases en tiempo real y entrega resúmenes estructurados.",
        icon: "🎙️",
        link: "https://otter.ai",
        bestFor: "Transcribir clases y generar resúmenes automáticos",
        easeOfUse: "Fácil",
        pricingDetail: "Gratis con límites de minutos; planes de pago",
        rating: 8.3,
        speed: "media",
        difficulty: "facil",
        labels: [],
        pros: ["Transcripción de clases en tiempo real", "Resúmenes estructurados automáticos", "App para celular disponible"],
        cons: ["Límite de 300 minutos gratis por mes", "Algunas funciones solo en inglés"]
    },
    {
        name: "Grammarly",
        category: "Estudios/Educación",
        description: "Corregí gramática, ortografía y puntuación en tus trabajos.",
        icon: "✍️",
        link: "https://grammarly.com",
        bestFor: "Corregir y mejorar la redacción de tus textos",
        easeOfUse: "Muy fácil",
        pricingDetail: "Gratis con funciones básicas; plan Premium de pago",
        rating: 9.0,
        speed: "rapida",
        difficulty: "facil",
        labels: ["🔥 Muy popular"],
        pros: ["Corrección gramatical muy precisa", "Integración con el navegador y Word", "Explicaciones claras de cada error"],
        cons: ["Optimizado para inglés, menos para español", "Funciones avanzadas son de pago"]
    },
    {
        name: "Scholarcy",
        category: "Estudios/Educación",
        description: "Resume automáticamente artículos académicos complejos.",
        icon: "📚",
        link: "https://scholarcy.com",
        bestFor: "Resumir papers y artículos académicos extensos",
        easeOfUse: "Fácil",
        pricingDetail: "Gratis con límites; plan de pago para uso ilimitado",
        rating: 7.9,
        speed: "media",
        difficulty: "facil",
        labels: [],
        pros: ["Resume papers académicos complejos", "Extrae ideas clave automáticamente"],
        cons: ["Límite de resúmenes en versión gratis", "Enfocado solo en textos académicos"]
    },
    {
        name: "Mapify",
        category: "Estudios/Educación",
        description: "Genera mapas mentales y guías visuales a partir de texto.",
        icon: "🧠",
        link: "https://mapify.so",
        bestFor: "Convertir apuntes en mapas mentales visuales",
        easeOfUse: "Fácil",
        pricingDetail: "Gratis con límites; plan de pago para más mapas",
        rating: 8.1,
        speed: "rapida",
        difficulty: "facil",
        labels: ["🚀 IA nueva"],
        pros: ["Genera mapas mentales desde texto en segundos", "Interfaz visual muy clara y atractiva"],
        cons: ["Límite de mapas en versión gratis", "Exportación limitada sin plan de pago"]
    },
    {
        name: "Zotero",
        category: "Estudios/Educación",
        description: "Solución profesional para crear bibliografías y gestionar referencias.",
        icon: "📁",
        link: "https://zotero.org",
        bestFor: "Gestionar bibliografía y citas para trabajos académicos",
        easeOfUse: "Intermedio",
        pricingDetail: "Gratis, con almacenamiento extra de pago opcional",
        rating: 8.4,
        speed: "media",
        difficulty: "media",
        labels: [],
        pros: ["100% gratis", "Gestión de citas muy completa", "Plugin para Word disponible"],
        cons: ["Interfaz algo anticuada", "Curva de aprendizaje inicial para nuevos usuarios"]
    },
    {
        name: "Mendeley",
        category: "Estudios/Educación",
        description: "Herramienta para encontrar fuentes científicas y estructurar bibliografías.",
        icon: "🔍",
        link: "https://mendeley.com",
        bestFor: "Buscar papers científicos y organizar referencias",
        easeOfUse: "Intermedio",
        pricingDetail: "Gratis, con planes de almacenamiento adicional",
        rating: 8.0,
        speed: "media",
        difficulty: "media",
        labels: [],
        pros: ["Base de datos de papers científicos incluida", "Gestión de referencias muy completa"],
        cons: ["Almacenamiento limitado en versión gratis", "Requiere instalación de la aplicación"]
    },
    {
        name: "Wolfram Alpha",
        category: "Estudios/Educación",
        description: "Motor de conocimiento para resolver problemas matemáticos y científicos.",
        icon: "🧮",
        link: "https://wolframalpha.com",
        bestFor: "Resolver matemática, física y problemas científicos paso a paso",
        easeOfUse: "Fácil",
        pricingDetail: "Gratis con límites; plan Pro de pago",
        rating: 9.1,
        speed: "rapida",
        difficulty: "facil",
        labels: ["🏆 Editor favorito"],
        pros: ["Resolución de matemática paso a paso", "Cálculos muy precisos y confiables", "Gratis para uso básico"],
        cons: ["Explicaciones detalladas son de pago", "Interfaz poco intuitiva para principiantes"]
    },
    {
        name: "Nerd AI",
        category: "Estudios/Educación",
        description: "Escanea documentos para obtener cuestionarios, resúmenes y soluciones.",
        icon: "🤖",
        link: "https://nerd-ai.com",
        bestFor: "Generar cuestionarios y resúmenes desde tus apuntes",
        easeOfUse: "Fácil",
        pricingDetail: "Gratis con límites; plan de pago para uso ilimitado",
        rating: 7.6,
        speed: "rapida",
        difficulty: "facil",
        labels: ["🚀 IA nueva"],
        pros: ["Escanea documentos con la cámara", "Genera cuestionarios automáticos para estudiar"],
        cons: ["Límite de escaneos en versión gratis", "Requiere la app móvil instalada"]
    },
    {
        name: "Socratic",
        category: "Estudios/Educación",
        description: "IA para estudiantes pensada para resolver dudas de cualquier materia.",
        icon: "🎓",
        link: "https://socratic.org",
        bestFor: "Resolver dudas de cualquier materia escolar",
        easeOfUse: "Muy fácil",
        pricingDetail: "Gratis",
        rating: 8.3,
        speed: "rapida",
        difficulty: "facil",
        labels: [],
        pros: ["100% gratis", "Explica paso a paso cualquier materia", "Muy intuitivo para estudiantes"],
        cons: ["Requiere la app de Google", "Funciona mejor con preguntas en inglés"]
    },
    {
        name: "Quizlet AI",
        category: "Estudios/Educación",
        description: "Crea tarjetas de estudio y cuestionarios a partir de tus apuntes.",
        icon: "📝",
        link: "https://quizlet.com",
        bestFor: "Crear tarjetas de estudio y practicar para exámenes",
        easeOfUse: "Muy fácil",
        pricingDetail: "Gratis con límites; plan Plus de pago",
        rating: 8.8,
        speed: "rapida",
        difficulty: "facil",
        labels: ["🔥 Muy popular"],
        pros: ["Tarjetas de estudio muy efectivas", "IA que genera tarjetas desde tus apuntes", "Gran comunidad de estudiantes"],
        cons: ["Funciones de IA requieren plan Plus de pago", "Publicidad en versión gratis"]
    },
    {
        name: "Gradescope",
        category: "Estudios/Educación",
        description: "Emplea inteligencia de datos para calificar trabajos y exámenes.",
        icon: "✔️",
        link: "https://gradescope.com",
        bestFor: "Calificar exámenes y trabajos de forma asistida",
        easeOfUse: "Intermedio",
        pricingDetail: "Gratis para estudiantes; planes institucionales de pago",
        rating: 7.7,
        speed: "media",
        difficulty: "media",
        labels: [],
        pros: ["Calificación asistida por IA muy eficiente", "Ahorra mucho tiempo a los docentes"],
        cons: ["Orientado principalmente a docentes", "Requiere configuración institucional"]
    },
    {
        name: "Tutor.ai",
        category: "Estudios/Educación",
        description: "Recibe respuestas y explicaciones detalladas para temas complejos.",
        icon: "💬",
        link: "https://tutor.ai",
        bestFor: "Recibir explicaciones detalladas de temas difíciles",
        easeOfUse: "Muy fácil",
        pricingDetail: "Gratis con límites; plan de pago para más consultas",
        rating: 7.9,
        speed: "rapida",
        difficulty: "facil",
        labels: [],
        pros: ["Explicaciones muy detalladas de cualquier tema", "Muy accesible para principiantes"],
        cons: ["Respuestas limitadas en versión gratis", "Sin adaptación a materias locales argentinas"]
    },
    {
        name: "LanguageTool",
        category: "Estudios/Educación",
        description: "Asistente para redactar informes, memorias técnicas y documentación.",
        icon: "📝",
        link: "https://languagetool.org",
        bestFor: "Corregir gramática y estilo en varios idiomas",
        easeOfUse: "Muy fácil",
        pricingDetail: "Gratis con límites; plan Premium de pago",
        rating: 8.5,
        speed: "rapida",
        difficulty: "facil",
        labels: [],
        pros: ["Corrección en español muy buena", "Plugin para navegador y Word disponible", "Versión gratis muy útil"],
        cons: ["Funciones avanzadas de estilo son de pago", "Menos conocido que Grammarly"]
    },
    {
        name: "Goblin.tools",
        category: "Tareas del Hogar",
        description: "Te ayuda a desglosar tareas complejas en pasos simples.",
        icon: "👺",
        link: "https://goblin.tools",
        bestFor: "Dividir tareas grandes en pasos pequeños y manejables",
        easeOfUse: "Muy fácil",
        pricingDetail: "Gratis",
        rating: 8.0,
        speed: "rapida",
        difficulty: "facil",
        labels: ["🚀 IA nueva"],
        pros: ["100% gratis y sin registro", "Desglose de tareas muy simple", "Muy útil para personas con TDAH"],
        cons: ["Funciones muy específicas y limitadas", "Solo sirve para dividir tareas simples"]
    },
    {
        name: "Mealime",
        category: "Tareas del Hogar",
        description: "Planificá tus comidas de la semana y armá la lista del súper.",
        icon: "🥗",
        link: "https://www.mealime.com",
        bestFor: "Planificar comidas semanales y listas de compras",
        easeOfUse: "Muy fácil",
        pricingDetail: "Gratis con funciones básicas; plan Pro de pago",
        rating: 8.2,
        speed: "rapida",
        difficulty: "facil",
        labels: [],
        pros: ["Planificación semanal muy simple", "Lista de compras automática", "Versión gratis funcional"],
        cons: ["Base de recetas limitada en versión gratis", "Interfaz principalmente en inglés"]
    },
    {
        name: "Sweepy",
        category: "Tareas del Hogar",
        description: "Organizá tu limpieza por habitaciones y mantené tu hogar impecable sin estrés.",
        icon: "🧹",
        link: "https://sweepy.app/",
        isPro: false,
        bestFor: "Organizar la limpieza del hogar por habitaciones",
        easeOfUse: "Muy fácil",
        pricingDetail: "Gratis",
        rating: 7.8,
        speed: "rapida",
        difficulty: "facil",
        labels: [],
        pros: ["100% gratis", "Organización por habitaciones muy clara", "Interfaz muy visual"],
        cons: ["Sin funciones de IA avanzada", "Solo disponible como app para celular"]
    },
    {
        name: "Homestyler",
        category: "Tareas del Hogar",
        description: "Aplicación de IA para remodelar espacios, cambiar pintura o mover muebles virtualmente.",
        icon: "🏠",
        link: "https://www.homestyler.com",
        bestFor: "Probar decoración y remodelación de espacios virtualmente",
        easeOfUse: "Fácil",
        pricingDetail: "Gratis con límites; planes de pago para más diseños",
        rating: 8.3,
        speed: "media",
        difficulty: "facil",
        labels: ["🚀 IA nueva"],
        pros: ["Prueba decoración virtualmente sin gastar", "Catálogo de muebles reales incluido", "Versión gratis disponible"],
        cons: ["El renderizado puede ser lento", "Funciones avanzadas son de pago"]
    },
    {
        name: "Microsoft To Do",
        category: "Tareas del Hogar",
        description: "Planificador sencillo con calendario visual para controlar tus proyectos y tareas pendientes.",
        icon: "✅",
        link: "https://todo.microsoft.com",
        bestFor: "Organizar listas de tareas personales del día a día",
        easeOfUse: "Muy fácil",
        pricingDetail: "Gratis",
        rating: 8.7,
        speed: "rapida",
        difficulty: "facil",
        labels: ["🔥 Muy popular"],
        pros: ["100% gratis", "Integrado con Microsoft 365 y Outlook", "Muy simple e intuitivo"],
        cons: ["Sin funciones de IA avanzada", "Sincronización solo con cuenta Microsoft"]
    },
    {
        name: "Google Keep",
        category: "Tareas del Hogar",
        description: "Herramienta de organización personal para anotar ideas, tareas y etiquetarlas por estado.",
        icon: "💡",
        link: "https://keep.google.com",
        bestFor: "Anotar ideas y notas rápidas organizadas por color",
        easeOfUse: "Muy fácil",
        pricingDetail: "Gratis",
        rating: 8.4,
        speed: "rapida",
        difficulty: "facil",
        labels: [],
        pros: ["100% gratis", "Integrado con toda la cuenta de Google", "Acceso desde cualquier dispositivo"],
        cons: ["Sin funciones de organización avanzada", "Interfaz muy básica para proyectos complejos"]
    },
    {
        name: "Bing Image Creator",
        category: "Creatividad/Diseño",
        description: "Escribí lo que imaginás y la IA te crea la imagen en segundos.",
        icon: "🖼️",
        link: "https://www.bing.com/images/create",
        bestFor: "Generar imágenes a partir de una descripción de texto",
        easeOfUse: "Muy fácil",
        pricingDetail: "Gratis con límites diarios de generaciones",
        rating: 8.9,
        speed: "rapida",
        difficulty: "facil",
        labels: ["🚀 IA nueva", "🔥 Muy popular"],
        pros: ["Genera imágenes muy realistas", "100% gratis con cuenta Microsoft", "Soporta prompts en español"],
        cons: ["Límite diario de generaciones gratis", "No permite editar las imágenes generadas"]
    },
    {
        name: "CapCut",
        category: "Creatividad/Diseño",
        description: "Editá videos para tus redes sociales de forma súper fácil y rápida.",
        icon: "🎬",
        link: "https://www.capcut.com",
        bestFor: "Editar videos cortos para redes sociales",
        easeOfUse: "Muy fácil",
        pricingDetail: "Gratis con plantillas limitadas; plan Pro de pago",
        rating: 9.3,
        speed: "rapida",
        difficulty: "facil",
        labels: ["🔥 Muy popular", "🏆 Editor favorito"],
        pros: ["Edición muy fácil e intuitiva", "Plantillas de tendencia incluidas", "Excelente para redes sociales"],
        cons: ["Funciones Pro son de pago", "Algunas plantillas llevan marca de agua"]
    },
    {
        name: "Photopea",
        category: "Creatividad/Diseño",
        description: "Editor de imágenes profesional en tu navegador, con funciones de IA potentes.",
        icon: "🖼️",
        link: "https://www.photopea.com/",
        isPro: false,
        bestFor: "Editar imágenes con herramientas tipo Photoshop, gratis",
        easeOfUse: "Intermedio",
        pricingDetail: "Gratis (con anuncios); versión sin anuncios de pago",
        rating: 8.7,
        speed: "media",
        difficulty: "media",
        labels: [],
        pros: ["100% gratis y sin registro", "Funciones tipo Photoshop completas", "Abre archivos PSD directamente"],
        cons: ["Interfaz compleja para principiantes", "Con publicidad en versión gratis"]
    },
    {
        name: "LuzIA",
        category: "Trámites y Consultas",
        description: "Una IA que podés tener en tu WhatsApp para preguntar cualquier cosa rápido.",
        icon: "📱",
        link: "https://www.luzia.com",
        bestFor: "Consultas rápidas directo desde WhatsApp",
        easeOfUse: "Muy fácil",
        pricingDetail: "Gratis con límites; plan de pago para uso ilimitado",
        rating: 8.9,
        speed: "rapida",
        difficulty: "facil",
        labels: ["🔥 Muy popular", "🚀 IA nueva"],
        pros: ["Funciona directo en WhatsApp", "Sin instalar apps adicionales", "Perfecto español argentino"],
        cons: ["Límite de consultas gratis por día", "Requiere tener WhatsApp activo"]
    },
    {
        name: "CamScanner",
        category: "Trámites y Consultas",
        description: "Escaneá tus documentos con el celu y dejalos perfectos para enviar por mail.",
        icon: "📄",
        link: "https://www.camscanner.com",
        bestFor: "Escanear y mejorar documentos con la cámara del celular",
        easeOfUse: "Muy fácil",
        pricingDetail: "Gratis con límites; plan Premium de pago",
        rating: 8.5,
        speed: "rapida",
        difficulty: "facil",
        labels: ["🔥 Muy popular"],
        pros: ["Escaneo de documentos muy rápido", "Mejora la calidad automáticamente", "Exporta a PDF sin problema"],
        cons: ["Funciones avanzadas son de pago", "Con publicidad en versión gratis"]
    },
    {
        name: "Entre Ríos Digital",
        category: "Trámites y Consultas",
        description: "Plataforma oficial para realizar gestiones, solicitar turnos y consultar trámites provinciales.",
        icon: "🏛️",
        link: "https://www.entrerios.gov.ar",
        isPro: false,
        bestFor: "Hacer trámites y pedir turnos con la provincia",
        easeOfUse: "Fácil",
        pricingDetail: "Gratis (sitio oficial del gobierno provincial)",
        rating: 7.5,
        speed: "media",
        difficulty: "facil",
        labels: [],
        pros: ["Trámites oficiales 100% online", "Sin necesidad de moverse de casa", "Completamente gratis"],
        cons: ["Algunos trámites aún requieren presencia física", "Interfaz puede ser lenta"]
    },
    {
        name: "Xubio",
        category: "Trámites y Consultas",
        description: "Gestión contable y facturación electrónica en la nube. Ideal para mantener tus impuestos al día.",
        icon: "🧾",
        link: "https://xubio.com/",
        isPro: false,
        bestFor: "Facturación electrónica y gestión contable de tu negocio",
        easeOfUse: "Intermedio",
        pricingDetail: "Plan gratuito limitado; planes de pago según tamaño del negocio",
        rating: 7.8,
        speed: "media",
        difficulty: "media",
        labels: [],
        pros: ["Facturación electrónica desde la nube", "Integrado con AFIP", "Interfaz en español argentino"],
        cons: ["Plan gratis muy limitado en funciones", "Precio elevado para planes avanzados"]
    },
    {
        name: "Claude Code",
        category: "IA Avanzada",
        description: "Agente de codificación en tu terminal que analiza, edita y prueba toda tu base de código.",
        icon: "⚡",
        link: "https://code.claude.com/",
        isPro: true,
        bestFor: "Programar y automatizar tareas técnicas complejas",
        easeOfUse: "Requiere algo de experiencia técnica",
        pricingDetail: "Créditos gratis diarios; planes de pago para uso intensivo",
        rating: 9.0,
        speed: "potente",
        difficulty: "avanzada",
        labels: ["🚀 IA nueva", "💎 Premium"],
        pros: ["Comprende toda la base de código del proyecto", "Muy preciso para programación", "Trabaja directamente en la terminal"],
        cons: ["Requiere conocimientos técnicos", "Créditos gratis se agotan rápido"]
    },
    {
        name: "Gemini Advanced",
        category: "IA Avanzada",
        description: "Análisis de datos complejo y razonamiento lógico.",
        icon: "🚀",
        link: "https://aistudio.google.com/",
        isPro: true,
        bestFor: "Análisis de datos y razonamiento con contexto extenso",
        easeOfUse: "Fácil, integrado con Google",
        pricingDetail: "Créditos gratis diarios; plan Google One AI Premium de pago",
        rating: 9.4,
        speed: "potente",
        difficulty: "facil",
        labels: ["🚀 IA nueva", "💎 Premium"],
        pros: ["Razonamiento lógico muy avanzado", "Contexto muy extenso para analizar documentos", "Integrado con toda la suite de Google"],
        cons: ["Plan premium de pago para acceso completo", "Menos popular que ChatGPT por ahora"]
    },
    {
        name: "Cursor",
        category: "IA Avanzada",
        description: "Editor de código inteligente con agentes que entienden el contexto de todo tu proyecto.",
        icon: "💻",
        link: "https://cursor.sh/",
        isPro: true,
        bestFor: "Programar con un editor que entiende todo tu proyecto",
        easeOfUse: "Requiere experiencia técnica",
        pricingDetail: "Créditos gratis limitados; planes de pago para uso intensivo",
        rating: 9.1,
        speed: "potente",
        difficulty: "avanzada",
        labels: ["🔥 Muy popular", "💎 Premium"],
        pros: ["Entiende todo el contexto del proyecto", "Autocompletado de IA muy preciso", "Editor completo tipo VS Code"],
        cons: ["Requiere experiencia técnica en programación", "Plan pago para uso intensivo"]
    },
    {
        name: "Streamlit",
        category: "IA Avanzada",
        description: "Creá aplicaciones web interactivas para datos usando solo Python, sin tocar HTML o CSS.",
        icon: "📊",
        link: "https://streamlit.io/",
        isPro: true,
        bestFor: "Crear apps de datos interactivas sabiendo Python",
        easeOfUse: "Requiere conocimientos de programación",
        pricingDetail: "Gratis (open source); hosting en la nube de pago opcional",
        rating: 7.8,
        speed: "media",
        difficulty: "avanzada",
        labels: [],
        pros: ["Crear apps de datos sin saber HTML/CSS", "Open source y completamente gratis", "Gran comunidad de usuarios Python"],
        cons: ["Requiere conocimientos de Python", "Hosting avanzado es de pago"]
    },
    {
        name: "NotebookLM",
        category: "IA Avanzada",
        description: "Asistente de investigación que analiza tus documentos y crea resúmenes, informes o pódcasts.",
        icon: "🧠",
        link: "https://notebooklm.google/",
        isPro: true,
        bestFor: "Investigar y resumir tus propios documentos en profundidad",
        easeOfUse: "Fácil",
        pricingDetail: "Créditos gratis diarios; plan Google One AI Premium de pago",
        rating: 9.2,
        speed: "media",
        difficulty: "facil",
        labels: ["🚀 IA nueva", "💎 Premium"],
        pros: ["Analiza tus propios documentos a fondo", "Genera pódcasts automáticamente", "Resúmenes muy precisos y fiables"],
        cons: ["Requiere subir tus propios documentos", "Uso intensivo requiere plan premium"]
    },
    {
        name: "Cloudflare Radar",
        category: "IA Avanzada",
        description: "Monitoreo inteligente del estado de internet para navegar de forma más segura y consciente.",
        icon: "🌐",
        link: "https://radar.cloudflare.com/",
        isPro: false,
        bestFor: "Monitorear el estado de internet y la seguridad de la red",
        easeOfUse: "Intermedio",
        pricingDetail: "Gratis",
        rating: 7.3,
        speed: "rapida",
        difficulty: "media",
        labels: [],
        pros: ["Datos de internet en tiempo real", "100% gratis", "Muy útil para seguridad de red"],
        cons: ["Útil principalmente para usuarios técnicos", "Interfaz principalmente en inglés"]
    },

    /* ── NUEVAS ── 1 por categoría ── */
    {
        name: "Slack",
        category: "Trabajo Remoto",
        description: "La app de mensajería y colaboración más usada en empresas, con IA para resumir conversaciones.",
        icon: "💬",
        link: "https://slack.com",
        bestFor: "Comunicarse y colaborar en equipo de forma organizada",
        easeOfUse: "Muy fácil",
        pricingDetail: "Gratis con límites; planes de pago para equipos grandes",
        rating: 9.1,
        speed: "rapida",
        difficulty: "facil",
        labels: ["🔥 Muy popular", "🏆 Editor favorito"],
        pros: ["Organización por canales muy clara", "IA que resume conversaciones largas", "Integra con cientos de herramientas"],
        cons: ["Historial limitado a 90 días en versión gratis", "Puede distraer si no se gestiona bien"]
    },
    {
        name: "Duolingo",
        category: "Estudios/Educación",
        description: "Aprendé inglés, portugués o cualquier idioma con lecciones gamificadas y tutor de IA.",
        icon: "🦉",
        link: "https://www.duolingo.com",
        bestFor: "Aprender idiomas de forma diaria con lecciones cortas y entretenidas",
        easeOfUse: "Muy fácil",
        pricingDetail: "Gratis con anuncios; plan Super Duolingo sin anuncios",
        rating: 9.2,
        speed: "rapida",
        difficulty: "facil",
        labels: ["🔥 Muy popular", "🏆 Editor favorito"],
        pros: ["100% gratis para aprender", "Metodología gamificada muy efectiva", "App disponible para Android e iOS"],
        cons: ["Anuncios en versión gratuita", "Profundidad limitada para niveles avanzados"]
    },
    {
        name: "Tody",
        category: "Tareas del Hogar",
        description: "App inteligente para gestionar la limpieza del hogar por zona, con recordatorios y estado visual.",
        icon: "🧽",
        link: "https://todyapp.com",
        bestFor: "Llevar el control de la limpieza del hogar sin olvidar nada",
        easeOfUse: "Muy fácil",
        pricingDetail: "Gratis con funciones básicas; plan Premium de pago",
        rating: 8.0,
        speed: "rapida",
        difficulty: "facil",
        labels: [],
        pros: ["Seguimiento visual de qué tan sucia está cada zona", "Recordatorios automáticos de limpieza", "Muy intuitiva y sin curva de aprendizaje"],
        cons: ["Algunas funciones requieren plan Premium", "Sin versión web, solo app móvil"]
    },
    {
        name: "Runway ML",
        category: "Creatividad/Diseño",
        description: "Herramienta de IA generativa para editar y crear videos de forma profesional con texto.",
        icon: "🎞️",
        link: "https://runwayml.com",
        bestFor: "Generar y editar video con IA a partir de texto o imágenes",
        easeOfUse: "Intermedio",
        pricingDetail: "Gratis con créditos limitados; planes de pago para más generaciones",
        rating: 8.9,
        speed: "potente",
        difficulty: "media",
        labels: ["🚀 IA nueva", "💎 Premium"],
        pros: ["Generación de video por IA muy avanzada", "Herramientas de edición profesionales integradas", "Muy usado por creadores de contenido"],
        cons: ["Créditos gratis se agotan rápido", "Generaciones HD requieren plan de pago"]
    },
    {
        name: "Mi Argentina",
        category: "Trámites y Consultas",
        description: "App oficial del Estado argentino para gestionar documentos, turnos y trámites desde el celular.",
        icon: "🇦🇷",
        link: "https://www.argentina.gob.ar/miargentina",
        bestFor: "Acceder a documentos digitales y trámites del Estado argentino",
        easeOfUse: "Muy fácil",
        pricingDetail: "Gratis (aplicación oficial del Estado)",
        rating: 8.0,
        speed: "rapida",
        difficulty: "facil",
        labels: ["🔥 Muy popular"],
        pros: ["DNI digital con validez legal", "Licencia de conducir digital disponible", "Acceso rápido a trámites nacionales"],
        cons: ["Algunos trámites provinciales no están incluidos", "Requiere validación de identidad inicial"]
    },
    {
        name: "Ollama",
        category: "IA Avanzada",
        description: "Ejecutá modelos de IA como Llama 3 o Mistral en tu computadora con un solo comando. Sin internet.",
        icon: "🦙",
        link: "https://ollama.com",
        bestFor: "Correr modelos de IA open source localmente sin internet ni costos",
        easeOfUse: "Requiere experiencia técnica",
        pricingDetail: "100% gratis y open source",
        rating: 8.7,
        speed: "potente",
        difficulty: "avanzada",
        labels: ["🚀 IA nueva", "🔥 Muy popular"],
        pros: ["100% gratis, privado y sin límites", "Instala modelos con un solo comando", "Gran variedad de modelos open source disponibles"],
        cons: ["Requiere una PC con GPU dedicada para buen rendimiento", "Configuración inicial solo por terminal"]
    },

    /* ── TRABAJO REMOTO ── 2 nuevas ── */
    {
        name: "Notion AI",
        category: "Trabajo Remoto",
        description: "Workspace de notas, documentos y proyectos con IA integrada para escribir, resumir y organizar.",
        icon: "🗒️",
        link: "https://www.notion.com",
        bestFor: "Organizar proyectos, notas y documentos con IA integrada",
        easeOfUse: "Fácil",
        pricingDetail: "Gratis con límites; plan Plus de pago para IA ilimitada",
        rating: 9.0,
        speed: "rapida",
        difficulty: "facil",
        labels: ["🔥 Muy popular"],
        pros: ["Todo en un solo lugar: notas, tareas y bases de datos", "IA que escribe y resume por vos", "Muy flexible y personalizable"],
        cons: ["Puede abrumar al principio por tantas opciones", "IA requiere plan de pago"]
    },
    {
        name: "Loom",
        category: "Trabajo Remoto",
        description: "Grabá y compartí videos de pantalla con resúmenes automáticos por IA. Ideal para reemplazar reuniones.",
        icon: "🎥",
        link: "https://www.loom.com",
        bestFor: "Grabar mensajes en video para el trabajo sin reunirse",
        easeOfUse: "Muy fácil",
        pricingDetail: "Gratis hasta 25 videos; plan Business de pago",
        rating: 8.6,
        speed: "rapida",
        difficulty: "facil",
        labels: ["🔥 Muy popular"],
        pros: ["Grabación de pantalla en segundos", "Resumen automático del video por IA", "Muy útil para trabajo remoto asíncrono"],
        cons: ["Límite de 25 videos en versión gratis", "Almacenamiento limitado sin plan de pago"]
    },

    /* ── ESTUDIOS/EDUCACIÓN ── 2 nuevas ── */
    {
        name: "Khan Academy",
        category: "Estudios/Educación",
        description: "Plataforma gratuita con lecciones, videos y ejercicios de todas las materias, ahora con tutor de IA Khanmigo.",
        icon: "🎓",
        link: "https://es.khanacademy.org",
        bestFor: "Aprender cualquier materia gratis con ejercicios interactivos",
        easeOfUse: "Muy fácil",
        pricingDetail: "100% gratis; tutor de IA Khanmigo de pago",
        rating: 9.3,
        speed: "rapida",
        difficulty: "facil",
        labels: ["🏆 Editor favorito", "🔥 Muy popular"],
        pros: ["Completamente gratis para siempre", "Cubre desde primaria hasta universitario", "100% en español con adaptación local"],
        cons: ["Tutor de IA es de pago", "Algunas materias tienen menos contenido en español"]
    },
    {
        name: "Anki",
        category: "Estudios/Educación",
        description: "Sistema de tarjetas con memoria espaciada que te ayuda a recordar lo que estudiaste mucho más tiempo.",
        icon: "🃏",
        link: "https://apps.ankiweb.net",
        bestFor: "Memorizar vocabulario, fechas y conceptos para exámenes",
        easeOfUse: "Intermedio",
        pricingDetail: "Gratis en PC y web; app iOS de pago (Android gratis)",
        rating: 8.9,
        speed: "rapida",
        difficulty: "media",
        labels: ["🏆 Editor favorito"],
        pros: ["Método científico para memorizar de forma eficiente", "Miles de mazos compartidos por la comunidad", "100% gratis en PC y Android"],
        cons: ["Interfaz algo anticuada y poco visual", "App de iOS tiene costo único"]
    },

    /* ── TAREAS DEL HOGAR ── 2 nuevas ── */
    {
        name: "OurHome",
        category: "Tareas del Hogar",
        description: "App familiar para repartir las tareas del hogar entre todos y llevar listas de compras compartidas.",
        icon: "🏡",
        link: "https://ourhomeapp.com",
        bestFor: "Organizar y repartir las tareas del hogar en familia",
        easeOfUse: "Muy fácil",
        pricingDetail: "Gratis con funciones básicas; plan Premium de pago",
        rating: 7.9,
        speed: "rapida",
        difficulty: "facil",
        labels: [],
        pros: ["Lista de tareas compartida en tiempo real", "Sistema de puntos para motivar a los chicos", "Listas de compras integradas"],
        cons: ["Interfaz principalmente en inglés", "Funciones avanzadas son de pago"]
    },
    {
        name: "Notion Recetas",
        category: "Tareas del Hogar",
        description: "Usá la IA de Notion para crear un recetario personal, planificar menús semanales y generar listas de compras.",
        icon: "🍽️",
        link: "https://www.notion.com/templates/recipe-book",
        bestFor: "Organizar recetas y planificar menús semanales con IA",
        easeOfUse: "Fácil",
        pricingDetail: "Gratis con límites; plan Plus de pago",
        rating: 8.1,
        speed: "rapida",
        difficulty: "facil",
        labels: ["🚀 IA nueva"],
        pros: ["Recetario personalizado que crece con el tiempo", "IA genera ideas de menú según ingredientes", "Lista de compras automática desde el menú"],
        cons: ["Requiere tener cuenta de Notion", "IA de planificación requiere plan de pago"]
    },

    /* ── CREATIVIDAD/DISEÑO ── 2 nuevas ── */
    {
        name: "Adobe Firefly",
        category: "Creatividad/Diseño",
        description: "Generador de imágenes y efectos de IA de Adobe, integrado con Photoshop y sin problemas de derechos de autor.",
        icon: "🔥",
        link: "https://firefly.adobe.com",
        bestFor: "Generar imágenes y efectos de IA listos para uso comercial",
        easeOfUse: "Muy fácil",
        pricingDetail: "Gratis con créditos mensuales; plan Creative Cloud de pago",
        rating: 9.1,
        speed: "rapida",
        difficulty: "facil",
        labels: ["🚀 IA nueva", "🔥 Muy popular"],
        pros: ["Imágenes 100% libres de derechos de autor", "Integrado directo con Photoshop e Illustrator", "Créditos gratis mensuales generosos"],
        cons: ["Créditos se agotan con uso intensivo", "Máximo potencial requiere suite Creative Cloud"]
    },
    {
        name: "Descript",
        category: "Creatividad/Diseño",
        description: "Editor de video y podcast donde editás el texto del guión y el video se edita solo. Con IA para doblar voces.",
        icon: "🎙️",
        link: "https://www.descript.com",
        bestFor: "Editar videos y podcasts editando el texto transcrito",
        easeOfUse: "Fácil",
        pricingDetail: "Gratis con límites; plan Creator de pago",
        rating: 8.8,
        speed: "media",
        difficulty: "facil",
        labels: ["🚀 IA nueva"],
        pros: ["Editar video eliminando texto del guión es muy innovador", "Transcripción automática muy precisa", "Relleno de silencio automático incluido"],
        cons: ["Exportación HD requiere plan de pago", "Funciones de IA de voz son de pago"]
    },

    /* ── TRÁMITES Y CONSULTAS ── 2 nuevas ── */
    {
        name: "AFIP Digital",
        category: "Trámites y Consultas",
        description: "Portal oficial de AFIP para gestionar tu CUIT, declaraciones juradas, facturación y trámites impositivos.",
        icon: "🏦",
        link: "https://www.afip.gob.ar",
        bestFor: "Gestionar trámites impositivos y facturación ante AFIP",
        easeOfUse: "Intermedio",
        pricingDetail: "Gratis (portal oficial del Estado)",
        rating: 7.2,
        speed: "media",
        difficulty: "media",
        labels: [],
        pros: ["Portal oficial para todos los trámites impositivos", "Completamente gratis", "Facturación electrónica incluida"],
        cons: ["Interfaz poco amigable para principiantes", "Puede ser lento en épocas de vencimientos"]
    },
    {
        name: "DocuSign",
        category: "Trámites y Consultas",
        description: "Firmá contratos y documentos digitalmente con validez legal en Argentina y todo el mundo.",
        icon: "✍️",
        link: "https://www.docusign.com",
        bestFor: "Firmar contratos y documentos con validez legal online",
        easeOfUse: "Muy fácil",
        pricingDetail: "Gratis para prueba; planes desde pago mensual",
        rating: 8.8,
        speed: "rapida",
        difficulty: "facil",
        labels: ["🔥 Muy popular"],
        pros: ["Firma digital con validez legal en Argentina", "Muy seguro y reconocido mundialmente", "Proceso muy simple para el firmante"],
        cons: ["Planes de pago obligatorios para uso frecuente", "Prueba gratuita muy limitada"]
    },

    /* ── IA AVANZADA ── 2 nuevas ── */
    {
        name: "Hugging Face",
        category: "IA Avanzada",
        description: "La mayor plataforma open source de IA con miles de modelos, datasets y demos para explorar y usar.",
        icon: "🤗",
        link: "https://huggingface.co",
        bestFor: "Explorar y usar modelos de IA open source sin costo",
        easeOfUse: "Requiere algo de experiencia técnica",
        pricingDetail: "Gratis para explorar; infraestructura propia de pago",
        rating: 9.0,
        speed: "media",
        difficulty: "avanzada",
        labels: ["🔥 Muy popular"],
        pros: ["Acceso a miles de modelos de IA open source", "Demos gratuitas de casi todo", "Gran comunidad activa de desarrolladores"],
        cons: ["Requiere conocimientos técnicos para sacarle provecho", "Infraestructura dedicada es de pago"]
    },
    {
        name: "LM Studio",
        category: "IA Avanzada",
        description: "Ejecutá modelos de IA potentes en tu propia computadora sin internet. Privacidad total y sin costos.",
        icon: "💻",
        link: "https://lmstudio.ai",
        bestFor: "Usar modelos de IA localmente sin internet ni costos por uso",
        easeOfUse: "Requiere experiencia técnica",
        pricingDetail: "100% gratis y open source",
        rating: 8.4,
        speed: "potente",
        difficulty: "avanzada",
        labels: ["🚀 IA nueva"],
        pros: ["100% gratis, privado y sin límites de uso", "Funciona sin internet una vez descargado", "Compatible con los mejores modelos open source"],
        cons: ["Requiere una PC con buena GPU para buen rendimiento", "Configuración inicial requiere conocimientos técnicos"]
    },

    // ── TRABAJO REMOTO ─────────────────────────────
    {
        name: "Zapier",
        category: "Trabajo Remoto",
        description: "Automatizá tareas repetitivas conectando más de 6.000 aplicaciones sin saber programar.",
        icon: "⚡",
        link: "https://zapier.com",
        bestFor: "Automatizar flujos de trabajo entre apps sin código",
        easeOfUse: "Fácil con plantillas; requiere algo de práctica",
        pricingDetail: "Gratis hasta 100 tareas/mes; planes de pago para más",
        rating: 9.2,
        speed: "rapida",
        difficulty: "media",
        labels: ["🔥 Muy popular"],
        pros: ["Conecta miles de apps populares", "Sin necesidad de programar", "Plantillas listas para usar"],
        cons: ["Versión gratis muy limitada en volumen", "Curva de aprendizaje inicial"]
    },
    {
        name: "Calendly",
        category: "Trabajo Remoto",
        description: "Organizá reuniones sin ir y venir con correos. Compartí tu calendario y que cada uno elija su horario.",
        icon: "📅",
        link: "https://calendly.com",
        bestFor: "Agendar reuniones y citas de forma automática",
        easeOfUse: "Muy fácil",
        pricingDetail: "Gratis para 1 tipo de evento; planes de pago para más",
        rating: 9.0,
        speed: "rapida",
        difficulty: "facil",
        labels: ["🔥 Muy popular"],
        pros: ["Elimina los correos de coordinación", "Se sincroniza con Google Calendar", "Link propio para compartir"],
        cons: ["Funciones avanzadas requieren plan de pago", "Personalización limitada en versión gratis"]
    },
    {
        name: "Clockify",
        category: "Trabajo Remoto",
        description: "Controlá cuánto tiempo dedicás a cada tarea y proyecto. Ideal para freelancers y equipos.",
        icon: "⏱️",
        link: "https://clockify.me",
        bestFor: "Registrar tiempos de trabajo y generar reportes",
        easeOfUse: "Muy fácil",
        pricingDetail: "100% gratis para funciones esenciales; planes de pago para equipos grandes",
        rating: 8.7,
        speed: "rapida",
        difficulty: "facil",
        labels: [],
        pros: ["Versión gratis muy completa", "Reportes detallados de horas", "App móvil disponible"],
        cons: ["Integraciones avanzadas de pago", "UI algo anticuada"]
    },
    {
        name: "Taskade",
        category: "Trabajo Remoto",
        description: "Gestor de proyectos con IA integrada que genera tareas, resúmenes y ayuda a planificar proyectos.",
        icon: "🗂️",
        link: "https://taskade.com",
        bestFor: "Gestión de proyectos colaborativa con asistente de IA",
        easeOfUse: "Fácil",
        pricingDetail: "Gratis con límites; planes de pago para equipos",
        rating: 8.5,
        speed: "rapida",
        difficulty: "facil",
        labels: ["🚀 IA nueva"],
        pros: ["IA integrada para generar listas y resúmenes", "Multiplataforma (web, móvil, desktop)", "Colaboración en tiempo real"],
        cons: ["Algunas funciones de IA requieren plan de pago", "Menos conocido que otras herramientas"]
    },
    {
        name: "Whereby",
        category: "Trabajo Remoto",
        description: "Videollamadas profesionales sin descargar nada. Solo compartís el link y listo.",
        icon: "🎥",
        link: "https://whereby.com",
        bestFor: "Reuniones por video sin instalaciones ni cuentas de invitados",
        easeOfUse: "Muy fácil",
        pricingDetail: "Gratis hasta 100 participantes con límites; planes de pago para más funciones",
        rating: 8.3,
        speed: "rapida",
        difficulty: "facil",
        labels: [],
        pros: ["Sin instalaciones, funciona en navegador", "Sala permanente con link propio", "Fondo virtual y pantalla compartida"],
        cons: ["Grabación solo en planes de pago", "Funciones limitadas en versión gratis"]
    },

    // ── ESTUDIOS / EDUCACIÓN ───────────────────────
    {
        name: "QuillBot",
        category: "Estudios/Educación",
        description: "Parafraseá, resumí y corregí textos académicos con IA para que suenen más profesionales.",
        icon: "✍️",
        link: "https://quillbot.com",
        bestFor: "Parafrasear, resumir y mejorar textos académicos",
        easeOfUse: "Muy fácil",
        pricingDetail: "Gratis con límites; Premium para funciones avanzadas",
        rating: 8.8,
        speed: "rapida",
        difficulty: "facil",
        labels: ["🔥 Muy popular"],
        pros: ["Excelente para reescribir y mejorar textos", "Funciona en varios idiomas incluyendo español", "Extensión para Chrome disponible"],
        cons: ["Versión gratis limita el largo del texto", "Algunos modos de parafraseo solo en Premium"]
    },
    {
        name: "ChatPDF",
        category: "Estudios/Educación",
        description: "Subí cualquier PDF y chateá con él. Ideal para resumir papers, libros de texto y apuntes largos.",
        icon: "📄",
        link: "https://www.chatpdf.com",
        bestFor: "Resumir y hacer preguntas sobre documentos PDF",
        easeOfUse: "Muy fácil",
        pricingDetail: "Gratis con límite de PDFs al día; plan Plus de pago",
        rating: 8.9,
        speed: "rapida",
        difficulty: "facil",
        labels: ["🚀 IA nueva"],
        pros: ["Resumé cualquier PDF al instante", "Podés hacer preguntas específicas al documento", "Muy útil para estudiantes universitarios"],
        cons: ["Límite de páginas y PDFs en versión gratis", "No funciona con PDFs escaneados sin OCR"]
    },
    {
        name: "Consensus",
        category: "Estudios/Educación",
        description: "Buscador de papers científicos con IA que extrae conclusiones y te explica los estudios en lenguaje simple.",
        icon: "🔬",
        link: "https://consensus.app",
        bestFor: "Buscar evidencia científica y entender papers académicos",
        easeOfUse: "Fácil",
        pricingDetail: "Gratis con límite de búsquedas; plan Pro de pago",
        rating: 8.6,
        speed: "media",
        difficulty: "media",
        labels: ["🚀 IA nueva"],
        pros: ["Acceso a millones de papers científicos", "Resume y explica los estudios en lenguaje claro", "Muy útil para trabajos de investigación"],
        cons: ["Fuentes principalmente en inglés", "Búsquedas avanzadas requieren plan de pago"]
    },
    {
        name: "Elicit",
        category: "Estudios/Educación",
        description: "Asistente de investigación académica que encuentra y resume papers relevantes para tu tema.",
        icon: "🧪",
        link: "https://elicit.com",
        bestFor: "Investigación académica y revisión de literatura científica",
        easeOfUse: "Fácil",
        pricingDetail: "Gratis con límites; plan de pago para investigación intensiva",
        rating: 8.4,
        speed: "media",
        difficulty: "media",
        labels: [],
        pros: ["Encuentra papers relevantes automáticamente", "Resume resultados de múltiples estudios", "Ideal para tesis y monografías"],
        cons: ["Principalmente en inglés", "Requiere cuenta para acceder"]
    },
    {
        name: "Brainly",
        category: "Estudios/Educación",
        description: "Comunidad de millones de estudiantes donde podés hacer preguntas y obtener respuestas con explicaciones paso a paso.",
        icon: "🧠",
        link: "https://brainly.lat",
        bestFor: "Resolver dudas de materias escolares con explicaciones paso a paso",
        easeOfUse: "Muy fácil",
        pricingDetail: "Gratis con límites de uso diario; plan Plus de pago",
        rating: 8.1,
        speed: "rapida",
        difficulty: "facil",
        labels: ["🔥 Muy popular"],
        pros: ["Millones de respuestas en español", "Explicaciones paso a paso verificadas", "Cubre todas las materias escolares"],
        cons: ["Algunas respuestas pueden ser incorrectas", "Acceso ilimitado solo en plan de pago"]
    },

    // ── TAREAS DEL HOGAR ──────────────────────────
    {
        name: "Yummly",
        category: "Tareas del Hogar",
        description: "Recomendaciones de recetas personalizadas según tus gustos, restricciones alimenticias e ingredientes disponibles.",
        icon: "🍳",
        link: "https://www.yummly.com",
        bestFor: "Encontrar recetas según ingredientes disponibles y preferencias",
        easeOfUse: "Muy fácil",
        pricingDetail: "Gratis con funciones básicas; Pro de pago para más recetas",
        rating: 8.3,
        speed: "rapida",
        difficulty: "facil",
        labels: [],
        pros: ["Personaliza recetas según alergias y dieta", "Genera lista de compras automática", "Instrucciones paso a paso con fotos"],
        cons: ["Recetas mayormente en inglés", "Funciones premium de pago"]
    },
    {
        name: "Todoist",
        category: "Tareas del Hogar",
        description: "Gestor de tareas del hogar inteligente con recordatorios, fechas límite y filtros de prioridad.",
        icon: "✅",
        link: "https://todoist.com",
        bestFor: "Organizar tareas del hogar con recordatorios y prioridades",
        easeOfUse: "Muy fácil",
        pricingDetail: "Gratis hasta 5 proyectos; plan Pro de pago para familias",
        rating: 9.0,
        speed: "rapida",
        difficulty: "facil",
        labels: ["🔥 Muy popular"],
        pros: ["Interfaz limpia y muy intuitiva", "Recordatorios y fechas límite automáticos", "Sincroniza en todos tus dispositivos"],
        cons: ["Colaboración familiar requiere plan de pago", "Algunas vistas avanzadas son de pago"]
    },
    {
        name: "Cozi",
        category: "Tareas del Hogar",
        description: "Agenda familiar compartida con lista de compras, calendarios y recordatorios para toda la familia.",
        icon: "👨‍👩‍👧‍👦",
        link: "https://www.cozi.com",
        bestFor: "Organizar la familia con calendarios y listas compartidas",
        easeOfUse: "Muy fácil",
        pricingDetail: "Gratis con publicidades; Gold de pago sin publicidades",
        rating: 8.2,
        speed: "rapida",
        difficulty: "facil",
        labels: [],
        pros: ["Calendario familiar sincronizado", "Lista de compras compartida en tiempo real", "Recordatorios de actividades escolares"],
        cons: ["Versión gratis incluye publicidades", "Diseño algo desactualizado"]
    },
    {
        name: "FoodAI",
        category: "Tareas del Hogar",
        description: "Sacá una foto a lo que tenés en la heladera y la IA te sugiere recetas con esos ingredientes.",
        icon: "📸",
        link: "https://www.whatscooking.ai",
        bestFor: "Generar recetas con los ingredientes que tenés en casa",
        easeOfUse: "Muy fácil",
        pricingDetail: "Gratis con uso diario limitado",
        rating: 7.9,
        speed: "rapida",
        difficulty: "facil",
        labels: ["🚀 IA nueva"],
        pros: ["Usa foto de ingredientes para sugerir recetas", "Reduce el desperdicio de alimentos", "Muy creativo con los ingredientes disponibles"],
        cons: ["Reconocimiento de imágenes a veces impreciso", "Pocas recetas en español"]
    },
    {
        name: "BrightNest",
        category: "Tareas del Hogar",
        description: "Consejos y planes de limpieza y mantenimiento del hogar personalizados según el tipo de vivienda.",
        icon: "🏡",
        link: "https://brightnest.com",
        bestFor: "Planificar el mantenimiento y limpieza del hogar",
        easeOfUse: "Muy fácil",
        pricingDetail: "100% gratis",
        rating: 7.8,
        speed: "rapida",
        difficulty: "facil",
        labels: [],
        pros: ["Planes de limpieza personalizados", "100% gratuito", "Tips de decoración y organización"],
        cons: ["Sin app en español", "Actualización de contenido poco frecuente"]
    },

    // ── CREATIVIDAD / DISEÑO ──────────────────────
    {
        name: "Midjourney",
        category: "Creatividad/Diseño",
        description: "Generador de imágenes con IA de altísima calidad artística. Escribís una descripción y crea imágenes espectaculares.",
        icon: "🎨",
        link: "https://www.midjourney.com",
        isPro: true,
        bestFor: "Crear imágenes artísticas de alta calidad con IA",
        easeOfUse: "Requiere aprender prompts; interfaz en Discord",
        pricingDetail: "Desde USD 10/mes; sin versión gratis actualmente",
        rating: 9.5,
        speed: "media",
        difficulty: "media",
        labels: ["🔥 Muy popular", "💎 Premium"],
        pros: ["Calidad artística excepcional", "Enorme comunidad activa", "Estilos visuales muy variados"],
        cons: ["Sin versión gratuita", "Interfaz vía Discord puede ser confusa al inicio"]
    },
    {
        name: "Leonardo AI",
        category: "Creatividad/Diseño",
        description: "Generador de imágenes con IA con versión gratis muy generosa. Ideal para contenido de redes sociales.",
        icon: "🖼️",
        link: "https://leonardo.ai",
        bestFor: "Crear imágenes para redes sociales y proyectos creativos",
        easeOfUse: "Fácil",
        pricingDetail: "150 créditos gratis por día; planes de pago para más",
        rating: 9.0,
        speed: "rapida",
        difficulty: "facil",
        labels: ["🚀 IA nueva", "🔥 Muy popular"],
        pros: ["150 generaciones gratis al día", "Interfaz web intuitiva sin Discord", "Modelos especializados para distintos estilos"],
        cons: ["Calidad ligeramente inferior a Midjourney", "Los créditos gratis se agotan rápido en uso intensivo"]
    },
    {
        name: "Suno AI",
        category: "Creatividad/Diseño",
        description: "Creá canciones completas con voz y música escribiendo solo una descripción. IA musical asombrosa.",
        icon: "🎵",
        link: "https://suno.com",
        bestFor: "Crear música y canciones completas con IA",
        easeOfUse: "Muy fácil",
        pricingDetail: "50 créditos gratis al día; planes de pago para más",
        rating: 9.1,
        speed: "rapida",
        difficulty: "facil",
        labels: ["🚀 IA nueva", "🔥 Muy popular"],
        pros: ["Crea canciones completas en segundos", "Incluye voz, letra e instrumentación", "Versión gratis muy generosa"],
        cons: ["Canciones generadas con usos comerciales requieren plan de pago", "Calidad varía según el género musical"]
    },
    {
        name: "ElevenLabs",
        category: "Creatividad/Diseño",
        description: "Convertí texto en voz ultrarealista o cloná tu propia voz. Ideal para podcasts, videos y locuciones.",
        icon: "🎙️",
        link: "https://elevenlabs.io",
        bestFor: "Generar voces realistas y locuciones profesionales con IA",
        easeOfUse: "Fácil",
        pricingDetail: "10.000 caracteres gratis/mes; planes de pago para más",
        rating: 9.3,
        speed: "rapida",
        difficulty: "facil",
        labels: ["🚀 IA nueva", "🔥 Muy popular"],
        pros: ["Voces ultrarrealistas en español e inglés", "Clonación de voz propia disponible", "API disponible para desarrolladores"],
        cons: ["Créditos gratis se agotan rápido", "Uso comercial requiere plan de pago"]
    },
    {
        name: "Remove.bg",
        category: "Creatividad/Diseño",
        description: "Eliminá el fondo de cualquier foto en segundos con IA. Sin Photoshop ni habilidades de diseño.",
        icon: "✂️",
        link: "https://www.remove.bg",
        bestFor: "Eliminar fondos de fotos de forma automática",
        easeOfUse: "Muy fácil",
        pricingDetail: "Gratis con resolución reducida; créditos de pago para alta resolución",
        rating: 9.4,
        speed: "rapida",
        difficulty: "facil",
        labels: ["🔥 Muy popular"],
        pros: ["Resultados precisos en segundos", "Sin registro necesario para empezar", "Funciona perfectamente con fotos de personas"],
        cons: ["Descarga en alta resolución requiere créditos de pago", "Resultados pueden fallar con fondos complejos"]
    },

    // ── TRÁMITES Y CONSULTAS ──────────────────────
    {
        name: "SmallPDF",
        category: "Trámites y Consultas",
        description: "Convertí, comprimí, firmá y editá PDFs directamente desde el navegador sin instalar nada.",
        icon: "📑",
        link: "https://smallpdf.com",
        bestFor: "Editar, comprimir y convertir documentos PDF online",
        easeOfUse: "Muy fácil",
        pricingDetail: "2 documentos gratis al día; plan Pro de pago para ilimitados",
        rating: 8.8,
        speed: "rapida",
        difficulty: "facil",
        labels: ["🔥 Muy popular"],
        pros: ["Sin instalación, funciona en navegador", "Cubre todas las necesidades básicas de PDF", "Firma digital integrada"],
        cons: ["Limitado a 2 tareas gratis por día", "Ilimitado solo en plan de pago"]
    },
    {
        name: "ILovePDF",
        category: "Trámites y Consultas",
        description: "Suite completa para gestionar PDFs: unir, dividir, comprimir, convertir y proteger con contraseña.",
        icon: "❤️",
        link: "https://www.ilovepdf.com",
        bestFor: "Gestionar, editar y convertir archivos PDF para trámites",
        easeOfUse: "Muy fácil",
        pricingDetail: "Gratis con archivos de hasta 15 MB; Premium para archivos grandes",
        rating: 8.6,
        speed: "rapida",
        difficulty: "facil",
        labels: [],
        pros: ["Herramientas de PDF completamente gratis", "Funciona directamente en navegador", "Disponible en español"],
        cons: ["Límite de tamaño de archivo en versión gratis", "Sin funciones de IA avanzada"]
    },
    {
        name: "ANSES Digital",
        category: "Trámites y Consultas",
        description: "Realizá trámites del ANSES sin ir a la sucursal: consultas de aportes, turnos, historia laboral y más.",
        icon: "🏛️",
        link: "https://mi.anses.gob.ar",
        bestFor: "Gestionar trámites del ANSES de forma online desde casa",
        easeOfUse: "Fácil con CUIL y clave ANSES",
        pricingDetail: "100% gratuito y oficial",
        rating: 8.0,
        speed: "rapida",
        difficulty: "facil",
        labels: ["🏅 Oficial"],
        pros: ["Acceso 24/7 sin ir a la sucursal", "Historial laboral y aportes online", "Turnos para sucursal desde la app"],
        cons: ["A veces inestable en horas pico", "Requiere clave ANSES o CUIL para ingresar"]
    },
    {
        name: "Renaper Digital",
        category: "Trámites y Consultas",
        description: "Accedé a tu DNI digital, validación de identidad y trámites del Registro Civil desde tu celular.",
        icon: "🪪",
        link: "https://www.argentina.gob.ar/renaper",
        bestFor: "Trámites de identidad, DNI digital y validación biométrica",
        easeOfUse: "Fácil con DNI argentino",
        pricingDetail: "100% gratuito y oficial",
        rating: 7.9,
        speed: "rapida",
        difficulty: "facil",
        labels: ["🏅 Oficial"],
        pros: ["DNI digital válido legalmente", "Validación de identidad online", "Trámites de matrimonio y nacimiento online"],
        cons: ["App puede fallar en algunos dispositivos", "Requiere conexión estable a internet"]
    },
    {
        name: "Notion (Gestión de Trámites)",
        category: "Trámites y Consultas",
        description: "Organizá tus documentos, vencimientos de trámites y carpetas de papeles con plantillas inteligentes.",
        icon: "🗃️",
        link: "https://notion.so",
        bestFor: "Organizar documentos, vencimientos y papeles del hogar",
        easeOfUse: "Fácil con plantillas",
        pricingDetail: "Gratis para uso personal; planes de pago para equipos",
        rating: 8.7,
        speed: "rapida",
        difficulty: "facil",
        labels: ["🔥 Muy popular"],
        pros: ["Plantillas para organizar documentos familiares", "Recordatorios de vencimientos", "Acceso desde cualquier dispositivo"],
        cons: ["Curva inicial de aprendizaje", "Sin funciones de trámites gubernamentales directos"]
    },

    // ── IA AVANZADA ────────────────────────────────
    {
        name: "Claude.ai",
        category: "IA Avanzada",
        description: "Asistente de IA de Anthropic con excelente capacidad de análisis, redacción larga y razonamiento ético.",
        icon: "🤍",
        link: "https://claude.ai",
        bestFor: "Análisis profundo, textos largos y razonamiento complejo",
        easeOfUse: "Muy fácil",
        pricingDetail: "Gratis con límites; Claude Pro de pago para uso intensivo",
        rating: 9.4,
        speed: "media",
        difficulty: "facil",
        labels: ["🚀 IA nueva", "🔥 Muy popular"],
        pros: ["Razonamiento muy profundo y preciso", "Excelente para textos largos y análisis", "Respuestas más cuidadosas y éticas que competidores"],
        cons: ["Versión gratis tiene límite de mensajes diarios", "Conocimiento con fecha de corte"]
    },
    {
        name: "Grok",
        category: "IA Avanzada",
        description: "IA de xAI (Elon Musk) con acceso a información en tiempo real desde X (Twitter) y respuestas directas.",
        icon: "🌀",
        link: "https://grok.com",
        bestFor: "Consultas con información actualizada en tiempo real",
        easeOfUse: "Muy fácil",
        pricingDetail: "Gratis con límites; Premium X para acceso completo",
        rating: 8.7,
        speed: "rapida",
        difficulty: "facil",
        labels: ["🚀 IA nueva"],
        pros: ["Acceso a información de X en tiempo real", "Sin filtros excesivos en las respuestas", "Versión gratuita disponible"],
        cons: ["Requiere cuenta en X (Twitter)", "Calidad variable en consultas especializadas"]
    },
    {
        name: "Mistral AI",
        category: "IA Avanzada",
        description: "Modelos de IA europeos de alto rendimiento, open source y con foco en privacidad. Alternativa sólida a GPT.",
        icon: "💨",
        link: "https://mistral.ai",
        bestFor: "IA potente con privacidad y opciones open source",
        easeOfUse: "Fácil vía web; técnico para uso de API",
        pricingDetail: "Chat web gratis; API de pago según uso",
        rating: 8.8,
        speed: "rapida",
        difficulty: "media",
        labels: ["🚀 IA nueva"],
        pros: ["Open source, privado y europeo", "Modelos muy rápidos y eficientes", "Excelente relación calidad-precio en API"],
        cons: ["Menos conocido que ChatGPT", "Interfaz web más básica"]
    },
    {
        name: "Poe",
        category: "IA Avanzada",
        description: "Plataforma que reúne los mejores modelos de IA (ChatGPT, Claude, Gemini, Llama) en un solo lugar.",
        icon: "🌐",
        link: "https://poe.com",
        bestFor: "Comparar y usar múltiples modelos de IA desde una sola app",
        easeOfUse: "Muy fácil",
        pricingDetail: "Gratis con créditos diarios; plan de pago para uso ilimitado",
        rating: 8.9,
        speed: "rapida",
        difficulty: "facil",
        labels: ["🔥 Muy popular"],
        pros: ["Acceso a múltiples IAs en un solo lugar", "Podés crear bots personalizados", "Versión gratis incluye GPT-4 y Claude"],
        cons: ["Créditos gratis limitados para modelos premium", "Requiere cuenta para usar"]
    },
    {
        name: "Jan.ai",
        category: "IA Avanzada",
        description: "Alternativa local a LM Studio. Corré modelos de IA completamente offline en tu computadora. 100% privado.",
        icon: "🔒",
        link: "https://jan.ai",
        bestFor: "Ejecutar modelos de IA localmente sin enviar datos a la nube",
        easeOfUse: "Requiere algo de configuración inicial",
        pricingDetail: "100% gratuito y open source",
        rating: 8.3,
        speed: "potente",
        difficulty: "avanzada",
        labels: ["🚀 IA nueva"],
        pros: ["100% privado, sin datos a servidores externos", "Open source y gratuito", "Interfaz más amigable que Ollama"],
        cons: ["Requiere hardware decente (GPU recomendada)", "Modelos más grandes ocupan mucho espacio en disco"]
    }
];

// 1.b Mapa de categorías a su "slug" de color (usado en CSS vía data-category-color)
const categoryColorMap = {
    "Trabajo Remoto": "remoto",
    "Estudios/Educación": "educacion",
    "Tareas del Hogar": "hogar",
    "Creatividad/Diseño": "creatividad",
    "Trámites y Consultas": "tramites",
    "IA Avanzada": "avanzada"
};

// 2a. Helper: genera el HTML del ícono oficial de cada herramienta
function toolIconHtml(tool) {
    try {
        const domain = new URL(tool.link).hostname.replace('www.', '');
        const src = `https://logo.clearbit.com/${domain}?size=64`;
        const fallback = `https://www.google.com/s2/favicons?sz=64&domain_url=${encodeURIComponent(tool.link)}`;
        return `<img src="${src}" alt="${tool.name}" class="tool-logo-img" loading="lazy"
            onerror="this.onerror=null;this.src='${fallback}';this.onerror=function(){this.style.display='none';this.insertAdjacentHTML('afterend','<span class=\\'tool-icon-emoji\\'>${tool.icon}</span>')}">`;
    } catch(e) {
        return `<span class="tool-icon-emoji">${tool.icon}</span>`;
    }
}

// 2. Función para renderizar las tarjetas
function renderTools(filteredTools, containerId = 'tool-cards-container') {
    const container = document.getElementById(containerId);
    if (!container) return;
    container.innerHTML = '';

    if (filteredTools.length === 0) {
        container.innerHTML = `<p class="col-span-full text-center text-gray-400 italic py-8">No encontramos herramientas con ese criterio. Probá con otra palabra o categoría.</p>`;
        return;
    }

    // Recuperamos los favoritos actuales
    const favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];

    filteredTools.forEach((tool, index) => {
        // Lógica de etiquetas
        const proLabel = tool.isPro ?
            '<span class="badge-pro">⚡ PRO</span>' : '';

        const pricingLabel = tool.isPro ?
            '<span class="badge-pricing is-freemium">Freemium</span>' :
            '<span class="badge-pricing is-free">Gratis</span>';

        // Color por categoría
        const colorSlug = categoryColorMap[tool.category] || '';
        const categoryTag = `<span class="category-tag">${tool.category}</span>`;

        // Verificamos si es favorito para elegir el icono
        const esFavorito = favoritos.includes(tool.name);
        const favButton = `
            <button onclick="toggleFavorito('${tool.name}', this)" class="fav-btn ${esFavorito ? 'is-fav' : ''}" aria-label="Marcar como favorito">
                ${esFavorito ? '⭐' : '☆'}
            </button>
        `;

        // Rating: estrellas + número
        const ratingHtml = tool.rating ? (() => {
            const r = tool.rating;
            const full = Math.floor(r / 2);
            const half = (r / 2 - full) >= 0.4 ? 1 : 0;
            const empty = 5 - full - half;
            const stars = '⭐'.repeat(full) + (half ? '✨' : '') + '☆'.repeat(empty);
            return `<div class="tool-rating"><span class="rating-stars">${stars}</span><span class="rating-score">${r}</span></div>`;
        })() : '';

        // Velocidad
        const speedMap = { rapida: '⚡ Muy rápida', media: '⚡⚡ Media', potente: '⚡⚡⚡ Muy potente' };
        const speedHtml = tool.speed ? `<span class="tool-badge badge-speed">${speedMap[tool.speed] || tool.speed}</span>` : '';

        // Dificultad
        const diffMap = { facil: '🟢 Fácil', media: '🟡 Media', avanzada: '🔴 Avanzada' };
        const diffHtml = tool.difficulty ? `<span class="tool-badge badge-diff">${diffMap[tool.difficulty] || tool.difficulty}</span>` : '';

        // Etiquetas especiales
        const labelsHtml = (tool.labels && tool.labels.length > 0)
            ? `<div class="tool-labels">${tool.labels.map(l => `<span class="tool-label">${l}</span>`).join('')}</div>`
            : '';

        const card = document.createElement('div');
        card.className = "tool-card";
        card.style.animationDelay = `${(index % 12) * 0.06}s`;
        if (colorSlug) card.setAttribute('data-category-color', colorSlug);

        card.innerHTML = `
            ${proLabel}
            ${pricingLabel}
            ${favButton}
            <div class="tool-card-inner">
                <div class="tool-icon-badge">${toolIconHtml(tool)}</div>
                ${categoryTag}
                <h3 class="text-xl font-bold mb-2">${tool.name}</h3>
                ${ratingHtml}
                ${labelsHtml}
                <div class="tool-meta-badges">${speedHtml}${diffHtml}</div>
                <p class="text-gray-600 mb-4">${tool.description}</p>
                <a href="${tool.link}" target="_blank" rel="noopener" class="tool-try-btn">
                    Probar herramienta <span class="arrow">→</span>
                </a>
            </div>
        `;

        container.appendChild(card);
    });
}

// 3. Variables de Estado
let currentCategory = 'all';
let searchQuery = '';
let currentDifficulty = 'all';
let currentSpeed = 'all';

// 4. Lógica de Filtrado y Búsqueda combinada
function filterAndSearch() {
    const filtered = tools.filter(tool => {
        const matchesCategory = currentCategory === 'all' || tool.category === currentCategory;
        const matchesSearch = tool.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                             tool.description.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesDiff = currentDifficulty === 'all' || tool.difficulty === currentDifficulty;
        const matchesSpeed = currentSpeed === 'all' || tool.speed === currentSpeed;
        return matchesCategory && matchesSearch && matchesDiff && matchesSpeed;
    });
    renderTools(filtered);
}

// 5. Eventos de Categoría
const filterButtons = document.querySelectorAll('.category-btn');
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        filterButtons.forEach(btn => {
            btn.classList.remove('bg-blue-500', 'text-white');
            btn.classList.add('bg-gray-200', 'text-gray-800');
        });
        button.classList.remove('bg-gray-200', 'text-gray-800');
        button.classList.add('bg-blue-500', 'text-white');

        currentCategory = button.getAttribute('data-category');
        filterAndSearch();
    });
});

// 6. Evento de Búsqueda
const searchInput = document.getElementById('search-input');
if (searchInput) {
    searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value;
        filterAndSearch();
    });
}

// 6.a Filtros rápidos (dificultad y velocidad)
document.querySelectorAll('.qf-diff').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.qf-diff').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentDifficulty = btn.getAttribute('data-diff');
        filterAndSearch();
    });
});
document.querySelectorAll('.qf-speed').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.qf-speed').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentSpeed = btn.getAttribute('data-speed');
        filterAndSearch();
    });
});

// 6.b Autocompletado inteligente del buscador
const autocompleteList = document.getElementById('autocomplete-list');
let acActiveIndex = -1;
let acCurrentMatches = [];

function renderAutocomplete(query) {
    if (!autocompleteList) return;

    const q = query.trim().toLowerCase();
    if (q.length < 2) {
        closeAutocomplete();
        return;
    }

    // Buscamos coincidencias por nombre primero (más relevante), luego por categoría/descripción
    const porNombre = tools.filter(t => t.name.toLowerCase().includes(q));
    const porOtro = tools.filter(t =>
        !porNombre.includes(t) &&
        (t.category.toLowerCase().includes(q) || t.description.toLowerCase().includes(q))
    );
    acCurrentMatches = [...porNombre, ...porOtro].slice(0, 6);

    if (acCurrentMatches.length === 0) {
        closeAutocomplete();
        return;
    }

    autocompleteList.innerHTML = acCurrentMatches.map((tool, i) => `
        <div class="autocomplete-item" data-index="${i}" onclick="seleccionarAutocomplete(${i})">
            <span class="ac-icon">${tool.icon}</span>
            <span>${tool.name}</span>
            <span class="ac-cat">${tool.category}</span>
        </div>
    `).join('');

    acActiveIndex = -1;
    autocompleteList.classList.add('is-open');
}

function closeAutocomplete() {
    if (!autocompleteList) return;
    autocompleteList.classList.remove('is-open');
    autocompleteList.innerHTML = '';
    acCurrentMatches = [];
    acActiveIndex = -1;
}

function seleccionarAutocomplete(index) {
    const tool = acCurrentMatches[index];
    if (!tool) return;
    searchInput.value = tool.name;
    searchQuery = tool.name;
    filterAndSearch();
    guardarEnHistorial(tool.name);
    closeAutocomplete();
    document.getElementById('categorias')?.scrollIntoView({ behavior: 'smooth' });
}

if (searchInput) {
    searchInput.addEventListener('input', (e) => {
        renderAutocomplete(e.target.value);
    });

    // Navegación del autocompletado con teclado (flechas + Enter + Escape)
    searchInput.addEventListener('keydown', (e) => {
        if (!autocompleteList || !autocompleteList.classList.contains('is-open')) return;
        const items = autocompleteList.querySelectorAll('.autocomplete-item');

        if (e.key === 'ArrowDown') {
            e.preventDefault();
        acActiveIndex = Math.min(acActiveIndex + 1, items.length - 1);
    } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        acActiveIndex = Math.max(acActiveIndex - 1, 0);
    } else if (e.key === 'Enter') {
        if (acActiveIndex >= 0) {
            e.preventDefault();
            seleccionarAutocomplete(acActiveIndex);
        }
        return;
    } else if (e.key === 'Escape') {
        closeAutocomplete();
        return;
    } else {
        return;
    }

    items.forEach((item, i) => item.classList.toggle('is-active', i === acActiveIndex));
    });
}

// Cerrar el autocompletado al hacer click afuera
document.addEventListener('click', (e) => {
    if (autocompleteList && !e.target.closest('.search-wrapper')) {
        closeAutocomplete();
    }
});

// 7. Lógica de Sugerir Herramienta
const suggestBtn = document.getElementById('suggest-tool-btn');
const suggestionSection = document.getElementById('suggestion-section');

if (suggestBtn && suggestionSection) {
    suggestBtn.addEventListener('click', () => {
        suggestionSection.classList.toggle('hidden');

        if (!suggestionSection.classList.contains('hidden')) {
            suggestionSection.scrollIntoView({ behavior: 'smooth' });
            suggestBtn.innerHTML = '❌ Cerrar Formulario';
            suggestBtn.classList.replace('bg-green-600', 'bg-red-600');
            suggestBtn.classList.replace('hover:bg-green-700', 'hover:bg-red-700');
        } else {
            suggestBtn.innerHTML = '💡 Sugerir Herramienta';
            suggestBtn.classList.replace('bg-red-600', 'bg-green-600');
            suggestBtn.classList.replace('hover:bg-red-700', 'hover:bg-green-700');
        }
    });
}

// 8. Lógica de FAQ (Acordeón)
const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        const isActive = question.classList.contains('active');

        // Cerrar todas las otras preguntas
        faqQuestions.forEach(q => {
            q.classList.remove('active');
            q.nextElementSibling.classList.add('hidden');
        });

        // Alternar la pregunta actual
        if (!isActive) {
            question.classList.add('active');
            answer.classList.remove('hidden');
        }
    });
});

// 9. Lógica de Modo Oscuro
const darkModeToggle = document.getElementById('dark-mode-toggle');
const navDarkToggle = document.getElementById('nav-dark-toggle');
const body = document.body;

function syncDarkModeButtons(isDark) {
    if (darkModeToggle) {
        const icon = darkModeToggle.querySelector('.hero-btn-icon-dark');
        const label = darkModeToggle.querySelector('.hero-btn-label-dark');
        if (icon) icon.className = isDark ? 'fa-solid fa-sun hero-btn-icon-dark' : 'fa-solid fa-moon hero-btn-icon-dark';
        if (label) label.textContent = isDark ? 'Modo Claro' : 'Modo Oscuro';
    }
    if (navDarkToggle) navDarkToggle.innerText = isDark ? '☀️' : '🌙';
}

// Verificar preferencia guardada
if (localStorage.getItem('dark-mode') === 'enabled') {
    body.classList.add('dark-mode');
}
syncDarkModeButtons(body.classList.contains('dark-mode'));

function handleDarkModeToggle() {
    body.classList.toggle('dark-mode');
    const isDark = body.classList.contains('dark-mode');
    localStorage.setItem('dark-mode', isDark ? 'enabled' : 'disabled');
    syncDarkModeButtons(isDark);
}

if (darkModeToggle) darkModeToggle.addEventListener('click', handleDarkModeToggle);
if (navDarkToggle) navDarkToggle.addEventListener('click', handleDarkModeToggle);

// 10. Sección de Favoritos del usuario
function renderFavoritesSection() {
    const favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];
    const favSection = document.getElementById('favorites-section');
    const favTools = tools.filter(t => favoritos.includes(t.name));

    if (!favSection) return;

    if (favTools.length === 0) {
        favSection.classList.add('is-empty');
        const favContainer = document.getElementById('favorites-container'); if (favContainer) favContainer.innerHTML = '';
    } else {
        favSection.classList.remove('is-empty');
        renderTools(favTools, 'favorites-container');
    }
}

// 11. Sección de Tendencias (herramientas PRO + algunas destacadas)
function renderTrending() {
    const container = document.getElementById('trending-container');
    if (!container) return;

    const destacadas = tools.filter(t => t.isPro).slice(0, 8);
    container.innerHTML = '';

    const medalData = [
        { emoji: '🥇', cls: 'medal--gold',   label: '1.º puesto' },
        { emoji: '🥈', cls: 'medal--silver', label: '2.º puesto' },
        { emoji: '🥉', cls: 'medal--bronze', label: '3.º puesto' },
    ];

    destacadas.forEach((tool, index) => {
        const medal = index < 3
            ? `<div class="trend-medal ${medalData[index].cls}" title="${medalData[index].label}">${medalData[index].emoji}</div>`
            : `<span class="trend-rank mb-2">#${index + 1}</span>`;

        const card = document.createElement('a');
        card.href = tool.link;
        card.target = '_blank';
        card.rel = 'noopener';
        card.className = 'trend-card block';
        card.innerHTML = `
            <div class="tool-card h-full">
                <div class="tool-card-inner flex flex-col">
                    ${medal}
                    <div class="tool-icon-badge">${toolIconHtml(tool)}</div>
                    <h3 class="font-bold mb-1">${tool.name}</h3>
                    <p class="text-sm text-gray-500 clamp-3-lines">${tool.description}</p>
                </div>
            </div>
        `;
        container.appendChild(card);
    });
}

// 12. Historial de búsquedas recientes (chips bajo el buscador del hero)
function getHistorial() {
    return JSON.parse(localStorage.getItem('historial-busquedas')) || [];
}

function guardarEnHistorial(termino) {
    if (!termino || termino.trim().length < 2) return;
    let historial = getHistorial();
    historial = historial.filter(h => h.toLowerCase() !== termino.toLowerCase());
    historial.unshift(termino);
    historial = historial.slice(0, 6);
    localStorage.setItem('historial-busquedas', JSON.stringify(historial));
    renderHistorial();
}

function renderHistorial() {
    const cont = document.getElementById('history-chips');
    if (!cont) return;
    const historial = getHistorial();
    cont.innerHTML = historial.map(term =>
        `<button class="history-chip btn-press" onclick="aplicarHistorial('${term.replace(/'/g, "\\'")}')">🕘 ${term}</button>`
    ).join('');
}

function aplicarHistorial(term) {
    searchInput.value = term;
    searchQuery = term;
    filterAndSearch();
    closeAutocomplete();
    document.getElementById('categorias')?.scrollIntoView({ behavior: 'smooth' });
}

// Guardamos en el historial cuando el usuario deja de tipear (debounce simple)
let historialTimeout;
if (searchInput) {
    searchInput.addEventListener('input', () => {
        clearTimeout(historialTimeout);
        historialTimeout = setTimeout(() => guardarEnHistorial(searchInput.value), 900);
    });
}

// 13. Animación de aparición al hacer scroll (IntersectionObserver)
function initScrollReveal() {
    const elementos = document.querySelectorAll('.scroll-reveal');
    if (!('IntersectionObserver' in window)) {
        elementos.forEach(el => el.classList.add('is-visible'));
        return;
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.01, rootMargin: '0px 0px -10% 0px' });

    elementos.forEach(el => observer.observe(el));

    // Red de seguridad: si por algún motivo un elemento queda fuera de cualquier
    // disparo (ventanas muy chicas, secciones más altas que el viewport, etc.),
    // lo revelamos igual a los 1.5s para que nunca quede contenido invisible.
    setTimeout(() => {
        document.querySelectorAll('.scroll-reveal:not(.is-visible)').forEach(el => {
            el.classList.add('is-visible');
        });
    }, 1500);
}

// 14. Navbar sticky: aparece luego de pasar el hero
function initStickyNav() {
    const nav = document.getElementById('sticky-nav');
    const heroHeader = document.querySelector('.hero-header');
    if (!nav || !heroHeader) return;

    const onScroll = () => {
        const heroBottom = heroHeader.getBoundingClientRect().bottom;
        nav.classList.toggle('is-visible', heroBottom < 0);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
}

// 15. Resaltar el link activo de la navbar según la sección visible
function initNavLinkHighlight() {
    const sections = ['categorias', 'tendencias', 'favoritos', 'comparador', 'faq']
        .map(id => document.getElementById(id))
        .filter(Boolean);
    const navLinks = document.querySelectorAll('.sticky-nav .nav-link[href^="#"]');
    if (!sections.length || !navLinks.length || !('IntersectionObserver' in window)) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                navLinks.forEach(link => {
                    link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`);
                });
            }
        });
    }, { threshold: 0.4 });

    sections.forEach(sec => observer.observe(sec));
}

// 16. Contadores animados en el hero
function animarContador(el, destino, duracionMs = 1400) {
    const inicio = 0;
    const inicioTime = performance.now();

    function paso(ahora) {
        const progreso = Math.min((ahora - inicioTime) / duracionMs, 1);
        // Easing suave (ease-out) para que no se sienta mecánico
        const eased = 1 - Math.pow(1 - progreso, 3);
        const valorActual = Math.round(inicio + (destino - inicio) * eased);
        el.textContent = valorActual.toLocaleString('es-AR');

        if (progreso < 1) {
            requestAnimationFrame(paso);
        } else {
            el.textContent = destino.toLocaleString('es-AR');
        }
    }

    requestAnimationFrame(paso);
}

function initHeroCounters() {
    const elTools = document.getElementById('stat-tools');
    const elCategories = document.getElementById('stat-categories');
    const elFree = document.getElementById('stat-free');
    if (!elTools || !elCategories || !elFree) return;

    const totalTools = tools.length;
    const totalCategories = new Set(tools.map(t => t.category)).size;
    const totalFree = tools.filter(t => !t.isPro).length;

    elTools.setAttribute('data-target', totalTools);
    elCategories.setAttribute('data-target', totalCategories);
    elFree.setAttribute('data-target', totalFree);

    let yaAnimado = false;
    const heroStats = document.querySelector('.hero-stats');
    if (!heroStats) return;

    if (!('IntersectionObserver' in window)) {
        animarContador(elTools, totalTools);
        animarContador(elCategories, totalCategories);
        animarContador(elFree, totalFree);
        return;
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !yaAnimado) {
                yaAnimado = true;
                animarContador(elTools, totalTools);
                animarContador(elCategories, totalCategories);
                animarContador(elFree, totalFree);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });

    observer.observe(heroStats);
}

// 18. Red de nodos animada en el hero (estilo Vercel/OpenAI)
function initHeroNetwork() {
    const canvas = document.getElementById('hero-network');
    const heroHeader = document.querySelector('.hero-header');
    if (!canvas || !heroHeader) return;

    const ctx = canvas.getContext('2d');
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let width, height, nodos = [];
    let animando = true;

    // Menos nodos en pantallas chicas para no afectar el rendimiento en mobile
    function calcularCantidadNodos() {
        const area = width * height;
        const densidad = window.innerWidth < 640 ? 14000 : 9000;
        return Math.min(90, Math.max(20, Math.round(area / densidad)));
    }

    function crearNodos() {
        const cantidad = calcularCantidadNodos();
        nodos = Array.from({ length: cantidad }, () => ({
            x: Math.random() * width,
            y: Math.random() * height,
            vx: (Math.random() - 0.5) * 0.35,
            vy: (Math.random() - 0.5) * 0.35,
            r: Math.random() * 1.6 + 0.8
        }));
    }

    function resize() {
        const rect = heroHeader.getBoundingClientRect();
        width = canvas.width = rect.width;
        height = canvas.height = rect.height;
        crearNodos();
    }

    const DISTANCIA_CONEXION = 130;

    function dibujar() {
        ctx.clearRect(0, 0, width, height);

        // Movemos cada nodo y lo hacemos "rebotar" en los bordes
        nodos.forEach(n => {
            n.x += n.vx;
            n.y += n.vy;
            if (n.x <= 0 || n.x >= width) n.vx *= -1;
            if (n.y <= 0 || n.y >= height) n.vy *= -1;
        });

        // Líneas entre nodos cercanos (con opacidad según distancia)
        for (let i = 0; i < nodos.length; i++) {
            for (let j = i + 1; j < nodos.length; j++) {
                const dx = nodos[i].x - nodos[j].x;
                const dy = nodos[i].y - nodos[j].y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < DISTANCIA_CONEXION) {
                    const opacidad = (1 - dist / DISTANCIA_CONEXION) * 0.35;
                    ctx.strokeStyle = `rgba(147, 197, 253, ${opacidad})`;
                    ctx.lineWidth = 1;
                    ctx.beginPath();
                    ctx.moveTo(nodos[i].x, nodos[i].y);
                    ctx.lineTo(nodos[j].x, nodos[j].y);
                    ctx.stroke();
                }
            }
        }

        // Nodos (puntos brillantes)
        nodos.forEach(n => {
            ctx.beginPath();
            ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(191, 219, 254, 0.85)';
            ctx.fill();
        });

        if (animando) requestAnimationFrame(dibujar);
    }

    resize();

    // Recalculamos una vez más cuando todo (fuentes, imagen de fondo) terminó de cargar,
    // por si el alto del hero cambió levemente respecto a la primera medición
    window.addEventListener('load', resize, { once: true });

    // Si el usuario prefiere menos movimiento, dibujamos un solo frame estático y no animamos
    if (prefersReducedMotion) {
        dibujar();
        animando = false;
    } else {
        requestAnimationFrame(dibujar);
    }

    // Pausamos la animación cuando la pestaña no está visible, para no gastar batería/CPU
    document.addEventListener('visibilitychange', () => {
        animando = !document.hidden && !prefersReducedMotion;
        if (animando) requestAnimationFrame(dibujar);
    });

    // Recalculamos en resize, con un pequeño debounce para no recrear nodos en cada pixel
    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(resize, 250);
    });
}

// 20. Comparador de Herramientas
// ------------------------------------------------------

// Comparaciones armadas (curadas) — solo usamos nombres que ya existen en "tools"
const comparacionesCuradas = [
    { titulo: "🤖 Asistentes de IA generales", nombres: ["ChatGPT", "Gemini Advanced", "Claude Code"] },
    { titulo: "🎨 Diseño y presentaciones", nombres: ["Canva", "CapCut", "Photopea"] },
    { titulo: "📋 Organización de tareas", nombres: ["Trello", "Microsoft To Do", "Google Keep"] },
];

function getToolByName(nombre) {
    return tools.find(t => t.name === nombre);
}

// Pobla los 3 selectores con todas las herramientas, agrupadas por categoría
function poblarSelectoresComparador() {
    const selects = ['compare-select-1', 'compare-select-2', 'compare-select-3'];
    const categorias = [...new Set(tools.map(t => t.category))];

    selects.forEach((id, idx) => {
        const select = document.getElementById(id);
        if (!select) return;

        const placeholder = idx === 2 ? '+ Agregar una tercera (opcional)' : `Elegí la herramienta ${idx + 1}`;
        let html = `<option value="">${placeholder}</option>`;

        categorias.forEach(cat => {
            const toolsDeCategoria = tools.filter(t => t.category === cat);
            html += `<optgroup label="${cat}">`;
            html += toolsDeCategoria.map(t => `<option value="${t.name}">${t.icon} ${t.name}</option>`).join('');
            html += `</optgroup>`;
        });

        select.innerHTML = html;
    });
}

// Genera la tabla comparativa para una lista de nombres de herramientas (2 o 3)
function renderComparacion(nombres) {
    const resultEl = document.getElementById('comparison-result');
    if (!resultEl) return;

    const seleccionadas = nombres.map(getToolByName).filter(Boolean);

    if (seleccionadas.length < 2) {
        resultEl.innerHTML = `<p class="text-center text-gray-400 italic py-6">Elegí al menos 2 herramientas para compararlas. 🔍</p>`;
        return;
    }

    const speedMap = { rapida: '⚡ Muy rápida', media: '⚡⚡ Media', potente: '⚡⚡⚡ Muy potente' };
    const diffMap = { facil: '🟢 Fácil', media: '🟡 Media', avanzada: '🔴 Avanzada' };

    const filas = [
        { label: "Categoría", get: t => t.category },
        { label: "Puntuación", get: t => {
            if (!t.rating) return '—';
            const r = t.rating;
            const full = Math.floor(r / 2);
            const half = (r / 2 - full) >= 0.4 ? 1 : 0;
            const empty = 5 - full - half;
            const stars = '⭐'.repeat(full) + (half ? '✨' : '') + '☆'.repeat(empty);
            return `<span class="comp-rating">${stars} <strong>${r}/10</strong></span>`;
        }},
        { label: "Velocidad", get: t => t.speed ? speedMap[t.speed] || t.speed : '—' },
        { label: "Dificultad", get: t => t.difficulty ? diffMap[t.difficulty] || t.difficulty : '—' },
        { label: "Mejor para", get: t => t.bestFor || "—" },
        { label: "Facilidad de uso", get: t => t.easeOfUse || "—" },
        { label: "Precio", get: t => t.pricingDetail || (t.isPro ? "Freemium (créditos gratis diarios)" : "Gratis") },
    ];

    // Pros y contras por columna
    const prosConsHtml = `
        <tr class="comp-pros-row">
            <td class="comparison-row-label">✅ Pros</td>
            ${seleccionadas.map(t => `
                <td>
                    <ul class="comp-pros-list">
                        ${(t.pros || []).map(p => `<li>✅ ${p}</li>`).join('')}
                    </ul>
                </td>
            `).join('')}
        </tr>
        <tr class="comp-cons-row">
            <td class="comparison-row-label">❌ Contras</td>
            ${seleccionadas.map(t => `
                <td>
                    <ul class="comp-cons-list">
                        ${(t.cons || []).map(c => `<li>❌ ${c}</li>`).join('')}
                    </ul>
                </td>
            `).join('')}
        </tr>
    `;

    // Nuestra recomendación: la herramienta con mayor rating
    const ganadora = seleccionadas.reduce((prev, curr) => (curr.rating || 0) > (prev.rating || 0) ? curr : prev);
    const diffLabel = ganadora.difficulty ? diffMap[ganadora.difficulty] : '';
    const speedLabel = ganadora.speed ? speedMap[ganadora.speed] : '';
    const recomendacionHtml = `
        <div class="comp-recommendation">
            <div class="comp-rec-crown">🥇 Nuestra recomendación</div>
            <div class="comp-rec-winner">
                <span class="comp-rec-icon">${ganadora.icon}</span>
                <span class="comp-rec-name">${ganadora.name}</span>
            </div>
            <p class="comp-rec-reason">
                Con una puntuación de <strong>${ganadora.rating}/10</strong>, <strong>${ganadora.name}</strong> ofrece 
                el mejor equilibrio entre ${diffLabel ? diffLabel + ', ' : ''}${speedLabel ? speedLabel.toLowerCase() + ' y ' : ''}precio y facilidad de uso entre las opciones comparadas.
            </p>
        </div>
    `;

    resultEl.innerHTML = `
        <table class="comparison-table">
            <thead>
                <tr>
                    <th class="comparison-row-label"></th>
                    ${seleccionadas.map(t => `
                        <th>
                            <div class="comparison-tool-header">
                                <span class="comparison-tool-icon">${t.icon}</span>
                                <span class="comparison-tool-name">${t.name}</span>
                                ${t.rating ? `<span class="comp-header-rating">⭐ ${t.rating}/10</span>` : ''}
                                <a href="${t.link}" target="_blank" rel="noopener" class="comparison-tool-link">Visitar →</a>
                            </div>
                        </th>
                    `).join('')}
                </tr>
            </thead>
            <tbody>
                ${filas.map(fila => `
                    <tr>
                        <td class="comparison-row-label">${fila.label}</td>
                        ${seleccionadas.map(t => `<td>${fila.get(t)}</td>`).join('')}
                    </tr>
                `).join('')}
                ${prosConsHtml}
                <tr>
                    <td class="comparison-row-label">Descripción</td>
                    ${seleccionadas.map(t => `<td class="text-sm text-gray-500">${t.description}</td>`).join('')}
                </tr>
            </tbody>
        </table>
        ${recomendacionHtml}
    `;

    resultEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function compararSeleccionActual() {
    const nombres = ['compare-select-1', 'compare-select-2', 'compare-select-3']
        .map(id => document.getElementById(id)?.value)
        .filter(v => v && v !== '');

    // Evitamos comparar la misma herramienta dos veces si el usuario la eligió en dos selects
    const nombresUnicos = [...new Set(nombres)];
    renderComparacion(nombresUnicos);
}

function renderComparacionesCuradas() {
    const cont = document.getElementById('curated-comparisons');
    if (!cont) return;

    // Solo mostramos las comparaciones cuyas herramientas existen todas en el array actual
    const disponibles = comparacionesCuradas.filter(c => c.nombres.every(n => getToolByName(n)));

    cont.innerHTML = disponibles.map((c, i) => `
        <button class="curated-comparison-btn btn-press" onclick="aplicarComparacionCurada(${i})">
            ${c.titulo}
        </button>
    `).join('');

    window._comparacionesDisponibles = disponibles;
}

function aplicarComparacionCurada(index) {
    const comp = window._comparacionesDisponibles?.[index];
    if (!comp) return;

    // Sincronizamos los selectores visualmente con la comparación elegida
    const selects = ['compare-select-1', 'compare-select-2', 'compare-select-3'];
    selects.forEach((id, i) => {
        const select = document.getElementById(id);
        if (select) select.value = comp.nombres[i] || '';
    });

    renderComparacion(comp.nombres);
}

function initComparador() {
    poblarSelectoresComparador();
    renderComparacionesCuradas();

    document.getElementById('compare-btn')?.addEventListener('click', compararSeleccionActual);

    // También comparamos automáticamente apenas eligen 2 o más, para que se sienta más fluido
    ['compare-select-1', 'compare-select-2', 'compare-select-3'].forEach(id => {
        document.getElementById(id)?.addEventListener('change', compararSeleccionActual);
    });
}

// 21. Inicialización
document.addEventListener('DOMContentLoaded', () => {
    renderTools(tools);
    renderFavoritesSection();
    renderTrending();
    renderHistorial();
    initScrollReveal();
    initStickyNav();
    initNavLinkHighlight();
    initHeroCounters();
    initHeroNetwork();
    initComparador();
    initChatForm();
});

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js')
      .then(() => console.log('PWA Service Worker registrado'))
      .catch((err) => console.log('Error:', err));
  });
}

function toggleFavorito(nombreHerramienta, btnEl) {
    let favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];
    const yaEsFavorito = favoritos.includes(nombreHerramienta);

    if (yaEsFavorito) {
        favoritos = favoritos.filter(item => item !== nombreHerramienta);
    } else {
        favoritos.push(nombreHerramienta);
    }

    localStorage.setItem('favoritos', JSON.stringify(favoritos));

    // Actualizamos visualmente todos los botones de favorito que correspondan a esta herramienta,
    // sin tener que re-renderizar toda la grilla (evita parpadeos y pérdida de scroll).
    document.querySelectorAll('.fav-btn').forEach(btn => {
        if (btn.getAttribute('onclick') && btn.getAttribute('onclick').includes(`'${nombreHerramienta}'`)) {
            const esFavAhora = !yaEsFavorito;
            btn.innerHTML = esFavAhora ? '⭐' : '☆';
            btn.classList.toggle('is-fav', esFavAhora);
            if (esFavAhora) {
                btn.classList.remove('is-fav');
                requestAnimationFrame(() => btn.classList.add('is-fav'));
            }
        }
    });

    renderFavoritesSection();
}

// ======================================================
// ASISTENTE DEL CHAT FLOTANTE (mejorado, sin servidor)
// ======================================================

// Diccionario de sinónimos: cada palabra del mensaje del usuario se "traduce"
// a un término que sí aparece en nuestras herramientas, antes de buscar.
const sinonimosChat = {
    "foto": "imagen", "fotos": "imagen", "fotografia": "imagen", "fotografía": "imagen",
    "imagenes": "imagen", "imágenes": "imagen", "dibujar": "imagen", "dibujo": "imagen",
    "codigo": "programación", "código": "programación", "programar": "programación",
    "programacion": "programación", "developer": "programación", "programador": "programación",
    "escribir": "texto", "redactar": "texto", "redaccion": "texto", "redacción": "texto",
    "tarea": "tareas", "tareas del hogar": "Tareas del Hogar",
    "estudiar": "estudios", "tarea de la facultad": "estudios", "facultad": "estudios",
    "universidad": "estudios", "colegio": "estudios", "escuela": "estudios", "examen": "estudios",
    "resumen": "estudios", "apuntes": "estudios",
    "trabajo": "trabajo remoto", "laburo": "trabajo remoto", "oficina": "trabajo remoto",
    "limpiar": "Tareas del Hogar", "limpieza": "Tareas del Hogar", "casa": "Tareas del Hogar",
    "diseñar": "diseño", "disenar": "diseño", "diseño grafico": "diseño", "diseno": "diseño",
    "traducir": "traductor", "traduccion": "traductor", "traducción": "traductor", "idioma": "traductor",
    "reunion": "reuniones", "reunión": "reuniones", "zoom": "reuniones", "meet": "reuniones",
    "presentacion": "presentación", "ppt": "presentación", "diapositivas": "presentación", "powerpoint": "presentación",
    "gratis": "gratis", "free": "gratis", "barato": "gratis", "sin pagar": "gratis",
    "video": "video", "videos": "video", "editar video": "video",
    "voz": "audio", "audio": "audio", "transcribir": "audio", "transcripcion": "audio",
    "chatbot": "asistente", "asistente virtual": "asistente", "agente": "asistente",
    "automatizar": "automatización", "automatizacion": "automatización", "automatización": "automatización",
    "organizar": "organización", "planificar": "organización", "calendario": "organización",
    "comida": "Tareas del Hogar", "cocinar": "Tareas del Hogar", "receta": "Tareas del Hogar",
    "matematica": "estudios", "matemática": "estudios", "matematicas": "estudios", "ciencia": "estudios",
};

// Preguntas frecuentes con respuesta directa (no necesitan buscar herramientas).
// Cada entrada tiene palabras-disparadoras y una respuesta fija.
const faqChat = [
    {
        triggers: ["que es la ia", "qué es la ia", "que es la inteligencia artificial", "qué es la inteligencia artificial"],
        respuesta: "La Inteligencia Artificial es software que puede entender pedidos en lenguaje natural y generar texto, imágenes o respuestas. No es magia: es una herramienta más, como una calculadora muy avanzada. 🤖"
    },
    {
        triggers: ["tengo que pagar", "es gratis", "cuesta", "precio", "cuanto cuesta", "cuánto cuesta"],
        respuesta: "La mayoría de las herramientas del directorio tienen una versión gratuita. Las que ves con la etiqueta <strong>PRO</strong> son más potentes y tienen créditos diarios gratis para probarlas; algunas además son <strong>Freemium</strong>, es decir que podés usarlas gratis con límites y pagar solo si necesitás más. 💰"
    },
    {
        triggers: ["la ia me va a reemplazar", "me va a quitar el trabajo", "reemplazar mi trabajo", "perder mi trabajo"],
        respuesta: "Más que reemplazar, la IA suele ser una aliada: ayuda a hacer tareas repetitivas más rápido para que tengas tiempo para lo que realmente importa. Las personas que aprenden a usarla suelen ser más productivas, no reemplazadas. 💪"
    },
    {
        triggers: ["es seguro", "puedo confiar", "mis datos", "privacidad", "informacion personal", "información personal"],
        respuesta: "Como con cualquier sitio web, evitá compartir datos muy sensibles (contraseñas, tarjetas) con un chat de IA. Para ideas, redacción y consultas generales es totalmente seguro usarlas. 🔒"
    },
    {
        triggers: ["es verdad", "es cierto", "confiable", "se equivoca", "alucina", "inventa"],
        respuesta: "Las IA pueden cometer errores o \"inventar\" datos, así que siempre conviene chequear información importante (fechas, cifras, datos legales) en otra fuente antes de usarla. 🔍"
    },
    {
        triggers: ["que es pro", "qué es pro", "etiqueta pro", "que significa pro", "qué significa pro"],
        respuesta: "La etiqueta <strong>PRO</strong> no significa que sea de pago: indica que la herramienta es más avanzada o compleja de usar, generalmente para tareas más técnicas. La mayoría de estas tienen créditos diarios gratis, por eso también suelen tener la etiqueta <strong>Freemium</strong>. 🧠"
    },
    {
        triggers: ["como empiezo", "cómo empiezo", "por donde empiezo", "por dónde empiezo", "soy nuevo", "no sé nada de ia", "no se nada de ia"],
        respuesta: "¡Arrancá simple! Probá ChatGPT con un pedido cotidiano, como \"ayudame a organizar mi semana\". Después explorá las categorías de arriba según lo que necesites: trabajo, estudio, hogar o creatividad. 🚀"
    },
    {
        triggers: ["quien hizo esta pagina", "quién hizo esta página", "quien creo este sitio", "quién creó este sitio", "de donde es esto", "de dónde es esto"],
        respuesta: "Este directorio fue creado en Paraná, Entre Ríos, pensado para que cualquier persona de la zona encuentre herramientas de IA fáciles de usar para el día a día. 📍"
    },
    {
        triggers: ["como guardo favoritos", "cómo guardo favoritos", "como marco favoritos", "que es la estrella", "qué es la estrella", "para que sirve la estrella", "para qué sirve la estrella"],
        respuesta: "Tocá la ⭐ en la esquina de cualquier tarjeta para guardarla en tu sección de <strong>Favoritos</strong>. Se guarda en este navegador, así que la próxima vez que entres seguirá ahí. 💾"
    },
    {
        triggers: ["como sugiero una herramienta", "cómo sugiero una herramienta", "quiero agregar una herramienta", "conozco una ia", "falta una herramienta", "agregar herramienta"],
        respuesta: "¡Buenísimo! Tocá el botón <strong>💡 Sugerir Herramienta</strong> arriba del buscador, completá el formulario y la revisamos para sumarla al directorio. 🙌"
    },
    {
        triggers: ["que categorias hay", "qué categorías hay", "que secciones hay", "qué secciones hay", "que tipos de herramientas hay", "qué tipos de herramientas hay"],
        respuesta: "Tenemos estas categorías: <strong>Trabajo Remoto</strong>, <strong>Estudios/Educación</strong>, <strong>Tareas del Hogar</strong>, <strong>Creatividad/Diseño</strong>, <strong>Trámites y Consultas</strong> e <strong>IA Avanzada</strong>. Podés filtrar por cualquiera arriba del listado. 🗂️"
    },
    {
        triggers: ["cual es la diferencia entre chatgpt y", "cuál es la diferencia entre chatgpt y", "chatgpt o", "que diferencia hay", "qué diferencia hay"],
        respuesta: "Cada herramienta tiene su fuerte: ChatGPT es muy versátil para texto e ideas, pero hay otras más especializadas (por ejemplo Canva para diseño, o DeepL para traducción). Te conviene elegir según la tarea puntual que necesitás resolver. 🎯"
    },
    {
        triggers: ["como activo el modo oscuro", "cómo activo el modo oscuro", "modo oscuro", "modo nocturno", "tema oscuro"],
        respuesta: "Tocá el botón 🌙 que está junto al buscador (o el ícono de la luna en la barra de navegación cuando hacés scroll) para activar o desactivar el modo oscuro. 🌚"
    },
    {
        triggers: ["las herramientas estan en español", "las herramientas están en español", "tengo que saber ingles", "tengo que saber inglés", "se puede usar en español"],
        respuesta: "La mayoría funciona perfectamente en español, aunque algunas interfaces pueden mostrarse en inglés al principio — generalmente podés cambiar el idioma desde la configuración de cada herramienta. 🌐"
    },
    {
        triggers: ["como uso el comparador", "cómo uso el comparador", "que es el comparador", "qué es el comparador", "como comparo herramientas", "cómo comparo herramientas"],
        respuesta: "En la sección <strong>⚖️ Comparador de Herramientas</strong> podés elegir 2 o 3 herramientas de los menús desplegables y ver una tabla lado a lado con para qué sirve cada una, qué tan fácil es de usar y su precio. También hay comparaciones ya armadas como accesos rápidos arriba. 📊"
    },
    {
        triggers: ["que son las tendencias", "qué son las tendencias", "que significa tendencias", "qué significa tendencias"],
        respuesta: "La sección <strong>🔥 Tendencias</strong> muestra las herramientas más destacadas y avanzadas del directorio en este momento. Es un buen lugar para empezar si querés ver lo más potente que tenemos. ✨"
    },
    {
        triggers: ["que es el historial", "qué es el historial", "para que sirve el historial", "para qué sirve el historial", "borrar historial", "como borro el historial"],
        respuesta: "Debajo del buscador vas a ver chips con tus últimas búsquedas, para volver a usarlas con un toque. Se guardan solo en tu navegador; si borrás los datos del sitio en la configuración de tu navegador, se borra también el historial. 🕘"
    },
    {
        triggers: ["hay publicidad", "tiene anuncios", "por que hay un espacio de publicidad", "por qué hay un espacio de publicidad", "adsense"],
        respuesta: "El sitio es gratuito y se sostiene en parte con publicidad discreta, pero nunca interfiere con el uso del directorio ni promociona herramientas que no estén realmente en la lista. 📰"
    },
    {
        triggers: ["que herramienta me recomendas para estudiar", "qué herramienta me recomendás para estudiar", "soy estudiante", "estoy en la facultad", "que uso para la facultad", "qué uso para la facultad"],
        respuesta: "Para estudiar te recomiendo empezar con <strong>Quizlet AI</strong> para repasar con tarjetas, <strong>Mapify</strong> para armar mapas mentales de tus apuntes, y <strong>Wolfram Alpha</strong> si necesitás resolver matemática o física paso a paso. 🎓"
    },
    {
        triggers: ["que herramienta me recomendas para trabajar", "qué herramienta me recomendás para trabajar", "trabajo desde casa", "soy freelance", "trabajo remoto que uso", "trabajo remoto qué uso"],
        respuesta: "Para el trabajo del día a día, <strong>ChatGPT</strong> es muy versátil para escribir y organizar ideas, <strong>Trello</strong> te ayuda a planificar tareas, y si tenés muchas reuniones, <strong>Fireflies.ai</strong> te transcribe todo automáticamente. 💼"
    },
    {
        triggers: ["que herramienta me recomendas para diseño", "qué herramienta me recomendás para diseño", "quiero hacer un diseño", "necesito un logo", "necesito una imagen"],
        respuesta: "Para diseño, <strong>Canva</strong> es la más fácil para presentaciones y redes sociales. Si necesitás generar una imagen desde cero con una descripción de texto, probá <strong>Bing Image Creator</strong>. Para edición más avanzada y gratis, <strong>Photopea</strong> funciona como un Photoshop en el navegador. 🎨"
    },
    {
        triggers: ["soy jubilado", "soy adulto mayor", "no entiendo de tecnologia", "no entiendo de tecnología", "soy grande para esto", "es dificil", "es difícil"],
        respuesta: "¡Para nada es difícil! Te recomiendo arrancar con <strong>LuzIA</strong>, que funciona directo en tu WhatsApp y le podés preguntar lo que sea como si fuera un mensaje a un conocido. También <strong>ChatGPT</strong> es muy simple: escribís lo que necesitás y te responde. 🙂"
    },
    {
        triggers: ["una herramienta no funciona", "el link no funciona", "no abre la pagina", "no abre la página", "esta rota", "está rota", "no carga"],
        respuesta: "¡Gracias por avisar! Si un link no funciona, contactanos desde el formulario de <strong>💡 Sugerir Herramienta</strong> contándonos cuál es, así lo revisamos y corregimos lo antes posible. 🛠️"
    },
    {
        triggers: ["puedo usarlo en el celular", "funciona en el celular", "funciona en el móvil", "anda en el celular", "es para pc o celular"],
        respuesta: "Sí, el directorio entero funciona perfecto en el celular: podés buscar, comparar, guardar favoritos y usar el asistente igual que en la computadora. La mayoría de las herramientas listadas también tienen versión para celular o app propia. 📱"
    },
    {
        triggers: ["cual es la mejor ia", "cuál es la mejor ia", "cual es la mejor herramienta", "cuál es la mejor herramienta", "que ia es mejor", "qué ia es mejor"],
        respuesta: "No hay una sola \"mejor\": depende de para qué la uses. Por eso armamos el <strong>⚖️ Comparador</strong> — ahí podés ver lado a lado cuál te conviene según la tarea, la facilidad de uso y el precio. ⚖️"
    },
    {
        triggers: ["puedo usar varias a la vez", "puedo combinar herramientas", "uso mas de una", "uso más de una"],
        respuesta: "¡Por supuesto! De hecho muchas personas combinan varias: por ejemplo usan ChatGPT para redactar y después Grammarly para corregir, o Canva para diseñar y CapCut para editar el video final. No hay límite. 🔄"
    },
    {
        triggers: ["necesito crear una cuenta", "tengo que registrarme", "necesito email para usarlo", "hay que registrarse"],
        respuesta: "Depende de la herramienta: la mayoría te pide crear una cuenta gratuita (con tu email o cuenta de Google) para guardar tu historial, pero algunas como Photopea o Wolfram Alpha se pueden usar sin registrarte. 📧"
    },
    {
        triggers: ["que es freemium", "qué es freemium", "que significa freemium", "qué significa freemium"],
        respuesta: "<strong>Freemium</strong> quiere decir que podés usar la herramienta gratis, generalmente con algún límite diario o de funciones, y pagar un plan solo si necesitás más. No implica que sea complicada — varias herramientas simples también son freemium. 💜"
    }
];

// Saludos y agradecimientos: respuestas cortas para que el chat se sienta natural
const saludos = ["hola", "buenas", "que tal", "qué tal", "buen dia", "buen día", "buenas tardes", "buenas noches", "hey"];
const agradecimientos = ["gracias", "muchas gracias", "genial gracias", "perfecto gracias", "dale gracias"];
const despedidas = ["chau", "adios", "adiós", "nos vemos", "hasta luego"];

function normalizarTexto(str) {
    return str
        .toLowerCase()
        .normalize('NFD').replace(/[\u0300-\u036f]/g, ''); // sin tildes, para comparar mejor
}

// Aplica sinónimos palabra por palabra (no a la frase completa, así detecta
// términos dentro de preguntas largas, no solo inputs de una sola palabra).
function aplicarSinonimos(texto) {
    let resultado = texto;
    Object.keys(sinonimosChat).forEach(clave => {
        if (resultado.includes(clave)) {
            resultado += ' ' + sinonimosChat[clave];
        }
    });
    return resultado;
}

// Sistema de puntaje: cada herramienta suma puntos según dónde aparece el término
// (nombre > categoría > descripción), para mostrar primero lo más relevante.
function buscarHerramientasPorTexto(query) {
    const palabras = query.split(/\s+/).filter(p => p.length > 2);
    if (palabras.length === 0) return [];

    const puntuadas = tools.map(tool => {
        const nombre = normalizarTexto(tool.name);
        const categoria = normalizarTexto(tool.category);
        const descripcion = normalizarTexto(tool.description);
        let puntaje = 0;

        palabras.forEach(palabra => {
            if (nombre.includes(palabra)) puntaje += 5;
            if (categoria.includes(palabra)) puntaje += 3;
            if (descripcion.includes(palabra)) puntaje += 1;
        });

        return { tool, puntaje };
    });

    return puntuadas
        .filter(p => p.puntaje > 0)
        .sort((a, b) => b.puntaje - a.puntaje)
        .map(p => p.tool);
}

// Busca la pregunta de FAQ más parecida al mensaje del usuario, contando cuántas
// palabras tienen en común. Sirve como "red de seguridad" cuando no hay coincidencia
// exacta de trigger, así el bot no se rinde directo con un mensaje genérico.
function buscarFaqMasParecida(inputNorm) {
    const palabrasInput = inputNorm.split(/\s+/).filter(p => p.length > 3);
    if (palabrasInput.length === 0) return null;

    let mejorMatch = null;
    let mejorPuntaje = 0;

    faqChat.forEach(item => {
        item.triggers.forEach(trigger => {
            const palabrasTrigger = normalizarTexto(trigger).split(/\s+/).filter(p => p.length > 3);
            const comunes = palabrasInput.filter(p => palabrasTrigger.includes(p)).length;

            if (comunes > mejorPuntaje) {
                mejorPuntaje = comunes;
                mejorMatch = item;
            }
        });
    });

    // Solo lo damos por válido si comparten al menos 2 palabras relevantes,
    // para evitar sugerir algo random por una sola coincidencia débil
    return mejorPuntaje >= 2 ? mejorMatch : null;
}

// ======================================================
// INTERFAZ DE BURBUJAS DEL CHAT
// ======================================================

let chatYaInicializado = false;
let chatHistorialContexto = []; // guarda las últimas búsquedas para dar contexto simple

function agregarBurbuja(texto, tipo = 'bot') {
    const messagesEl = document.getElementById('chat-messages');
    if (!messagesEl) return;

    const row = document.createElement('div');
    row.className = 'chat-bubble-row';
    row.innerHTML = `<div class="chat-bubble from-${tipo}">${texto}</div>`;
    messagesEl.appendChild(row);
    messagesEl.scrollTop = messagesEl.scrollHeight;
    return row;
}

function mostrarEscribiendo() {
    const messagesEl = document.getElementById('chat-messages');
    if (!messagesEl) return null;
    const row = document.createElement('div');
    row.className = 'chat-bubble-row';
    row.id = 'chat-typing-indicator';
    row.innerHTML = `<div class="chat-bubble from-bot chat-typing"><span></span><span></span><span></span></div>`;
    messagesEl.appendChild(row);
    messagesEl.scrollTop = messagesEl.scrollHeight;
    return row;
}

function quitarEscribiendo() {
    const indicator = document.getElementById('chat-typing-indicator');
    if (indicator) indicator.remove();
}

// Convierte una lista de herramientas en mini-tarjetas clicables dentro del chat
function renderHerramientasEnChat(lista) {
    return lista.map(t => `
        <a href="${t.link}" target="_blank" rel="noopener" class="chat-tool-suggestion">
            <span class="cts-icon">${t.icon}</span>
            <span>
                <span class="cts-name">${t.name}</span><br>
                <span class="cts-cat">${t.category}</span>
            </span>
        </a>
    `).join('');
}

// Sugerencias dinámicas: cambian según el contexto de la última respuesta
function renderSugerenciasChat(opciones) {
    const cont = document.getElementById('chat-suggestions');
    if (!cont) return;
    cont.innerHTML = opciones.map(op =>
        `<button class="chat-suggestion-chip" onclick="preguntar('${op.replace(/'/g, "\\'")}')">${op}</button>`
    ).join('');
}

function sugerenciasIniciales() {
    renderSugerenciasChat(['¿Qué es PRO?', 'Necesito presentaciones', 'Soy nuevo', '¿Es gratis?']);
}

function initChatbotIfNeeded() {
    if (chatYaInicializado) return;
    chatYaInicializado = true;
    agregarBurbuja('¡Hola! 👋 Soy el asistente del directorio. Preguntame qué necesitás hacer (ej: "organizar tareas", "editar fotos") o cualquier duda sobre cómo usar el sitio.', 'bot');
    sugerenciasIniciales();
    document.getElementById('chat-input')?.focus();
}

// ======================================================
// MOTOR DE RESPUESTAS (lógica de FAQ + sinónimos + puntaje)
// ======================================================

function procesarMensajeChat(inputOriginal) {
    const inputNorm = normalizarTexto(inputOriginal);

    // 1. Saludos, agradecimientos, despedidas
    if (saludos.some(s => inputNorm.includes(s))) {
        renderSugerenciasChat(['¿Qué es PRO?', 'Necesito presentaciones', 'Soy nuevo', '¿Es gratis?']);
        return '¡Hola! 👋 Decime qué necesitás hacer (por ejemplo "organizar tareas" o "editar fotos") y te recomiendo herramientas del directorio.';
    }
    if (agradecimientos.some(a => inputNorm.includes(a))) {
        renderSugerenciasChat(['Otra recomendación', '¿Cómo empiezo?', '¿Es seguro?']);
        return '¡De nada! Si necesitás algo más, contame. 😊';
    }
    if (despedidas.some(d => inputNorm.includes(d))) {
        renderSugerenciasChat([]);
        return '¡Listo! Cuando quieras volver a preguntar, acá estoy. 👋';
    }

    // 2. Preguntas frecuentes con respuesta directa
    const faqEncontrada = faqChat.find(item =>
        item.triggers.some(trigger => inputNorm.includes(normalizarTexto(trigger)))
    );
    if (faqEncontrada) {
        renderSugerenciasChat(['Necesito presentaciones', 'Editar imágenes', '¿Cómo empiezo?']);
        return faqEncontrada.respuesta;
    }

    // 3. Búsqueda de herramientas con sinónimos y puntaje de relevancia
    const queryExpandida = normalizarTexto(aplicarSinonimos(inputNorm));
    let sugerencias = buscarHerramientasPorTexto(queryExpandida);

    // Contexto simple: si esta búsqueda no dio nada pero la anterior sí,
    // probamos combinando con la categoría de la última herramienta sugerida
    if (sugerencias.length === 0 && chatHistorialContexto.length > 0) {
        const ultimaCategoria = normalizarTexto(chatHistorialContexto[chatHistorialContexto.length - 1].category);
        sugerencias = buscarHerramientasPorTexto(queryExpandida + ' ' + ultimaCategoria);
    }

    if (sugerencias.length > 0) {
        const top3 = sugerencias.slice(0, 3);
        chatHistorialContexto.push(top3[0]);
        if (chatHistorialContexto.length > 5) chatHistorialContexto.shift();

        // Filtramos automáticamente las tarjetas del sitio para que coincidan
        searchInput.value = inputOriginal;
        searchQuery = inputOriginal;
        filterAndSearch();

        renderSugerenciasChat(['Mostrame más opciones', '¿Cuál es más fácil?', 'Otra categoría']);

        return `Te recomiendo estas opciones: ${renderHerramientasEnChat(top3)}
                <div class="text-xs text-gray-400 mt-2">También filtré las tarjetas de abajo 👇</div>`;
    }

    renderSugerenciasChat(['¿Qué es PRO?', 'Necesito presentaciones', 'Soy nuevo']);

    // Antes de rendirnos, probamos si la pregunta se parece bastante a alguna FAQ
    // (aunque no haya coincidido exactamente con ningún trigger)
    const faqParecida = buscarFaqMasParecida(inputNorm);
    if (faqParecida) {
        renderSugerenciasChat(['Sí, era eso', 'No, busco otra cosa', '¿Cómo empiezo?']);
        return `No estoy seguro de haber entendido bien, pero quizás esto te ayude: <br><br>${faqParecida.respuesta}`;
    }

    return `No encontré nada específico para eso. Probá con algo como <em>"texto"</em>, <em>"imagen"</em>, <em>"estudio"</em> o <em>"organizar tareas"</em>. 🤔`;
}

function enviarMensajeChat(textoForzado) {
    const inputEl = document.getElementById('chat-input');
    const inputOriginal = (textoForzado !== undefined ? textoForzado : inputEl.value).trim();

    if (inputOriginal === '') return;

    agregarBurbuja(inputOriginal, 'user');
    if (inputEl) inputEl.value = '';
    renderSugerenciasChat([]); // ocultamos sugerencias viejas mientras responde

    mostrarEscribiendo();

    // Pequeño delay simulado para que la respuesta se sienta natural, no instantánea
    setTimeout(() => {
        quitarEscribiendo();
        const respuesta = procesarMensajeChat(inputOriginal);
        agregarBurbuja(respuesta, 'bot');
    }, 450);
}

function preguntar(categoria) {
    enviarMensajeChat(categoria);
}

// Conectamos el formulario del chat.
// IMPORTANTE: el #chat-form está en el HTML *después* del tag <script>, así que
// el elemento no existe cuando este script se carga. Lo enlazamos dentro de
// DOMContentLoaded para asegurar que el DOM esté completo.
function initChatForm() {
    document.getElementById('chat-form')?.addEventListener('submit', (e) => {
        e.preventDefault();
        enviarMensajeChat();
    });
}
