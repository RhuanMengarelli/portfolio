"use strict";

document.addEventListener("DOMContentLoaded", () => {
    initHeader();
    initMobileMenu();
    initTheme();
    initActiveNavigation();
    initContactForm();
});

/* ==========================================================
   HEADER
========================================================== */

function initHeader() {
    const header = document.getElementById("header");

    if (!header) {
        return;
    }

    const updateHeader = () => {
        if (window.scrollY > 20) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    };

    updateHeader();

    window.addEventListener("scroll", updateHeader);
}

/* ==========================================================
   MENU MOBILE
========================================================== */

function initMobileMenu() {
    const toggle = document.getElementById("nav-toggle");
    const nav = document.getElementById("nav-menu");

    if (!toggle || !nav) {
        return;
    }

    toggle.addEventListener("click", () => {
        nav.classList.toggle("active");
        toggle.classList.toggle("active");
    });

    nav.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            nav.classList.remove("active");
            toggle.classList.remove("active");
        });
    });
}

/* ==========================================================
   DARK MODE
========================================================== */

function initTheme() {
    const button = document.getElementById("theme-toggle");

    if (!button) {
        return;
    }

    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
        document.body.classList.add("dark-theme");
        button.textContent = "☀️";
    }

    button.addEventListener("click", () => {
        document.body.classList.toggle("dark-theme");

        const dark =
            document.body.classList.contains("dark-theme");

        button.textContent = dark ? "☀️" : "🌙";

        localStorage.setItem(
            "theme",
            dark ? "dark" : "light",
        );
    });
}

/* ==========================================================
   ACTIVE NAVIGATION
========================================================== */

function initActiveNavigation() {
    const sections = document.querySelectorAll("section[id]");
    const links = document.querySelectorAll(".nav-list a");

    const activateLink = () => {
        const scroll = window.scrollY + 150;

        sections.forEach((section) => {
            const top = section.offsetTop;
            const height = section.offsetHeight;

            if (
                scroll >= top &&
                scroll < top + height
            ) {
                links.forEach((link) => {
                    link.classList.remove("active");

                    if (
                        link.getAttribute("href") ===
                        `#${section.id}`
                    ) {
                        link.classList.add("active");
                    }
                });
            }
        });
    };

    activateLink();

    window.addEventListener("scroll", activateLink);
}

/* ==========================================================
   CONTACT FORM
========================================================== */

function initContactForm() {
    const form =
        document.getElementById("contact-form");

    if (!form) {
        return;
    }

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        alert(
            "Mensagem enviada com sucesso! (Demonstração)",
        );

        form.reset();
    });
}