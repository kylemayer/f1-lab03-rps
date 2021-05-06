// import functions and grab DOM elements


const button = document.querySelector('#shoot-button');
const winDiv = document.querySelector('#wins-tot');
const loseDiv = document.querySelector('#losses-tot');
const results= document.querySelector('#current-result');
const tiesDiv = document.querySelector('#ties-tot');

console.log(button, winDiv, loseDiv, results, tiesDiv);

// initialize state
const choice = ['rock', 'paper', 'scissors'];
let wins = 0;
let ties = 0
// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
