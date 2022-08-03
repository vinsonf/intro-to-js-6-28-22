import * as GameData from "./gamedata.js";
console.log(GameData);

import {playersChoiceElement, resultElement, computerChoiceElement} from "./elements.js";

import * as Voice from "./voice.js";

// functions
function chooseRandomOption() {
    const randomNumber = Math.random() * GameData.options.length;
    const randomIndex = Math.floor(randomNumber);
    return GameData.options[randomIndex];
  }
  
  export function playerPlay(choice) {
    GameData.updatePlayersChoice(choice);
    playersChoiceElement.innerText = "player 1 chose " + GameData.playersChoice;
    setTimeout(computerPlay, 2000);
    resultElement.innerText = "";
  }
  
  function computerPlay() {
    console.log("computer play");
    GameData.updateComputerChoice(chooseRandomOption());
    computerChoiceElement.innerText = "computer chose " + GameData.computerChoice;
    setTimeout(compareChoices, 2000);
  }
  
  function compareChoices() {
    if (GameData.playersChoice === GameData.computerChoice) {
      tie();
    } else if (GameData.playersChoice === "rock" && GameData.computerChoice === "scissors") {
      player1Wins();
    } else if (GameData.computerChoice === "rock" && GameData.playersChoice === "scissors") {
      computerWins();
    } else if (GameData.playersChoice === "paper" && GameData.computerChoice === "rock") {
      player1Wins();
    } else if (GameData.computerChoice === "paper" && GameData.playersChoice === "rock") {
      computerWins();
    } else if (GameData.playersChoice === "scissors" && GameData.computerChoice === "paper") {
      player1Wins();
    } else {
      computerWins();
    }
    playersChoiceElement.innerText = "";
    computerChoiceElement.innerText = "";
  }
  
  function player1Wins() {
    resultElement.innerText = "Player 1 wins!";
    Voice.say('You Win!');
    player1Score++;
    updateScores();
  }
  function computerWins() {
    resultElement.innerText = "Computer wins!";
    Voice.say('Oh Yeah!');
    updateScores();
  }
  function tie() {
    
    resultElement.innerText = "Tie!";
    Voice.say('Good Game!');
  }
  
  function updateScores() {
    player1ScoreElement.innerText = "Player 1 Score: " + player1Score;
    computerScoreElement.innerText = "Computer Score: " + computerScore;
    if (player1Score > 2 || computerScore > 2) {
      setTimeout(() => {
        gameWrapper.remove();
        document.body.append(gameOverButton);
      }, 3000);
    }
  }