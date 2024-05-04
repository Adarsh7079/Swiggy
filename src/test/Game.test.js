const Game = require("../utils/StartGame");
const PlayerActivity = require("../utils/PlayerActivity");

describe('Game', () => {
    test('startMatch should correctly determine attacker and defender', () => {
        const player1 = new PlayerActivity(50, 5, 10);
        const player2 = new PlayerActivity(100, 10, 5);
        const game = new Game(player1, player2);

        player1.rollDice = jest.fn(() => 2);
        player2.rollDice = jest.fn(() => 4);

        game.startMatch();
        expect(player1.health).toBe(50);
        expect(player2.health).toBe(50);
    });
});
