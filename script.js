// Array of Pokemon card values (assuming values are random)
const pokemonCards = [
    { name: "Arceus", value: 999, image: "./image/pokemon3.jpeg" },
    { name: "Dialga", value: 985, image: "./image/pokemon2.jpeg" },
    { name: "Giratina", value: 855, image: "./image/pokemon1.jpeg" },
    // Add more cards as needed
];

// Function to simulate bot's card selection    
function selectBotCard() {
    const randomIndex = Math.floor(Math.random() * pokemonCards.length);
    return pokemonCards[randomIndex];
}

// Function to start battle
function battle() {
    const playerCard = selectBotCard();
    const botCard = selectBotCard();

    // Set player's card
    document.getElementById('player-card').innerHTML = `
        <img src="${playerCard.image}">
        <p class="card-value">${playerCard.value}</p>
    `;

    // Set bot's card
    document.getElementById('bot-card').innerHTML = `
        <img src="${botCard.image}">
        <p class="card-value">${botCard.value}</p>
    `;

    // Determine winner
    if (playerCard.value > botCard.value) {
        document.getElementById('result').textContent = 'Pemain Menang!';
    } else if (botCard.value > playerCard.value) {
        document.getElementById('result').textContent = 'Bot Menang!';
    } else {
        document.getElementById('result').textContent = 'Kalian Seri!';
    }
}
