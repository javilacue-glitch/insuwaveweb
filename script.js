(function() {
    const toggleButton = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (toggleButton && navMenu) {
        toggleButton.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            toggleButton.classList.toggle('active');
        });
    }

    const usuarioActivo = sessionStorage.getItem("usuarioInsuWave");
    const display = document.getElementById("user-display");

    if (usuarioActivo && display) {
        display.innerHTML = `
            <div style="text-align:center; margin-top:10px; font-size:18px;">
                <span style="color: #6366f1; font-weight: bold; text-transform: capitalize;">Hola, ${usuarioActivo}</span>
                <button id="logout" style="background:none; border:none; color:red; cursor:pointer; text-decoration:underline; margin-left:10px;">Salir</button>
            </div>
        `;

        document.getElementById("logout").addEventListener("click", function() {
            sessionStorage.removeItem("usuarioInsuWave");
            window.location.reload();
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
        });
    });
}