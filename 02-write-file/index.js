const fs = require("fs");
const readline = require("readline");
const process = require("process");
const { stdin: input, stdout: output } = require("process");

const rl = readline.createInterface({ input, output });
let stream = fs.createWriteStream("02-write-file/text.txt");

console.log("Hello!\nInput the text");
rl.on("line", (input) => {
  if (input == "exit") rl.close();
  else {
    stream.write(`${input} \n`);
    console.log("Input the text");
  }
});

process.on("exit", () => {
  console.log("\nThanks! Bye.");
});
