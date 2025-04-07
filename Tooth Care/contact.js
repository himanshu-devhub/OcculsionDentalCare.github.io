document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".contact-form form");
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        
        // Simulated form submission (replace with actual backend logic)
        alert("Thank you for reaching out! We will contact you soon.");
        form.reset();
    });

    // Smooth fade-in animation
    const contactSection = document.querySelector("#contact");
    contactSection.style.opacity = "0";
    contactSection.style.transform = "translateY(30px)";

    setTimeout(() => {
        contactSection.style.transition = "opacity 1s ease-in-out, transform 1s ease-in-out";
        contactSection.style.opacity = "1";
        contactSection.style.transform = "translateY(0)";
    }, 500);
});
