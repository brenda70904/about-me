'use strict';
//greeting
let score = 0;
let username = prompt('What\'s your name?');
function greeting() {
  console.log(username);
  alert(`Welcome ${username} !`);
  //instruction
  alert('Let\'s play a guessing game! there will be 5 questions, let\'s see how many you can get right! Please answer the following question with true or false.');
  alert(`Are you ready? ${username}`);
}
greeting();
// question 1
function nameGame() {
  let nameQuestion = prompt('My name starts with J').toLowerCase();

  if (nameQuestion === 'false' || nameQuestion === 'f' || nameQuestion === 'no' || nameQuestion === 'n') {
    console.log('user enter correct answer');
    alert(`you are CORRECT ${username} ! My name strts with B.`);
    score++;
  } else if (nameQuestion === 'true' || nameQuestion === 't' || nameQuestion === 'yes' || nameQuestion === 'y') {
    console.log('user enter wrong answer');
    alert(`Bzzzz! sorry,wrong answer ${username}, my name starts with B.`);
  } else {
    console.log('user is not following the direction');
    alert('you need to answer with true or false');
  }
}
nameGame();
// // question 2
function foodGame() {
  let foodQuestion = prompt('I don\'tlike watermelon.').toLowerCase();
  if (foodQuestion === 'true' || foodQuestion === 't' || foodQuestion === 'yes' || foodQuestion === 'y') {
    console.log('user enter correct answer');
    alert(`you are CORRECT ${username} ! I don't like watermelon! Yeah I know I'm weird  lol`);
    score++;
  } else if (foodQuestion === 'false' || foodQuestion === 'f' || foodQuestion === 'no' || foodQuestion === 'n') {
    console.log('user enter wrong answer');
    alert(`Bzzzz! sorry, wrong answer ${username}, I don't like watermelon! Yeah I know I'm weird`);
  } else {
    console.log('user is not following the direction');
    alert('you need to answer with true or false');
  }
}
foodGame();
// // question 3
function careerGame() {
  let careerQuestion = prompt('I was working in the education field.').toLowerCase();
  if (careerQuestion === 'true' || careerQuestion === 't' || careerQuestion === 'yes' || careerQuestion === 'y') {
    console.log('user enter correct answer');
    alert(`you are CORRECT ${username} ! I was a preschool teacher for 4 years, and I was a Chinese tutor.`);
    score++;
  } else if (careerQuestion === 'false' || careerQuestion === 'f' || careerQuestion === 'no' || careerQuestion === 'n') {
    console.log('user enter wrong answer');
    alert(`Bzzzz! sorry, wrong answer ${username}, I was a preschool teacher for 4 years,and I was a Chinese tutor.`);
  } else {
    console.log('user is not following the direction');
    alert('you need to answer with true or false');
  }
}
careerGame();
// // question 4
function drinksGame() {
  let sweetQeustion = prompt('I don\'t like to drink milk tea').toLowerCase();
  if (sweetQeustion === 'true' || sweetQeustion === 't' || sweetQeustion === 'yes' || sweetQeustion === 'y') {
    console.log('user enter wrong answer');
    alert(`Bzzzz! sorry, wrong answer ${username}, I love milk tea! my favorite milk tea place is Happy Lemon and Young tea in Bellevue.`);
  } else if (sweetQeustion === 'false ' || sweetQeustion === 'f' || sweetQeustion === 'no' || sweetQeustion === 'n') {
    console.log('user enter correct answer');
    alert(`you are CORRECT ${username} ! I love milk tea! 30% sugar level with less ice. Yum! By the way, my favorite milk tea place is Happy Lemon and Young tea in Bellevue.`);
    score++;
  } else {
    console.log('user is not following the direction');
    alert('you need to answer with true or false');
  }
}
drinksGame();

// // question 5
function bug() {
  let bugQuestion = prompt('I love bugs').toLowerCase();
  if (bugQuestion === 'true' || bugQuestion === 't' || bugQuestion === 'yes' || bugQuestion === 'y') {
    console.log('user enter wrong answer');
    alert(`NO! NO! NO sorry, wrong answer ${username}! I hate bugs. I scream every time I see bugs. But, as a Software developer, who likes bugs?`);
  } else if (bugQuestion === 'false' || bugQuestion === 'f' || bugQuestion === 'no' || bugQuestion === 'n') {
    console.log('user enter correct answer');
    alert(`you are CORRECT ${username} ! oh well, as a software engineer, who likes bugs anyway?`);
    score++;
  } else {
    console.log('user is not following the direction');
    alert('you need to answer with true or false');
  }
}
bug();

//question 6
//loop over if statement
//set variable for attempts
//set if else statement for guessing game
alert('New game!');
// let q6 = prompt(`1 to 10, Can you gess what number I am thinking ${username}? you have 4 chances.`);
// let question6 = parseInt(q6);


// for (let i = attempts; i >= 0; i--) {
//   if (i === attempts){
//     q6 = prompt(`1 to 10, Can you gess what number I am thinking ${username}? you have 4 chances.`);
//   }else{ //i < 4
//     q6 = prompt('guess again');
//   }

//   let question6 = parseInt(q6);
//   if (isNaN(question6)) { // Check the type of input -- 1
//     alert('Please enter a number!');
//   } else if (question6 < answer) { // Check the value -- 2
//     alert('Too low!');
//   } else if (question6 > answer) {
//     alert('Too high!');
//   } else { // question6 === answer
//     alert(`correct! the anser is ${answer}`);
//     break;
//   }
//   count++;
// }
// if (count === attempts) {
//   alert('The answer is 4, sorry you didn\'t guess it right');
// }
function guessAnumber() {
  let answer = 4;
  let attempts = 4;
  let count = 0;
  let q6;
  while (attempts > 0) {

    if (attempts === 4) {
      q6 = prompt(`1 to 10, Can you gess what number I am thinking ${username}? you have 4 chances.`);
    } else { //i < 4
      q6 = prompt('guess again');
    }
    let question6 = parseInt(q6);
    if (isNaN(question6)) { // Check the type of input -- 1
      alert('Please enter a number!');
    } else if (question6 < answer) { // Check the value -- 2
      alert('Too low!');
    } else if (question6 > answer) {
      alert('Too high!');
    } else { // question6 === answer
      alert(`correct! the anser is ${answer}`);
      score++;
      break;
    }
    attempts--;
    count++;
  }

  if (count === attempts) {
    alert('The answer is 4, sorry you didn\'t guess it right');
  }
}
guessAnumber();
// question 7
// return for game 7 final score.
let noVeggie = ['eggplant', 'celery', 'cucumber', 'carrot', 'turnip', 'okra', 'radish']; //7

let question7 = prompt('last guessing game, let\'s see if you can guess what vegetable I don\'t like to eat, you will have 6 chances. ').toLowerCase;
//let otherGuess = prompt('what else?');
let chances = 7;


//check if question match to list
for (let i = 0; i < chances; i++) {
  for (let j = 0; j < noVeggie.length; j++) {
    if (question7 === noVeggie[j]) {
      alert(`Yup! I don't like ${question7}! `);
      score++;
      i = chances;
      break; // it will only eveluate noVeggie
    }
  }
  if (i < chances) {
    question7 = prompt('Can you guess another one?');
  }
}
alert(`Things I don't like: ${noVeggie}, Yah I am picky.`);
if (score === 0) {
  alert(`Your total score is ${score}, Thanks for playing!`);
} else {
  alert(`You got ${score} /7 points! Nice job!`);
}
alert(`This is the last alert I promise, and thank you for playing ${username}! Please check out my personal website!`);
