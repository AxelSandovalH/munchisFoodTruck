document.addEventListener("scroll", function () {
    let scrollPosition = window.scrollY;
    document.querySelector('.principal-image img').style.transform = `translateY(${scrollPosition * 0.7}px)`;
});
