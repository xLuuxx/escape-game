function initializeRadio() {
    let currentAudio = null;

    const radioDiv = document.querySelector('.radio');
    radioDiv.onclick = function () {
        const radio = document.createElement('div');
        radio.className = 'radio-popup';
        radio.innerHTML = `
            <div class="popup-content">
                <span class="radioClose-popup">&times;</span>
                <button id="frequency1">93.1 hz</button>
                <button id="frequency2">103.8 hz</button>
                <button id="frequency3">110.42 hz</button>
                <button id="frequency4">666.66 hz</button>
            </div>
        `;

        const sounds = {
            frequency1: '../../public/assets/sounds/gressile_radio.mp3',
            frequency2: '../../public/assets/sounds/krab_radio.mp3',
            frequency3: '../../public/assets/sounds/morse.wav',
            frequency4: '../../public/assets/sounds/radio_luu.mp3'
        };

        Object.keys(sounds).forEach(id => {
            const button = radio.querySelector(`#${id}`);
            button.addEventListener('click', () => {
                if (currentAudio) {
                    currentAudio.pause();
                    currentAudio.currentTime = 0;
                }
                currentAudio = new Audio(sounds[id]);
                currentAudio.addEventListener('canplaythrough', () => {
                    currentAudio.play();
                });
                currentAudio.addEventListener('error', (e) => {
                    console.error(`Error loading audio file: ${sounds[id]}`, e);
                });
            });
        });

        radio.querySelector('.radioClose-popup').addEventListener('click', () => {
            if (currentAudio) {
                currentAudio.pause();
                currentAudio.currentTime = 0;
                currentAudio = null;
            }
            radio.remove();
        });

        document.body.appendChild(radio);
    };
}

document.addEventListener('DOMContentLoaded', initializeRadio);



function initializeNotebook () {
    const notebook = document.querySelector('.notebook');
    notebook.addEventListener('click', () => {
        notebook.onclick = function () {
            const notebook = document.createElement('div');
            notebook.className = 'notebook-popup';
            notebook.innerHTML = `
            <div class="popup-content">
                <span class="close-popup">&times;</span>
                <img src="../../public/assets/images/password.png" alt="password">
            </div>
        `;

            notebook.querySelector('.close-popup').addEventListener('click', () => {
                notebook.remove()
            });
            document.body.appendChild(notebook)
        }
    });
}

document.addEventListener('DOMContentLoaded', initializeNotebook);


function initializePostItNotebook () {
    const PostItNotebook = document.querySelector('.post-it-notebook');
    PostItNotebook.addEventListener('click', () => {
        PostItNotebook.onclick = function () {
            const PostItNotebook = document.createElement('div');
            PostItNotebook.className = 'post-it-notebook-popup';
            PostItNotebook.innerHTML = `
            <div class="popup-content">
                <span class="postItNotebookClose-popup">&times;</span>
                <img src="../../public/assets/images/post-it-carnet.png" alt="post-it-notebook">
            </div>
        `;

            PostItNotebook.querySelector('.postItNotebookClose-popup').addEventListener('click', () => {
                PostItNotebook.remove()
            });
            document.body.appendChild(PostItNotebook)
        }
    });
}

document.addEventListener('DOMContentLoaded', initializePostItNotebook);

function initializeComputer () {
    const computer = document.querySelector('.computer');
    computer.addEventListener('click', () => {
        const password = prompt('Mot de passe :')
        if (password === '16510415') {
            const computer = document.createElement('div');
            computer.className = 'computer-popup';
            computer.innerHTML = `
            <div class="computerPopup-content">
                <span class="computerClose-popup">&times;</span>
                <img src="../../public/assets/images/Victime_0.png" alt="first page">
                <img src="../../public/assets/images/Anna_Lizdurine.png" alt="Anna_Lizdurine">
                <img src="../../public/assets/images/Aubins_Sahalor.png" alt="Aubins_Sahalor">
                <img src="../../public/assets/images/Jean_Darme.png" alt="Jean_Darme">
                <img src="../../public/assets/images/Maude_Erne.png" alt="Maude_Erne">
                <img src="../../public/assets/images/Teddy_Gestif.png" alt="Teddy_Gestif">
            </div>
        `;

            computer.querySelector('.computerClose-popup').addEventListener('click', () => {
                computer.remove()
            });
            document.body.appendChild(computer)
        } else {
            alert('Incorrect password.');
        }
    });
}

document.addEventListener('DOMContentLoaded', initializeComputer);

function intializeDrawer() {
    const drawer = document.querySelector('.drawer');
    drawer.addEventListener('click', () => {
        const password = prompt('Mot de passe :')
        if (password === '5713') {
            const drawer = document.createElement('div');
            drawer.className = 'drawer-popup';
            drawer.innerHTML = `
                <div class="drawerPopup-content">
                    <span class="drawerClose-popup">&times;</span>
                    <img src="../../public/assets/images/key_inside.png" alt="key">
                    <p>Vous avez trouvé la clé !</p>
                    <button onclick="window.location.href='secretRoom.html'">Entrer dans la pièce caché</button>
                </div>
            `;

            drawer.querySelector('.drawerClose-popup').addEventListener('click', () => {
                drawer.remove()

            });
            document.body.appendChild(drawer)
        } else {
            alert('Incorrect password.');
        }
    });
}

document.addEventListener('DOMContentLoaded', intializeDrawer);

function intializeTips() {
    const tips = document.querySelector('.tips');
    tips.addEventListener('click', () => {
            const tips = document.createElement('div');
            tips.className = 'tips-popup';
            tips.innerHTML = `
                <div class="tipsPopup-content">
                    <span class="tipsClose-popup">&times;</span>
                    <p>Il faut trouver les énigmes et les post-it correspondant pour les résoudre.</p>
                </div>
            `;

            tips.querySelector('.tipsClose-popup').addEventListener('click', () => {
                tips.remove()

            });
            document.body.appendChild(tips)
    });
}

document.addEventListener('DOMContentLoaded', intializeTips);
