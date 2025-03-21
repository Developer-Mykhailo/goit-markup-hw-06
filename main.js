// mobile-menu toggle
document.querySelectorAll(".js-mobile-menu").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelector(".mb-menu").classList.toggle("is-open");
  });
});

// modal window
document.querySelectorAll(".js-modal-window").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelector(".modal-overlay").classList.toggle("is-open");
  });
});
