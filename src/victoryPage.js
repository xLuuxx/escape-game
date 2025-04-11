document.addEventListener('DOMContentLoaded', () => {
    const username = localStorage.getItem('username');
    const timeLeft = parseInt(localStorage.getItem('timeLeft'));

    if (username && timeLeft) {
        const userData = {
            username: username,
            timesLeft: timeLeft
        };

        fetch('/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                console.log('Score saved successfully');
                localStorage.removeItem('username');
                localStorage.removeItem('timeLeft');
            })
            .catch(error => {
                console.error('Error saving score:', error);
            });
    }
});