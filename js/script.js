
const themeToggle = document.getElementById("themeToggle");

if (themeToggle) {
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark");
        themeToggle.textContent = "☀️";
    } else {
        themeToggle.textContent = "🌙";
    }

    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark");

        if (document.body.classList.contains("dark")) {
            localStorage.setItem("theme", "dark");
            themeToggle.textContent = "☀️";
        } else {
            localStorage.setItem("theme", "light");
            themeToggle.textContent = "🌙";
        }
    });
}


const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

if (menuBtn && nav) {
    menuBtn.addEventListener("click", () => {
        if (!nav.classList.contains("show")) {
            nav.classList.add("show");
            nav.style.animation = "slideIn 0.3s forwards";
        } else {
            nav.style.animation = "slideOut 0.3s forwards";
            setTimeout(() => nav.classList.remove("show"), 300);
        }
    });

    const navLinks = document.querySelectorAll(".nav a");
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            nav.style.animation = "slideOut 0.3s forwards";
            setTimeout(() => nav.classList.remove("show"), 300);
        });
    });
}

window.addEventListener("load", () => {
    const cards = document.querySelectorAll(".card, .project-card, .contact-card");

    cards.forEach((card, index) => {
        card.style.opacity = "0";
        card.style.transform = "translateY(20px)";
        card.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out";

        setTimeout(() => {
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }, index * 200);
    });
});


const feedbackForm = document.getElementById("feedbackForm");
const formStatus = document.getElementById("formStatus");

if (feedbackForm && formStatus) {
    feedbackForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,}$/;
        if (!email.match(emailPattern)) {
            formStatus.textContent = "❌ Введіть коректний email.";
            formStatus.style.color = "red";
            return;
        }

        if (message.length < 5) {
            formStatus.textContent = "❌ Повідомлення занадто коротке.";
            formStatus.style.color = "red";
            return;
        }

        localStorage.setItem("feedbackEmail", email);
        localStorage.setItem("feedbackMessage", message);

        formStatus.textContent = "✅ Повідомлення успішно надіслано!";
        formStatus.style.color = "green";

        feedbackForm.reset();
    });
}


