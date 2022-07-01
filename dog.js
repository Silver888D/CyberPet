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
    
    healthDrain() {setInterval(()=>{this.health -=0.25},1000); return this;}
    // Error Handling - wrong option selected points are reduced 
    mouseOnString()
    {this.morale -=20;this.hunger -= 20; this.health -=10; console.log(`${this.name} looks at you confused ${this.morale}`);}
    obstacleCourse()
    {this.morale -=20;this.hunger -= 20; this.health -=10; console.log(`${this.name} tripped on the course ${this.morale}`);};}

module.exports = {Dog};