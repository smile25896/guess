let cardDom = document.querySelector(".card");
let questionDom = document.querySelector(".question");

cardDom.addEventListener("click", changeQuestion);
let index = 0;

function changeQuestion() {
  let data = dataString.split(/\s+/);
  if (index >= data.length - 1) {
    questionDom.textContent = "題目用完了";
    return;
  }
  if (cardDom.classList.contains("unstart")) {
    cardDom.classList.remove("unstart");
  }
  sort(data);
  questionDom.textContent = data[index++];
  // questionDom.textContent = data[getRandomArbitrary(0, data.length - 1)];
}

function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function sort(array) {
  array.sort(() => Math.random() - 0.5);
}
