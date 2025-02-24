btnDescargar.addEventListener('click', function () {
    const link = document.createElement('a');
    link.href = "resource/extraescolares-judo-dojo-tarraco.pdf";
    link.download = "extraescolares-judo-dojo-tarraco.pdf";
    link.click();
});


// Obtener todas las celdas
const campusJudo = document.querySelectorAll('.campusJudo');

// Añadir el evento mouseenter a todas las celdas
campusJudo.forEach(celda => {
    celda.addEventListener('mouseenter', () => {
        // Agregar la clase hover a todas las celdas excepto la actual
        campusJudo.forEach(otraCelda => {
            if (otraCelda !== celda) {
                otraCelda.classList.add('hover-effect');
            }
        });
    });

    // Añadir el evento mouseleave para eliminar la clase hover
    celda.addEventListener('mouseleave', () => {
        // Eliminar la clase hover de todas las celdas
        campusJudo.forEach(otraCelda => {
            otraCelda.classList.remove('hover-effect');
        });
    });
});

// Obtener todas las celdas
const campusPatinaje = document.querySelectorAll('.campusPatinaje');

// Añadir el evento mouseenter a todas las celdas
campusPatinaje.forEach(celda => {
    celda.addEventListener('mouseenter', () => {
        // Agregar la clase hover a todas las celdas excepto la actual
        campusPatinaje.forEach(otraCelda => {
            if (otraCelda !== celda) {
                otraCelda.classList.add('hover-effect');
            }
        });
    });

    // Añadir el evento mouseleave para eliminar la clase hover
    celda.addEventListener('mouseleave', () => {
        // Eliminar la clase hover de todas las celdas
        campusPatinaje.forEach(otraCelda => {
            otraCelda.classList.remove('hover-effect');
        });
    });
});

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
});