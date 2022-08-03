// 2 players.
// each player picks between 3 choices.
// we compare choices and see who wins.

// we play against a computer.

const gameWrapper = document.createElement('div');

const player1ScoreElement = document.createElement('h2');
const computerScoreElement = document.createElement('h2');
const playersChoiceElement = document.createElement('h2');
gameWrapper.append(playersChoiceElement);

const computerChoiceElement = document.createElement('h2');
gameWrapper.append(computerChoiceElement);

const resultElement = document.createElement('h2');
gameWrapper.append(resultElement);

const rockButton = document.createElement('button');
rockButton.innerText = 'Rock';
gameWrapper.append(rockButton);

const paperButton = document.createElement('button');
paperButton.innerText = 'Paper';
gameWrapper.append(paperButton);

const scissorsButton = document.createElement('button');
scissorsButton.innerText = 'Scissors';
gameWrapper.append(scissorsButton);

const startButton = document.createElement('button');
startButton.innerText = 'Start';
document.body.append(startButton);

gameWrapper.append(player1ScoreElement);
gameWrapper.append(computerScoreElement);
const gameOverButton = document.createElement('button');
gameOverButton.innerText = 'Game Over';

// Set Speech Language
let speech = new SpeechSynthesisUtterance();
speech.lang = "en";
let voices = []; // global array of available voices
voices = window.speechSynthesis.getVoices();



// game data
let options = ['rock', 'paper', 'scissors'];

let playersChoice = '';
let computerChoice = '';

let player1Score = 0;
let computerScore = 0;




// event listeners
rockButton.addEventListener('click', () => {
    playerPlay('rock');
});

paperButton.addEventListener('click', () => {
    playerPlay('paper');
});

scissorsButton.addEventListener('click', () => {
    playerPlay('scissors');
});
startButton.addEventListener('click', () => {
    startButton.remove();
    document.body.append(gameWrapper);
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0];
      
    speech.text = "Good Luck!";
  
    window.speechSynthesis.speak(speech);
});

// functions
function chooseRandomOption() {
    const randomNumber = Math.random() * options.length;
    const randomIndex =  Math.floor(randomNumber);
    return options[randomIndex];
}

function playerPlay(choice){
    playersChoice = choice;
    playersChoiceElement.innerText = 'player 1 chose ' + playersChoice;
    setTimeout(computerPlay, 2000);
    resultElement.innerText = '';
}

function computerPlay() {
    console.log('computer play')
    computerChoice = chooseRandomOption();
    computerChoiceElement.innerText = 'computer chose ' + computerChoice;
    setTimeout(compareChoices, 2000);
}

function compareChoices(){
    if (playersChoice === computerChoice){
        tie();  
    } else if (playersChoice === 'rock' && computerChoice === 'scissors'){
        player1Wins();
    } else if (computerChoice === 'rock' && playersChoice === 'scissors'){
       computerWins();
    } else if( playersChoice === 'paper' && computerChoice === 'rock'){
        player1Wins();
    } else if (computerChoice === 'paper' && playersChoice === 'rock'){
        computerWins();
    } else if (playersChoice === 'scissors' && computerChoice === 'paper'){
        player1Wins();
    } else {
        computerWins();
    }
    playersChoiceElement.innerText = '';
    computerChoiceElement.innerText = '';
}

function player1Wins(){
    resultElement.innerText = 'Player 1 wins!';
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0];
      
    
    speech.text = "That sucks!";
    speechSynthesis.speak(speech);
    player1Score++;
    updateScores();
}
function computerWins() {
    voices = window.speechSynthesis.getVoices();
    resultElement.innerText = 'Computer wins!';
    speech.voice = voices[0];
      
    speech.text = "Oh Yeah!";
  
    window.speechSynthesis.speak(speech);
    computerScore++;
    updateScores();
}
function tie() {
    voices = window.speechSynthesis.getVoices();
    resultElement.innerText = 'Tie!';
    speech.voice = voices[0];
      
    speech.text = "Good Game!";
  
    window.speechSynthesis.speak(speech);
}

function updateScores() {
    player1ScoreElement.innerText = 'Player 1 Score: ' + player1Score;
    computerScoreElement.innerText = 'Computer Score: ' + computerScore;
    if (player1Score > 2 || computerScore > 2) {
        setTimeout(() => {
            gameWrapper.remove();
            document.body.append(gameOverButton);
        }, 3000)
    }
}

