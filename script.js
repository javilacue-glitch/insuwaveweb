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
            mensaje.textContent =
            "❌ Error al enviar el correo. Inténtalo más tarde.";
            console.error("Error EmailJS:", error);
        });
    });
}
