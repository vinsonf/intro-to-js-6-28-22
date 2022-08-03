let speech = new SpeechSynthesisUtterance();

// Set Speech Language
speech.lang = "en";

let voices = []; // global array of available voices

voices = window.speechSynthesis.getVoices();




setTimeout(() => {
    voices = window.speechSynthesis.getVoices();
    // Initially set the First Voice in the Array.
    speech.voice = voices[0];
    // speech.rate = 1;
    // speech.volume = 1;
    // speech.pitch = 1;
  
    speech.text = "Hello World";
  
    window.speechSynthesis.speak(speech);
}, 4000)

