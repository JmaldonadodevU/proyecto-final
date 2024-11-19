// Selecciona todas las opciones de respuesta
const opciones = document.querySelectorAll('.option');

// Añade eventos a cada botón de opción
opciones.forEach(opcion => {
    opcion.addEventListener('click', () => {
        const esCorrecta = opcion.getAttribute('data-correct') === "true";

        if (esCorrecta) {
            alert("¡Correcto! Pasemos a la siguiente pregunta.");
            // Cambia dinámicamente la pregunta
            document.getElementById('pregunta').innerHTML = `
                <h3>¿Cuál es el elemento HTML para un encabezado?</h3>
                <p>Un encabezado en HTML se utiliza para definir títulos o encabezados importantes en una página web.</p>
                <button class="option" data-correct="true">h1</button>
                <button class="option" data-correct="false">header</button>
                <button class="option" data-correct="false">title</button>
                <button class="option" data-correct="false">head</button>
            `;
            agregarEventos();
        } else {
            alert("Respuesta incorrecta. Por favor, inténtalo de nuevo.");
        }
    });
});

// Función para agregar eventos a los nuevos botones generados dinámicamente
function agregarEventos() {
    const nuevasOpciones = document.querySelectorAll('.option');
    nuevasOpciones.forEach(opcion => {
        opcion.addEventListener('click', () => {
            const esCorrecta = opcion.getAttribute('data-correct') === "true";

            if (esCorrecta) {
                alert("¡Correcto! Has terminado el cuestionario.");
                // Aquí podrías redirigir a otra página o mostrar un mensaje de finalización
            } else {
                alert("Respuesta incorrecta. Por favor, inténtalo de nuevo.");
            }
        });
    });
}
