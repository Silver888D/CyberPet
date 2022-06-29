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

    userChoice();}

async function userChoice(){const {choices} = await inquirer.prompt
    ({type: 'list', name:'choices', message:'Please choose an care option for your CyberPet >>',
    choices:[
    {key:'f', name:'Feed', value:'feed'},
    {key:'ft', name:'Fetch', value:'fetch'},
    {key:'ms', name:'Mouse', value:'mouseOnString'},
    {key:'oc', name:'Obstacle', value:'obstacleCourse'},
    {key:'p', name:'Play', value:'play'},
    {key:'s', name:'Stats', value:'stats'},
    {key:'q', name:'Quit', value:'quit'}
    ],});

    if (choices === 'feed') await myPet.feed();
    if (choices === 'fetch') await myPet.fetch();
    if (choices === 'mouseOnString') await myPet.mouseOnString();
    if (choices === 'obstacleCourse') await myPet.obstacleCourse();
    if (choices === 'play') await myPet.play();
    if (choices === 'stats') await myPet.stats();
    if (choices === 'quit') { const quitChoice = await confirmQuit(); if (quitChoice) return;}

    myPet.healthDrain();
    userChoice();
}

async function confirmQuit(){const {quitChoice} = await inquirer.prompt
    ({type:'list', name: 'quitChoice', message: 'Are you sure you want to quit? >>', 
    choices:[{key:'y', name:'Yes', value:'yes'},{key:'n', name:'No', value: 'no'}]});
    if (quitChoice === 'yes') await start();
    else if (quitChoice === 'no')await userChoice();}

start(); 