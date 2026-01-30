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

        emailjs
        .sendForm("automail", "mailplantilla", this)
        .then(() => {
            mensaje.style.color = "green";
            mensaje.textContent = "✅ Correo enviado correctamente!";
            form.reset();
        })
        .catch((error) => {
            mensaje.style.color = "red";
            mensaje.textContent = "❌ Error al enviar el correo. Inténtalo más tarde.";
            console.error("Error EmailJS:", error);
        });
    });
}

document.addEventListener("DOMContentLoaded", function() {
    const usuarioActivo = sessionStorage.getItem("usuarioInsuWave");
    const display = document.getElementById("user-display");

    if (usuarioActivo && display) {
        display.innerHTML = `
            <div style="margin: 10px 0; font-size: 18px; text-align: center;">
                <span style="color: #6366f1; font-weight: bold; text-transform: capitalize;">
                    Hola, ${usuarioActivo}
                </span>
                <span style="color: #666; margin: 0 10px;">|</span>
                <button id="logout" style="background: none; border: none; color: #ff4d4d; cursor: pointer; text-decoration: underline; font-size: 16px; padding: 0;">
                    Cerrar Sesión
                </button>
            </div>
        `;

        document.getElementById("logout").addEventListener("click", function() {
            sessionStorage.removeItem("usuarioInsuWave");
            window.location.reload(); 
        });
    }
});