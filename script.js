const header = document.querySelector("[data-header]");
const menuButton = document.querySelector("[data-menu-button]");
const nav = document.querySelector("[data-nav]");
const year = document.querySelector("[data-year]");
const lightbox = document.querySelector("[data-lightbox]");
const lightboxImage = document.querySelector("[data-lightbox-image]");
const closeLightbox = document.querySelector("[data-close-lightbox]");

if (year) {
  year.textContent = new Date().getFullYear();
}

if (menuButton && header) {
  menuButton.addEventListener("click", () => {
    const isOpen = header.classList.toggle("nav-open");
    menuButton.setAttribute("aria-label", isOpen ? "Fechar menu" : "Abrir menu");
  });
}

if (nav && header) {
  nav.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      header.classList.remove("nav-open");
      menuButton?.setAttribute("aria-label", "Abrir menu");
    }
  });
}

document.querySelectorAll("[data-gallery]").forEach((button) => {
  button.addEventListener("click", () => {
    const source = button.getAttribute("data-gallery");
    if (!source || !lightbox || !lightboxImage) return;

    lightboxImage.src = source;
    lightbox.hidden = false;
    closeLightbox?.focus();
  });
});

function hideLightbox() {
  if (!lightbox || !lightboxImage) return;
  lightbox.hidden = true;
  lightboxImage.src = "";
}

closeLightbox?.addEventListener("click", hideLightbox);
lightbox?.addEventListener("click", (event) => {
  if (event.target === lightbox) {
    hideLightbox();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && lightbox && !lightbox.hidden) {
    hideLightbox();
  }
});
