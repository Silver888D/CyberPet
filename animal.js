class Animal {constructor(name) 
    {this.name = name; this.health = 100; this.hunger = 100; this.morale = 100}

    play() {this.morale +=1;this.hunger -= 10; return this;}

    eats() {this.health += 5;this.hunger += 10; this.morale +=2;console.log(`${this.name}'s health is ${this.health}`);return this;}

    stats() {return console.table({name: this.name, health: this.health, });}
};

module.exports = { Animal };