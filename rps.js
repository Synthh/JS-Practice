import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
import randomItem from 'random-item';

const rl = readline.createInterface({ input, output });
var userScore = 0;
var sysScore = 0;
var win = "You won!";
var score = () => `Score: ${userScore} | ${sysScore}`;

async function main() {
    while (await userInput()) ;
}

async function userInput() {
    const ans = await rl.question("Rock, paper, or scissors? ");
    if (ans?.toLowerCase() === "rock" || ans?.toLowerCase() === "paper" || ans?.toLowerCase() === "scissors") {
        return randomChoice(ans);
    } else {
        console.log("Not a valid input.");
        return true;
    }
}

function randomChoice(ans) {
    const rps = randomItem(["rock", "paper", "scissors"]);
    if (rps === ans) {
        console.log("Tie!");
        console.log(score(), `\nYou: ${ans} vs. Sys: ${rps}`);
        return true;
    } else if (rps === "rock" && ans === "paper") {
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
    } else {
        sysScore += 1;
        console.log("You lost...");
        console.log(score(), `\nYou: ${ans} vs. Sys: ${rps}`);
        return true;
    }
}

await main();