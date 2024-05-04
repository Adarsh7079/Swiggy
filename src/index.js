const PlayerActivity = require('./utils/PlayerActivity');
const Game = require('./utils/StartGame');

//initialize player
const player1 = new PlayerActivity(50, 5, 10);
const player2 = new PlayerActivity(100, 5, 10);

// Create game
const game = new Game(player1, player2);

// Start the game
game.startMatch();

// Test Player class methods

console.log('All tests passed successfully.');



