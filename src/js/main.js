document.addEventListener("DOMContentLoaded", function () {
  const fleche = document.getElementById("fleche-retour");

  if (fleche) {
    fleche.addEventListener("click", function (event) {
      event.preventDefault();
      history.back();
    });
  }
});

const burgerBtn = document.getElementById("burger-btn");
const menu = document.getElementById("menu");

burgerBtn.addEventListener("click", () => {
  burgerBtn.classList.toggle("open");
  menu.classList.toggle("open");
});
