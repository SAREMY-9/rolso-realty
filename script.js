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


document.addEventListener("DOMContentLoaded", function () {
    const banner = document.getElementById("cookie-banner");
    const acceptBtn = document.getElementById("accept-cookies");
    const denyBtn = document.getElementById("deny-cookies");

    // Check if user already made a choice
    if (localStorage.getItem("cookieConsent")) {
        banner.style.display = "none";
    }

    // Accept Cookies
    acceptBtn.addEventListener("click", function () {
        localStorage.setItem("cookieConsent", "accepted");
        gtag('consent', 'update', {
            'ad_storage': 'granted',
            'analytics_storage': 'granted'
        });
        banner.style.display = "none";
    });

    // Deny Cookies
    denyBtn.addEventListener("click", function () {
        localStorage.setItem("cookieConsent", "denied");
        gtag('consent', 'update', {
            'ad_storage': 'denied',
            'analytics_storage': 'denied'
        });
        banner.style.display = "none";
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const filters = document.querySelectorAll("select");
    const listings = document.querySelectorAll(".property-card");

    function filterProperties() {
        const location = document.getElementById("locationFilter").value;
        const price = document.getElementById("priceFilter").value;

        listings.forEach(listing => {
            const listingLocation = listing.getAttribute("data-location");
            const listingPrice = parseInt(listing.getAttribute("data-price"));

            let show = true;

            if (location && listingLocation !== location) show = false;
            if (price && listingPrice > parseInt(price)) show = false;

            listing.style.display = show ? "block" : "none";
        });
    }

    filters.forEach(filter => filter.addEventListener("change", filterProperties));
});


function viewPropertyDetails(button) {
    let propertyCard = button.closest(".property-card");

    let title = propertyCard.querySelector("h3").innerText;
    let location = propertyCard.querySelector(".location").innerText;
    let price = propertyCard.querySelector(".price").innerText;
    let image = propertyCard.querySelector("img").src;
    let amenities = propertyCard.getAttribute("data-amenities"); // Get amenities

    // Redirect to property.html with query parameters
    let url = `property.html?title=${encodeURIComponent(title)}&location=${encodeURIComponent(location)}&price=${encodeURIComponent(price)}&image=${encodeURIComponent(image)}&amenities=${encodeURIComponent(amenities)}`;

    window.location.href = url;
}

 function getQueryParams() {
            let params = new URLSearchParams(window.location.search);
            return {
                title: params.get("title"),
                location: params.get("location"),
                price: params.get("price"),
                image: params.get("image"),
                amenities: params.get("amenities")  // Get amenities
            };
        }

        window.onload = function() {
            let property = getQueryParams();
            document.getElementById("property-title").innerText = property.title;
            document.getElementById("property-location").innerText = property.location;
            document.getElementById("property-price").innerText = property.price;
            document.getElementById("property-image").src = property.image;

            // Display amenities as a list
            let amenitiesList = document.getElementById("property-amenities");
            let amenitiesArray = property.amenities ? property.amenities.split(",") : [];
            amenitiesArray.forEach(amenity => {
                let li = document.createElement("li");
                li.textContent = amenity.trim();
                amenitiesList.appendChild(li);
            });
        };