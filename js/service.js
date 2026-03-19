const pro = document.getElementById("main");
const cOne = document.querySelector(".c-one");
const cTwo = document.querySelector(".c-two");
const cThree = document.querySelector(".c-three");
const cFour = document.querySelector(".c-four");
const proCard = document.querySelector(".pro-cards");

function mainHandle() {
  if (window.innerWidth <= 1200) {
    pro.addEventListener("click", () => {
      cOne.classList.toggle("active");
      cTwo.classList.toggle("active");
      cThree.classList.toggle("active");
      cFour.classList.toggle("active");
      pro.classList.toggle("hover");

      proCard.classList.toggle("active");
    });
  } else {
    pro.addEventListener("mouseenter", () => {
      cOne.classList.toggle("active");
      cTwo.classList.toggle("active");
      cThree.classList.toggle("active");
      cFour.classList.toggle("active");
      pro.classList.toggle("hover");

      proCard.classList.toggle("active");
    });
  }
}

mainHandle();
