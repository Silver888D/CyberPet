const { Animal } = require('./animal.js');

class Rabbit extends Animal{constructor(name){super(name);}
    obstacleCourse()
    {this.morale +=20;this.hunger -= 20; this.health +=10; console.log(`${this.name} had fun climbing and is ${this.morale}`); 
    console.log(`
          /)  /)
        ପ(˶•-•˶)ଓ ♡
         /づ  づ 
        (puff puff)
    `)
    ; return this}; 
    
    healthDrain() {setInterval(()=>{this.health -=10},1000); return this;}
    };

module.exports = {Rabbit};