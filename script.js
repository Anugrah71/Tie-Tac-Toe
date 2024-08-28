let boxbtn = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let newgamebtn = document.querySelector("#new-btn");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let turn_O = true;
let count = 0;

const winning_pattern = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];
const resetgame = () => {
  enabledbox();
  msgcontainer.classList.add("hide");
};
const countnum = () => {
  count = count + 1;
  if (count >= 9) {
    drawmatch();
  }
};
boxbtn.forEach((box) => {
  box.addEventListener("click", () => {
    if (turn_O) {
      box.innerText = "O";
      box.style.color ="skyblue";
      turn_O = false;
    } else {
      box.innerText = "X";
      
      turn_O = true;
    }
    box.disabled = true;
    countnum();
    checkWinner();
  });
});
const disabledbox = () => {
  for (let box of boxbtn) {
    box.disabled = true;
  }
};
const enabledbox = () => {
  for (let box of boxbtn) {
    box.disabled = false;
    box.innerText = "";
  }
};
const showWinner = (winner) => {
  msg.innerText = `Congratulations winner is ${winner}`;
  msgcontainer.classList.remove("hide");
  disabledbox();
};
const drawmatch = () => {
  msg.innerText = "The match is draw";
  msgcontainer.classList.remove("hide");
};
const checkWinner = () => {
  for (let pattern of winning_pattern) {
    let pos1val = boxbtn[pattern[0]].innerText;
    let pos2val = boxbtn[pattern[1]].innerText;
    let pos3val = boxbtn[pattern[2]].innerText;

    if (pos1val != "" && pos2val != "" && pos3val != "" && pos3val != "") {
      if (pos1val === pos2val && pos2val === pos3val) {
        showWinner(pos1val);
      }
    }
  }
};

newgamebtn.addEventListener("click", resetgame);
resetbtn.addEventListener("click", resetgame);
