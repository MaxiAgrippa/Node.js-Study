const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output:process.stdout
});

rl.question("How do you do?",answer => {
    console.log(`Your answer: ${answer}`)
});