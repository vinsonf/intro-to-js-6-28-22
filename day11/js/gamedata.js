import { playersChoiceElement } from "./elements.js";

// game data
export let options = ["rock", "paper", "scissors"];


export let playersChoice = "";
export let computerChoice = "";

export let player1Score = 0;
export let computerScore = 0;

export function updatePlayersChoice(choice){
    playersChoice = choice;
    playersChoiceElement.innerText = "player 1 chose " + playersChoice;
}

export function updateComputerChoice(choice){
    computerChoice = choice;
    playersChoiceElement.innerText = "computer chose " + computerChoice;
}