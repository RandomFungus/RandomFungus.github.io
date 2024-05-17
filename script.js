// Add your JavaScript code here

// For example, you can add an event listener to the navigation menu
document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll("nav ul li a");
    navLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const targetSection = document.querySelector(event.target.getAttribute("href"));
            targetSection.scrollIntoView({ behavior: "smooth" });
        });
    });
});