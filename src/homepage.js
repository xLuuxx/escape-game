function saveUsername() {
    const username = document.getElementById('username').value;
    if (username) {
        localStorage.setItem('username', username);
        localStorage.removeItem('timeLeft');
        window.location.href = 'outsideView.html';
    } else {
        alert('Please enter a username.');
    }
}

window.saveUsername = saveUsername;

