let speech = new SpeechSynthesisUtterance();

let btn = document.querySelector(".btn");
let typeText = document.querySelector(".text");
let voiceSelet = document.querySelector(".selectVoice");

let voices = [];

window.speechSynthesis.onvoiceschanged = () => {
  voices = window.speechSynthesis.getVoices();
  speech.voice = voices[0];

  voices.forEach(
    (voice, i) => (voiceSelet.options[i] = new Option(voice.name, i))
  );
};

voiceSelet.addEventListener("change", () => {
  speech.voice = voices[voiceSelet.value];
});

btn.addEventListener("click", () => {
  speech.text = typeText.value;
  window.speechSynthesis.speak(speech);
});
