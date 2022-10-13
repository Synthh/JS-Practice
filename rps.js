// IMPORTS
import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
import randomItem from 'random-item';

// GLOBAL VARIABLES
const rl = readline.createInterface({ input, output });
var userScore = 0; // The user's score, incremented in randomChoice()
var sysScore = 0; // The system's score, incremented in randomChoice()
var win = "You won!"; // Win message
var score = () => `Score: ${userScore} | ${sysScore}`; // Anonymous function allows for mutable string

// INFINITE LOOP
async function main() {
    while (await userInput()) ; // infinite while loop until program returns false, which it doesn't
}

// GET USER INPUT
async function userInput() {
    const ans = await rl.question("Rock, paper, or scissors? "); // Awaits user input
    // Checks for valid inputs, ?. = optional chaining operator - If input entered is null/undefined, returns undefined instead of throwing an error
    if (ans?.toLowerCase() === "rock" || ans?.toLowerCase() === "paper" || ans?.toLowerCase() === "scissors") {
        return randomChoice(ans);
    } else {
        console.log("Not a valid input.");
        return true;
    }
}

// RANDOM GENERATION
function randomChoice(ans) {
    const rps = randomItem(["rock", "paper", "scissors"]); // Node.js method that randomly chooses an element of an array
    if (rps === ans) { // Checks for draw condition
        console.log("Tie!");
        console.log(score(), `\nYou: ${ans} vs. Sys: ${rps}`);
        return true;
    } else if (rps === "rock" && ans === "paper") { // Checks for win conditions
        userScore += 1;
        console.log(win, `\n` + score(), `\nYou: ${ans} vs. Sys: ${rps}`);
        return true;
    } else if (rps === "paper" && ans === "scissors") {
        userScore += 1;
        console.log(win, `\n` + score(), `\nYou: ${ans} vs. Sys: ${rps}`);
        return true;
    } else if (rps === "scissors" && ans === "rock") {
        userScore += 1;
        console.log(win, `\n` + score(), `\nYou: ${ans} vs. Sys: ${rps}`);
        return true;
    } else { // Any remaining comparisons default to a loss
        sysScore += 1;
        console.log("You lost...");
        console.log(score(), `\nYou: ${ans} vs. Sys: ${rps}`);
        return true;
    }
}

// INITIATION
await main();