// Rock Paper Scissors
// Let's play! You have to return which player won! In case of a draw return Draw!.

// Examples(Input1, Input2 --> Output):

// "scissors", "paper" --> "Player 1 won!"
// "scissors", "rock" --> "Player 2 won!"
// "paper", "paper" --> "Draw!"

if (p1 === 'scissors' && p2 === 'paper') {
  return 'Player 1 won!';
} else if (p1 === 'paper' && p2 === 'scissors') {
  return 'Player 2 won!';
} else if (p1 === 'rock' && p2 === 'paper') {
  return 'Player 2 won!';
} else if (p1 === 'paper' && p2 === 'rock') {
  return 'Player 1 won!';
} else if (p1 === 'rock' && p2 === 'scissors') {
  return 'Player 1 won!';
} else if (p1 === 'scissors' && p2 === 'rock') {
  return 'Player 2 won!';
} else {
  return 'Draw!';
}

console.log(rps('scissors', 'paper')); // Player 1 won!
console.log(rps('paper', 'scissors')); // Player 2 won!
console.log(rps('rock', 'paper')); // Player 1 won!
console.log(rps('paper', 'rock')); // Player 2 won!
console.log(rps('rock', 'scissors')); // Player 2 won!
console.log(rps('scissors', 'rock')); // Player 1 won!
console.log(rps('rock', 'rock')); // Draw
console.log(rps('scissors', 'scissors')); // Draw
console.log(rps('scpaperissors', 'paper')); // Draw
