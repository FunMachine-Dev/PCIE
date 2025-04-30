
window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    //activa el tooltip
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));


    //oculta-muestra edad corregida
    const prematuro = document.getElementById('prematuro');
    const edadCorrWrapper = document.getElementById('edad-corr-wrapper');

    prematuro.addEventListener('change', () => {
        if (prematuro.value === 'Si') {
            edadCorrWrapper.style.display = 'block';
        } else {
            edadCorrWrapper.style.display = 'none';
        }
    });


    //oculta-muestra indicaciones especiales alimentación
    const indic_alim = document.getElementById('indicaciones-alim');
    const showindicaciones = document.getElementById('show-indicaciones-alim-wrapper');

    indic_alim.addEventListener('change', () => {
        if (indic_alim.value === 'Si') {
            showindicaciones.style.display = 'block';
        } else {
            showindicaciones.style.display = 'none';
        }
    });

    //oculta-muestra indicaciones especiales alimentación
    const contraindic_alim = document.getElementById('contraindicaciones-alim');
    const showcontraindicaciones = document.getElementById('show-contraindicaciones-alim-wrapper');

    contraindic_alim.addEventListener('change', () => {
        if (contraindic_alim.value === 'Si') {
            showcontraindicaciones.style.display = 'block';
        } else {
            showcontraindicaciones.style.display = 'none';
        }
    });

    //oculta-muestra interacciones
    const interaccion = document.getElementById('interaccion');
    const interaccion_wrapper = document.getElementById('interaccion-wrapper');

    interaccion.addEventListener('change', () => {
        if (interaccion.value === 'Si') {
            interaccion_wrapper.style.display = 'block';
        } else {
            interaccion_wrapper.style.display = 'none';
        }
    });


    //oculta-muestra familia
    const familia = document.getElementById('familia');
    const composicion_familia_wrapper = document.getElementById('composicion-familia-wrapper');
    const estrato_familia_wrapper = document.getElementById('estrato-familia-wrapper');
    const interes_familia_wrapper = document.getElementById('interes-familia-wrapper');


    familia.addEventListener('change', () => {
        console.log(familia.value);
        if (familia.value === 'Si') {
            composicion_familia_wrapper.style.display = 'block';
            estrato_familia_wrapper.style.display = 'block';
            interes_familia_wrapper.style.display = 'block';
        } else {
            composicion_familia_wrapper.style.display = 'none';
            estrato_familia_wrapper.style.display = 'none';
            interes_familia_wrapper.style.display = 'none';
        }
    });

    //calculo edad cronologica
    const fechaNacimiento = document.getElementById('fecha_nacimiento');
    const edadCrono = document.getElementById('edad-crono');

    fechaNacimiento.addEventListener('change', () => {
        const hoy = new Date();
        const nacimiento = new Date(fechaNacimiento.value);

        let años = hoy.getFullYear() - nacimiento.getFullYear();
        let meses = hoy.getMonth() - nacimiento.getMonth();

        if (hoy.getDate() < nacimiento.getDate()) {
            meses--;
        }

        if (meses < 0) {
            años--;
            meses += 12;
        }

        edadCrono.value = `${años} años ${meses} meses`;
    });


    
});


