export const gameWrapper = document.createElement('div');

export const player1ScoreElement = document.createElement('h2');
export const computerScoreElement = document.createElement('h2');
export const playersChoiceElement = document.createElement('h2');
gameWrapper.append(playersChoiceElement);

export const computerChoiceElement = document.createElement('h2');
gameWrapper.append(computerChoiceElement);

export const resultElement = document.createElement('h2');
gameWrapper.append(resultElement);

export const rockButton = document.createElement('button');
rockButton.innerText = 'Rock';
gameWrapper.append(rockButton);

export const paperButton = document.createElement('button');
paperButton.innerText = 'Paper';
gameWrapper.append(paperButton);

export const scissorsButton = document.createElement('button');
scissorsButton.innerText = 'Scissors';
gameWrapper.append(scissorsButton);

export const startButton = document.createElement('button');
startButton.innerText = 'Start';
document.body.append(startButton);

gameWrapper.append(player1ScoreElement);
gameWrapper.append(computerScoreElement);
export const gameOverButton = document.createElement('button');
gameOverButton.innerText = 'Game Over';

