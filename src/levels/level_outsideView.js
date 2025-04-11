function openHouse() {

    const keyDiv = document.querySelector('.key');
    keyDiv.onclick = function () {
        const key = document.createElement('div');
        key.className = 'key-popup';
        key.innerHTML = `
            <div class="popup-content">
            <span class="close-popup">&times;</span>
            <img src="../../public/assets/images/key_outside.png" alt="key to enter" id="key">
            <p>Vous avez trouvé la clé !</p>
            <p>Vous pouvez maintenant entrer dans la maison</p>
            <button id="enter-house" onclick="location.href='mainOffice.html'">C'est parti !</button>
            </div>
        `;

        key.querySelector('.close-popup').addEventListener('click', () => {
            key.remove();
        });

        document.body.appendChild(key);
    };
}

document.addEventListener('DOMContentLoaded', openHouse);


function intializeTips() {
    const tips = document.querySelector('.tips');
    tips.addEventListener('click', () => {
        const tips = document.createElement('div');
        tips.className = 'tips-popup';
        tips.innerHTML = `
                <div class="tipsPopup-content">
                    <span class="tipsClose-popup">&times;</span>
                    <p>Où est-ce que je cacherais mes clefs si j'avais demandé à quelqu'un de passer chez moi ? </p>
                </div>
            `;

        tips.querySelector('.tipsClose-popup').addEventListener('click', () => {
            tips.remove()

        });
        document.body.appendChild(tips)
    });
}

document.addEventListener('DOMContentLoaded', intializeTips);
