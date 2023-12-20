document.addEventListener("scroll", function () {
    let scrollPosition = window.scrollY;
    document.querySelector('.principal-image img').style.transform = `translateY(${scrollPosition * 0.8}px)`;
});
