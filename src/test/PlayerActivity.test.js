const PlayerActivity = require("../utils/PlayerActivity");

describe('PlayerActivity', () => {
  

    test('defend should return correct strength', () => {
        const player = new PlayerActivity(50, 5, 10);
        // Mocking the rollDice method
        player.rollDice = jest.fn(() => 4);
        expect(player.defend()).toBe(20);
    });

    test('reduceHealth should decrease health by given damage', () => {
        const player = new PlayerActivity(50, 5, 10);
        player.reduceHealth(20);
        expect(player.health).toBe(30);
    });

    test('reduceHealth should set health to 0 if damage exceeds health', () => {
        const player = new PlayerActivity(50, 5, 10);
        player.reduceHealth(60);
        expect(player.health).toBe(0);
    });
});
const Game = require('../utils/StartGame');


describe('Game', () => {
    test('startMatch should correctly determine attacker and defender', () => {
        const player1 = new PlayerActivity(50, 5, 10);
        const player2 = new PlayerActivity(100, 10, 5);
        const game = new Game(player1, player2);

        // Mocking rollDice to ensure consistent results
        player1.rollDice = jest.fn(() => 2);
        player2.rollDice = jest.fn(() => 4);

        game.startMatch();
        expect(player1.health).toBe(50);
        expect(player2.health).toBe(50);
    });
});
