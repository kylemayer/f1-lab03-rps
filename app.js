// import functions and grab DOM elements
import { didUserWin } from "./utils.js";

const button = document.querySelector('#shoot-button');
const results= document.querySelector('#current-result');
const winDiv = document.querySelector('#wins-tot');
const loseDiv = document.querySelector('#losses-tot');
const tiesDiv = document.querySelector('#ties-tot');

console.log(button, winDiv, loseDiv, results, tiesDiv);

// initialize state
const choice = ['rock', 'paper', 'scissors'];
console.log(choice[0]);
console.log(choice[1]);
console.log(choice[2]);
console.log(choice.length);
let wins = 0;
let ties = 0;
let totalGuess = 0;

// set event listeners 
button.addEventListener('click', () => {
  const compSelect = choice[Math.floor(Math.random()*choice.length)];

  const selectedRadio = document.querySelector('input:checked');
  const userGuess = selectedRadio.value;

  const winner = didUserWin(userGuess, compSelect);
  if (winner === 'userWin'){
    wins++;
    results.textContent = 'your guess won!';
  } else if (winner === 'userTie'){
    ties++;
    results.textContent = 'your guess tied';
  } else {
    results.textContent = 'your guess lost!';
  }

console.log(compSelect);
totalGuess++;

  // update DOM to reflect the new state
winDiv.textContent = `You won this many times: ${wins}`;
loseDiv.textContent = `You lost this many times: ${totalGuess - wins}`;
tiesDiv.textContent = `You have tied this many times: ${ties}`;
})