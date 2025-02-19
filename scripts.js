document.addEventListener("DOMContentLoaded", function () {
    
    window.addEventListener("scroll", function () {
        const navbar = document.querySelector(".nav_header");
        navbar.classList.toggle("shrink", window.scrollY > 20);
    });

    let elementsToObserve = document.querySelectorAll(".card_container li, .middlerow, nav");
    let observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => entry.target.classList.add("pop"), index * 300);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    elementsToObserve.forEach(element => observer.observe(element));
});
