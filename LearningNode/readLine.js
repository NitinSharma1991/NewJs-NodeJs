const rl = require("readline");

let readline = rl.createInterface({
  input: process.stdin,
  output: process.stdout,
});
readline.setPrompt("you cock sucker");
let num = Math.floor(Math.random() * 10 + 1);
let num1 = Math.floor(Math.random() * 10 + 1);
let answer = num + num1;
readline.question(`What is ${num1} + ${num} ? \n`, (userInput) => {
  console.log(userInput, num1, num);
  if (userInput.trim() == answer) readline.close();
  else {
    readline.setPrompt("Enter again");
    readline.prompt();
    readline.on("line", (userInput) => {
      if (userInput.trim() == answer) readline.close();
      else {
        readline.setPrompt(`your answer ${userInput} incoorect `);
        readline.prompt();
      }
    });
  }
});

readline.on("close", () => {
  console.log(`answer is correct`);
});
