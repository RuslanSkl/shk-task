document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    validateForm();
});

function validateForm() {
    let isValid = true;
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const message = document.getElementById("message");

    const namePattern = /^[A-Za-z]{2,}$/;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    validateField(name, namePattern, "Name must be at least 2 letters.");
    validateField(email, emailPattern, "Enter a valid email.");
    validateField(message, /.{10,}/, "Message must be at least 10 characters long.");

    document.querySelectorAll(".invalid").length === 0 && alert("Form submitted successfully!");
}

function validateField(field, pattern, errorMessage) {
    const errorSpan = field.nextElementSibling;
    if (!pattern.test(field.value.trim())) {
        field.classList.add("invalid");
        field.classList.remove("valid");
        errorSpan.textContent = errorMessage;
    } else {
        field.classList.add("valid");
        field.classList.remove("invalid");
        errorSpan.textContent = "";
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector(".nav");

    menuToggle.addEventListener("click", () => {
        nav.classList.toggle("active");
    });
});
