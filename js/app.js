'use strict';
//greeting
let username = prompt('What\'s your name?');
console.log(username);
alert(`Welcome ${username} !`);
//instruction
alert('Let\'s play a guessing game! there will be 5 questions, let\'s see how many can you get it right! Please answer the following question with true or false.');
alert(`Are you ready? ${username}`);

// question 1
let nameQuestion = prompt('My name starts with J').toLowerCase();
console.log(nameQuestion);

if (nameQuestion === 'false' || nameQuestion === 'f' || nameQuestion === 'no' || nameQuestion === 'n') {
  console.log('user enter correct answer');
  alert(`you are CORRECT ${username} !`);
} else if (nameQuestion === 'true' || nameQuestion === 't' || nameQuestion === 'yes' || nameQuestion === 'y') {
  console.log('user enter wrong answer');
  alert(`Bzzzz! sorry,wrong answer ${username}, my name starts with B`);
} else {
  console.log('user is not following the direction');
  alert('you need to answer with true or false');
}
// question 2
let foodQuestion = prompt('I don\'tlike watermelon.').toLowerCase();
if (foodQuestion === 'true' || foodQuestion === 't' || foodQuestion === 'yes' || foodQuestion === 'y') {
  console.log('user enter correct answer');
  alert(`you are CORRECT ${username} ! I don't like watermelon! Yah I know I'm werid lol`);
} else if (foodQuestion === 'false' || foodQuestion === 'f' || foodQuestion === 'no' || foodQuestion === 'n') {
  console.log('user enter wrong answer');
  alert(`Bzzzz! sorry, wrong answer ${username}, I don't like watermelon. Yahh I know I'm werid lol `);
} else {
  console.log('user is not following the direction');
  alert('you need to answer with true or false');
}
// question 3
let careerQuestion = prompt('I was working in the education field.').toLowerCase();
if (careerQuestion === 'true' || careerQuestion === 't' || careerQuestion === 'yes' || careerQuestion === 'y') {
  console.log('user enter correct answer');
  alert(`you are CORRECT ${username} ! I was a preschool teacher for 4 years, and I was a Chinese tutor.`);
} else if (careerQuestion === 'false' || careerQuestion === 'f' || careerQuestion === 'no' || careerQuestion === 'n') {
  console.log('user enter wrong answer');
  alert(`Bzzzz! sorry, wrong answer ${username}, I was a preschool teacher for 4 years,and I was a Chinese tutor.`);
} else {
  console.log('user is not following the direction');
  alert('you need to answer with true or false');
}
// question 4
let sweetQeustion = prompt('I don\'t like to drink milk tea').toLowerCase();
if (sweetQeustion === 'true' || sweetQeustion === 't' || sweetQeustion === 'yes' || sweetQeustion === 'y') {
  console.log('user enter wrong answer');
  alert(`Bzzzz! sorry, wrong answer ${username}, I love milk tea! my favorite milk tea place is Happy Lemon and Young tea in Bellevue.`);
} else if (sweetQeustion === 'false ' || sweetQeustion === 'f' || sweetQeustion === 'no' || sweetQeustion === 'n') {
  console.log('user enter correct answer');
  alert(`you are CORRECT ${username} ! I love milk tea! 30% sugar level with less ice. yumm! By the way, my favorite milk tea place is Happy Lemon and Young tea in Bellevue..`);
} else {
  console.log('user is not following the direction');
  alert('you need to answer with true or false');
}

// question 5
let bugQuestion = prompt('I love bugs').toLowerCase();
if (bugQuestion === 'true' || bugQuestion === 't' || bugQuestion === 'yes' || bugQuestion === 'y') {
  console.log('user enter wrong answer');
  alert(`NO! NO! NO sorry, wrong answer ${username}! I hate bugs. I scream everytime when I see bugs. but, as a Software developer, who like bugs? `);
} else if (bugQuestion === 'false' || bugQuestion === 'f' || bugQuestion === 'no' || bugQuestion === 'n') {
  console.log('user enter correct answer');
  alert(`you are CORRECT ${username} ! oh well, as a software engineer, who likes bugs anyway?`);
} else {
  console.log('user is not following the direction');
  alert('you need to answer with true or false');
}
alert(`This is the last alert I promise, and thank you for playing ${username}! Please check out my personal website!`);
