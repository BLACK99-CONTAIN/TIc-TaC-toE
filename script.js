let boxes = document.querySelectorAll(".box");
let resetbut = document.querySelector("#reset-but");
let mincontain = document.querySelector(".min-contain ");
let msg = document.querySelector("#msg");
let newbut = document.querySelector("#new-but");
let turn0 = true;
const winpattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {

        if (box.innerText === "") {
            if (turn0) {
                box.innerText = "X";
                turn0 = false;
            }
            else {
                box.innerText = "O";
                turn0 = true;
            }
            
            box.disabled = true;
            checkWinner();
        }
    });
});


const checkWinner = () => {
    let fillbox = 0;
    for (let pat of winpattern) {
        let pos1 = boxes[pat[0]].innerText;
        let pos2 = boxes[pat[1]].innerText;
        let pos3 = boxes[pat[2]].innerText;
        if (pos1 != "" && pos2 != "" && pos3 != "") {
            if (pos1 === pos2 && pos2 === pos3) {
                showwinner(pos1);
                return true;
            }
        }
    }
    for (let box of boxes) {
        if (box.innerText != "") {
            fillbox++;
        }
    }
    if(fillbox === boxes.length){
    
          noonewinner();
          return true;
        }

    return false;

};

const showwinner = (winner) => {
    msg.innerText = `Congratulations ,Winner is ${winner}`;
    mincontain.classList.remove("hide");
    disableboxes();
};

const disableboxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
};
const enableboxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
};

const restart = () => {
    turn0 = true;
    enableboxes();
    mincontain.classList.add("hide");
};

const noonewinner = () => {
   msg.innerText = "No one is Winner,Match is draw!";
   mincontain.classList.remove("hide");
   
}
newbut.addEventListener("click", restart);
resetbut.addEventListener("click", restart);