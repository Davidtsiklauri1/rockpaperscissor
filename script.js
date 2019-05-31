//elements of rock scissor paper images
const rockEl = document.getElementById('rock');
const scissorEl = document.getElementById('scissor');
const paperEl = document.getElementById('paper');
//show result
const userScoreEl = document.getElementById('scoreUser');
const compScoreEl = document.getElementById('scoreComp');
const tieEl = document.getElementById('tie');
//Show moves Played 
const userPlayedEl = document.getElementById('userplayed');
const compPlayedEl = document.getElementById('complayd');


//move Played by pc
let playedMove = '';

//forReset
const reset = document.getElementById('reset');
//Array of possibilities
let gameArr = ['scissor','paper','rock'];
//variablesForResult
let humansScore = 0;
let pcScore = 0;
let tie = 0;
//add EventLiseners OnClick
const  rockElClicked = rockEl.addEventListener('click', event => {
	getResultForRock();
    setValueToSore();
    movesPlayed(event.target.id);
   
   
});


const paperElClicked = paperEl.addEventListener('click', event => {
    getResultForScissor();
    setValueToSore();
    movesPlayed(event.target.id);
});
const scissorELClicked = scissorEl.addEventListener('click', event => {
    getResultForPaper();
    setValueToSore();
    movesPlayed(event.target.id);


});
reset.addEventListener('click', event => {
humansScore = 0;
pcScore = 0;
tie = 0;

})
// Core Logic Start here

//get pospossabilities number
function getRandomPossibilities(){
let mathRandom = Math.floor(Math.random() * 3);
return mathRandom;
}
//get random move
function getRandomMove(){
let random = getRandomPossibilities();
return gameArr[random];


}
//cheeks if  played rock
function getResultForRock(){
let randomMove = getRandomMove();
playedMove = randomMove;
if(randomMove === 'paper'){
console.log('pcWon');
pcScore++;
console.log(randomMove);

}
else if(randomMove === 'scissor'){
console.log('humanWon');
humansScore++;


}
else if(randomMove === 'rock'){
console.log('tie');
tie++;
}}

//cheeks if  played scissor
function getResultForScissor(){
let randomMove = getRandomMove();
playedMove = randomMove;
if(randomMove === 'paper'){
console.log('humanWon');
humansScore++;


}
else if(randomMove === 'scissor'){
console.log('tie');
tie++;

movesPlayed(randomMove);
}
else if(randomMove === 'rock'){
console.log('pcWon');
pcScore++;

}}
// cheeks if played paper 


function getResultForPaper(){
let randomMove = getRandomMove();
playedMove = randomMove;
if(randomMove === 'paper'){
console.log('tie');
tie++;
}
else if(randomMove === 'scissor'){
console.log('tie');
pcScore++;

}
else if(randomMove === 'rock'){
console.log('humanWon');
humansScore++;
}}

// sets value to SCore
function setValueToSore(){

   userScoreEl.innerHTML  = humansScore;
   compScoreEl.innerHTML  = pcScore;
   tieEl.innerHTML = tie;
   
}
//played moves in the game bye pc and user

function movesPlayed(id){
userPlayedEl.innerHTML = id;
compPlayedEl.innerHTML =  playedMove;
;

}