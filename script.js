(function () {
    const toggleButton = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu-container');

    if (toggleButton && navMenu) {
        toggleButton.addEventListener('click', function () {
            navMenu.classList.toggle('active');
        });
    }
})();

const form = document.getElementById("contactoFormulario");
const mensaje = document.getElementById("mensaje");

if (form) {
    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const btn = form.querySelector('.sign-up');
        const originalText = btn.textContent;

        btn.textContent = "Enviando...";
        btn.disabled = true;

        emailjs.sendForm("automail", "mailplantilla", this)
            .then(() => {
                mensaje.style.color = "#28a745";
                mensaje.textContent = "✅ ¡Suscrito con éxito!";
                form.reset();
                btn.textContent = originalText;
                btn.disabled = false;
                setTimeout(() => { mensaje.textContent = ""; }, 5000);
            })
            .catch((error) => {
                mensaje.style.color = "#dc3545";
                mensaje.textContent = "❌ Error al enviar.";
                btn.textContent = "Reintentar";
                btn.disabled = false;
                console.error("Error EmailJS:", error);
            });
    });
}

document.addEventListener("DOMContentLoaded", function () {
    const usuarioActivo = localStorage.getItem("usuarioInsuWave");
    const display = document.getElementById("user-display");

    if (usuarioActivo && display) {
        display.innerHTML = `
            <div class="user-welcome-bar">
                <span>👋 Hola, <strong>${usuarioActivo}</strong></span>
                <button id="btn-logout" class="logout-style">Cerrar Sesión</button>
            </div>
        `;

        document.getElementById("btn-logout").addEventListener("click", function () {
            localStorage.removeItem("usuarioInsuWave");
            window.location.reload();
        });
    }

    const btnModo = document.getElementById('btn-modo');
    if (btnModo) {
        // Restaurar preferencia guardada
        if (localStorage.getItem('modoClaro') === 'true') {
            document.body.classList.add('light-mode');
            btnModo.checked = true;
        }
        btnModo.addEventListener('change', () => {
            document.body.classList.toggle('light-mode');
            localStorage.setItem('modoClaro', document.body.classList.contains('light-mode'));
        });
    }
});