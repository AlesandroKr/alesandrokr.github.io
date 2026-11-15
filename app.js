document.addEventListener("DOMContentLoaded", () => {

    // --- 1. NAVEGACIÓN PRINCIPAL DE SECCIONES ---
    const sections = {
        "home-button": "home-section",
        "about-button": "about-section",
        "contact-button": "contact-section",
        "extras-button": "extras-section",
        "blog-button": "blog-section"
    };

    const allSections = document.querySelectorAll("#main-content section");
    const allSectionsButton = document.querySelectorAll("nav button");

    // Recorremos el objeto de forma segura
    for (const [buttonId, sectionId] of Object.entries(sections)) {
        const navButton = document.getElementById(buttonId);

        // Validación vital: Si el botón no existe en el HTML, evitamos que rompa el script
        if (!navButton) continue;

        navButton.addEventListener("click", () => {
            // Limpiamos la clase activa de todos los botones
            allSectionsButton.forEach(btn => btn.classList.remove("active-button"));
            navButton.classList.add("active-button");

            // Ocultamos todas las secciones
            allSections.forEach(sec => sec.classList.remove("active-section"));

            // Mostramos la sección destino de forma segura
            const targetSection = document.getElementById(sectionId);
            if (targetSection) {
                targetSection.classList.add("active-section");
            }
        });
    }


    // --- 2. BOTÓN DE PANTALLA COMPLETA / MENÚ MÓVIL ---
    const fullscreenButton = document.getElementById("maximize-button");
    const body = document.body;

    const svgMenu = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M8 3V5H4V9H2V3H8ZM2 21V15H4V19H8V21H2ZM22 21H16V19H20V15H22V21ZM22 9H20V5H16V3H22V9Z"></path></svg>
    `;
    const svgClose = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M18 7H22V9H16V3H18V7ZM8 9H2V7H6V3H8V9ZM18 17V21H16V15H22V17H18ZM8 15V21H6V17H2V15H8Z"></path></svg>
    `;

    if (fullscreenButton) {
        fullscreenButton.addEventListener("click", () => {
            body.classList.toggle('nav-hidden');
            fullscreenButton.innerHTML = body.classList.contains('nav-hidden') ? svgClose : svgMenu;
        });
    }


    // --- 3. EXPLORADOR DE ARCHIVOS (OBSIDIAN STYLE) ---
    const explorerHeads = document.querySelectorAll(".explorer-header");
    const fileItems = document.querySelectorAll(".file-item");
    const notes = document.querySelectorAll(".markdown-note");
    const currentFileName = document.getElementById("current-file-name");

    // Delegación de eventos global (Funciona siempre, incluso si el HTML cambia o se carga tarde)
    document.addEventListener("click", (event) => {
        // Buscamos si el elemento clickeado (o un hijo suyo como el SVG) es un explorer-header
        const header = event.target.closest(".explorer-header");

        if (header) {
            const category = header.closest(".category");
            if (category) {
                category.classList.toggle("collapsed");
            }
        }
    });
    // Control de selección de notas en el explorador
    fileItems.forEach(item => {
        item.addEventListener("click", () => {
            fileItems.forEach(f => f.classList.remove("active"));
            item.classList.add("active");

            const targetId = item.getAttribute("data-target");

            notes.forEach(note => {
                note.classList.remove("active-note");
                if (note.id === targetId) {
                    note.classList.add("active-note");
                }
            });

            if (currentFileName) {
                currentFileName.textContent = item.textContent.trim();
            }
        });
    });

    let pressed = false;
    const openExplorerButton = document.getElementById("open-explorer-btn");
    const categoriesContainer = document.getElementById("categories-container");

    openExplorerButton.addEventListener("click", () => {
        pressed = !pressed;

        categoriesContainer.classList.toggle("hidden", pressed);
        if (pressed) {
            openExplorerButton.classList.add("active-button");
        }
        else {
            openExplorerButton.classList.remove("active-button");
        }
    });

});

