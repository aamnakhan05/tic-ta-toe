let boxes= document.querySelectorAll(".box")
let turnX=true;
let printWinner=document.querySelector(".winner")
let msg=document.querySelector("#msg")
let resetGame=document.querySelector(".resetbtn")

const winnPattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [3,4,5],
    [6,7,8],
]

boxes.forEach((box) => {
    box.addEventListener("click",() => {
        if(turnX){
            box.innerText="X";
            turnX=false;
        }else{
            box.innerText="O";
            turnX=true;
        }
       box.disabled=true; 
       checkWinner()
    });
});

const winnerMsg = (winner) => {
    msg.innerText=`Congratulations! The winner is ${winner}`
    printWinner.classList.remove("hide")
boxes.forEach((box)=>{
    box.disabled=true;
})
}

const checkWinner=() =>{
    for(let pattern of winnPattern){
        let pos1val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;
        if(pos1val!="" && pos2val!="" && pos3val!=""){
            if(pos1val==pos2val && pos2val==pos3val){
                console.log("Winner",pos1val)
                boxes.disabled=true;
                winnerMsg(pos1val);
            }
        }
    }
}

resetGame.addEventListener("click",() =>{
    boxes.forEach((box)=>{
        turnX=true;
        box.innerText=null;
        box.disabled=false;
        printWinner.classList.add("hide")
    })
})