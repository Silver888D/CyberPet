const { Animal } = require("./animal.js");

async function petDied() {
  console.log(`
   (\\__/)
   (x . x)
   (っ__⊂)0
  Your Pet has died as it's health has reached 0. GAME OVER! Run the file to try again.`);
}

class Rabbit extends Animal {
  constructor(name) {
    super(name);
  }
  obstacleCourse() {
    this.morale += 20;
    this.hunger -= 20;
    this.health += 10;
    console.log(`${this.name} had fun climbing and it's morale is now ${this.morale}`);
    console.log(`
          /)  /)
        ପ(˶•-•˶)ଓ ♡
         /づ  づ 
        (puff puff)
    `);
    return this;
  }
  petDeath() {
    if (this.health <= 0) {
      petDied();
    }
  }
  healthDrain() {
    setInterval(() => {
      this.health -= 1;
    }, 1000);
    return this;
  }
  mouseOnString() {
    this.morale -= 20;
    this.hunger -= 20;
    this.health -= 10;
    console.log(`${this.name} looks at you confused, it's morale is now ${this.morale}`);
  }
  fetch() {
    this.morale -= 20;
    this.hunger -= 20;
    this.health -= 10;
    console.log(`${this.name} got hit in the face with a ball, it's morale is now ${this.morale}`);
  }
}

module.exports = { Rabbit };

