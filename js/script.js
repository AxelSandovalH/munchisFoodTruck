document.addEventListener("scroll", function () {
    let scrollPosition = window.scrollY;
    document.querySelector('.principal-image img').style.transform = `translateY(${scrollPosition * 0.7}px)`;
});

let lastScrollTop = 0;
let headerHidden = false;

document.addEventListener("scroll", function () {
    let currentScrollTop = window.scrollY;

    // Verifica la dirección del scroll
    if (currentScrollTop > lastScrollTop) {
        // Scroll hacia abajo
        if (!headerHidden) {
            document.querySelector('header').classList.add('hidden');
            headerHidden = true;
        }
    } else {
        // Scroll hacia arriba
        if (headerHidden) {
            document.querySelector('header').classList.remove('hidden');
            headerHidden = false;
        }
    }

    lastScrollTop = currentScrollTop;
});

// Muestra el header al tocar la pantalla en dispositivos móviles
document.addEventListener("touchstart", function () {
    if (headerHidden) {
        document.querySelector('header').classList.remove('hidden');
        headerHidden = false;
    }
});



document.addEventListener("DOMContentLoaded", function () {
    // Agrega un evento de clic al enlace del menú
    document.querySelector('a[href="#menu"]').addEventListener('click', function (event) {
        event.preventDefault();

        // Obtiene el elemento con el id 'menu' (el contenedor de categorías del menú)
        const menuCategories = document.getElementById('menu');

        // Realiza el desplazamiento suave hasta el elemento 'menu'
        menuCategories.scrollIntoView({ behavior: 'smooth' });
    });
});
document.addEventListener("DOMContentLoaded", function () {
    // Agrega un evento de clic al enlace del menú
    document.querySelector('a[href="#aboutus"]').addEventListener('click', function (event) {
        event.preventDefault();

        // Obtiene el elemento con el id 'menu' (el contenedor de categorías del menú)
        const menuCategories = document.getElementById('aboutus');

        // Realiza el desplazamiento suave hasta el elemento 'menu'
        menuCategories.scrollIntoView({ behavior: 'smooth' });
    });
});
document.addEventListener("DOMContentLoaded", function () {
    // Agrega un evento de clic al enlace del menú
    document.querySelector('a[href="#location"]').addEventListener('click', function (event) {
        event.preventDefault();

        // Obtiene el elemento con el id 'menu' (el contenedor de categorías del menú)
        const menuCategories = document.getElementById('location');

        // Realiza el desplazamiento suave hasta el elemento 'menu'
        menuCategories.scrollIntoView({ behavior: 'smooth' });
    });
});
const abrirHamburguesa = document.querySelector("#modal-burguer-open");
const cerrarHamburguesa = document.querySelector("#modal-burguer-close");
const Hamburguesa = document.querySelector("#modal-burguer");

const abrirPapas = document.querySelector("#modal-papas-open");
const cerrarPapas = document.querySelector("#modal-papas-close");
const Papas = document.querySelector("#modal-papas");

const abrirMunchies = document.querySelector("#modal-munchies-open");
const cerrarMunchies = document.querySelector("#modal-munchies-close");
const Munchies = document.querySelector("#modal-munchies");

const abrirBebida = document.querySelector("#modal-bebidas-open");
const cerrarBebida = document.querySelector("#modal-bebidas-close");
const Bebidas = document.querySelector("#modal-bebidas");

// Función para manejar eventos
function manejarEventosModal(modal) {
    modal.showModal();
    console.log("Modal abierto");
}

// Verificar el tamaño de la pantalla al cargar la página
window.onload = function () {
    if (window.innerWidth > 768) {
        // Si el ancho de la pantalla es mayor que 768px, entonces asigna los eventos
        abrirHamburguesa.addEventListener("click", () => manejarEventosModal(Hamburguesa));
        cerrarHamburguesa.addEventListener("click", () => Hamburguesa.close());

        abrirPapas.addEventListener("click", () => manejarEventosModal(Papas));
        cerrarPapas.addEventListener("click", () => Papas.close());

        abrirMunchies.addEventListener("click", () => manejarEventosModal(Munchies));
        cerrarMunchies.addEventListener("click", () => Munchies.close());

        abrirBebida.addEventListener("click", () => manejarEventosModal(Bebidas));
        cerrarBebida.addEventListener("click", () => Bebidas.close());
    }
};

// Añadir un listener para el evento resize para comprobar cambios en el tamaño de la pantalla
window.addEventListener('resize', function () {
    if (window.innerWidth > 768) {
        // Si el ancho de la pantalla es mayor que 768px, entonces asigna los eventos
        abrirHamburguesa.addEventListener("click", () => manejarEventosModal(Hamburguesa));
        cerrarHamburguesa.addEventListener("click", () => Hamburguesa.close());

        abrirPapas.addEventListener("click", () => manejarEventosModal(Papas));
        cerrarPapas.addEventListener("click", () => Papas.close());

        abrirMunchies.addEventListener("click", () => manejarEventosModal(Munchies));
        cerrarMunchies.addEventListener("click", () => Munchies.close());

        abrirBebida.addEventListener("click", () => manejarEventosModal(Bebidas));
        cerrarBebida.addEventListener("click", () => Bebidas.close());
    } else {
        // Si el ancho de la pantalla no es mayor que 768px, puedes hacer algo más o no asignar eventos
        abrirHamburguesa.removeEventListener("click", () => manejarEventosModal(Hamburguesa));
        cerrarHamburguesa.removeEventListener("click", () => Hamburguesa.close());

        abrirPapas.removeEventListener("click", () => manejarEventosModal(Papas));
        cerrarPapas.removeEventListener("click", () => Papas.close());

        abrirMunchies.removeEventListener("click", () => manejarEventosModal(Munchies));
        cerrarMunchies.removeEventListener("click", () => Munchies.close());

        abrirBebida.removeEventListener("click", () => manejarEventosModal(Bebidas));
        cerrarBebida.removeEventListener("click", () => Bebidas.close());
    }
});


function toggleMenu() {
    const navbarContent = document.querySelector('.navbar-content');
    const menuIcon = document.querySelector('.menu-icon');

    navbarContent.classList.toggle('show');
    menuIcon.classList.toggle('active');

    
    navbarContent.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', () => {
            navbarContent.classList.remove('show');
            menuIcon.classList.remove('active');
        });
    });
}


document.addEventListener('click', (event) => {
    const navbarContent = document.querySelector('.navbar-content');
    const menuIcon = document.querySelector('.menu-icon');

    if (!navbarContent.contains(event.target) && !menuIcon.contains(event.target)) {
        navbarContent.classList.remove('show');
        menuIcon.classList.remove('active');
    }
});
