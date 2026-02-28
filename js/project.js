// ======  button selection ====
const allBtn = document.getElementById("all-btn");
const comBtn = document.getElementById("com-btn");
const progBtn = document.getElementById("prog-btn");
const miniBtn = document.getElementById("mini-btn");

const buttons = document.querySelectorAll(".proj-btns button ");

// ====== cards selection ======
const completeProjects = document.querySelectorAll(".com-proj");
const progressProjects = document.querySelectorAll(".prog-proj");
const miniProjects = document.querySelectorAll(".mini-proj");

const projCards = document.querySelectorAll(".proj-card");

allBtn.addEventListener("click", () => {
  buttons.forEach((btn) => {
    btn.classList.remove("active");
  });
  allBtn.classList.add("active");

  projCards.forEach((card) => {
    card.classList.add("show");
  });
});

comBtn.addEventListener("click", () => {
  buttons.forEach((btn) => {
    btn.classList.remove("active");
  });
  comBtn.classList.add("active");

  projCards.forEach((card) => {
    card.classList.remove("show")
    card.classList.add("hide");
  });
  completeProjects.forEach((comCard) => {
    comCard.classList.add("show");
  });
});
progBtn.addEventListener("click", () => {
  buttons.forEach((btn) => {
    btn.classList.remove("active");
  });
  progBtn.classList.add("active");

  projCards.forEach((card) => {
    card.classList.remove("show")
    card.classList.add("hide");
  });
  progressProjects.forEach((progCard) => {
    progCard.classList.add("show");
  });
});
miniBtn.addEventListener("click", () => {
  buttons.forEach((btn) => {
    btn.classList.remove("active");
  });
  miniBtn.classList.add("active");
  
  projCards.forEach((card) => {
    card.classList.remove("show")
    card.classList.add("hide");
  });
  miniProjects.forEach((miniCard) => {
    miniCard.classList.add("show");
  });
});
