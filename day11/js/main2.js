// 2 players.
// each player picks between 3 choices.
// we compare choices and see who wins.

// we play against a computer.

import {
    rockButton,
    paperButton,
    scissorsButton,
    startButton,
    gameWrapper,
  
  } from "./elements.js";
  
  
  import {
      playerPlay,
  } from "./functions.js";
  
  import * as Speech from "./voice.js";
  
  
  
  
  // event listeners
  rockButton.addEventListener("click", () => {
    playerPlay("rock");
  });
  
  paperButton.addEventListener("click", () => {
    playerPlay("paper");
  });
  
  scissorsButton.addEventListener("click", () => {
    playerPlay("scissors");
  });
  startButton.addEventListener("click", () => {
    startButton.remove();
    document.body.append(gameWrapper);
    Speech.setVoices(window.speechSynthesis.getVoices());
    Speech.speech.voice = Speech.voices[0];
  
    Speech.speech.text = "Good Luck!";
  
    window.speechSynthesis.speak(Speech.speech);
  });
  
  const phoneNumber = prompt('what is your phone number?');
  
  const phonePattern = /\(?\d{3}\)?[ -]\d{3}[ -]\d{4}/;
  
  const isValidPhoneNumber = phonePattern.test(phoneNumber);
  
  if (isValidPhoneNumber) {
    alert('thank you for your phone number');
  } else {
      alert('please enter a valid phone number');
  }
  
  
  
  