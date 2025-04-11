function initializeDragAndDrop() {
    const dragAndDrop = document.querySelector('.desk');
    dragAndDrop.addEventListener('click', () => {
        if (document.querySelector('.dragAndDrop-popup')) {
            return;
        }
        const dragAndDropPopup = document.createElement('div');
        dragAndDropPopup.className = 'dragAndDrop-popup';
        dragAndDropPopup.innerHTML = `
            <div class="dragAndDropPopup-content">
                <span class="dragAndDropClose-popup">&times;</span>
                <div class="draggable-container">
                    <div class="draggable" draggable="true" id="jack-daniels">Teddy Gestif
                    </div>
                    <div class="draggable" draggable="true" id="glasses">Jean Darme
                    </div>
                    <div class="draggable" draggable="true" id="ring">Maude Erne
                    </div>
                    <div class="draggable" draggable="true" id="lipstick">Anna Lizdurine
                    </div>
                    <div class="draggable" draggable="true" id="cigarettes">Inconnu
                    </div>
                    <div class="draggable" draggable="true" id="watch">Aubin Sahalor
                    </div>
                </div>
                <div class="dropzone-container">
                    <div class="dropzone" id="lipstick">
                    <img src="../../public/assets/images/lipstick.png" alt="lipstick" draggable="true">
                    </div>
                    <div class="dropzone" id="ring">
                    <img src="../../public/assets/images/ring.png" alt="ring" draggable="true">
                    </div>
                    <div class="dropzone" id="cigarettes">
                    <img src="../../public/assets/images/cigarettes.png" alt="cigarettes" draggable="true">
                    </div>
                    <div class="dropzone" id="glasses">
                    <img src="../../public/assets/images/glasses.png" alt="glasses" draggable="true">
                    </div>
                    <div class="dropzone" id="jack-daniels">
                    <img src="../../public/assets/images/jack_daniels.png" alt="jack-daniels" draggable="true">
                    </div>
                    <div class="dropzone" id="watch">
                    <img src="../../public/assets/images/watch.png" alt="watch" draggable="true">
                    </div>
                </div>
            </div>
        `;

        const correctPairs = {
            'lipstick': 'lipstick',
            'ring': 'ring',
            'cigarettes': 'cigarettes',
            'glasses': 'glasses',
            'jack-daniels': 'jack-daniels',
            'watch': 'watch',
        };

        dragAndDropPopup.querySelector('.dragAndDropClose-popup').addEventListener('click', () => {
            dragAndDropPopup.remove();
        });

        document.body.appendChild(dragAndDropPopup);

        const draggables = dragAndDropPopup.querySelectorAll('.draggable');
        const dropzones = dragAndDropPopup.querySelectorAll('.dropzone');

        draggables.forEach(draggable => {
            draggable.addEventListener('dragstart', (e) => {
                e.dataTransfer.setData('text/plain', draggable.id);
            });
        });

        function checkWinCondition() {
            let allMatched = true;
            dropzones.forEach(dropzone => {
                const draggable = dropzone.querySelector('.draggable');
                if (!draggable) {
                    allMatched = false;
                    return;
                }
                if (correctPairs[draggable.id] !== dropzone.id) {
                    allMatched = false;
                }
            });
            return allMatched;
        }


        dropzones.forEach(dropzone => {
            dropzone.addEventListener('dragover', (e) => {
                e.preventDefault();
            });

            dropzone.addEventListener('drop', (e) => {
                e.preventDefault();
                const id = e.dataTransfer.getData('text/plain');
                const draggable = dragAndDropPopup.querySelector(`#${id}`);

                const existingDraggable = dropzone.querySelector('.draggable');
                if (existingDraggable) {
                    return;
                }

                dropzone.appendChild(draggable);

                if (checkWinCondition()) {
                    setTimeout(() => {
                        window.location.href = 'victoryPage.html';
                    }, 100);
                }
            });
        });
    });
}

document.addEventListener('DOMContentLoaded', initializeDragAndDrop);


function intializeTips() {
    const tips = document.querySelector('.tips');
    tips.addEventListener('click', () => {
        const tips = document.createElement('div');
        tips.className = 'tips-popup';
        tips.innerHTML = `
                <div class="tipsPopup-content">
                    <span class="tipsClose-popup">&times;</span>
                    <p>Peut-être que les dossiers dans le PC peuvent m'aider...</p>
                </div>
            `;

        tips.querySelector('.tipsClose-popup').addEventListener('click', () => {
            tips.remove()

        });
        document.body.appendChild(tips)
    });
}

document.addEventListener('DOMContentLoaded', intializeTips);
