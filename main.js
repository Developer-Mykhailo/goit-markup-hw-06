// mobile-menu toggle
document.querySelectorAll(".js-mobile-menu").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelector(".mb-menu").classList.toggle("is-open");
  });
});

//close mobile menu by clicking on a link
document.querySelectorAll(".mb-link").forEach((link) => {
  link.addEventListener("click", () => {
    document.querySelector(".mb-menu").classList.toggle("is-open");
  });
});

// to open and close modal window
document.querySelectorAll(".js-modal-window").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelector(".modal-overlay").classList.toggle("is-open");
  });
});
