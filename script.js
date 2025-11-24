let speech = new SpeechSynthesisUtterance();
speech.lang = "en-US";
speech.rate = 1;
speech.pitch = 1;


function toggleMenu() {
    const menu = document.getElementById("voice-controls");
    menu.style.display = (menu.style.display === "flex") ? "none" : "flex";
}


function startReading() {
    window.speechSynthesis.cancel();

    
    const content = document.querySelector(".doc-container").innerText;

    if (!content.trim()) {
        alert("Nothing to read.");
        return;
    }

    speech.text = content;
    window.speechSynthesis.speak(speech);
}


function pauseReading() {
    if (window.speechSynthesis.speaking && !window.speechSynthesis.paused) {
        window.speechSynthesis.pause();
    }
}


function resumeReading() {
    if (window.speechSynthesis.paused) {
        window.speechSynthesis.resume();
    }
}


function stopReading() {
    window.speechSynthesis.cancel();
}
