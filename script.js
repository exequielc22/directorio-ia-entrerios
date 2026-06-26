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
        category: "Trabajo Remoto",
        description: "Asistente de voz de IA que graba y transcribe automáticamente reuniones en Zoom o Google Meet.",
        icon: "📝",
        link: "https://fireflies.ai"
    },
    {
        name: "Gemini Enterprise Agent Platform",
        category: "Trabajo Remoto",
        description: "Plataforma para crear agentes de IA personalizados usando planos prediseñados en Agent Garden.",
        icon: "🤖",
        link: "https://cloud.google.com/gemini/docs/agents"
    },
    {
        name: "Make",
        category: "Trabajo Remoto",
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
        category: "Tareas del Hogar",
        description: "Aplicación de IA para remodelar espacios, cambiar pintura o mover muebles virtualmente.",
        icon: "🏠",
        link: "https://www.homestyler.com"
    },
    {
        name: "Microsoft To Do",
        category: "Tareas del Hogar",
        description: "Planificador sencillo con calendario visual para controlar tus proyectos y tareas pendientes.",
        icon: "✅",
        link: "https://todo.microsoft.com"
    },
    {
        name: "Google Keep",
        category: "Tareas del Hogar",
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

// 1.b Mapa de categorías a su "slug" de color (usado en CSS vía data-category-color)
const categoryColorMap = {
    "Trabajo Remoto": "remoto",
    "Estudios/Educación": "educacion",
    "Tareas del Hogar": "hogar",
    "Creatividad/Diseño": "creatividad",
    "Trámites y Consultas": "tramites",
    "IA Avanzada": "avanzada"
};

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

        // Badge de precio: "PRO" indica complejidad/potencia, no necesariamente costo.
        // Las herramientas PRO suelen tener créditos diarios gratis, así que mostramos
        // PRO + Freemium juntas (son dos datos distintos: qué tan avanzada es,
        // y qué tan accesible es el precio). Las que no son PRO muestran solo "Gratis".
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

        const card = document.createElement('div');
        card.className = "tool-card";
        card.style.animationDelay = `${(index % 12) * 0.06}s`;
        if (colorSlug) card.setAttribute('data-category-color', colorSlug);

        card.innerHTML = `
            ${proLabel}
            ${pricingLabel}
            ${favButton}
            <div class="tool-card-inner">
                <div class="tool-icon-badge">${tool.icon}</div>
                ${categoryTag}
                <h3 class="text-xl font-bold mb-2">${tool.name}</h3>
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
    document.getElementById('categorias').scrollIntoView({ behavior: 'smooth' });
}

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

// Cerrar el autocompletado al hacer click afuera
document.addEventListener('click', (e) => {
    if (autocompleteList && !e.target.closest('.search-wrapper')) {
        closeAutocomplete();
    }
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
const navDarkToggle = document.getElementById('nav-dark-toggle');
const body = document.body;

function syncDarkModeButtons(isDark) {
    if (darkModeToggle) darkModeToggle.innerText = isDark ? '☀️ Modo Claro' : '🌙 Modo Oscuro';
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

darkModeToggle.addEventListener('click', handleDarkModeToggle);
if (navDarkToggle) navDarkToggle.addEventListener('click', handleDarkModeToggle);

// 10. Sección de Favoritos del usuario
function renderFavoritesSection() {
    const favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];
    const favSection = document.getElementById('favorites-section');
    const favTools = tools.filter(t => favoritos.includes(t.name));

    if (!favSection) return;

    if (favTools.length === 0) {
        favSection.classList.add('is-empty');
        document.getElementById('favorites-container').innerHTML = '';
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

    destacadas.forEach((tool, index) => {
        const card = document.createElement('a');
        card.href = tool.link;
        card.target = '_blank';
        card.rel = 'noopener';
        card.className = 'trend-card block';
        card.innerHTML = `
            <div class="tool-card h-full">
                <div class="tool-card-inner flex flex-col">
                    <span class="trend-rank mb-2">#${index + 1}</span>
                    <div class="tool-icon-badge">${tool.icon}</div>
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
    document.getElementById('categorias').scrollIntoView({ behavior: 'smooth' });
}

// Guardamos en el historial cuando el usuario deja de tipear (debounce simple)
let historialTimeout;
searchInput.addEventListener('input', () => {
    clearTimeout(historialTimeout);
    historialTimeout = setTimeout(() => guardarEnHistorial(searchInput.value), 900);
});

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
    const sections = ['categorias', 'tendencias', 'favoritos', 'faq']
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

// 19. Inicialización
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

// Conectamos el formulario del chat (en vez de un botón con onclick suelto,
// usamos submit para que también funcione con Enter desde el celular)
document.getElementById('chat-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    enviarMensajeChat();
});