const READLINE = require("readline-sync");

let player = {
  name: undefined,
  health: 280,
  courage: 100,
  intellect: 1300,
  strength: 90,
  charm: 9000 ,
  weapon: "death scythe",
  item: "high flashlight",
  catchphrase: undefined,
  element: "death and fire and healing"
};
("what is your element?")
console.log();
console.log("*** WELCOME TO THE HAUNTED HOUSE ***");
player.name = READLINE.question ("what is you weapon?:")
player.name = READLINE.question("what is your element?:");
player.name = READLINE.question("What is your name?:")
console.log(`${player.name} stands in front of a spooky haunted house.`);
console.log(`${player.name} hears what sounds like screaming coming from inside the house.`);
let enterHouse = READLINE.question("Will you enter the house? (yes or no) ");
if(enterHouse == "y" || enterHouse == "yes") {
  player.courage++;

  console.log(`${player.name} prepares her ${player.weapon} and opens the door...`);
  
  console.log(`${player.name} as soon as ${player.name} steps into the room`)

console.log(`${player.name} is attacked by the guard dog of hades. Cerberus!!! `)

console.log(`${player.name} screams 'why!? why must it be me?!'`)

console.log(`${player.name} swings the ${player.weapon} at Cerberus. but stops, ${player.name} feels bads for Cerberus.`)

let friend = READLINE.question("are you  going to spare cerberus or kill him?")

if (friend == "kill") {
  console.log(" you kill cerberus, you cry because now your alone");
}

if (friend == "spare") {
  console.log("you spared cerberus, and he licked you as a sign of affection, he is now your friend,*** CONGATULATIONS YOU HAVE A NEW PARTY MEMBER ***")
}

 
} else {
  player.intellect++;
  console.log(`${player.name} decides not to open the door. However...`);
  // continue the story
  console.log(`${player.name} falls into a trapdoor`)
  console.log("*** MINUS 2 HEALTH POINTS ***")

console.log(`${player.name} tries to stand but the left leg is damaged`)
console.log (`${player.weapon} you lost your weapon`)
 
}
console.log("Thanks for playing!")


console.log("hey you did it")
console.log("WELCOME to level 2")

console.log(`${player.name} )
