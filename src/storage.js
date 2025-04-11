function saveGame() {
    const username = localStorage.getItem('username');
    if (!username) return;

    const gameState = {
        username: username,
        currentPage: window.location.pathname,
        timeLeft: localStorage.getItem('timeLeft'),
        timestamp: new Date().toLocaleString()
    };

    const savedGames = JSON.parse(localStorage.getItem('savedGames')) || [];

    // If there is a save to this username, it finds it
    const existingIndex = savedGames.findIndex(save => save.username === username);

    if (existingIndex !== -1) {
        // Update the already existing save
        savedGames[existingIndex] = gameState;
    } else {
        // or it add a new save
        savedGames.push(gameState);
    }

    localStorage.setItem('savedGames', JSON.stringify(savedGames));
}

// Function to load a game
function loadGame() {
    const savedGames = JSON.parse(localStorage.getItem('savedGames'));
    if (!savedGames || savedGames.length === 0) {
        alert('Aucune sauvegarde trouvée');
        return;
    }

    const dialog = document.createElement('div');
    dialog.className = 'save-dialog';
    dialog.innerHTML = `
        <div class="save-content">
            <h3>Choisis ta sauvegarde:</h3>
            <div class="save-list"></div>
        </div>
    `;

    const saveList = dialog.querySelector('.save-list');
    savedGames.forEach((save) => {
        const saveItem = document.createElement('div');
        saveItem.className = 'save-item';
        saveItem.textContent = `${save.username} - ${save.timestamp}`;
        saveItem.onclick = () => {
            localStorage.setItem('username', save.username);
            localStorage.setItem('timeLeft', save.timeLeft);
            document.body.removeChild(dialog);
            window.location.href = save.currentPage;
        };
        saveList.appendChild(saveItem);
    });

    document.body.appendChild(dialog);

    dialog.addEventListener('click', (e) => {
        if (e.target === dialog) {
            document.body.removeChild(dialog);
        }
    });
}

function initializeSaveAndExit() {
    const saveButton = document.querySelector('.saveAndExit button');
    if (saveButton) {
        saveButton.addEventListener('click', () => {
            saveGame();
            window.location.href = '../../public/index/homepage.html';
        });
    }
}

function clearGame() {
    localStorage.removeItem('savedGames');
    localStorage.removeItem('username');
    localStorage.removeItem('timeLeft');
}

document.addEventListener('DOMContentLoaded', () => {
    initializeSaveAndExit();

    if (window.location.pathname.includes('homepage.html')) {
        const loadButton = document.querySelector('button[onclick="loadGame()"]');
        if (loadButton) {
            loadButton.onclick = loadGame;
        }
    }
});