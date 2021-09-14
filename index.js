let cardDom = document.querySelector(".card");
let questionDom = document.querySelector(".question");

cardDom.addEventListener("click", changeQuestion);

function changeQuestion() {
  if (cardDom.classList.contains("unstart")) {
    cardDom.classList.remove("unstart");
  }
  questionDom.textContent = data[getRandomArbitrary(0, data.length - 1)];
}

function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
