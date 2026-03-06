let currentPlayer = "";
let randomNumber = Math.floor(Math.random()*2);
let cells = document.querySelectorAll(".cell");
let board = ["", "", "", "", "", "", "", "", ""]
let statusText= document.querySelector(".currentPlayer");
let currentPlayerContent = "";
if(randomNumber === 0){
  currentPlayer = "X"
  statusText.textContent = "player X's turn";
}else{
  currentPlayer = "O"
  statusText.textContent = "player O's turn";
}
let resetButton = document.querySelector(".btn").addEventListener("click", function(){
cells.forEach(cell => {
    cell.textContent = ""; 
});
let randomNumber2 = Math.floor(Math.random()*2);
  if(randomNumber2 === 0){
  currentPlayer = "X"
  statusText.textContent = "player X's turn";
}else{
  currentPlayer = "O"
  statusText.textContent = "player O's turn";
}
board = ["", "", "", "", "", "", "", "", ""]
endGame = true;
statusText.style.color = "#00D2FF";
})
let endGame = true;
cells.forEach((cell, index) => {
  cell.addEventListener("click", () => {
if(cell.textContent === ""){
  if(endGame){ 
cell.textContent = currentPlayer;
}
if(currentPlayer === "X"){
  currentPlayer = "O"
}else{
  currentPlayer = "X"
}
}
if(endGame){ 
  
if(currentPlayer === "X"){
  statusText.textContent = "player X's turn";
}else{
  statusText.textContent = "player O's turn";
}
}
let clickedIndex = index + cell.textContent;
board[clickedIndex[0]] = clickedIndex[1];
if(endGame){  
if(board[0] === "X" && board[1] === "X" && board[2] === "X"
  || board[3] === "X" && board[4] === "X" && board[5] === "X" 
  || board[6] === "X" && board[7] === "X" && board[8] === "X" 
  || board[0] === "X" && board[3] === "X" && board[6] === "X"
  || board[1] === "X" && board[4] === "X" && board[7] === "X"
  || board[2] === "X" && board[5] === "X" && board[8] === "X"
  || board[0] === "X" && board[4] === "X" && board[8] === "X"
  || board[2] === "X" && board[4] === "X" && board[6] === "X"){

 statusText.textContent = "Player X wins!"
 statusText.style.color = "#22C55E";
 endGame = false;
}
if(board[0] === "O" && board[1] === "O" && board[2] === "O"
  || board[3] === "O" && board[4] === "O" && board[5] === "O" 
  || board[6] === "O" && board[7] === "O" && board[8] === "O" 
  || board[0] === "O" && board[3] === "O" && board[6] === "O"
  || board[1] === "O" && board[4] === "O" && board[7] === "O"
  || board[2] === "O" && board[5] === "O" && board[8] === "O"
  || board[0] === "O" && board[4] === "O" && board[8] === "O"
  || board[2] === "O" && board[4] === "O" && board[6] === "O"){
  statusText.textContent = "Player O wins!"
statusText.style.color = "#22C55E";
endGame = false;
}
if(board[0] !== "" && board[1] !== "" && board[2]!== "" &&
  board[3] !== "" && board[4] !== "" && board[5] !== "" &&
  board[6] !== "" && board[7] !== "" && board[8] !== "" 
 ){
  statusText.textContent = "Draw!"
  statusText.style.color = "#64748B";
  endGame = false;
}
}
});
});




















