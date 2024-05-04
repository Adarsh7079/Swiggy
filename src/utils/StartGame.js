//this class is for start game 
class Game {
    constructor(player1, player2) {
        this.player1 = player1;
        this.player2 = player2;
    }

    startMatch() {
        let attacker, defender;

        // Determine who attacks first based on health
        if (this.player1.health < this.player2.health) {
            attacker = this.player1;
            defender = this.player2;
        } else {
            attacker = this.player2;
            defender = this.player1;
        }

        while (this.player1.health > 0 && this.player2.health > 0) {
            // Attacker rolls the dice and performs attack
            const attackRoll = attacker.rollDice();
            const attackDamage = attacker.attack * attackRoll;

            // Defender rolls the dice and performs defense
            const defenseRoll = defender.rollDice();
            const defendStrength = defender.defend() * defenseRoll;

            // Calculate damage taken by defender
            const damageTaken = Math.max(attackDamage - defendStrength, 0);

            console.log(`Attacker: Player ${attacker === this.player1 ? '1' : '2'}`);
            console.log(`Defender: Player ${defender === this.player1 ? '1' : '2'}`);
            console.log(`Attack roll: ${attackRoll}`);
            console.log(`Defense roll: ${defenseRoll}`);
            console.log(`Attack damage: ${attackDamage}`);
            console.log(`Defend strength: ${defendStrength}`);
            console.log(`Damage taken: ${damageTaken}`);

            // Reduce defender's health based on damage taken
            defender.reduceHealth(damageTaken);

            // Swap attacker and defender for the next turn
            [attacker, defender] = [defender, attacker];
        }

        console.log(`Game over! Player ${this.player1.health > 0 ? '1' : '2'} wins!`);
    }
}

module.exports = Game;
