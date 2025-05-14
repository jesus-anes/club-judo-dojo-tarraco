function loadMap() {
    document.getElementById('mapaJudoTarraco').innerHTML =
        `<iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12022.149614007581!2d1.254021!3d41.122793!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a3fcd766486197%3A0xa3611ae57a796926!2sCentre%20Esportiu%20Royal%20Tarraco!5e0!3m2!1ses!2ses!4v1740573395094!5m2!1ses!2ses"
            style="border:0;" allowfullscreen="" loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            class="w-100 h-100"></iframe>
    `;

    document.getElementById('mapaRoda').innerHTML =
        `<iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3002.6088956440067!2d1.4589368000000003!3d41.1866969!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a3f3f40c33348f%3A0x33ea36d815c3c712!2sClub%20Judo%20Dojo%20Roda!5e0!3m2!1ses!2ses!4v1740573586476!5m2!1ses!2ses"
            style="border:0;" allowfullscreen="" loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            class="w-100 h-100"></iframe>
    `;

    document.getElementById('mapaPatinaTarraco').innerHTML =
        `<iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3005.576056268547!2d1.206455!3d41.121949!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a157fba34d1c45%3A0xd256dfc46f770413!2sAnillo%20Mediterr%C3%A1neo!5e0!3m2!1ses!2ses!4v1740574400725!5m2!1ses!2ses"
            style="border:0;" allowfullscreen="" loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            class="w-100 h-100"></iframe>
    `;

    document.getElementById('mapaPatinaCastellvell').innerHTML =
        `<iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d375.36039276112746!2d1.0977659649398988!3d41.18071593966983!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a151760c52ccab%3A0xe6020040e7c00f0b!2sCarrer%20Pompeu%20Fabra%2C%201%2C%2043392%20Castellvell%20del%20Camp%2C%20Tarragona!5e0!3m2!1ses!2ses!4v1740574354472!5m2!1ses!2ses"
            style="border:0;" allowfullscreen="" loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            class="w-100 h-100"></iframe>
    `;
}

function mostrarBanner() {
    const banner = document.getElementById('cookie-banner');
    banner.classList.remove('d-none');
}

function ocultarBanner() {
    const banner = document.getElementById('cookie-banner');
    banner.classList.add('d-none');
}

document.addEventListener('DOMContentLoaded', function () {

    // Mostrar solo si no han aceptado ni rechazado
    if (!localStorage.getItem('cookies-choice')) {
        mostrarBanner();
    }

    document.getElementById('acceptCookies').addEventListener('click', function () {
        localStorage.setItem('cookies-choice', 'accepted');
        ocultarBanner();
        // Aquí podrías cargar elementos bloqueados si hace falta (por ejemplo: mapas, YouTube, etc.)
        if (/\/contactos(-cat)?(\.html)?$/i.test(window.location.pathname)) {
            loadMap();
        }
    });

    document.getElementById('rejectCookies').addEventListener('click', function () {
        localStorage.setItem('cookies-choice', 'rejected');
        ocultarBanner();
        // Aquí podrías bloquear aún más recursos si quieres
    });

    if (/\/contactos(-cat)?(\.html)?$/i.test(window.location.pathname)) {
        if (localStorage.getItem('cookies-choice') === 'accepted') {
            loadMap();
        } else {
            const loadButtons = document.getElementsByName('loadMapButton');

            for (let i = 0; i < loadButtons.length; i++) {

                if (loadButtons[i]) {
                    loadButtons[i].addEventListener('click', function () {
                        // Opcionalmente, podrías guardar aquí que las cookies fueron aceptadas
                        localStorage.setItem('cookies-choice', 'accepted');
                        ocultarBanner();
                        loadMap();
                    });
                }
            }
        }
    }
});