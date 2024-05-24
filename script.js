let loveRunning = false;
let lolRunning = false;

function createFallingElement(content, className) {
    const rainContainer = document.getElementById('rain-container');
    const element = document.createElement('div');
    element.className = className;
    element.innerHTML = content;
    element.style.left = Math.random() * 100 + 'vw';
    element.style.animationDuration = (Math.random() * 2 + 5) + 's'; // Random duration between 5s and 7s
    element.style.transform = `translateY(-100vh) rotate(${Math.random() * 360}deg)`;
    rainContainer.appendChild(element);

    element.addEventListener('animationend', () => {
        element.remove();
    });

    // Add a bit of movement to simulate a more dynamic fall
    setTimeout(() => {
        element.style.transform = `translate(${Math.random() * 100 - 50}vw, 100vh) rotate(${Math.random() * 360}deg)`;
    }, 100);
}

function rainLove() {
    if (lolRunning) {
        stopEffect(); // Stop rainLOL if it's running
    }
    loveRunning = true;
    const loveImages = ['heart2.png', 'tootsieroll.png', 'confetti.png']; // Array of different images
    for (let i = 0; i < 30; i++) {
        setTimeout(() => {
            const randomIndex = Math.floor(Math.random() * loveImages.length);
            const imageUrl = loveImages[randomIndex];
            createFallingElement(`<img src="${imageUrl}" alt="<3>" style="width: 6em; height: 6em;">`, 'falling-element');
        }, i * 100);
    }
}

function rainLOL() {
    if (loveRunning) {
        stopEffect(); // Stop rainLove if it's running
    }
    lolRunning = true;
    const lolImages = ['poop.png', 'turd.png', 'funny.png']; // Array of different images
    for (let i = 0; i < 30; i++) {
        setTimeout(() => {
            const randomIndex = Math.floor(Math.random() * lolImages.length);
            const imageUrl = lolImages[randomIndex];
            createFallingElement(`<img src="${imageUrl}" alt="lol" style="width: 6em; height: 6em;">`, 'falling-element');
        }, i * 100);
    }
}

function stopEffect() {
    loveRunning = false;
    lolRunning = false;
    const fallingElements = document.querySelectorAll('.falling-element');
    fallingElements.forEach(element => {
        element.remove();
    });
}