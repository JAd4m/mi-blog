// ===============================
// MODO CLARO / OSCURO
// ===============================

const themeToggleBtn = document.getElementById("theme-toggle");

// Por defecto la página empieza en modo oscuro (body SIN la clase "light-theme")
if (themeToggleBtn) {
    themeToggleBtn.addEventListener("click", () => {
        // Alternamos la clase en el body
        document.body.classList.toggle("light-theme");

        // Cambiamos el texto del botón según el modo actual
        if (document.body.classList.contains("light-theme")) {
            themeToggleBtn.textContent = "Modo oscuro";
        } else {
            themeToggleBtn.textContent = "Modo claro";
        }
    });
}

// ===============================
// COMENTARIOS POR CADA SAGA
// ===============================

// Seleccionamos todos los bloques de comentarios (uno por saga)
const commentBlocks = document.querySelectorAll(".saga-comments");

commentBlocks.forEach((block) => {
    const textarea = block.querySelector("textarea");
    const button = block.querySelector(".btn-comment");
    const list = block.querySelector(".comments-list");

    if (!textarea || !button || !list) return;

    button.addEventListener("click", () => {
        const text = textarea.value.trim();

        if (text === "") {
            // Mensaje simple para evitar comentarios vacíos
            alert("Por favor, escribe un comentario antes de publicarlo.");
            return;
        }

        // Creamos un nuevo elemento de lista para el comentario
        const li = document.createElement("li");
        li.classList.add("comment-item");
        li.textContent = text;

        // Lo añadimos a la lista de comentarios
        list.appendChild(li);

        // Limpiamos el cuadro de texto
        textarea.value = "";
    });
});

// ===============================
// NAVEGACIÓN ENTRE LAS 3 ENTRADAS
// ===============================

const entryButtons = document.querySelectorAll(".btn-entry");
const sagaEntries = document.querySelectorAll(".saga-entry");

entryButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const targetId = button.dataset.target;

        // Activar solo la sección de la saga seleccionada
        sagaEntries.forEach((section) => {
            if (section.id === targetId) {
                section.classList.add("active");
            } else {
                section.classList.remove("active");
            }
        });

        // Marcar el botón activo
        entryButtons.forEach((btn) => btn.classList.remove("active"));
        button.classList.add("active");

        // (Opcional) desplazar la vista al inicio de las entradas
        const mainContent = document.getElementById("sagas");
        if (mainContent) {
            mainContent.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    });
});

// ===============================
// BOTÓN "VOLVER ARRIBA"
// ===============================

const scrollTopBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
        scrollTopBtn.classList.add("show");
    } else {
        scrollTopBtn.classList.remove("show");
    }
});

scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
});

