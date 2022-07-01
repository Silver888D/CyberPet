// Importing relevant JS files and inquirer 
const inquirer = require('inquirer');
const { Dog } = require('./dog.js');
const { Cat } = require('./cat.js');
const { Rabbit } = require('./rabbit.js');


// Variable 
let myPet;

// Start Function 
async function start(){const {typeOfPet} = await inquirer.prompt
    ({type:'list', name: 'typeOfPet', message: 'Please select your Pet ¬', 
    choices:[{key:'d', name:'Dog', value:'dog'},{key:'c', name:'Cat', value: 'cat'},{key:'r', name:'Rabbit', value:'rabbit'},],});
    
    const {petName} = await inquirer.prompt({type:'input', name: 'petName', message:'Please name your CyberPet >>'});

    if(typeOfPet === 'dog')myPet = new Dog(petName);
    else if (typeOfPet === 'cat')myPet = new Cat(petName);
    else if(typeOfPet === 'rabbit')myPet = new Rabbit(petName);
    if (typeOfPet === 'dog') console.log(`
     ^..^      /
     /_/\\_____/
        /\\   /\\
       /  \\ /  \\
    `); 
    if (typeOfPet === 'cat') console.log(`   
     \\   /\\
     )  ( ')
     (  /  )
      \\(__)|`);

    if (typeOfPet === 'rabbit') console.log(`
      ^
     / \\
    / _ \\
   | / \\ |
   ||   || _______
   ||   || |\\     \\
   ||   || ||\\     \\
   ||   || || \\    |
   ||   || ||  \\__/
   ||   || ||   ||
    \\\\_/ \\_/ \\_//
   /   _     _   \\
  /               \\
  |    O     O    |
  |   \\  ___  /   |                           
 /     \\ \\_/ /     \\
/  -----  |  --\\    \\
|     \\__/|\\__/ \\   |
\\       |_|_|       /
 \\_____       _____/
       \\     /
       |     | 
    `); 

    userChoice();}

async function userChoice(){const {choices} = await inquirer.prompt
    ({type: 'list', name:'choices', message:'Please choose an care option for your CyberPet >>',
    choices:[
    {key:'f', name:'Feed', value:'feed'},
    {key:'ft', name:'Fetch', value:'fetch'},
    {key:'ms', name:'Mouse', value:'mouseOnString'},
    {key:'oc', name:'Obstacle', value:'obstacleCourse'},
    {key:'v', name:'Vet', value:'vet'},
    {key:'s', name:'Stats', value:'stats'},
    {key:'q', name:'Quit', value:'quit'}
    ],});
    if (myPet.health <=0){petDied()}
    if (choices === 'feed') await myPet.feed(), console.log(`
           
            ███████╗░█████╗░████████╗
            ██╔════╝██╔══██╗╚══██╔══╝
            █████╗░░███████║░░░██║░░░
            ██╔══╝░░██╔══██║░░░██║░░░
            ███████╗██║░░██║░░░██║░░░
            ╚══════╝╚═╝░░╚═╝░░░╚═╝░░░            
             `);
    if (choices === 'fetch') await myPet.fetch();
    if (choices === 'mouseOnString') await myPet.mouseOnString();
    if (choices === 'obstacleCourse') await myPet.obstacleCourse();
    if (choices === 'play') await myPet.vet();
    if (choices === 'stats') await myPet.stats();
    if (choices === 'quit') { const quitChoice = await confirmQuit(); if (quitChoice) return;}
    petDied();          
    myPet.healthDrain();
    userChoice();
}

async function confirmQuit(){const {quitChoice} = await inquirer.prompt
    ({type:'list', name: 'quitChoice', message: 'Are you sure you want to quit? >>', 
    choices:[{key:'y', name:'Yes', value:'yes'},{key:'n', name:'No', value: 'no'}]});
    if (quitChoice === 'yes') await start();
    else if (quitChoice === 'no')await userChoice();}

async function petDied(){if (myPet.health <=0){const {restartChoice} = await inquirer.prompt
    ({type:'list', name: 'restartChoice', message: `Your Pet has died as it's health has reached 0, would you like to start again? >>`, 
    choices:[{key:'y', name:'Yes', value:'yes'},{key:'n', name:'No', value: 'no'}]});
    if (restartChoice === 'yes') await start();
    else if (restartChoice === 'no')await userChoice();}
    if (typeOfPet === 'dog') console.log(`
    
    ⠀⠀⠀⢀⣠⠤⠔⠒⠒⠒⠒⠒⠢⠤⢤⣀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⢀⠴⠊⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠲⣄⠀⠀⠀
⠀⠀⡰⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⢧⠀⠀
⠀⡸⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢇⠀
⠀⡇⠀⠀⠀⢀⡶⠛⣿⣷⡄⠀⠀⠀⣰⣿⠛⢿⣷⡄⠀⠀⠀⢸⠀
⠀⡇⠀⠀⠀⢸⣷⣶⣿⣿⡇⠀⠀⠀⢻⣿⣶⣿⣿⣿⠀⠀⠀⢸⠀
⠀⡇⠀⠀⠀⠈⠛⠻⠿⠟⠁⠀⠀⠀⠈⠛⠻⠿⠛⠁⠀⠀⠀⢸⠀
⠀⠹⣄⠀⠀⠀⠀⠀⠀⠀⠀⢀⣀⣀⠀⠀⠀⠀⠀⠀⠀⠀⣠⠏⠀
⠀⠀⠈⠢⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣤⣚⡁⠀⠀
⠀⠀⠀⠀⠈⠙⠒⢢⡤⠤⠤⠤⠤⠤⠖⠒⠒⠋⠉⠉⠀⠀⠉⠉⢦
⠀⠀⠀⠀⠀⠀⠀⢸⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸
⠀⠀⠀⠀⠀⠀⠀⢸⡀⠀⠀⠀⠀⣤⠀⠀⠀⢀⣀⣀⣀⠀⠀⠀⢸
⠀⠀⠀⠀⠀⠀⠀⠈⡇⠀⠀⠀⢠⣿⠀⠀⠀⢸⠀⠀⣿⠀⠀⠀⣸
⠀⠀⠀⠀⠀⠀⠀⠀⢱⠀⠀⠀⢸⠘⡆⠀⠀⢸⣀⡰⠋⣆⠀⣠⠇
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠳⠤⠤⠼⠀⠘⠤⠴⠃⠀⠀⠀⠈⠉⠁⠀
    
    `)
    if (typeOfPet === 'cat') console.log(`

     ___
    (___)
____
_\\___ \\  |\\_/|
\\     \\ \\/ , , \\ ___
\\__   \\ \\ ="= //|||\\
|===  \\/____)_)||||
\\______|    | |||||
_/_|  | | =====
(_/  \\_)_) snd
_________________
(                _)
(__   '          )
(___    _____)
  '--'
   `);
    if (typeOfPet === 'rabbit') console.log(`
    /)/)
   ( . .)
    ( づ 🔪
    `); 
    }


start(); 
