// Set Speech Language
export let speech = new SpeechSynthesisUtterance();
speech.lang = "en";
export let voices = []; // global array of available voices
voices = window.speechSynthesis.getVoices();


export function setVoices(array) {
    voices = array;
}

export function say(text) {
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0];
    speech.text = text;
    window.speechSynthesis.speak(speech);
}