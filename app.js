let gameSeq = [];
let userSeq = [];

let btns = ["yellow", "red", "purple", "green"];

let started = false;
let level = 0;

let highest = 0;

const h2 = document.querySelector("h2");
const h3 = document.querySelector("h3");
const body = document.querySelector("body");

function startGame() {
  if (started) {
    return;
  }

  console.log("Game Started");
  started = true;
  levelUp();
}

document.addEventListener("keydown", startGame);
document.addEventListener("click", startGame, true);

function gameFlash(btn) {
  btn.classList.add("flash");
  setTimeout(function () {
    btn.classList.remove("flash");
  }, 250);
}

function userFlash(btn) {
  btn.classList.add("userflash");
  setTimeout(function () {
    btn.classList.remove("userflash");
  }, 250);
}

function levelUp() {
  userSeq = [];
  level++;
  h2.innerText = `Level ${level}`;

  let randIdx = Math.floor(Math.random() * btns.length);
  let randColor = btns[randIdx];
  let randBtn = document.querySelector(`.${randColor}`);
  gameSeq.push(randColor);
  console.log(gameSeq);
  gameFlash(randBtn);
}

function checkAns(idx) {
  if (userSeq[idx] === gameSeq[idx]) {
    if (userSeq.length === gameSeq.length) {
      setTimeout(levelUp, 1000);
    }
    return;
  }

  highestScore();
  h3.innerHTML = `Highest Score so far is <b>${highest}</b>`;
  h2.innerHTML = `Game Over! Your score was<br><b>${level}</b><br>Press any key to start.`;
  h2.style.display = "block";
  h2.style.textAlign = "center";
  h2.style.lineHeight = "1.6";
  body.style.backgroundColor = "red";
  setTimeout(function () {
    body.style.backgroundColor = "white";
  }, 150);
  reset();
}

function btnPress() {
  if (!started) {
    return;
  }

  let btn = this;
  userFlash(btn);

  let userColor = btn.getAttribute("id");
  userSeq.push(userColor);

  checkAns(userSeq.length - 1);
}

let allBtns = document.querySelectorAll(".btn");
for (let btn of allBtns) {
  btn.addEventListener("click", btnPress);
}

function reset() {
  started = false;
  gameSeq = [];
  userSeq = [];
  level = 0;
}

function highestScore() {
  if (level > highest) {
    highest = level;
  }
}
