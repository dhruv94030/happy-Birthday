// script.js
// Countdown Timer
const countdownDate = new Date("2025-02-14").getTime(); // Set friend's birthday date

const timerElement = document.getElementById("timer");

function updateCountdown() {
    const now = new Date().getTime();
    const timeLeft = countdownDate - now;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    timerElement.innerHTML = `Time left until the big day: ${days}d ${hours}h ${minutes}m ${seconds}s`;

    if (timeLeft < 0) {
        clearInterval(countdownInterval);
        timerElement.innerHTML = "Happy Birthday!! 🎉🎂";
    }
}

const countdownInterval = setInterval(updateCountdown, 1000);

// Secret Message
function revealMessage() {
    document.getElementById("secret-message").style.display = "block";
}
