const boxes = document.querySelectorAll(".box");
const gameInfo = document.querySelector(".game-info");
const newGameBtn = document.querySelector(".btn");


let currentPlayer;
let gameGrid;

const winningPositions = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

//let's create a function to initialise the game
function initGame() {
    currentPlayer = "X";
    gameGrid = ["","","","","","","","",""];
    //UI pr empty bhi karna padega boxes ko
    boxes.forEach((box, index) => {
        box.innerText = "";
        boxes[index].style.pointerEvents = "all";
        //one more thing is missing, initialise box with css properties again
        box.classList = `box box${index+1}`;
    });
    newGameBtn.classList.remove("active");
    gameInfo.innerText = `Current Player - ${currentPlayer}`;
}

initGame();

function swapTurn() {
    if(currentPlayer === "X") {
        currentPlayer = "O";
    }
    else {
        currentPlayer = "X";
    }
    //UI Update
    gameInfo.innerText = `Current Player - ${currentPlayer}`;
}

function checkGameOver() {
    let answer = "";

    winningPositions.forEach((position) => {
        //all 3 boxes should be non-empty and exactly same in value
        if( (gameGrid[position[0]] !== "" || gameGrid[position[1]] !== "" || gameGrid[position[2]] !== "") 
            && (gameGrid[position[0]] === gameGrid[position[1]] ) && (gameGrid[position[1]] === gameGrid[position[2]])) {

                //check if winner is X
                if(gameGrid[position[0]] === "X") 
                    answer = "X";
                else {
                    answer = "O";
                } 
                    

                //disable pointer events
                boxes.forEach((box) => {
                    box.style.pointerEvents = "none";
                })

                //now we know X/O is a winner
                boxes[position[0]].classList.add("win");
                boxes[position[1]].classList.add("win");
                boxes[position[2]].classList.add("win");
            }
    });

    //it means we have a winner
    if(answer !== "" ) {
        gameInfo.innerText = `Winner Player - ${answer}`;
        newGameBtn.classList.add("active");
        return;
    }

    //We know, NO Winner Found, let's check whether there is tie
    let fillCount = 0;
    gameGrid.forEach((box) => {
        if(box !== "" )
            fillCount++;
    });

    //board is Filled, game is TIE
    if(fillCount === 9) {
        gameInfo.innerText = "Game Tied !";
        newGameBtn.classList.add("active");
    }

}

function handleClick(index) {
    if(gameGrid[index] === "" ) {
        boxes[index].innerText = currentPlayer;
        gameGrid[index] = currentPlayer;
        boxes[index].style.pointerEvents = "none";
        //swap karo turn ko
        swapTurn();
        //check koi jeet toh nahi gya
        checkGameOver();
    }
}

boxes.forEach((box, index) => {
    box.addEventListener("click", () => {
        handleClick(index);
    })
});

newGameBtn.addEventListener("click", initGame);






































































































































// const boxes=document.querySelectorAll(".box")
// const gameInfo=document.querySelector(".game-info")
// const newGameBtn=document.querySelector(".btn")

// let currPlayer
// let gameGrid

// const winningPositions=[
//     [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]
// ]

// // function to initialize the game
// function initGame(){
//     currPlayer="X"
//     gameGrid=["","","","","","","","",""]
//     // UI pe empty karna padega
//     boxes.forEach((box,index)=>{
//         box.innerText=""
//         boxes[index].style.pointerEvents="all"
//     })
//     newGameBtn.classList.remove("active")
//     gameInfo.innerText=`Current Player -${currPlayer}`
// }
// initGame()

// function swapTurn(){
//     if(currPlayer==="X"){
//         currPlayer="0"
//     }
//     else{
//         currPlayer="X"
//     }
//     //UI update
//     gameInfo.innerText=`Current Player - ${currPlayer}`
// }

// function checkGameOver(){
//     let answer=""
//     // all 3 boxes should be non-empty and exactly same in value
//     winningPositions.forEach((position)=>{
//         if((gameGrid[position[0]]!="" || gameGrid[position[1]]!="" || gameGrid[position[2]]!="" )
//         && (gameGrid[position[0]]===gameGrid[position[1]]) && (gameGrid[position[1]]===gameGrid[position[2]])){
    
//         //check if winner is X
//         if(gameGrid[position[0]]==="X") answer="X"
//         else answer="0"

//         //display pointer events
//         boxes.forEach((box)=>{
//             box.style.pointerEvents="null"
//         })

//         //now we know X/0 is a winner
//         boxes[position[0]].classList.add("win")
//         boxes[position[1]].classList.add("win")
//         boxes[position[2]].classList.add("win")
//         }


//     })
//     //we have a winnner then ...
//     if(answer!==""){
//         gameInfo.innerText=`Winner Player -${answer}`
//         newGameBtn.classList.add("active")
//         return 
//     }
// }


// function handleClick(index){
//     if(gameGrid[index]===""){
//         boxes[index].innerText=currPlayer // UI mein change
//         gameGrid[index].innerText=currPlayer  // Inner logic mein change to track status of gameGrid
//         boxes[index].style.pointerEvents="none" // ab kisi sign ko lagake uske point karo tab cursor show nhi hoga 
//         //swap karo turn ko
//         swapTurn()
//         //check koi jeet toh nhi gaya
//         checkGameOver()
//     }
// }

// boxes.forEach((box,index)=>{
//     box.addEventListener("click",()=>{
//         handleClick(index)
//     })
// })

// newGameBtn.addEventListener("click",initGame)


