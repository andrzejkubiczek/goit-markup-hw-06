const ACTIVE_CLASS = "is-open";
const openBtn = document.querySelector("#modal-open");
const closeBtn = document.querySelector("#modal-close");
const backdrop = document.querySelector(".backdrop");

openBtn.addEventListener("click", () => {
  backdrop.classList.add(ACTIVE_CLASS);
});

closeBtn.addEventListener("click", () => {
  backdrop.classList.remove(ACTIVE_CLASS);
});
