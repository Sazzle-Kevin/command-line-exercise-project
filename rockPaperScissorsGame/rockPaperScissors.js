// ALLE LEGALEN MOVES
const moveList = {
  rock: ["scissors", "paper"],
  paper: ["rock", "scissors"],
  scissors: ["paper", "rock"],
};

let moves = Object.keys(moveList);
const randomIndex = Math.floor(Math.random() * moves.length);
const playerMove = process.argv.slice(2)[0]?.toLowerCase();
const opponentMove = moves[randomIndex];

// MOVES WERDEN VERGLICHEN - ERGEBNIS
if (playerMove in moveList) {
  switch (opponentMove) {
    case moveList[playerMove][0]:
      console.log(`\nYour ${playerMove} vs ${opponentMove}: YOU WIN!`);
      break;
    case moveList[playerMove][1]:
      console.log(`\nYour ${playerMove} vs ${opponentMove}: You lose.`);
      break;
    default:
      console.log(`\nYour ${playerMove} vs ${opponentMove}: It's a draw.`);
  }
  // FALLS DIE EINGABE NICHT IN MOVELIST VORHANDEN IST
} else {
  console.log(`\nWhat is a ${playerMove}?`);
}
