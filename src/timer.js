function startTimer () {
    // take the timeLeft value from the browser's and converts it to an integer and check if it exist, if it does it use it otherwise it use the 300 secondes planned
    let timeLeft = localStorage.getItem('timeLeft') ? parseInt(localStorage.getItem('timeLeft')) : 600;
    const timerElement = document.getElementById('timer');

    const timerInterval = setInterval(() => {
        if (timeLeft <= 0) { // if time is < 0 stop the timer and you have to restart
            clearInterval(timerInterval);
            alert("Time's up! Restarting the game...");
            localStorage.removeItem('timeLeft');
            location.reload(); // Restart the game
            location.href = 'homepage.html'
        } else {
            timeLeft--;
            localStorage.setItem('timeLeft', timeLeft);
            const minutes = Math.floor(timeLeft / 60);
            const seconds = timeLeft % 60;
            // Display the time in the format mm:ss, converting the minutes and seconds to strings
            timerElement.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        }
    }, 1000);
}

window.onload = startTimer;