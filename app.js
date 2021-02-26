let cells = document.querySelectorAll('.row > div');
let Player1= "X";
let Player2= "O";
let TurnCount = 0;
let WinMsg = document.getElementById('WinnerMessageID');
let DrawMsg = document.getElementById('DrawMessageID');

// Listing cells from 0-8
for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener("click", cellClicked);
  }
// List of functions activated upon click
function cellClicked () {
    if(event.target.textContent==="") {
        event.target.textContent = Player1;
        playerTurn();
        checkWinner();
    } 
}
// Swap from X to O
function playerTurn() {
    if (Player1 === "X") {
        Player1 ="O";
        Player2 ="X";
    } else {
        Player1 = "X";
        Player2 = "O";
    }
} 
// Restart game button
function refreshPage(){
    window.location.reload();
} 
// Checks to see if there was a win or draw
function checkWinner() {
    TurnCount++;
    if (
      cells[0].textContent === cells[1].textContent &&
      cells[1].textContent === cells[2].textContent &&
      cells[0].textContent === cells[2].textContent &&
      cells[0].textContent !== "" ||
      cells[3].textContent === cells[4].textContent &&
      cells[4].textContent === cells[5].textContent &&
      cells[3].textContent === cells[5].textContent &&
      cells[3].textContent !== "" ||
      cells[6].textContent === cells[7].textContent &&
      cells[7].textContent === cells[8].textContent &&
      cells[6].textContent === cells[8].textContent &&
      cells[6].textContent !== "" ||
      cells[0].textContent === cells[3].textContent &&
      cells[3].textContent === cells[6].textContent &&
      cells[0].textContent === cells[6].textContent &&
      cells[0].textContent !== "" ||
      cells[1].textContent === cells[4].textContent &&
      cells[4].textContent === cells[7].textContent &&
      cells[1].textContent === cells[7].textContent &&
      cells[1].textContent !== "" ||
      cells[2].textContent === cells[5].textContent &&
      cells[5].textContent === cells[8].textContent &&
      cells[2].textContent === cells[8].textContent &&
      cells[2].textContent !== "" ||
      cells[0].textContent === cells[4].textContent &&
      cells[4].textContent === cells[8].textContent &&
      cells[4].textContent === cells[8].textContent &&
      cells[0].textContent !== "" ||
      cells[2].textContent === cells[4].textContent &&
      cells[4].textContent === cells[6].textContent &&
      cells[2].textContent === cells[6].textContent &&
      cells[2].textContent !== "")
     {
      return  WinMsg.innerHTML = Player2 +" won!";  
    } else if(TurnCount>8) {
         return  DrawMsg.innerHTML = "It's a draw";
    }
  }