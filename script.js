(function() {
    const toggleButton = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (toggleButton && navMenu) {
        toggleButton.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            toggleButton.classList.toggle('active');
        });
    }
})();

const form = document.getElementById("contactoFormulario");
const mensaje = document.getElementById("mensaje");

if (form) {
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        emailjs.sendForm("automail", "mailplantilla", this)
        .then(() => {
            mensaje.style.color = "green";
            mensaje.textContent = "✅ Correo enviado correctamente!";
            form.reset();
        })
        .catch((error) => {
            mensaje.style.color = "red";
            mensaje.textContent = "❌ Error al enviar el correo.";
            console.error("Error EmailJS:", error);
        });
    });
}

document.addEventListener("DOMContentLoaded", function() {
    const usuarioActivo = localStorage.getItem("usuarioInsuWave");
    const display = document.getElementById("user-display");

    if (usuarioActivo && display) {
        display.innerHTML = `
            <div class="user-welcome-bar">
                <span>👋 Hola, <strong>${usuarioActivo}</strong></span>
                <button id="btn-logout" class="logout-style">Cerrar Sesión</button>
            </div>
        `;

        document.getElementById("btn-logout").addEventListener("click", function() {
            localStorage.removeItem("usuarioInsuWave");
            window.location.href = 'index.html'; 
        });
    }
});