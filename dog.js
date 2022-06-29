const { Animal } = require('./animal.js');

class Dog extends Animal{constructor(name){super(name);}
    fetch()
    {this.morale +=20;this.hunger -= 20; this.health +=10; console.log(`${this.name} had fun exercising and is ${this.morale}`);
    console.log(`   
        
     /\\__             
    (    @\\___        
   /          O      
  /    (_____/         
 /_____/    U`)
    ; return this};
    healthDrain() {setInterval(()=>{this.health -=1},1000); return this;}
    };

module.exports = {Dog};