// Importing relevant JS files and inquirer
const inquirer = require("inquirer");
const { Dog } = require("./dog.js");
const { Cat } = require("./cat.js");
const { Rabbit } = require("./rabbit.js");

// Variable
let myPet;

// Start Function
async function start() {
  const { typeOfPet } = await inquirer.prompt({
    type: "list",
    name: "typeOfPet",
    message: "Please select your Pet ¬",
    choices: [
      { key: "d", name: "Dog", value: "dog" },
      { key: "c", name: "Cat", value: "cat" },
      { key: "r", name: "Rabbit", value: "rabbit" },
    ],
  });

  const { petName } = await inquirer.prompt({
    type: "input",
    name: "petName",
    message: "Please name your CyberPet >>",
  });

  if (typeOfPet === "dog") myPet = new Dog(petName);
  else if (typeOfPet === "cat") myPet = new Cat(petName);
  else if (typeOfPet === "rabbit") myPet = new Rabbit(petName);
  if (typeOfPet === "dog")
    console.log(`
     ^..^      /
     /_/\\_____/
        /\\   /\\
       /  \\ /  \\
    `);
  if (typeOfPet === "cat")
    console.log(`   
     \\   /\\
     )  ( ')
     (  /  )
      \\(__)|`);

  if (typeOfPet === "rabbit")
    console.log(`
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

  userChoice();
}

async function userChoice() {
  const { choices } = await inquirer.prompt({
    type: "list",
    name: "choices",
    message: "Please choose an care option for your CyberPet >>",
    choices: [
      { key: "f", name: "Feed", value: "feed" },
      { key: "ft", name: "Fetch", value: "fetch" },
      { key: "ms", name: "Mouse", value: "mouseOnString" },
      { key: "oc", name: "Obstacle", value: "obstacleCourse" },
      { key: "v", name: "Vet", value: "vet" },
      { key: "s", name: "Stats", value: "stats" },
      { key: "q", name: "Quit", value: "quit" },
    ],
  });

  if (choices === "feed" && myPet.health > 0)
    await myPet.feed(),
      console.log(`
           
            ███████╗░█████╗░████████╗
            ██╔════╝██╔══██╗╚══██╔══╝
            █████╗░░███████║░░░██║░░░
            ██╔══╝░░██╔══██║░░░██║░░░
            ███████╗██║░░██║░░░██║░░░
            ╚══════╝╚═╝░░╚═╝░░░╚═╝░░░            
             `),
      userChoice();
  if (choices === "fetch" && myPet.health > 0)
    await myPet.fetch(), userChoice();
  if (choices === "mouseOnString" && myPet.health > 0)
    await myPet.mouseOnString(), userChoice();
  if (choices === "obstacleCourse" && myPet.health > 0)
    await myPet.obstacleCourse(), userChoice();
  if (choices === "stats" && myPet.health > 0)
    await myPet.stats(), userChoice();
  if (choices === "quit") {
    const quitChoice = await confirmQuit();
    if (quitChoice) return;
  }

  myPet.healthDrain();

  myPet.petDeath();
}

async function confirmQuit() {
  const { quitChoice } = await inquirer.prompt({
    type: "list",
    name: "quitChoice",
    message: "Are you sure you want to quit? >>",
    choices: [
      { key: "y", name: "Yes", value: "yes" },
      { key: "n", name: "No", value: "no" },
    ],
  });
  if (quitChoice === "yes") await start();
  else if (quitChoice === "no") await userChoice();
}

start();
