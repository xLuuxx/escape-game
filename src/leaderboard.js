// To start the json server and make work the leaderboard, run this command : json-server --watch data/leaderboard.json --port 3000

const playersContainer = document.getElementById('players-container');

function formatTime(seconds) {
    return `${seconds}s`;
}

function populateLeaderboard(data) {
    const sortedUsers = data.sort((a, b) => b.timesLeft - a.timesLeft);

    sortedUsers.forEach((user, index) => {
        const playerDiv = document.createElement('div');
        playerDiv.classList.add('player');

        const rankSpan = document.createElement('span');
        rankSpan.classList.add('player-rank');
        rankSpan.textContent = index + 1;

        const nameSpan = document.createElement('span');
        nameSpan.classList.add('player-name');
        nameSpan.textContent = user.username;

        const timeSpan = document.createElement('span');
        timeSpan.classList.add('player-time');
        timeSpan.textContent = formatTime(user.timesLeft);

        playerDiv.appendChild(rankSpan);
        playerDiv.appendChild(nameSpan);
        playerDiv.appendChild(timeSpan);

        playersContainer.appendChild(playerDiv);
    });
}

fetch('http://localhost:3000/users')
    .then(response => {
        if (!response.ok) {
            throw new Error(`Erreur HTTP: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        populateLeaderboard(data);
    })
    .catch(error => {
        console.error('Erreur lors du chargement des données:', error);
    });