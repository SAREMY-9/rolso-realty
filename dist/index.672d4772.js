document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");
    if (menuToggle && navLinks) menuToggle.addEventListener("click", function() {
        navLinks.classList.toggle("active");
        // Toggle between ☰ and ✖
        if (navLinks.classList.contains("active")) menuToggle.textContent = "\u2716";
        else menuToggle.textContent = "\u2630";
    });
    else console.error("Menu toggle or nav links not found.");
});
document.addEventListener("DOMContentLoaded", function() {
    const banner = document.getElementById("cookie-banner");
    const acceptBtn = document.getElementById("accept-cookies");
    const denyBtn = document.getElementById("deny-cookies");
    // Check if user already made a choice
    if (localStorage.getItem("cookieConsent")) banner.style.display = "none";
    // Accept Cookies
    acceptBtn.addEventListener("click", function() {
        localStorage.setItem("cookieConsent", "accepted");
        gtag('consent', 'update', {
            'ad_storage': 'granted',
            'analytics_storage': 'granted'
        });
        banner.style.display = "none";
    });
    // Deny Cookies
    denyBtn.addEventListener("click", function() {
        localStorage.setItem("cookieConsent", "denied");
        gtag('consent', 'update', {
            'ad_storage': 'denied',
            'analytics_storage': 'denied'
        });
        banner.style.display = "none";
    });
});

//# sourceMappingURL=index.672d4772.js.map
