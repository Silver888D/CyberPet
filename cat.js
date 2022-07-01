const { Animal } = require("./animal.js");

async function petDied() {
  console.log(`
     ◣　　　◢
  　　█◣　◢█
  　　█████
  　　▉┃▉┃█
  　　█████　　◢◤
  　　◥████　　█
  　　　████◣　◥◣
  　　　█████◣　█
  　　　██████　█
  　　　██████　█
  　　　██████◢█
  　　　███████◤
  　　　◥█████◤
  Your Pet has died as it's health has reached 0. GAME OVER! Run the file to try again.`);
}

class Cat extends Animal {
  constructor(name) {
    super(name);
  }
  mouseOnString() {
    this.morale += 20;
    this.hunger -= 20;
    this.health += 10;
    console.log(`${this.name} had fun playing and it's morale is now ${this.morale}`);
    console.log(`   
     /\\_/\\           ___
    = o_o =_______    \\ \\  
     __^      __(  \\.__) )
 (@)<_____>__(_____)____/`);
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
  fetch() {
    this.morale -= 20;
    this.hunger -= 20;
    this.health -= 10;
    console.log(`${this.name} looks at you confused, it's morale is now ${this.morale}`);
  }
  obstacleCourse() {
    this.morale -= 20;
    this.hunger -= 20;
    this.health -= 10;
    console.log(`${this.name} climbed to the top and got stuck, it's morale is now ${this.morale}`);
  }
}

module.exports = { Cat };
