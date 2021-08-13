const openBtn = document.querySelector(".button");
const closeBtn = document.querySelector(".close");
const card = document.querySelector(".card");

openBtn.addEventListener("click", (e) => {
  card.classList.add("show");
});

closeBtn.addEventListener("click", (e) => {
  card.classList.remove("show");
});
