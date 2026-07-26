const moveList = {
  rock: ["scissors", "paper"],
  paper: ["rock", "scissors"],
  scissors: ["paper", "rock"],
};

let moves = Object.keys(moveList);
const randomIndex = Math.floor(Math.random() * moves.length);
const playerMove = process.argv.slice(2)[0]?.toLowerCase();
const opponentMove = moves[randomIndex];

if (playerMove in moveList) {
  switch (opponentMove) {
    case moveList[playerMove][0]:
      console.log(`\nYour ${playerMove} vs a ${opponentMove}: YOU WIN!`);
      break;
    case moveList[playerMove][1]:
      console.log(`\nYour ${playerMove} vs a ${opponentMove}: You lose.`);
      break;
    default:
      console.log(`\nYour ${playerMove} vs a ${opponentMove}: It's a draw.`);
  }
} else {
  console.log(`\nWhat is a ${playerMove}?`);
}
