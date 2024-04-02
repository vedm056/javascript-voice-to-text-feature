function TextToSpeech(){
    var text = document.getElementById("input-text").value;
    var speech = new SpeechSynthesisUtterance();
    speech.text = text;
    speechSynthesis.speak(speech);
}