document.getElementById("burger").addEventListener("click", () => {
  document.getElementById("nav").classList.toggle("open");
});

const form = document.querySelector(".contact-form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Спасибо за ваше сообщение!");
  form.reset();
});
