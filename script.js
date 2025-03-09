document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    if (menuToggle && navLinks) {
        menuToggle.addEventListener("click", function () {
            navLinks.classList.toggle("active");

            // Toggle between ☰ and ✖
            if (navLinks.classList.contains("active")) {
                menuToggle.textContent = "✖";
            } else {
                menuToggle.textContent = "☰";
            }
        });
    } else {
        console.error("Menu toggle or nav links not found.");
    }
});


