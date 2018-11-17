// 
const READLINE = require("readline-sync");

// use whatever properties you want for the player object
let player = {
  name: undefined,
  courage: 90,
  intellect: 990,
  strength: 888,
  charm: 7000,
  powers: "glitter bombs", "time stopper"
  item: "cute puppies",
};

console.log();
console.log("*** WELCOME TO THE WHITCH'S HOUSE  ***");
player.name = READLINE.question("What is your name?: ");
console.log(`${player.name} stands in front of a spooky WHITCH'S HOUSE.`);
console.log(`${player.name} hears what sounds like screaming coming from inside the house.`);
let enterHouse = READLINE.question("Will you enter the house? (yes or no) ");
if(enterHouse == "y" || enterHouse == "yes") {
  player.courage++;
  console.log(`${player.name} prepares their ${player.powers} and opens the door...`);
  // continue the story

} else {
  player.intellect++;
  console.log(`${player.name} decides not to open the door, player sees the trick`);


}
console.log("Thanks for playing level 1!");
//
console.log("You did it!");
console.log("WELCOME to level 2!")
console.log("So now the WHITCH has two poor kids")
player.name = READLINE.question("which power? (glitter bombs or time stopper) " );
player.powers
if(enterHouse == "y" || enterHouse == "yes"); 
