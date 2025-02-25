let spinBtn = document.getElementById('spin');
let status = document.getElementById('status');
let timer1 = null;

// Spin button functions calls func spin & randomPlayer
function spin() {
    status.textContent = 'Spinning...';
}

function randomPlayer() {
    let index = Math.floor(Math.random() * playerArray.length);
    status.textContent = "Selected player: " + playerArray[index];
    clearTimeout(timer1);
}

spinBtn.addEventListener('click', function () {
    spin();
    timer1 = setTimeout(randomPlayer, 2000)
})

// Part for adding players and maintaining the list
const players = document.getElementById("players");
let playerArray = [];

// Check if player already exists
function checkPlayerName(name) {
    return playerArray.includes(name);
}

// Adds player to array
function addPlayerToArray(name) {
    playerArray.push(name);
}

// Add-player button creates players array and pushes names to list on a display
let addPlayerBtn = document.getElementById("add-player");
addPlayerBtn.addEventListener("click", () => {
    const playerItem = document.createElement("li");
    const name = playerItem.textContent = document.querySelector('input#player-name').value;
    // Checks if player already exists in player array with function
    if (checkPlayerName(name)) {
        status.textContent = 'Player already exists!';
    } else {
        // Appends player to name list in HTML
        players.appendChild(playerItem);
        // Pushes player name to player array for later use in Random function
        addPlayerToArray(name);
        status.textContent = 'Spin the bottle!';
    }
    document.querySelector('input#player-name').value = '';
})
