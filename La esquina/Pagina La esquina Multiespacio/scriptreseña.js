document.getElementById("Reseñasform").addEventListener("submit", function(event) {
    event.preventDefault();
    limpiarErrores();
    
    const inputs = document.querySelectorAll('input, select, textarea');
    inputs.forEach(input => input.classList.remove('error'));

    const email = document.getElementById("email").value.trim();
    const nombre = document.getElementById("nombre").value.trim();
    const opinion = document.getElementById("opinion").value.trim();
    const experiencia = document.getElementById("experiencia").value;

    let valid = true;

    if (!comprobarEmail(email)) valid = false;
    if (!comprobarNombre(nombre)) valid = false;
    if (!comprobarExperiencia(experiencia)) valid = false;

    if (!valid) return;

    document.getElementById("Reseñasform").reset();
    const feedbackDatos = document.getElementById("feedbackDatos");
    feedbackDatos.innerHTML = `
        <strong>Correo electrónico:</strong> ${email}<br>
        <strong>Nombre:</strong> ${nombre}<br>
        <strong>Opinión:</strong> ${opinion}<br>
        <strong>Experiencia:</strong> ${experiencia}<br>
    `;
});

function comprobarEmail(email) {
    const errorEmail = document.getElementById("errorEmail");
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === "") {
        errorEmail.textContent = "El correo electrónico es obligatorio.";
        document.getElementById("email").classList.add("error");
        return false;
    }
    if (!re.test(email)) {
        errorEmail.textContent = "El formato del correo electrónico no es válido.";
        document.getElementById("email").classList.add("error");
        return false;
    }
    return true;
}

function comprobarNombre(nombre) {
    const errorNombre = document.getElementById("errorNombre");
    if (nombre === "" || nombre.length > 50) {
        errorNombre.textContent = "El nombre es obligatorio y tiene límite de 50 caracteres.";
        document.getElementById("nombre").classList.add("error");
        return false;
    }
    return true;
}

function comprobarExperiencia(experiencia) {
    const errorExperiencia = document.getElementById("errorExperiencia");
    if (experiencia === "") {
        errorExperiencia.textContent = "La experiencia es obligatoria.";
        document.getElementById("experiencia").classList.add("error");
        return false;
    }
    return true;
}

function limpiarErrores() {
    document.querySelectorAll(".error-message").forEach(error => {
        error.textContent = "";
    });
}