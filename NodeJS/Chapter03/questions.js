process.stdout.write("Hello ");
process.stdout.write("World \n\n\n");

const questions = [
    "name? ",
    "doing what?",
    "prefer?"
];

const ask = (i = 0) => {
    process.stdout.write(`\n\n\n ${questions[i]}`);
    process.stdout.write(` > `);
};

ask();

const answers = [];

process.stdin.on('data', data => {
    answers.push(data.toString().trim());
    if (answers.length < questions.length) {
        ask(answers.length);
    }
    else {
        process.exit();
    }
});

process.on('exit', () => {
    const [name, doing, prefer] = answers;
    console.log(`
    
    Thanks for answer.
    Go ${doing} ${name} you can ${prefer}.
    `)
});