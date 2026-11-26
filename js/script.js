// ===== Menu mobile =====
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  const aberto = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", aberto);
});

// Fecha o menu ao clicar em um link
navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

// ===== Tema claro / escuro =====
const themeToggle = document.getElementById("themeToggle");
const temaSalvo = localStorage.getItem("tema");

function aplicarTema(tema) {
  document.documentElement.setAttribute("data-theme", tema);
  themeToggle.textContent = tema === "dark" ? "☀️" : "🌙";
}

aplicarTema(temaSalvo || "light");

themeToggle.addEventListener("click", () => {
  const atual = document.documentElement.getAttribute("data-theme");
  const novo = atual === "dark" ? "light" : "dark";
  aplicarTema(novo);
  localStorage.setItem("tema", novo);
});

// ===== Animação ao rolar a página =====
const itens = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);
itens.forEach((el) => observer.observe(el));

// ===== Ano no rodapé =====
document.getElementById("year").textContent = new Date().getFullYear();
