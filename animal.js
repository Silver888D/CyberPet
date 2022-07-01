class Animal {constructor(name) 
    {this.name = name; this.health = 100; this.hunger = 100; this.morale = 100}

    vet() {this.morale -=20;this.hunger -= 10; this.health +=20; return this;}

    feed() {this.health += 5;this.hunger += 15; this.morale +=2;console.log(`${this.name}'s hunger is ${this.hunger}`);return this;}

    stats() {console.table({name: this.name, health: this.health, hunger: this.hunger, morale: this.morale});return this;}
};

module.exports = { Animal };