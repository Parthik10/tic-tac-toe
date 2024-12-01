let winner = document.querySelector(".winner");
let btn = document.querySelector(".restart");
let boxes = document.querySelectorAll(".box");
let body = document.querySelector("body");
let win = document.querySelector(".win");

let turnx=true;
count=0;

let patterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
]

let disableboxes = ()=>{
    boxes.forEach(box =>{
        box.disabled=true;
    })
};

let checkwinner=()=>{
    for(let pattern of patterns){
        let val1 = boxes[pattern[0]].innerText; 
        let val2 = boxes[pattern[1]].innerText; 
        let val3 = boxes[pattern[2]].innerText; 

        if(val1 !== "" && val2 !=="" && val3 !==""){
            if(val1 === val2 && val2 === val3){
                showwinner(val1);
                return true;
            }
        }  
    }
};

let showwinner = (winnerName) =>{
    winner.innerHTML=`Congratulations 🥳 The winner is <br> ${winnerName}`;
    disableboxes();
    win.classList.remove("win");
};

let draw = ()=>{
    winner.innerText=`Game draw `;
    disableboxes();
    win.classList.remove("win");
};


boxes.forEach(box => {
   box.addEventListener("click",()=>{
    if(turnx){
        turnx=false;
        box.innerText="x";
        body.style.backgroundColor="rgb(221, 52, 52)";
    }else{
        turnx=true;
        box.innerText="o";
        body.style.backgroundColor="rgb(55, 55, 209)";
    }
    box.disabled=true;
    count++;

    let iswinner=checkwinner();

    if(count === 9 && !iswinner){
        draw();
    }

   });

});

let enableboxes = ()=>{
    boxes.forEach(box =>{
        box.disabled=false;
        box.innerText="";
    });
};

let reset = ()=>{
    turnx=true;
    count=0;
    disableboxes();
    enableboxes();
    win.classList.add("win");
};

btn.addEventListener("click",reset);