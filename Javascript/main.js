// Selecciona todos los botones de opciones
const opciones = document.querySelectorAll('.option');

opciones.forEach(opcion => {
    opcion.addEventListener('click', () => {
        const esCorrecta = opcion.getAttribute('data-correct') === "true";

        if (esCorrecta) {
            alert("¡Correcto! Pasemos a la siguiente pregunta.");
            // Cambiar el contenido a una nueva pregunta o redirigir
            document.getElementById('div2').innerHTML = `
                <h3>¿Cuál es el elemento HTML para un párrafo?</h3>
                <p>Un párrafo en HTML se utiliza para agrupar bloques de texto relacionados.</p>
                <button class="option" data-correct="true">p</button>
                <button class="option" data-correct="false">br</button>
                <button class="option" data-correct="false">span</button>
                <button class="option" data-correct="false">div</button>
            `;

            // Vuelve a agregar los eventos a los nuevos botones
            agregarEventos();
        } else {
            alert("Respuesta incorrecta. Por favor, inténtalo de nuevo.");
        }
    });
});

// Función para agregar eventos a los botones nuevos
function agregarEventos() {
    const nuevasOpciones = document.querySelectorAll('.option');

    nuevasOpciones.forEach(opcion => {
        opcion.addEventListener('click', () => {
            const esCorrecta = opcion.getAttribute('data-correct') === "true";

            if (esCorrecta) {
                alert("¡Correcto! Pasemos a la siguiente pregunta.");
                // Aquí podrías cargar más preguntas dinámicamente
            } else {
                alert("Respuesta incorrecta. Por favor, inténtalo de nuevo.");
            }
        });
    });
}