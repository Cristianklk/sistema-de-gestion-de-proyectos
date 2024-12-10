// Traducciones
const translations = {
    en: {
        welcome: "Welcome",
        "choose-method": "Select the authentication method",
        username: "Username",
        password: "Password",
        "remember-me": "Remember me",
        "forgot-password": "I forgot my password",
        "log-in": "Log in",
        register: "Register",
        loading: "Loading...",
    },
    es: {
        welcome: "Bienvenido",
        "choose-method": "Selecciona el método de autenticación",
        username: "Nombre de usuario",
        password: "Contraseña",
        "remember-me": "Recuérdame",
        "forgot-password": "Olvidé mi contraseña",
        "log-in": "Iniciar sesión",
        register: "Registrar",
        loading: "Cargando...",
    },
};

// Cambio de idioma
const languageSelector = document.getElementById("language");

languageSelector.addEventListener("change", (event) => {
    const selectedLanguage = event.target.value;
    changeLanguage(selectedLanguage);
});

function changeLanguage(language) {
    const elementsToTranslate = document.querySelectorAll("[data-lang-key]");
    elementsToTranslate.forEach((element) => {
        const key = element.getAttribute("data-lang-key");
        element.textContent = translations[language][key];
        if (element.tagName === "INPUT" && element.type === "submit") {
            element.value = translations[language][key];
        }
    });
}

document.addEventListener("DOMContentLoaded", () => {
    changeLanguage("en");
});

// Manejo del formulario de login
const form = document.getElementById("login-form");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const loadingOverlay = document.getElementById("loading-overlay");
    loadingOverlay.style.display = "flex";

    setTimeout(() => {
        loadingOverlay.style.display = "none";

        // Simular validación exitosa
        window.location.href = "dashboard.html";
    }, 2000);
});

// Registro
const registerBtn = document.getElementById("register-btn");
registerBtn.addEventListener("click", () => {
    alert("Redirigiendo a la página de registro...");
    window.location.href = "register.html"; // Cambia por tu URL de registro
});
document.addEventListener('DOMContentLoaded', () => {
    const navbarContainer = document.getElementById('navbar-container');
    if (navbarContainer) {
        fetch('navbar.html')
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.text();
            })
            .then(data => {
                navbarContainer.innerHTML = data;
            })
            .catch(error => console.error('Error loading navbar:', error));
    }
});
