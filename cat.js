const { Animal } = require('./animal.js');

class Cat extends Animal{constructor(name){super(name);}
    mouseOnString()
    {this.morale +=20;this.hunger -= 20; this.health +=10; console.log(`${this.name} had fun playing and is ${this.morale}`)
    ; return this}; 
    healthDrain() {setInterval(()=>{this.health -=1},1000); return this;}
    };

module.exports = {Cat};