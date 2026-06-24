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
        link: "https://chatgpt.com"
    },
    {
    name: "Manus AI",
    category: "Trabajo Remoto",
    description: "Agente de IA autónomo capaz de ejecutar tareas complejas de principio a fin.",
    icon: "🤖",
    link: "https://manus.im/invitation/3XQLEKLJN9ELECJ?utm_source=invitation&utm_medium=social&utm_campaign=copy_link",
    isPro: true
    },
    {
        name: "Trello",
        category: "Trabajo Remoto",
        description: "Para organizar tus tareas del día a día de forma visual.",
        icon: "📋",
        link: "https://trello.com"
    },
    {
        name: "DeepL",
        category: "Trabajo Remoto",
        description: "El mejor traductor para que el idioma no sea una barrera en tu trabajo.",
        icon: "🌍",
        link: "https://www.deepl.com"
    },
    {
        name: "Alrite",
        category: "Trabajo Remoto",
        description: "Transcribí reuniones y llamadas en tiempo real con resúmenes automáticos.",
        icon: "📝",
        link: "https://alrite.io/",
        isPro: false
    },
    {
        name: "Fireflies.ai",
        category: "Trabajo remoto",
        description: "Asistente de voz de IA que graba y transcribe automáticamente reuniones en Zoom o Google Meet.",
        icon: "📝",
        link: "https://fireflies.ai"
    },
    {
        name: "Gemini Enterprise Agent Platform",
        category: "Trabajo remoto",
        description: "Plataforma para crear agentes de IA personalizados usando planos prediseñados en Agent Garden.",
        icon: "🤖",
        link: "https://cloud.google.com/gemini/docs/agents"
    },
    {
        name: "Make",
        category: "Trabajo remoto",
        description: "Plataforma de automatización visual para conectar tus aplicaciones y optimizar flujos de trabajo.",
        icon: "⚙️",
        link: "https://www.make.com"
    },
    {
        name: "Perplexity",
        category: "Estudios/Educación",
        description: "Como un Google que te da la respuesta directa y te dice de dónde sacó la info.",
        icon: "🔍",
        link: "https://www.perplexity.ai"
    },
    {
        name: "Canva",
        category: "Estudios/Educación",
        description: "Para hacer presentaciones y trabajos prácticos que se vean profesionales.",
        icon: "🎨",
        link: "https://www.canva.com"
    },
    {
        name: "TTSreader",
        category: "Estudios/Educación",
        description: "Convertí tus textos o apuntes en audio natural de forma rápida y gratuita.",
        icon: "🔊",
        link: "https://ttsreader.com/es/",
        isPro: false
    },
    {
        name: "Google Cloud TTS",
        category: "Estudios/Educación",
        description: "Voces de alta fidelidad con entonación muy natural para proyectos profesionales.",
        icon: "🎙️",
        link: "https://cloud.google.com/text-to-speech",
        isPro: false
    },
    {
        name: "Otter.ai",
        category: "Estudios/Educación",
        description: "Transcribe clases en tiempo real y entrega resúmenes estructurados.",
        icon: "🎙️",
        link: "https://otter.ai"
    },
    {
        name: "Grammarly",
        category: "Estudios/Educación",
        description: "Corregí gramática, ortografía y puntuación en tus trabajos.",
        icon: "✍️",
        link: "https://grammarly.com"
    },
    {
        name: "Scholarcy",
        category: "Estudios/Educación",
        description: "Resume automáticamente artículos académicos complejos.",
        icon: "📚",
        link: "https://scholarcy.com"
    },
    {
        name: "Mapify",
        category: "Estudios/Educación",
        description: "Genera mapas mentales y guías visuales a partir de texto.",
        icon: "🧠",
        link: "https://mapify.so"
    },
    {
        name: "Zotero",
        category: "Estudios/Educación",
        description: "Solución profesional para crear bibliografías y gestionar referencias.",
        icon: "📁",
        link: "https://zotero.org"
    },
    {
        name: "Mendeley",
        category: "Estudios/Educación",
        description: "Herramienta para encontrar fuentes científicas y estructurar bibliografías.",
        icon: "🔍",
        link: "https://mendeley.com"
    },
    {
        name: "Wolfram Alpha",
        category: "Estudios/Educación",
        description: "Motor de conocimiento para resolver problemas matemáticos y científicos.",
        icon: "🧮",
        link: "https://wolframalpha.com"
    },
    {
        name: "Nerd AI",
        category: "Estudios/Educación",
        description: "Escanea documentos para obtener cuestionarios, resúmenes y soluciones.",
        icon: "🤖",
        link: "https://nerd-ai.com"
    },
    {
        name: "Socratic",
        category: "Estudios/Educación",
        description: "IA para estudiantes pensada para resolver dudas de cualquier materia.",
        icon: "🎓",
        link: "https://socratic.org"
    },
    {
        name: "Quizlet AI",
        category: "Estudios/Educación",
        description: "Crea tarjetas de estudio y cuestionarios a partir de tus apuntes.",
        icon: "📝",
        link: "https://quizlet.com"
    },
    {
        name: "Gradescope",
        category: "Estudios/Educación",
        description: "Emplea inteligencia de datos para calificar trabajos y exámenes.",
        icon: "✔️",
        link: "https://gradescope.com"
    },
    {
        name: "Tutor.ai",
        category: "Estudios/Educación",
        description: "Recibe respuestas y explicaciones detalladas para temas complejos.",
        icon: "💬",
        link: "https://tutor.ai"
    },
    {
        name: "LanguageTool",
        category: "Estudios/Educación",
        description: "Asistente para redactar informes, memorias técnicas y documentación.",
        icon: "📝",
        link: "https://languagetool.org"
    },
    {
        name: "Goblin.tools",
        category: "Tareas del Hogar",
        description: "Te ayuda a desglosar tareas complejas en pasos simples.",
        icon: "👺",
        link: "https://goblin.tools"
    },
    {
        name: "Mealime",
        category: "Tareas del Hogar",
        description: "Planificá tus comidas de la semana y armá la lista del súper.",
        icon: "🥗",
        link: "https://www.mealime.com"
    },
    {
        name: "Sweepy",
        category: "Tareas del Hogar",
        description: "Organizá tu limpieza por habitaciones y mantené tu hogar impecable sin estrés.",
        icon: "🧹",
        link: "https://sweepy.app/",
        isPro: false
    },
    {
        name: "Homestyler",
        category: "Tareas del hogar",
        description: "Aplicación de IA para remodelar espacios, cambiar pintura o mover muebles virtualmente.",
        icon: "🏠",
        link: "https://www.homestyler.com"
    },
    {
        name: "Microsoft To Do",
        category: "Tareas del hogar",
        description: "Planificador sencillo con calendario visual para controlar tus proyectos y tareas pendientes.",
        icon: "✅",
        link: "https://todo.microsoft.com"
    },
    {
        name: "Google Keep",
        category: "Tareas del hogar",
        description: "Herramienta de organización personal para anotar ideas, tareas y etiquetarlas por estado.",
        icon: "💡",
        link: "https://keep.google.com"
    },
    {
        name: "Bing Image Creator",
        category: "Creatividad/Diseño",
        description: "Escribí lo que imaginás y la IA te crea la imagen en segundos.",
        icon: "🖼️",
        link: "https://www.bing.com/images/create"
    },
    {
        name: "CapCut",
        category: "Creatividad/Diseño",
        description: "Editá videos para tus redes sociales de forma súper fácil y rápida.",
        icon: "🎬",
        link: "https://www.capcut.com"
    },
    {
        name: "Photopea",
        category: "Creatividad/Diseño",
        description: "Editor de imágenes profesional en tu navegador, con funciones de IA potentes.",
        icon: "🖼️",
        link: "https://www.photopea.com/",
        isPro: false
    },
    {
        name: "LuzIA",
        category: "Trámites y Consultas",
        description: "Una IA que podés tener en tu WhatsApp para preguntar cualquier cosa rápido.",
        icon: "📱",
        link: "https://www.luzia.com"
    },
    {
        name: "CamScanner",
        category: "Trámites y Consultas",
        description: "Escaneá tus documentos con el celu y dejalos perfectos para enviar por mail.",
        icon: "📄",
        link: "https://www.camscanner.com"
    },
    {
    name: "Entre Ríos Digital",
    category: "Trámites y Consultas",
    description: "Plataforma oficial para realizar gestiones, solicitar turnos y consultar trámites provinciales.",
    icon: "🏛️",
    link: "https://www.entrerios.gov.ar",
    isPro: false
    },
    {
    name: "Xubio",
    category: "Trámites y Consultas",
    description: "Gestión contable y facturación electrónica en la nube. Ideal para mantener tus impuestos al día.",
    icon: "🧾",
    link: "https://xubio.com/",
    isPro: false
    },
    {
    name: "Claude Code",
    category: "IA Avanzada",
    description: "Agente de codificación en tu terminal que analiza, edita y prueba toda tu base de código.",
    icon: "⚡",
    link: "https://code.claude.com/",
    isPro: true
    },
    {
    name: "Gemini Advanced",
    category: "IA Avanzada", // Nueva categoría
    description: "Análisis de datos complejo y razonamiento lógico.",
    icon: "🚀",
    link: "https://aistudio.google.com/",
    isPro: true // Etiqueta para el diseño
    },
    {
    name: "Cursor",
    category: "IA Avanzada",
    description: "Editor de código inteligente con agentes que entienden el contexto de todo tu proyecto.",
    icon: "💻",
    link: "https://cursor.sh/",
    isPro: true 
    },
    {
    name: "Streamlit",
    category: "IA Avanzada",
    description: "Creá aplicaciones web interactivas para datos usando solo Python, sin tocar HTML o CSS.",
    icon: "📊",
    link: "https://streamlit.io/",
    isPro: true
    },
    {
    name: "NotebookLM",
    category: "IA Avanzada",
    description: "Asistente de investigación que analiza tus documentos y crea resúmenes, informes o pódcasts.",
    icon: "🧠",
    link: "https://notebooklm.google/",
    isPro: true
    },
    {
    name: "Cloudflare Radar",
    category: "IA Avanzada",
    description: "Monitoreo inteligente del estado de internet para navegar de forma más segura y consciente.",
    icon: "🌐",
    link: "https://radar.cloudflare.com/",
    isPro: false
   }
];

