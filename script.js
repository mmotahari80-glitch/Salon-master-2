const toggle = document.querySelector(".menu-toggle");
const menu = document.querySelector("#mobile-menu");
const links = menu.querySelectorAll("a");

function setMenu(open) {
  menu.classList.toggle("is-open", open);
  document.body.classList.toggle("menu-open", open);
  toggle.setAttribute("aria-expanded", String(open));
  toggle.setAttribute("aria-label", open ? "Luk menu" : "Åbn menu");
}

toggle.addEventListener("click", () => setMenu(!menu.classList.contains("is-open")));
links.forEach((link) => link.addEventListener("click", () => setMenu(false)));
