/* Developed by Akram Khattab */

const sentences = [
	"The gentle rustle of leaves whispers secrets to the wind, a soothing melody for the soul.",
	"We were like deaf people trying to dance to a beat we couldn't hear, long after the music actually stopped. For once you have tasted flight you will walk the earth with your eyes turned skywards, for there you have been and there you will long to return.",
	"Inhale serenity, exhale tranquility; let the rhythm of your breath guide you to inner peace.",
	"The soft glow of dawn paints the sky in hues of hope, a canvas of endless possibilities.",
	"Beneath the starlit canopy, find solace in the quiet symphony of the night, where dreams take flight.",
	"Embrace the stillness of the forest, where time stands silent and the earth whispers ancient wisdom."
];

// Selecting elements from the DOM
const msg = document.getElementById('msg');
const typedWords = document.getElementById('mywords');
const btn = document.getElementById('btn');

let startTime, endTime;

// Function to start the game
const playGame = () => {
    let randomNumber = Math.floor(Math.random() * sentences.length);
    msg.innerText = sentences[randomNumber];
    let date = new Date();
    startTime = date.getTime();
    btn.innerText = "Done";
}

// Function to end the game and display results
const endGame = () => {
    let date = new Date();
    endTime = date.getTime();
    let totalTime = Math.round((endTime - startTime) / 1000); // milliseconds -> seconds
    let totalStr = typedWords.value;
    let wordCount = wordCounter(totalStr);
    let finalMsg = `You Typed Total ${wordCount} words in ${totalTime} seconds.`;
    msg.innerText = finalMsg;
}

// Function to count words
const wordCounter = (str) => {
    return str.split(/\s+/).filter(function (word) {
        return word.length > 0;
    }).length;
}

// Event listener for the button click
btn.addEventListener('click', function () {
    if (this.innerText === 'Start') {
        typedWords.disabled = false;
        playGame();
    } else if (this.innerText === "Done") {
        typedWords.disabled = true;
        btn.innerText = "Start";
        endGame();
    }
});
