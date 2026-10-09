const readline = require("readline");

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

rl.question("How old are you? ", (age) => {
  console.log("So you're " + age);
  rl.close();
});
