var typed = new Typed(".text", {
    strings: ["Frontend Developer", "Backend Developer", "Web Developer", "Software Developer"],
    typeSpeed: 50,
    backSpeed: 50,
    backDelay: 1000,
    loop: true
});

const mobile_nav = document.querySelector(".mobile-navbar-btn");
const nav_header = document.querySelector(".header");

const toggleNavbar = () => {
    nav_header.classList.toggle("active");
};
mobile_nav.addEventListener("click", () => toggleNavbar());