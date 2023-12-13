function incrementarContador(elemento) {
    // Identifica el evento
    let eventoNombre = elemento.getAttribute('data-evento');

    // Clave para el localStorage
    let clave = 'visitas_' + eventoNombre;

    // Obtiene el número actual de visitas desde localStorage o lo inicializa a 0
    let visitas = parseInt(localStorage.getItem(clave)) || 0;

    // Incrementa el contador y lo guarda en localStorage
    visitas++;
    localStorage.setItem(clave, visitas);

    // Actualiza el texto del contador en la página
    let contador = elemento.querySelector('.contador');
    contador.textContent = 'Visitas: ' + visitas;

    // Redirección basada en el atributo data-evento
    switch (eventoNombre) {
        case 'evento1':
            window.location.href = 'evento1.html';
            break;
        case 'evento2':
            window.location.href = 'evento2.html';
            break;
        // Puedes agregar más casos aquí
    }
}

// Inicializa los contadores en la carga de la página
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.evento').forEach(function(elemento) {
        let eventoNombre = elemento.getAttribute('data-evento');
        let clave = 'visitas_' + eventoNombre;
        let visitas = parseInt(localStorage.getItem(clave)) || 0;
        let contador = elemento.querySelector('.contador');
        contador.textContent = 'Visitas: ' + visitas;
    });
});