// 2. Función para renderizar las tarjetas
function renderTools(filteredTools) {
    const container = document.getElementById('tool-cards-container');
    container.innerHTML = ''; // Limpia el contenedor antes de dibujar

    filteredTools.forEach((tool, index) => {
        // Lógica de la etiqueta PRO
        const proLabel = tool.isPro ? 
            '<span class="absolute top-2 right-2 bg-yellow-500 text-white text-xs font-bold px-2 py-1 rounded shadow-sm">PRO</span>' : '';

        const card = document.createElement('div');
        // Agregamos 'relative' para que la etiqueta PRO se posicione correctamente
        card.className = "relative bg-white p-6 rounded-lg shadow-md border border-gray-200 fade-in";
        card.style.animationDelay = `${index * 0.1}s`; // Efecto stagger

        card.innerHTML = `
            ${proLabel}
            <div class="text-4xl mb-4">${tool.icon}</div>
            <h3 class="text-xl font-bold mb-2">${tool.name}</h3>
            <p class="text-gray-600 mb-4">${tool.description}</p>
            <a href="${tool.link}" target="_blank" class="text-blue-600 font-semibold hover:underline">Probar herramienta →</a>
        `;
        
        container.appendChild(card);
    });
}

// 3. Variables de Estado
let currentCategory = 'all';
let searchQuery = '';

// 4. Lógica de Filtrado y Búsqueda combinada
function filterAndSearch() {
    const filtered = tools.filter(tool => {
        const matchesCategory = currentCategory === 'all' || tool.category === currentCategory;
        const matchesSearch = tool.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                             tool.description.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
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
searchInput.addEventListener('input', (e) => {
    searchQuery = e.target.value;
    filterAndSearch();
});

// 7. Lógica de Sugerir Herramienta
const suggestBtn = document.getElementById('suggest-tool-btn');
const suggestionSection = document.getElementById('suggestion-section');

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
const body = document.body;

// Verificar preferencia guardada
if (localStorage.getItem('dark-mode') === 'enabled') {
    body.classList.add('dark-mode');
    darkModeToggle.innerText = '☀️ Modo Claro';
}

darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('dark-mode', 'enabled');
        darkModeToggle.innerText = '☀️ Modo Claro';
    } else {
        localStorage.setItem('dark-mode', 'disabled');
        darkModeToggle.innerText = '🌙 Modo Oscuro';
    }
});

// 10. Inicialización
document.addEventListener('DOMContentLoaded', () => {
    renderTools(tools);
});
