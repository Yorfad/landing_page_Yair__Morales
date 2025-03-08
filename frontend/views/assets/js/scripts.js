/*!
* Start Bootstrap - Freelancer v7.0.7 (https://startbootstrap.com/theme/freelancer)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-freelancer/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
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

});



const botonSingUp = document.getElementById('boton-sign-up');
const formulario = document.querySelector(".sign-up");
const inputContraseña = document.getElementById('contraseña-sign-up');
const inputConfirmarContraseña = document.getElementById('confirmarContraseña-sign-up');
const inputsContraseñas = document.querySelectorAll(".contraseña");

botonSingUp.addEventListener('click', (e) => {
    e.preventDefault();
    const firstName = document.getElementById('nombre-sign-up').value;
    const lastName = document.getElementById('apellido-sign-up').value;
    const email = document.getElementById('correo-sign-up').value;
    const contraseña = document.getElementById('contraseña-sign-up').value;
    const confirmarContraseña = document.getElementById('confirmarContraseña-sign-up').value;

    if (validarContraseña(contraseña, confirmarContraseña)) {
        console.log("Se está creando el usuario");
        const usuario = {
            firstName,
            lastName,
            email,
            contraseña,
            confirmarContraseña
        };

        guardarUsuario(usuario); // Guardar en localStorage
        formulario.reset();
    }
});


inputsContraseñas.forEach(input => {
    input.addEventListener("input", () => {
        input.classList.add("incorrecto");

        if (inputContraseña.value === inputConfirmarContraseña.value) {
            inputConfirmarContraseña.classList.add("correcto");
            inputConfirmarContraseña.classList.remove("incorrecto");
        }

        if (input.id === "contraseña-sign-up" && /(?=.*\d)(?=.*[A-Z])(?=.*[!@#$%^&¿?*])(?=.{8,})/.test(inputContraseña.value)) {
            inputContraseña.classList.add("correcto");
            inputContraseña.classList.remove("incorrecto");
        } else if (inputContraseña.value === inputConfirmarContraseña.value) {
            inputConfirmarContraseña.classList.add("correcto");
            inputConfirmarContraseña.classList.remove("incorrecto");
        } else {
            input.classList.add("incorrecto");
            input.classList.remove("correcto");
        }
    });
});

const validarContraseña = (contraseña, confirmarContraseña) => {
    console.log("Se está validando la contraseña");

    if (/(?=.*\d)(?=.*[A-Z])(?=.*[!@#$%^&¿?*])(?=.{8,})/.test(contraseña) && contraseña === confirmarContraseña) {
        console.log("La contraseña es válida");
        inputContraseña.classList.add("correcto");
        inputConfirmarContraseña.classList.add("correcto");
        inputContraseña.classList.remove("incorrecto");
        inputConfirmarContraseña.classList.remove("incorrecto");
        return true;
    } else if (!/(?=.*\d)(?=.*[A-Z])(?=.*[!@#$%^&¿?*])(?=.{8,})/.test(contraseña)) {
        console.log("La contraseña no cumple con los requisitos");
        inputContraseña.classList.add("incorrecto");
        inputContraseña.classList.remove("correcto");
        return false;
    } else if (contraseña !== confirmarContraseña) {
        console.log("Las contraseñas no coinciden");
        inputConfirmarContraseña.classList.add("incorrecto");
        inputConfirmarContraseña.classList.remove("correcto");
        return false;
    } else {
        console.log("Error en la validación de la contraseña");
        return false;
    }
};