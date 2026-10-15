let boxes = document.querySelectorAll(".box");
let reset = document.querySelector(".reset");
let newgamebtn = document.querySelector("#new-btn");
let msgcon = document.querySelector(".msgcon");
let msg = document.querySelector("#msg");

let turnO = true;

const winPattern = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];

boxes.forEach((box) => {
    box.addEventListener("click" ,() => {
        if(turnO) {
            box.innerText = "O";
            turnO = false;
        } else {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;

        checkwinner();
    });
});

const disabledBox = () => {
    for(let box of boxes) {
        box.disabled = true;
    }
}

const enableBox = () => {
    for(let box of boxes) {
        box.disabled = false;
        box.innerText = "";
        msgcon.classList.add("hide");
    }
}

const showwinner = (winner) => {
    msg.innerText = `Congratulations, winner is ${winner}`;
    msgcon.classList.remove("hide");
    disabledBox();
}

const checkwinner = () => {
    for(pattern of winPattern) {
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if(pos1val != "" && pos2val != "" && pos3val != "") {
            if(pos1val === pos2val && pos2val === pos3val) {
                showwinner(pos1val);
            }
        }
    }
}

const resetGame = () => {
    turnO = true;
    enableBox();

} 

newgamebtn.addEventListener("click", resetGame);

reset.addEventListener("click" , resetGame);