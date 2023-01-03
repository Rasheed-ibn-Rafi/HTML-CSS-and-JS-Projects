let val1 = Math.ceil(Math.random() * 10);
let val2 = Math.ceil(Math.random() * 10);

let scoreEl = document.getElementById("score");
let questionEl = document.getElementById("question");
let formEl = document.getElementById("form");
let ansEl = document.getElementById("answer");

const correctAns = val1 * val2;

let score = JSON.parse(localStorage.getItem("score"));


if (!score) {
  score = 0;
}

questionEl.innerHTML= `What is ${val1} multiply by ${val2} is ?`
scoreEl.innerHTML = `Score:${score}`

formEl.addEventListener("submit", () => {
  const userAns = +ansEl.value;
  if (userAns === correctAns) {
    score++;
    updateLocalStorage();
  } else {
    score--;
    updateLocalStorage();
  }
});

function updateLocalStorage() {
  localStorage.setItem("score", JSON.stringify(score));
  
}
