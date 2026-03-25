/* =====================================================
   KEVIN COMO — script.js
   ===================================================== */

/* ---- SMOOTH SCROLL ---- */
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute("href"));
        if (target) target.scrollIntoView({ behavior: "smooth" });

        // Chiudi il menu mobile dopo click
        document.getElementById("navLinks").classList.remove("open");
    });
});

/* ---- MOBILE NAV TOGGLE ---- */
const navToggle = document.getElementById("navToggle");
const navLinks  = document.getElementById("navLinks");

navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
});

/* ---- TYPING EFFECT ---- */
const roles = [
    "On‑Site Commissioning Specialist",
    "Tecnico Elettrico & Strumentale",
    "Appassionato di Automazione",
    "Future Web Developer"
];

let i = 0, j = 0, deleting = false;

function typing() {
    const el = document.getElementById("typing");
    if (!el) return;

    const text = roles[i];
    el.textContent = text.substring(0, j);

    if (!deleting && j < text.length) {
        j++;
        setTimeout(typing, 80);
    } else if (deleting && j > 0) {
        j--;
        setTimeout(typing, 40);
    } else {
        deleting = !deleting;
        if (!deleting) i = (i + 1) % roles.length;
        setTimeout(typing, 1200);
    }
}
typing();

/* ---- FADE-IN ON SCROLL ---- */
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add("visible");
    });
}, { threshold: 0.15 });

document.querySelectorAll(".fade").forEach(sec => observer.observe(sec));

/* ---- CONTACT MENU ---- */
const contactBtn  = document.getElementById("contactBtn");
const contactMenu = document.getElementById("contactMenu");
const closeMenu   = document.getElementById("closeMenu");

if (contactBtn && contactMenu && closeMenu) {
    contactBtn.addEventListener("click", () => {
        contactMenu.classList.toggle("hidden");
    });

    closeMenu.addEventListener("click", () => {
        contactMenu.classList.add("hidden");
    });

    // Chiudi cliccando fuori dal menu
    document.addEventListener("click", e => {
        if (
            !contactMenu.classList.contains("hidden") &&
            !contactMenu.contains(e.target) &&
            e.target !== contactBtn
        ) {
            contactMenu.classList.add("hidden");
        }
    });
}

/* ---- ACTIVE NAV LINK ON SCROLL ---- */
const sections = document.querySelectorAll("section[id], header[id]");
const navAnchors = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(sec => {
        if (window.scrollY >= sec.offsetTop - 120) current = sec.id;
    });

    navAnchors.forEach(a => {
        a.classList.toggle("active", a.getAttribute("href") === `#${current}`);
    });
}, { passive: true });