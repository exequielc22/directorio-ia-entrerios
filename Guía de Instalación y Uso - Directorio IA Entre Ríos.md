# Guía de Instalación y Uso - Directorio IA Entre Ríos

¡Hola! He diseñado este directorio pensando específicamente en la comunidad de Entre Ríos. Aquí tienes los archivos necesarios y cómo gestionarlos.

## Archivos Incluidos
1. **index.html**: La estructura principal de la página.
2. **style.css**: El diseño visual, colores y optimización para móviles.
3. **script.js**: La lógica que permite filtrar las herramientas y mostrarlas dinámicamente.

## Cómo Actualizar las Herramientas
Para agregar, quitar o modificar herramientas, solo necesitas editar el archivo `script.js`. Busca la sección que dice `const tools = [...]`. Cada herramienta tiene este formato:

```javascript
{
    name: "Nombre de la Herramienta",
    category: "Categoría (debe coincidir con los filtros)",
    description: "Descripción simple para el vecino.",
    icon: "Emoji representativo",
    link: "URL de la herramienta"
}
```

## Monetización
- **AdSense**: Busca el comentario `<!-- AdSense Banner -->` en `index.html` y reemplaza el bloque de marcador de posición con tu código de anuncio de Google AdSense.
- **Afiliados**: En la sección `Recursos Recomendados` de `index.html`, cambia los enlaces `#` por tus enlaces de afiliado reales.

## Personalización Local
He utilizado una paleta de colores azulada que evoca confianza y profesionalismo, ideal para un servicio de guía local. La página es totalmente responsiva, por lo que se verá perfecta en celulares.
