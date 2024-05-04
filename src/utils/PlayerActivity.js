class PlayerActivity {
  constructor(health, strength, attack) {
    this.health = health;
    this.strength = strength;
    this.attack = attack;
  }

  //to perform attck
  attack() {
    return this.attack * this.rollDice();
  }

  //to defend the player
  defend() {
    return this.strength * this.rollDice();
  }

  //checking halth
  reduceHealth(damage) {
    this.health -= damage;
    //if health goes to negative
    if (this.health < 0) this.health = 0;
  }

  rollDice() {
    return Math.floor(Math.random() * 6) + 1; // 6-sided dice
  }
}


module.exports = PlayerActivity;
