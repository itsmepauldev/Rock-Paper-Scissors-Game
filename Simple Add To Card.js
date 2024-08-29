const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
let win = localStorage.getItem("win")
  ? parseInt(localStorage.getItem("win"))
  : 0;
let lose = localStorage.getItem("lose")
  ? parseInt(localStorage.getItem("lose"))
  : 0;
let reload;
// rock = 1 paper = 2 scissors = 3
//

let decision = Math.round(Math.random() * 2) + 1;
console.log(decision);
rock.onclick = () => {
  if (decision === 3) {
    document.getElementById("win").innerHTML = `You Win!  <br>
   <button onclick = "location.reload()">Play Again</button>`;
    win += 1;
    localStorage.setItem("win", win);
    document.getElementById("you").innerHTML = `Player Score: ${win}`;
  } else {
    document.getElementById("win").innerHTML = `Computer Win!`;
    lose += 1;
    localStorage.setItem("lose", lose);
    document.getElementById("computer").innerHTML = `Computer Scoree: ${lose}`;
  }
};
paper.onclick = () => {
  if (decision === 1) {
    document.getElementById("win").innerHTML = `You Win!
    <br>
   <button onclick = "location.reload()">Play Again</button>
    
    `;
    win += 1;
    localStorage.setItem("win", win);
    document.getElementById("you").innerHTML = `Player Score: ${win}`;
  } else {
    document.getElementById("win").innerHTML = `Computer Win!`;
    lose += 1;
    localStorage.setItem("lose", lose);
    document.getElementById("computer").innerHTML = `Computer Scoree: ${lose}`;
  }
};
scissors.onclick = () => {
  if (decision === 2) {
    document.getElementById("win").innerHTML = `You Win! <br>
   <button onclick = "location.reload()">Play Again</button>`;
    win += 1;
    localStorage.setItem("win", win);
    document.getElementById("you").innerHTML = `Player Score: ${win}`;
  } else {
    document.getElementById("win").innerHTML = `Computer Win!`;
    lose += 1;
    localStorage.setItem("lose", lose);
    document.getElementById("computer").innerHTML = `Computer Scoree: ${lose}`;
  }
};

reload = () => {
  let win = localStorage.getItem("win")
    ? parseInt(localStorage.getItem("win"))
    : 0;
  let lose = localStorage.getItem("lose")
    ? parseInt(localStorage.getItem("lose"))
    : 0;
  document.getElementById("you").innerHTML = `Player Score: ${win}`;
  document.getElementById("computer").innerHTML = `Computer Scoree: ${lose}`;
};
window.onload = reload;
