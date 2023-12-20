document.addEventListener("scroll", function () {
    let scrollPosition = window.scrollY;
    document.querySelector('.principal-image img').style.transform = `translateY(${scrollPosition * 0.7}px)`;
});
let lastScrollTop = 0;

document.addEventListener("scroll", function () {
    let currentScrollTop = window.scrollY;

    // Verifica la dirección del scroll
    if (currentScrollTop > lastScrollTop) {
        // Scroll hacia abajo
        document.querySelector('header').classList.add('hidden');
    } else {
        // Scroll hacia arriba
        document.querySelector('header').classList.remove('hidden');
    }

    lastScrollTop = currentScrollTop;
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
